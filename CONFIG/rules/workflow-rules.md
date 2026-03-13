# Workflow Rules

> How work moves through this OS. Follow these to stay organized and not lose context.

---

## The Daily Flow (non-negotiable)

```
Morning  → Generate / open TODAY.md → confirm Top 3
During   → Log everything in daily note (decisions, blockers, ideas)
Evening  → Fill "End of Day Review" → set tomorrow's #1
Friday   → Write weekly note → review goals
Month end → Write monthly note → update finance
Q end    → Update goals file → set next quarter
Dec 31   → Write yearly review → set next year's word + big bets
```

---

## Starting a New Project

1. Decide which `PROJECTS/` subfolder it belongs to (`DEV/`, `QA/`, `API/`, etc.)
2. Create folder using naming convention from `CONFIG/conventions/folder-naming.md`
3. Copy inner structure: `src/`, `docs/`, `README.md`, `CHANGELOG.md`, `CLAUDE.md`
4. Fill in `CLAUDE.md` first — before writing any code
5. Copy `.env.template` → `.env` → add to `.gitignore`
6. `git init` + first commit: `chore: init project`
7. Add to `TODAY.md` active projects section

---

## Starting a New SaaS App

1. Copy `SAAS/_TEMPLATE/` → rename to `SAAS/[app-name]/`
2. Fill `CLAUDE.md` and `PRODUCT/overview.md` first
3. Add to `SAAS/IDEAS/idea-log.md` → mark as "building"
4. Create corresponding `PROJECTS/DEV/active/[app-name]/` for the code
5. Link both from `TODAY.md` system status

---

## When Something Is Done / Dead

| What | Action |
|------|--------|
| Finished project | Move to `PROJECTS/ARCHIVE/` |
| Dead SaaS | Move to `SAAS/ARCHIVE/` |
| Old year's DAILY | Move to `ARCHIVE/DAILY/YYYY/` |
| Completed goal | Mark `[x]` in goals file, add to wins |
| Killed feature | Move to "Killed Features" in roadmap |

**Rule: Nothing gets deleted. Everything gets archived.**

---

## File Update Cadence

| File | Update when |
|------|------------|
| `TODAY.md` | Every morning (generated) + every night (EOD review) |
| Daily note | Continuously through the day |
| `CLAUDE.md` (project) | Every time you make a decision or discover a pattern |
| `SAAS/[app]/GROWTH/metrics/dashboard.md` | Every Friday |
| `SAAS/[app]/PRODUCT/user-feedback.md` | When feedback arrives |
| `SAAS/[app]/CUSTOMERS/support-log.md` | When support ticket resolved |
| Weekly note | Every Friday |
| Monthly note | Last day of month |
| Goals file | Weekly check-in + quarterly update |
| `FINANCE/` monthly files | Last day of month |

---

## Decision Log Rule

Every significant decision (tech choice, product pivot, pricing change) gets logged in:
- The relevant `CLAUDE.md` if it's project-specific
- Daily note on the day it was made
- `SAAS/[app]/PRODUCT/roadmap.md` if it changes direction

---

## Context Handoff Rule (for AI sessions)

When starting a new Claude session on a project:
1. Share `CLAUDE.md` for that project first
2. Share the relevant goals file if needed
3. Share today's note if working on tasks

This gives Claude full context without you re-explaining.
