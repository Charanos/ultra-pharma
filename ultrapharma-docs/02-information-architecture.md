# 02 · Information Architecture

**Principle:** seven routes, one strong services page, and a spine that mirrors how a product actually moves through a market.

---

## 1. Route table

| Route | Purpose | Render |
|---|---|---|
| `/` | The full argument, scrollable. Hero, pathway, services, proof, insight, contact | Static |
| `/services` | The four stages in depth, each with what is delivered and what it produces | Static |
| `/services/reimbursement` | **The new service line, its own page.** SHA, BPTAP, HTA, economic modelling | Static |
| `/practice` | Replaces `/about`. How the firm works, who is in it, what it has done | Static |
| `/insights` | Index. **Only built if `01 D-10` is answered yes** | Static |
| `/insights/[slug]` | One piece, MDX | Static |
| `/contact` | Full contact, form, location, office hours | Static |
| `/legal/privacy` · `/legal/terms` | Real pages, real content | Static |

`/about` **301s to `/practice`.** The URL has inbound history and should not 404.

Seven routes plus legal. The instinct in the current site to stay small is right; what it lacked was depth on the pages it had.

---

## 2. Navigation

```
Header:  [Mark] Ultra Pharma    Services · Reimbursement · Practice · Insights · Contact    [theme]  [Talk to us]
```

Five links and one action. **`Reimbursement` sits in the top-level navigation as its own item**, not nested under Services, because it is the thing the firm most wants to be found for and nesting it would bury the newest capability behind the oldest.

`Talk to us` is a filled button, persistent, and it is the only accented control in the header.

Mobile: the five links collapse to a drawer, `Talk to us` stays visible in the header at all times.

Footer: full sitemap, contact block, LinkedIn, legal links that work, and the firm's identity line. **Footer service names match the on-page service names exactly**, which the current site gets wrong.

---

## 3. The homepage, block by block

Order is the argument. Each block earns its place or it is cut.

| # | Block | Job | Imagery |
|---|---|---|---|
| 1 | **Hero** | Name the approval-to-access gap in one sentence. Two actions | Full-bleed photograph, treated. `04 §5` |
| 2 | **The pathway** | The four stages as a horizontal rail. The site's spine, stated once, early | Iconography only |
| 3 | **Reimbursement feature** | The new service, given a full-width band of its own | Photograph plus a data figure |
| 4 | **Services** | The four stages expanded, each with three concrete deliverables | One image per stage |
| 5 | **Why partners choose us** | The six existing entries, promoted and redesigned | Numbered, ruled, no cards |
| 6 | **Proof** | Team, credentials, and case notes if they exist. Honest if thin | Real team photographs |
| 7 | **Insight** | Three most recent pieces. Omitted entirely if the section is not built | Editorial thumbnails |
| 8 | **Contact** | Form, direct channels, location | Map or office photograph |

**Block 5 is a promotion, not a redesign for its own sake.** Those six entries are the best content the firm has written. On the current site they sit below the fold in a flat numbered list. Here they get the treatment they deserve: large numerals, a rule per entry, the mechanism and the consequence typographically distinguished. `03 §11`.

### Rhythm

The current site's failure is that every section is a card grid. The rebuild alternates deliberately:

```
1  full-bleed image + type          ← immersive
2  horizontal rail, no cards        ← structural
3  split: image left, type right    ← editorial
4  asymmetric grid, 4 stages        ← informational
5  ruled list, large numerals       ← typographic
6  portrait grid                    ← human
7  three editorial cards            ← content
8  two-column, form + details       ← transactional
```

No two adjacent blocks share a layout pattern. That single rule does most of the work of fixing "monotonous".

---

## 4. The pathway spine

The site's organising idea, from `01 D-01`.

```
    01 ─────────── 02 ─────────── 03 ─────────── 04
  APPROVAL     MARKET ENTRY   REIMBURSEMENT   LIFECYCLE

  Can it be     Can it reach    Will it be      Does it stay
  sold?         the market?     paid for?       valuable?

  Regulatory    Global market   HTA & BPTAP     Lifecycle
  strategy      access          dossiers        management
  Submissions   Local dossier   Cost-           Label
  & eCTD        harmonisation   effectiveness   expansion
  Compliance    Fast-track      Budget impact   Post-approval
  & quality     pathways        SHA liaison     monitoring
```

Rendered as a horizontal rail on desktop, a vertical one on mobile, with stage 03 marked as the newest capability. Each stage links to its section on `/services`, and stage 03 links to its own page.

**Mapping the current six services onto the four stages:**

| Current service | Stage |
|---|---|
| Strategic Regulatory Intelligence | 01 Approval |
| Accelerated Submission Excellence | 01 Approval |
| Compliance Innovation | 01 Approval |
| Global Market Access | 02 Market Entry |
| Specialized Therapeutics | 02 Market Entry |
| **Health Product Assessment & National Benefit Listing** | **03 Reimbursement, new** |
| Lifecycle Optimization | 04 Lifecycle |

Nothing is lost. Everything gains a position in a sequence.

---

## 5. `/services/reimbursement`

The most important new page. Composition:

1. **Hero.** The gap, stated plainly: registered is not the same as reimbursed.
2. **What changed.** SHA replaced NHIF under the Social Health Insurance Act 2023. Three funds. BPTAP shapes what is covered, through HTA. Factual, cited, dated.
3. **What that means for a manufacturer.** A product outside the benefits package competes against one inside it on out-of-pocket price. Written as a consequence, not a warning.
4. **What we do.** Three services: dossier development, economic modelling, stakeholder engagement. Each with what it produces as a deliverable.
5. **The evidence a submission needs.** A structured list: clinical effectiveness, comparator selection, cost-effectiveness analysis, budget impact model, local epidemiological data, equity considerations. This section is the credibility proof, because listing it correctly demonstrates the firm knows what an HTA dossier contains.
6. **How we work with you.** Phased, with an indicative timeline.
7. **Contact.**

Sections 2 and 5 are the ones that convert. Everything else on the page could be written by any consultancy; those two cannot be written by anyone who has not done the work.

---

## 6. Structured data

JSON-LD, server rendered.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ultrapharma.co.ke/#organization",
  "name": "Ultra Pharma",
  "description": "Regulatory affairs, compliance and health technology assessment consultancy for healthcare products in Kenya and Africa.",
  "url": "https://ultrapharma.co.ke",
  "email": "…",
  "telephone": "+254 20 5618353",
  "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
  "areaServed": [ { "@type": "Country", "name": "Kenya" }, { "@type": "Place", "name": "East Africa" } ],
  "sameAs": ["https://www.linkedin.com/in/ultra-pharma-kenya/"],
  "knowsAbout": [
    "Pharmacy and Poisons Board registration",
    "Health Technology Assessment",
    "Benefits Package and Tariffs Advisory Panel",
    "Social Health Authority reimbursement",
    "eCTD submissions",
    "GxP compliance"
  ],
  "hasOfferCatalog": { "@type": "OfferCatalog", "itemListElement": [ … four stages … ] }
}
```

`ProfessionalService` is the correct type, a subtype of `LocalBusiness`. `knowsAbout` is doing real work here: those are the terms a prospective client searches, and they are the terms an AI assistant answering "who does HTA dossiers in Kenya" needs to find.

Per page: `Service` on the services pages, `Article` with `author` and `datePublished` on insights, `ContactPage`, `BreadcrumbList` on anything below the top level. **No `Review`, no `AggregateRating`**, both because there are none and because unverified ratings on a compliance consultancy are a bad look.

---

## 7. SEO

The searches that matter are narrow and high-intent: *PPB product registration consultant*, *regulatory affairs Kenya*, *HTA dossier Kenya*, *SHA benefits package listing*, *BPTAP submission*, *medical device registration Kenya*.

The last three have almost no competition and will not for long. That is the whole SEO opportunity and it argues for shipping `/services/reimbursement` early and writing about SHA regularly.

| Concern | Decision |
|---|---|
| Canonicals | Self-referencing, absolute |
| Titles | Firm name in every title; brand search is a large share of traffic |
| `/about` | 301 to `/practice`, never a 404 |
| Metadata | `generateMetadata` per route, no client-side mutation |
| OG images | Generated at the edge, typographic, one per route |
| Sitemap | Generated, excluding legal |
| Core Web Vitals | LCP under 2.2s on a 4G profile. Imagery is the main risk. `04 §7` |
| Local | A street address materially helps. `01 §7` question 8 |

---

## 8. Error and empty states

| Case | Handling |
|---|---|
| 404 | Firm name, one line, links to Services and Contact |
| Insights not yet built | The section does not render. No "coming soon" |
| Insights with fewer than three pieces | Section does not render. `01 D-10` |
| No case notes yet | The Proof block shows team and credentials only, without a placeholder for outcomes |
| Form failure | Preserves every field, names the failure, offers the direct email as a fallback |
| Form success | Inline confirmation with an expected response time, not a redirect |

The rule across all of these: **the site never renders a container for content that does not exist.** An empty section is the specific thing that makes a small site look abandoned.
