export interface TechItem {
  label: string;
  icon?: string;
  emoji?: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  accentColor?: "green" | "yellow";
  link?: string;
  logoUrl?: string;
  tags: TechItem[];
  achievements: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  tags: TechItem[];
  sourceUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export const projects: ProjectData[] = [
  {
    title: "Townify ( 2D metaverse )",
    description: "Townify is a 2D metaverse platform that allows users to explore virtual spaces, interact with others, and engage in real-time social experiences.",
    imageUrl: "/Townify.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Townify",
    liveUrl: "https://townify-metaverse.example.com",
    demoUrl: "https://drive.google.com/file/d/1Im1cWQmSRHtQ9S2S8Czo2mgejaiDtZdN/view?usp=sharing",
    tags: [
      { label: "React js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "Phaser", emoji: "🎮" },
      { label: "Node js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "WebSockets", emoji: "⚡" },
      { label: "WebRTC", emoji: "📞" },
      { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { label: "Prisma ORM", emoji: "◈" },
      { label: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { label: "Oauth", emoji: "🔑" },
      { label: "Pub/Sub", emoji: "📢" },
      { label: "Nodemailer", emoji: "✉️" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { label: "TurboRepo", emoji: "🚀" },
    ],
  },

  {
    title: "Nuvée Perfume Ecommerce",
    description: "Nuvée is a perfume ecommerce platform featuring product browsing, filtering, cart, wishlist, Razorpay payments, and an admin dashboard.",
    imageUrl: "/nuvee.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Nuv-e",
    liveUrl: "https://nuvee-perfume.niyaf.in",
    tags: [
      { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "Razorpay", emoji: "💳" },
      { label: "Redux", emoji: "⚛️" },
      { label: "Nodemailer", emoji: "✉️" },
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Echo Space",
    description: "Echo Space is a feedback platform to explore events, leave public or anonymous feedback, and engage by liking events and feedback.",
    imageUrl: "/echospace.png",
    sourceUrl: "https://github.com/mohammedniyafsm/EchoSpace",
    liveUrl: "https://echospace.example.com",
    tags: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "Prisma", emoji: "◈" },
      { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { label: "NextAuth", emoji: "🔐" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Hush Hub",
    description: "The Hush Hub is a chat application that allows users to create & join room and send & receive messages in real-time.",
    imageUrl: "/hushhub.png",
    sourceUrl: "https://github.com/mohammedniyafsm/hushhub",
    liveUrl: "https://hushhub.example.com",
    tags: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "WebSockets", emoji: "⚡" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "Shadcn", emoji: "🎨" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Card Rush",
    description: "Card Rush is a real-time card game that allows users to claim cards and earn points with cooldown rules in a competitive arena.",
    imageUrl: "/cardrush.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Inboxkit",
    liveUrl: "https://cardrush.example.com",
    tags: [
      { label: "React js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "Node js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "WebSockets", emoji: "⚡" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
];

export const experiences: ExperienceData[] = [
  {
    company: "Tvara",
    role: "FULLSTACK DEVELOPER",
    dateRange: "FEB 2026 — MAY 2026",
    location: "ON-SITE",
    accentColor: "green",
    logoUrl: "/tvara.jpg",
    tags: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { label: "OAuth", emoji: "🔐" },
      { label: "Webhooks", emoji: "⚡" },
    ],
    achievements: [
      "Built OAuth-based authentication and the full onboarding flow — company registration, account setup, org management",
      "Integrated Zoho CRM via webhooks for real-time two-way data sync between the platform and third-party CRM",
      "Built event-driven backend workflows enabling real-time sync across external integrations",
    ],
  },
  {
    company: "Bridgeon",
    role: "FULLSTACK INTERN",
    dateRange: "AUG 2025 — FEB 2026",
    location: "ON-SITE",
    accentColor: "green",
    logoUrl: "/bridgeon.png",
    tags: [
      { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    achievements: [
      "Built full-stack features across React/Next.js frontend and Node/Express backend",
      "Developed REST APIs and authentication flows, handled state with Redux Toolkit",
      "Practiced system design fundamentals in a structured, production-style workflow",
    ],
  },
  {
    company: "Phemesoftware Pvt Ltd",
    role: "GROUP PROJECT",
    dateRange: "SEPT 2024 — NOV 2024",
    location: "REMOTE",
    accentColor: "yellow",
    logoUrl: "/phimsoft.png",
    tags: [
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express.js", emoji: "⚙️" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "E-Commerce", emoji: "🛒" },
    ],
    achievements: [
      "Built the backend for an e-commerce website as part of a group internship",
      "Developed product catalog, shopping cart management, and checkout APIs",
      "Implemented secure JWT authentication and query optimization",
    ],
  },
  {
    company: "IBM Developer Training",
    role: "CYBERSECURITY & CLOUD TRAINEE",
    dateRange: "2022 — 2025",
    location: "HYBRID",
    accentColor: "green",
    logoUrl: "/ibm.png",
    tags: [
      { label: "Cybersecurity", emoji: "🛡️" },
      { label: "Cloud Computing", emoji: "☁️" },
      { label: "Virtual Machines", emoji: "🖥️" },
    ],
    achievements: [
      "Trained in core cybersecurity and cloud computing concepts alongside my degree",
      "Learned how systems scale and how virtual machines and cloud infrastructure work under the hood",
      "Studied how real-world attacks happen and the security practices used to defend against them",
    ],
  },
];
