# Code Style Rules

> General rules across all languages. Language-specific rules override these.

---

## Universal Rules
- Tabs or spaces: **spaces** (2 for JS/TS, 4 for Python)
- Max line length: **100 characters**
- Always use **meaningful names** — no `x`, `temp`, `data2`
- No dead code — delete it, don't comment it out
- One function = one job (single responsibility)
- Comment the **why**, not the **what**

---

## JavaScript / TypeScript

| Rule | Value |
|------|-------|
| Indent | 2 spaces |
| Quotes | single `'` (except JSX `"`) |
| Semicolons | yes |
| Trailing commas | yes (ES5) |
| Arrow functions | preferred over `function` for callbacks |
| `const` vs `let` | always `const` first, `let` only if reassigned |
| `var` | never |
| Type annotations | always in TypeScript |
| File naming | `kebab-case.ts` for utils, `PascalCase.tsx` for components |
| Component naming | `PascalCase` |
| Function naming | `camelCase` |
| Constants | `UPPER_SNAKE_CASE` |

```typescript
// Good
const getUserById = async (userId: string): Promise<User> => { ... }

// Bad
var x = async (id) => { ... }
```

---

## Python

| Rule | Value |
|------|-------|
| Indent | 4 spaces |
| Quotes | double `"` preferred |
| Line length | 100 chars (PEP 8 says 79, but 100 is fine) |
| File naming | `snake_case.py` |
| Class naming | `PascalCase` |
| Function/variable | `snake_case` |
| Constants | `UPPER_SNAKE_CASE` |
| Type hints | always (Python 3.9+) |
| Docstrings | for public functions and classes |

```python
# Good
def get_user_by_id(user_id: str) -> User:
    """Fetch a user from the database by ID."""
    ...

# Bad
def getUser(id):
    ...
```

---

## CSS / Tailwind

- Use **Tailwind utility classes** first
- Custom CSS only when Tailwind can't do it
- Class order: layout → spacing → color → typography → effects
- No inline styles

---

## File & Folder Structure (per project)

```
src/
├── components/     ← reusable UI components (PascalCase)
├── pages/ or app/  ← routes
├── lib/            ← utilities, helpers (camelCase)
├── hooks/          ← custom React hooks (useXxx)
├── types/          ← TypeScript type definitions
├── styles/         ← global CSS
└── config/         ← app-level config constants
```

---

## What to never do
- `console.log` left in production code
- Hardcoded API keys or secrets anywhere in code
- Unused imports
- Functions longer than 50 lines (break them up)
- Nested ternaries more than 1 level deep
