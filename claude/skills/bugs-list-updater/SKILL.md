---
name: bugs-list-updater
description: Scans all bug files in BUGS/2026-BUGS/ and builds a filtered markdown table for a specific build release. Always trigger when the user message starts with "#update-bugs-list". Requires a BUILD: parameter (will ask if missing). Creates or overwrites BUGS/BUGS-LIST/<BUILD>/bugs-list.md with a sorted table of BUG ID, JIRA ID, Title, Severity, Project, Tags, Priority, and Status.
---

# Bugs List Updater

Scans `BUGS/2026-BUGS/`, filters by build, and writes a markdown bug table to `BUGS/BUGS-LIST/<BUILD>/bugs-list.md`.

---

## Trigger

Message starts with:

```
#update-bugs-list BUILD: <build>
```

**Examples:**

```
#update-bugs-list BUILD: R3.46
#update-bugs-list BUILD: R3.45
```

If `BUILD:` is not provided, ask: `Which build should I update? (e.g. R3.46)`

---

## Step 1 — Scan Bug Files

Read all `.md` files in `BUGS/2026-BUGS/`.

For each file, read its YAML frontmatter.

---

## Step 2 — Filter by Build

Include a bug only if its `build:` frontmatter value exactly matches the BUILD specified by the user.

Skip any bug file that has no `build:` field.

---

## Step 3 — Extract Fields

From each matching bug's frontmatter:

| Column | Frontmatter key | Notes |
| ------ | --------------- | ----- |
| BUG ID | `bug_id` | |
| JIRA ID | `jira_id` | Show `—` if blank |
| Title | `title` | |
| Severity | `severity` | |
| Project | `project` | |
| Tags | `tags` | Join list with comma: `auth, ui`. Show `-` if empty |
| Priority | `priority` | |
| Status | `status` | |

---

## Step 4 — Write bugs-list.md

File path: `BUGS/BUGS-LIST/<BUILD>/bugs-list.md`

Create the folder if it doesn't exist. Overwrite the file if it exists — do not append.

Use this exact format:

```markdown
# Bugs List — <BUILD>

| BUG ID  | JIRA ID | Title | Severity | Project | Tags | Priority | Status |
| ------- | ------- | ----- | -------- | ------- | ---- | -------- | ------ |
| BUG-001 | —       | ...   | High     | Penscope | auth | P2      | New    |

---

**Build:** <BUILD>
**Last Updated:** <YYYY-MM-DD>
**Total Bugs:** <count>
```

Sort rows by BUG ID ascending (BUG-001 → BUG-002 → ...).

---

## Step 5 — Confirm

After writing the file, reply with:

```
Bugs list updated: BUGS/BUGS-LIST/<BUILD>/bugs-list.md
Build: <BUILD>
Total bugs: <count>
Bugs included: BUG-001, BUG-002, ...
```

If no bugs found for that build:

```
No bugs found with build: <BUILD>
Empty table created at: BUGS/BUGS-LIST/<BUILD>/bugs-list.md
```

---

## Validation

Only these values are valid. If a bug file has an unexpected value, include it as-is and flag it in the response.

| Field | Allowed values |
| ----- | -------------- |
| `severity` | `Critical` / `High` / `Medium` / `Low` |
| `priority` | `P1` / `P2` / `P3` / `P4` |
| `status` | `New` / `In Progress` / `Fixed` / `Verified` / `Closed` / `Deferred` / `Won't Fix` |

---

## Rules

1. Always read all bug files before writing — never build the list from memory.
2. Only include bugs that match the specified `build:` value exactly.
3. Overwrite existing `bugs-list.md` — do not append.
4. Sort by BUG ID ascending.
5. Create folder if it doesn't exist.