---
type: sql-index
last_updated: YYYY-MM-DD
---

# SQL Scripts Index

> All SQL scripts across projects. Quick reference to find the right script fast.

---

## eMember

| Script ID | File | Type | Purpose | Environment | Last Used |
|-----------|------|------|---------|-------------|-----------|
| SQL-001 | `SCRIPTS/EMEMBER/SQL-001-seed-users.sql` | Seed | Create test users | QA | |
| SQL-002 | `SCRIPTS/EMEMBER/SQL-002-verify-payments.sql` | Query | Verify payment records | QA / UAT | |

---

## PenScope

| Script ID | File | Type | Purpose | Environment | Last Used |
|-----------|------|------|---------|-------------|-----------|
| SQL-101 | `SCRIPTS/PENSCOPE/SQL-101-setup-test-data.sql` | Seed | Penscope test setup | QA | |

---

## Script Types
- **DDL** — CREATE, ALTER, DROP (schema changes)
- **DML** — INSERT, UPDATE, DELETE (data changes)
- **Query** — SELECT only (safe reads, reporting)
- **Seed** — Insert test/demo data
- **Cleanup** — Remove test data after testing
- **Report** — Complex reporting queries

---

## Naming Convention
```
SQL-[ID]-[short-description].sql
e.g. SQL-001-seed-users.sql
     SQL-042-verify-order-status.sql
```
