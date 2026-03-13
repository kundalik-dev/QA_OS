# QA OS — Skills Registry

This file is the single source of truth for all available AI skills.
AI must read this file to identify which skill to activate based on user input.

---

## How to Use This File

- Each skill entry contains: **name**, **skill file**, **trigger**, **description**, and **example**
- AI selects the matching skill when the trigger pattern is detected in the user's message
- When `#update-skills-list` is received, AI reads `update-skills-list.md` for instructions and updates this file

---

## Skills

---

### 1. Task Creator

| Field       | Value                               |
| ----------- | ----------------------------------- |
| Skill File  | `SKILLS/create-tasks-skills.md`     |
| Trigger     | Message starts with `TASK:`         |
| Description | Creates a structured task markdown file in `OS/DAILY/TASKS/` with status, priority, due date, and subtasks. Parses due date from natural language. |
| Example     | `TASK: Complete Regression testing before 31 March` |

---

### 2. Bug Report Creator

| Field       | Value                                 |
| ----------- | ------------------------------------- |
| Skill File  | `SKILLS/create-new-bug-skills.md`     |
| Trigger     | Message starts with `NEW BUG:`        |
| Description | Creates a structured bug report markdown file in `OS/BUGS/2026-BUGS/`. Auto-generates sequential BUG-ID. Accepts optional parameters: `PROJECT:`, `TAG:`, `PRIORITY:`, `SEVERITY:`. |
| Example     | `NEW BUG: Login fails PROJECT: Penscope TAG: auth PRIORITY: P1 SEVERITY: High` |

---

### 3. Update Skills List

| Field       | Value                                   |
| ----------- | --------------------------------------- |
| Skill File  | `SKILLS/update-skills-list.md`          |
| Trigger     | Message is `#update-skills-list`        |
| Description | Reads `update-skills-list.md` for instructions, then scans all skill files in the `SKILLS/` folder and updates this `skills-list.md` registry with any new, modified, or removed skills. |
| Example     | `#update-skills-list`                   |

---

### 4. Bugs List Updater

| Field       | Value                                                   |
| ----------- | ------------------------------------------------------- |
| Skill File  | `SKILLS/update-bugs-list-skill.md`                      |
| Trigger     | Message starts with `#update-bugs-list`                 |
| Description | Scans all bug files in `BUGS/2026-BUGS/`, filters by the specified `BUILD:` value, and creates or overwrites `BUGS/BUGS-LIST/<BUILD>/bugs-list.md` with a markdown table showing: BUG ID, JIRA ID, Title, Severity, Project, Tag, Priority, Status. Creates the build folder if it does not exist. |
| Example     | `#update-bugs-list BUILD: R3.46`                        |

---

## Skill Count

Total skills registered: **4**
Last updated: 2026-03-12

---

## Notes

- Add new skill entries here whenever a new skill file is created
- Keep trigger patterns unique — no two skills should share the same trigger
- AI should always prefer the most specific matching trigger
