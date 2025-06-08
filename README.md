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
