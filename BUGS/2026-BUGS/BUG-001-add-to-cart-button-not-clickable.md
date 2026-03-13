---
type: bug
bug_id: BUG-001
jira_id: jira_id_manually_enter
jira_link: jira_link_manually_enter
project: PenScope
title: User is not able to click on add to cart button on inventory.html page of sauce demo
severity: Medium
priority: P2
status: New
environment: QA
reported_by: kundalik-jadhav
reported_date: 2026-03-12
assigned_to:
target_fix_version: v0.0.0
tags:
  - ui
---

# BUG-001 — User is not able to click on add to cart button on inventory.html page of sauce demo

## Summary

> The "Add to Cart" button on the inventory.html page of Sauce Demo is not clickable, preventing users from adding items to their cart.

## Steps to Reproduce

1. Navigate to the Sauce Demo application and log in with valid credentials.
2. Land on the inventory page (`inventory.html`).
3. Locate any product and attempt to click the "Add to Cart" button.

## Expected Result

The item should be added to the cart and the button should change to "Remove".

## Actual Result

The "Add to Cart" button is not clickable — no action is triggered when the button is clicked.

## Environment Details

- **Environment:** QA
- **Build / Version:**
- **Browser / Device:**
- **OS:**
- **Test Data Used:**

## Severity & Impact

- **Severity:** Medium
- **Impact:** All users are unable to add products to the cart, blocking the core shopping workflow.

## Evidence

- [ ] Screenshot attached: `screenshots/BUG-001-*.png`
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
