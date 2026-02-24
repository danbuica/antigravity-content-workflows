---
name: style-changer
description: Guides the user through an interview process to personalize all workspace skills (thumbnails, research, hooks, etc.) to their specific niche, branding, and style.
---

# Style Changer

This skill interviews the user to customize the entire agent workspace to their specific YouTube channel, branding, and niche. Once run, it will systematically update the instructions inside all other generic skills based on the user's answers.

## When to use this skill

- When the user asks to "change the style", "personalize the workspace", "setup my brand", "what is your setup process?", or uses the syntax `@[style-changer]`.
- When a new user clones this template and wants to adapt it to their own channel.

## How to use it

You will act as an onboarding wizard. You will go through the existing skills one by one, asking the user questions to define their style. 

**DO NOT ask all questions at once.** Ask them step-by-step per skill section, wait for the response, and then use your tools (`replace_file_content` or `multi_replace_file_content`) to **modify the exact terms, colors, channels, and examples** in the respective `SKILL.md` files (and `style_guide.md` if applicable) to permanently match the user's preferences.

### Step 1: `youtube-researcher` & `title-generator` (Niche & Competitors)
**Ask the user:**
1. What is your channel's specific niche or main topic?
2. Who are the top 3-5 YouTubers or competitors in your niche that you want to track for trending ideas? (Please provide handles if possible)
3. What are your core, evergreen topics that you talk about most frequently?
4. What is your channel name/URL so I know who YOU are?

**Action:** Once answered, edit `.agent/skills/youtube-researcher/SKILL.md` to replace the generic placeholders (`[Your Niche]`, `[Competitor 1]`, `[Core Topic 1]`) with the user's answers.

### Step 2: `hook-generator` (Tone & Personality)
**Ask the user:**
1. How would you describe your speaking style in videos? (e.g., energetic and hype, calm and educational, analytical and cynical)
2. What are some words or phrases you hate and NEVER want me to write in scripts?
3. What is your standard video intro? (e.g., "Hey guys, welcome back..." or do you prefer a cold open?)

**Action:** Once answered, create or edit `.agent/skills/hook-generator/style_guide.md` to document these exact rules. Also, ensure `.agent/skills/hook-generator/SKILL.md` points accurately to these new style preferences.

### Step 3: `thumbnail-generator` (Visuals & Setup)
**Ask the user:**
1. What is your channel's core visual style for thumbnails? (e.g., minimalist, highly saturated, clean corporate, dark and intense)
2. What is your preferred background style? (e.g., Deep charcoal/dark mode, bright white/light mode, vibrant gradients, abstract neon)
3. What are your specific primary and secondary core accent colors for thumbnails? (Provide Hex codes if possible, e.g., Teal #00E5FF & Orange #FF6D00)
4. Are there any specific graphics or elements you frequently use? (e.g., 3D glassmorphism icons, glowing arrows, connection nodes, bold text boxes)
5. What type of typography do you use for thumbnail text? (e.g., Massive bold sans-serif, Techy monospaced, thick and blocky)
6. What is your preferred lighting style for the subject? (e.g., Cinematic rim light, flat studio lighting, dramatic shadows, neon glow)
7. **Setup Instruction:** Instruct the user to upload a clear cut-out image of themselves (or their avatar) and place it at `.agent/skills/thumbnail-generator/resources/subject.png` (creating the directories if needed). Ask them to confirm when this is done.

**Action:** Once they confirm, update `.agent/skills/thumbnail-generator/SKILL.md` to define their visual style preferences (palette constraints, composition vibes).

### Step 4: `motion-animations` & `motion-extractor` (Brand Colors & UI)
**Ask the user:**
1. What are your brand's primary and secondary accent colors? (Hex codes if possible)
2. Do you prefer light mode or dark mode for your motion graphics and UI overlays?
3. Which Google Fonts do you use for your brand? (Pick one for Headings, one for Body)

**Action:** Once answered, edit both `.agent/skills/motion-animations/SKILL.md` and `.agent/skills/motion-extractor/SKILL.md` to replace the generic colors and fonts with the user's exact branding.

### Step 5: `presentation-generator` (Layout & Aesthetics)
**Ask the user:**
1. When you show presentation slides or graphics, what layout "vibe" do you prefer? (e.g., Apple-style minimalism, dark mode bento-boxes, vibrant gradients, brutalism)

**Action:** Update `.agent/skills/presentation-generator/SKILL.md` to reflect their aesthetic terminology replacing any generic design systems with theirs.

### Step 6: Confirmation
Once all steps are completed, inform the user that their workspace is now fully customized to their brand. Let them know they can call you to generate a title or thumbnail to see their new personalized workspace in action!
