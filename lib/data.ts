export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  imageSeed: string;
  stats: { label: string; value: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "meridian-bay",
    name: "Meridian Bay",
    region: "Coastal financial hub",
    tagline: "A working harbor that never stopped being one.",
    description:
      "Glass towers step down to a working marina, so a plenary session and a sunset dhow crossing sit twenty minutes apart. The financial district's density means walkable venues; the waterfront means the incentive trip writes itself.",
    imageSeed: "meridian-bay-skyline",
    stats: [
      { label: "Plenary capacity", value: "12,400" },
      { label: "4-5★ rooms", value: "38,200" },
      { label: "Direct routes", value: "146" },
      { label: "Avg. flight time (EU)", value: "6.4h" },
    ],
  },
  {
    slug: "solvane",
    name: "Solvane",
    region: "Alpine convention town",
    tagline: "The offsite that gets an RSVP twice.",
    description:
      "A funicular connects the congress hall to a ridge line the delegates will photograph more than the slides. Built for leadership retreats and incentive groups who want the agenda to end by 3pm.",
    imageSeed: "solvane-alps",
    stats: [
      { label: "Plenary capacity", value: "3,100" },
      { label: "4-5★ rooms", value: "9,700" },
      { label: "Direct routes", value: "52" },
      { label: "Avg. flight time (EU)", value: "2.1h" },
    ],
  },
  {
    slug: "amaris-coast",
    name: "Amaris Coast",
    region: "Resort coastline",
    tagline: "Built for the trip your top performers actually want.",
    description:
      "Eleven resort properties share a single beach road, each with private meeting pavilions. The default choice when the brief says incentive first, conference second.",
    imageSeed: "amaris-coast-resort",
    stats: [
      { label: "Plenary capacity", value: "2,600" },
      { label: "4-5★ rooms", value: "14,900" },
      { label: "Direct routes", value: "61" },
      { label: "Avg. flight time (EU)", value: "3.8h" },
    ],
  },
  {
    slug: "kastellan",
    name: "Kastellan",
    region: "Old-world congress city",
    tagline: "Four centuries of trade fairs, one modern floor plan.",
    description:
      "A converted 1890s grain exchange sits inside the new congress campus. Delegates get a city that photographs like a postcard and a exhibition hall built in the last decade.",
    imageSeed: "kastellan-old-town",
    stats: [
      { label: "Plenary capacity", value: "8,900" },
      { label: "4-5★ rooms", value: "22,300" },
      { label: "Direct routes", value: "98" },
      { label: "Avg. flight time (EU)", value: "1.6h" },
    ],
  },
  {
    slug: "northgate-delta",
    name: "Northgate Delta",
    region: "Waterfront innovation district",
    tagline: "The destination for the launch that needs a show floor.",
    description:
      "Built on reclaimed delta land specifically as an exhibition district: column-free halls, dedicated freight tunnels, and a skyline that reads as 'built for exactly this.'",
    imageSeed: "northgate-delta-waterfront",
    stats: [
      { label: "Plenary capacity", value: "22,000" },
      { label: "Exhibition floor", value: "184,000 m²" },
      { label: "Direct routes", value: "132" },
      { label: "Avg. flight time (EU)", value: "5.2h" },
    ],
  },
];

export type Pillar = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  imageSeed: string;
  stat: { label: string; value: string };
  points: { title: string; body: string }[];
};

export const pillars: Pillar[] = [
  {
    slug: "meetings",
    name: "Meetings",
    short: "Boardrooms, leadership offsites, and mid-size gatherings run without friction.",
    hero: "For the meeting that decides something.",
    imageSeed: "confluence-meetings-boardroom",
    stat: { label: "Avg. setup time", value: "36h" },
    points: [
      {
        title: "One point of contact, start to close",
        body: "A single delivery lead owns your meeting from site visit to teardown — not a rotating desk of regional contacts.",
      },
      {
        title: "Rooms built for decisions, not just seating",
        body: "Boardroom, cabaret, and U-shape configurations with sightlines checked in person before you arrive, not on a floor plan PDF.",
      },
      {
        title: "48-hour hold, no penalty",
        body: "Provisional space holds for finalists are free for 48 hours past your internal decision date.",
      },
    ],
  },
  {
    slug: "incentives",
    name: "Incentives",
    short: "Reward trips your top performers request to attend again next year.",
    hero: "The trip they'd choose with their own money.",
    imageSeed: "confluence-incentives-coast",
    stat: { label: "Repeat-attendance rate", value: "71%" },
    points: [
      {
        title: "Built around the destination, not a hotel ballroom",
        body: "Excursions, dining, and free time are planned first; the one required session is scheduled around them, not the reverse.",
      },
      {
        title: "Tiered for the whole delegation",
        body: "Top-tier and qualifying-tier itineraries run in parallel without either group feeling like the B-list.",
      },
      {
        title: "Measured against attendance, not attendance targets",
        body: "We report next-year opt-in rate alongside spend — the number that tells you if it worked.",
      },
    ],
  },
  {
    slug: "conferences",
    name: "Conferences",
    short: "Multi-day congresses and summits at a scale your internal team can't staff alone.",
    hero: "Built to run at 8,000 delegates, or 800.",
    imageSeed: "confluence-conference-plenary",
    stat: { label: "Largest delivered", value: "22,000 delegates" },
    points: [
      {
        title: "Registration and badge logistics owned end to end",
        body: "One system handles registration, badge printing, and access control across every hall — no delegate re-queues at track two.",
      },
      {
        title: "Breakout capacity that scales with the plenary",
        body: "Every partner venue publishes real concurrent breakout counts, not a theoretical maximum that assumes empty corridors.",
      },
      {
        title: "A named crisis lead on-site for the full run",
        body: "Weather, speaker cancellations, AV failure — one person with the authority to make the call, on-site for every session day.",
      },
    ],
  },
  {
    slug: "exhibitions",
    name: "Exhibitions",
    short: "Column-free exhibition floors, freight logistics, and show-floor delivery at scale.",
    hero: "The floor plan comes before the invite list.",
    imageSeed: "confluence-exhibition-hall",
    stat: { label: "Largest floor", value: "184,000 m²" },
    points: [
      {
        title: "Freight tunnels, not shared loading docks",
        body: "Dedicated freight access means move-in for a 400-booth floor doesn't compete with catering deliveries.",
      },
      {
        title: "Exhibitor logistics handled as one contract",
        body: "Stand builders, electrical, rigging, and customs clearance for international exhibitors sit under a single delivery agreement.",
      },
      {
        title: "Sightline-tested column-free spans",
        body: "Every hall we recommend has a published clear-span number — no surprise support column in booth 214.",
      },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  destination: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
  imageSeed: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "vasterlund-group",
    client: "Vasterlund Group",
    industry: "Industrial manufacturing",
    destination: "Solvane",
    headline: "A 340-person leadership summit that moved a stalled reorg forward.",
    summary:
      "Vasterlund's executive committee had cancelled its annual summit twice. Moving it to Solvane's ridge-line lodge, with sessions capped at three hours a day, restored attendance to full C-suite turnout.",
    stats: [
      { label: "Delegates", value: "340" },
      { label: "Session days", value: "3" },
      { label: "Exec attendance vs. prior year", value: "+58%" },
    ],
    imageSeed: "vasterlund-summit",
  },
  {
    slug: "corvid-and-marsh",
    client: "Corvid & Marsh",
    industry: "Professional services",
    destination: "Amaris Coast",
    headline: "An incentive trip that lifted next-quarter qualification rate.",
    summary:
      "Corvid & Marsh's top-decile consultants had flat interest in the annual incentive trip. A redesigned Amaris Coast itinerary, weighted toward free time over programming, raised next-cycle qualification attempts by nearly a third.",
    stats: [
      { label: "Qualifying delegates", value: "212" },
      { label: "Repeat opt-in", value: "74%" },
      { label: "Next-cycle qualification lift", value: "+31%" },
    ],
    imageSeed: "corvid-marsh-incentive",
  },
  {
    slug: "halberd-systems",
    client: "Halberd Systems",
    industry: "Enterprise technology",
    destination: "Northgate Delta",
    headline: "A product launch and 340-booth exhibition floor, delivered in 11 weeks.",
    summary:
      "Halberd's hardware launch needed a column-free hall, dedicated freight access for international exhibitors, and a live-stream backbone. Northgate Delta's exhibition district met the brief without a single custom build request.",
    stats: [
      { label: "Booths", value: "340" },
      { label: "Lead time", value: "11 weeks" },
      { label: "International exhibitors cleared", value: "96%" },
    ],
    imageSeed: "halberd-exhibition",
  },
];

export type Venue = {
  slug: string;
  name: string;
  destination: string;
  type: string;
  capacity: string;
  imageSeed: string;
  description: string;
};

export const venues: Venue[] = [
  {
    slug: "the-marsh-exchange",
    name: "The Marsh Exchange",
    destination: "Meridian Bay",
    type: "Convention centre",
    capacity: "12,400 plenary · 38 breakouts",
    imageSeed: "marsh-exchange-hall",
    description:
      "A harbor-front convention centre with a retractable plenary wall that opens directly onto the marina for receptions.",
  },
  {
    slug: "ridgeline-lodge",
    name: "Ridgeline Lodge & Congress Hall",
    destination: "Solvane",
    type: "Lodge & congress hall",
    capacity: "3,100 plenary · 14 breakouts",
    imageSeed: "ridgeline-lodge",
    description:
      "Funicular-linked lodge and congress hall built into the ridge, with breakout rooms facing the valley rather than a corridor.",
  },
  {
    slug: "old-exchange-hall",
    name: "The Old Exchange Hall",
    destination: "Kastellan",
    type: "Heritage congress campus",
    capacity: "8,900 plenary · 41 breakouts",
    imageSeed: "old-exchange-hall",
    description:
      "An 1890s grain exchange restored as the entrance hall to Kastellan's modern congress campus — heritage facade, current-decade AV.",
  },
  {
    slug: "delta-exposition-park",
    name: "Delta Exposition Park",
    destination: "Northgate Delta",
    type: "Exhibition district",
    capacity: "184,000 m² · 22,000 plenary",
    imageSeed: "delta-exposition-park",
    description:
      "Six column-free halls on reclaimed delta land, each with independent freight tunnels for simultaneous exhibitor move-in.",
  },
];

export const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Venues", href: "/venues" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];
