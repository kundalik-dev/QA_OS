---
type: credentials-map
project: project-name
last_updated: YYYY-MM-DD
owner: your-name
---

# Credentials Map — [Project Name]

> IMPORTANT: This file stores ONLY metadata about credentials — never real passwords, tokens, or secrets.
> All actual values must be stored in a password manager (e.g., Bitwarden, 1Password, KeePass).

---

## Test User Accounts

| Role | Username | Password Location | Environment | Notes |
|------|----------|-------------------|-------------|-------|
| Admin | admin@example.com | Bitwarden > [Project] > Admin Test | QA / UAT | Full access |
| Standard User | user@example.com | Bitwarden > [Project] > User Test | QA / UAT | |
| Read-Only User | readonly@example.com | Bitwarden > [Project] > ReadOnly | QA / UAT | |
| Super Admin | superadmin@example.com | Bitwarden > [Project] > SuperAdmin | QA only | |

---

## API Keys & Tokens

| Service | Key Name | Location | Environment | Expiry |
|---------|----------|----------|-------------|--------|
| | API_KEY | Bitwarden > [Project] > API | Dev / QA | Never |
| | AUTH_TOKEN | Bitwarden > [Project] > Token | QA | YYYY-MM-DD |

---

## Database Access

| DB | Host | Port | DB Name | User | Password Location | Environment |
|----|------|------|---------|------|-------------------|-------------|
| PostgreSQL | localhost | 5432 | db_name | db_user | Bitwarden > DB > QA | QA |
| MySQL | | 3306 | | | | |

---

## Third-Party Services

| Service | Purpose | Credentials Location | Notes |
|---------|---------|----------------------|-------|
| Stripe (test) | Payment testing | Bitwarden > Stripe Test | Use test card: 4242 4242 4242 4242 |
| Mailhog | Email testing | No auth — local port 8025 | |
| AWS S3 (test) | File upload tests | Bitwarden > AWS Test | |

---

## SSH / Server Access

| Server | IP / Host | Port | User | Key Location | Environment |
|--------|-----------|------|------|--------------|-------------|
| QA Server | | 22 | | ~/.ssh/id_rsa | QA |

---

## Notes
-
