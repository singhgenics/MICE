import { basePath } from "@/lib/base-path";

// next/image doesn't auto-prefix local public/ src paths with basePath under
// static export (confirmed with the site logo, see lib/base-path.ts), so
// every real photo path defined below applies it once, here, rather than
// leaving every page/component that reads these fields to remember to.
const photo = (path: string) => `${basePath}${path}`;

export type Track = {
  slug: "northeast-india" | "southeast-asia";
  region: string;
  program: string;
  hero: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  imageDetail: string;
  imageDetailAlt: string;
  cities: string[];
  stat: { label: string; value: string };
  experiences: { title: string; body: string }[];
  advantage: string;
};

export const tracks: Track[] = [
  {
    slug: "northeast-india",
    region: "Northeast India",
    program: "The Digital Detox and Deep Work Retreat",
    hero: "For the team that needs to switch off before it can think straight.",
    tagline: "Hushpitality, not another ballroom.",
    description:
      "As teams push back against constant digital noise, Northeast India offers what the deck calls hushpitality: secondary, uncrowded destinations built for authentic cultural immersion and uninterrupted focus, not another hotel conference floor.",
    image: photo("/photos/northeast-india-waterfall.jpg"),
    imageAlt: "A waterfall dropping into a turquoise pool in the forests of Meghalaya",
    imageDetail: photo("/photos/meghalaya-root-bridge.jpg"),
    imageDetailAlt: "A double-decker living root bridge over a stream in Meghalaya",
    cities: ["Darjeeling", "Gangtok", "Kaziranga", "Shillong", "Tawang"],
    stat: { label: "Booking share, FY25 to 26", value: "40%" },
    experiences: [
      {
        title: "Wilderness navigation challenges",
        body: "Team exercises in the Khasi Hills of Meghalaya or the tea estates of Assam that require fast decisions and mutual reliance, flattening corporate hierarchy in the process.",
      },
      {
        title: "Mindful performance residencies",
        body: "Back to back strategy sessions replaced with wellness centred agendas: outdoor immersion, slow dining, and facilitated peer dialogue in remote eco resorts.",
      },
      {
        title: "Purpose driven CSR",
        body: "Half day community projects, working with local artisans or joining regional conservation efforts, so the retreat leaves a measurable positive impact behind.",
      },
    ],
    advantage:
      "Frontier Tourism manages the complex logistics of these emerging second city destinations, providing exclusive access to pristine environments while holding corporate safety and comfort standards.",
  },
  {
    slug: "southeast-asia",
    region: "Southeast Asia",
    program: "The Hybrid Scale and Innovation Summit",
    hero: "For the group too big, and too distributed, to fake alignment in a boardroom.",
    tagline: "The undisputed global MICE powerhouse.",
    description:
      "When the brief is rewarding top performers or aligning a large, distributed workforce, Southeast Asia remains the undisputed global powerhouse: high tech venue capability blended with leisure and wellness options no other region matches.",
    image: photo("/photos/bangkok-skyline.jpg"),
    imageAlt: "The Bangkok skyline rising above Lumphini Park",
    imageDetail: photo("/photos/tanah-lot-bali.jpg"),
    imageDetailAlt: "Tanah Lot sea temple on a rock arch off the coast of Bali",
    cities: [
      "Bangkok",
      "Phuket",
      "Krabi",
      "Bali",
      "Hanoi",
      "Ho Chi Minh City",
      "Da Nang",
      "Penang",
      "Georgetown",
      "Singapore City",
    ],
    stat: { label: "Booking share, FY25 to 26", value: "60%" },
    experiences: [
      {
        title: "Hyper personalized itineraries",
        body: "A choice architecture framework: delegates pick their own afternoon track, from a culinary team synergy challenge in Bangkok to a guided meditation session in Ubud.",
      },
      {
        title: "Guided innovation sprints",
        body: "Southeast Asia's state of the art MICE facilities host Shark Tank style hackathons: teams get a business problem in the morning and pitch a working prototype by evening.",
      },
      {
        title: "The luxury effect",
        body: "Premium, high reward incentive travel that pairs flawless logistics with Michelin starred dining, cultural workshops, and beachfront networking.",
      },
    ],
    advantage:
      "Frontier Tourism navigates Tier 1 hub complexity: securing competitive group rates, managing hybrid AV setups, and reporting carbon for large scale flights and venues.",
  },
];

export const bookingShare: { destination: string; share: number }[] = [
  { destination: "North East India", share: 40 },
  { destination: "Thailand", share: 35 },
  { destination: "Vietnam", share: 15 },
  { destination: "Malaysia", share: 10 },
];

export type MatrixQuadrant = {
  objective: string;
  focus: string;
  track: "northeast-india" | "southeast-asia";
  trackLabel: string;
  cities: string;
};

export const impactMatrix: MatrixQuadrant[] = [
  {
    objective: "Alignment and Vision",
    focus: "Big goals and the company roadmap",
    track: "northeast-india",
    trackLabel: "Northeast India, deep focus",
    cities: "Meghalaya, Assam, Darjeeling",
  },
  {
    objective: "Skill and Innovation",
    focus: "Creative problem solving and training",
    track: "southeast-asia",
    trackLabel: "Southeast Asia, tech enabled",
    cities: "Thailand, Malaysia, Singapore",
  },
  {
    objective: "Connection and Trust",
    focus: "Psychological safety and relationships",
    track: "northeast-india",
    trackLabel: "Northeast India, adventure and detox",
    cities: "Arunachal Pradesh, North Sikkim",
  },
  {
    objective: "Restoration and Wellness",
    focus: "Stopping burnout, building long term health",
    track: "southeast-asia",
    trackLabel: "Southeast Asia, luxury and spa",
    cities: "Bali, Vietnam, Thailand",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  track: "northeast-india" | "southeast-asia";
  destination: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "osk-group",
    client: "OSK Group of Companies Pvt. Ltd.",
    track: "southeast-asia",
    destination: "Bangkok and Pattaya, Thailand",
    headline: "FY25 to 26's first M.I.C.E tour: 4 nights, 5 days, one delivery team.",
    summary:
      "Accommodation, meals, conference, a farewell dinner, sightseeing, and every transfer across Bangkok and Pattaya handled under one contract. OSK Group's recommendation directly led to Frontier Tourism's next Southeast Asia mandate.",
    stats: [
      { label: "Trip length", value: "4N / 5D" },
      { label: "Cities", value: "2" },
      { label: "Referral generated", value: "1 repeat client" },
    ],
    image: photo("/photos/osk-group-pattaya.jpg"),
    imageAlt: "The OSK Group delegation posing in front of the Pattaya City sign",
  },
  {
    slug: "gajraj-and-sons",
    client: "Gajraj & Sons Pvt. Ltd.",
    track: "southeast-asia",
    destination: "Vietnam",
    headline: "35 patrons from Gujarat, 6 nights and 7 days, zero handoffs.",
    summary:
      "Following the Thailand mandate, Frontier Tourism hosted Gajraj & Sons' second major tour: stays in 4 star hotels and resorts with breakfast and dinner, full sightseeing, and every transfer across the itinerary.",
    stats: [
      { label: "Delegates", value: "35" },
      { label: "Trip length", value: "6N / 7D" },
      { label: "Hotel rating", value: "4 star" },
    ],
    image: photo("/photos/gajraj-sons-vietnam.jpg"),
    imageAlt: "The Gajraj & Sons group on a boat trip past limestone karst islands in Vietnam",
  },
  {
    slug: "la-favela",
    client: "La Favela",
    track: "southeast-asia",
    destination: "Bangkok, Chiang Mai, and Koh Samui, Thailand",
    headline: "An Annual Founders Meeting closed with a private yacht party.",
    summary:
      "FY25 to 26 ended with an unplanned opportunity from Mexico: OSK Group's own recommendation brought La Favela to Frontier Tourism for their Annual Founders Meeting, staying in premium resorts with meals, transfers, and sightseeing across three cities, closing with a private yacht party.",
    stats: [
      { label: "Cities covered", value: "3" },
      { label: "Resort tier", value: "Premium" },
      { label: "Sourced via", value: "Client referral" },
    ],
    image: photo("/photos/la-favela-bangkok.jpg"),
    imageAlt: "The La Favela group at the Golden Buddha temple, Wat Traimit, in Bangkok",
  },
  {
    slug: "glaxosmithkline",
    client: "GlaxoSmithKline, Gujarat Region",
    track: "northeast-india",
    destination: "Tawang, Northeast India",
    headline: "An executive meet in Tawang, Inner Line Permits included.",
    summary:
      "Opening FY26 to 27, Frontier Tourism hosted GlaxoSmithKline's Gujarat Region Executive Meet in Tawang: premium hotels and resorts, meals, transfers, sightseeing, and the Inner Line Permits that a restricted border region requires.",
    stats: [
      { label: "Destination", value: "Tawang" },
      { label: "Permits handled", value: "Inner Line" },
      { label: "Hotel tier", value: "Premium" },
    ],
    image: photo("/photos/gsk-tawang-snow.jpg"),
    imageAlt: "The GlaxoSmithKline delegation in the snow near Tawang",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Great experience with their services, worth the price, and also thank you for providing a very comfortable stay. Loved Vietnam with Frontier Tourism.",
    name: "Chung Jung Sherpa",
  },
  {
    quote:
      "Perfectly planned tailor made itineraries with great service and delicious food. Bali is the best they provide services in. 5 star.",
    name: "Deepak Kashyap",
  },
  {
    quote:
      "Bhutan trip was amazing, we experienced amazing service since arrival. The local guides and drivers are also very cooperative.",
    name: "Bhruban Ganguly",
  },
];

export type WorkflowEntry = {
  year: string;
  date: string;
  body: string;
};

export const workflow: WorkflowEntry[] = [
  {
    year: "2020",
    date: "20 October 2020",
    body: "Our first group tour in Himachal Pradesh after the COVID 19 pandemic, with 20 adults.",
  },
  {
    year: "2022",
    date: "20 May 2022",
    body: "Our 50th group trip: 50 adults in the Northeast Indian state of Meghalaya.",
  },
  {
    year: "2023",
    date: "18 October 2023",
    body: "Our first M.I.C.E tour in Vietnam, 4 nights and 5 days, for Samraj Constructions Pvt. Ltd. Our 100th trip concluded.",
  },
  {
    year: "2024",
    date: "10 September 2024",
    body: "Two M.I.C.E tours to Bali and Vietnam, 5 nights and 6 days each, 30 adults, for Ready City Infra Pvt. Ltd. and Gajraj & Sons Pvt. Ltd.",
  },
  {
    year: "2025",
    date: "14 September 2025",
    body: "Two consecutive M.I.C.E tours in Thailand, for OSK Group and La Favela.",
  },
  {
    year: "2026",
    date: "19 February 2026",
    body: "Received the award for Best Presentation in the Inbound Category, at an event in Penang, Malaysia.",
  },
];

export const whatWeOffer = [
  {
    title: "Single point of accountability",
    body: "From initial venue sourcing, the biggest hurdle for 51% of companies according to industry surveys, through on the ground crisis management and post event ROI reporting.",
  },
  {
    title: "ESG compliance built in",
    body: "A fixed carbon budget per event, a preference for eco certified DMCs and high speed rail where it applies, and venues that publish transparent sustainability reporting.",
  },
  {
    title: "Local insight, global standards",
    body: "The gap between authentic, off the beaten path experience and the rigorous logistical demands of modern corporate travel, bridged by one team.",
  },
];

export const guarantees = [
  "Luxurious and comfortable accommodations",
  "Meals as per choice",
  "Welcome breakfast and farewell dinner",
  "Private and hassle free transfers",
  "Seamless events and functions",
  "Authentic experiences",
  "Guided services throughout",
];

export const contact = {
  phone: "+91 76028 80330",
  phoneHref: "+917602880330",
  emailPrimary: "admin@thetravellerco.in",
  emailSecondary: "frontiertourism.ttc@gmail.com",
  website: "www.thetravellerco.in",
};

export const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Programs", href: "/programs" },
  { label: "Our Work", href: "/case-studies" },
  { label: "About", href: "/about" },
];
