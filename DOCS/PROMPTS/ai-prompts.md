# AI Prompts — What Works

> Prompts that consistently give good results. Add new ones as you discover them.
> Organized by use case. Use with Claude Code or Claude.ai.

---

## Daily Planning

### Morning — Generate TODAY.md
```
Context: My Personal Dev OS
- Yesterday's note: [paste DAILY/2026/2026-MM/YYYY-MM-DD.md]
- Q1 Goals: [paste DAILY/GOALS/2026-Q1-goals.md]
- Active projects: [list names]

Task: Generate today's command center using the today-template structure.
Top 3 should be highest impact. Flag anything overdue in Alerts.
```

### Evening — EOD Summary
```
Here's today's daily note: [paste]
Summarize: what got done, what didn't, and suggest tomorrow's Top 1.
```

---

## Weekly / Monthly Reviews

### Weekly Summary (run Friday)
```
Here are my daily notes for this week: [paste Mon–Thu notes]

Write a weekly review using this structure:
- Last week summary (wins, misses, key lesson)
- This week's goal completion rate
- One pattern you notice
```

### Monthly Review Generator
```
Here are my weekly notes for [Month]: [paste W01–W04 notes]
Also my Q1 goals: [paste]

Generate a monthly review covering:
achievements, misses, goal progress, score. I'll fill in the finance numbers.
```

---

## Goal Tracking

### Gap Analysis
```
My Q1 goals: [paste DAILY/GOALS/2026-Q1-goals.md]
My weekly notes for the last 3 weeks: [paste]

For each goal area: am I on track? What's the gap? What should I do differently?
```

---

## SaaS / Product

### Feature Decision
```
SaaS context: [paste SAAS/[app]/CLAUDE.md]
Feature request: [describe]

Should I build this now? Consider: my current stage, ICP, existing users, effort vs impact.
Give a clear yes/no with reasoning.
```

### Churn Analysis
```
Churned users this month: [paste churn-analysis.md]
User feedback: [paste relevant section]

What's the real reason users are leaving? What's the #1 thing I should fix?
```

---

## Coding

### Stuck on a bug
```
Project: [name]
Context: [paste CLAUDE.md]
Problem: [describe what's happening]
What I tried: [list attempts]
Relevant code: [paste snippet]
What am I missing?
```

### Code Review
```
Review this code for: [security / performance / readability]
Context: [paste CLAUDE.md]
Code: [paste]
Flag issues with severity. Suggest fixes.
```

---

## Session Startup (universal)
```
I'm working on [project name].
CLAUDE.md: [paste]
Today's Top 3: [paste]
My task: [specific task]
```

---

## Prompt History Log

### 2026-03-12 — OS Setup
- Initial folder structure planning
- Template creation for daily/weekly/monthly/yearly/goals
- TODAY.md command center design
- PROJECTS folder enhancement
- SAAS per-app folder structure
- CONFIG rules and conventions

