# CONFIG — System Rules & Standards

> This folder is the single source of truth for how everything in this OS works.
> Before starting any new project, folder, or file — check here first.

## What lives here

| Folder | Purpose |
|--------|---------|
| `conventions/` | Naming rules for files, folders, branches, commits |
| `env/` | Environment variable templates and service credentials guide |
| `rules/` | Workflow rules, AI rules, security rules |

## The golden rule
> Consistent naming = AI can find anything. Inconsistent naming = chaos.

## Quick Reference

| What | Rule |
|------|------|
| Daily note file | `YYYY-MM-DD.md` |
| Weekly note | `YYYY-W00.md` |
| Monthly note | `YYYY-MM.md` |
| Feature spec | `spec-[feature-name].md` |
| Folders | `UPPER_CASE` for top-level, `lower-kebab` for project folders |
| Env file | never commit `.env` — use `.env.template` only |
| Branch name | `feat/`, `fix/`, `chore/`, `docs/` prefix |
| Commit | `type(scope): short description` |
