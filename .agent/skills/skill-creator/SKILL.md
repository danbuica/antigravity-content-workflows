---
name: skill-creator
description: Helps create new skills by setting up the directory structure and initial files. Use when the user wants to add a new capability or skill to the agent.
---

# Skill Creator

This skill guides you through the process of creating a new skill for the agent.

## When to use this skill

- When the user asks to "create a new skill", "add a skill", or "teach you a new skill".
- When you identify a repeatable task or workflow that would benefit from being encapsulated as a skill.

## How to use it

1.  **Understand the Skill Goal**:
    - Ask the user (or infer from context) what the skill should do.
    - Determine a short, descriptive name for the skill (e.g., `generate-tests`, `deploy-app`). Use lowercase with hyphens.
    - Draft a clear description for the `description` field in the frontmatter.

2.  **Create the Directory**:
    - Create a new directory at `.agent/skills/<skill-name>/`.
    - If the user specifies a global skill, put it in `~/.gemini/antigravity/skills/<skill-name>/`. Otherwise, default to the workspace `.agent/skills/`.
    - **Optional Structure**: Consider creating `scripts/`, `examples/`, and `resources/` directories if the skill requires helper scripts, reference implementations, or templates.

3.  **Create the `SKILL.md` File**:
    - Create a file named `SKILL.md` inside the new directory.
    - Include the required YAML frontmatter:
      ```yaml
      ---
      name: <skill-name>
      description: <description>
      ---
      ```
    - Add a `# <Skill Name>` header.
    - Add sections for `## When to use this skill` and `## How to use it`.
    - Include the standard folder structure layout in the instructions if relevant:
      ```
      .agent/skills/<skill-name>/
      ├─── SKILL.md       # Main instructions (required)
      ├─── scripts/       # Helper scripts (optional)
      ├─── examples/      # Reference implementations (optional)
      └─── resources/     # Templates and other assets (optional)
      ```

4.  **Populate Content**:
    - Fill in the sections with the instructions provided by the user or based on your understanding of the task.
    - Ensure the instructions are clear, actionable, and follow the agent's capabilities.

5.  **Notify User**:
    - Inform the user that the skill has been created and is ready to use.
