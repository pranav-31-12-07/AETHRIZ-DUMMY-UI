# AETHRIZ — The Zenith of Bio
## Design System & Implementation Guidelines

## 1. Context and Goals

### Mission
Create implementation-ready, token-driven UI guidance for AETHRIZ — The Zenith of Bio, ensuring a consistent, accessible, polished, and performant health-intelligence dashboard across all application pages.

### Brand Identity
- **Product:** AETHRIZ — The Zenith of Bio
- **Website:** https://www.aethriz.com/
- **Product type:** AI-powered health-intelligence platform
- **Audience:** Authenticated users, healthcare consumers, and platform operators
- **Primary surface:** Responsive dashboard web application
- **Visual identity:** Clinical minimalism, white-and-red branding, refined surfaces, subtle glassmorphism, and precise data visualization.

### Design Intent

Combine AETHRIZ's white-and-red clinical brand identity with the clean, structured, information-rich interface approach of Pearl's Second Opinion product.

Reference websites:
- **Brand, colors, and visual identity:** https://www.aethriz.com/
- **UI layout and component inspiration:** https://hellopearl.com/products/second-opinion

Use Pearl's clear content hierarchy, organized information panels, legible data presentation, purposeful color-coding, and straightforward interactions as design inspiration. Do not reproduce Pearl's branding, proprietary assets, dental-specific interface, or marketing-page layout.

AETHRIZ must retain its own identity as a modern health-intelligence platform.

### Design Principles

1. **Clinical clarity:** Users must understand health information and available actions without unnecessary cognitive effort.
2. **White-first interface:** White and light-neutral surfaces must dominate the application.
3. **Purposeful red accents:** Red must communicate brand identity, important actions, and carefully selected clinical highlights.
4. **Structured information:** Use predictable layouts, consistent cards, clear headings, and logical grouping.
5. **Data integrity:** Health metrics, charts, AI-generated findings, and confidence indicators must remain understandable and accurately labeled.
6. **Subtle depth:** Use restrained shadows, borders, gradients, and glass surfaces instead of excessive visual effects.
7. **Accessible by default:** All core functionality must support keyboard, pointer, touch, zoom, and assistive technologies.
8. **Performance first:** Animations and visual effects must not compromise interaction speed or readability.

### Application Scope

The design system applies to:

- Authentication and account interfaces.
- Main dashboard and health summaries.
- AI health and lifestyle analysis.
- AI food and product scanner.
- Interactive 3D human body explorer.
- Doctors directory and individual doctor profiles.
- Doctor consultation booking.
- Articles and experience sharing.
- Article submission.
- Team and contact interfaces.
- Loading, empty, error, and permission-denied states.

The dashboard should prioritize useful information and quick access to actions over decorative elements.

---

## 2. Design Tokens and Foundations

### 2.1 Token Implementation

All component styling must reference centralized design tokens. Components must not introduce arbitrary colors, font sizes, spacing values, border radii, or animation durations.

Use CSS custom properties or the project's existing token architecture. The values below establish the canonical starting point.

```css
:root {
  /* Brand */
  --color-brand-primary: #E81A2D;
  --color-brand-hover: #C91426;
  --color-brand-subtle: #FFF0F2;
  --color-brand-border: #F4B7BF;

  /* Text */
  --color-text-primary: #07090F;
  --color-text-secondary: #475569;
  --color-text-tertiary: #64748B;
  --color-text-inverse: #FFFFFF;

  /* Surfaces */
  --color-surface-base: #FFFFFF;
  --color-surface-page: #F7F8FA;
  --color-surface-muted: #F1F5F9;
  --color-surface-raised: #FFFFFF;
  --color-surface-overlay: rgba(255, 255, 255, 0.82);
  --color-surface-strong: #E2E8F0;

  /* Borders */
  --color-border-default: #E2E8F0;
  --color-border-muted: #EDF0F4;
  --color-border-strong: #CBD5E1;
  --color-border-focus: #E81A2D;

  /* Status */
  --color-status-success: #15803D;
  --color-status-warning: #92400E;
  --color-status-error: #B91C1C;
  --color-status-info: #1D4ED8;

  /* Typography */
  --font-family-primary: "Inter", sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;

  /* Radius */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 999px;

  /* Motion */
  --motion-instant: 100ms;
  --motion-fast: 150ms;
  --motion-normal: 200ms;
  --motion-slow: 300ms;
  --motion-slower: 400ms;

  /* Focus */
  --focus-width: 2px;
  --focus-offset: 3px;
}
```

These tokens must be the shared source of truth. Existing project values should be migrated deliberately rather than duplicated with conflicting definitions.

### 2.2 Brand Colors

#### Primary red

Use the AETHRIZ red identity represented by `#E81A2D`.

Appropriate uses:
- Primary buttons and selected actions.
- Active navigation indicators.
- Important highlights and selected controls.
- Small brand accents and relevant clinical annotations.
- Focus indicators when sufficient contrast is maintained.

Red must not become the default color for every card, heading, border, chart, or icon.

#### White and light neutrals

- White must be the primary component surface.
- The page background should use a very light neutral.
- Muted gray surfaces should distinguish grouped content.
- Borders should establish structure without making the dashboard visually heavy.

#### Dark text

Primary text must use a near-black neutral. Secondary text must use a readable slate tone. Tertiary text should be reserved for supplementary information when contrast remains sufficient.

**Important:** A light background with white text is prohibited unless the text appears on a sufficiently dark surface. White borders must not be used as the only visible boundary between white components.

### 2.3 Semantic Status Colors

| Semantic token | Purpose |
|---|---|
| Success | Completed actions, verified states, positive system status |
| Warning | Attention required, incomplete information, caution |
| Error | Failed actions, invalid inputs, critical system errors |
| Information | Neutral explanations and system guidance |
| Brand | Primary actions and brand identity |

Clinical meaning must never depend on color alone. For example, a health finding must include a descriptive label or icon in addition to its visual highlight.

Status colors must not imply that an AI prediction is a confirmed diagnosis.

### 2.4 Typography

Use Inter as the primary typeface.

The supplied reference typography scale is too small for a readable dashboard if applied literally. Use the following corrected scale as the implementation baseline.

| Token | Size | Typical use |
|---|---:|---|
| `font-xs` | 12px | Secondary metadata |
| `font-sm` | 14px | Supporting text and labels |
| `font-md` | 16px | Standard body text |
| `font-lg` | 18px | Emphasized body text |
| `font-xl` | 20px | Card headings |
| `font-2xl` | 24px | Section headings |
| `font-3xl` | 32px | Page headings |
| `font-4xl` | 40px | Major feature headings |

Rules:

- Body text must default to 16px with a line height of approximately 1.5.
- Small text must remain legible and must not be used for essential instructions when a larger size is practical.
- Page headings should use semibold or bold weights.
- Body content should normally use regular weight.
- Numeric metrics must use consistent font sizes and alignment.
- Long-form articles must use a comfortable reading width and sufficient line height.
- Text must reflow without clipping at browser zoom levels up to 200%.

### 2.5 Spacing

Use the centralized spacing scale.

- 4px: tight icon-to-label spacing.
- 8px: compact internal gaps.
- 12px: closely related controls.
- 16px: standard component spacing.
- 20–24px: card padding and grouped content.
- 32px: separation between major sections.
- 40–64px: larger page-level spacing.

Component padding should normally be 16–24px. Compact data-dense widgets may use less when readability and touch accessibility are preserved.

A new spacing value must not be introduced for a single component without a documented system-level reason.

### 2.6 Borders, Radii, and Shadows

Use rounded corners consistently but avoid making every element pill-shaped.

- Small controls: 4–8px radius.
- Standard inputs and compact cards: 8–12px radius.
- Major panels: 12–16px radius.
- Feature surfaces: up to 24px radius when appropriate.
- Pills: reserved for badges, compact filters, and clearly identified status labels.

Shadows must remain subtle. Prefer a thin neutral border with a light shadow over strong elevation effects.

```css
:root {
  --shadow-card:
    0 1px 3px rgba(7, 9, 15, 0.04),
    0 6px 20px rgba(7, 9, 15, 0.04);

  --shadow-popover:
    0 8px 30px rgba(7, 9, 15, 0.12);

  --shadow-modal:
    0 20px 60px rgba(7, 9, 15, 0.18);
}
```

### 2.7 Clinical Glassmorphism

Glassmorphism should be a restrained supporting treatment, not the default for every surface.

Allowed uses:
- Floating controls over the 3D body explorer.
- Contextual overlays on visualizations.
- Selected floating panels and lightweight toolbars.

Implementation requirements:

- Use translucent white surfaces.
- Use a subtle neutral border and restrained backdrop blur.
- Keep all text and controls legible over variable backgrounds.
- Provide a solid-surface fallback when backdrop filtering is unavailable.
- Never use transparency as the only means of separating components.
- Never apply blur to the entire dashboard or essential text.
- Avoid excessive glass panels layered on top of each other.

### 2.8 Motion Tokens

Use motion to communicate state changes and relationships.

| Token | Duration | Use |
|---|---:|---|
| `motion-instant` | 100ms | Immediate visual feedback |
| `motion-fast` | 150ms | Button and icon feedback |
| `motion-normal` | 200ms | Hover and focus transitions |
| `motion-slow` | 300ms | Panels, menus, and drawers |
| `motion-slower` | 400ms | Selected page-level transitions |

The supplied reference's 300–800ms baseline should not be used for every interaction. Routine controls must remain responsive.

Respect `prefers-reduced-motion: reduce`. Essential information must never depend on animation.

---

## 3. Application Layout and Navigation

### 3.1 Dashboard Shell

The authenticated dashboard should use a consistent application shell.

Anatomy:
1. Primary navigation sidebar.
2. Top utility bar.
3. Main content region.
4. Optional contextual panel.
5. Global notifications and overlays.

The shell must remain consistent across all dashboard pages.

Desktop:
- Use a fixed or collapsible sidebar.
- Keep the top bar compact.
- Align the main content to a consistent grid.
- Use whitespace to separate sections rather than excessive borders.
- Avoid unnecessary horizontal scrolling.

Tablet:
- Allow the sidebar to collapse into a compact or overlay navigation.
- Preserve access to all major destinations.

Mobile:
- Use a compact navigation pattern appropriate to the available space.
- Keep the main action visible and reachable.
- Do not squeeze desktop data tables into unreadable columns.

### 3.2 Navigation

Primary navigation should include the relevant application destinations:

- Dashboard
- Health Analysis
- Food Scanner
- Body Explorer
- Doctors
- Articles

Account, profile, preferences, and administrative destinations may appear in the utility area according to permissions.

States:
- Default: neutral text and icon.
- Hover: subtle neutral surface.
- Focus-visible: clear keyboard indicator.
- Active: restrained red indicator with a readable label.
- Disabled: visibly unavailable and non-interactive.
- Loading: show a progress indication when navigation genuinely requires a wait.
- Error: display a recoverable message when a destination fails to load.

Keyboard behavior:
- Links must use semantic anchors when navigating.
- Tab and Shift+Tab must follow a logical sequence.
- Enter must activate links.
- Expandable navigation must support Enter and Space.
- Escape must close dismissible navigation overlays.
- Arrow-key navigation may be implemented for composite widgets when expected by the selected accessibility pattern.

Touch behavior:
- Interactive targets should be at least 44 × 44 CSS pixels where practical.
- The WCAG 2.2 AA minimum target-size requirements must be met, including applicable exceptions.

Overflow:
- Long labels must wrap or truncate without hiding the destination's meaning.
- Tooltips may supplement truncated labels but must not be the only way to discover essential information.

### 3.3 Page Headers

Every main page should provide:
- A descriptive page title.
- A concise explanation when needed.
- A clear primary action where applicable.
- Breadcrumbs when they materially improve orientation.
- Optional filters, search, or date controls.

Page headers must not consume excessive vertical space in data-heavy dashboards.

### 3.4 Responsive Grid

Use a consistent responsive grid.

- Desktop: multi-column cards and structured panels.
- Tablet: fewer columns and reduced secondary content.
- Mobile: single-column layout for most content.

Cards must preserve a sensible reading order when columns collapse. CSS visual reordering must not create a mismatch with keyboard or screen-reader reading order.

---

## 4. Component-Level Rules

Every component family must define default, hover, focus-visible, active, disabled, loading, and error behavior. States that do not apply must be explicitly documented as not applicable, with a reason.

### 4.1 Buttons

Variants:
- Primary: red background and contrasting text.
- Secondary: white or neutral background with a visible border.
- Tertiary: transparent surface for lower-emphasis actions.
- Destructive: reserved for actions that remove or irreversibly change information.
- Icon-only: permitted only with an accessible name.

States:
- Default: clearly distinguishable from surrounding content.
- Hover: subtle color or surface change.
- Focus-visible: visible outline.
- Active: immediate pressed feedback.
- Disabled: non-interactive and visually distinct.
- Loading: prevent duplicate submission and expose the loading state.
- Error: display associated feedback when the action fails.

Behavior:
- Use descriptive action labels such as “Analyze health” and “Book consultation.”
- Avoid vague labels such as “Click here.”
- Use buttons for actions and links for navigation.
- Preserve a stable button width when loading if practical.
- Do not remove a button's accessible name when showing a spinner.
- Destructive actions should use confirmation when the consequence is significant.

Keyboard, pointer, and touch:
- Buttons must activate using Enter and Space.
- Pointer users must receive visible hover and pressed feedback.
- Touch users must be able to activate controls without hover.
- Focus must remain visible and must not be obscured by sticky UI.

### 4.2 Cards and Information Panels

Card types:
- Summary metric.
- Health insight.
- Appointment.
- Doctor preview.
- Article preview.
- Scanner result.
- AI finding.
- Interactive visualization panel.

Anatomy:
- Optional icon or image.
- Title.
- Main content or metric.
- Supporting context.
- Optional status indicator.
- Optional action.

States:
- Default: clear surface, consistent padding, and predictable hierarchy.
- Hover: subtle elevation only when the card is interactive.
- Focus-visible: visible indicator for keyboard-accessible cards.
- Active: feedback for selectable or clickable cards.
- Disabled: reduced emphasis and unavailable interaction.
- Loading: skeleton or progress state with preserved layout.
- Error: meaningful explanation and recovery action when appropriate.

Rules:
- Non-interactive cards must not imitate buttons.
- Clickable cards must have a meaningful accessible name.
- Nested links and buttons must remain independently operable without conflicting click behavior.
- Cards must use consistent spacing, radius, and typography tokens.
- Long titles must wrap without overlapping icons or actions.
- Empty cards must provide a useful empty state rather than unexplained whitespace.
- Critical health information must not be hidden behind hover interactions.

### 4.3 Inputs and Forms

Supported controls:
- Text input.
- Email and password fields.
- Search.
- Select and multiselect.
- Checkbox.
- Radio group.
- Date picker.
- Text area.
- File upload.
- Searchable doctor selector.

Every field must include a programmatically associated label. Placeholders must not replace labels.

States:
- Default: visible boundary and readable input text.
- Hover: subtle border change.
- Focus-visible: distinct focus outline.
- Active: clear selected or pressed state where applicable.
- Disabled: unavailable, with its state communicated to assistive technology.
- Loading: used when validation or option retrieval is pending.
- Error: associated error message, programmatic state, and correction guidance.

Behavior:
- Validate required fields and input formats.
- Preserve entered data after recoverable submission errors.
- Show validation errors near the relevant fields.
- Identify errors in text rather than color alone.
- Provide clear instructions for required formats.
- Use appropriate autocomplete attributes for personal information.
- Do not unexpectedly clear fields when the user changes a related option.
- Do not expose sensitive health data in URLs, logs, or unnecessary notifications.

Keyboard, pointer, and touch:
- All controls must work with a keyboard.
- Tab order must follow the visual and logical form order.
- Enter must submit a form when appropriate.
- Space must toggle checkboxes and radio controls according to their native behavior.
- Touch targets must remain comfortable and sufficiently separated.

Long content and edge cases:
- Text areas must grow or scroll without hiding entered content.
- Validation messages must wrap naturally.
- File upload must show accepted file types, file size limits, progress, and failure reasons.
- Date fields must support a keyboard-accessible alternative to a calendar popup.

### 4.4 Search, Filters, and Lists

Search must provide:
- A descriptive label.
- Clear input behavior.
- Loading feedback when results are retrieved asynchronously.
- A no-results state.
- An error state.
- A clear-search action when useful.

Filters must:
- Display selected values.
- Provide an obvious reset mechanism.
- Preserve the current context when results update.
- Avoid applying filters unexpectedly when users are still configuring them, unless the interaction clearly communicates immediate application.

Lists must:
- Use semantic list markup where appropriate.
- Maintain consistent item spacing.
- Provide clear selected and expanded states.
- Handle long names and descriptions without clipping.
- Include useful empty states.
- Support pagination or progressive loading for large result sets without losing keyboard position unnecessarily.

### 4.5 Dialogs, Drawers, and Popovers

Use dialogs for focused tasks, drawers for contextual workflows, and popovers for brief supplementary content.

States:
- Default: clear title and purpose.
- Hover: applied only to interactive elements inside the overlay.
- Focus-visible: visible on focused controls.
- Active: clear feedback on selected controls.
- Disabled: unavailable controls remain understandable.
- Loading: progress is announced appropriately.
- Error: recovery guidance appears within the relevant context.

Behavior:
- Modal dialogs must move focus inside when opened.
- Focus must remain within a modal while it is active.
- Closing a modal must return focus to the triggering control when appropriate.
- Escape must close dismissible overlays.
- Background content must not remain interactable behind a modal.
- Popovers must not be the sole source of critical information.
- Long dialogs must fit the viewport and provide accessible scrolling.

### 4.6 Badges and Status Indicators

Use badges for concise status labels, categories, and small amounts of metadata.

Rules:
- Use neutral badges by default.
- Use semantic status colors only when the status has genuine meaning.
- Avoid excessive badge usage.
- Do not use badges as substitutes for headings or explanatory text.
- Never encode health severity using color alone.

Each status must have readable text or an accessible equivalent.

### 4.7 Tables and Data Visualization

Tables:
- Use semantic table markup for tabular information.
- Include meaningful column headers.
- Support responsive overflow without clipping critical values.
- Keep row actions accessible.
- Provide empty, loading, and error states.
- Avoid unnecessarily dense rows and tiny text.

Charts:
- Use consistent labels, units, and scales.
- Distinguish series using more than color alone where necessary.
- Provide a textual summary or accessible data alternative.
- Identify missing or unavailable data.
- Do not display invented measurements or imply certainty beyond the underlying data.
- Preserve meaningful chart labels on smaller screens.

Health metrics must include units and a clear interpretation when relevant. Historical comparisons must identify the comparison period.

### 4.8 AI Health Analysis

The health analysis interface should separate:
1. User-provided information.
2. Observed measurements.
3. AI-generated insights.
4. Recommendations or next steps.
5. Limitations and uncertainty.

Use clear section headings and structured findings rather than long, unbroken AI-generated text.

States:
- Default: show the current analysis and its context.
- Hover: limited to interactive findings and controls.
- Focus-visible: all actions remain keyboard accessible.
- Active: selected filters or findings are visibly identified.
- Disabled: unavailable analysis actions explain why when appropriate.
- Loading: explain that analysis is in progress without presenting unfinished findings as complete.
- Error: explain what failed and whether retrying is possible.

Rules:
- Distinguish AI-generated suggestions from verified clinical conclusions.
- Show the source and date of health information when available.
- Identify incomplete inputs that may affect the analysis.
- Provide a retry or correction path for recoverable failures.
- Avoid alarmist red styling for ordinary findings.
- Never present fabricated medical results or unsupported confidence percentages.
- Medical urgency must be communicated through explicit, clinically appropriate text rather than color alone.

### 4.9 AI Food and Product Scanner

The scanner should provide a focused interface for uploading or capturing an image and reviewing the resulting information.

Anatomy:
- Image upload or capture control.
- Preview of the selected image.
- Optional text input.
- Analysis action.
- Processing state.
- Structured results.
- Clear retry or reset action.

States:
- Default: explain how to submit an image.
- Hover: provide feedback on upload and action controls.
- Focus-visible: support keyboard-based upload and submission.
- Active: indicate the selected image or active action.
- Disabled: explain unavailable functionality.
- Loading: show progress without freezing the interface.
- Error: explain unsupported files, network failures, or analysis failures.

Rules:
- Validate supported formats and file sizes.
- Do not silently discard selected images.
- Provide image replacement and removal controls.
- Label AI-generated nutrition or ingredient interpretations as estimates when applicable.
- Distinguish missing information from a confirmed absence of an ingredient.
- Preserve text alternatives for meaningful image content.

### 4.10 Interactive 3D Human Body Explorer

The body explorer is a specialized visualization surface and may use more visual depth than ordinary dashboard cards.

Anatomy:
- Main 3D visualization.
- Anatomical selection controls.
- Rotation and zoom controls.
- Labels and selected-organ information.
- Contextual AI findings panel.
- Reset-view action.

States:
- Default: show the initial body view and available controls.
- Hover: highlight interactive anatomy and controls.
- Focus-visible: expose selectable regions and camera controls.
- Active: clearly identify the selected anatomical region.
- Disabled: indicate unavailable regions or interactions.
- Loading: show a placeholder and loading indicator while the model loads.
- Error: provide a fallback explanation if the 3D renderer or model fails.

Behavior:
- Support pointer drag, zoom, and rotation.
- Provide keyboard-accessible rotation, zoom, selection, and reset controls.
- Avoid requiring precise dragging as the only way to interact.
- Prevent accidental page scrolling during deliberate touch gestures without disabling normal page scrolling globally.
- Provide an accessible list of anatomical regions as an alternative to selecting the 3D model.
- Clearly label AI-highlighted areas and their source.
- Use red overlays selectively, with accompanying labels or symbols.
- Maintain readable labels when the model rotates or scales.
- Provide a useful two-dimensional or textual fallback when 3D rendering is unavailable.
- Avoid continuous auto-rotation unless it is explicitly requested and can be paused.

### 4.11 Doctor Directory and Profiles

Directory cards should display only relevant information, such as:
- Doctor name.
- Professional specialty.
- Qualifications where verified.
- Location or service area.
- Availability when current data is available.
- Consultation action.

States must cover loading, no results, unavailable profiles, and failed booking or retrieval.

Rules:
- Use descriptive actions such as “View profile” and “Book consultation.”
- Clearly distinguish verified details from user-submitted information.
- Do not invent ratings, qualifications, availability, or clinical experience.
- Provide accessible filters for specialty, location, and availability.
- Keep long names and specialties readable on narrow screens.

### 4.12 Consultation Booking

The booking workflow should show the selected doctor, date, time, and relevant appointment details before confirmation.

Rules:
- Use an accessible date and time selector.
- Display time zones where relevant.
- Revalidate availability before confirming a booking.
- Preserve form values after recoverable errors.
- Prevent accidental duplicate submissions.
- Clearly distinguish pending, confirmed, cancelled, and failed booking states.
- Show a confirmation summary after a successful booking.
- Never communicate that a booking succeeded before receiving confirmation from the booking service.

### 4.13 Articles and Content Submission

Article cards should include a title, summary, relevant metadata, and a descriptive navigation action.

Submission forms must provide:
- Clear field labels.
- Content-length guidance where applicable.
- Validation feedback.
- Submission progress.
- Confirmation or recoverable error states.

Rules:
- Long text must remain readable and editable.
- Draft content should not be cleared unexpectedly.
- Rich-text editors must provide keyboard-accessible formatting controls.
- Images must support appropriate alternative text.
- Publication status must be explicit.
- User-generated content must not be styled as verified medical guidance without an appropriate review process.

### 4.14 Notifications and Feedback

Use:
- Inline messages for field-level issues.
- Toast notifications for brief, non-critical feedback.
- Persistent banners for important application-wide status.
- Dialogs only when user attention or a decision is genuinely required.

Rules:
- Success and error messages must use clear language.
- Important messages must remain available long enough to be read.
- Transient notifications must not be the only place where critical information appears.
- Use appropriate live-region announcements.
- Do not repeatedly announce the same status unnecessarily.

---

## 5. Component Density and Information Hierarchy

Known component density:

| Component | Count |
|---|---:|
| Links | 18 |
| Cards | 9 |
| Buttons | 5 |
| Inputs | 4 |
| Lists | 3 |
| Navigation groups | 1 |

These counts are planning references, not mandatory quotas for every page.

Rules:
- The primary action must be visually distinguishable from secondary actions.
- Navigation must not compete with the main page heading.
- Cards must be grouped by purpose.
- Related inputs must be grouped together.
- Avoid adding cards solely to fill empty space.
- Dense dashboards should prioritize useful summaries over redundant charts.
- Each page must have a clear primary task.

---

## 6. Accessibility Requirements

Target: WCAG 2.2 Level AA.

All accessibility requirements must be verifiable through manual testing, automated checks where applicable, or both.

### 6.1 Contrast

- Normal text must meet a contrast ratio of at least 4.5:1.
- Large text must meet at least 3:1.
- Essential component boundaries, graphical objects, and state indicators must meet applicable 3:1 contrast requirements.
- Focus indicators must be clearly visible against adjacent colors.
- Text over glass or gradients must maintain contrast against the actual rendered background.

Pass condition: Contrast checks meet the required ratio for every supported state, including hover, focus, disabled, and error states where applicable.

### 6.2 Keyboard Accessibility

- Every interactive function must be operable without a pointer.
- Keyboard focus must follow a logical order.
- Focus must never become trapped outside an intentionally modal interaction.
- Focus must not be hidden behind sticky navigation, banners, or overlays.
- Custom controls must expose their role, name, value, and state to assistive technology.

Pass condition: A tester can complete all primary workflows using only a keyboard.

### 6.3 Focus Visibility

Use a consistent focus treatment:

```css
:focus-visible {
  outline: var(--focus-width) solid var(--color-border-focus);
  outline-offset: var(--focus-offset);
}
```

Do not remove the browser focus outline without providing a visible alternative.

Pass condition: Every keyboard-focused interactive element has a clearly visible indicator that is not clipped or obscured.

### 6.4 Target Size

- Interactive targets should be at least 44 × 44 CSS pixels where practical.
- The implementation must meet WCAG 2.2 AA target-size requirements of 24 × 24 CSS pixels or the applicable spacing and other exceptions.
- Touch targets must not overlap in ways that cause accidental activation.

Pass condition: Measured targets meet the applicable requirements and remain operable on touch devices.

### 6.5 Forms and Errors

- Every field must have a programmatically associated label.
- Errors must be described in text.
- Required fields must be identified before submission.
- Invalid fields must expose their state programmatically.
- Error messages must be associated with the corresponding controls.
- Validation must not rely exclusively on color.

Pass condition: A screen-reader user can identify each field, understand its error, and determine how to correct it.

### 6.6 Motion and Animation

- Respect reduced-motion preferences.
- Avoid flashing content that may trigger seizures.
- Do not require animated content to understand health findings.
- Provide pause or stop controls for nonessential continuous motion.
- Avoid disruptive layout shifts during transitions.

Pass condition: Reduced-motion settings suppress or simplify nonessential animation while preserving functionality.

### 6.7 Zoom and Reflow

- Support browser zoom up to 200% without loss of essential functionality.
- Support WCAG reflow expectations at a width equivalent to 320 CSS pixels for ordinary content.
- Allow data tables and specialized visualizations to use appropriate accessible alternatives where necessary.
- Do not clip buttons, labels, or critical text.

Pass condition: Content remains usable without unnecessary two-dimensional scrolling, except where the content inherently requires it.

### 6.8 Semantic Structure

- Use landmarks, headings, lists, buttons, links, and tables according to their actual purpose.
- Heading levels must follow a meaningful hierarchy.
- Decorative images must have empty alternative text.
- Meaningful images must have useful alternatives.
- Icon-only controls must have accessible names.
- Dynamic updates must be announced when users need to know about them.

Pass condition: Automated accessibility checks and manual screen-reader review reveal no unresolved critical semantic or keyboard barriers.

---

## 7. Responsive Behavior

Use content-driven breakpoints aligned with the application's layout requirements.

Suggested starting points:
- Small mobile: below 480px.
- Large mobile and tablet: 480–767px.
- Tablet and compact desktop: 768–1023px.
- Desktop: 1024–1439px.
- Wide desktop: 1440px and above.

These values are starting points, not reasons to introduce one-off exceptions.

Rules:
- Navigation must adapt to available space.
- Cards must reflow without losing their reading order.
- Forms must use full-width fields when needed.
- Tables must provide controlled overflow or an appropriate alternate layout.
- Dialogs must fit within the viewport.
- The 3D explorer must preserve access to anatomical selection and essential findings on smaller screens.
- Hover must never be required for essential functionality.
- Images must preserve aspect ratio unless cropping is explicitly intended.
- Avoid fixed heights that clip dynamic content.
- Avoid horizontal overflow at common mobile widths.

---

## 8. Content and Tone Standards

Tone: concise, confident, reassuring, and implementation-focused.

For health-related content, use plain language and avoid implying certainty when information is incomplete.

Preferred examples:
- “Analyze health”
- “Review findings”
- “View doctor profile”
- “Choose appointment time”
- “Upload food image”
- “Analysis is in progress”
- “We couldn't complete the analysis. Try again.”

Avoid:
- “Click here”
- “Something went wrong” without useful context
- “100% accurate” without substantiated evidence
- “Diagnosis confirmed” when the system only provides AI-generated guidance

Rules:
- Every action must have a clear, descriptive label.
- Dates, times, units, and measurement periods must be explicit.
- Empty states must explain why content is absent and what the user can do next.
- Error messages must explain the issue and provide recovery guidance where possible.
- Medical disclaimers must be visible at the point where they are relevant.

---

## 9. Anti-Patterns and Prohibited Implementations

The following implementations are prohibited:

1. Replacing the AETHRIZ white-and-red identity with an unrelated blue-heavy theme.
2. Copying Pearl's logo, product branding, proprietary assets, or dental-specific interface.
3. Using black as the primary dashboard background when the intended interface is white-first.
4. Using red for every card, border, icon, and chart.
5. Applying glassmorphism to every surface.
6. Using white text on light backgrounds without sufficient contrast.
7. Using typography smaller than the established scale without a documented accessibility justification.
8. Introducing arbitrary spacing, colors, shadows, and border radii.
9. Implementing clickable cards without accessible names or predictable keyboard behavior.
10. Removing focus outlines without replacement.
11. Using color alone to communicate clinical status or AI findings.
12. Showing fabricated measurements, health outcomes, doctor credentials, or booking confirmations.
13. Using animation that delays routine interactions or hides important information.
14. Using fixed heights that clip content or prevent text expansion.
15. Introducing horizontal page overflow at common viewport widths.
16. Making essential functionality available only on hover.
17. Displaying skeletons indefinitely when requests fail.
18. Exposing sensitive health information in URLs or unnecessary browser notifications.
19. Adding decorative charts that do not communicate meaningful information.
20. Shipping components without defined states, responsive behavior, and testable accessibility requirements.

---

## 10. Migration Notes for Antigravity

When implementing this system in an existing project:

1. Inspect the current repository structure and identify the existing styling system, shared components, and application routes.
2. Review the current AETHRIZ interface and use the supplied official website as the brand reference.
3. Establish the design tokens in a centralized stylesheet or the existing token architecture.
4. Map existing components to the new semantic tokens before introducing replacements.
5. Preserve existing functionality, authentication, data integrations, and application routing.
6. Refactor duplicated styles into shared components where appropriate.
7. Implement component states and responsive behavior before adding decorative animation.
8. Audit contrast, focus visibility, text sizing, and touch targets.
9. Test loading, empty, error, disabled, and permission-denied states.
10. Avoid rewriting unrelated application logic merely to change the visual design.

When a legacy style conflicts with these guidelines, the design system must take precedence unless an explicit product requirement or accessibility constraint justifies an exception.

---

## 11. QA Checklist

Before marking a page complete, verify the following.

### Brand and Visual Consistency
- [ ] White and light-neutral surfaces dominate.
- [ ] Red accents are used purposefully.
- [ ] Inter typography follows the established scale.
- [ ] Spacing, borders, radii, and shadows use shared tokens.
- [ ] Glassmorphism is restrained and maintains contrast.
- [ ] The page matches the shared application shell.

### Component Behavior
- [ ] Default, hover, focus-visible, active, disabled, loading, and error states are implemented or explicitly marked not applicable.
- [ ] Buttons, links, cards, inputs, and lists behave consistently.
- [ ] Long labels and content do not overlap or clip.
- [ ] Empty and error states provide meaningful guidance.
- [ ] Duplicate submissions and accidental actions are handled appropriately.

### Accessibility
- [ ] Text and non-text contrast meet applicable WCAG 2.2 AA criteria.
- [ ] All essential workflows work with a keyboard.
- [ ] Focus indicators remain visible and unobscured.
- [ ] Interactive targets meet applicable minimum-size requirements.
- [ ] Forms have labels and associated error messages.
- [ ] Screen-reader names, roles, states, and announcements are meaningful.
- [ ] Reduced-motion preferences are respected.
- [ ] Zoom and reflow do not hide essential functionality.

### Responsive Design
- [ ] Navigation adapts appropriately.
- [ ] Cards and forms reflow logically.
- [ ] No unintended horizontal page overflow exists.
- [ ] Dialogs and floating controls fit the viewport.
- [ ] Touch interactions work without hover.
- [ ] The 3D body explorer has accessible alternative controls.

### Data and Functionality
- [ ] Health metrics show meaningful units and context.
- [ ] AI findings are distinguished from verified clinical conclusions.
- [ ] Loading and failure states are accurate.
- [ ] Booking success is shown only after confirmation.
- [ ] Existing routes, authentication, and integrations remain functional.
- [ ] Sensitive health information is handled appropriately.

### Final Quality Gate
- [ ] No arbitrary one-off design tokens have been introduced.
- [ ] No unsupported health claims or fabricated data are displayed.
- [ ] No critical accessibility issues remain unresolved.
- [ ] The page is consistent with the AETHRIZ design system.
- [ ] The implementation has been reviewed at desktop, tablet, and mobile widths.

**Completion rule:** A page must not be considered production-ready until its primary workflows, component states, responsive behavior, and accessibility acceptance criteria have been verified.
