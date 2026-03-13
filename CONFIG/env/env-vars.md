# Environment Variables — Master Reference

> This is documentation only. No real values here.
> Real values: password manager (Bitwarden / 1Password / Dashlane)
> Per-project .env: created from `CONFIG/env/.env.template`

---

## Rule: Never Commit Secrets

| Do | Don't |
|----|-------|
| Commit `.env.template` | Commit `.env` |
| Store secrets in password manager | Hardcode in source code |
| Use env vars for all credentials | Push API keys to GitHub |
| Add `.env` to `.gitignore` | Share secrets over chat/email |

---

## Where Each Key Lives

### API Keys I Own / Use

| Service | Key name | Where to find | Used in |
|---------|----------|--------------|---------|
| Anthropic (Claude) | `ANTHROPIC_API_KEY` | console.anthropic.com | scripts/today.py, any AI features |
| Razorpay | `RAZORPAY_KEY_ID` + `SECRET` | dashboard.razorpay.com | SaaS payments |
| Resend | `RESEND_API_KEY` | resend.com | transactional email |
| Sentry | `SENTRY_DSN` | sentry.io | error monitoring |
| PostHog | `POSTHOG_KEY` | posthog.com | analytics |
| Cloudinary | `CLOUDINARY_URL` | cloudinary.com | file/image storage |
| GitHub | via OAuth app | github.com/settings | social auth |
| Google | via GCP console | console.cloud.google.com | OAuth + Analytics |

---

## Per-Project Env Setup

When starting a new project:

```bash
# 1. Copy the template
cp ~/OS/CONFIG/env/.env.template .env

# 2. Fill in only what this project needs
# 3. Add .env to .gitignore immediately
echo ".env" >> .gitignore

# 4. Commit only .env.template (already filled structure, no values)
git add .env.template
```

---

## Environment Tiers

| Tier | Purpose | URL pattern |
|------|---------|-------------|
| `development` | local dev | `localhost:3000` |
| `staging` | testing before prod | `staging.[app].vercel.app` |
| `production` | live users | `[app].com` |

Each tier has its own set of keys (separate Razorpay test/live, etc.)

---

## OS-Level Env Vars (machine-wide)

Set these once in your system environment (PowerShell profile or `.bashrc`):

```powershell
# PowerShell profile (~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1)
$env:ANTHROPIC_API_KEY = "sk-ant-..."     # for scripts/today.py
$env:OS_ROOT = "D:\OS"                    # used by automation scripts
```

```bash
# .bashrc / .zshrc
export ANTHROPIC_API_KEY="sk-ant-..."
export OS_ROOT="$HOME/OS"
```
