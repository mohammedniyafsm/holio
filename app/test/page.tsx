"use client"

import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bird,
  BriefcaseBusiness,
  Circle,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Package,
  Sun,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA — edit everything below to swap in your own content          */
/* ------------------------------------------------------------------ */

const NAV = ["Home", "Projects", "Contact"];

const ABOUT = [
  "Full-stack engineer at Techorigins, building and scaling production SaaS — a football transfer marketplace, an AI bookkeeping app, an AI product-photography studio, an agency task platform, and an email-verification API.",
  "Backend-heavy: took a 5-minute endpoint to under 1 second with indexing and layered Redis caching, and deduplicated roughly a million records across four data providers with pg_trgm.",
  "I ship AI features the honest way — LLM pipelines with multi-model fallback chains, prompt engineering measured on labeled test sets, and MCP servers so AI agents can use my APIs as tools.",
  "Author of 5 npm packages (error-less, cron-safe, and friends) with thousands of downloads.",
];

const HIGHLIGHTS = [
  {
    icon: "🏆",
    title: "Won the Unlayer Hackathon",
    desc: 'Winner of the "Build with Elements" hackathon by Unlayer (YC W22).',
  },
  {
    icon: "🔀",
    title: "Contributor at Graphify (YC S26)",
    desc: "3 commits merged into the codebase of Graphify, a YC S26 company.",
  },
];

type ContactItem = {
  label: string;
  Icon: LucideIcon;
  href: string;
};

const CONTACTS: ContactItem[] = [
  { label: "GitHub", Icon: GitBranch, href: "https://github.com" },
  { label: "LinkedIn", Icon: BriefcaseBusiness, href: "https://linkedin.com" },
  { label: "Twitter", Icon: Bird, href: "https://twitter.com" },
  { label: "Mail", Icon: Mail, href: "mailto:hello@example.com" },
  { label: "Resume", Icon: FileText, href: "#" },
];

type ProjectItem = {
  name: string;
  org: string;
  status: string;
  featured: boolean;
  gradient: string;
  headline: string;
  desc: string;
  tags: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    name: "TransferPitch",
    org: "Built at Techorigins",
    status: "Live",
    featured: true,
    gradient: "linear-gradient(135deg,#38bdf8,#1d4ed8)",
    headline: "Bringing Swiss Precision to the Pitch",
    desc: "A B2B marketplace for football player transfers — clubs post tenders, agents pitch their players, and deals close in-app through chat, video meetings, and contract signing. Player data is aggregated from four providers…",
    tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
  },
  {
    name: "SquareOne",
    org: "Built at Techorigins",
    status: "Live",
    featured: false,
    gradient: "linear-gradient(135deg,#fb7185,#f43f5e)",
    headline: "Prep for taxes faster",
    desc: "An AI bookkeeping SaaS for US creative professionals — connects banks via Plaid and categorizes a full year of transactions into IRS Schedule C categories with an LLM, turning tax prep into a one-hour guided review…",
    tags: ["Django", "DRF", "Celery", "Redis", "Plaid"],
  },
  {
    name: "Frame Studio",
    org: "Built at Techorigins",
    status: "Live",
    featured: false,
    gradient: "linear-gradient(135deg,#fb923c,#7c3aed)",
    headline: "Turn product images into visuals that sell",
    desc: "An AI product-photography studio that turns a single product photo into a full catalog of on-model and lifestyle shots for online stores.",
    tags: ["Next.js", "FastAPI", "OpenAI", "AWS"],
  },
  {
    name: "TaskFlow",
    org: "Built at Techorigins",
    status: "Live",
    featured: false,
    gradient: "linear-gradient(135deg,#34d399,#0ea5e9)",
    headline: "Sign up, Rohit",
    desc: "An agency task platform that keeps client work, approvals, and billing in one shared, real-time board.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Engineer",
    org: "Techorigins",
    time: "July 2025 - Present",
    points: [
      "Developed and optimized responsive UIs with React.js, improving page load performance by 30% and enhancing user retention",
      "Implemented reusable component libraries with TypeScript and Tailwind CSS, reducing development time by 25% across projects.",
      "Collaborated with backend teams to integrate REST and GraphQL APIs, cutting integration issues by 40%",
      "Improved accessibility and SEO scores of web apps, achieving 95+ Lighthouse scores and boosting organic traffic",
    ],
  },
  {
    role: "React.js Developer",
    org: "Revenza Tech",
    time: "May 2025 - July 2025",
    points: [
      "Developed and deployed custom ERP systems, streamlining workflows and reducing manual processing time by 30%.",
      "Built responsive web applications that improved user engagement and led to a 25% faster load time across platforms.",
      "Delivered cross-platform mobile apps that enhanced customer reach, achieving 40% higher user adoption within the first release cycle.",
      "Managed full-stack development independently, completing projects 20% ahead of deadlines while ensuring 99.9% uptime",
    ],
  },
  {
    role: "Software Developer Engineer intern (React-native)",
    org: "CoRider",
    time: "Jan 2025 - May 2025",
    points: [
      "Built and shipped React Native screens end-to-end, improving user experience across devices while optimizing performance.",
    ],
  },
];

const TECH_CATEGORIES = ["All", "Languages", "Frontend", "Backend", "AI / LLM", "Databases", "Infrastructure", "Tools"];

const TECH = [
  { name: "TypeScript", cat: "Languages" },
  { name: "Python", cat: "Languages" },
  { name: "SQL", cat: "Languages" },
  { name: "React", cat: "Frontend" },
  { name: "Next.js", cat: "Frontend" },
  { name: "React Native", cat: "Frontend" },
  { name: "Tailwind CSS", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" },
  { name: "Django", cat: "Backend" },
  { name: "FastAPI", cat: "Backend" },
  { name: "OpenAI", cat: "AI / LLM" },
  { name: "Gemini", cat: "AI / LLM" },
  { name: "Claude", cat: "AI / LLM" },
  { name: "RAG", cat: "AI / LLM" },
  { name: "AI Agents", cat: "AI / LLM" },
  { name: "PostgreSQL", cat: "Databases" },
  { name: "Redis", cat: "Databases" },
  { name: "MongoDB", cat: "Databases" },
  { name: "Typesense", cat: "Databases" },
  { name: "pgvector", cat: "Databases" },
  { name: "AWS", cat: "Infrastructure" },
  { name: "Docker", cat: "Infrastructure" },
  { name: "Cloudflare", cat: "Infrastructure" },
  { name: "GitHub Actions", cat: "Infrastructure" },
  { name: "Git", cat: "Tools" },
  { name: "Playwright", cat: "Tools" },
  { name: "Postman", cat: "Tools" },
];

type OpenSourceItem = {
  icon: string;
  name: string;
  desc: string;
};

const OPEN_SOURCE: OpenSourceItem[] = [
  {
    icon: "🌟",
    name: "error-less",
    desc: "A zero-config library that intercepts V8 stack traces to print beautiful, syntax-highlighted code frames directly in the terminal, complete with AI-style troubleshooting tips.",
  },
  {
    icon: "🛡️",
    name: "cron-safe",
    desc: "A drop-in wrapper for `node-cron` that brings enterprise reliability features — usually found in Redis/BullMQ — to simple file-based setups.",
  },
  {
    icon: "🛰️",
    name: "node-network",
    desc: "A TUI (Terminal UI) that visualizes outgoing requests in real-time, allowing you to inspect headers, payloads and timings without leaving the terminal.",
  },
];

const QUOTE =
  "I help growing brands and startups gain an unfair advantage through premium, results-driven web apps.";

const MONTHS = ["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

/* deterministic pseudo-random heat levels so the grid is stable */
function heat(seed: number): number {
  const x = Math.sin(seed * 999) * 10000;
  const f = x - Math.floor(x);
  if (f > 0.94) return 4;
  if (f > 0.82) return 3;
  if (f > 0.62) return 2;
  if (f > 0.4) return 1;
  return 0;
}
const HEAT_BG = ["#161616", "#2b2b2b", "#4a4a4a", "#8a8a8a", "#f4f2ec"];

/* ------------------------------------------------------------------ */
/*  SHARED BITS                                                        */
/* ------------------------------------------------------------------ */

function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

      .pf-root{
        --bg:#0a0a0a; --panel:#121212; --panel-2:#151515;
        --line:rgba(255,255,255,0.09); --line-soft:rgba(255,255,255,0.055);
        --text:#f3f1ea; --muted:#9a9a95; --faint:#616160;
        --accent:#3ecf8e;
        background:var(--bg); color:var(--text);
        font-family:'Inter',system-ui,sans-serif;
        font-size:14px; line-height:1.6;
      }
      .pf-serif{ font-family:'Newsreader',Georgia,serif; }
      .pf-mono{ font-family:'JetBrains Mono',ui-monospace,monospace; }

      .pf-hatch{
        background-image:repeating-linear-gradient(45deg, var(--line-soft) 0 1px, transparent 1px 9px);
        border-top:1px solid var(--line); border-bottom:1px solid var(--line);
      }
      .pf-scroll{ scrollbar-width:thin; scrollbar-color:#3a3a3a transparent; }
      .pf-scroll::-webkit-scrollbar{ height:6px; }
      .pf-scroll::-webkit-scrollbar-thumb{ background:#3a3a3a; border-radius:4px; }
      .pf-scroll::-webkit-scrollbar-track{ background:transparent; }

      .pf-card{ background:var(--panel); border:1px solid var(--line); }
      .pf-btn{ transition:background .15s ease, border-color .15s ease, color .15s ease; }
      .pf-tag{ border:1px solid var(--line); color:var(--muted); background:var(--panel-2); }
      .pf-frame{ border-left:1px solid var(--line); border-right:1px solid var(--line); }
    `}</style>
  );
}

function SectionHatch() {
  return <div className="pf-hatch h-8 w-full" />;
}

function SectionHeading({
  eyebrow,
  title,
  right,
}: {
  eyebrow?: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-6 px-5 md:px-10">
      <div className="flex items-center gap-2">
        {eyebrow ? (
          <span className="text-[11px] md:text-[12px] text-[var(--faint)] pf-mono uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="pf-serif text-[26px] md:text-[32px] font-medium">{title}</h2>
      </div>
      {right ? (
        <span className="text-[12px] md:text-[13px] text-[var(--muted)] pf-mono">{right}</span>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[rgba(10,10,10,0.85)] border-b border-[var(--line)]">
      <div className="max-w-[940px] mx-auto pf-frame flex items-center justify-between px-5 md:px-10 h-14">
        <span className="pf-serif text-[19px]">Rohit</span>
        <nav className="hidden sm:flex items-center gap-6 text-[13px] text-[var(--muted)]">
          {NAV.map((n) => (
            <a key={n} href="#" className="hover:text-[var(--text)] transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <nav className="flex sm:hidden items-center gap-4 text-[13px] text-[var(--muted)]">
            {NAV.map((n) => (
              <a key={n} href="#" className="hover:text-[var(--text)] transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <button
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--muted)]"
          >
            <Sun size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO + ABOUT                                                       */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <div
        className="h-[130px] md:h-[220px] mx-5 md:mx-10 mt-6 rounded-md"
        style={{
          background:
            "radial-gradient(120% 140% at 20% 20%, #1f6b52 0%, #0c2a22 45%, #0a0a0a 80%)",
        }}
      />
      <div className="flex items-center gap-4 px-5 md:px-10 mt-5">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces"
          alt="Profile"
          className="w-16 h-16 rounded-md object-cover grayscale border border-[var(--line)]"
        />
        <div>
          <h1 className="pf-serif text-[22px] md:text-[26px]">Rohit Kumar Kashyap</h1>
          <p className="pf-mono text-[12px] md:text-[13px] text-[var(--muted)] mt-1">
            Full-Stack Engineer · Django / FastAPI / React / Next.js
          </p>
          <p className="flex items-center gap-1 text-[12px] text-[var(--faint)] mt-1">
            <MapPin size={12} /> India
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="About" />
        <ul className="px-5 md:px-10 space-y-4">
          {ABOUT.map((line, i) => (
            <li key={i} className="flex gap-3 text-[14px] text-[var(--muted)] leading-relaxed">
              <span className="text-[var(--faint)] mt-[3px]">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HIGHLIGHTS                                                         */
/* ------------------------------------------------------------------ */

function Highlights() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="Highlights" />
        <div className="pf-scroll flex gap-4 overflow-x-auto px-5 md:px-10 pb-3">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="pf-card rounded-lg p-5 min-w-[280px] md:min-w-[320px] flex-shrink-0"
            >
              <p className="text-[14px] font-medium mb-1.5">
                <span className="mr-1.5">{h.icon}</span>
                {h.title}
              </p>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="Contact" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-5 md:px-10">
          {CONTACTS.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              className="pf-card pf-btn rounded-lg px-4 py-3 flex items-center justify-between hover:border-[var(--muted)]"
            >
              <span className="flex items-center gap-2 text-[13px] font-medium">
                <Icon size={15} /> {label}
              </span>
              <ArrowUpRight size={13} className="text-[var(--faint)]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

function ProjectCard({ p }: { p: ProjectItem }) {
  return (
    <div className="pf-card rounded-lg overflow-hidden flex flex-col">
      <div
        className="relative h-40 md:h-44 flex items-center justify-center text-center px-6"
        style={{ background: p.gradient }}
      >
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        {p.featured && (
          <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-semibold px-6 py-1 rotate-45 translate-x-6 translate-y-3 pf-mono">
            FEATURED
          </span>
        )}
        <span className="pf-serif text-white text-[19px] md:text-[21px] leading-snug drop-shadow">
          {p.headline}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="text-[15px] font-semibold">{p.name}</h3>
          <span className="flex items-center gap-1 text-[12px] text-[var(--accent)]">
            <Circle size={7} fill="currentColor" stroke="none" /> {p.status}
          </span>
        </div>
        <p className="text-[12px] text-[var(--faint)] mb-3">{p.org}</p>
        <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-4">{p.desc}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t: string) => (
              <span key={t} className="pf-tag text-[11px] px-2 py-1 rounded-md">
                {t}
              </span>
            ))}
          </div>
          <span className="w-7 h-7 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--faint)] flex-shrink-0 ml-2">
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <div className="flex items-center justify-between px-5 md:px-10 mb-6">
          <h2 className="pf-serif text-[26px] md:text-[32px] font-medium">Projects</h2>
          <a href="#" className="text-[13px] text-[var(--muted)] flex items-center gap-1 hover:text-[var(--text)]">
            View all <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                          */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="Experience" />
        <div className="px-5 md:px-10">
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.role + e.org}
              className={`py-6 ${i !== 0 ? "border-t border-[var(--line-soft)]" : ""}`}
            >
              <div className="flex items-baseline justify-between flex-wrap gap-1 mb-3">
                <p className="text-[14px]">
                  <span className="font-semibold">{e.role}</span>{" "}
                  <span className="text-[var(--faint)]">· {e.org}</span>
                </p>
                <span className="pf-mono text-[11px] text-[var(--faint)]">{e.time}</span>
              </div>
              <ul className="space-y-2">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-[13px] text-[var(--muted)] leading-relaxed">
                    <span className="text-[var(--faint)] mt-[3px]">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TECH STACK                                                         */
/* ------------------------------------------------------------------ */

function TechStack() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? TECH : TECH.filter((t) => t.cat === active);

  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="Tech Stack" right="( hover to play )" />
        <div className="px-5 md:px-10">
          <div className="pf-scroll flex gap-2 overflow-x-auto pb-4 mb-4">
            {TECH_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`pf-btn flex-shrink-0 text-[12px] px-3 py-1.5 rounded-full border ${
                  active === c
                    ? "bg-[var(--text)] text-black border-[var(--text)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((t) => (
              <span key={t.name} className="pf-tag text-[12px] px-3 py-1.5 rounded-md">
                <span className="text-[var(--faint)] mr-1">•</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GITHUB ACTIVITY                                                     */
/* ------------------------------------------------------------------ */

function GithubActivity() {
  const weeks = 44;
  const days = 7;

  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading
          title="GitHub Activity"
          right={
            <span className="flex items-center gap-1.5 text-[var(--accent)]">
              <Circle size={7} fill="currentColor" stroke="none" /> Live
            </span>
          }
        />
        <div className="px-5 md:px-10">
          <div className="pf-scroll overflow-x-auto">
            <div className="min-w-[620px]">
              <div className="flex text-[10px] text-[var(--faint)] pf-mono mb-1 pl-1">
                {MONTHS.map((m) => (
                  <span key={m} style={{ width: `${100 / MONTHS.length}%` }}>
                    {m}
                  </span>
                ))}
              </div>
              <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: "repeat(7, 10px)" }}>
                {Array.from({ length: weeks * days }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[10px] h-[10px] rounded-[2px]"
                    style={{ background: HEAT_BG[heat(i)] }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-[12px] text-[var(--muted)]">
              2129 contributions in the last year
            </p>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[var(--faint)]">
              <span>Less</span>
              {HEAT_BG.map((c) => (
                <span key={c} className="w-[10px] h-[10px] rounded-[2px]" style={{ background: c }} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  OPEN SOURCE                                                        */
/* ------------------------------------------------------------------ */

function OpenSource() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-8">
        <SectionHeading title="Open Source" right="( published on npm )" />
        <div className="pf-scroll flex gap-4 overflow-x-auto px-5 md:px-10 pb-3">
          {OPEN_SOURCE.map((pkg: OpenSourceItem) => (
            <div key={pkg.name} className="pf-card rounded-lg p-5 min-w-[260px] flex-shrink-0 flex flex-col">
              <p className="text-[14px] font-medium mb-2">
                <span className="mr-1.5">{pkg.icon}</span>
                {pkg.name}
              </p>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed flex-1">{pkg.desc}</p>
              <div className="flex items-center gap-3 mt-4 text-[var(--faint)]">
                <Package size={14} />
                <GitBranch size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA / QUOTE / FOOTER                                                */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section className="max-w-[940px] mx-auto pf-frame">
      <SectionHatch />
      <div className="py-10 px-5 md:px-10">
        <h2 className="pf-serif text-[26px] md:text-[32px] font-medium mb-8">Scrolled Too Far</h2>
        <div className="text-center py-6">
          <p className="text-[13px] text-[var(--muted)] mb-6">
            If you've read this far, you might be interested in what I do.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[var(--text)] text-black text-[13px] font-medium px-5 py-3 rounded-md"
          >
            Let's Talk <ArrowRight size={14} />
          </a>
        </div>
      </div>
      <SectionHatch />
      <div className="py-14 px-5 md:px-16 text-center">
        <p className="pf-serif text-[var(--faint)] text-3xl mb-2">&ldquo;</p>
        <p className="pf-serif italic text-[20px] md:text-[26px] leading-snug max-w-[640px] mx-auto">
          {QUOTE}
        </p>
        <p className="pf-mono text-[11px] tracking-[0.2em] text-[var(--faint)] mt-6">
          — ROHIT KUMAR KASHYAP
        </p>
      </div>
      <SectionHatch />
      <footer className="py-8 text-center">
        <p className="text-[13px] text-[var(--muted)]">
          Designed &amp; Developed by <span className="text-[var(--text)] font-semibold">Rohit Kumar Kashyap</span>
        </p>
        <p className="pf-mono text-[11px] text-[var(--faint)] mt-1">© 2026 All rights reserved.</p>
      </footer>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */

export default function PortfolioClone() {
  return (
    <div className="pf-root min-h-screen">
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Contact />
      <Projects />
      <Experience />
      <TechStack />
      <GithubActivity />
      <OpenSource />
      <CTA />
    </div>
  );
}