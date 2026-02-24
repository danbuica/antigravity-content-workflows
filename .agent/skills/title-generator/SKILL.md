---
name: title-generator
description: Generates high-performing YouTube titles (5 Search, 5 Browse) based on a topic. performing live keyword research and applying psychological hooks.
---

# Title Generator

This skill researchs a topic and generates 10 optimized YouTube titles: 5 for Search (SEO) and 5 for Browse (CTR).

## When to use this skill

- When the user asks for "titles", "headlines", or "video ideas" for a specific topic.
- When the user uses the syntax `@[title-generator] "topic"`.

## How to use it

### 1. Keyword Research (The "Search" Foundation)
**Goal**: Find what people are actually typing into YouTube.
- **Action**: Search for the user's topic on Google/YouTube.
- **Identify**:
    - **Autocomplete**: What long-tail phrases appear?
    - **Competitors**: What keywords are in the top-ranking video titles?
    - **Volume**: Identify the "Core Keyword" (e.g., "n8n tutorial") vs. "Long-tail" ("n8n for beginners 2026").

### 2. Generate Search Titles (SEO Focused)
**Goal**: Rank for the "Core Keyword".
- **Structure**: Front-load the keyword.
- **Target**: solve a specific problem.
- **Quantity**: 5 Titles.
- **Templates**:
    - "{Keyword}: Ultimate Guide ({Year})"
    - "How to {Keyword} in {Time Frame} (Step-by-Step)"
    - "{Keyword} vs {Competitor}: Which is better?"

### 3. Generate Browse Titles (CTR Focused)
**Goal**: Get the click on the Home Page.
- **Psychological Hooks**:
    - **Curiosity**: "I stopped using {Tool}..."
    - **Negativity**: "Why {Tool} is Dead" / "Don't Do This..."
    - **Authority**: "How I made ${Amount} with..."
    - **Time Frame**: "...in 7 Days" / "in 1 Hour"
    - **Epic/Extreme**: "The Ultimate...", "100x Your Productivity"
    - **List**: "7 Ways to...", "Top 10..."
- **Quantity**: 5 Titles.

### 4. Output Generation
Create a markdown file named `titles/titles_<topic_slug>.md` containing the results in a table. (Ensure the `titles/` directory is created if it does not exist).

**Table Format:**

| Type | Title | Hook / Explanation |
| :--- | :--- | :--- |
| **SEARCH** | **n8n Automation Tutorial: From Zero to Hero (2026)** | **Core Keyword**: "n8n Automation". **Promise**: "Zero to Hero". |
| **SEARCH** | ... | ... |
| **BROWSE** | **Why I Quit Python for n8n (And You Should Too)** | **Negativity/Curiosity**: Strong opinion ("Quit Python") creates a gap. |
| **BROWSE** | ... | ... |

### 5. Display Result
- Output the full table to the user.
- Ask if they want to generate a *Script* or *Thumbnail* for any of these titles.
