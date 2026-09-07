import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  ArrowsMerge,
  Binoculars,
  BookOpen,
  Briefcase,
  Buildings,
  Calculator,
  Calendar,
  CalendarCheck,
  ChartLineUp,
  ChatsCircle,
  Clock,
  ClockAfternoon,
  Coins,
  Compass,
  EnvelopeSimple,
  FileArrowUp,
  FileMagnifyingGlass,
  Files,
  FirstAid,
  FlagCheckered,
  Flask,
  FlowArrow,
  Funnel,
  Gavel,
  GlobeHemisphereEast,
  GraduationCap,
  HandCoins,
  Handshake,
  Heartbeat,
  IdentificationBadge,
  Info,
  Lifebuoy,
  Lightning,
  LinkedinLogo,
  ListChecks,
  LockKey,
  MapPin,
  Notebook,
  NotePencil,
  PhoneCall,
  Presentation,
  Pulse,
  Scales,
  SealCheck,
  ShieldCheck,
  Signpost,
  Stack,
  Stamp,
  Strategy,
  Table,
  Tag,
  Target,
  TestTube,
  Timer,
  Translate,
  TreeStructure,
  UsersFour,
  UsersThree,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";

/**
 * The icon registry.
 *
 * `04 §9` sets the rule this file enforces: **one icon per labelled thing, and
 * never an icon beside a heading purely for visual interest.** The rule was
 * being honoured in spirit and broken in practice, because the four pathway
 * marks were standing in wherever a mark was wanted, so the site read as five
 * icons repeated forty times.
 *
 * Two ideas fix that, and both are structural rather than cosmetic.
 *
 * **One: a mark belongs to a concept, not to a component.** Every key below is
 * a thing the firm does, publishes or is asked about. A concept that appears on
 * three pages carries the same mark on all three, which is why `htaDossier`
 * looks identical on the homepage rail, on `/services` and on the reimbursement
 * page. Consistency across surfaces is the opposite of monotony within one.
 *
 * **Two: uniqueness is checked, not remembered.** No Phosphor icon may be bound
 * to two keys. `npm run lint:icons` fails the build if one is, so the next
 * person to add a concept cannot quietly reuse a mark that already means
 * something else.
 *
 * Not in here on purpose: arrows, the menu and close glyphs, the spinner, the
 * theme toggle, and the check and warning state marks. Those are controls and
 * states rather than labels. They repeat because repeating is what makes a
 * control legible, and the uniqueness rule would be actively wrong for them.
 *
 * Weight is decided at the call site by role, per the round-two rule recorded
 * in `DESIGN-SOURCE.md`: duotone for decorative badges and watermarks, bold for
 * small inline utility marks, regular everywhere else.
 */
export const icons = {
  /* ---------------------------------------------------------------------
   * The pathway. Fixed taxonomy: these four label a stage and nothing else,
   * anywhere on the site. Everything that used to borrow them now has its own.
   * ------------------------------------------------------------------- */
  approval: SealCheck,
  marketEntry: GlobeHemisphereEast,
  reimbursement: Scales,
  lifecycle: ArrowsClockwise,

  /* ---------------------------------------------------------------------
   * Capabilities. A deliverable listed on the homepage and the service that
   * delivers it on `/services` are the same labelled thing, so they share a
   * mark and a reader learns it once.
   * ------------------------------------------------------------------- */
  regulatoryStrategy: Strategy,
  submissions: FileArrowUp,
  qualitySystems: ListChecks,
  multiMarketDossiers: Stack,
  specialisedTherapeutics: TestTube,
  localAdaptation: Translate,
  expeditedPathways: Timer,
  htaDossier: Files,
  economicModelling: Calculator,
  stakeholderEngagement: UsersThree,
  postApproval: Pulse,
  labelExpansion: Tag,
  portfolioStrategy: Briefcase,

  /* ---------------------------------------------------------------------
   * Editorial covers. Deliberately a parallel family rather than the pathway
   * marks: an article about reimbursement is not the reimbursement service,
   * and putting the service mark on it would say that it is.
   * ------------------------------------------------------------------- */
  topicApproval: Stamp,
  topicPolicy: Gavel,
  topicReimbursement: HandCoins,
  topicMarketEntry: Signpost,

  /* ---------------------------------------------------------------------
   * The drawn plates and diagrams that replaced the photography.
   * ------------------------------------------------------------------- */
  funds: Coins,
  accessChain: FlowArrow,
  ctdDossier: Notebook,
  place: MapPin,

  /* ---------------------------------------------------------------------
   * Operating principles. `namedLead` is shared with the contact page's
   * commitment of the same name, because it is the same promise.
   * ------------------------------------------------------------------- */
  analysedQueries: NotePencil,
  namedLead: IdentificationBadge,
  financingSynergy: ArrowsMerge,
  regionalHarmonisation: TreeStructure,

  /* Method commitments on `/practice`. */
  preSubmissionAudit: FileMagnifyingGlass,
  documentRegister: Table,
  boardRepresentation: Presentation,

  /* Engagement phases on `/services/reimbursement`. */
  feasibility: Binoculars,
  evidenceGeneration: Flask,
  engagement: ChatsCircle,
  followThrough: FlagCheckered,

  /* ---------------------------------------------------------------------
   * The seven evidence requirements an assessment looks for. Each is a
   * different domain of proof, so each carries a different mark.
   * ------------------------------------------------------------------- */
  clinicalEffectiveness: Heartbeat,
  safety: FirstAid,
  costEffectiveness: ChartLineUp,
  budgetImpact: Wallet,
  epidemiology: UsersFour,
  equity: Lifebuoy,
  implementation: Buildings,

  /* Why partners choose the firm. Six entries, six marks, unchanged. */
  outcomes: Target,
  rapidResponse: Lightning,
  localReach: Compass,
  complianceByDesign: ShieldCheck,
  commercialModels: Handshake,
  capacityTransfer: GraduationCap,

  /* Process promises made to an enquiry. */
  confidentiality: LockKey,
  filingRoadmap: CalendarCheck,

  /* Channels and editorial metadata. */
  email: EnvelopeSimple,
  phone: PhoneCall,
  linkedin: LinkedinLogo,
  readingTime: Clock,
  /* Hours the firm answers, which is not the same fact as how long a piece
     takes to read, so it is not the same mark. */
  openingHours: ClockAfternoon,
  publishedDate: Calendar,
  topics: Funnel,
  featured: BookOpen,
  advisoryNote: Info,
} as const satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

/** Every registry entry, for the uniqueness guard in `scripts/check-icons.ts`. */
export const iconNames = Object.keys(icons) as readonly IconName[];
