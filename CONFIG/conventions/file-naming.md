# File Naming Conventions

> Apply these everywhere — DAILY notes, PROJECTS, SAAS, DOCS. Consistency = AI-searchable.

---

## General Rules
- Use **lowercase** for all file names (except template files like `CLAUDE.md`, `README.md`)
- Use **hyphens** `-` to separate words, never spaces or underscores in file names
- Be **descriptive** — the file name should tell you what's inside without opening it
- Always include **date** in time-sensitive files

---

## By Folder

### DAILY/
| File type | Pattern | Example |
|-----------|---------|---------|
| Daily note | `YYYY-MM-DD.md` | `2026-03-12.md` |
| Weekly review | `YYYY-W00.md` | `2026-W11.md` |
| Monthly review | `YYYY-MM.md` | `2026-03.md` |
| Yearly review | `YYYY-review.md` | `2026-review.md` |
| Quarterly goals | `YYYY-Q0-goals.md` | `2026-Q1-goals.md` |
| Annual goals | `YYYY-annual.md` | `2026-annual.md` |

### PROJECTS/
| File type | Pattern | Example |
|-----------|---------|---------|
| Project folder | `lower-kebab-case` | `selenium-pom/` |
| Feature spec | `spec-[feature-name].md` | `spec-user-auth.md` |
| Test case | `tc-[feature]-[scenario].md` | `tc-login-invalid-pass.md` |
| Bug report | `bug-[id]-[short-desc].md` | `bug-042-login-redirect.md` |
| TIL note | `YYYY-MM-DD-[topic].md` | `2026-03-12-fastapi-deps.md` |
| Changelog | `CHANGELOG.md` | always uppercase |
| AI memory | `CLAUDE.md` | always uppercase |

### SAAS/
| File type | Pattern | Example |
|-----------|---------|---------|
| SaaS app folder | `lower-kebab-case` | `todo-saas/` |
| Metrics monthly | `YYYY-MM-metrics.md` | `2026-03-metrics.md` |
| Feature spec | `spec-[feature-name].md` | `spec-onboarding-v2.md` |
| SOP | `sop-[process-name].md` | `sop-support-response.md` |
| Competitor | `[competitor-name].md` | `notion.md` |

### FINANCE/
| File type | Pattern | Example |
|-----------|---------|---------|
| Monthly budget | `YYYY-MM.md` | `2026-03.md` |
| Monthly expenses | `YYYY-MM-expenses.md` | `2026-03-expenses.md` |
| Annual budget | `YYYY-budget.md` | `2026-budget.md` |
| MRR log | `YYYY-mrr-log.md` | `2026-mrr-log.md` |
| Invoice | `invoice-[client]-YYYY-MM.pdf` | `invoice-webmark-2026-03.pdf` |
| Tax prep | `YYYY-tax-prep.md` | `2026-tax-prep.md` |

### DOCS/
| File type | Pattern | Example |
|-----------|---------|---------|
| Book notes | `book-[title-kebab].md` | `book-company-of-one.md` |
| Course notes | `course-[name-kebab].md` | `course-fastapi-udemy.md` |
| TIL | `YYYY-MM-DD-[topic].md` | `2026-03-12-docker-volumes.md` |
| AI prompt | descriptive name | `prompt-weekly-summary.md` |

---

## What NOT to do
| Bad | Good |
|-----|------|
| `my notes.md` | `2026-03-12.md` |
| `test1.md` | `tc-login-happy-path.md` |
| `NEW FILE.md` | `spec-payment-integration.md` |
| `jan expenses` | `2026-01-expenses.md` |
| `copy of roadmap` | never copy — update the original |
