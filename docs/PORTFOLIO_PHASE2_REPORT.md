# Portfolio Phase 2 — Strategic Report

**Date:** 2026-06-25  
**Project:** https://portfolio-leonardo-fragoso-react.vercel.app/  
**Goal:** Transform the portfolio into a world-class Senior Backend Engineer portfolio.

---

## 1. What Was Implemented

### Phase 1 — Project Prioritization

- Created `docs/PROJECT_RANKING.md`.
- Ranked 19 projects into Tier 1, Tier 2 and Tier 3.
- Identified ProFlow, AgentesIA/Oráculo IA and LogiFlow CRM as the three flagship projects.

### Phase 2 — Featured Projects Section

- Created `src/components/FeaturedProjects.tsx`.
- Added a new section with the top 3 projects.
- Each project includes Problem, Solution, Architecture, Results, GitHub and Demo links.
- Added to the main page flow between Social Proof and Projects.
- Added Oráculo IA to the projects array.

### Phase 3 — Case Studies

- Created `docs/case-study-oraculo.md`.
- Created `docs/case-study-proflow.md`.
- Created `docs/case-study-logiflow.md`.
- Each contains: Business Problem, Technical Architecture, Database Design, API Design, AI Components, Challenges, Lessons Learned, Scalability Considerations.

### Phase 4 — Architecture Diagrams

- Created `docs/ARCHITECTURE_DIAGRAMS.md`.
- Includes Mermaid diagrams for Oráculo IA, ProFlow AI and LogiFlow CRM.
- Covers frontend, backend, database, AI services, external integrations and deployment.

### Phase 5 — GitHub Authority Plan

- Created `docs/GITHUB_AUTHORITY_PLAN.md`.
- Audits pinned repos, README quality, screenshots, contribution graph and repository consistency.
- Provides README template and 4-week action plan.

### Phase 6 — Recruiter Landing Section

- Updated `WhyHireMe` translations in `src/i18n/translations.ts`.
- New focus: Enterprise Systems, AI-Powered Applications, API & Backend Architecture, Production-Ready Systems.
- Removed junior-adjacent language like "fast learner" and "looking to grow".

### Phase 7 — International Positioning

- Created `docs/INTERNATIONAL_POSITIONING_REPORT.md`.
- Audits English copy, tone, contact preferences and localization.
- Recommends custom domain, English-first case studies and Email/LinkedIn prominence.

### Phase 8 — Performance & SEO Audit

- Created `docs/PERFORMANCE_AUDIT.md`.
- Ran Lighthouse 13.4.0 on production.
- Current scores: Performance 37, Accessibility 100, Best Practices 77, SEO 100.
- Generated full reports: `docs/lighthouse-report.report.json` and `.html`.

### Phase 9 — Portfolio Scorecard

- Created `docs/PORTFOLIO_SCORECARD.md`.
- Scored 9 areas from 0–10.
- Current overall weighted score: 6.6 / 10.
- Target after 90 days: 8.4 / 10.

---

## 2. What Still Needs Improvement

### High Priority

1. **Performance:** Lighthouse Performance is 37. LCP 8.1s, TBT 2,990ms.
2. **Project List:** 18 projects is too many. Reduce to 8-10.
3. **GitHub READMEs:** Tier 1 and Tier 2 repos need comprehensive READMEs.
4. **Case Studies:** Convert markdown docs into actual portfolio pages.

### Medium Priority

5. **English Copy:** Still sounds translated in some places.
6. **Custom Domain:** Move from `vercel.app` to a professional domain.
7. **Architecture Diagrams:** Move from docs to interactive or visual components in the site.
8. **Contact Internationalization:** Email/LinkedIn should be more prominent in EN mode.

### Low Priority

9. **Blog:** Add technical articles to build authority.
10. **Open Source:** Contribute to international Python projects.
11. **Testimonials:** Add LinkedIn recommendations or client quotes.

---

## 3. Biggest Opportunities

1. **Performance optimization** — single biggest score improvement.
2. **Case study pages** — directly address technical authority.
3. **GitHub README overhaul** — recruiters will check GitHub.
4. **Project curation** — less is more for senior perception.
5. **International English copy** — unlock US/UK/EU opportunities.

---

## 4. Weakest Areas

1. **Performance (3/10)** — large JS bundle, unoptimized images, slow LCP.
2. **Technical Authority (6/10)** — depth is hidden in descriptions.
3. **Seniority Perception (6/10)** — some copy still signals growth mindset.
4. **International Readiness (6/10)** — Brazilian signals remain strong.

---

## 5. 90-Day Roadmap

### Weeks 1–2: Performance & Content

- [ ] Implement image lazy loading and WebP conversion.
- [ ] Optimize font loading and defer third-party scripts.
- [ ] Reduce JS bundle (tree-shake, code-split).
- [ ] Re-run Lighthouse; target Performance > 70.
- [ ] Overhaul ProFlow, AgentesIA/Oráculo and LogiFlow GitHub READMEs.

### Weeks 3–4: Case Studies & Authority

- [ ] Convert case study markdown into React pages.
- [ ] Add architecture diagrams to the portfolio.
- [ ] Pin top 6 repos on GitHub.
- [ ] Add consistent topics and screenshots to all Tier 1 repos.
- [ ] Re-run Lighthouse; target Performance > 85.

### Weeks 5–6: Curation & Internationalization

- [ ] Reduce project list from 18 to 8-10.
- [ ] Refresh English copy to sound native and senior.
- [ ] Add custom domain.
- [ ] Make Email/LinkedIn more prominent in English mode.
- [ ] Update CV filenames and links.

### Weeks 7–8: Polish & Measurement

- [ ] Add sticky CTA and test conversion.
- [ ] Add LinkedIn recommendations or testimonials.
- [ ] Publish 1-2 technical articles in English.
- [ ] Review Clarity recordings weekly.
- [ ] Final Lighthouse run; target Performance > 90.

### Weeks 9–12: Ongoing Authority

- [ ] Maintain GitHub contribution graph.
- [ ] Update case studies with real metrics.
- [ ] Add a blog section.
- [ ] Contribute to open-source Python projects.
- [ ] Re-evaluate portfolio scorecard.

---

## 6. Files Created or Modified

### New Files

- `docs/PROJECT_RANKING.md`
- `docs/GITHUB_AUTHORITY_PLAN.md`
- `docs/INTERNATIONAL_POSITIONING_REPORT.md`
- `docs/PERFORMANCE_AUDIT.md`
- `docs/PORTFOLIO_SCORECARD.md`
- `docs/PORTFOLIO_PHASE2_REPORT.md`
- `docs/ARCHITECTURE_DIAGRAMS.md`
- `docs/case-study-oraculo.md`
- `docs/case-study-proflow.md`
- `docs/case-study-logiflow.md`
- `docs/lighthouse-report.report.json`
- `docs/lighthouse-report.report.html`
- `src/components/FeaturedProjects.tsx`

### Modified Files

- `src/App.tsx` — added FeaturedProjects.
- `src/i18n/translations.ts` — added Featured Projects translations and updated WhyHireMe.
- `src/components/Projects.tsx` — added Oráculo IA.
- `src/utils/analytics.ts` — added `project_case_study_click` event.

---

## 7. Recommended Next Action

Start with **performance**. The Lighthouse score of 37 is the biggest blocker for a senior-level portfolio. A fast site signals engineering competence, while a slow site undermines all the technical authority work.

After performance, focus on **GitHub READMEs** because recruiters will inevitably click from the portfolio to GitHub.
