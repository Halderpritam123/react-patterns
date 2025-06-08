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
