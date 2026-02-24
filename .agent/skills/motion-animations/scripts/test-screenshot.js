const puppeteer = require('puppeteer');
const path = require('path');

async function test() {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 400, deviceScaleFactor: 2 });

    // Fix path to point correctly to workspace
    const absolutePath = path.resolve(__dirname, '../../../../motion-animations/revenue-counter/index.html');
    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');

    // go to middle of animation
    await page.evaluate(() => {
        window.gsap.globalTimeline.time(2.5);
    });

    await page.screenshot({
        path: 'test-screenshot.png',
        type: 'png',
        omitBackground: true
    });
    console.log("Screenshot saved.");
    await browser.close();
}
test();
