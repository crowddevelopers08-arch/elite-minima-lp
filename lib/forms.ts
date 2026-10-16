// lib/forms.ts
// One label per lead form on the site.
//
// The same string does two jobs: TeleCRM records it as `FormName`, and the Apps
// Script uses it to pick which tab of the sheet the row lands in. Keeping them
// identical is the point — a form can then be filtered the same way in either
// system, and there is one string to change rather than two that can drift.
//
// Safe to import from client components: no dependencies, no env access.
//
// ⚠️ Adding a form here means adding the matching tab in
// eliteminima-apps-script.gs (LEAD_TABS) and re-deploying it, or its rows fall
// back to the piles tab.

/** The original landing page form (/), which sells piles treatment. */
export const PILES_LEADS_FORM = "Elite Minima Piles Leads"

/** The general page form (/general) — piles, circumcision and gynecomastia. */
export const GENERAL_LEADS_FORM = "Elite Minima General Leads"

/** The gynecomastia page form (/gynecomastia) — male breast reduction only. */
export const GYNECOMASTIA_LEADS_FORM = "Elite Minima Gynecomastia Leads"

/** The dedicated circumcision page form (/circumcision). */
export const CIRCUMCISION_LEADS_FORM = "Elite Minima Circumcision Leads"

/** The newer circumcision landing page form (/circumcisions) — a separate
    page from /circumcision above, so it gets its own identity rather than
    sharing CIRCUMCISION_LEADS_FORM and mixing the two pages' leads together.
    This is the one place on the site where that identity is three different
    strings instead of the usual one:
      - CIRCUMCISION_LP_LEADS_FORM — TeleCRM's FormName
      - CIRCUMCISION_LP_SHEET_TAB  — the Google Sheet tab (lib/sheets.ts's
        `sheetTab` field overrides the usual "same as FormName" default)
      - CIRCUMCISION_LP_SOURCE     — the Lead_Source fallback used only when
        the visitor arrived with no utm_source (i.e. direct/organic traffic),
        so even untracked leads from this page are told apart from another
        form's "direct" rows
    ⚠️ CIRCUMCISION_LP_SHEET_TAB must also be added to LEAD_TABS in
    eliteminima-apps-script.gs (done), and that script re-deployed, or its
    rows fall back to the piles tab. */
export const CIRCUMCISION_LP_LEADS_FORM = "circumcision-leads"
export const CIRCUMCISION_LP_SHEET_TAB = "circumcision-lp-leads"
export const CIRCUMCISION_LP_SOURCE = "circumcision-form"

/** The newer gynecomastia landing page form (/gynecomastias) — same reasoning
    as CIRCUMCISION_LP_* above: a separate page from /gynecomastia, so it gets
    its own identity rather than sharing GYNECOMASTIA_LEADS_FORM and mixing
    the two pages' leads together. Three different strings again:
      - GYNECOMASTIA_LP_LEADS_FORM — TeleCRM's FormName
      - GYNECOMASTIA_LP_SHEET_TAB  — the Google Sheet tab
      - GYNECOMASTIA_LP_SOURCE     — the Lead_Source fallback for untracked
        (no utm_source) traffic to this page
    ⚠️ GYNECOMASTIA_LP_SHEET_TAB must also be added to LEAD_TABS in
    eliteminima-apps-script.gs (done), and that script re-deployed, or its
    rows fall back to the piles tab. */
export const GYNECOMASTIA_LP_LEADS_FORM = "gynecomastias-lp-leads"
export const GYNECOMASTIA_LP_SHEET_TAB = "gynecomastias-consult"
export const GYNECOMASTIA_LP_SOURCE = "gynecomastis-model"
