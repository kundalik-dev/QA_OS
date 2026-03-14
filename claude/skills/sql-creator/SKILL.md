---
name: sql-creator
description: Generates a SQL script markdown file from a natural language description. Always trigger when the user message starts with "/sql.create". Reads database schema from SQL/DATABASE/<projectname>/ (prefers SQLite.db file, falls back to CSV). Auto-generates next sequential SQL-### ID, writes a structured .md file to SQL/SCRIPTS/<projectname>/. Required params:- description (quoted), projectname=. Optional:- dbname=, type=.
---

# SQL Script Creator

Generates a SQL script `.md` file from a natural language prompt. Reads schema from the project's database folder to write accurate, field-correct SQL.

---

## Trigger

Message starts with:

```
/sql.create "<description>" projectname=<name> [dbname=<db>] [type=<type>]
```

**Examples:**

```
/sql.create "find members with schemeid=6 and userstatus=active with funds having units>20" projectname=xps dbname=XPS_API_DEV

/sql.create "get all policies with status=lapsed created in last 30 days" projectname=emember dbname=EMEMBER_DEV type=Query

/sql.create "seed 5 test users for smoke testing" projectname=penscope type=Seed
```

---

## Step 1 — Parse Input

| Parameter                   | Where                        | Default if missing           |
| --------------------------- | ---------------------------- | ---------------------------- |
| Description (quoted string) | Natural language SQL request | — (required)                 |
| `projectname=`              | Folder lookup key            | — (required, ask if missing) |
| `dbname=`                   | Written into script header   | — (required, ask if missing) |
| `type=`                     | Script type                  | Auto-detect from description |

**Type auto-detection:**

- Description contains "find", "get", "list", "show", "select" → `Query`
- Description contains "insert", "seed", "add", "create records" → `Seed`
- Description contains "update", "set", "change" → `DML`
- Description contains "delete", "remove", "cleanup", "clean up" → `Cleanup`
- Description contains "create table", "alter table", "drop" → `DDL`
- Anything else → `Query`

**Valid type values:** `Query` / `DML` / `DDL` / `Seed` / `Cleanup` / `Report`

---

## Step 2 — Load Schema

Schema folder path: `SQL/DATABASE/<projectname>/`

Scan that folder in this priority order:

### Priority 1 — SQLite database (preferred)

If a `.db` or `.sqlite` file exists:

1. Use the Bash tool to run: `sqlite3 <file>".tables"` to list all tables e
2. For each relevant table (based on the description keywords), run: `sqlite3 <file> "PRAGMA table_info(<table>);"` to get column names and types
3. Use this schema to write correct SQL with real column names

### Priority 2 — CSV files

If `.csv` files exist (one file per databasename, filename = database name):

1. Read each relevant CSV file (col1 = id, col2 = tableName, col=3 column name)
2. Use table name & column names to generated SQL
3. Create sql query by analysing user input vs actual tables and columns names

### Priority 3 — Schema markdown files

If `.md` schema files exist, read them for table/column definitions.

### No schema found

If the folder is empty or missing:

- Write the SQL with placeholder column names based on the description
- Add a comment at the top of the script: `-- ⚠ Schema not found in SQL/DATABASE/<projectname>/ — verify column names before running`
- Still create the file — do not abort

---

## Step 3 — Generate SQL Script ID

1. Check current file counter form `LOGS/file-id-counter.json` with key as `SQL`
2. Then Increment by 1 → new ID
3. Then use that ID to generate new id like this `SQL-###` number in filenames
4. Update the current id value to new one `LOGS/file-id-counter.json` with key as `SQL`

If folder is empty or doesn't exist → start at `SQL-001`. Create the folder if it doesn't exist.

---

## Step 4 — Build Filename

Format: `SQL-###-<slug>-<YYYY-MM-DD>-v1.md`

Slug rules:

- Derived from description (key words only)
- Lowercase, spaces → hyphens
- Max 5 words

Example:

```
"find members with schemeid=6 and userstatus=active"
→ SQL-003-members-schemeid-active-2026-03-13-v1.md
```

---

## Step 5 — Write the File

File path: `SQL/SCRIPTS/<projectname>/SQL-###-<slug>-<YYYY-MM-DD>-v1.md`

Use this exact template:

````markdown
---
type: sql-script
script_id: SQL-###
project: <projectname>
db_name: <dbname>
script_type: <type>
purpose: <one-line summary of what the script does>
environment: QA
author: kundalik-jadhav
created: <YYYY-MM-DD>
version: v1
linked_bug:
linked_tc:
---

# SQL-### — <purpose>

## Description

<One paragraph describing what this script does, what data it targets, and the expected result.>

**Expected Result:** <what you expect to see after running>

---

## ⚠ Pre-Run Checks

Run these SELECT statements first to verify state before executing the main script.

```sql
-- Verify record count before
-- Replace with relevant pre-check query
SELECT COUNT(*) FROM <main_table> WHERE <condition>;
```

---

## Main Script

```sql
-- SQL-### | <purpose>
-- Project: <projectname> | DB: <dbname>
-- Type: <type> | Author: kundalik-jadhav | Date: <YYYY-MM-DD>
-- ────────────────────────────────────────────────────────────

<generated SQL here>
```

---

## Post-Run Verification

```sql
-- Verify results after execution
<verification query here>
```

---

## Rollback

```sql
-- ⚠ Run this ONLY if you need to undo the above
-- BEGIN TRANSACTION;
-- <rollback SQL here>
-- ROLLBACK; -- or COMMIT;
```

---

## Notes

| Date         | Author          | Note           |
| ------------ | --------------- | -------------- |
| <YYYY-MM-DD> | kundalik-jadhav | Script created |
````

---

## Step 6 — Generate the SQL

Write the actual SQL in the **Main Script** section based on the description and loaded schema. Follow these rules:

1. Use real column names from schema if available — never guess column names when schema is loaded
2. Always include a `WHERE` clause for DML scripts — never write unbounded UPDATE/DELETE
3. Use `SELECT` first in Pre-Run Checks to verify data exists before any DML
4. For `Query` type: write a clean `SELECT` with relevant `JOIN`s and `WHERE` conditions
5. For `Seed` type: write `INSERT INTO ... VALUES (...)` with realistic test data
6. For `DML` type: wrap in `BEGIN TRANSACTION` / `COMMIT` block
7. For `Cleanup` type: write `DELETE FROM ... WHERE ...` — never use `TRUNCATE` on QA without a comment warning

---

## Step 7 — Confirm

After creating the file, reply with:

```
SQL script created: SQL/SCRIPTS/<projectname>/SQL-###-<slug>-<date>-v1.md
ID:      SQL-###
Type:    <type>
DB:      <dbname>
Purpose: <purpose>
```

---

## Schema Folder Setup

If `SQL/DATABASE/<projectname>/` doesn't exist, create it and note:

```
⚠ Schema folder created: SQL/DATABASE/<projectname>/
  Place schema files here for accurate SQL generation:
  • Preferred: <projectname>.db (SQLite)
  • Fallback:  one .csv per table (header row = column names)
```

---

## Rules

1. Never write destructive SQL (`DROP TABLE`, `TRUNCATE`, bulk `DELETE` without `WHERE`) without a clear warning comment.
2. Always scan the `LOGS/file-id-counter.json` file before assigning an ID — never guess.
3. Do not ask clarifying questions — generate the best SQL from available schema and description.
4. If schema is missing, generate with placeholder names but flag clearly in the file.
5. Create `SQL/SCRIPTS/<projectname>/` if it doesn't exist.
