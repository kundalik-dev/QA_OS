# Skill: Bug Report Creator

## Purpose

Automatically create a structured **bug report markdown file** when the user writes a message starting with:

NEW BUG:

Example:

NEW BUG: Login button not working PROJECT: Penscope TAG: auth,ui PRIORITY: P1 SEVERITY: High

The system creates a bug file using the predefined template and stores it in the correct location.

---

# Trigger Condition

Activate when a user message begins with:

NEW BUG:

Supported parameters in any order:

PROJECT:
TAG:
PRIORITY:
SEVERITY:
BUILD:

Example valid messages:

NEW BUG: Payment gateway timeout PROJECT: Penscope BUILD: R3.46
NEW BUG: Login button not working TAG: auth PRIORITY: P1 BUILD: R3.46
NEW BUG: Profile update fails PROJECT: eMember TAG: profile,api PRIORITY: P2 SEVERITY: High BUILD: R3.46

---

# File Location

Create file in:

OS/BUGS/2026-BUGS/

If folder does not exist → create it.

---

# Bug ID Generation

Bug IDs must be sequential.

Format:

BUG-001
BUG-002
BUG-003

Rules:

1. Scan existing files in the folder
2. Identify the highest number
3. Increment by 1

Example:

Last bug = BUG-014
Next bug = BUG-015

---

# Jira Bug Id & link

User will update this `jira_id` & `jira_link` field manualy after creating a bug. Just add fields and left value bank.

# File Naming Convention

Format:

BUG-<id>-<slug>.md

Slug rules:

• derived from bug title
• lowercase
• spaces → hyphen
• max 6 words

Example:

BUG-015-login-button-not-working.md

---

# Parameter Parsing

Extract values from user input.

| Parameter | Example  | YAML Field |
| --------- | -------- | ---------- |
| PROJECT   | Penscope | project    |
| TAG       | auth, ui | tags       |
| PRIORITY  | P1       | priority   |
| SEVERITY  | High     | severity   |
| BUILD     | R3.46    | build      |

---

# Default Values (if user does not provide)

project: Penscope
severity: Medium
priority: P3
status: New
environment: QA
reported_by: kundalik-jadhav
build: (leave blank if not provided)

---

# Date Handling

reported_date format:

YYYY-MM-DD

Use today's date.

---

# Tags Handling

User input:

TAG: auth, ui

Convert to:

tags:

- auth
- ui

If none provided:

tags: []

---

# Pre-defined Values (Validation Rules)

When creating a bug file, only use the following allowed values.

## Severity

Critical | High | Medium | Low

## Priority

P1 | P2 | P3 | P4

## Status

New | In Progress | Fixed | Verified | Closed | Deferred | Won't Fix

## Environment

Dev | QA | Staging | UAT | Prod

---

# Markdown Template

Use exactly this template.

---

type: bug
bug_id: <BUG-ID>
jira_id:jira_id_manually_enter
jira_link:jira_link_manually_enter
project: <project-name>
title: <bug-title>
severity: <severity>
priority: <priority>
status: New
environment: QA
reported_by: kundalik-jadhav
reported_date: <date>
assigned_to:
target_fix_version: v0.0.0
build: <build-version>
tags: <tags-array>

---

# <BUG-ID> — <bug-title>

## Summary

> One sentence: what is broken and where.

## Steps to Reproduce

1.
2.
3.

## Expected Result

## Actual Result

## Environment Details

- **Environment:** QA / Staging / UAT / Prod
- **Build / Version:**
- **Browser / Device:**
- **OS:**
- **Test Data Used:**

## Severity & Impact

- **Severity:** <severity>
- **Impact:** Who is affected and how?

## Evidence

- [ ] Screenshot attached: `screenshots/<BUG-ID>-*.png`
- [ ] Video/recording attached
- [ ] Logs attached

## Root Cause (filled by Dev)

## Fix Description (filled by Dev)

## QA Verification Checklist

- [ ] Fix deployed to: (environment)
- [ ] Steps to reproduce no longer reproduce the bug
- [ ] Regression check done — no new issues introduced
- [ ] Verified on build/version:
- [ ] Retested on all affected environments

## Notes / Comments

| Date | Author | Note |
| ---- | ------ | ---- |
|      |        |      |

---

# Behavior Rules

1. Detect optional parameters anywhere in the sentence.
2. Generate new BUG ID automatically.
3. Create folder if missing.
4. Do not overwrite existing bug files.
5. Return confirmation after creation.

Response format:

Bug created:
OS/BUGS/2026-BUGS/<filename>

---

# Example

User message:

NEW BUG: User cannot reset password PROJECT: Penscope TAG: auth,password PRIORITY: P1 SEVERITY: Critical

Created file:

OS/BUGS/2026-BUGS/BUG-001-user-cannot-reset-password.md

Example YAML:

---

type: bug
bug_id: BUG-001
project: Penscope
title: User cannot reset password
severity: Critical
priority: P1
status: New
environment: QA
reported_by: kundalik-jadhav
reported_date: 2026-03-12
assigned_to:
target_fix_version: v0.0.0
tags:

- auth
- password

---
