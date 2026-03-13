---
name: task-creator
description: Creates a structured task markdown file in DAILY/TODOS/. Always trigger when the user message starts with "/task.create". Parses the quoted title and optional inline parameters due=, priority=, tags=. Resolves due date from natural language (e.g. due=15march, due=friday). Generates a timestamped filename, applies defaults, and writes a ready-to-use task file. Use this skill any time the message begins with /task.create — even if only a title is provided.
---

# Task Creator

Creates a task markdown file in `DAILY/TODOS/` when the user starts a message with `/task.create`.

---

## Trigger

Message starts with:

```
/task.create "<title>" [due=...] [priority=...] [tags=...]
```

All parameters are optional. Tags are comma-separated.

**Examples:**

```
/task.create "Work on penscope login page" due=15march priority=medium
/task.create "Send test report to PM" due=friday priority=high
/task.create "Update automation suite for eMember login flow"
/task.create "Complete regression testing" due=31march priority=high tags=regression,emember
```

---

## Step 1 — Parse Input

Extract from the user message:

| Parameter | YAML field | Default if missing |
| --------- | ---------- | ------------------ |
| Title (quoted string after the command) | `title` | — (required) |
| `due=` | `due` | `null` |
| `priority=` | `priority` | `medium` |
| `tags=` | `tags` | `[]` |

Fixed values (never change):

```
status: pending
created: <today YYYY-MM-DD HH:MM>
```

---

## Step 2 — Validate Field Values

Only use these allowed values. If the user provides something outside the list, fall back to the default.

| Field | Allowed values |
| ----- | -------------- |
| `priority` | `low` / `medium` / `high` / `critical` |
| `status` | `pending` / `in-progress` / `done` / `cancelled` |

---

## Step 3 — Resolve Due Date

Parse the `due=` value into a `YYYY-MM-DD` date.

| User input | Resolved value |
| ---------- | -------------- |
| `due=15march` | `2026-03-15` |
| `due=31march` | `2026-03-31` |
| `due=friday` | Next upcoming Friday as `YYYY-MM-DD` |
| `due=tomorrow` | Tomorrow's date as `YYYY-MM-DD` |
| Not provided | `null` |

Always resolve relative dates against today's date.

---

## Step 4 — Build Filename

Format: `task-<slug>-<YYYYMMDD-HHMM>.md`

Slug rules:
- Derived from the task title
- Lowercase, spaces → hyphens
- 3–5 words max

Example:

```
/task.create "Work on penscope login page" due=15march
→ task-work-penscope-login-page-20260313-1030.md
```

---

## Step 5 — Write the File

File path: `DAILY/TODOS/<filename>.md`

Create `DAILY/TODOS/` if it doesn't exist.

Use this exact template:

```markdown
---
title: <task title>
status: pending
priority: <priority>
created: <YYYY-MM-DD HH:MM>
due: <YYYY-MM-DD or null>
tags:
  - <tag1>
  - <tag2>
---

# Task

<full task title>

---

## Context

Why this task exists:

-

Related project:

-

## Subtasks

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

---

## Notes

-

## Completion Log

completed:
completion_notes:
```

**Tags:** If no tags provided, use `tags: []`. If tags provided, use the block list format shown above.

---

## Step 6 — Confirm

After creating the file, reply with:

```
Task created: DAILY/TODOS/<filename>.md
Title: <title>
Due: <due date or "not set"> | Priority: <priority>
```

---

## Rules

1. Never overwrite an existing task file — the timestamp in the filename ensures uniqueness.
2. Do not ask clarifying questions — create the task with available info and defaults.
3. Subtask placeholders (`Step 1 / Step 2 / Step 3`) are left for the user to fill in.
4. Create `DAILY/TODOS/` if it doesn't exist.