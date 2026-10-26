# AETHRIZ — Animation System & Motion Guidelines

## 1. Mission

Implement a consistent, polished, premium animation system across **every single page, component, and interactive state** in AETHRIZ — The Zenith of Bio.

Animations must make the application feel alive, responsive, intelligent, and visually engaging without compromising accessibility, performance, clinical clarity, or usability.

**Non-negotiable:** Every page must include intentional motion. Do not leave any page completely static or implement animations on only the landing page.

Every page must include appropriate page-entry motion, interactive feedback, and contextual animation wherever the interface supports it. Loading, scrolling, charts, background effects, and breathing animations must be implemented wherever relevant to the page's content and functionality.

Animations must complement the existing AETHRIZ white-and-red clinical design system and must not introduce an unrelated visual identity.

## 2. Brand and Visual Direction

- **Product:** AETHRIZ — The Zenith of Bio
- **Brand website:** https://www.aethriz.com/
- **Design inspiration:** https://hellopearl.com/products/second-opinion
- **Visual identity:** Clinical minimalism, white backgrounds, dark typography, restrained red accents, subtle glassmorphism, and sophisticated health-tech visuals.
- **Primary font:** Inter
- **Primary accent:** AETHRIZ red (`#E81A2D`)
- **Primary surfaces:** White and light neutral gray
- **Motion style:** Smooth, refined, purposeful, and responsive.

Animations must preserve the visual hierarchy of the underlying interface. Use red glow, translucent surfaces, soft shadows, and gradients sparingly.

Do not turn the dashboard into a gaming interface, excessively flashy marketing page, or neon-heavy science-fiction experience.

## 3. Global Animation Requirements

The following rules are mandatory.

1. Every application page must have a page-entry animation.
2. Every page must include suitable animated feedback for its interactive elements.
3. Every page containing asynchronous content must have loading, success, and error transitions as appropriate.
4. Every page with scrollable content must support appropriate scroll-triggered animations.
5. Every page containing charts or data visualizations must animate their initial rendering and meaningful updates.
6. Every page with cards must provide suitable entrance and interaction animations.
7. Every page with buttons, inputs, tabs, menus, or selectable elements must provide clear state transitions.
8. Background animations must be subtle, lightweight, and appropriate to the page.
9. The splash screen must have a dedicated branded animation.
10. The 3D body explorer must have specialized anatomical, camera, and selection animations.
11. Breathing animations must be used selectively for suitable hero visuals, AI indicators, holograms, or highlighted elements.
12. Animations must never conceal critical health information, delay essential actions, or communicate a medical conclusion unsupported by data.
13. All motion must respect reduced-motion accessibility settings.
14. Existing functionality, routing, authentication, forms, charts, and data integrations must continue working.
15. Antigravity must inspect and implement animations across the entire application, not stop after animating the first few pages.

An animation may be marked not applicable only when the relevant component does not exist on that page. The page itself must still have suitable motion.

## 4. Motion Tokens

Use centralized motion tokens. Do not define arbitrary animation durations for individual components.

```css
:root {
  --motion-instant: 100ms;
  --motion-fast: 150ms;
  --motion-normal: 200ms;
  --motion-medium: 300ms;
  --motion-slow: 400ms;
  --motion-page: 500ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-emphasis: cubic-bezier(0.2, 0.8, 0.2, 1);

  --motion-distance-sm: 8px;
  --motion-distance-md: 16px;
  --motion-distance-lg: 24px;

  --motion-scale-initial: 0.96;
  --motion-scale-final: 1;

  --motion-blur-subtle: 8px;
}
```

### Duration rules

| Animation | Target duration |
|---|---:|
| Button feedback | 100–150ms |
| Hover and focus transitions | 150–200ms |
| Tooltip and dropdown | 150–200ms |
| Card entrance | 250–400ms |
| Page transition | 250–500ms |
| Chart rendering | 400–900ms |
| Splash animation | 1.5–2.5 seconds |
| Ambient breathing cycle | 4–8 seconds |
| Background ambient loop | 10–20 seconds |

These are design targets, not permission to delay user interactions. Long animations must never block the application from becoming usable.

## 5. Splash Screen Animation

Implement a dedicated branded splash animation for the initial application loading experience.

### Visual sequence

1. Begin with a clean white background.
2. Reveal the AETHRIZ logo using a smooth opacity and scale transition.
3. Animate a restrained red light sweep or radial glow behind the logo.
4. Reveal the tagline, “The Zenith of Bio,” using a subtle fade-and-rise transition.
5. Introduce a minimal progress indicator or loading line when initialization is genuinely in progress.
6. Transition smoothly into the application using a short fade or dissolve.

### Requirements

- The splash screen must use existing AETHRIZ branding and assets.
- The logo must not be distorted or stretched.
- The background must remain predominantly white.
- The animation must not resemble an advertisement or prevent users from accessing the application.
- The application must become usable as soon as initialization permits.
- The splash screen must not replay on every internal navigation.
- A failed initialization must display an appropriate recovery state.
- Avoid artificial progress percentages when actual progress is unknown.
- Use a sensible maximum visual duration and never wait for an animation to finish before rendering available content.

## 6. Page-Entry and Exit Animations

Every page must have a consistent entry animation.

### Standard page entrance

- Fade the main content from transparent to visible.
- Translate the content upward by approximately 8–16px.
- Animate the page heading before or alongside the main content.
- Reveal major sections in a short, coordinated sequence.
- Use subtle stagger timing for related cards.

### Suggested sequence

1. Page shell and navigation: appear immediately or with a short fade.
2. Page heading: fade and rise.
3. Main feature or summary panel: fade and rise.
4. Cards and lists: staggered entrance.
5. Secondary metadata: subtle fade.

Use approximately 40–70ms between related staggered elements. Limit the number of independently animated elements so the page does not feel slow.

### Navigation transitions

- Internal route changes should use a brief crossfade or subtle content transition.
- Shared navigation must remain visually stable.
- Preserve scroll position where appropriate.
- Reset scroll position only when the destination's navigation behavior requires it.
- Avoid full-screen transitions for routine navigation.
- Do not replay the entire splash animation when changing pages.

### Implementation

Prefer CSS transitions and the existing project animation framework. If a motion library is already installed, reuse it rather than introducing another dependency without a reason.

## 7. Scroll Animations

Every page with scrollable content must have appropriate scroll-triggered animations.

### Required effects

- Fade-and-rise reveals for section headings.
- Subtle staggered reveals for groups of cards.
- Gentle image or illustration reveals.
- Progress-line animation for relevant timelines.
- Animated counters for meaningful numeric summaries.
- Subtle visual transitions for sticky navigation and section changes.

### Scroll behavior

- Trigger entrance animations when an element becomes visible in the viewport.
- Prefer `IntersectionObserver` or an existing equivalent for visibility-based effects.
- Animate each section once by default.
- Do not repeatedly animate the same cards whenever the user scrolls up and down.
- Avoid large parallax movements.
- Do not animate every line of text independently.
- Do not hide content indefinitely if the observer fails or JavaScript is unavailable.
- Keep content visible in the default document flow before animation initialization.
- Avoid animating layout properties that cause repeated layout recalculation.

### Performance

Prefer `transform` and `opacity`. Avoid continuously animating large shadows, filters, or full-screen backgrounds.

Scrolling must remain smooth on ordinary laptops and mobile devices.

## 8. Card, Button, and Input Animations

### Cards

- Entrance: fade, rise, and optional short stagger.
- Hover: subtle elevation or a 1–2px upward movement.
- Active: slight scale reduction, approximately 0.99.
- Focus-visible: immediate, high-contrast focus indicator.
- Loading: transition into a skeleton or progress state.
- Error: display a clear message with a restrained entrance.

Do not animate non-interactive cards as if they are clickable.

### Buttons

- Hover: subtle background, border, or shadow transition.
- Active: brief pressed-state feedback.
- Focus-visible: visible outline without delayed animation.
- Loading: show a small spinner while preserving the button's label and width where practical.
- Success: optional small confirmation icon or state transition.
- Error: communicate the failure using nearby text or a notification.

Never make users wait for a decorative animation before an action executes.

### Inputs

- Focus: animate the border and background subtly.
- Validation success: optional brief confirmation indicator.
- Validation error: highlight the field and reveal the associated error message.
- Disabled: transition to a visually distinct disabled state.
- Loading: show progress when options or validation are actually being retrieved.

Avoid aggressive shaking for invalid inputs. A subtle border transition and clear error text are preferable.

### Tabs, Menus, and Tooltips

- Animate active indicators using a short position or opacity transition.
- Reveal menus with a slight fade and short vertical movement.
- Use brief tooltip fades.
- Close overlays without leaving invisible, interactive elements behind.
- Preserve keyboard focus behavior throughout transitions.

## 9. Loading Animations and Skeleton Screens

Every asynchronous interface must provide an appropriate loading experience.

### Types of loading animation

**Application initialization**
- Branded loading indicator where appropriate.
- Clear fallback when initialization fails.

**Dashboard cards**
- Skeleton blocks matching the final card layout.
- Subtle shimmer only when it does not distract.
- Stable dimensions to prevent layout shifts.

**Charts**
- Chart-shaped skeletons or progress indicators.
- Clear distinction between loading, no data, and failure.

**Image uploads**
- File preview.
- Upload progress when measurable.
- Processing indicator during image analysis.

**AI analysis**
- Animated progress indicator.
- Optional staged labels such as “Processing image” and “Preparing results” when these represent actual processing stages.
- Do not fabricate progress percentages or pretend that an operation has completed.

**Doctor search and booking**
- Loading states on result lists and availability controls.
- Disabled duplicate-submission actions while requests are pending.
- Clear confirmation only after successful completion.

### Skeleton rules

- Match the geometry of the content being loaded.
- Avoid animating every skeleton independently.
- Stop shimmer effects when loading finishes.
- Show a recoverable error state if loading fails.
- Do not leave indefinite loading indicators without a timeout or failure-handling strategy.

## 10. Animated Graphs and Data Visualization

Every page with graphs, charts, or data visualizations must animate them appropriately.

### Line charts

- Reveal the line progressively from left to right.
- Fade in the chart axes and grid.
- Introduce data points after the main line when useful.
- Animate updated values smoothly without misrepresenting the trend.

### Bar charts

- Animate bars from zero to their actual values.
- Use coordinated, short stagger delays.
- Keep labels readable during animation.
- Respect the actual axis range and scale.

### Pie and donut charts

- Reveal segments with a restrained sweep.
- Animate center values only when they represent real data.
- Avoid excessive rotation or continuous looping.

### Metric counters

- Count up from a neutral starting point to the actual value when the metric first becomes visible.
- Keep the animation short.
- Do not repeatedly count up during every render.
- Respect units, decimal precision, and negative values.
- Do not animate a clinical measurement in a way that implies the patient's condition is changing when only the display is loading.

### Chart updates

- Animate only genuine data changes.
- Avoid dramatic transitions for small changes in health metrics.
- Clearly distinguish missing data from zero.
- Use reduced-motion alternatives when requested.
- Provide textual summaries and accessible alternatives for important data.

**Data integrity rule:** Animation must never alter the actual value, invent intermediate clinical measurements, or conceal an adverse trend.

## 11. Breathing Animations

Implement subtle breathing effects on selected visual elements to create a calm, living, health-tech atmosphere.

### Suitable elements

- A small AI assistant indicator.
- The central holographic body visualization.
- Selected anatomical highlights.
- Hero illustrations.
- Decorative ambient light.
- Non-critical focus elements indicating an active AI process.

### Breathing behavior

- Use a smooth scale variation of approximately 1.00–1.025.
- Use a gentle opacity or glow variation when appropriate.
- Use a cycle of approximately 4–8 seconds.
- Use an ease-in-out timing curve.
- Ensure the effect is subtle and does not distract from nearby content.

### Rules

- Do not apply breathing animations to every card, button, icon, or text element.
- Do not make essential information pulse continuously.
- Do not make red clinical highlights look like an emergency alert unless the underlying information genuinely warrants that presentation.
- Breathing effects must not change layout dimensions.
- Pause or simplify decorative breathing effects when the page is not visible.
- Disable nonessential breathing motion when reduced motion is enabled.

### Example CSS

```css
@keyframes aethriz-breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.88;
  }

  50% {
    transform: scale(1.02);
    opacity: 1;
  }
}

.ambient-breathe {
  animation: aethriz-breathe 6s ease-in-out infinite;
  transform-origin: center;
}
```

Use this animation selectively. It must not be applied globally to every component.

## 12. Animated Backgrounds and Ambient Effects

Each page must have a considered visual treatment. Not every page needs the same animated background.

Suitable effects include:
- Slowly shifting radial gradients.
- Subtle red ambient light behind hero illustrations.
- Faint moving particles in designated visual areas.
- Soft background gradient transitions.
- Minimal animated mesh lighting.
- Low-opacity floating shapes.
- Restrained light sweeps across selected glass surfaces.

### Clinical style rules

- White and light-neutral surfaces must remain dominant.
- Red must be used sparingly.
- Background animation opacity should remain low.
- Essential text and data must remain readable.
- Background motion must not compete with charts, forms, or medical findings.
- Avoid excessive particles, flashing lights, neon grids, and strong color cycling.
- Avoid full-screen video backgrounds unless explicitly required.

### Performance rules

- Prefer CSS gradients and transform-based animation.
- Do not run multiple expensive full-screen blur animations simultaneously.
- Avoid unnecessary WebGL canvases for decorative effects.
- Pause nonessential effects when the tab or component is not visible.
- Provide static fallbacks when effects are unsupported.

## 13. 3D Human Body Explorer Animations

The body explorer requires specialized motion because it is a primary interactive visualization.

### Model entrance

- Fade the model into view.
- Introduce a restrained scale transition.
- Reveal anatomical labels in a short, coordinated sequence.
- Display the selected body region only when selection data is available.

### Camera interaction

- Support smooth user-controlled rotation.
- Provide controlled zoom transitions.
- Use short, smooth camera movements when selecting an anatomical region.
- Provide a reset-view animation.
- Allow users to stop or interrupt camera transitions.

### Anatomical highlighting

- Transition selected regions using restrained opacity or emissive intensity.
- Use the AETHRIZ red accent for relevant selected regions.
- Pair color highlights with visible labels and an accessible anatomical list.
- Avoid flashing or repeatedly pulsing large anatomical areas.

### AI guidance panel

- Reveal relevant guidance with a short fade-and-rise transition.
- Animate panel updates only when the selected finding changes.
- Preserve text readability.
- Do not make users wait for the panel animation to read important information.

### Fallback behavior

If WebGL or 3D rendering is unavailable:
- Display a suitable static illustration or alternative view.
- Keep anatomical selection and explanatory information accessible.
- Do not leave a blank visualization area.

## 14. AI Assistant and Chat Animations

Where the application includes a chatbot or AI assistant:

- New messages should appear with a short fade.
- Typing indicators should use subtle, coordinated movement.
- Assistant responses should become available progressively only when actual streamed content is received.
- File previews should fade in when ready.
- Upload progress should reflect actual progress when available.
- Error messages should appear with clear recovery actions.
- The chat should automatically scroll only when appropriate, such as when the user is already near the bottom.
- Do not forcibly scroll users away from earlier messages they are reading.
- Stop typing indicators immediately when the response completes or fails.

Avoid unnecessarily simulating typing delays when the complete response is already available.

## 15. Page-Specific Animation Requirements

Animations must be implemented across all relevant AETHRIZ pages.

### Landing Page
- Logo reveal.
- Hero headline and illustration entrance.
- Subtle red ambient background.
- Scroll-triggered section reveals.
- Animated feature cards.
- Smooth navigation and CTA feedback.

### Login and Sign-Up
- Form entrance.
- Input focus transitions.
- Password visibility icon feedback.
- Validation message transitions.
- Button loading state.
- Clear success and error feedback.

Authentication must remain usable even if decorative animations fail.

### Dashboard
- Page-entry transition.
- Staggered summary-card entrance.
- Animated charts and metric counters.
- Subtle activity-indicator breathing.
- Loading skeletons.
- Smooth quick-action feedback.

### AI Health and Lifestyle Analysis
- Analysis loading state.
- Structured result entrance.
- Chart and metric animations.
- Restrained highlighting of relevant findings.
- Smooth transitions between analysis sections.
- Accessible error and recovery states.

### AI Food and Product Scanner
- Upload-area hover and focus feedback.
- Image-preview entrance.
- Upload progress.
- AI processing animation.
- Staged result reveal.
- Clear retry and reset transitions.

### 3D Human Body Explorer
- Model entrance.
- Controlled camera transitions.
- Anatomical selection highlights.
- Subtle holographic ambient effects.
- Contextual panel transitions.
- Accessible static fallback.

### Doctors Directory
- Search and filter feedback.
- Doctor-card entrance.
- Loading skeletons.
- Smooth result updates.
- Empty-state transitions.

### Individual Doctor Profile
- Profile and information-panel entrance.
- Smooth section reveals.
- Tab transitions when applicable.
- Appointment-action feedback.

### Consultation Booking
- Step transitions.
- Date and time selection feedback.
- Availability loading indicators.
- Submission progress.
- Booking confirmation transition.
- Error recovery states.

### Articles and Experience Sharing
- Article-card reveal.
- Scroll-triggered section entrance.
- Reading progress indicator when appropriate.
- Image reveal.
- Smooth transitions between content sections.

### Submit an Article
- Editor entrance.
- Field validation feedback.
- Upload progress.
- Submission loading.
- Draft-saved indicator when saving actually succeeds.
- Clear confirmation or error feedback.

### Join the Team
- Hero and section entrance.
- Job-card reveal.
- Application-form transitions.
- Submission feedback.

### Contact Us
- Contact-panel entrance.
- Form focus and validation transitions.
- Submit loading state.
- Success and error feedback.

Any additional page discovered in the repository must also receive appropriate animation treatment. This list must not be treated as the complete limit of implementation scope.

## 16. Accessibility and Reduced Motion

Support the operating system's reduced-motion preference.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is a baseline fallback, not a substitute for reviewing JavaScript-driven animation and third-party animation libraries.

Additional requirements:

- Remove nonessential continuous movement.
- Replace large movement with simple opacity changes or immediate state changes.
- Preserve focus indicators and state feedback.
- Keep content visible when animation is disabled.
- Do not disable essential progress or state communication.
- Provide pause controls for any applicable nonessential animation that runs automatically for more than five seconds and remains alongside other content.
- Avoid flashing content that can trigger seizures.
- Never use motion as the only way to communicate a state.

The application must remain fully functional when reduced motion is enabled.

## 17. Technical Implementation Rules

Before adding animations, inspect the existing application and identify its framework, styling system, routing, and installed animation libraries.

### Preferred implementation

- CSS transitions and keyframes for simple UI effects.
- `IntersectionObserver` for scroll reveals.
- The existing chart library's animation APIs for graphs.
- The existing 3D engine's camera and model animation APIs for the body explorer.
- An already-installed motion library for complex coordinated transitions.

Do not add multiple animation libraries to perform the same task.

### Performance

- Prefer `transform` and `opacity` for frequently animated elements.
- Avoid unnecessary layout recalculation.
- Avoid large numbers of simultaneous animations.
- Avoid memory leaks from event listeners, observers, animation loops, and timers.
- Clean up animation resources when components unmount.
- Pause nonessential motion when a page or component is not visible.
- Keep animations responsive on mid-range laptops and mobile devices.

### Implementation integrity

- Do not rewrite unrelated application logic.
- Do not break route transitions or browser history.
- Do not introduce layout shifts that interfere with user interactions.
- Do not create animations that run indefinitely without a clear purpose.
- Do not fake loading progress, AI progress, chart data, or successful operations.
- Do not hide the page behind an animation if initialization has already completed.

## 18. Testing and Acceptance Criteria

Every page must pass the following checks before its animation work is considered complete.

### Functional
- [ ] Page-entry animation works.
- [ ] Interactive components respond immediately.
- [ ] Loading, success, and error transitions work where relevant.
- [ ] Scroll reveals work without hiding content.
- [ ] Charts animate actual data correctly.
- [ ] Page navigation does not replay the splash screen.
- [ ] Animations do not break forms, routing, or data updates.

### Visual
- [ ] Motion follows the AETHRIZ white-and-red identity.
- [ ] Animation durations follow the shared tokens.
- [ ] Stagger timing is subtle and coordinated.
- [ ] Background effects do not compete with content.
- [ ] Breathing effects are used selectively.
- [ ] Layout dimensions remain stable during animation.

### Accessibility
- [ ] Reduced-motion settings work.
- [ ] Keyboard interactions remain functional.
- [ ] Focus indicators are immediately visible.
- [ ] Essential content remains available without animation.
- [ ] Dynamic status updates are announced appropriately.
- [ ] No prohibited flashing effects exist.

### Performance
- [ ] No unnecessary continuous animations remain active.
- [ ] No animation-related console errors exist.
- [ ] No event listeners or animation loops leak after unmounting.
- [ ] Scroll performance remains smooth.
- [ ] The page remains usable while asynchronous operations run.

### Project-Wide Audit
- [ ] Every route has been inventoried.
- [ ] Every page has an appropriate entry animation.
- [ ] Every relevant component has its interaction states animated.
- [ ] Every relevant loading state has been implemented.
- [ ] Every page with charts has chart animations.
- [ ] Every scrollable page has appropriate scroll motion.
- [ ] The splash animation works correctly.
- [ ] The 3D explorer has specialized motion and a fallback.
- [ ] Reduced-motion behavior has been tested across the application.

## 19. Final Instructions to Antigravity

**Implement this animation system across the entire AETHRIZ codebase, covering every existing page and every relevant component—not just the landing page or dashboard.**

First, inspect all routes and shared components. Build a page-by-page implementation checklist, then implement the animations systematically and verify each page.

Do not merely describe the animations, create a demonstration, or modify only a single page. Apply the actual changes to the existing application.

Every page must feel intentionally designed, responsive, and alive through appropriate motion. However, animation quality must come from timing, restraint, consistency, and purposeful feedback—not from adding effects indiscriminately.

Preserve all existing functionality, keep the white-and-red AETHRIZ identity, meet WCAG 2.2 AA requirements, respect reduced-motion preferences, and complete the project-wide QA checklist before declaring the task finished.