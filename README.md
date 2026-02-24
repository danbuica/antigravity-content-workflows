# AI YouTube Creator Workspace

Welcome to the AI YouTube Creator Workspace! This template provides a complete suite of AI-powered "skills" to automate, streamline, and level up your entire YouTube content creation workflow. 

This workspace is designed to be fully personalized to **your** specific channel, branding, and niche.

## 🚀 What's Included?

This workspace comes pre-loaded with specific Agent Skills designed to handle different parts of the YouTube production process:

- **🕵️‍♂️ youtube-researcher**: Analyzes competitors and news in your niche to find verifiable viral video topics and gaps you can exploit.
- **📝 title-generator**: Generates 10 high-performing YouTube titles (5 SEO-focused, 5 CTR-focused) based on a topic using keyword research and psychological triggers.
- **🪝 hook-generator**: Creates high-retention video hooks and intros tailored perfectly to your tone of voice and speaking style.
- **🎨 thumbnail-generator**: Proposes core concepts and generates high-quality YouTube thumbnails via DALL-E 3 matching your exact visual aesthetic and colors.
- **🎬 motion-extractor**: Analyzes your video scripts to pinpoint exactly where on-screen motion graphics or B-roll should be added.
- **✨ motion-animations**: Generates stunning, brand-aligned motion graphics (CSS/HTML animations) that you can record and use in your edits.
- **📊 presentation-generator**: Builds premium, highly-structured HTML/CSS presentations based on your scripts with your custom aesthetics.
- **⚙️ style-changer**: An onboarding wizard that interviews you to personalize all the skills above to your specific brand.
- **🛠️ skill-creator**: A utility skill to help you build out *new* capabilities for your agent.

---

## 🛠️ Step 1: Initial Setup

1. **API Keys**: Rename or create a `.env` file in the root directory. You will need to add your OpenAI API key for tools like the thumbnail generator to work.
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

2. **Your Subject Image**: For the `thumbnail-generator` to work properly with your face/avatar, place a clear cut-out image of yourself (transparent background preferred) at the following path:
   `.agent/skills/thumbnail-generator/resources/subject.png`

---

## 🎨 Step 2: Personalize Your Brand (Start Here!)

Out of the box, this workspace uses generic placeholders. **The absolute first thing you must do** is run the Style Changer skill to adapt the agent to your channel.

In the chat interface, run the following command to begin your onboarding interview:

```
@style-changer I’m ready to set up my brand. Let's go through the steps.
```

The AI will ask you questions step-by-step about:
- Your main niche and top competitors (for the Researcher).
- Your speaking style, tone, and standard intro (for the Hook Generator).
- Your brand colors, preferred thumbnail backgrounds, and aesthetic (for Thumbnails, Presentations, and Animations).

Answer the questions, and the agent will automatically rewrite the underlying `SKILL.md` files in this workspace so that every task it does from now on is perfectly tuned to **you**.

---

## ⚡ Step 3: Example Workflows

Once your style is set up, you can chain these skills together to create content fast. Here's a standard workflow:

1. **Find an Idea**: "Research what’s trending in my niche right now."
2. **Title the Video**: "Generate 10 titles for the topic: [Chosen Topic]."
3. **Write the Hook**: "Write a high-retention hook for the title: [Chosen Title]."
4. **Thumbnail Concept**: "Generate a thumbnail for this video using my style guidelines."
5. **Add Visuals**: "Analyze this script and extract the best moments for motion graphics, then build the first animation."

Happy creating!
