---
name: motion-extractor
description: Analyzes video scripts to extract sections where motion animations can be added during editing. Generates detailed prompts for the `motion-animations` skill.
---

# Motion Extractor

This skill analyzes a video script (or a portion of it) and identifies key moments that would benefit from high-quality motion animations. For each identified moment, it generates a precise prompt that can be fed directly to the `motion-animations` skill to create the asset.

## When to use this skill

- When the user provides a video script and asks "where should I put animations?" or "extract animations from this script."
- When planning the visual assets needed for a video edit.
- When you want to systematically generate motion graphics (like UI popups, data flows, counters, or code reveals) to match a spoken narrative.

## How to use it

1.  **Analyze the Script**:
    - Ask the user for the video script or read the provided script.
    - Read through the script to understand the pacing, the core concepts being explained, and the visual metaphors that would enhance the viewer's understanding.

2.  **Identify Animation Opportunities**:
    - Look for moments where:
      - Complex data or numbers are mentioned (e.g., revenue growth, time saved).
      - Code, nodes, workflows, or abstract concepts are being explained.
      - A UI element, chatbox, or software interface is being referenced.
      - A visual metaphor would help retain audience attention (retention hacking).

3.  **Generate the Extraction Report**:
    - Present the extracted animation opportunities in a structured, chronological list.
    - For each animation, you **must** include:
      - **Timestamp/Context**: The specific line or section in the script where the animation should appear.
      - **Animation Name**: A short, descriptive name (e.g., `revenue-counter`, `api-pipeline`).
      - **Background**: Explicitly state if it should have a solid brand background or if it should be `transparent` (for laying over talking-head footage).
      - **Animation Prompt**: A highly detailed, ready-to-copy prompt that the user can feed directly back to the `motion-animations` skill to build the HTML/CSS/GSAP asset. The prompt should specify the colors (from the user's brand), the layout, the timing (e.g., "5-second loop"), and the specific motion mechanics.

4.  **Format Example**:
    ```markdown
    ### 1. The Automation Flow
    - **Context**: "When the user submits the form, it triggers a chain reaction..."
    - **Background**: `transparent` (overlaying your talking head)
    - **Prompt to generate**: "Create an HTML file with a GSAP animation. A transparent background. 3 code nodes connected by glowing dashed lines. Node 1 flashes [Brand Color], sending a glowing orb down the line to Node 2..."
    ```

5.  **Finalize**:
    - Present the list to the user.
    - Offer to immediately start generating the first animation on the list using the `motion-animations` skill.
