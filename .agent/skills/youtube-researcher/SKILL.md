---
name: youtube-researcher
description: Researches trending YouTube video ideas in the user's specified niche. Finds high-performing videos from the last 3-5 days.
---

# YouTube Researcher

This skill helps find viral and trending video ideas for a YouTube creator by analyzing competitors and current news in their niche.

## When to use this skill

- When the user asks for "video ideas", "what's trending", or "youtube research".
- To analyze competitor performance and find gaps or opportunities.

## How to use it

### 1. Trend Discovery (The "What's Hot" Phase)
Before looking for specific videos, find out what everyone is talking about *right now*.
- **Search Queries**:
    - "trending AI automation tools this week"
    - "latest AI news [current month] [current year]"
    - "new no-code AI tools released"
- **Extract Keywords**: Identify 3-5 trending topics (e.g., specific model releases like "OpenAI o3", new tool features like "n8n langgraph integration").

### 2. Targeted Channel Search
Search for videos uploaded in the **last 5 days** from these key authorities.
*Query format*: `site:youtube.com [Channel Name] after:[date-5-days-ago]`

**Creators to Watch:**
- **[Competitor 1]** (@competitor1)
- **[Competitor 2]** (@competitor2)
- **[Competitor 3]** (@competitor3)

### 3. Topic-Based Search
Search for videos covering the **Dynamic Trends** you found in Step 1 AND core niche topics.
*Query format*: `site:youtube.com [Keyword] after:[date-5-days-ago]`

**Core Topics:**
- "[Core Topic 1]"
- "[Core Topic 2]"
- "[Core Topic 3]"

### 4. Analyze & Summarize (The "Trend Overview")
Look for genuinely trending topics and collect verifiable videos that you can actually find via a standard web search. Provide a high-level summary of these trends.

1.  **Identify Trends**: Focus on the overarching topics that are currently gaining traction rather than hitting a specific video quota.
2.  **Verifiable Videos**: Collect videos that actually exist and can be verified through search. Provide links or titles to these verifiable videos.
3.  **Date Awareness**: Prioritize recent videos, but focus on the quality and relevance of the trend over strict date/view count filters.

### 5. Personalized Ranking (The "Channel Fit" Phase)
**AFTER** you have gathered your high-level summary and verifiable videos, analyze the user's channel to rank the trends.

1.  **Analyze User Channel**: Search `site:youtube.com "[User Channel Name]"` or their channel URL to understand their top topics.
2.  **Rank the Candidates**:
    - **Direct Match**: Topics the user has proven success with.
    - **Strategic Gap**: Trending topic the user *hasn't* covered yet.
    - **High Risk/Reward**: Viral hits that are tangentially related.

### 6. Generate Report
Create/Update a markdown file named `research/youtube_research_<date>.md` (e.g. `research/youtube_research_2024-10-24.md`). Ensure the `research/` directory is created if it does not exist.

**Table Format:**
The table should contain the verifiable trending videos you found.

| Video Title | Channel | Views | Posted | Relevance | Why it's interesting |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Title* | *Channel* | *15K* | *2 days* | *High (Gap)* | *Covers trending topic [Trend Name]...* |
