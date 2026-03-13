// ─────────────────────────────────────────────────────────────────────────────
//  QA OS — Skills Config
//  This file drives the skill-generator.html UI.
//
//  TO ADD A NEW SKILL: append a new object to the array below.
//  Field types:
//    type: 'text'   — free-text input
//    type: 'select' — dropdown (requires options: [...], default: '...')
//  Extra options:
//    span: 'full'   — field spans the full row width
//    hint: '...'    — small helper text shown below the field
//    required: true — marks field with a red asterisk
// ─────────────────────────────────────────────────────────────────────────────

const SKILLS_CONFIG = [
  {
    id: "bug-creator",
    name: "Bug Creator",
    icon: "🐛",
    color: "#e05252",
    description: "Create a structured bug report in BUGS/2026-BUGS/",
    command: "/bug.create",
    fields: [
      {
        id: "title",
        label: "Bug Title",
        type: "text",
        required: true,
        placeholder: "e.g. Login button not working on mobile",
        span: "full",
      },
      {
        id: "project",
        label: "Project",
        type: "select",
        options: ["Penscope", "eMember"],
        default: "Penscope",
      },
      {
        id: "severity",
        label: "Severity",
        type: "select",
        options: ["Critical", "High", "Medium", "Low"],
        default: "Medium",
      },
      {
        id: "priority",
        label: "Priority",
        type: "select",
        options: ["P1", "P2", "P3", "P4"],
        default: "P3",
      },
      {
        id: "build",
        label: "Build No.",
        type: "text",
        placeholder: "e.g. R3.46",
      },
      {
        id: "tags",
        label: "Tags",
        type: "text",
        placeholder: "e.g. auth, ui, login",
        hint: "Comma separated",
      },
    ],
    generate(vals) {
      if (!vals.title) return "";
      let cmd = `/bug.create "${vals.title}"`;
      if (vals.project)  cmd += ` project=${vals.project}`;
      if (vals.severity) cmd += ` severity=${vals.severity}`;
      if (vals.priority) cmd += ` priority=${vals.priority}`;
      if (vals.build)    cmd += ` build=${vals.build}`;
      if (vals.tags)     cmd += ` tags=${vals.tags.replace(/\s*,\s*/g, ",")}`;
      return cmd;
    },
  },

  {
    id: "task-creator",
    name: "Task Creator",
    icon: "✅",
    color: "#3b82f6",
    description: "Create a task file in DAILY/TODOS/",
    command: "/task.create",
    fields: [
      {
        id: "title",
        label: "Task Title",
        type: "text",
        required: true,
        placeholder: "e.g. Work on penscope login page",
        span: "full",
      },
      {
        id: "priority",
        label: "Priority",
        type: "select",
        options: ["low", "medium", "high", "critical"],
        default: "medium",
      },
      {
        id: "due",
        label: "Due Date",
        type: "text",
        placeholder: "e.g. 15march, friday, tomorrow",
        hint: "Natural language is fine",
      },
      {
        id: "tags",
        label: "Tags",
        type: "text",
        placeholder: "e.g. regression, emember",
        hint: "Comma separated",
        span: "full",
      },
    ],
    generate(vals) {
      if (!vals.title) return "";
      let cmd = `/task.create "${vals.title}"`;
      if (vals.priority) cmd += ` priority=${vals.priority}`;
      if (vals.due)      cmd += ` due=${vals.due.replace(/\s/g, "")}`;
      if (vals.tags)     cmd += ` tags=${vals.tags.replace(/\s*,\s*/g, ",")}`;
      return cmd;
    },
  },

  {
    id: "bugs-list-updater",
    name: "Bugs List",
    icon: "📋",
    color: "#d97706",
    description: "Generate bugs list table for a build release",
    command: "#update-bugs-list",
    fields: [
      {
        id: "build",
        label: "Build Number",
        type: "text",
        required: true,
        placeholder: "e.g. R3.46",
        hint: "Filters bugs by this build tag",
        span: "full",
      },
    ],
    generate(vals) {
      if (!vals.build) return "";
      return `#update-bugs-list BUILD: ${vals.build}`;
    },
  },

  {
    id: "skills-list-updater",
    name: "Skills List",
    icon: "🔄",
    color: "#059669",
    description: "Refresh the skills registry — no parameters needed",
    command: "#update-skills-list",
    fields: [],
    generate() {
      return "#update-skills-list";
    },
  },
];