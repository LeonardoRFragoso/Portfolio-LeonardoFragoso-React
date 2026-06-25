# Performance & SEO Audit — Portfolio Leonardo Fragoso

**Date:** 2026-06-25  
**URL:** https://portfolio-leonardo-fragoso-react.vercel.app/  
**Tool:** Lighthouse 13.4.0 (Mobile)

---

## 1. Current Scores

| Category | Score | Status |
|----------|-------|--------|
| Performance | **37 / 100** | Needs improvement |
| Accessibility | **100 / 100** | Excellent |
| Best Practices | **77 / 100** | Good |
| SEO | **100 / 100** | Excellent |
| Agentic Browsing | 0.50 | Partial |

---

## 2. Core Web Vitals

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Largest Contentful Paint (LCP) | **8.1 s** | < 2.5 s | Poor |
| First Contentful Paint (FCP) | **2.9 s** | < 1.8 s | Needs improvement |
| Total Blocking Time (TBT) | **2,990 ms** | < 200 ms | Poor |
| Cumulative Layout Shift (CLS) | **0.002** | < 0.1 | Excellent |
| Speed Index | **5.7 s** | < 3.4 s | Poor |

---

## 3. Main Performance Issues

### 3.1 JavaScript Bundle Size

- `index-BEQEQKe1.js` is ~423 kB (gzipped ~121 kB).
- Large bundle blocks the main thread, increasing TBT and FCP.
- Framer Motion, Lucide icons and React are heavy dependencies.

### 3.2 Image Loading

- Multiple project screenshots loaded eagerly on initial render.
- No explicit width/height attributes on some images.
- CLS is good, but images are large contributors to LCP.

### 3.3 Font Loading

- Google Fonts loaded without `display=swap` or preconnect optimization.
- Fonts may block first paint.

### 3.4 Third-Party Scripts

- Microsoft Clarity and Google Analytics 4 add network requests.
- Currently loaded normally (not async/defer in all cases).

---

## 4. Best Practices Issues

- Console logs in development mode (`analytics.ts`).
- Some external links should use `rel="noopener noreferrer"` consistently.
- Browserslist database is outdated (warning, not critical).

---

## 5. Recommendations

### 5.1 Immediate (High Impact, Low Effort)

1. **Lazy load project images**
   - Add `loading="lazy"` to all project card images.
   - Use a placeholder or blur-up effect.

2. **Code-split the project gallery**
   - Move the modal/gallery code into a separate chunk.

3. **Preconnect and font-display**
   - Add `preconnect` to Google Fonts.
   - Use `?display=swap` for fonts.

4. **Defer non-critical scripts**
   - Load Clarity and GA4 with `async` or `defer`.

5. **Remove unused console logs**
   - Wrap analytics debug log in a stricter dev check or remove it.

### 5.2 Medium-Term (High Impact, Medium Effort)

1. **Bundle optimization**
   - Tree-shake Lucide icons (import named icons only).
   - Replace Framer Motion with CSS transitions where possible.
   - Split the app into route-level chunks.

2. **Image optimization**
   - Convert PNG/JPG to WebP/AVIF.
   - Serve responsive images with `srcset`.
   - Use Vercel Image Optimization or a CDN.

3. **Preload critical assets**
   - Preload hero image and above-the-fold CSS.

4. **Reduce JS execution time**
   - Memoize heavy calculations in `Projects.tsx`.
   - Remove unused modal states and dead code.

### 5.3 Long-Term (High Impact, High Effort)

1. **Server-Side Rendering (SSR)**
   - Migrate to Next.js for better initial render and SEO.

2. **Static Site Generation**
   - Pre-render the main page at build time.

3. **Progressive Web App**
   - Add service worker for caching.

---

## 6. Target Scores

| Category | Current | Target | Priority |
|----------|---------|--------|----------|
| Performance | 37 | 90 | High |
| Accessibility | 100 | 100 | Maintain |
| Best Practices | 77 | 95 | Medium |
| SEO | 100 | 100 | Maintain |

---

## 7. Accessibility Highlights

- 100/100 accessibility score.
- Good contrast, ARIA labels and semantic HTML.
- Maintain this standard during all future changes.

---

## 8. SEO Highlights

- 100/100 SEO score.
- Meta tags, canonical URL and JSON-LD schema are present.
- Updated to "Python Backend Developer" positioning.

---

## 9. Files Generated

- `docs/lighthouse-report.report.json` — full Lighthouse report
- `docs/lighthouse-report.report.html` — visual report

---

## 10. Next Steps

1. Implement image lazy loading.
2. Optimize font loading.
3. Remove unused code and console logs.
4. Re-run Lighthouse after each change.
5. Target Performance > 90 before the next major feature push.
