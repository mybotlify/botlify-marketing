# Botlify Research Assistant

> Self-improving deep research agent based on MCP-Agent patterns and NeurIPS research

## Overview

The Research Assistant is a specialized agent mode that:
- Conducts **deep research** on any topic autonomously
- **Iteratively refines** its approach based on findings
- **Self-improves** by learning from past research sessions
- Produces **structured reports** with citations

---

## Core Capabilities

### 1. Deep Research Mode

Unlike simple Q&A, the Research Assistant:

```
User: "Research the current state of AI agent frameworks"

Agent:
1. Breaks down into sub-questions
2. Searches multiple sources (web, papers, code)
3. Cross-references and validates
4. Synthesizes findings
5. Identifies gaps
6. Iterates until comprehensive
7. Produces structured report
```

### 2. Research Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    RESEARCH PIPELINE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│  │  PLAN    │───▶│  SEARCH  │───▶│  ANALYZE │             │
│  │          │    │          │    │          │             │
│  │ - Break  │    │ - Web    │    │ - Extract│             │
│  │   down   │    │ - Papers │    │ - Verify │             │
│  │ - Scope  │    │ - Code   │    │ - Connect│             │
│  └──────────┘    └──────────┘    └──────────┘             │
│                                        │                   │
│                                        ▼                   │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│  │  REPORT  │◀───│ CRITIQUE │◀───│SYNTHESIZE│             │
│  │          │    │          │    │          │             │
│  │ - Format │    │ - Gaps?  │    │ - Combine│             │
│  │ - Cite   │    │ - Iterate│    │ - Rank   │             │
│  │ - Export │    │ - Improve│    │ - Theme  │             │
│  └──────────┘    └──────────┘    └──────────┘             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Self-Improvement Mechanisms

Based on the research, we implement three levels of self-improvement:

### Level 1: Reflexion (Per-Session)

```javascript
// After each research step
async function reflectOnStep(step, result) {
  const reflection = await critique({
    what_worked: [],
    what_failed: [],
    what_to_try_next: [],
  });
  
  if (reflection.should_retry) {
    return retryWithImprovement(step, reflection);
  }
  
  storeReflection(reflection);  // For future sessions
  return result;
}
```

### Level 2: Self-Generated Curriculum (Across Sessions)

The agent tracks what research topics it's good/bad at:

```javascript
// After completing research
await updateSkillProfile({
  topic: 'AI frameworks',
  success_rate: 0.85,
  common_mistakes: ['missed academic sources'],
  learned_strategies: ['check arXiv first'],
});

// Before new research
const weakAreas = await getWeakAreas();
if (topic.overlaps(weakAreas)) {
  prioritize('additional_verification');
}
```

### Level 3: Strategy Evolution (Long-Term)

```javascript
// Track which strategies work
const strategies = {
  'breadth_first_search': { success: 45, fail: 12 },
  'depth_first_dive': { success: 28, fail: 8 },
  'expert_sources_first': { success: 62, fail: 5 },
};

// Evolve over time - favor what works
function selectStrategy(topic) {
  const weights = calculateWeights(strategies);
  return weightedSelect(strategies, weights);
}
```

---

## Research Tools

### Built-in Search Providers

| Provider | Use Case | Cost |
|----------|----------|------|
| Brave Search | General web | Free tier |
| Perplexity | AI-optimized | Per query |
| Exa | Semantic/neural | Per query |
| arXiv API | Academic papers | Free |
| GitHub API | Code/repos | Free |
| Semantic Scholar | Citations | Free |

### Tool Integration

```javascript
const researchTools = {
  web_search: braveSearch,
  academic_search: arxivSearch,
  code_search: githubSearch,
  citation_graph: semanticScholar,
  
  // Analysis tools
  summarize: llmSummarize,
  extract_claims: claimExtractor,
  verify_claim: factChecker,
  
  // Output tools
  generate_report: reportGenerator,
  create_bibliography: bibGenerator,
  export_markdown: mdExporter,
};
```

---

## Report Structure

Research outputs follow a consistent structure:

```markdown
# Research Report: [Topic]

## Executive Summary
[2-3 paragraph overview]

## Key Findings
1. Finding 1 [Source]
2. Finding 2 [Source]
3. ...

## Detailed Analysis

### [Subtopic 1]
[Analysis with inline citations]

### [Subtopic 2]
[Analysis with inline citations]

## Methodology
- Sources searched: [list]
- Time spent: [duration]
- Iterations: [count]
- Confidence level: [high/medium/low]

## Gaps & Limitations
- [What couldn't be determined]
- [Areas needing more research]

## References
[Numbered bibliography]

## Research Trace
[Collapsible log of all steps taken]
```

---

## User Interface

### Trigger Research Mode

```
User: /research [topic]
User: "Deep dive into [topic]"
User: "Research and report on [topic]"
```

### Progress Updates

```
🔬 Research started: "AI agent frameworks"

📋 Plan created:
  - Sub-question 1: What frameworks exist?
  - Sub-question 2: How do they compare?
  - Sub-question 3: What's trending?

🔍 Searching... (3 sources queried)
📊 Analyzing... (12 documents found)
🔄 Iteration 2: Found gap in academic sources
🔍 Searching arXiv... (8 papers found)
✅ Research complete

📄 Report ready: [link to full report]
```

### Configuration Options

```javascript
const researchConfig = {
  depth: 'deep' | 'standard' | 'quick',
  maxIterations: 5,
  sources: ['web', 'academic', 'code'],
  outputFormat: 'markdown' | 'pdf' | 'notion',
  citations: 'inline' | 'footnote' | 'endnote',
  includeTrace: true,  // Show methodology
};
```

---

## Learning & Memory Integration

### Session Memory
- Current research state
- Intermediate findings
- Active hypotheses

### Long-Term Memory
- Past research on similar topics
- User preferences for sources/format
- Successful strategies for topic types

### Episodic Memory (Semantic Search)
```javascript
// Before starting new research
const relatedPast = await searchEpisodicMemory({
  query: currentTopic,
  limit: 5,
});

if (relatedPast.length > 0) {
  // Incorporate past learnings
  injectContext(relatedPast);
}
```

---

## Cost Management

Research can be expensive (many API calls). We implement:

### Budget Controls
```javascript
const budget = {
  maxSearches: 20,
  maxLLMCalls: 50,
  maxCost: user.researchBudget,  // e.g., $2 per research
};

// Stop if budget exceeded
if (currentCost > budget.maxCost) {
  return partialReport({
    status: 'budget_limit',
    findingsSoFar: findings,
    recommendedBudgetIncrease: estimateCompletion(),
  });
}
```

### Efficient Search
```javascript
// Cache frequent queries
const cached = await checkCache(query);
if (cached && cached.age < '24h') {
  return cached.results;
}

// Batch similar queries
const batched = batchSimilarQueries(pendingQueries);
```

---

## Implementation Plan

### Phase 1: Basic Research (3 days)
- [ ] Research command parser
- [ ] Multi-source search integration
- [ ] Basic report generation
- [ ] Progress updates

### Phase 2: Self-Improvement (3 days)
- [ ] Reflexion loops per step
- [ ] Strategy tracking
- [ ] Learning from past sessions
- [ ] Gap identification

### Phase 3: Polish (2 days)
- [ ] Report templates
- [ ] Export formats
- [ ] Budget controls
- [ ] User preferences

---

## Example Session

```
User: /research "best practices for building AI agents in 2026"

🔬 Starting deep research...

📋 Research plan:
1. What are current AI agent architectures?
2. What patterns have emerged as best practices?
3. What do leading companies recommend?
4. What does academic research say?
5. What are common pitfalls to avoid?

🔍 Phase 1: Searching web sources...
   - Found 15 relevant articles
   - Key sources: Anthropic docs, OpenAI cookbook, LangChain guides

🔍 Phase 2: Searching academic sources...
   - Found 8 relevant papers
   - Key: "Self-Improving AI Agents" (2512.05356)
   - Key: "Building Effective Agents" (Anthropic)

🔄 Reflecting on findings...
   - Gap identified: Missing practical implementation examples
   - Adjusting: Adding code search

🔍 Phase 3: Searching code examples...
   - Found 12 relevant repos
   - Key: AlphaClaw, MCP-Agent, AutoGen

📊 Synthesizing 35 sources...

✅ Research complete!
   - 5,200 words
   - 35 sources cited
   - High confidence

📄 Full report: [Attached]

Quick summary:
> Best practices for AI agents in 2026 center on three pillars:
> modular architecture with clear role separation, self-improvement
> through reflexion loops, and persistent memory systems. Leading
> implementations (AlphaClaw, Claude Code) use skill-based progressive
> disclosure and maintain version-controlled audit trails...

Would you like me to:
1. Dive deeper into any section?
2. Find more sources on a specific topic?
3. Export in a different format?
```

---

## References

- [MCP-Agent Deep Research](https://thealliance.ai/blog/building-a-deep-research-agent-using-mcp-agent)
- [Self-Improving AI Agents (arXiv)](https://arxiv.org/html/2512.05356v1)
- [Yohei Nakajima: Self-Improving Agents](https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/)
- [Reflexion: Language Agents with Verbal RL](https://arxiv.org/abs/2303.11366)
