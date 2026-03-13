# CLAUDE.md — QA OS Context

> Load this file at the start of every session. This is the single source of truth for AI collaboration in this workspace.

---

## Who I Am

- **Name:** Kundalik Jadhav (`kundalik-jadhav`)
- **Role:** QA Analyst — automation + manual testing
- **Projects in scope:** eMember, PenScope
- **Working directory:** `c:\Users\kunda\.A_OS\QA_OS`

### Day-to-day responsibilities

- Filing and tracking bugs (JIRA-style)
- Writing and executing manual test cases (functional, regression, smoke, negative)
- Writing automation scripts (UI, API, regression)
- Running regression suites and reporting pass rates
- Writing and running SQL scripts for test data setup, verification, and cleanup
- Sprint planning, daily standups, sprint reviews, retrospectives
- Tracking follow-up emails and comms with devs, PMs, business stakeholders
- Managing test environments: DEV, QA, Staging, UAT, Prod
- Generating test reports and giving QA sign-off

---

## How to Work With Me

- Use QA-appropriate language: bug IDs, TC IDs, severity/priority, environments, sign-off
- Suggest SQL scripts with pre-run checks and rollback sections
- Structure test cases with preconditions, steps, expected/actual results
- Frame automation in terms of framework, linked TC, and maintenance notes
- **Never suggest running destructive SQL on Prod without explicit approval**
- Be concise and direct — no filler, no summaries of what you just did
- Do not over-engineer. Make the minimum change that solves the problem

---

## Project Structure

```
QA_OS/
├── TODAY.md                          Daily command center
├── BUGS/                             Bug tracking
│   ├── 2026-BUGS/                    Active bugs this year
│   └── BUGS-LIST/                    Bug lists by build
├── MANUAL-TESTING/TEST-CASES/        Manual test cases by project
├── AUTOMATION-TESTING/               Automation scripts and health tracking
├── SQL/                              SQL scripts and templates
│   ├── SCRIPTS/[PROJECT]/            DDL / DML / QUERIES / SEED / CLEANUP
│   ├── TEMPLATES/sql-script-template.sql
│   └── TEMPLATES/sql-index.md
├── REPORTS/                          Test reports (EMEMBER, PENSCOPE)
├── DAILY/                            Daily notes, todos, scrum, follow-ups
│   ├── 2026/                         Date-organized notes
│   ├── SCRUM/                        Standup notes
│   ├── TODOS/                        Task files
│   ├── FOLLOW-UPS/                   Email / comm tracking
│   └── SPRINT-TASK/                  Sprint task tracking
├── DEV/                              Project code (eMember, PenScope, DATA-HUB)
├── SKILLS/                           AI skill definitions
├── TEMPLATES/                        All copy-paste templates
├── CONFIG/                           Naming conventions, rules, env templates
│   ├── conventions/                  file-naming.md, folder-naming.md, git-conventions.md
│   └── rules/                        ai-rules.md, workflow-rules.md, security-rules.md
├── DOCS/                             Wiki, prompts, resources
├── OS-ARCHITECTURE/ARCHITECTURE.md   Full system blueprint
└── ARCHIVE/                          Nothing deleted — everything archived
```

---

## ID System

| Type              | Format                           | Example     | File Location                                          |
| ----------------- | -------------------------------- | ----------- | ------------------------------------------------------ |
| Bug               | `BUG-###`                        | `BUG-042`   | `BUGS/2026-BUGS/BUG-042-slug.md`                       |
| Test Case         | `TC-###`                         | `TC-017`    | `MANUAL-TESTING/TEST-CASES/[PROJECT]/[type]/TC-017.md` |
| Automation Script | `AUTO-###`                       | `AUTO-005`  | `AUTOMATION-TESTING/SCRIPTS/[PROJECT]/`                |
| SQL Script        | `SQL-###`                        | `SQL-023`   | `SQL/SCRIPTS/[PROJECT]/[type]/SQL-023-desc.sql`        |
| Follow-up         | `FU-###`                         | `FU-008`    | `DAILY/FOLLOW-UPS/FU-008.md`                           |
| Sprint            | `SPRINT-##`                      | `SPRINT-04` | `DAILY/SCRUM/SPRINT-04/`                               |
| Report            | `RPT-###`                        | `RPT-012`   | `REPORTS/[PROJECT]/RPT-012-*.md`                       |
| Task              | `task-[slug]-[YYYYMMDD-HHMM].md` | —           | `DAILY/TODOS/`                                         |

---

## Template Quick Reference

| I need to...                 | Template location                       |
| ---------------------------- | --------------------------------------- |
| Log a new bug                | `TEMPLATES/bug-template.md`             |
| Track all sprint bugs        | `TEMPLATES/bug-log.md`                  |
| Write a test case            | `TEMPLATES/test-case-template.md`       |
| Create a test suite index    | `TEMPLATES/test-suite-index.md`         |
| Write daily standup          | `TEMPLATES/standup-template.md`         |
| Write today's command center | `TEMPLATES/today-template.md`           |
| Track a follow-up            | `TEMPLATES/follow-up-template.md`       |
| Map credentials              | `TEMPLATES/credentials-template.md`     |
| Generate a test report       | `TEMPLATES/test-report-template.md`     |
| Write a SQL script           | `SQL/TEMPLATES/sql-script-template.sql` |
| Find any SQL script          | `SQL/TEMPLATES/sql-index.md`            |
| Create a task                | `TEMPLATES/tasks-template.md`           |
| Weekly note                  | `TEMPLATES/weekly-template.md`          |
| Daily note                   | `TEMPLATES/daily-template.md`           |

---

## AI Skills (Trigger Patterns)

These are active skills. Detect the trigger in the user's message and execute the skill.
Read the skill file for full instructions.

| Trigger                                 | Skill File                                    | What it does                                                                                                                                                        |
| --------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message starts with `/bug.create`       | `claude/skills/bug-creator/SKILL.md`          | Creates a structured bug report in `BUGS/2026-BUGS/`. Auto-generates sequential BUG-ID. Optional params: `project=` `tags=` `priority=` `severity=` `build=`        |
| Message starts with `TASK:`             | `SKILLS/create-tasks-skills.md`               | Creates a structured task file in `DAILY/TODOS/`. Parses due date from natural language.                                                                            |
| Message is `#update-skills-list`        | `SKILLS/update-skills-list.md`                | Scans all skill files and updates `SKILLS/skills-list.md`                                                                                                           |
| Message starts with `#update-bugs-list` | `SKILLS/update-bugs-list-skill.md`            | Scans `BUGS/2026-BUGS/`, filters by `BUILD:`, writes bug table to `BUGS/BUGS-LIST/<BUILD>/bugs-list.md`                                                             |

### Skill defaults (Bug Creator)

- `reported_by`: kundalik-jadhav
- `environment`: QA
- `status`: New
- `severity`: Medium
- `priority`: P3
- `project`: Penscope (if not specified)

### Allowed field values

| Field       | Values                                                                     |
| ----------- | -------------------------------------------------------------------------- |
| Severity    | Critical \| High \| Medium \| Low                                          |
| Priority    | P1 \| P2 \| P3 \| P4                                                       |
| Status      | New \| In Progress \| Fixed \| Verified \| Closed \| Deferred \| Won't Fix |
| Environment | Dev \| QA \| Staging \| UAT \| Prod                                        |

---

## File Naming Conventions

- All file names: **lowercase, hyphens** (no spaces, no underscores)
- Exceptions: `CLAUDE.md`, `README.md`, `CHANGELOG.md`, `TODAY.md` stay uppercase
- Always include date in time-sensitive files

| File type  | Pattern                          | Example                                     |
| ---------- | -------------------------------- | ------------------------------------------- |
| Bug file   | `BUG-###-short-title.md`         | `BUG-015-login-button-not-working.md`       |
| Test case  | `TC-###-short-title.md`          | `TC-017-login-invalid-password.md`          |
| Task file  | `task-[slug]-[YYYYMMDD-HHMM].md` | `task-complete-regression-20260312-1030.md` |
| Daily note | `YYYY-MM-DD.md`                  | `2026-03-12.md`                             |
| SQL script | `SQL-###-short-desc.sql`         | `SQL-023-seed-test-users.sql`               |
| Report     | `RPT-###-[type]-YYYY-MM-DD.md`   | `RPT-012-sprint-report-2026-03-28.md`       |
| Follow-up  | `FU-###-subject.md`              | `FU-008-pending-api-docs.md`                |
| Standup    | `YYYY-MM-DD.md`                  | `2026-03-12.md`                             |

---

## Security Rules

1. **Never store real credentials in any file in this OS**
2. `CREDENTIALS/` stores only: service name, username hint, password manager location
3. `.env` files — template only; real `.env` lives outside repo and in `.gitignore`
4. Never share real API keys, passwords, PII, or customer data with AI
5. Never suggest destructive SQL (`DROP`, `TRUNCATE`, bulk `DELETE`) on Prod without explicit user confirmation
6. If credentials are committed by accident: revoke, rotate, purge git history

---

## Daily Workflow

```
MORNING
  1. Open TODAY.md — confirm Top 3
  2. Check BUGS/2026-BUGS/ — new bugs? ready to verify?
  3. Check DAILY/FOLLOW-UPS/ — anything due today?
  4. Write standup → DAILY/SCRUM/YYYY-MM-DD.md

DURING DAY
  5. New bug → NEW BUG: [title] PROJECT: ... (skill auto-creates file)
  6. New task → TASK: [description] (skill auto-creates file)
  7. Run SQL → SQL/SCRIPTS/[PROJECT]/[type]/SQL-###.sql
  8. Update TODAY.md as things change

END OF DAY
  9. Update bug statuses
  10. Fill EOD Review in TODAY.md
  11. Note blockers and tomorrow's #1
```

---

## Sprint Cadence

```
SPRINT START
  → Create sprint plan in DAILY/SCRUM/
  → Create bug-log for sprint in BUGS/
  → Pull from backlog

DURING SPRINT
  → Daily standups → DAILY/SCRUM/YYYY-MM-DD.md
  → One file per bug → BUGS/2026-BUGS/BUG-###.md
  → Track automation

SPRINT END
  → Run full regression
  → Generate test report → REPORTS/[PROJECT]/RPT-###-*.md
  → Archive sprint folder
```

---

## Archive Rule

**Nothing gets deleted. Everything gets archived.**
Move completed/old items to `ARCHIVE/`.

---

## CLAUDE.md Maintenance

After every session where AI helps with decisions:

1. Update relevant project `CLAUDE.md` with new decisions
2. Update "Known issues / gotchas" if something was discovered
3. Update this file if OS structure or rules change

---

_Last updated: 2026-03-13_
