# Security Rules

> Non-negotiable. Apply to every project, every time.

---

## The Hard Rules

1. **Never commit `.env`** — `.env.template` only, `.env` always in `.gitignore`
2. **Never hardcode secrets** — API keys, passwords, tokens always from env vars
3. **Never store real passwords in any markdown file** — use a password manager
4. **Never push to `main` directly** — always use a branch + PR (even solo)
5. **Never share API keys over chat, email, or screenshots**

---

## Secrets Management

| Secret type | Where it lives |
|-------------|---------------|
| App env vars | `.env` (local, never committed) |
| Production secrets | Hosting provider env config (Vercel, Railway, etc.) |
| API keys | Password manager (Bitwarden recommended) |
| SSH keys | `~/.ssh/` — never in project folders |
| DB passwords | Password manager + hosting env config |
| Hints/reminders | `CONFIG/env/env-vars.md` — hints only, no real values |

---

## .gitignore Minimum (add to every project)

```
# Environment
.env
.env.local
.env.*.local

# Secrets
*.pem
*.key
secrets/

# Dependencies
node_modules/
__pycache__/
.venv/
venv/

# Build outputs
.next/
dist/
build/
out/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/settings.json
.idea/
```

---

## Before Every Commit — Security Checklist

- [ ] No `.env` files staged
- [ ] No API keys or tokens in code
- [ ] No real email addresses or user data in test files
- [ ] No `console.log` with sensitive data
- [ ] `.gitignore` includes `.env`

---

## Dependency Rules

- Review packages before installing (`npm audit`, check GitHub stars/age)
- Pin versions in production (`"next": "15.1.0"` not `"next": "^15"`)
- Update dependencies monthly — log in project CHANGELOG
- Never install a package with <100 weekly downloads for critical functionality

---

## Password & Account Security

- Password manager for everything (Bitwarden recommended — free + open source)
- 2FA on: GitHub, hosting (Vercel/Railway), payment gateways, domain registrar
- Separate email for business/SaaS (not personal Gmail)
- Review active OAuth app permissions every 6 months

---

## If a Secret Is Exposed

1. **Immediately revoke** the compromised key from the service dashboard
2. **Generate a new key** — update in password manager + hosting env
3. **Check git history** — if committed, assume it's compromised regardless
4. Use `git filter-branch` or BFG to remove from history
5. Force-push cleaned history
6. Rotate all other keys in the same `.env` (assume all are compromised)
7. Log the incident in the relevant `CLAUDE.md` under "Known issues"
