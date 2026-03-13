To design a **Follow-Ups OS** inside your QA-OS, treat follow-ups as a **cross-cutting operational layer**. It aggregates items from multiple sources (tasks, bugs, emails, tickets, meetings, access requests) and surfaces **what requires action or reminder** based on **deadline, priority, severity, or inactivity**.

Below is a structure that works well with your **SQLite + Markdown dashboard approach**.

---

# 1. Follow-Ups Folder Structure

Create a dedicated module:

```text id="7pn9ev"
qa-os
│
├── followups
│   ├── rules
│   │   ├── priority_rules.md
│   │   ├── severity_rules.md
│   │   └── reminder_rules.md
│   │
│   ├── categories
│   │   ├── emails.md
│   │   ├── tasks.md
│   │   ├── bugs.md
│   │   ├── issues.md
│   │   ├── tickets.md
│   │   ├── meetings.md
│   │   └── access.md
│   │
│   ├── templates
│   │   ├── email_followup.md
│   │   ├── ticket_followup.md
│   │   ├── bug_followup.md
│   │   ├── meeting_followup.md
│   │   └── access_followup.md
│   │
│   ├── logs
│   │   ├── followups_history.md
│   │   └── closed_followups.md
│   │
│   └── engine
│       └── followup_engine.md
│
│   └── archive
│       └── all completed follow ups files go here.
```

Purpose:

| Folder     | Purpose                         |
| ---------- | ------------------------------- |
| rules      | logic for triggering follow-ups |
| categories | QA-specific follow-up knowledge |
| templates  | standardized follow-up entries  |
| logs       | history of reminders            |
| engine     | how the automation works        |

---

# 2. SQLite Table Design

Create a central follow-up table.

```sql id="ce9k4g"
CREATE TABLE followups (
 id TEXT PRIMARY KEY,
 type TEXT,
 source_id TEXT,
 title TEXT,
 status TEXT,
 priority TEXT,
 severity TEXT,
 due_date DATE,
 created_at DATE,
 last_activity DATE,
 reminder_count INTEGER
);
```

Field explanation:

| Field          | Meaning                           |
| -------------- | --------------------------------- |
| type           | email, task, bug, ticket, meeting |
| source_id      | original record ID                |
| priority       | task priority                     |
| severity       | bug severity                      |
| last_activity  | last update                       |
| reminder_count | number of reminders               |

---

# 3. Follow-Up Trigger Logic

Your automation engine should generate follow-ups based on rules.

Example triggers:

### Task Follow-Up

```text id="72r1ec"
IF task.status = "Pending"
AND due_date <= today
→ create follow-up
```

---

### Bug Follow-Up

```text id="g9tggp"
IF bug.status != Closed
AND severity = Critical
AND last_update > 1 day
→ create follow-up
```

---

### Ticket Follow-Up

```text id="yexfb1"
IF ticket.pending_response > 24h
→ follow-up reminder
```

---

### Access Request Follow-Up

```text id="50iqs4"
IF access_request.status = Pending
AND created_at > 2 days
→ remind admin
```

---

# 4. Follow-Up Categories for QA Work

Your system should track these categories.

```text id="9ah4je"
Emails
Tasks
Bugs
Issues
Tickets
Meetings
Access Requests
```

Example mapping:

| Category | Source                  |
| -------- | ----------------------- |
| Emails   | Gmail / manual entry    |
| Tasks    | task table              |
| Bugs     | bug tracker             |
| Issues   | GitHub issues           |
| Tickets  | Jira / support          |
| Meetings | calendar                |
| Access   | environment permissions |

---

# 5. Example Follow-Up Template

Email follow-up template:

```markdown id="tbj3s1"
# Email Follow-Up

Subject: Reminder – Pending QA Query

Original Email:
<Login API clarification>

Reason for Follow-Up:
No response received within 24 hours.

Action:
Send reminder email.

Next Reminder:
Tomorrow
```

---

# 6. Example Bug Follow-Up Template

```markdown id="v9q5tf"
# Bug Follow-Up

Bug ID: BUG-212
Title: Payment API returns 500
Severity: Critical

Last Update:
2 days ago

Action Required:
Follow up with backend developer.

Reminder Schedule:
Daily until resolved.
```

---

# 7. Auto Follow-Up Generation

Your engine should run periodically.

Example flow:

```text id="yajgj6"
scan tasks
scan bugs
scan tickets
scan meetings
scan access requests
```

Then create follow-ups where rules match.

Example SQL:

```sql id="wbm3zt"
INSERT INTO followups
SELECT id, 'task', id, title, 'Pending', priority, NULL, due_date, CURRENT_DATE, last_update, 0
FROM tasks
WHERE due_date <= CURRENT_DATE
AND status = 'Pending';
```

---

# 8. Follow-Ups in Daily Dashboard

Your `/today` file should show follow-ups.

Example section:

```markdown id="1qzj0r"
## Follow-Ups

Emails

- Reminder: login API clarification

Tasks

- Execute regression suite

Bugs

- BUG-212 payment failure

Tickets

- Jira QA-431 waiting for response

Access

- staging environment permission
```

---

# 9. Follow-Up Priority Calculation

Score formula:

```text id="zxxgcb"
severity weight
+ priority weight
+ overdue days
```

Example:

| Severity | Score |
| -------- | ----- |
| Critical | +5    |
| High     | +3    |
| Medium   | +2    |

Priority:

| Priority | Score |
| -------- | ----- |
| P1       | +4    |
| P2       | +3    |
| P3       | +2    |

This allows the system to pick **Top Follow-Ups**.

---

# 10. Example QA Follow-Ups Flow

Example day:

```
BUG-212 critical bug unresolved
TASK-121 regression pending
EMAIL pending developer response
ACCESS staging permission request
```

Your follow-ups module aggregates them:

```
Follow-Ups
1. BUG-212 payment API failure
2. TASK-121 regression execution
3. Email login API clarification
4. Access request staging server
```

---

# 11. Skills Integration

Each follow-up can reference skills.

Example:

```
Bug follow-up
skills:
- bug-reporting
- debugging
```

or

```
SQL validation task
skills:
- sql-validation
```

This helps AI know **how to act**.

---

# 12. Final Architecture

```text id="uspsyo"
qa-os
│
├── database
│   └── qaos.db
│
├── followups
│   ├── rules
│   ├── templates
│   ├── categories
│   ├── logs
│   └── engine
│
├── tasks
├── bugs
├── meetings
├── skills
└── daily
```

---

💡 **Important design principle**

Follow-ups should **not duplicate data**.
They should reference the **original source**.

Example:

```
followup → BUG-212
followup → TASK-121
followup → EMAIL-32
```

---

If you'd like, I can also show you a **very powerful upgrade** for this module:

How to build a **Follow-Up Priority Engine used by project managers**, so your QA-OS automatically decides **which follow-ups you should handle first every day.**
