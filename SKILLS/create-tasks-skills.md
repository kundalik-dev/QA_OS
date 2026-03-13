# Skill: Task Creator

## Purpose

Automatically create a structured task file whenever the user writes a message beginning with:

TASK:

Example:

TASK: Complete Regression testing before 31 March

The system must create a markdown task file using a predefined template.

---

# Trigger Condition

Activate this skill when a user message starts with:

TASK:

Everything after `TASK:` is the task description.

---

# File Location

Create the file inside:

OS/DAILY/TASKS/

If the folder does not exist, create it.

---

# File Naming Convention

Format:

task-[short-name]-[YYYYMMDD-HHMM].md

Rules:

• Convert task description into a short slug (3–5 words max)
• lowercase
• replace spaces with hyphens

Example:

TASK: Complete Regression testing before 31 March

File created:

task-complete-regression-testing-20260312-1030.md

---

# File Template

The file must follow this markdown template.

---

title: <task title>
status: pending
priority: medium
created: <timestamp>
due: <if detected from text>
tags:

- task
- action

---

# Task

<full task description>

---

## Context

Why this task exists:

-

Related project:

- ***

## Subtasks

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

---

## Notes

- ***

## Completion Log

completed:
completion_notes:

---

# Behavior Rules

1. Detect due date from the user sentence if possible.

Example:

before 31 March → due: 2026-03-31

2. If no due date is present:

due: null

3. Default values:

status: pending
priority: medium

4. Timestamp format:

YYYY-MM-DD HH:MM

Example:

created: 2026-03-12 10:32

5. Do not overwrite existing files.

6. After creating the file, respond with:

Task created:
OS/DAILY/TASKS/<filename>

---

# Example

User message:

TASK: Complete Regression testing before 31 March

Created file:

OS/DAILY/TASKS/task-complete-regression-testing-20260312-1032.md

---

# Example File Content

---

title: Complete Regression testing
status: pending
priority: medium
created: 2026-03-12 10:32
due: 2026-03-31
tags:

- task
- action

---

# Task

Complete Regression testing before 31 March

---

## Context

Why this task exists:

-

Related project:

- ***

## Subtasks

- [ ] Identify regression test cases
- [ ] Execute tests
- [ ] Log defects
- [ ] Prepare report

---

## Notes

- ***

## Completion Log

completed:
completion_notes:
