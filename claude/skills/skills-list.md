# QA OS — Skills Registry

Single source of truth for all available AI skills.

---

## Skills

---

### 1. Bug Creator

| Field        | Value                                       |
| ------------ | ------------------------------------------- |
| Skill Folder | `.claude/skills/bug-creator/`               |
| Trigger      | Message starts with `NEW BUG:`              |
| Description  | Creates a structured bug report markdown file in `BUGS/2026-BUGS/`. Auto-generates sequential BUG-ID. Accepts optional parameters: `PROJECT:`, `TAG:`, `PRIORITY:`, `SEVERITY:`, `BUILD:`. |
| Example      | `NEW BUG: Login fails PROJECT: Penscope TAG: auth PRIORITY: P1 SEVERITY: High` |

---

### 2. Task Creator

| Field        | Value                                       |
| ------------ | ------------------------------------------- |
| Skill Folder | `.claude/skills/task-creator/`              |
| Trigger      | Message starts with `TASK:`                 |
| Description  | Creates a structured task markdown file in `DAILY/TODOS/`. Parses due date from natural language. |
| Example      | `TASK: Complete regression testing before 31 March` |

---

### 3. Bugs List Updater

| Field        | Value                                        |
| ------------ | -------------------------------------------- |
| Skill Folder | `.claude/skills/bugs-list-updater/`          |
| Trigger      | Message starts with `#update-bugs-list`      |
| Description  | Scans `BUGS/2026-BUGS/`, filters by `BUILD:`, and creates or overwrites `BUGS/BUGS-LIST/<BUILD>/bugs-list.md` with a sorted markdown table. |
| Example      | `#update-bugs-list BUILD: R3.46`             |

---

### 4. Skills List Updater

| Field        | Value                                        |
| ------------ | -------------------------------------------- |
| Skill Folder | `.claude/skills/skills-list-updater/`        |
| Trigger      | Message is exactly `#update-skills-list`     |
| Description  | Scans all skill folders in `.claude/skills/`, then adds, updates, or removes entries in this registry to keep it accurate. |
| Example      | `#update-skills-list`                        |

---

## Skill Count

Total skills registered: **4**
Last updated: 2026-03-13