# Folder Naming Conventions

---

## Rules

| Level | Convention | Example |
|-------|-----------|---------|
| Top-level OS folders | `UPPER_CASE` | `DAILY/`, `PROJECTS/`, `SAAS/` |
| Domain folders inside top-level | `UPPER_CASE` | `PROJECTS/QA/`, `SAAS/GROWTH/` |
| Project/app folders | `lower-kebab-case` | `selenium-pom/`, `todo-saas/` |
| Dated archive folders | `YYYY/` or `YYYY-MM/` | `2026/`, `2026-03/` |
| Template folders | `_TEMPLATE` (underscore prefix) | `SAAS/_TEMPLATE/` |
| Special system folders | `_` prefix | `_ARCHIVE/` (if needed) |

---

## Top-Level Structure (never change these names)

```
OS/
├── CONFIG/         ← rules, conventions, env
├── DAILY/          ← all time-based notes
├── PROJECTS/       ← all dev + QA + practice work
├── SAAS/           ← SaaS apps
├── BUSINESS/       ← admin, clients, legal, branding
├── FINANCE/        ← personal + business money
├── DOCS/           ← wiki, learning, reference
├── OS-ARCHITECTURE/← system design docs
└── ARCHIVE/        ← everything dead or completed
```

---

## Project Folder Naming

| Type | Pattern | Examples |
|------|---------|---------|
| SaaS app | `[product-name]-saas` or just `[product-name]` | `todo-saas`, `devflow` |
| Dev project | `[descriptive-name]` | `portfolio-v3`, `link-shortener` |
| QA framework | `[tool]-[pattern]` | `selenium-pom`, `playwright-ts` |
| Practice | `[topic]-practice` or `[tool]-[concept]` | `fastapi-auth`, `sql-joins` |
| Experiment | `try-[thing]` | `try-nextjs-15`, `try-drizzle-orm` |

---

## What NOT to do

| Bad | Good |
|-----|------|
| `New Folder` | `selenium-pom` |
| `my project` | `portfolio-v3` |
| `test` | `try-playwright` |
| `saas stuff` | `todo-saas` |
| `2026 january` | `2026-01` |
