---
name: presentation-generator
description: Generates a premium, highly-structured HTML/CSS presentation for YouTube videos based on a script. Focuses on the user's custom aesthetics, colors, and layout preferences.
---

# Presentation Generator

This skill converts a video script into a stunning, "WOW-factor" HTML/CSS presentation designed for high-end YouTube screensharing. It creates a sleek, animated, and structured tabbed UI with rich, extracted information.

## When to use this skill

- When the user asks to "create a presentation", "generate video display", or "make screenshare visuals" for a YouTube video.
- When you are given a script and instructed to build an HTML + CSS UI with an incredible, premium design.

## How to use it

1.  **Analyze the Script & Extract Rich Information**:
    - Ask the user for the script (or if provided, read the script).
    - Determine a `video-name` from the script for the output folder.
    - Identify the distinct chapters/sections.
    - **Extract detailed info & Talking Points:** Do not just put titles and schemas. The presentation must contain actual text, full sentences, and the core *talking points* from the script. Viewers should be able to read along with the substance of what you are saying. You must balance "WOW" diagrams with rich, descriptive text blocks or bulleted talking points.
    - Plan what information belongs in each tab.

2.  **Design for the User's Aesthetics**:
    - **Aesthetics**: Follow the user's specific vibe (e.g., deep dark modes, light minimalist, glassmorphism, neo-brutalism).
    - **Color Palette**:
      - Use the user's **primary** and **secondary** brand colors for energetic accents, glowing text, active states, and highlights.
      - Contrast is key: Ensure readable colors for primary and secondary text based on the background.
    - **Typography**: Use the user's chosen Google Fonts for headings and body text. Text must be large enough to be easily readable on a YouTube video viewed on a phone.
    - **Layout Structure**: Use engaging structures like **Bento-box grids**, split panes, or clean minimalist cards based on the user's layout preferences.

3.  **Implement Advanced Animations & Interactivity**:
    - **Tabbed Interface & Collapsible Sidebar**: Each chapter is a sidebar tab. The sidebar MUST be collapsible (e.g. using a toggle icon/button) to allow the main presentation area to take up the full screen when desired. Only one section is visible at a time.
    - **Staggered Entrances**: When a tab is clicked, the content elements (cards, text, diagrams) should stagger fade-in smoothly (using CSS keyframes and animation delays).
    - **Hover Effects**: Interactive elements should have subtle lift or glow effects on hover to make the UI feel alive during the screenshare.

4.  **Generate Custom Graphics & Diagrams**:
    - Create visual representations of the text using CSS shapes, hand-written SVG code, or complex CSS layouts (e.g., flowcharts, comparison tables, layers diagrams).
    - They must feel integrated with the "WOW" UI, not like cheap afterthoughts. Include glowing nodes or animated arrows if appropriate.

5.  **Create the Project Directory and Files**:
    - Create a new directory at `video-display/<video-name>/` in the workspace root.
    - Create `index.html` containing the semantic HTML structure and embedded JavaScript for handling the tab switching and resetting animation states.
    - Create `style.css` containing all styling. Use CSS variables for colors, typography, and spacing.
    - (Optional) Render generated images into a `video-display/<video-name>/assets/` folder if SVGs/CSS aren't enough.

6.  **Finalize**:
    - Once the files are successfully created, notify the user.
    - Summarize the structural improvements and the specific "WOW" elements you implemented. Remind them to open `index.html` to begin presenting.
