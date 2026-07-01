export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  discipline: string;
  cover: string;
  summary: string;
  challenge: string;
  role: string;
  process: string[];
  stats: ProjectStat[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "winn-we-innovate",
    title: "Winn — We Innovate",
    client: "Bolsa de Comercio de Rosario",
    category: "Digital & UX/UI",
    year: "2023",
    discipline: "Brand identity · UI/UX · Launch · B2B platform",
    cover: "/projects/winn.png",
    summary:
      "A modern, autonomous digital innovation platform with its own identity inside a 135-year-old institutional ecosystem.",
    challenge:
      "BCR needed to launch an innovation platform with its own identity — modern and autonomous within a 135-year-old institutional ecosystem. The risk: too close to the parent brand and it loses freshness; too far, and it loses credibility.",
    role: "I led the project end-to-end: strategic definition, naming, visual direction, interface architecture and launch supervision. I coordinated design, development and audiovisual production teams.",
    process: [
      "Positioning strategy & naming",
      "UI/UX design — screens, flows and user experience",
      "Launch campaign — video, live event and digital assets",
    ],
    stats: [
      { value: "UI/UX", label: "Interface & user experience" },
      { value: "B2B", label: "Regional innovation platform" },
      { value: "360°", label: "Strategy, identity & launch" },
    ],
  },
  {
    slug: "altomonte-group",
    title: "Altomonte · Marché Central · Wartung",
    client: "Grupo Altomonte",
    category: "Branding & Identity",
    year: "2019–2025",
    discipline: "Brand architecture · Identity · Territorial expansion",
    cover: "/projects/altomonte.png",
    summary:
      "A systemic brand architecture built to support multiple business units as the company scaled from 50 to 500+ employees.",
    challenge:
      "In 2019, Altomonte had 50 employees and a functional but unpositioned brand. Leadership wanted to grow and understood branding as the key lever. The work was not redesigning a logo — it was building an architecture to support multiple business units at scale.",
    role: "Initial diagnosis, brand architecture strategy and creative direction across all three projects — working directly with the company’s leadership over six years. I proposed independent brands, not sub-brands, so each unit could position itself clearly within its segment.",
    process: [
      "Brand audit & consulting",
      "Group architecture strategy",
      "Altomonte identity redesign",
      "Marché Central identity redesign",
      "Naming + branding: Wartung 2025",
    ],
    stats: [
      { value: "50 → 500+", label: "Employees between 2019 & 2025" },
      { value: "3 brands", label: "Under one systemic architecture" },
      { value: "5 provinces", label: "Current operational coverage" },
      { value: "6 years", label: "Continuous strategic collaboration" },
    ],
    outcome:
      "A clear brand architecture accompanied the company’s growth, service diversification and expansion across five provinces.",
  },
  {
    slug: "rio-arriba",
    title: "Río Arriba — Logistics Park",
    client: "Río Arriba",
    category: "Branding & Identity",
    year: "2022",
    discipline: "Naming · Identity · Storytelling · Simultaneous launch",
    cover: "/projects/rio-arriba.png",
    summary:
      "A logistics brand built from scratch — name, identity and narrative — launched simultaneously in two cities.",
    challenge:
      "A logistics company needed a brand from scratch — no name, no identity — with a launch already scheduled in Rosario and Mendoza. The audience: investors and operators in the agro-export corridor. No room to iterate.",
    role: "Full project direction under time pressure and demanding stakeholders: naming, identity, brand narrative and audiovisual production. “Río Arriba” evoked movement, direction and geographic rootedness — key values for a logistics park at the heart of the agro-export region.",
    process: [
      "Naming & strategic positioning",
      "Visual identity system",
      "Brand storytelling & narrative",
      "Audiovisual production",
      "Multi-channel communication — web, editorial & environmental",
    ],
    stats: [
      { value: "2 cities", label: "Simultaneous launch" },
      { value: "From scratch", label: "Naming + identity + communication" },
      { value: "360°", label: "Print, digital, environmental & audiovisual" },
      { value: "B2B", label: "Agro-industrial sector" },
    ],
    outcome:
      "Simultaneous events in Rosario and Mendoza, coordinating creative teams, production companies and suppliers in parallel.",
  },
  {
    slug: "exiline",
    title: "Exiline — Brand Ecosystem",
    client: "Exiline",
    category: "Packaging & Retail",
    year: "2002–2016",
    discipline: "Identity · Packaging · Portfolio architecture · Expansion",
    cover: "/projects/exiline.png",
    summary:
      "A coherent ecosystem for multiple professional haircare lines, with international expansion into the European market.",
    challenge:
      "Building a brand ecosystem for multiple professional haircare lines — with visual coherence across categories and clear differentiation between products.",
    role: "Creative and strategic direction across all lines for 14 years: portfolio architecture, differentiation criteria, primary and secondary packaging standards, and international expansion with Exitenn Profesional in Spain. Each line has its own visual language, but all share a structural logic that makes them recognisable as part of the same group.",
    process: [
      "Exiline · Master Brand",
      "Nutriv · Superior Technology",
      "Tekné · Creative Styling",
      "Intensive Color · Extrem Color",
      "Biocell Therapy · Ecosis",
    ],
    stats: [
      { value: "14 years", label: "Continuous collaboration 2002–2016" },
      { value: "6+ lines", label: "Brands in the portfolio" },
      { value: "AR + ES", label: "Argentina & España" },
      { value: "360°", label: "Naming, identity, packaging & POS" },
    ],
    outcome:
      "Identity and packaging redesign of Exitenn Profesional for the European market.",
  },
  {
    slug: "bcr-institutional",
    title: "Bolsa de Comercio de Rosario",
    client: "BCR",
    category: "Branding & Identity",
    year: "2010–2016",
    discipline: "Institutional identity · Editorial · Digital · Social",
    cover: "/projects/bcr.png",
    summary:
      "Six years as BCR’s in-house agency, leading institutional identity across editorial, digital, audiovisual and environmental channels.",
    challenge:
      "BCR needed an integrated creative department to organise internal and external communications, brand architecture, its areas and services — sustained consistently across a complex institutional environment.",
    role: "I advised and led the institution’s executive and creative direction. Together with Ampersand Group, we functioned as an integrated creative department for six consecutive years, managing multidisciplinary teams, external vendors and multiple communication channels simultaneously — working directly with institutional leadership.",
    process: [
      "Institutional identity & communication system",
      "Editorial & publishing",
      "Digital platforms",
      "Audiovisual & environmental communication",
    ],
    stats: [
      { value: "6 years", label: "In-house agency" },
      { value: "360°", label: "Editorial, branding, digital & social" },
      { value: "3", label: "Identity projects developed" },
      { value: "C-level", label: "Direct management with direction" },
    ],
  },
  {
    slug: "bcr-armonia",
    title: "BCR Armonía — Sustainable Building",
    client: "BCR",
    category: "Branding & Identity",
    year: "2021",
    discipline: "Naming · Identity · Audiovisual direction",
    cover: "/projects/armonia.png",
    summary:
      "Naming, identity and audiovisual direction for BCR’s first smart, sustainable building — an investor-facing launch.",
    challenge:
      "BCR’s first sustainable, smart building needed a brand of its own and a compelling investor-facing launch that communicated innovation and environmental commitment.",
    role: "Naming, identity and audiovisual direction for the building, coordinating the launch narrative and assets for an investor audience.",
    process: [
      "Naming & positioning",
      "Visual identity",
      "Audiovisual direction",
      "Investor-facing launch",
    ],
    stats: [
      { value: "Smart", label: "Sustainable building" },
      { value: "Naming", label: "Identity & narrative" },
      { value: "Launch", label: "Investor-facing event" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const furtherWork = [
  {
    title: "Grupo Cura",
    description:
      "360° branding for Metropolitano (from naming), refresh and audiovisual production for Martha Cura, full relaunch of Posta 36.",
  },
  {
    title: "Zeni",
    description:
      "An anniversary request became three years of strategic advisory and full identity restyling.",
  },
  {
    title: "Aapresid",
    description:
      "RFI for the web re-engineering project of Argentina’s leading agricultural association.",
  },
  {
    title: "Fiordani Renzi",
    description:
      "Social media strategy, brand restructuring and brand manual development.",
  },
  {
    title: "Synthon",
    description:
      "Corporate presentations for HR aligned to the global pharmaceutical company’s brandbook.",
  },
  {
    title: "Sinapi",
    description:
      "Digital assets, social content and identity design for Underline, an internal digital tool.",
  },
  {
    title: "Zona 93 / New Motion",
    description:
      "B2C product development and full New Motion restyling with BrandBook.",
  },
];

export const clients = [
  "Bolsa de Comercio de Rosario",
  "Altomonte",
  "Marché Central",
  "Wartung",
  "Río Arriba",
  "Exiline",
  "Exitenn Profesional",
  "Grupo Cura",
  "Zeni",
  "Aapresid",
  "Synthon",
  "New Motion",
];

export const services = [
  {
    number: "01",
    title: "Brand Strategy & Architecture",
    description:
      "Translating business decisions into coherent brand systems — positioning, naming and architecture that scale across units and markets.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "End-to-end creative direction, from strategic definition to launch supervision across editorial, digital, audiovisual and environmental.",
  },
  {
    number: "03",
    title: "Identity Systems",
    description:
      "Scalable visual identity systems with a structural logic — distinctive yet recognisable as part of the same group.",
  },
  {
    number: "04",
    title: "UX/UI & Digital Platforms",
    description:
      "Interface architecture, flows and digital experiences for B2B platforms and institutional digital products.",
  },
  {
    number: "05",
    title: "Packaging & Product Branding",
    description:
      "Portfolio architecture, differentiation criteria and primary/secondary packaging standards for retail and POS.",
  },
  {
    number: "06",
    title: "Team & Vendor Leadership",
    description:
      "Leading multidisciplinary teams and external suppliers in parallel, working directly with C-level leadership.",
  },
];
