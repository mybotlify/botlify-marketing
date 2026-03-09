# Botlify Harness Architecture

> Inspired by AlphaClaw, Anthropic's agent patterns, and self-improving AI research

## Overview

The Botlify Harness is the production infrastructure layer that wraps the AI agent, providing:
- **Setup & Onboarding** — Web-based wizard, no CLI required
- **Self-Healing** — Watchdog with crash recovery and auto-repair
- **Memory Persistence** — Short-term, long-term, and episodic memory
- **Version Control** — Git-backed rollback for every action
- **Observability** — Full logging, metrics, and debugging
- **Self-Improvement** — Reflexion loops and learning from experience

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     BOTLIFY HARNESS                         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Setup UI   │  │  Watchdog   │  │   Webhooks  │         │
│  │  (Wizard)   │  │  (Health)   │  │  (Triggers) │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                │                 │
│         └────────────────┼────────────────┘                 │
│                          │                                  │
│                    ┌─────▼─────┐                           │
│                    │    API    │                           │
│                    │  (Express)│                           │
│                    └─────┬─────┘                           │
│                          │                                  │
├──────────────────────────┼──────────────────────────────────┤
│                          │                                  │
│    ┌─────────────────────▼─────────────────────┐           │
│    │              AI AGENT CORE                 │           │
│    ├────────────────────────────────────────────┤           │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐   │           │
│    │  │  Memory  │ │  Skills  │ │  Tools   │   │           │
│    │  │  System  │ │  Engine  │ │  Runner  │   │           │
│    │  └──────────┘ └──────────┘ └──────────┘   │           │
│    │                                            │           │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐   │           │
│    │  │ Reflexion│ │ Context  │ │  Model   │   │           │
│    │  │  Loops   │ │ Manager  │ │  Router  │   │           │
│    │  └──────────┘ └──────────┘ └──────────┘   │           │
│    └────────────────────────────────────────────┘           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                      DATA LAYER                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  SQLite  │  │  Git     │  │ Supabase │  │  Redis   │   │
│  │  (Local) │  │  (Audit) │  │  (Long)  │  │  (Cache) │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Setup UI (Web Dashboard)

Password-protected web interface for:
- **Onboarding Wizard** — Step-by-step first-time setup
- **Provider Configuration** — API keys for Anthropic, OpenAI, etc.
- **Channel Pairing** — Telegram, Discord, WhatsApp
- **File Browser** — View/edit workspace files
- **Logs & Metrics** — Real-time observability

```
/setup           → Onboarding wizard
/dashboard       → Main control panel
/providers       → API key management
/channels        → Messaging integrations
/files           → Workspace explorer
/logs            → Event & error logs
```

### 2. Watchdog (Self-Healing)

Monitors agent health and automatically recovers from failures:

```javascript
// Watchdog capabilities
- Crash detection (process exits)
- Crash-loop prevention (backoff)
- Auto-repair (run diagnostics)
- Notification (Telegram/Discord alerts)
- Heartbeat monitoring
```

**Recovery Flow:**
```
Agent crashes → Detect → Log → Attempt restart → 
If fails → Run auto-repair → 
If fails again → Notify user → Enter safe mode
```

### 3. Memory System (Three-Tier)

Based on human memory architecture:

| Tier | Storage | Duration | Purpose |
|------|---------|----------|---------|
| **Short-term** | In-memory/Redis | Session | Current conversation context |
| **Long-term** | Supabase | Forever | Facts, preferences, decisions |
| **Episodic** | Vector DB | Forever | Semantic search of past experiences |

**Memory Hooks:**
```javascript
// Auto-triggered on events
onDecision()     → Log to long-term memory
onUserPreference() → Store in user profile
onError()        → Log to episodic for learning
onSessionEnd()   → Summarize and persist
onContextHigh()  → Auto-compact and save
```

### 4. Skills Engine

Progressive disclosure architecture (Anthropic-inspired):

```
skill-name/
├── SKILL.md          # Level 1: Always loaded (~50 tokens)
├── scripts/          # Level 2: Loaded when relevant
│   ├── validate.js
│   └── process.js
├── references/       # Level 3: Loaded on demand
│   └── deep-docs.md
└── assets/           # Templates, configs
```

**Skill Lifecycle:**
```
1. Match skill to user intent (semantic)
2. Load Level 1 (YAML frontmatter)
3. If needed, load Level 2 (SKILL.md body)
4. If needed, load Level 3 (references)
5. Execute skill
6. Log result for learning
```

### 5. Reflexion Loops (Self-Improvement)

Based on NeurIPS research on self-improving agents:

```
┌─────────────┐
│   Execute   │
│   Action    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Observe   │
│   Result    │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│   Reflect   │────▶│   Store     │
│   (Critique)│     │   Learning  │
└──────┬──────┘     └─────────────┘
       │
       ▼
┌─────────────┐
│   Improve   │
│   (Revise)  │
└──────┬──────┘
       │
       ▼
    [Retry if needed]
```

**Implementation:**
```javascript
async function executeWithReflection(task) {
  const result = await execute(task);
  
  if (!result.success) {
    const reflection = await reflect(task, result);
    await storeReflection(reflection);
    
    const improvedTask = await revise(task, reflection);
    return executeWithReflection(improvedTask);
  }
  
  return result;
}
```

### 6. Context Manager

Monitors and manages context window usage:

```javascript
// Context tracking
onMessage() → Calculate tokens used
at 50%      → Log checkpoint
at 60%      → Start preparing summary
at 70%      → Auto-save to memory
at 80%      → Warn user, suggest wrap-up
at 90%      → Force compact with full summary
```

### 7. Model Router

Intelligent routing to optimal model based on task:

```javascript
const routingRules = {
  // Task type → Model
  'simple_chat':    'haiku',      // Cheap, fast
  'code_generation': 'sonnet',    // Good balance
  'complex_reasoning': 'opus',    // Best quality
  'research':        'perplexity', // Web search
  'image':           'gpt4v',      // Vision
};

// Cost-aware routing
if (user.tier === 'free') {
  return 'haiku';  // Always cheapest
}
if (user.budget.remaining < threshold) {
  return downgradeModel(preferredModel);
}
```

---

## Git-Backed Audit Trail

Every agent action is version controlled:

```bash
# Auto-commit on changes
git add -A
git commit -m "[auto] ${action_summary}"
git push origin main

# Rollback capability
git revert HEAD~1  # Undo last action
git checkout HEAD~5 -- file.md  # Restore specific file
```

---

## Anti-Drift Prompts

Injected system prompts to maintain agent discipline:

```markdown
## MANDATORY BEHAVIORS
1. Always log decisions to memory
2. Never delete without confirmation
3. Commit changes with meaningful messages
4. Track context usage, warn at 70%
5. Summarize before session ends

## PROHIBITED ACTIONS
1. No external API calls without user approval
2. No sensitive data in logs
3. No actions that can't be undone
```

---

## Deployment Options

### Option A: Managed (We Host)
```
User → Botlify Cloud → Their Agent
- Zero setup
- We handle infrastructure
- User pays subscription + BYOK
```

### Option B: Self-Hosted
```
User → Their Server → Their Agent
- Full control
- Docker or bare metal
- User handles infrastructure
```

### Option C: Hybrid
```
User → Botlify Cloud ← Their Local Agent
- Cloud dashboard & memory
- Local execution
- Best of both worlds
```

---

## Security Model

```
┌─────────────────────────────────────┐
│          USER BOUNDARY              │
├─────────────────────────────────────┤
│  - API keys encrypted at rest       │
│  - Secrets in vault, never in chat  │
│  - Audit log of all actions         │
│  - Role-based access control        │
│  - Data never leaves user's control │
└─────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: Core (Week 1)
- [ ] Basic harness with Setup UI
- [ ] Watchdog with crash recovery
- [ ] Memory persistence (Supabase)
- [ ] Single-model support

### Phase 2: Intelligence (Week 2)
- [ ] Skills engine
- [ ] Reflexion loops
- [ ] Context manager
- [ ] Model router

### Phase 3: Scale (Week 3)
- [ ] Multi-user support
- [ ] Team features
- [ ] Advanced observability
- [ ] Self-improvement metrics

---

## References

- [AlphaClaw](https://github.com/chrysb/alphaclaw) — Production harness inspiration
- [Anthropic: Building Effective Agents](https://docs.anthropic.com/) — Skill architecture
- [Self-Improving AI (arXiv)](https://arxiv.org/html/2512.05356v1) — Reflexion patterns
- [Yohei Nakajima](https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/) — Agent improvement techniques
