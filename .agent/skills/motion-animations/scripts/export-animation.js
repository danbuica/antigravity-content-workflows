const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function main() {
    const dirName = process.argv[2];
    if (!dirName) {
        console.error("❌ Usage: node export-animation.js <animation-directory-name>");
        console.error("   Example: node export-animation.js revenue-counter");
        process.exit(1);
    }

    const fps = 60;
    const duration = 6; // Set to the loop duration of your animation (6s by default)
    const totalFrames = fps * duration;

    // Resolve paths assuming script is in .agent/skills/motion-animations/scripts/
    const workspaceRoot = path.resolve(__dirname, '../../../../');
    const absolutePath = path.join(workspaceRoot, 'motion-animations', dirName, 'index.html');
    const outPath = path.join(workspaceRoot, 'motion-animations', dirName, 'export-transparent.mov');

    if (!fs.existsSync(absolutePath)) {
        console.error(`❌ HTML file not found at: ${absolutePath}`);
        process.exit(1);
    }

    // Allow overriding width and height (default 1920x1080)
    const width = parseInt(process.argv[3]) || 1920;
    const height = parseInt(process.argv[4]) || 1080;

    console.log(`🎬 Exporting: ${dirName}`);
    console.log(`📍 To: ${outPath}`);
    console.log(`📐 Size: ${width}x${height}`);
    console.log(`⏱  Length: ${duration}s @ ${fps}fps (${totalFrames} frames)`);

    console.log("🚀 Launching headless browser...");
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // Set viewport based on arguments, scale x2 for retina
    await page.setViewport({ width, height, deviceScaleFactor: 2 });

    // Inject code to pause GSAP before it natively auto-starts
    await page.evaluateOnNewDocument(() => {
        window.__GSAP_LOADED__ = new Promise((resolve) => {
            let chk = setInterval(() => {
                if (window.gsap) {
                    window.gsap.ticker.fps(0); // halt auto-ticking
                    window.gsap.globalTimeline.pause(); // pause all timelines
                    window.gsap.globalTimeline.timeScale(1);
                    clearInterval(chk);
                    resolve(true);
                }
            }, 5);
            // Fallback just in case GSAP isn't used
            setTimeout(() => { clearInterval(chk); resolve(false); }, 3000);
        });
    });

    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle0' });

    // Explicitly wait for custom fonts to load so text doesn't look blobby/fallback
    await page.evaluateHandle('document.fonts.ready');

    const hasGsap = await page.evaluate(() => window.__GSAP_LOADED__);

    if (!hasGsap) {
        console.warn("⚠️ GSAP not detected. The script will try to capture real-time frames which may drop quality.");
    } else {
        console.log("✅ Intercepted GSAP. Controlling timeline manually for perfect frames.");
    }

    // Launch FFmpeg
    // Export to Apple ProRes 4444 which gives perfect transparency in Premiere Pro / Final Cut
    const ffmpegArgs = [
        '-y',
        '-f', 'image2pipe',
        '-vcodec', 'png',
        '-r', String(fps),
        '-i', '-', // reads screenshots from stdin
        '-c:v', 'prores_ks',
        '-profile:v', '4444',
        '-pix_fmt', 'yuva444p10le', // Includes Alpha channel explicitly for QuickTime
        outPath
    ];

    const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);

    // For debugging ffmpeg if things fail
    // ffmpegProcess.stderr.on('data', (data) => console.error(data.toString()));

    console.log("📸 Starting frame capture. This will take a moment...");

    for (let frame = 0; frame <= totalFrames; frame++) {
        const timeInSeconds = frame / fps;

        // Advance the GSAP animation carefully frame-by-frame
        if (hasGsap) {
            await page.evaluate((t) => {
                window.gsap.globalTimeline.time(t);
            }, timeInSeconds);
        } else {
            // Wait out native CSS timescale if no GSAP
            await page.waitForTimeout(1000 / fps);
        }

        const screenshotBuf = await page.screenshot({
            type: 'png',
            omitBackground: true // This ensures the background stays perfectly transparent
        });

        ffmpegProcess.stdin.write(screenshotBuf);

        if (frame % Math.floor(totalFrames / 10) === 0) {
            console.log(`⏳ Progress: ${Math.round((frame / totalFrames) * 100)}% (${frame}/${totalFrames})`);
        }
    }

    ffmpegProcess.stdin.end();
    await browser.close();

    console.log(`\n✅ Export finished perfectly!`);
    console.log(`📂 Your video is ready at: /motion-animations/${dirName}/export-transparent.mov`);
    console.log(`🔥 Drag and drop this directly into Premiere or Final Cut!`);
}

main().catch(console.error);
