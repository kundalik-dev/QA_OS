# QA OS — System Architecture

> **Philosophy:** One root. Clear separation of concerns. Every folder has a job.
> Built for a QA Analyst — bugs, test cases, automation, SQL, sprints, follow-ups, credentials, reports.
> Template-first. ID everything. Archive, never delete. AI-friendly.

---

## Root Structure

```
QA_OS/
│
├── TODAY.md                          Daily QA command center
│
├── BUGS/                             Centralized bug management
├── CREDENTIALS/                      Credential maps (no real values — password manager only)
├── ENVIRONMENTS/                     Environment configs and status per project
├── SCRUM/                            Sprint planning, standups, reviews, retrospectives
├── FOLLOW-UPS/                       Email and communication tracking
├── TEST-CASES/                       All manual test cases, organized by project
├── AUTOMATION-TESTING/               Automation scripts and health tracking
├── SQL/                              SQL scripts organized by project
├── REPORTS/                          Test reports per sprint / release
│
├── DAILY/                            Time-based personal notes (daily, weekly, monthly, goals)
├── CONFIG/                           Naming conventions, rules, env templates
├── DOCS/                             Personal wiki, AI prompts, resources
├── OS-ARCHITECTURE/                  This file — system design blueprint
└── ARCHIVE/                          Nothing deleted — everything archived here
```

---

## Full Folder Structure

```
QA_OS/
│
├── TODAY.md
│
├── BUGS/
│   ├── ACTIVE/
│   │   └── [PROJECT]/
│   │       └── BUG-###.md            One file per bug
│   ├── RESOLVED/
│   │   └── [PROJECT]/
│   ├── DEFERRED/
│   └── TEMPLATES/
│       ├── bug-template.md           Per-bug detail file
│       └── bug-log.md                Sprint bug tracker (bulk table)
│
├── CREDENTIALS/
│   ├── TEMPLATES/
│   │   └── credentials-template.md
│   └── [PROJECT]/
│       └── credentials-map.md        Metadata only — where to find secrets in password manager
│
├── ENVIRONMENTS/
│   ├── env-overview.md               All-project env status dashboard
│   ├── env-config-template.md
│   ├── DEV/
│   ├── QA/
│   │   └── [PROJECT]-qa-config.md
│   ├── STAGING/
│   ├── UAT/
│   └── PROD/
│
├── SCRUM/
│   ├── SPRINTS/
│   │   └── SPRINT-##/
│   │       ├── sprint-plan.md
│   │       ├── STANDUPS/
│   │       │   └── YYYY-MM-DD.md
│   │       └── sprint-review.md
│   ├── BACKLOG/
│   │   └── qa-backlog.md
│   ├── RETROSPECTIVES/
│   │   └── SPRINT-##-retro.md
│   └── TEMPLATES/
│       ├── sprint-plan-template.md
│       ├── standup-template.md
│       ├── sprint-review-template.md
│       └── retrospective-template.md
│
├── FOLLOW-UPS/
│   ├── ACTIVE/
│   │   └── follow-ups-tracker.md     Master active list
│   ├── RESOLVED/
│   └── TEMPLATES/
│       └── follow-up-template.md
│
├── TEST-CASES/
│   ├── TEMPLATES/
│   │   ├── test-case-template.md
│   │   └── test-suite-index.md
│   └── [PROJECT]/
│       ├── TC-INDEX.md               Suite index for this project
│       ├── functional/
│       ├── regression/
│       ├── smoke/
│       └── negative/
│
├── AUTOMATION-TESTING/
│   ├── TEMPLATES/
│   │   ├── automation-script-template.md
│   │   └── automation-tracker.md
│   ├── FRAMEWORKS/                   Framework setup docs, configs
│   └── SCRIPTS/
│       └── [PROJECT]/
│           ├── smoke/
│           ├── regression/
│           └── api/
│
├── SQL/
│   ├── TEMPLATES/
│   │   ├── sql-script-template.sql
│   │   └── sql-index.md              Master index of all SQL scripts
│   ├── DATABASE/                     Schema files, ERDs, migration docs
│   └── SCRIPTS/
│       └── [PROJECT]/
│           ├── DDL/                  Schema changes (CREATE, ALTER, DROP)
│           ├── DML/                  Data changes (INSERT, UPDATE, DELETE)
│           ├── QUERIES/              SELECT-only scripts and reports
│           ├── SEED/                 Test data setup
│           └── CLEANUP/              Test data teardown
│
├── REPORTS/
│   ├── TEMPLATES/
│   │   └── test-report-template.md
│   └── [PROJECT]/
│       └── RPT-###-sprint-report-YYYY-MM-DD.md
│
├── DAILY/
│   ├── YYYY/
│   │   └── YYYY-MM/
│   │       └── YYYY-MM-DD.md
│   ├── WEEKLY/
│   ├── MONTHLY/
│   ├── YEARLY/
│   ├── GOALS/
│   └── TEMPLATES/
│       ├── daily-template.md
│       ├── weekly-template.md
│       ├── monthly-template.md
│       ├── yearly-template.md
│       └── goals-template.md
│
├── CONFIG/
│   ├── conventions/
│   │   ├── file-naming.md
│   │   ├── folder-naming.md
│   │   ├── git-conventions.md
│   │   └── code-style.md
│   ├── env/
│   │   ├── .env.template
│   │   └── env-vars.md
│   └── rules/
│       ├── workflow-rules.md
│       ├── ai-rules.md
│       └── security-rules.md
│
├── DOCS/
│   ├── PROMPTS/
│   ├── RESOURCES/
│   └── USER-GUIDE/
│
├── OS-ARCHITECTURE/
│   ├── ARCHITECTURE.md               ← YOU ARE HERE
│   └── today-template.md
│
└── ARCHIVE/
    ├── BUGS/
    ├── SPRINTS/
    ├── REPORTS/
    ├── DAILY/
    └── PROJECTS/
```

---

## ID System

| Type | Format | Example | File Location |
|------|--------|---------|---------------|
| Bug | `BUG-###` | `BUG-042` | `BUGS/ACTIVE/[PROJECT]/BUG-042.md` |
| Test Case | `TC-###` | `TC-017` | `TEST-CASES/[PROJECT]/[type]/TC-017.md` |
| Automation Script | `AUTO-###` | `AUTO-005` | `AUTOMATION-TESTING/SCRIPTS/[PROJECT]/` |
| SQL Script | `SQL-###` | `SQL-023` | `SQL/SCRIPTS/[PROJECT]/[type]/SQL-023-desc.sql` |
| Follow-up | `FU-###` | `FU-008` | `FOLLOW-UPS/ACTIVE/FU-008.md` |
| Sprint | `SPRINT-##` | `SPRINT-04` | `SCRUM/SPRINTS/SPRINT-04/` |
| Report | `RPT-###` | `RPT-012` | `REPORTS/[PROJECT]/RPT-012-*.md` |

---

## Daily QA Ritual

```
MORNING
  1. Open TODAY.md — confirm Top 3 priorities
  2. Check BUGS/ACTIVE/[PROJECT]/ — any new bugs assigned? any ready to verify?
  3. Check FOLLOW-UPS/ACTIVE/follow-ups-tracker.md — anything due today?
  4. Write standup → SCRUM/SPRINTS/[current]/STANDUPS/YYYY-MM-DD.md
  5. Check ENVIRONMENTS/env-overview.md — is QA/Staging up?

DURING DAY
  6. New bug found → copy BUGS/TEMPLATES/bug-template.md → BUGS/ACTIVE/[PROJECT]/BUG-###.md
  7. Testing a feature → TEST-CASES/[PROJECT]/[type]/TC-###.md
  8. Run automation → AUTOMATION-TESTING/SCRIPTS/[PROJECT]/
  9. Write SQL for test data / verification → SQL/SCRIPTS/[PROJECT]/[type]/SQL-###.sql
  10. New email to track → FOLLOW-UPS/ACTIVE/follow-ups-tracker.md + FU-###.md

END OF DAY
  11. Update bug statuses
  12. Fill EOD Review in TODAY.md
  13. Note blockers and tomorrow's #1
```

---

## Sprint Cadence

```
SPRINT START
  → Copy sprint-plan-template.md → SCRUM/SPRINTS/SPRINT-##/sprint-plan.md
  → Copy bug-log.md → BUGS/ACTIVE/[PROJECT]/bug-log-SPRINT-##.md
  → Update ENVIRONMENTS/QA/ with new build config
  → Pull from SCRUM/BACKLOG/qa-backlog.md

DURING SPRINT
  → Daily standups → SCRUM/SPRINTS/[sprint]/STANDUPS/YYYY-MM-DD.md
  → One file per bug → BUGS/ACTIVE/[PROJECT]/BUG-###.md
  → Track automation → AUTOMATION-TESTING/TEMPLATES/automation-tracker.md

SPRINT END
  → Fill sprint-review.md
  → Run full regression + update automation-tracker.md
  → Generate test report → REPORTS/[PROJECT]/RPT-###-*.md
  → Write retrospective → SCRUM/RETROSPECTIVES/SPRINT-##-retro.md
  → Archive sprint folder → ARCHIVE/SPRINTS/SPRINT-##/
```

---

## Template Quick Reference

| I need to... | Use this template |
|---|---|
| Log a new bug | `BUGS/TEMPLATES/bug-template.md` |
| Track all sprint bugs | `BUGS/TEMPLATES/bug-log.md` |
| Plan a sprint | `SCRUM/TEMPLATES/sprint-plan-template.md` |
| Write daily standup | `SCRUM/TEMPLATES/standup-template.md` |
| Write sprint review | `SCRUM/TEMPLATES/sprint-review-template.md` |
| Run a retrospective | `SCRUM/TEMPLATES/retrospective-template.md` |
| Write a test case | `TEST-CASES/TEMPLATES/test-case-template.md` |
| Create a test suite index | `TEST-CASES/TEMPLATES/test-suite-index.md` |
| Document an automation script | `AUTOMATION-TESTING/TEMPLATES/automation-script-template.md` |
| Track automation health | `AUTOMATION-TESTING/TEMPLATES/automation-tracker.md` |
| Write a SQL script | `SQL/TEMPLATES/sql-script-template.sql` |
| Find any SQL script | `SQL/TEMPLATES/sql-index.md` |
| Track a follow-up | `FOLLOW-UPS/TEMPLATES/follow-up-template.md` |
| Map credentials | `CREDENTIALS/TEMPLATES/credentials-template.md` |
| Check environment status | `ENVIRONMENTS/env-overview.md` |
| Generate a test report | `REPORTS/TEMPLATES/test-report-template.md` |

---

## Credential & Security Rules

1. **Never store real credentials in any file in this OS**
2. `CREDENTIALS/` stores only: service name, username hint, and password manager location
3. `.env` files — template only; real `.env` lives outside repo and in `.gitignore`
4. If credentials are committed by accident: revoke immediately, rotate, then purge git history
5. `ENVIRONMENTS/` stores URL patterns and config keys only — never secret values

---

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Bug file | `BUG-###.md` | `BUG-042.md` |
| Test case file | `TC-###-short-title.md` | `TC-017-login-invalid-password.md` |
| Automation script | `auto-###-feature-name.py` | `auto-005-login-flow.py` |
| SQL script | `SQL-###-short-desc.sql` | `SQL-023-seed-test-users.sql` |
| Standup note | `YYYY-MM-DD.md` | `2026-03-12.md` |
| Sprint folder | `SPRINT-##` | `SPRINT-04` |
| Report file | `RPT-###-[type]-YYYY-MM-DD.md` | `RPT-012-sprint-report-2026-03-28.md` |
| Follow-up file | `FU-###-subject.md` | `FU-008-pending-api-docs.md` |

---

## How to Use AI With This System

| Task | What to do |
|------|-----------|
| Write a test case | Share the feature ticket + ask AI to fill test-case-template.md |
| Generate SQL for test data | Share the schema + describe the test scenario |
| Write a standup | Share yesterday's bug log + task list → AI fills standup-template.md |
| Summarize sprint bugs | Feed bug-log.md → ask for sprint bug summary |
| Generate test report | Feed sprint-review.md + automation results → ask to fill test-report-template.md |
| Debug flaky automation | Share the script + error → ask AI to diagnose |
| Write regression suite | Share feature list + risk areas → AI populates test-suite-index.md |

---

## CLAUDE.md — Per-Project AI Memory

Every project under `DEV/` and test suites should have a `CLAUDE.md`:

```markdown
# CLAUDE.md — project-name

## What this project is
(1-2 sentences)

## Tech stack
- Language / Framework:
- Key libraries:
- Run command:

## QA context
- Test framework:
- How to run tests:
- Known flaky tests:

## Known issues / gotchas
-

## Current status
- Sprint:
- Last worked on:
- Next task:
- Blockers:
```

---

## Extension Points (Future Automation)

| Script | Purpose | Status |
|--------|---------|--------|
| `scripts/today.py` | Auto-generate TODAY.md via Claude API each morning | Planned |
| `scripts/bug-digest.py` | Weekly summary of open bugs from BUGS/ACTIVE/ | Planned |
| `scripts/sql-runner.py` | Safe SQL runner with pre-run checks | Planned |
| `scripts/coverage-report.py` | Generate test coverage report from TEST-CASES/ | Planned |
| CI integration | Auto-populate REPORTS/ after each automation run | Planned |

---

_Last updated: 2026-03-12 — keep this doc alive as your system evolves._
