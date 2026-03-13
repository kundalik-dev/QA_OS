# Skill: Bugs List Updater

## Purpose

Scan all bug files for a specified build release and create or update the `bugs-list.md` table inside:

BUGS/BUGS-LIST/<BUILD>/bugs-list.md

---

# Trigger Condition

Activate when user message starts with:

#update-bugs-list

Supported parameter:

BUILD:

Examples:

#update-bugs-list BUILD: R3.46
#update-bugs-list BUILD: R3.45

If BUILD: is not provided, ask the user: "Which build should I update? (e.g. R3.46)"

---

# File Location

Bugs list files live at:

BUGS/BUGS-LIST/<BUILD>/bugs-list.md

If the folder does not exist → create it.
If the file does not exist → create it with an empty table.

---

# How to Build the List

## Step 1 — Scan bug files

Read all `.md` files inside:

BUGS/2026-BUGS/

## Step 2 — Filter by build

For each bug file, read its frontmatter.

Include the bug in the list only if:

build: <BUILD>

matches the BUILD value specified by the user.

If a bug file has no `build:` field, skip it (do not include).

## Step 3 — Extract fields

From each matching bug's frontmatter, extract:

| Field      | Frontmatter key |
|------------|-----------------|
| BUG ID     | bug_id          |
| JIRA ID    | jira_id         |
| Title      | title           |
| Severity   | severity        |
| Project    | project         |
| Tag        | tags (join with comma if multiple) |
| Priority   | priority        |
| Status     | status          |

Tags handling:
- If tags is a YAML list → join with comma: `auth, ui`
- If tags is empty → display `-`
- If jira_id is blank/placeholder → display `—`

## Step 4 — Write bugs-list.md

Overwrite `BUGS/BUGS-LIST/<BUILD>/bugs-list.md` with the following format:

---

# Bugs List — <BUILD>

| BUG ID | JIRA ID | Title | Severity | Project | Tag | Priority | Status |
|--------|---------|-------|----------|---------|-----|----------|--------|
| BUG-001 | — | Title here | High | PenScope | ui | P2 | New |

---

**Build:** <BUILD>
**Last Updated:** <today's date YYYY-MM-DD>
**Total Bugs:** <count>

---

Rows must be sorted by BUG ID ascending (BUG-001 → BUG-002 → ...).

---

# Validation Rules

Only use the following allowed values. If a bug file has an invalid value, include it as-is but flag it in the response.

## Severity
Critical | High | Medium | Low

## Priority
P1 | P2 | P3 | P4

## Status
New | In Progress | Fixed | Verified | Closed | Deferred | Won't Fix

---

# Response Format

After updating, respond with:

```
Bugs list updated: BUGS/BUGS-LIST/<BUILD>/bugs-list.md
Build: <BUILD>
Total bugs: <count>
Bugs included: BUG-001, BUG-002, ...
```

If no bugs found for the specified build:

```
No bugs found with build: <BUILD>.
The file has been created with an empty table at BUGS/BUGS-LIST/<BUILD>/bugs-list.md
```

---

# Behavior Rules

1. Always read all bug files in `BUGS/2026-BUGS/` before writing.
2. Only include bugs that match the specified `build:` frontmatter value.
3. Create the build folder and file if they don't exist.
4. Overwrite the existing `bugs-list.md` — do not append.
5. Sort rows by BUG ID ascending.
6. Count total included bugs and show in the footer.

---

# Example

User message:

#update-bugs-list BUILD: R3.46

Scans BUGS/2026-BUGS/ and finds BUG-002 and BUG-003 both have `build: R3.46`.

Output file: BUGS/BUGS-LIST/R3.46/bugs-list.md

```markdown
# Bugs List — R3.46

| BUG ID  | JIRA ID | Title                           | Severity | Project  | Tag      | Priority | Status |
|---------|---------|---------------------------------|----------|----------|----------|----------|--------|
| BUG-002 | —       | Login timeout on mobile         | High     | eMember  | auth, ui | P1       | New    |
| BUG-003 | JRA-890 | Profile picture upload fails    | Medium   | PenScope | upload   | P3       | Fixed  |

---

**Build:** R3.46
**Last Updated:** 2026-03-12
**Total Bugs:** 2
```
