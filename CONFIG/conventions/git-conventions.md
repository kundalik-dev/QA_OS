# Git Conventions

---

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| New feature | `feat/[short-desc]` | `feat/user-onboarding` |
| Bug fix | `fix/[short-desc]` | `fix/dashboard-redirect` |
| Chore / config | `chore/[short-desc]` | `chore/update-deps` |
| Docs | `docs/[short-desc]` | `docs/api-readme` |
| Experiment | `exp/[short-desc]` | `exp/try-edge-functions` |
| Release | `release/v0.0.0` | `release/v1.2.0` |

Rules:
- All lowercase, hyphens only
- Short but descriptive (3–5 words max)
- Never work directly on `main`

---

## Commit Message Format

```
type(scope): short description

[optional body — why, not what]
[optional footer — closes #issue]
```

### Types
| Type | When to use |
|------|-------------|
| `feat` | new feature added |
| `fix` | bug fixed |
| `chore` | dependency update, config, tooling |
| `docs` | documentation only |
| `refactor` | code change, no new feature or fix |
| `test` | adding or fixing tests |
| `style` | formatting, no logic change |
| `perf` | performance improvement |

### Examples
```
feat(auth): add email verification on signup
fix(dashboard): resolve 404 redirect after login
chore(deps): update next.js to 15.1.0
docs(readme): add local setup instructions
test(onboarding): add happy path integration test
```

### Rules
- Subject line: max 72 characters
- Use imperative mood: "add" not "added" / "adds"
- No period at the end
- Reference issues: `closes #42`

---

## Pull Request Naming

Pattern: `[type]: [short description]`

Examples:
- `feat: user onboarding flow`
- `fix: dashboard redirect after email verify`
- `chore: upgrade dependencies`

---

## Tags / Releases

Pattern: `v[major].[minor].[patch]`

| Change | Bump |
|--------|------|
| Breaking change | major (v2.0.0) |
| New feature | minor (v1.1.0) |
| Bug fix | patch (v1.0.1) |
