// All site copy lives here (spec: 2026-10-15-vikasmalik-com-design.md, section 3).
// Anything marked TODO is a section 8 placeholder waiting on Vikas.

export const links = {
  linkedin: "https://www.linkedin.com/in/vikmal",
  // TODO(spec s8): Cal.com event link for "20 min intro with Vik". Falls back to #book until supplied.
  cal: "#book",
  github: "https://github.com/vikypediaa/vikasmalik.com",
  effiscale: "https://effiscale.ai",
  email: "hello@vikasmalik.com",
} as const;

export const nav = [
  { label: "Results", href: "#results" },
  { label: "Builds", href: "#builds" },
  { label: "About", href: "#about" },
] as const;

export const hero = {
  coordinates: "51.5072° N, 0.1276° W",
  place: "London, UK",
  eyebrow: "Growth architect · AI builder · Ultra runner · Photographer",
  sub: "In my 10th year at Google, growing products across Google Cloud and Google Ads. Now I build practical AI that captures leads, follows up fast and gives you your week back.",
  credibility: "GOOGLE · BLACKROCK · STRATHCLYDE MBA",
} as const;

export type CardIcon = "growth" | "gtm" | "auto" | "cred" | "build";

export const deckCards: {
  icon: CardIcon;
  wp: string;
  lat: string;
  bg: string;
  skill: string;
  line: string;
  tools: string;
}[] = [
  {
    icon: "growth",
    wp: "WP 01",
    lat: "51.50° N",
    bg: "#B9D3C2",
    skill: "Growth marketing",
    line: "Acquisition lifecycle at Google Ads",
    tools: "GOOGLE ADS · GA4 · CRM · LIFECYCLE",
  },
  {
    icon: "gtm",
    wp: "WP 02",
    lat: "53.35° N",
    bg: "#F2CFBE",
    skill: "Go-to-market",
    line: "Launching and scaling products for Google Ads and Google Cloud",
    tools: "POSITIONING · LAUNCH PLANS · PRICING",
  },
  {
    icon: "auto",
    wp: "WP 03",
    lat: "54.45° N",
    bg: "#F7E6BF",
    skill: "AI automation",
    line: "Lead capture, follow-ups and admin workflows for small businesses",
    tools: "N8N · ZAPIER · AI AGENTS",
  },
  {
    icon: "cred",
    wp: "WP 04",
    lat: "56.80° N",
    bg: "#C4D5E0",
    skill: "MarTech and credentials",
    line: "Salesforce, Marketo, PRINCE2 Agile Practitioner, Outskill AI Generalist, AI Catalyst",
    tools: "CERTIFIED · 5 CREDENTIALS",
  },
  {
    icon: "build",
    wp: "WP 05",
    lat: "57.12° N",
    bg: "#E1EBDE",
    skill: "Builds with AI",
    line: "Shipping real products with Claude Code, Next.js and Vercel",
    tools: "CLAUDE CODE · NEXT.JS · VERCEL",
  },
];

export const results = {
  label: "02 · The view from here",
  tag: "ELEV. 10 YRS · GOOGLE",
  stats: [
    {
      value: "+23%",
      title: "Qualified leads",
      detail: "Google Cloud EMEA · Demand Gen",
    },
    {
      value: "+13%",
      title: "YoY revenue uplift",
      detail: "Google Ads · Post Acquisitions Growth",
    },
    {
      value: "+20%",
      title: "YoY opportunity pipeline",
      detail: "Google Ads · Direct Scaled Acquisitions",
    },
  ],
  // left is the % position along the ridge; top is px from the top of the 250px ridge box (A1 values)
  peaks: [
    { label: "PEAK 1 · 2013", left: 12.5, top: 154 },
    { label: "PEAK 2 · 2015", left: 37.5, top: 119 },
    { label: "PEAK 3 · 2017", left: 62.5, top: 84 },
    { label: "PEAK 4 · NOW", left: 87.5, top: 52, now: true },
  ],
  stops: [
    {
      years: "2013–15",
      text: "Campaigns and change · Tungsten, Truphone, Companeo",
    },
    { years: "2015–17", text: "Senior Growth Consultant · BlackRock" },
    { years: "2017–20", text: "Demand Gen and Automation · Google Cloud EMEA" },
    {
      years: "2020–now",
      text: "Google Ads, then EMEA Scaled Acquisitions · Google",
    },
  ],
} as const;

export const builds = {
  label: "03 · Things I've built",
  items: [
    {
      wp: "WP 1 · 51.51° N",
      status: "Live",
      statusStyle: "solid",
      name: "EffiScale.ai",
      body: "An AI automation consultancy for UK service businesses. AI receptionists, chatbots and workflows that catch every lead and cut the admin.",
      stack: "Built with Claude Design, Claude Code, Next.js, Vercel",
      cta: { label: "Visit EffiScale.ai →", href: links.effiscale },
    },
    {
      wp: "WP 2 · 54.45° N",
      status: "MVP · Nov 2026",
      statusStyle: "outline",
      name: "Hikedaily.co.uk",
      body: "Plan UK hikes, trail runs and walks by fitness level and weather, including how to get there and where to stop for food.",
      stack: "Built with Claude Code, OpenStreetMap, Vercel",
      cta: { label: "Launching November", href: null },
    },
    {
      wp: "WP 3 · 51.50° N",
      status: "Live · Open source",
      statusStyle: "solid",
      name: "vikasmalik.com",
      body: "This site. Designed and built with AI, and the code is public.",
      stack: "Built with Claude Code, Next.js, Vercel, Motion",
      cta: { label: "View the code on GitHub →", href: links.github },
    },
  ],
} as const;

export const about = {
  label: "04 · Off the trail",
  body: "When I'm not at my desk, I'm usually on a trail somewhere in the UK: running, hiking, or stopping too often to take photos. It's where I do my best thinking, and it's why I'm building Hikedaily. Outside the day job, I'm learning to build with AI and sharing what works (and what breaks) on LinkedIn.",
  photoAlt:
    "Old stone watermill beside a mossy stream in Borrowdale, Lake District",
  tags: [
    "Trail running",
    "Hiking",
    "Landscape photography",
    "Building with AI",
  ],
} as const;

export const close = {
  label: "05 · Let's map the route",
  line: "20 minutes, no pitch. Tell me where you're stuck and I'll tell you where I'd start.",
  signoff: "See you on the trail.",
} as const;

export const footerLinks = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "EffiScale.ai", href: links.effiscale },
  // TODO: link goes live with Hikedaily launch in November 2026.
  { label: "Hikedaily", href: "https://hikedaily.co.uk" },
] as const;

export const siteUrl = "https://vikasmalik.com";
