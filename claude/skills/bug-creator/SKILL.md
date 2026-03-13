---
name: bug-creator
description: Creates a structured bug report markdown file in BUGS/2026-BUGS/. Always trigger when the user message starts with "/bug.create". Parses the quoted title and optional inline parameters project=, tags=, priority=, severity=, build=. Auto-generates the next sequential BUG-ID, applies defaults for any missing fields, and writes a fully formatted bug file. Use this skill any time the message begins with /bug.create — even if the title is short or parameters are missing.
---

# Bug Creator

Creates a bug report markdown file in `BUGS/2026-BUGS/` when the user starts a message with `/bug.create`.

---

## Trigger

Message starts with:

```
/bug.create "<title>" [project=...] [tags=...] [priority=...] [severity=...] [build=...]
```

All parameters are optional and can appear in any order after the title. Tags are comma-separated.

**Examples:**

```
/bug.create "Payment gateway timeout" project=Penscope build=R3.46
/bug.create "Login button not working" tags=auth priority=P1 build=R3.46
/bug.create "Login button not clickable" priority=P1 severity=Critical tags=UI,Login build=4.2.1
/bug.create "Profile update fails" project=eMember tags=profile,api priority=P2 severity=High build=R3.46
```

---

## Step 1 — Parse Input

Extract from the user message:

| Parameter                              | YAML field | Default if missing |
| -------------------------------------- | ---------- | ------------------ |
| Title (quoted string after the command) | `title`    | — (required)       |
| `project=`                             | `project`  | `Penscope`         |
| `tags=`                                | `tags`     | `[]`               |
| `priority=`                            | `priority` | `P3`               |
| `severity=`                            | `severity` | `Medium`           |
| `build=`                               | `build`    | _(blank)_          |

Fixed values (never change):

```
status: New
environment: QA
reported_by: kundalik-jadhav
reported_date: <today YYYY-MM-DD>
assigned_to: (blank)
target_fix_version: v0.0.0
```

---

## Step 2 — Validate Field Values

Only use these allowed values. If the user provides something outside the list, fall back to the default.

| Field         | Allowed values                                                                     |
| ------------- | ---------------------------------------------------------------------------------- |
| `severity`    | `Critical` / `High` / `Medium` / `Low`                                             |
| `priority`    | `P1` / `P2` / `P3` / `P4`                                                          |
| `status`      | `New` / `In Progress` / `Fixed` / `Verified` / `Closed` / `Deferred` / `Won't Fix` |
| `environment` | `Dev` / `QA` / `Staging` / `UAT` / `Prod`                                          |

---

## Step 3 — Generate BUG ID

1. Scan all files in `BUGS/2026-BUGS/`
2. Find the highest `BUG-###` number in existing filenames
3. Increment by 1 → new ID

If folder is empty or doesn't exist → start at `BUG-001`. Create the folder if it doesn't exist.

---

## Step 4 — Build Filename

Format: `BUG-###-<slug>.md`

Slug rules:

- Derived from bug title
- Lowercase, spaces → hyphens
- Max 6 words

Example: `BUG-015-login-button-not-working.md`

---

## Step 5 — Write the File

File path: `BUGS/2026-BUGS/<filename>.md`

Use this exact template:

```markdown
---
type: bug
bug_id: BUG-###
jira_id:
jira_link:
project: <project>
title: <title>
severity: <severity>
priority: <priority>
status: New
environment: QA
reported_by: kundalik-jadhav
reported_date: <YYYY-MM-DD>
assigned_to:
target_fix_version: v0.0.0
build: <build>
tags:
  - <tag1>
  - <tag2>
---

# BUG-### — <title>

## Summary

> One sentence: what is broken and where.

## Steps to Reproduce

1.
2.
3.

## Expected Result

## Actual Result

## Environment Details

- **Environment:** QA
- **Build / Version:** <build>
- **Browser / Device:**
- **OS:**
- **Test Data Used:**

## Severity & Impact

- **Severity:** <severity>
- **Impact:** Who is affected and how?

## Evidence

- [ ] Screenshot attached: `screenshots/BUG-###-*.png`
- [ ] Video/recording attached
- [ ] Logs attached

## Root Cause (filled by Dev)

## Fix Description (filled by Dev)

## QA Verification Checklist

- [ ] Fix deployed to: (environment)
- [ ] Steps to reproduce no longer reproduce the bug
- [ ] Regression check done — no new issues introduced
- [ ] Verified on build/version:
- [ ] Retested on all affected environments

## Notes / Comments

| Date | Author | Note |
| ---- | ------ | ---- |
|      |        |      |
```

**Tags:** If no tags provided, use `tags: []`. If tags provided, use the block list format shown above.

**Jira fields:** Leave `jira_id:` and `jira_link:` blank — the user fills these in manually after filing in Jira.

---

## Step 6 — Confirm

After creating the file, reply with:

```
Bug created: BUGS/2026-BUGS/<filename>.md
ID: BUG-###
Title: <title>
Project: <project> | Severity: <severity> | Priority: <priority>
```

---

## Rules

1. Never overwrite an existing bug file.
2. Always scan the folder before assigning an ID — never guess the next number.
3. Do not ask clarifying questions — use defaults for anything not provided.
4. Create `BUGS/2026-BUGS/` if it doesn't exist.
