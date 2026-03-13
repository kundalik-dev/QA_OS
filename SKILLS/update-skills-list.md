# Skill: Update Skills List

## Purpose

Keep the `skills-list.md` registry accurate and up-to-date by scanning all skill files in the `SKILLS/` folder and reflecting any changes.

---

## Trigger Condition

Activate this skill when the user message is exactly:

```
#update-skills-list
```

---

## What This Skill Does

1. Read `SKILLS/skills-list.md` to understand the current registry state
2. Scan all `.md` files in the `SKILLS/` folder (excluding `skills-list.md` itself and `update-skills-list.md`)
3. For each skill file, extract:
   - **Skill name** — from the `# Skill:` heading
   - **Trigger** — from the `# Trigger Condition` section
   - **Description / Purpose** — from the `## Purpose` section
   - **Example** — from the `# Example` section if present
4. Compare extracted data against the current `skills-list.md` entries
5. Apply updates:
   - **Add** entries for skill files not yet listed
   - **Update** entries where the trigger, description, or example has changed
   - **Remove** entries for skill files that no longer exist in the folder
6. Update the `## Skill Count` section with the correct total and today's date
7. Write the updated `skills-list.md`

---

## Skills-List.md Structure to Maintain

Each skill entry must follow this exact format:

```markdown
### <N>. <Skill Name>

| Field       | Value                          |
| ----------- | ------------------------------ |
| Skill File  | `SKILLS/<filename>.md`         |
| Trigger     | <trigger pattern description>  |
| Description | <one to two sentence summary>  |
| Example     | `<example user message>`       |
```

Rules:
- Number entries sequentially starting from 1
- Keep entries ordered: oldest skills first, newest at the bottom
- Separate each entry with `---`

---

## Behavior Rules

1. Never delete a skill entry unless the corresponding skill file is confirmed missing from the `SKILLS/` folder
2. Do not modify the skill files themselves — only update `skills-list.md`
3. If a skill file exists but has no `# Trigger Condition` section, note it as `Trigger: (not defined)` in the registry
4. If a skill file exists but has no `## Purpose` section, use the first paragraph of the file as the description
5. After updating, always show a summary of changes made:

```
Skills list updated:
- Added: <names if any>
- Updated: <names if any>
- Removed: <names if any>
- No change: <names>

Total skills: <count>
```

6. If no changes are needed, respond with:

```
Skills list is already up to date. No changes made.
Total skills: <count>
```

---

## Files Involved

| File                              | Role                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `SKILLS/skills-list.md`           | Registry to be updated                                 |
| `SKILLS/update-skills-list.md`    | This instruction file (do not modify during the skill) |
| `SKILLS/*.md` (all other files)   | Source skill files to scan                             |

---

## Example Run

User message:

```
#update-skills-list
```

AI response:

```
Skills list updated:
- Added: Test Case Creator
- Updated: Bug Report Creator (trigger changed)
- Removed: (none)
- No change: Task Creator, Update Skills List

Total skills: 4
```
