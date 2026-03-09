# Memory & Context Hooks

> Auto-capture, auto-save, never lose an idea

## Hook Types

| Hook | Trigger | Action |
|------|---------|--------|
| `onDecision` | User makes decision | Log to long-term memory |
| `onIdea` | User shares idea | Capture to SESSION.md |
| `onResource` | URL/doc shared | Save to resources |
| `onContextHigh` | Context >70% | Auto-summarize & save |
| `onSessionEnd` | Session closes | Full summary to Supabase |
| `onError` | Task fails | Log for learning |

## Context Management

```
50% → Checkpoint (silent)
60% → Prepare summary
70% → Auto-save to memory file
80% → Warn user
90% → Force compact with full context preservation
```

## Implementation

```javascript
// Context monitor
const contextHooks = {
  async onMessage(msg) {
    const usage = await getContextUsage();
    
    if (usage > 0.7 && !this.saved) {
      await this.autoSave();
      this.saved = true;
    }
    
    if (usage > 0.8) {
      await this.warnUser();
    }
  },
  
  async autoSave() {
    const summary = await summarizeSession();
    await appendToMemory(summary);
    await logToSupabase(summary);
  }
};

// Idea capture
const captureHooks = {
  patterns: {
    decision: /(?:let's|we'll|decided|going with)/i,
    idea: /(?:what if|could we|idea:|maybe we)/i,
    resource: /https?:\/\/\S+/,
    remember: /(?:remember|don't forget|note that)/i,
  },
  
  async process(msg) {
    for (const [type, pattern] of Object.entries(this.patterns)) {
      if (pattern.test(msg)) {
        await this.capture(type, msg);
      }
    }
  }
};
```

## Storage Targets

| Type | Immediate | Persistent |
|------|-----------|------------|
| Decision | SESSION.md | Supabase context_log |
| Idea | SESSION.md | memory/YYYY-MM-DD.md |
| Resource | SESSION.md | docs/resources.md |
| Summary | memory/YYYY-MM-DD.md | Supabase |

## Auto-Triggers

- **"Remember this"** → Immediate capture
- **URL shared** → Save with context
- **Session idle 30min** → Auto-summarize
- **Before compaction** → Full state save
