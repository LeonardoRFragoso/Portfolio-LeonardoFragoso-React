# Microsoft Clarity Analysis Guide — Portfolio Leonardo Fragoso

**Purpose:** Turn Clarity recordings and heatmaps into actionable conversion improvements.

---

## 1. What to Watch in Recordings

### 1.1 Entry Point
- Which section does the visitor land on first?
- Do they scroll up to the Hero or stay deep in the page?
- Common starting points in this portfolio: Hero, Projects, Contact.

### 1.2 Scroll Depth
- Where do visitors stop scrolling?
- Do they reach Projects, Social Proof, and Contact?
- A drop-off before Contact means the page is too long or the message is not compelling.

### 1.3 Click Patterns
- Which buttons are clicked most?
- Are visitors clicking non-interactive elements (dead clicks)?
- Are they clicking on project images expecting a gallery?

### 1.4 Hover / Attention
- Where does the mouse linger?
- High attention on the Hero but no CTA click = value proposition mismatch.
- High attention on projects followed by CTA click = strong conversion signal.

---

## 2. Indicators of Recruiter Intent

| Signal | Meaning | Action |
|--------|---------|--------|
| Lands on Hero, clicks "Download CV" | Wants to evaluate fit quickly | Ensure CV is up-to-date and highlights the target role |
| Goes to Projects, clicks GitHub | Technical validation | Keep GitHub repos clean with READMEs |
| Spends >30s in Projects | Genuine interest | Monitor which projects get the most attention |
| Clicks LinkedIn | Wants to verify professional background | Keep LinkedIn profile aligned with portfolio |
| Clicks "Contact Me" | High intent | Reduce friction: pre-filled WhatsApp, fast response badge |
| Returns to Contact after Projects | Needs validation before reaching out | Strengthen proof points above Projects |

---

## 3. Indicators of Client Intent

| Signal | Meaning | Action |
|--------|---------|--------|
| Clicks project demo | Wants to see real product | Keep demos live and mobile-friendly |
| Clicks "Quero algo assim" | Wants a similar solution | Reply fast with a discovery call offer |
| Fills project-type form | Qualified lead | Add sales follow-up workflow |
| Uses WhatsApp button | Prefers informal, fast channel | Have WhatsApp Business with quick replies |
| Revisits Projects multiple times | Comparing solutions | Consider case studies or pricing page |

---

## 4. Rage Click Detection

**What it looks like:** Multiple rapid clicks on the same element or area in a short time.

**Common causes in portfolios:**
- Button looks clickable but is not.
- Element has delayed animation and visitor thinks it did not register.
- Link is broken or opens wrong target.
- Mobile: touch target too small.

**What to do:**
1. Identify the clicked element in the recording.
2. Check if the element is actually interactive.
3. Verify the target URL works.
4. Increase touch target size on mobile.
5. Add loading states for slow actions (e.g., form submission).

---

## 5. Dead Click Detection

**What it looks like:** Clicks on elements that do not trigger any action.

**Common dead-click zones in portfolios:**
- Decorative graphics or badges.
- Project images without a gallery action.
- Text labels that look like buttons.
- Empty space around CTAs.

**What to do:**
- Remove or clarify dead elements.
- Add click handlers to useful elements (e.g., project images open gallery).
- Avoid visual styles that imply interactivity on non-interactive items.

---

## 6. Conversion Opportunities

### 6.1 High-Intent Pages
If a visitor reaches the Contact section, they are already warm. Optimize:
- Clear headline and response-time promise.
- Multiple contact options (WhatsApp, Email, LinkedIn, form).
- Pre-filled project-type dropdown.

### 6.2 High-Intent Projects
Track which projects generate the most "Want something similar" clicks. Double down on:
- Live demos.
- Detailed descriptions.
- GitHub documentation.

### 6.3 Drop-off Points
If visitors drop off before Contact:
- Add a secondary CTA mid-page (e.g., after Social Proof).
- Use a sticky header CTA on scroll.
- Shorten the Hero and Projects sections.

---

## 7. Event Tracking Reference

The following events are sent to Microsoft Clarity and Google Analytics 4:

| Event | Trigger | Interpretation |
|-------|---------|----------------|
| `cta_contact_click` | Hero "Contact Me" | Strong intent |
| `cta_projects_click` | Hero "View Projects" | Wants validation |
| `cta_download_cv_click` | CV download | Recruiter intent |
| `cta_whatsapp_click` | WhatsApp button | High intent, fast channel |
| `cta_email_click` | Email link | Direct inquiry |
| `cta_linkedin_click` | LinkedIn link | Validation / networking |
| `cta_github_click` | GitHub link | Technical validation |
| `project_card_click` | Project card interaction | Interest |
| `project_github_click` | Project GitHub | Deep technical validation |
| `project_demo_click` | Project demo | Product evaluation |
| `project_contact_click` | "Want something similar" | Conversion signal |
| `project_whatsapp_click` | Project WhatsApp | Hot lead |
| `project_gallery_click` | Project gallery | Visual validation |
| `social_proof_card_click` | Credibility card | Trust-building |
| `header_hire_click` | Header "Hire Me" | High intent |
| `header_nav_click` | Nav link | Navigation pattern |
| `contact_form_submit` | Form submit | Lead capture |
| `contact_form_success` | EmailJS success | Qualified lead |
| `contact_form_error` | EmailJS error | UX issue |
| `footer_link_click` | Footer links | Navigation / exit |

---

## 8. Review Cadence

- **Weekly:** Watch 3-5 new recordings, look for rage/dead clicks and drop-off points.
- **Bi-weekly:** Review heatmaps and event trends in Clarity + GA4.
- **Monthly:** Update this guide, Social Proof claims, and project CTAs based on data.

---

## 9. Definitions

- **Bounce:** Visitor leaves without interaction.
- **Scroll depth:** How far down the page a visitor scrolls.
- **Rage click:** Multiple rapid clicks indicating frustration.
- **Dead click:** Click on a non-interactive element.
- **Conversion:** Any action that initiates contact (message, email, form, call, LinkedIn connect).
