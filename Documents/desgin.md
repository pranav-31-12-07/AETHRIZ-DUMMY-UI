# Design.md — UI Animation & Wireframing Playground

## 1. Project Overview

**Project Name:** MotionLab — UI Playground

**Project Type:** Dummy website / frontend prototype

**Purpose:** Create a visually appealing demonstration website for showcasing modern website wireframes, UI animations, micro-interactions, transitions, and reusable interface components.

The website is intended for design demonstrations, prototyping, experimentation, and presentations. It does not require a production backend, authentication system, or real user data.

### Primary Goals

- Demonstrate modern UI animations and transitions.
- Showcase wireframes and their high-fidelity UI equivalents.
- Provide interactive components that visitors can test.
- Demonstrate responsive layouts and navigation patterns.
- Create a reusable playground for experimenting with frontend design ideas.
- Keep the project lightweight, maintainable, and easy to extend.

---

## 2. Design Direction

### Visual Style

Use a modern, minimal, premium design with a balance of clean layouts, subtle gradients, glassmorphism, and smooth motion.

The interface should feel like a professional design studio combined with an interactive component playground.

Avoid excessive decoration, unnecessary animations, and cluttered layouts.

### Color Palette

| Token | Color | Usage |
|---|---|---|
| Background | `#F7F8FA` | Main page background |
| Surface | `#FFFFFF` | Cards and panels |
| Primary Text | `#111318` | Headings and body text |
| Secondary Text | `#667085` | Supporting text |
| Primary Accent | `#6C5CE7` | Primary buttons and active states |
| Secondary Accent | `#00BFA6` | Interactive highlights |
| Border | `#E5E7EB` | Dividers and card outlines |
| Dark Surface | `#171923` | Dark preview sections |

Use accent colors selectively. The primary content should remain neutral and readable.

### Typography

- Use Inter, Geist, or a similar modern sans-serif font.
- Use bold, concise headings.
- Maintain a clear hierarchy between page titles, section headings, body text, and labels.
- Use monospace typography for code snippets and technical labels.

### UI Styling

- Rounded corners: 12–20 px.
- Thin, subtle borders.
- Soft, restrained shadows.
- Consistent spacing based on a 4 px or 8 px scale.
- Smooth hover states and clear focus indicators.
- Glassmorphism only where it improves the visual presentation.

---

## 3. Website Structure

Create a single-page experience with a reusable navigation bar and multiple demonstration sections.

### Page Sections

1. Home / Hero
2. Wireframe Gallery
3. Animation Playground
4. Interactive Components
5. Scroll Animations
6. Page Transition Demo
7. Responsive Preview
8. Footer

Use smooth navigation to move between sections.

---

## 4. Navigation Bar

Create a responsive, sticky navigation bar.

### Elements

- Logo: MotionLab
- Home
- Wireframes
- Animations
- Components
- About
- Theme toggle
- Primary CTA: `Explore Playground`

### Behavior

- Transparent or subtly blurred background at the top.
- Slight background opacity increase when scrolling.
- Smooth scrolling to selected sections.
- Animated underline or highlight for the active navigation item.
- Mobile menu that opens and closes smoothly.

---

## 5. Hero Section

### Content

**Eyebrow:** INTERACTIVE DESIGN PLAYGROUND

**Headline:** Design It. Animate It. Experience It.

**Description:** Explore modern UI patterns, experiment with motion, and transform simple wireframes into engaging interactive interfaces.

### Actions

- Primary: `Explore Animations`
- Secondary: `View Wireframes`

### Visual Direction

Create an abstract interface preview on the right side containing layered UI cards, floating interface elements, and subtle motion.

### Animations

- Headline enters with a staggered word reveal.
- Supporting text fades in after the headline.
- CTA buttons appear with a slight upward movement.
- Floating UI cards use slow, subtle movement.
- Background shapes have a soft parallax effect.

Animations must be smooth and restrained, not distracting.

---

## 6. Wireframe Gallery

### Purpose

Demonstrate how low-fidelity wireframes can be presented before applying the final visual design.

### Layout

Display a responsive grid of wireframe preview cards.

### Example Wireframes

- Landing Page
- Dashboard
- Login and Sign-Up
- Product Details
- Profile Page
- Analytics Dashboard

### Card Elements

- Wireframe thumbnail or simplified skeleton layout.
- Screen title.
- Short description.
- Screen dimensions or layout type.
- `Preview Wireframe` action.
- `View UI Version` action when a corresponding UI mockup exists.

### Interactions

- Hovering over a card slightly raises it.
- The preview image scales subtly.
- Preview opens a modal with an enlarged wireframe.
- A toggle switches between wireframe and high-fidelity preview when both versions exist.
- Modal closes with Escape, the close button, or an appropriate outside click.

Use clearly illustrative wireframes rather than real application data.

---

## 7. Animation Playground

This is the main section of the website.

Visitors should be able to trigger animations and compare different motion styles.

### Animation Categories

#### A. Entrance Animations

- Fade In
- Slide Up
- Slide Down
- Slide Left
- Slide Right
- Scale In
- Blur In
- Staggered Reveal

#### B. Hover Animations

- Lift Card
- Scale Image
- Button Glow
- Border Highlight
- Icon Rotation
- Magnetic-Style Hover, only if it remains accessible and comfortable

#### C. Loading Animations

- Skeleton Loader
- Circular Spinner
- Progress Bar
- Pulsing Dots
- Shimmer Effect

#### D. Text Animations

- Typewriter
- Word Reveal
- Character Reveal
- Gradient Text
- Animated Underline

#### E. Interface Transitions

- Modal Open and Close
- Accordion Expand
- Tab Switch
- Dropdown Open
- Sidebar Expand and Collapse

### Controls

Provide the following controls where relevant:

- `Play`
- `Replay`
- `Reset`
- Animation speed selector: Slow, Normal, Fast
- Animation style selector
- Optional duration control

Each demo should have a clear preview area and a small label explaining the effect.

### Behavior

- Animations should trigger from user interaction.
- Replay should restart the selected animation.
- Reset should restore the component to its initial state.
- Controls must affect the displayed demo rather than being decorative.
- Avoid animations that run continuously without a clear purpose.

---

## 8. Interactive Components

Create a collection of reusable UI components that demonstrate practical micro-interactions.

### Components

1. Primary and secondary buttons.
2. Animated cards.
3. Toggle switches.
4. Tabs.
5. Accordions.
6. Tooltips.
7. Dropdown menus.
8. Modal dialogs.
9. Toast notifications.
10. Progress indicators.
11. Skeleton loading states.
12. Form inputs with validation states.
13. Animated navigation menu.
14. Theme switcher.

### Interaction Requirements

- Buttons show hover, active, focus, and disabled states.
- Toggles visibly change their state.
- Tabs update the displayed content.
- Accordions expand and collapse.
- Toast notifications appear and dismiss.
- Modals support keyboard dismissal.
- Form inputs demonstrate empty, focused, invalid, and valid states.

All demonstrations should work without requiring a backend.

---

## 9. Scroll Animation Demonstrations

Create a section that demonstrates animations triggered as elements enter the viewport.

### Examples

- Fade-up content blocks.
- Staggered card grids.
- Horizontal content reveal.
- Image and text split reveal.
- Progress indicators that animate into view.
- Subtle parallax effects.

### Implementation Guidelines

- Prefer the Intersection Observer API or an equivalent lightweight approach.
- Animate elements when they enter the viewport.
- Avoid repeatedly triggering distracting animations during minor scrolling.
- Respect the user's reduced-motion preference.
- Prevent layout shifts while animations run.

---

## 10. Page Transition Demo

Create a small navigation demo that illustrates transitions between simulated pages.

### Example Views

- Overview
- Projects
- Components
- Settings

### Transition Styles

- Fade
- Slide
- Scale
- Shared-element-inspired transition, if practical

Switching views should animate the content smoothly without reloading the entire website.

Use a lightweight frontend implementation. A full routing framework is unnecessary unless the project expands.

---

## 11. Responsive Preview

Provide a demonstration panel with device-size controls.

### Preview Modes

- Desktop
- Tablet
- Mobile

The preview should resize a sample interface to demonstrate how layouts adapt to different screen widths.

### Requirements

- Desktop navigation can become a mobile menu.
- Multi-column grids collapse appropriately.
- Text remains readable.
- Buttons retain usable touch targets.
- No horizontal overflow.
- Modals and previews remain usable on smaller screens.

The responsive preview must change the actual sample viewport or layout, not simply switch decorative icons.

---

## 12. Theme Toggle

Support light and dark theme demonstrations.

### Light Theme

- Background: `#F7F8FA`
- Surface: `#FFFFFF`
- Text: `#111318`
- Border: `#E5E7EB`

### Dark Theme

- Background: `#111318`
- Surface: `#1B1E27`
- Text: `#F7F8FA`
- Secondary Text: `#A0A7B4`
- Border: `#303440`

### Behavior

- Theme switches immediately with a subtle transition.
- All major components adapt to the selected theme.
- Maintain sufficient contrast in both themes.
- Avoid flashing or unnecessary page reloads.

---

## 13. Animation Design Principles

### Motion Timing

Use these as initial design defaults:

| Interaction | Duration |
|---|---:|
| Button hover | 150–200 ms |
| Card hover | 200–300 ms |
| Dropdown | 180–250 ms |
| Modal | 200–300 ms |
| Section reveal | 400–650 ms |
| Page transition | 200–350 ms |

Use easing such as `ease-out` for entrances and `ease-in-out` for state changes.

### Motion Rules

- Prefer transform and opacity animations.
- Avoid animating layout-heavy properties where possible.
- Keep motion purposeful and predictable.
- Avoid excessive bounce, spinning, flashing, or continuous movement.
- Use CSS animations for simple effects.
- Use JavaScript only when state or interaction requires it.

### Accessibility

Support `prefers-reduced-motion`.

When reduced motion is enabled:
- Disable nonessential floating and parallax effects.
- Reduce or remove large movement transitions.
- Keep all interactions usable.
- Preserve visible state changes without relying solely on animation.

---

## 14. Technical Implementation

### Recommended Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion or Motion for React
- Lucide icons

These are recommendations, not mandatory dependencies. Prefer the tools already configured in the project.

### Architecture

Organize the project into reusable components.

Suggested structure:

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimationCard.tsx
│   ├── WireframeCard.tsx
│   ├── Modal.tsx
│   ├── Toast.tsx
│   ├── ThemeToggle.tsx
│   └── DevicePreview.tsx
├── sections/
│   ├── Hero.tsx
│   ├── WireframeGallery.tsx
│   ├── AnimationPlayground.tsx
│   ├── ComponentShowcase.tsx
│   ├── ScrollAnimations.tsx
│   └── PageTransitionDemo.tsx
├── hooks/
├── utils/
├── App.tsx
└── main.tsx
```

Adapt this structure to the existing repository rather than recreating the project unnecessarily.

### Data and Backend

- Use local mock data.
- No database required.
- No authentication required.
- No API calls required.
- No real user information.
- Keep demo state in the frontend.

### Performance

- Avoid unnecessarily large animation libraries.
- Lazy-load nonessential preview assets where appropriate.
- Prevent unnecessary component re-renders.
- Keep animations smooth on typical desktop and mobile hardware.
- Avoid large video backgrounds or heavy 3D assets unless explicitly needed.

---

## 15. Quality and Acceptance Criteria

The project is considered complete when:

- [ ] All main sections are implemented.
- [ ] Navigation scrolls to the correct sections.
- [ ] Wireframe previews open and close correctly.
- [ ] Wireframe/high-fidelity switching works where both previews exist.
- [ ] Animation controls trigger the selected effects.
- [ ] Replay and reset work correctly.
- [ ] Interactive components respond to user input.
- [ ] Toast notifications and modals work.
- [ ] Scroll animations trigger appropriately.
- [ ] Page transition demos switch views smoothly.
- [ ] Desktop, tablet, and mobile layouts are usable.
- [ ] Light and dark themes work consistently.
- [ ] Keyboard navigation and focus states are supported.
- [ ] Reduced-motion preferences are respected.
- [ ] No unnecessary backend or external service is required.
- [ ] No broken links, nonfunctional buttons, or console errors remain.

---

## 16. Final Design Goal

Build MotionLab as a polished, interactive frontend playground that demonstrates how wireframes become interfaces and how animations improve the user experience.

The final result should feel like a real design tool rather than a static portfolio page.

**Primary priorities:** interactive demonstrations, smooth animations, functional controls, clean wireframes, responsive layouts, accessibility, and maintainable frontend code.
