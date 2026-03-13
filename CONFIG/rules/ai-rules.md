# AI Rules — How to Work With Claude (and AI in General)

> Rules for getting the most out of AI in this OS without losing context or creating security risks.

---

## What to Always Share With AI

| Context to share | File to paste |
|-----------------|--------------|
| Project context | `CLAUDE.md` (project-level) |
| Today's plan | `TODAY.md` |
| Goals | `DAILY/GOALS/YYYY-QX-goals.md` |
| Weekly context | `DAILY/WEEKLY/YYYY-W00.md` |
| SaaS decisions | `SAAS/[app]/CLAUDE.md` |

---

## What to NEVER Share With AI

- Real API keys, passwords, or secrets
- `.env` files with real values
- Real customer email addresses or PII
- Bank account numbers or financial credentials
- Any file from `CONFIG/env/` that has real values filled in

---

## AI Session Startup Template

```
Context:
- Project: [project name]
- CLAUDE.md: [paste content]
- Current task: [what you want to do]
- Constraint: [any limits]

Task:
[your actual request]
```

---

## Prompt Patterns (save these in DOCS/SYSTEMS/ai-prompts.md)

| Situation | Prompt pattern |
|-----------|---------------|
| Morning plan | "Given yesterday's note [paste] and my Q1 goals [paste], generate today's Top 3 and time blocks" |
| Stuck on code | "I'm building [X], here's the problem [describe], here's what I tried [paste code]" |
| Weekly review | "Here are my daily notes for this week [paste all]. Write a weekly review using the weekly-template structure" |
| SaaS decision | "Here's my SaaS context [paste CLAUDE.md]. Should I build [feature]? Consider my ICP and current stage." |
| Code review | "Review this code for [security / performance / readability]. Context: [paste CLAUDE.md]" |

---

## AI Output Rules

- Always review AI-generated code before running it
- Never commit AI code without reading it line by line
- If AI generates a `.env` or config file — check it has no hardcoded secrets
- Add `// AI-generated` comment if keeping AI code in production (for your own reference)
- Trust AI for structure and patterns, not for business decisions

---

## CLAUDE.md Maintenance Rule

After every session where Claude helps you:
1. Update `CLAUDE.md` with any new decisions made
2. Update "Known issues / gotchas" if something was discovered
3. Update "Current status → Next task" before closing

This makes the next session instantly useful.
