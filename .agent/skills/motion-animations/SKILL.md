---
name: motion-animations
description: Helps you create stunning motion animations in a dedicated directory using the user's specific brand colors and typography.
---

# Motion Animations

This skill assists in generating high-quality, code-based motion animations, ensuring they align perfectly with our premium brand aesthetics and colors. It outputs the animations into a new directory named `motion-animations`.

## When to use this skill

- When the user asks to "create a motion animation", "build an animated graphic", "add some motion", or similar requests.
- When generating visual, code-driven (HTML/CSS/JS) animations to illustrate concepts or enhance UI.

## How to use it

1.  **Analyze the Animation Request**:
    - Ask the user (or gather from context) what kind of animation is needed, the subject, and the desired motion behavior (e.g., flowing data, rotating elements, infinite loops).
    - Determine a descriptive name for the specific animation (e.g., `data-flow`, `hero-graphic`).

2.  **Create the Directory and Files**:
    - Create a new directory at `motion-animations/<animation-name>/` in the workspace root.
    - Inside this directory, create the necessary files: `index.html` (for structure), `style.css` (for styles and keyframes), and optionally `script.js` (for complex logic).

3.  **Apply Brand Aesthetics**:
    - **Base/Background**: Can be deep dark mode or `transparent` depending on the use case.
    - **Accents/Highlights**: Use the user's primary `[Brand Color 1]` and secondary `[Brand Color 2]` for moving elements, glows, borders, and active states.
    - **Text**: Use readable contrast colors for primary text and secondary text.
    - **Typography**: Utilize the user's preferred Google Fonts `[Heading Font]` (headings) and `[Body Font]` (body text).
    - Emphasize the user's specific design style (e.g., glassmorphism, minimalism, flat design).

4.  **Implement the Animation**:
    - Use pure CSS `@keyframes` whenever possible for maximum performance.
    - Apply smooth easing functions (like `cubic-bezier`), staggered delays, and infinite or forwards-fill behaviors to make the animation fluid and premium.
    - If the animation requires complex DOM manipulation or precise timing controls, write the necessary JavaScript in `script.js`.

5.  **Exporting to Video (Optional)**:
    - If the user wants to download the animation as a transparent video file to use in a video editor (like Premiere or Final Cut), use the provided export script.
    - Ensure `ffmpeg` is installed on their system (`brew install ffmpeg` on Mac).
    - Navigate to `.agent/skills/motion-animations/scripts/` and run `npm install` (if not done previously).
    - Run `npm run export <animation-name>` (e.g., `npm run export revenue-counter`).
    - The script uses Puppeteer and FFmpeg to generate a perfectly smooth, fully transparent `export-transparent.mov` (Apple ProRes 4444) file in the animation's directory.
    - **Note:** For perfect loop timing and transparency, animations should ideally use GSAP (`gsap.globalTimeline`) as the export script automatically controls its timeline frame-by-frame.

6.  **Finalize**:
    - Verify that the layout and animation render correctly.
    - Inform the user that the files have been created, briefly describe the implemented motion.
    - Instruct them to open `motion-animations/<animation-name>/index.html` to preview the result, or point them to the `.mov` file if exported.
