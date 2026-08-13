# 01 · Audit and Decisions

**Subject:** `ultrapharma.co.ke` as it stands, fetched and read in full
**Purpose:** what is wrong, what is worth keeping, and the decisions that govern the rebuild

---

## 1. What the site is now

A single-page Next.js marketing site with a theme toggle. Anchor navigation: Home, Services, Contact. Six service cards, six numbered "why partners choose us" entries, a contact block with a form, a four-column footer. One additional route at `/about`.

The positioning is clear and correct: **regulatory and compliance expertise for healthcare in Kenya and Africa.** The tagline, *Precision in Healthcare. Confidence in Regulation.*, is genuinely good and it stays.

The problem is not the strategy. It is that the site looks like a template with the strategy typed into it.

## 2. What is actually wrong

Ordered by how much damage each does.

### 2.1 · Credibility defects

These matter more than any aesthetic issue, because they are the ones a prospective client notices and cannot unsee.

| Defect | Where | Why it damages |
|---|---|---|
| **"25+ Years of Excellence", "100M+ Patients Served", "50+ Countries Reached"** | `/about` | Unverifiable, implausible for a Nairobi consultancy, and it is the exact shape of unedited template copy. A regulatory client's entire job is scrutinising claims |
| **About page describes a manufacturer** | `/about` | "Develop and deliver innovative pharmaceutical solutions", "research, development, and manufacturing". The homepage sells consultancy. These are two different companies |
| **"Global leader in pharmaceutical innovation"** | `/about` vision | A claim the firm cannot support, next to services it genuinely can |
| **Privacy and Terms link to `#`** | Footer | Dead legal links on a compliance consultancy's site |
| **© 2025** | Footer | Stale on a site selling currency of regulatory knowledge |
| **Footer services do not match page services** | Footer vs `#services` | Six different names for the same six things |
| **`/about` and `/contact` in footer, but not in the header** | Nav | The header has three items, the footer implies five routes, one of which duplicates an anchor |

### 2.2 · Content defects

**The services are written inward, not outward.** "Strategic Regulatory Intelligence", "Accelerated Submission Excellence", "Compliance Innovation". These are category labels, not client problems. A regulatory affairs director scanning this page is asking *can you get my product registered in Kenya, how long will it take, and have you done it before*. None of those questions is answered anywhere on the site.

**There is no evidence.** No named team, no credentials, no case outcomes, no client logos, no registration numbers, no professional affiliations, no articles. For a firm whose product is expertise, the site asserts expertise and demonstrates none.

**There is no specificity to Kenya.** The services could describe a consultancy in any market. The PPB is never named. Neither is the EAC harmonisation framework, the Kenya Medical Devices regulations, or now SHA. The firm's actual advantage, being *in-country*, is stated as a bullet and never proven.

**The six "why partners choose us" entries are the best writing on the site** and they are buried below the fold in a numbered list that reads as an afterthought.

### 2.3 · Design defects

The brief's word for it is "basic shell", which is fair.

- Everything is a card in a grid. Six service cards, then six numbered blocks, then a contact block. Three sections, one rhythm.
- No photography at all. A site about pharmaceutical products, laboratories, regulators and patients has no images of any of it.
- No iconography beyond what the card grid implies.
- Type hierarchy is a heading and a paragraph, repeated.
- Nothing distinguishes the firm visually from any other consultancy template.
- The theme toggle is the only piece of interaction on the page.

The result is a page you scroll to the bottom of without stopping, which for a considered-purchase B2B service is the failure mode that matters.

## 3. What is worth keeping

- **The tagline.** *Precision in Healthcare. Confidence in Regulation.*
- **The positioning.** Regulatory and compliance expertise, Kenya and Africa.
- **The six "why partners choose us" entries.** They are concrete, they name a mechanism and a consequence, and they are the only writing on the site that sounds like a practitioner. They get promoted, not deleted.
- **The theme toggle.** Keep it. `03 §2`.
- **The restraint of a short site.** The instinct not to build forty pages is correct. The rebuild adds routes carefully. `02 §3`.

---

## 4. The new service line

The client's update, ingested and corrected.

> **Health Product Assessment and National Benefit Listing.** Preparation and submission of health product assessment applications to secure inclusion in Kenya's national health benefits package under the Social Health Authority, bridging regulatory approval to funded patient access.
>
> - HTA and BPTAP dossier development and submissions to the Benefits Package and Tariffs Advisory Panel
> - Cost-effectiveness and budget-impact modelling
> - Stakeholder engagement and SHA liaison

### Why this changes the site rather than adding to it

Kenya replaced NHIF with the Social Health Authority under the Social Health Insurance Act 2023. Coverage flows through three funds: the Primary Healthcare Fund, the Social Health Insurance Fund, and the Emergency, Chronic and Critical Illness Fund. What those funds pay for, and at what tariff, is shaped by BPTAP through Health Technology Assessment.

For a pharmaceutical or device company, this means **regulatory approval is no longer the finish line.** A product can be registered by the PPB and still be commercially dead if it is not in the benefits package. The gap between "legal to sell" and "paid for" is now the single largest commercial risk in the Kenyan market, and it is brand new, which means almost nobody has built a practice around it yet.

Ultra Pharma is claiming that ground. The site should say so loudly.

### The factual base, verified

| Fact | Detail |
|---|---|
| Body | **Benefits Package and Tariffs Advisory Panel (BPTAP)** |
| Established | Ministry of Health, gazetted **Gazette Notice No. 5044 of 23 April 2025** |
| Inaugurated | 26 May 2025, Afya House |
| Chair | **Prof. Walter Jaoko** |
| Secretariat | Centre for Epidemiological Modelling and Analysis (CEMA), University of Nairobi |
| Mandate | Review and recommend the essential health benefits package, advise on tariffs, identify priority interventions currently missing, monitor SHA implementation |
| Method | Health Technology Assessment |
| Advises | Ministry of Health and the Social Health Authority |
| Public site | `bptap.health.go.ke` |

Every one of those is checkable, and a services page that cites them correctly does more for credibility than any adjective.

---

## 5. Decision log

### D-01 · The site is organised as a pathway, not a service list

Four stages: **Approval, Market Entry, Reimbursement, Lifecycle.** Every service sits in a stage, and the stages are shown as a sequence because that is how a product actually moves.

This does three things a card grid cannot. It shows the client understands the journey rather than selling tasks. It makes the new reimbursement service structurally prominent rather than seventh. And it creates an obvious, honest cross-sell: a client who arrives for registration can see what comes after it.

`02 §4`.

### D-02 · Reimbursement is the hero, not a card

The homepage hero leads on the approval-to-access gap, because it is the newest, most urgent and least contested thing the firm sells. The rest of the practice is established and competitive; this is not.

Risk, stated: if SHA policy shifts or BPTAP's role changes, a hero built on it dates quickly. Mitigated by writing the hero around the *client's problem* (approval is not access) rather than around the panel's current procedure, so the copy survives a process change. `05 §2`.

### D-03 · Every claim on the site is either verifiable or removed

The `/about` statistics go. If the firm has real numbers, they appear with a denominator and a date. If it has real case outcomes, they appear as short anonymised case notes. If it has neither yet, the site says what the team has done individually rather than inventing corporate history.

This is not modesty. In regulatory affairs, an unverifiable claim on a vendor's website is a signal about how that vendor will treat a dossier.

### D-04 · The reimbursement service is described as evidence and engagement, not as filing

Until the client confirms a published applicant pathway to BPTAP exists, the copy says what the firm does: builds the HTA dossier, runs the economic modelling, and manages structured engagement with SHA, the Ministry and the panel's secretariat. It does not promise a submission route or an outcome.

If the client confirms a formal pathway, the copy tightens by one sentence and gains a process diagram. Ask before launch. `05 §4`.

### D-05 · Photography is a structural element, not decoration

The brief asks for imagery to break text monotony, and that is the right instinct for the wrong reason. Photography here is not filler between paragraphs; it is what makes an abstract service concrete. Regulatory work is invisible, so the site shows the things it touches: laboratories, manufacturing, clinics, dossiers, the people who use the medicines at the end of it.

Every image passes one treatment pipeline so a set of Unsplash photographs from a dozen photographers reads as one commissioned shoot. `04`.

### D-06 · Icons carry taxonomy, never decoration

Phosphor Icons, one weight, used to mark stage, service type and document class. An icon that does not label something is removed. `03 §8`.

### D-07 · Dark theme is kept and properly built

The current site has a toggle. Keep it, and build both themes to the same standard, because a dark theme that is an afterthought is worse than none. The palette in `03 §2` is specified in both from the start.

### D-08 · The About page is rewritten as Practice, not Company

The firm's credibility is its people and its method, not a corporate history it does not have. `/about` becomes a page about how the practice works, who is in it, and what it has actually done. `02 §3`, `05 §7`.

### D-09 · Legal pages are real

Privacy notice and terms, written, at real URLs. A consultancy selling compliance cannot have `#` in its footer. Kenya's Data Protection Act 2019 applies to the contact form regardless. `02 §3`.

### D-10 · Insight is the proof, and it starts small

A short Insights section: three or four pieces on SHA, BPTAP, PPB timelines, EAC harmonisation. This is the only durable way a consultancy demonstrates expertise on a website.

**But it ships with three pieces or none.** An Insights page with one post from eight months ago is worse than no Insights page. If the client will not commit to a piece a quarter, this section is not built. Ask directly. `02 §3`.

### D-11 · The site stays short

Seven routes, not twenty. The rebuild resists the pull to add a page per service. Depth comes from one strong services page organised by pathway, not from six thin pages competing for the same search term.

---

## 6. What this rebuild is not

Not a rebrand: the name, tagline and positioning stay. Not a CMS build: content changes a few times a year and lives in typed content files, with Insights as MDX. Not an e-commerce or portal build. Not a lead-scoring or CRM integration; the contact form sends an email and that is the correct scope.

---

## 7. Questions for the client

Blocking, marked.

1. **Is there a published applicant pathway for submitting to BPTAP?** If yes, the process and the required dossier structure. **Blocking for `05 §4`.**
2. **Confirm the correct panel name is understood.** `00`.
3. **Are the About page statistics real?** If any are, the basis for each. **Blocking, because they cannot be published as they stand.**
4. Team members to name, with credentials, photographs and LinkedIn.
5. Any case outcomes that may be published, even anonymised. Approval timelines achieved, products registered, markets entered.
6. Real registration or professional details for the firm, if any exist.
7. Will they commit to four Insights pieces a year? A yes or no answer, not a maybe. `D-10`.
8. Office address beyond "Nairobi, Kenya". A street address materially improves local search and credibility.
9. Is `j.k@ultrapharma.co.ke` the right public contact, or should it be a role address?
10. Photographs of the actual team and office, or permission to commission them. Stock photography of people is a last resort, not a plan. `04 §3`.
