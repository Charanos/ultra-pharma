# DOSSIER · Ultra Pharma Overhaul

**Client:** Ultra Pharma, Nairobi · `ultrapharma.co.ke`
**Engagement:** complete design and content overhaul of the existing site, plus a new service line
**Design system codename:** Dossier

---

## Three corrections before anything else

**1 · The panel's name is wrong in the client's brief, and it is the kind of error that costs a regulatory consultancy a client.**

The update calls it the *Benefit Package Technical Advisory Panel (BPTAP)*, and abbreviates it once as *BTAP*. The actual body is the **Benefits Package and Tariffs Advisory Panel (BPTAP)**, established by the Ministry of Health, gazetted through **Gazette Notice No. 5044 of 23 April 2025**, inaugurated 26 May 2025, chaired by **Prof. Walter Jaoko**, with its secretariat domiciled at the **Centre for Epidemiological Modelling and Analysis (CEMA), University of Nairobi**.

A firm selling BPTAP dossier expertise cannot misname BPTAP on its own homepage. Every instance is corrected in `05`. Confirm with the client that they know the correct name and that the brief was shorthand rather than a misunderstanding.

**2 · "Submission to BPTAP" needs qualifying.** BPTAP is an advisory panel that conducts HTA and advises the Ministry of Health and SHA on benefits package design and tariffs. The public record does not describe a published, open applicant pathway where a manufacturer files a dossier and receives a determination, the way NICE or a national regulator operates. Until the client confirms one exists, the service is described as **dossier development, evidence generation and structured stakeholder engagement to support inclusion decisions**, rather than as a filing service with a promised outcome. `01 D-04`.

**3 · The current About page is a liability.** It claims *25+ years of excellence*, *100M+ patients served*, *50+ countries reached*, and describes the company as developing and manufacturing pharmaceutical products. The homepage describes a regulatory consultancy. These are two different companies, and the About page reads as unedited template text. It is removed and rewritten in `05 §7`.

---

## The strategic move

The new service is not a seventh card in a grid. It is the reason to rebuild the site.

Kenya's shift from NHIF to the Social Health Authority is the largest change in health financing in a generation, and BPTAP's HTA work decides what gets funded. A firm that can carry a product **from regulatory approval through to reimbursed patient access** is selling something materially different from a firm that files dossiers with the PPB.

So the site is reorganised around a pathway rather than a service list:

```
   APPROVAL          →      MARKET ENTRY      →     REIMBURSEMENT      →     LIFECYCLE
   Can it be sold?          Can it reach            Will it be              Does it stay
                            the market?             paid for?               valuable?
```

That spine is the whole information architecture, and the new service owns the third stage, which is the one nobody else in this market is positioned for.

---

## Reading order

| Doc | Title | Read it when |
|---|---|---|
| `01` | Audit and Decisions | Always first. What is wrong with the current site, and eleven decisions |
| `02` | Information Architecture | Routes, page composition, navigation, schema |
| `03` | Design System · Dossier | Any visual work. Palette, type, components |
| `04` | Art Direction and Imagery | **Photography, icons, the treatment pipeline.** The brief's main ask |
| `05` | Copy Deck | Every string, including the new service written correctly |
| `06` | Build Plan and Agent Guide | Phases, gates, operating contract |
| `07` | Claude Code Brief | Paste-ready prompt |

## Stack

Next.js 15 · TypeScript strict · Tailwind v4 · Newsreader, Inter Tight, IBM Plex Mono · Phosphor Icons · Unsplash under its licence, processed through the pipeline in `04 §4` · Vercel

The existing site is already Next.js, so this is a rebuild of the presentation layer rather than a migration.
