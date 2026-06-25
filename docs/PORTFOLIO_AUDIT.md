# Portfolio Leonardo Fragoso — CRO & UX Audit

**Project:** https://portfolio-leonardo-fragoso-react.vercel.app/  
**Date:** 2026-06-25  
**Auditor:** Cascade AI / Leonardo Fragoso  

---

## 1. Executive Summary

The portfolio already has a strong visual identity and plenty of technical content. The main conversion problem is not lack of information — it is **information overload and decision friction**. Visitors (recruiters, hiring managers, clients) must work hard to understand what Leonardo does and how to contact him.

**Primary conversion goal:** Visitor → Contact (email, WhatsApp, LinkedIn, or form submission).

---

## 2. Methodology

- Heuristic evaluation of all sections
- Microsoft Clarity session analysis
- Mobile and desktop responsiveness review
- Information hierarchy and CTA audit
- Recruiter/client mental-model walkthrough

---

## 3. Problems Found

### 3.1 Hero — Value Proposition Too Fragmented

| Severity | Impact |
|----------|--------|
| **High** | Visitors leave within 3-5 seconds without understanding the offer. |

- Rotating tagline forces the visitor to wait for the message.
- Multiple paragraphs dilute the main positioning.
- CTA hierarchy is project-first instead of contact-first.

**Recommended solution:**
- Static headline: "Python Backend Developer".
- One-line subheadline: "APIs, Applied AI and Corporate Systems that scale.".
- Tech pills as scannable badges.
- Primary CTA: "Contact Me / Fale Comigo".
- Secondary CTA: "View Projects".

---

### 3.2 Contact Is Not Prominent Enough

| Severity | Impact |
|----------|--------|
| **High** | A qualified visitor (Clarity recording) jumped between Contact and Projects, suggesting they wanted contact but needed validation first. |

- Contact link is in the nav, but the Hero pushes "Projects" first.
- No WhatsApp shortcut.
- No project-type qualification in the contact form.

**Recommended solution:**
- "Contact Me" as primary Hero CTA.
- Floating WhatsApp button on every page.
- Add project-type dropdown to the form.
- Display WhatsApp, LinkedIn, Email, GitHub as quick-contact cards.

---

### 3.3 Project Cards Lack Conversion CTAs

| Severity | Impact |
|----------|--------|
| **High** | High interest in projects does not convert into contact intent. |

- Each card has GitHub and Demo, but no obvious "I want this" action.
- Visitor must remember the project and then scroll to Contact.

**Recommended solution:**
- Add "Quero algo assim / Want something similar" WhatsApp CTA on every card.
- Track which projects generate the most contact intent.

---

### 3.4 No Social Proof Above the Fold

| Severity | Impact |
|----------|--------|
| **Medium** | Credibility signals (ICTSI, enterprise systems, GitHub projects) appear too late or scattered. |

**Recommended solution:**
- Add a credibility block above Projects with checkmarks and factual claims:
  - Experience at iTracker / ICTSI.
  - 6+ corporate systems delivered.
  - 20+ public projects on GitHub.

---

### 3.5 Analytics Only Passive (Clarity Recordings)

| Severity | Impact |
|----------|--------|
| **Medium** | Cannot measure which CTA or project drives the most contact intent. |

**Recommended solution:**
- Implement custom events for Clarity and Google Analytics 4.
- Track every CTA, project card, WhatsApp, email, LinkedIn, GitHub click.
- Track contact form submission success/error.

---

### 3.6 Mobile Considerations

| Severity | Impact |
|----------|--------|
| **Medium** | Small screens emphasize the photo over the message; CTAs stack and compete. |

**Recommended solution:**
- Keep text-first hierarchy on mobile.
- Floating WhatsApp button must be thumb-friendly and not overlap content.
- Reduce visual noise in the Hero on small screens.

---

## 4. Conversion Impact Summary

| Problem | Impact on Conversion |
|---------|---------------------|
| Unclear hero value prop | High bounce rate, low recall |
| Weak contact prominence | Fewer inquiries |
| No project CTAs | Lost hot leads |
| Late credibility proof | Lower trust, longer decision time |
| No event tracking | Cannot optimize what is not measured |

---

## 5. Recommended Solutions (Implemented)

1. **Hero redesign:** Static headline, clear subheadline, tech pills, proof badges, contact-first CTAs.
2. **Social Proof section:** Credibility block above Projects.
3. **Project card CTAs:** WhatsApp "Want something similar" on every project.
4. **Floating WhatsApp button:** Persistent, mobile-friendly, pre-filled message.
5. **Contact optimization:** WhatsApp card, project-type dropdown, faster-response badge.
6. **Analytics layer:** Clarity + GA4 custom events for all major interactions.
7. **SEO/meta update:** Title and description now reflect "Python Backend Developer".

---

## 6. Remaining Opportunities

- A/B test Hero headline: "Python Backend Developer" vs "Python Backend Engineer".
- Test WhatsApp message copy for higher reply rate.
- Add testimonial quotes or LinkedIn recommendations directly in the page.
- Add a "Projects by category" filter or recruiter-focused project list.
- Implement a simple lead-magnet (e.g., "Backend architecture checklist") to capture emails.
