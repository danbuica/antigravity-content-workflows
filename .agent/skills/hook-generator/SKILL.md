---
name: hook-generator
description: Generates high-retention YouTube video hooks and intros based on specific psychological triggers and the user's personal brand style.
---

# Hook Generator

This skill generates 6 high-impact YouTube hooks and a standard branded intro based on a video topic and style.

## When to use this skill

- When the user asks for "hooks", "video intros", or "scripts" for a YouTube video.
- When the user provides a title and asks "how should I start this?".

## How to use it

### 1. Identify Video Type & Audience
Determine if the video is:
- **Demo/Tutorial**: Result-first. Focus on a specific build.
- **Comparison/Deep-Dive**: Strategic. Focus on tool differences for experienced viewers.
- **Beginner Guide**: Accessible. Focus on low-friction entry points.

### 2. Research Style
Refer to `.agent/skills/hook-generator/style_guide.md` to understand the user's tone, pacing, and words to avoid. Strictly follow these guidelines.

### 3. User Idea Check (Collaborative Phase)
Before generating independent options, **ALWAYS** ask the user: *"Do you have any specific ideas or stories you'd like me to map out for these hooks?"*
- **If User has ideas**: Incorporate them into the hook drafts, ensuring they follow the `style_guide.md` patterns.
- **If User has no ideas**: Proceed to generate the 6 options below independently.

### 4. Generate 6 Hook Options (v2.0)
Each hook should be longer (2-4 sentences) and grounded in a real result or story:
1.  **The Result-First Detail**: Start with a specific win. "I got X working."
2.  **The Comparison Story**: Contrast two tools/approaches literally.
3.  **The Practical Question**: Ask about a specific tool choice.
4.  **The Senior Perspective**: Leverage your 10-year background without "bragging."
5.  **Visual Descriptive Hook**: Describe the demo/b-roll in simple terms.
6.  **The "No-Hype" Preview**: Tell them exactly what they will see by the end.

### 4. Branded Intro
Use the user's standard branded intro after the hook.

### 5. Output
Create a markdown file `hooks/hook_<topic_slug>.md` (Ensure the `hooks/` directory is created if it does not exist).

## Folder Structure
```
.agent/skills/hook-generator/
├─── SKILL.md           # Main instructions
└─── style_guide.md     # User's voice and personality rules
```
