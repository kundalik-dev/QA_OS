---
name: skills-list-updater
description: Scans all skill folders in .claude/skills/ and updates the skills-list.md registry. Always trigger when the user message is exactly "#update-skills-list". Reads each SKILL.md for name, trigger, and description, then adds/updates/removes entries in the registry. Use this skill whenever the user wants to refresh or rebuild the skills registry.
---

# Skills List Updater

Scans all skills in `.claude/skills/` and keeps `skills-list.md` accurate and up to date.

---

## Trigger

Message is exactly:

```
#update-skills-list
```

---

## Step 1 — Read Current Registry

Read `.claude/skills/skills-list.md` to understand the current state.

---

## Step 2 — Scan Skill Folders

Scan `.claude/skills/` for subfolders that contain a `SKILL.md` file.

For each `SKILL.md` found, extract:
- **Name** — from the `name:` frontmatter field
- **Trigger** — from the `## Trigger` section (the code block pattern)
- **Description** — from the `description:` frontmatter field (first sentence is enough)

Also include any flat `.md` skill files in `.claude/skills/` that have a `name:` frontmatter — but skip `skills-list.md` itself.

---

## Step 3 — Compare and Apply Updates

| Action | When |
| ------ | ---- |
| **Add** | Skill folder exists but is not in registry |
| **Update** | Trigger or description has changed |
| **Remove** | Registry entry points to a folder/file that no longer exists |
| **No change** | Everything matches |

---

## Step 4 — Write Updated skills-list.md

File path: `.claude/skills/skills-list.md`

Use this exact format:

```markdown
# QA OS — Skills Registry

Single source of truth for all available AI skills.

---

## Skills

---

### 1. <Skill Name>

| Field       | Value                                  |
| ----------- | -------------------------------------- |
| Skill Folder | `.claude/skills/<folder>/`            |
| Trigger     | <trigger pattern>                      |
| Description | <one to two sentence summary>          |
| Example     | `<example user message>`              |

---

## Skill Count

Total skills registered: **<N>**
Last updated: <YYYY-MM-DD>
```

Rules:
- Number entries sequentially from 1
- Order: oldest first, newest at bottom
- Separate entries with `---`

---

## Step 5 — Confirm

After updating, reply with:

```
Skills list updated: .claude/skills/skills-list.md
- Added: <names or "none">
- Updated: <names or "none">
- Removed: <names or "none">
- No change: <names>

Total skills: <count>
```

If nothing changed:

```
Skills list is already up to date.
Total skills: <count>
```

---

## Rules

1. Never delete a registry entry unless the skill folder is confirmed missing.
2. Do not modify any SKILL.md files — only update `skills-list.md`.
3. If a SKILL.md has no `## Trigger` section, note it as `Trigger: (not defined)`.
4. Always write today's date in the `Last updated:` footer.