# react-patterns

source:https://www.patterns.dev/vanilla/static-import/

JavaScript Patterns:

Design patterns:
  1. Command Pattern
  2. Factory Pattern
  3. Flyweight Pattern
  4. Mediator/Middleware Pattern
  5. Mixin Pattern
  6. Module Pattern
  7. Observer Pattern
  8. Prototype Pattern
  9. Provider Pattern
  10. Proxy Pattern
  11. Singleton Pattern

rendering patterns:
| Pattern               | Speed (Initial) | SEO Friendly    | Use Case                    |
| --------------------- | --------------- | --------------- | --------------------------- |
| Progressive Hydration | Fast            | Excellent       | Large-scale SSR apps        |
| Streaming SSR         | Fast            | Excellent       | News feeds, complex apps    |
| Islands Architecture  | Very Fast       | Excellent       | Content-focused sites       |
| Edge Rendering        | Fast            | Good            | Global audience             |

Most of the cases try to use these 4 render patterns.


✅ 1. Progressive Hydration / Selective Hydration
Description: Only hydrate (enable interactivity) parts of the page as needed.

Flow: Server-rendered HTML → Hydrate section-by-section.

Use Case: React 18 with Server Components.

Pros: Better performance on large pages.

Cons: Advanced technique.

✅ 2. Streaming Server-Side Rendering
Description: Send pieces of HTML to the browser in a stream (not all at once).

Flow: Server → Streams chunks of HTML → Browser renders as it arrives.

Use Case: React 18 streaming, frameworks like Remix.

Pros: Fast perceived performance.

Cons: Browser compatibility and complexity.

✅ 3. Islands Architecture
Description: Static HTML with interactive “islands” of JS.

Flow: HTML → Static shell + hydrated islands.

Use Case: Astro, Fresh (Deno).

Pros: Minimal JS, highly optimized.

Cons: Less common, emerging pattern.

✅ 4. Edge Rendering
Description: Rendering happens on edge servers (CDN) instead of a centralized server.

Flow: Request → Nearest server → Render → Respond.

Use Case: Next.js with Vercel Edge Functions.

Pros: Ultra-low latency.

Cons: Some platform limitations.


Performance Patterns:
1. Bundle Splitting:

Bundle Splitting (also known as code splitting) is a frontend optimization technique where your JavaScript code is divided into smaller chunks (bundles), so the browser can load only what's needed instead of everything upfront.

2. Compressing JavaScript(build mode):

Compressing JavaScript (also called minification) is the process of reducing the size of your JS files by removing unnecessary characters — without changing how the code works.

3. Import on Interaction:

Import on Interaction is a performance optimization technique where you load a JavaScript module only when the user interacts with the UI — like clicking a button, hovering, or focusing.

It’s a form of lazy loading that happens only in response to user input, not just based on route or initial visibility.

4. Dynamic Import:

Dynamic import is a JavaScript feature that lets you load modules on demand (at runtime) instead of at the top of your file like static imports

5.  Import on Visibility:
Import on Visibility is a pattern where a component or module is only loaded when it becomes visible in the viewport — for example, when a user scrolls down to it.

It's a lazy loading strategy that delays loading until the user is likely to need the resource — saving bandwidth and speeding up initial page load.

6. Optimize Your Loading Sequence :
“Optimizing your loading sequence” means strategically loading resources in a way that minimizes page load time and maximizes perceived performance. It’s about what to load, when to load, and how to load it.

7. Prefetching:
Prefetching means loading resources (like JavaScript, CSS, or routes) before the user actually needs them, in the background and without blocking the current experience.

This helps to make the app feel blazing fast when the user finally clicks or navigates to something, because the assets are already cached!

8. Preload:

Preload is a browser hint used to load important resources early, before the browser discovers them naturally. It is especially useful for fonts, hero images, and critical JS/CSS, helping improve performance metrics like LCP (Largest Contentful Paint).

9. PRPL:

PRPL is a web performance pattern designed by Google to optimize the delivery of web apps, especially on mobile. It improves loading speed, interactivity, and perceived performance.

| Letter | Meaning                        | Description                                                               |
| ------ | ------------------------------ | ------------------------------------------------------------------------- |
| **P**  | **Push** critical resources    | Use HTTP/2 Push (or preload) to deliver important assets early            |
| **R**  | **Render** initial route ASAP  | Show the initial view as quickly as possible (e.g., home screen)          |
| **P**  | **Pre-cache** remaining routes | Cache other assets and views for offline or faster future navigation      |
| **L**  | **Lazy-load** other routes     | Load remaining parts of the app only when the user needs them (on demand) |

10. Optimizing Loading of Third-Party Scripts (e.g., Google Analytics, Chat Widgets, Ads, etc.):

Third-party scripts can block rendering, slow down load time, and hurt performance if not optimized properly. Here’s how to handle them efficiently.

<!-- Loads in parallel, executes ASAP (not in order) -->
<script src="https://example.com/analytics.js" async></script>

<!-- Loads in parallel, executes after HTML parsing (in order) -->
<script src="https://example.com/chat.js" defer></script>

11.  Tree Shaking:
Tree Shaking is a technique used in modern JavaScript bundlers (like Webpack, Vite, Rollup) to remove unused (dead) code from your final JavaScript bundle.

It’s called "tree shaking" because it metaphorically shakes the tree (your codebase) and removes the "dead leaves" (unused exports).

when we build any app for production tree shaking works there.

12. List Virtualization:

List Virtualization (also called windowing) is a performance optimization technique used to efficiently render large lists or tables by only rendering the items visible in the viewport (plus a small buffer), instead of rendering the entire list at once.

REACT PATTERNS:
1. Compound Component Pattern:

A design pattern where multiple components work together as a single unit, typically sharing implicit state from a parent component. 

(use context api , redux etc)

2. HOC Pattern:

A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced behavior.

It's like a wrapper function that adds extra logic or props without modifying the original component.

3. Hooks Pattern:

The Hooks Pattern is a way to extract and reuse component logic using custom hooks (i.e., functions that use built-in React hooks like useState, useEffect, etc.).

4. Container/Presentational Pattern:

It’s a design pattern that separates UI (presentational) components from logic and data (container) components.

Presentational Component
→ Focuses purely on how things look (UI).
→ Receives data and callbacks via props.

Container Component
→ Focuses on how things work (logic, state, data fetching).
→ Passes props to presentational component.
