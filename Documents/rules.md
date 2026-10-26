# RULES.md — UI Consistency, Animation Standards & Interaction Wiring

## 1. Purpose

These rules define mandatory standards for designing, implementing, and maintaining every page, component, wireframe, button, link, animation, and interactive element in this project.

The website must feel like a polished, production-quality frontend—not a collection of static mockups with decorative controls.

**Core principle: Every interaction must have a clear purpose, every control must have a defined behavior, and every animation must improve the user experience.**

These rules apply to all existing and future pages, components, modals, navigation elements, wireframes, responsive layouts, and interactive demonstrations.

---

## 2. Global Design Consistency

## 2A. Whitespace, Visual Breathing Room & Content Density

Core principle: Every page must feel calm, clear, spacious, and easy to scan. Do not cram the interface with text, cards, charts, controls, or decorative elements.

AETHRIZ must prioritize the information users need for the current task. Use whitespace deliberately to establish hierarchy, group related content, and give important information room to breathe.
Mandatory requirements
- Every page must have one clear primary heading and a clear visual starting point.
- Each section must have a distinct purpose. Remove repeated explanations, redundant labels, and duplicate content.
- Use concise headings, short paragraphs, descriptive labels, and scannable lists.
- Prefer progressive disclosure: show essential information first and reveal secondary details only when requested or needed.
- Use consistent section spacing, card padding, and alignment from the shared design tokens.
- Keep sufficient whitespace between unrelated sections and tighter spacing only between closely related items.
- Limit each viewport to a manageable number of competing visual elements.
- Prioritize the primary task and primary action; secondary actions must not compete for equal attention.
- Use cards only when they help group information. Do not place every sentence, metric, or control inside its own card.
- Keep dashboard summaries brief. Move detailed explanations, extended histories, and secondary metrics into dedicated views, expandable sections, tabs, or detail panels where appropriate.
- Use charts only when they communicate useful information. Provide a concise title, relevant units, and a short interpretation when necessary.
- Maintain readable line lengths. Long-form content should use a comfortable reading width rather than stretching across the entire screen.
- Ensure text wraps naturally and controls have enough room for labels, icons, and focus indicators.
- Empty space is intentional when it improves focus and readability; do not fill it with unnecessary content or decoration.
Density guidelines
- Use a consistent content container and grid; do not stretch every section edge to edge.
- Use 16–24px internal padding for standard cards, adjusting only through established spacing tokens.
- Use clear vertical separation between page header, primary content, and secondary sections.
- Keep paragraph content short in dashboards. Where detailed context is necessary, use a concise summary with an optional “View details” action.
- Avoid showing multiple large charts, long text blocks, and several prominent calls to action in the same visual area.
- Keep forms focused on the current step. Group related fields and split genuinely long workflows into logical steps.
- On desktop, use columns only when they improve comparison or scanning. Do not create narrow columns that force text to wrap excessively.
- On mobile, simplify the hierarchy and stack content in a logical order rather than shrinking desktop layouts.
Do not
- Do not make every available piece of information visible at once.
- Do not use long paragraphs where short copy, bullets, labels, or summaries would be clearer.
- Do not add cards merely to decorate empty space.
- Do not place too many buttons or equally prominent actions beside one another.
- Do not fill the dashboard with redundant metrics, unnecessary charts, oversized headers, or repeated descriptions.
- Do not use tiny typography to fit more content into a crowded layout.
- Do not solve a spacing problem by shrinking text or reducing card padding below comfortable levels.
- Do not let decorative animations, shadows, gradients, or glass panels compete with content.
- Do not use fixed heights that clip text or force content into cramped containers.
Review test
Before approving a page, ask:
1. Can a user identify the page purpose and primary action within a few seconds?
2. Is every visible element necessary for the current task?
3. Can any repeated text, redundant metric, or decorative card be removed?
4. Is there enough space between unrelated sections?
5. Are paragraphs and labels easy to scan?
6. Does the layout remain spacious at tablet and mobile widths?
If the page feels crowded, simplify the content and hierarchy before adding more styling.
Every page must follow the shared design system defined in `design.md`.

### Mandatory requirements

- Use consistent typography, colors, spacing, borders, shadows, and corner radii.

- Reuse existing components instead of creating slightly different versions of the same element.

- Maintain consistent button sizes, input heights, icon styles, and interaction states.

- Keep headings, body text, labels, and supporting text visually distinct.

- Use a consistent spacing scale based on multiples of 4 px or 8 px.

- Maintain sufficient contrast between text, backgrounds, borders, and interactive elements.

- Ensure all pages feel like parts of one cohesive product.

- Keep the interface clean, professional, responsive, and visually balanced.

### Do not

- Introduce arbitrary colors or typography on individual pages.

- Use inconsistent hover effects for identical components.

- Add unnecessary gradients, shadows, glows, or decorative animations.

- create duplicate components with conflicting styles.

- Change the global design system without updating the relevant documentation and shared components.

---

## 3. Professional Animation Standards

Animations must be smooth, restrained, consistent, and purposeful.

### 3.1 Recommended durations

| Interaction | Duration |

|---|---:|

| Button hover and press | 150–200 ms |

| Icon state change | 150–200 ms |

| Input focus | 150–200 ms |

| Card hover | 200–300 ms |

| Dropdown open/close | 180–250 ms |

| Tooltip | 150–200 ms |

| Accordion | 200–300 ms |

| Modal open/close | 200–300 ms |

| Tab transition | 180–250 ms |

| Page transition | 200–350 ms |

| Scroll-triggered reveal | 350–600 ms |

These are defaults, not rigid requirements. Use shorter durations for small interactions and longer durations only when the effect justifies them.

### 3.2 Easing

Use consistent easing curves:

- Entrances: `ease-out`

- Exits: `ease-in`

- State transitions: `ease-in-out`

- Natural movement: a restrained custom cubic-bezier curve when appropriate

Avoid abrupt transitions, excessive bouncing, random easing, or motion that feels sluggish.

### 3.3 Preferred animation properties

Prefer animating:

- `transform`

- `opacity`

Use other properties only when necessary and test their rendering performance.

Avoid repeatedly animating layout-heavy properties such as `width`, `height`, `top`, `left`, and large blur filters when a transform-based alternative is practical.

### 3.4 Animation limits

- Do not animate every element on the screen simultaneously.

- Do not animate every section every time the user scrolls past it.

- Avoid excessive spinning, shaking, bouncing, flashing, or pulsing.

- Avoid distracting continuous background motion.

- Do not animate content in a way that delays access to important information.

- Avoid animations that cause layout shifts or unexpected page movement.

- Do not use animation as the only way to communicate status or meaning.

**Every animation must have a reason to exist.**

---

## 4. Standard Component Interaction States

Every interactive component must have clearly defined states.

### Buttons

Implement appropriate states:

- Default

- Hover

- Active or pressed

- Keyboard focus

- Disabled

- Loading, when an asynchronous action exists

- Success or error feedback, when relevant

Buttons must provide immediate visual feedback without exaggerated movement.

Recommended hover behavior:

- Slight color or border adjustment.

- Optional subtle shadow.

- Optional movement of approximately 1–2 px.

- Transition around 150–200 ms.

Do not use large scale changes, excessive glow, or bouncing for ordinary buttons.

### Links

Links must have:

- A clear visual identity.

- A visible hover state.

- A keyboard focus indicator.

- An understandable destination or action.

Use semantic `<a>` elements for navigation and actual destinations. Use `<button>` elements for actions that change application state.

Do not use `href="#"` as a substitute for a real destination.

### Inputs

Inputs must support:

- Default

- Hover, where appropriate

- Focus

- Valid

- Invalid

- Disabled

- Read-only, when applicable

Validation messages must explain what needs to be corrected.

### Cards

Cards that are clickable must visibly communicate that behavior.

Use restrained hover effects, such as:

- A subtle lift.

- A small shadow change.

- An image scale of approximately 1.01–1.03 when appropriate.

Do not make an entire card clickable if it contains conflicting nested actions without a clear interaction model.

### Modals and Drawers

- Animate opening and closing consistently.

- Provide a visible close button.

- Support Escape to close when appropriate.

- Keep keyboard focus inside modal dialogs while they are open.

- Restore focus to the triggering element when closed.

- Prevent background interaction when a modal requires exclusive attention.

- Do not close a modal unexpectedly while the user is interacting with its content.

---

## 5. Mandatory Button Wiring Rules

**No visible button may remain decorative or nonfunctional.**

Every button must have a documented, implemented action.

Before creating or modifying a button, determine:

1. What action does it perform?

2. What state changes when it is activated?

3. Does it navigate to another page or section?

4. Does it require validation or confirmation?

5. What feedback should the user receive?

6. What happens if the action fails?

### Expected behavior

| Button Type | Required Behavior |

|---|---|

| Navigation CTA | Navigate to the correct page or section |

| Submit button | Validate and submit the relevant form |

| Save button | Persist changes or clearly report that saving is unavailable |

| Cancel button | Discard or cancel the appropriate operation |

| Toggle button | Change the associated state |

| Theme toggle | Switch the entire interface theme |

| Preview button | Open the relevant preview |

| Play button | Start the selected animation |

| Replay button | Restart the selected animation |

| Reset button | Restore the demo to its initial state |

| Modal trigger | Open the intended modal |

| Close button | Close the associated modal, drawer, or panel |

| Download button | Start a real download or explain why the feature is unavailable |

| Copy button | Copy the intended content and provide feedback |

| Delete button | Require confirmation when destructive |

| Sign-out button | Execute sign-out or show a clearly identified prototype state |

### Rules

- Do not leave empty click handlers.

- Do not use fake success messages.

- Do not make a button appear enabled when its action is unavailable.

- Disable buttons only when there is a clear reason.

- Prevent duplicate submissions during ongoing operations.

- Preserve user input when an operation fails.

- Provide loading feedback for actions that take noticeable time.

- Provide success or error feedback after the operation actually completes.

- Use appropriate confirmation steps for destructive actions.

If a feature is not implemented, either implement it, clearly label it as a prototype, or present it as disabled with an explanation. Never pretend it works.

---

## 6. Mandatory Link Wiring Rules

Every visible link must have a meaningful destination.

### Internal links

- Link to the correct page, route, or section.

- Use consistent route naming.

- Ensure direct navigation to supported routes works.

- Provide a suitable fallback for unknown routes.

- Avoid links that lead to empty pages or unrelated sections.

### External links

- Use valid destination URLs.

- Identify external destinations when the context requires it.

- Apply appropriate security attributes when opening a new tab.

- Do not invent external URLs.

### Anchor links

- Scroll to the correct section.

- Account for sticky navigation when positioning the target.

- Use smooth scrolling only when motion preferences permit it.

- Ensure keyboard users can still navigate to the target.

### Link validation

Every link must be checked for:

- Missing destinations.

- Broken routes.

- Incorrect section IDs.

- Placeholder URLs.

- Unexpected page reloads.

- Incorrect target behavior.

- Accessibility problems.

**Never leave `href="#"`, empty URLs, or placeholder destinations in the final build unless their behavior is deliberately implemented and justified.**

---

## 7. Wireframing Rules

Wireframes must accurately communicate the intended structure, hierarchy, and behavior of the final interface.

### Low-fidelity wireframes

Use:

- Simple geometric shapes.

- Neutral grayscale blocks.

- Clearly defined content areas.

- Skeleton text and image placeholders.

- Consistent spacing and alignment.

- Explicit labels for major interface regions.

Do not overload low-fidelity wireframes with decorative effects or finished visual styling.

### High-fidelity wireframes

When presenting a finished UI alongside a wireframe:

- Preserve the same content hierarchy and approximate layout.

- Maintain the same intended actions and navigation structure.

- Clearly distinguish actual content from placeholder content.

- Keep component dimensions and alignment consistent wherever practical.

### Wireframe interactions

Wireframe previews must behave as expected:

- Preview opens the correct wireframe.

- Close controls dismiss the preview.

- Comparison controls switch between available versions.

- Device preview controls resize or change the actual preview layout.

- Navigation hotspots lead to the intended destination.

- Disabled interactions are visibly and accurately identified.

Do not display interaction hotspots that have no defined behavior.

---

## 8. Navigation and Page Transition Rules

All navigation must be predictable.

- Maintain consistent navbar structure across pages.

- Highlight the active navigation item.

- Ensure dropdown menus open and close correctly.

- Support keyboard navigation.

- Prevent menu content from being clipped by containers.

- Close mobile navigation after selecting an item.

- Avoid accidental navigation when interacting with nested controls.

- Preserve expected state when switching between views.

### Page transitions

- Keep transitions short and unobtrusive.

- Avoid unnecessary transition effects on every interaction.

- Ensure navigation remains responsive.

- Do not block content access while decorative animations run.

- Respect reduced-motion preferences.

- Ensure the transition does not create duplicate content, flicker, or unexpected scroll positions.

---

## 9. Scroll Animations and Motion Triggers

Scroll-triggered animations must not compromise usability.

- Use Intersection Observer or an equivalent efficient mechanism where appropriate.

- Trigger reveal animations when content enters the viewport.

- Avoid hiding important content indefinitely if animation initialization fails.

- Do not repeatedly replay animations without a deliberate reason.

- Avoid large parallax effects that make scrolling uncomfortable.

- Prevent content from jumping when animation begins.

- Ensure content remains available when JavaScript is unavailable or animations are disabled.

Content must remain readable and accessible regardless of animation state.

---

## 10. Accessibility Requirements

Accessibility is mandatory for all pages and interactions.

### Keyboard access

- All interactive elements must be keyboard accessible.

- Maintain a visible focus indicator.

- Use logical tab order.

- Do not create keyboard traps, except the intentional focus containment of modal dialogs.

- Support Escape for dismissible overlays and menus when appropriate.

### Reduced motion

Respect `prefers-reduced-motion: reduce`.

When enabled:

- Remove unnecessary floating motion and parallax.

- Reduce or eliminate large movement transitions.

- Avoid auto-playing decorative animation loops.

- Keep controls and state changes fully functional.

- Never make content dependent on motion to become visible.

### Other requirements

- Use semantic HTML elements.

- Give icon-only buttons accessible names.

- Add labels to form fields.

- Provide appropriate alternative text for meaningful images.

- Do not rely on color alone to communicate status.

- Ensure sufficient contrast.

- Keep touch targets comfortably usable on mobile devices.

---

## 11. Responsive Design Rules

Every page and interactive component must work across desktop, tablet, and mobile layouts.

- Prevent horizontal overflow.

- Collapse grids according to available space.

- Keep navigation usable on small screens.

- Resize modals and drawers appropriately.

- Ensure buttons do not overlap or become clipped.

- Preserve readable typography.

- Keep important actions accessible without excessive scrolling.

- Adapt hover-dependent interactions for touch devices.

- Ensure animation performance remains acceptable on lower-powered devices.

Do not treat responsive preview icons as functional unless they change the actual preview.

---

## 12. State Management and Feedback

Every state-changing interaction must update the interface correctly.

- Keep component state synchronized with visible UI.

- Avoid inconsistent states between controls and their content.

- Reset temporary state when appropriate.

- Preserve unsaved user input during recoverable errors.

- Prevent stale loading indicators.

- Avoid showing success before an operation succeeds.

- Display helpful empty, loading, success, and error states where relevant.

For prototype-only features, use clearly labeled simulated behavior rather than presenting simulated results as real external operations.

---

## 13. Performance Standards

- Prefer CSS transitions for simple hover and state changes.

- Use JavaScript animation libraries only when they provide a clear benefit.

- Avoid unnecessary animation loops.

- Avoid excessive simultaneous animations.

- Use transform and opacity where practical.

- Clean up event listeners, observers, and animation resources.

- Avoid unnecessary re-renders.

- Lazy-load large previews when appropriate.

- Test interactions on typical desktop and mobile hardware.

The interface must remain responsive while animations are running.

---

## 14. Code Quality and Reusability

- Build reusable components for common UI patterns.

- Keep animation durations and easing values centralized in design tokens or shared utilities.

- Use consistent component APIs.

- Separate interaction logic from presentation when practical.

- Avoid duplicated CSS and conflicting animation definitions.

- Use descriptive component names.

- Remove obsolete handlers and unused animation code.

- Avoid hard-coded destinations scattered across multiple components.

- Keep navigation destinations centralized when appropriate.

Do not introduce new dependencies without a clear technical reason.

Follow the existing project stack and structure described in `design.md`.

---

## 15. Testing and Verification

Before marking a page complete, test every visible interactive element.

### Interaction checklist

- [ ] Every button performs its intended action.

- [ ] Every link leads to the correct destination.

- [ ] No placeholder links remain unintentionally.

- [ ] Navigation and active states work.

- [ ] Dropdowns open and close.

- [ ] Modals open, close, and support keyboard interaction.

- [ ] Forms validate correctly.

- [ ] Save, cancel, and reset behaviors work.

- [ ] Loading, disabled, success, and error states are correct.

- [ ] Animation controls actually control their demos.

- [ ] Replay and reset behave consistently.

- [ ] Wireframe previews display the correct screen.

- [ ] Device preview controls affect the layout.

- [ ] Theme switching works across all components.

- [ ] Reduced-motion preferences are respected.

- [ ] Desktop, tablet, and mobile layouts work.

- [ ] No console errors or obvious layout shifts occur.

- [ ] Keyboard navigation and visible focus work correctly.

### Completion rule

A page is not considered complete merely because it looks correct in a screenshot.

It must also pass the relevant interaction, navigation, accessibility, responsive, and visual consistency checks.

---

## 16. Rules for AI Coding Tools and Future Contributors

Whenever an AI coding tool or developer modifies this project:

1. Read `design.md` and `rules.md` before making substantial UI changes.

2. Inspect existing components before creating new ones.

3. Reuse established styles and interaction patterns.

4. Preserve unrelated pages and functionality.

5. Do not replace working components with static mockups.

6. Do not remove functionality to make a design easier to implement.

7. Wire all newly introduced buttons, links, menus, and controls.

8. Add appropriate loading, empty, error, and disabled states.

9. Respect accessibility and reduced-motion requirements.

10. Test affected routes and interactions after changes.

11. Update shared components when a global behavior needs correction.

12. Report honestly which features are functional, simulated, or still incomplete.

Do not claim that testing passed unless the relevant checks were actually performed.

---

## 17. Definition of Done

A feature or page is complete only when:

- Its design follows the shared design system.

- Its wireframe and layout are consistent with the intended experience.

- Its animations are purposeful, smooth, and accessible.

- All visible buttons and links have defined behavior.

- Interactive states are implemented correctly.

- The layout works on supported screen sizes.

- The relevant interactions have been tested.

- No unintended placeholders or dead controls remain.

- Any unavailable or simulated functionality is clearly identified.

### Whitespace and simplicity are non-negotiable

Every page must prioritize clarity over information density. When a screen feels crowded, remove or progressively disclose secondary content before reducing typography, spacing, or touch-target sizes. Preserve meaningful breathing room across desktop, tablet, and mobile layouts.
## Final Principle

**A professional interface is not just visually attractive. It must be consistent, responsive, accessible, interactive, and honest about what it can do.**

Apply these rules consistently to every page and every future update in the project.