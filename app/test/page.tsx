"use client"
import React, { useState } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import {
  GitBranch, BriefcaseBusiness, Bird, Mail, FileText, MapPin, Sun, Moon,
  ArrowRight, ArrowUpRight, Package, Circle, Globe
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA — edit everything below to swap in your own content          */
/* ------------------------------------------------------------------ */

const NAV = ["Home", "Projects", "Contact"];

const ABOUT = [
  <span>I'm a full-stack engineer who spends a disproportionate amount of time asking "but how does this actually work ?" and then following that question until I have a real answer.</span>,
  <span>Most engineers stop at the API boundary. I tend to keep going. That usually means digging into networking, databases, distributed systems, authentication, infrastructure, security, and blockchain systems — not just using them, but understanding the decisions and trade-offs behind them.</span>,
  // <span>Lately I've been exploring 🌐Web3 infrastructure, ⚡Solana, 🦀Rust, cryptography, 👛Wallet Arch, key management, and transaction signing. More often than not, a small question turns into a deep technical rabbit hole.</span>,
  // <span>I'm always building, experimenting, and learning. If you're interested in systems, infrastructure, security, blockchain, or difficult engineering problems, we'll probably get along.</span>,
  <span>I'm open to new roles, collaborations, and opportunities. Feel free to reach out at <a href="mailto:mohammedniyafsm@gmail.com" style={{ textDecoration: 'underline', color: 'var(--text)' }}>mohammedniyafsm@gmail.com</a>.</span>,
  // <span>If you're here, chances are I'd enjoy talking to you. I get nerd-sniped easily, and a message about something that recently fascinated you would honestly make my day.</span>
];

const HIGHLIGHTS = [
  { icon: "🏆", title: "Won the Unlayer Hackathon", desc: 'Winner of the "Build with Elements" hackathon by Unlayer (YC W22).' },
  { icon: "🔀", title: "Contributor at Graphify (YC S26)", desc: "3 commits merged into the codebase of Graphify, a YC S26 company." },
];

const CONTACTS = [
  { label: "GitHub", Icon: GitBranch, href: "https://github.com/mohammedniyafsm" },
  { label: "LinkedIn", Icon: BriefcaseBusiness, href: "https://www.linkedin.com/in/mohammad-niyaf-s-m-692801259" },
  { label: "Twitter", Icon: Bird, href: "https://x.com/n1yaf_" },
  { label: "Mail", Icon: Mail, href: "mailto:mohammedniyafsm@gmail.com" },
  { label: "Resume", Icon: FileText, href: "https://drive.google.com/file/d/1gygRAGaUbWpz4cUbicOSblw2OxwXTffk/view?usp=sharing" },
];

const PROJECTS = [
  {
    name: "CryptoLattice",
    imageUrl: "/cex.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Exchange-CEX",
    // demoUrl: "<your deployed demo URL>",
    desc: "A centralized cryptocurrency exchange with an order-matching engine, real-time market updates, and persistent trade data.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Redis", "WebSockets", "PostgreSQL", "Prisma", "Docker", "Pub/Sub", "Turborepo", "TimescaleDB"]
  },
  {
    name: "Townify ( 2D metaverse )", org: "Personal Project", status: "Live", featured: false,
    imageUrl: "/Townify.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Townify",
    demoUrl: "https://drive.google.com/file/d/1Im1cWQmSRHtQ9S2S8Czo2mgejaiDtZdN/view?usp=sharing",
    desc: "Townify is a 2D metaverse platform that allows users to explore virtual spaces, interact with others, and engage in real-time social experiences.",
    tags: ["React", "TypeScript", "Phaser", "Node.js", "Express", "WebSockets", "WebRTC", "PostgreSQL", "Prisma", "Redis", "Docker", "OAuth", "Tailwind CSS"]
  },
  {
    name: "Discord Bot & Dashboard",
    org: "Personal Project",
    status: "Live",
    liveUrl: "https://discord-bot.niyaf.in/",
    imageUrl: "/discord.png", // Replace with your actual image path
    sourceUrl: "https://github.com/mohammedniyafsm/discord-project",
    // demoUrl: "<your deployed demo URL>",
    desc: "A serverless Discord bot and Next.js web dashboard featuring secure Ed25519 slash command verification, automated webhook provisioning, and a multi-tenant admin portal for server configuration.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma", "NextAuth"]
  },
  {
    name: "Nuvée Perfume Ecommerce", org: "Personal Project", status: "Live", featured: false,
    imageUrl: "/nuvee.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Nuv-e",
    liveUrl: "https://nuvee-perfume.niyaf.in",
    desc: "Nuvée is a perfume ecommerce platform featuring product browsing, filtering, cart, wishlist, Razorpay payments, and an admin dashboard.",
    tags: ["React", "TypeScript", "Razorpay", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    name: "Echo Space", org: "Personal Project", status: "Live", featured: false,
    imageUrl: "/echospace.png",
    sourceUrl: "https://github.com/mohammedniyafsm/EchoSpace",
    desc: "Echo Space is a feedback platform to explore events, leave public or anonymous feedback, and engage by liking events and feedback.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"]
  },
  {
    name: "Hush Hub", org: "Personal Project", status: "Live", featured: false,
    imageUrl: "/hushhub.png",
    sourceUrl: "https://github.com/mohammedniyafsm/hushhub",
    desc: "The Hush Hub is a chat application that allows users to create & join room and send & receive messages in real-time.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Express", "Shadcn", "Tailwind CSS"]
  },
  {
    name: "Card Rush", org: "Personal Project", status: "Live", featured: false,
    imageUrl: "/cardrush.png",
    sourceUrl: "https://github.com/mohammedniyafsm/Inboxkit",
    desc: "Card Rush is a real-time card game that allows users to claim cards and earn points with cooldown rules in a competitive arena.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Express", "MongoDB", "Tailwind CSS"]
  },
];

const EXPERIENCE = [
  {
    role: "Fullstack Developer", org: "Tvara", time: "Feb 2026 - May 2026",
    logoUrl: "/tvara.jpg",
    points: [
      "Built OAuth-based authentication and the full onboarding flow — company registration, account setup, org management",
      "Integrated Zoho CRM via webhooks for real-time two-way data sync between the platform and third-party CRM",
      "Built event-driven backend workflows enabling real-time sync across external integrations",
    ]
  },
  {
    role: "Fullstack Intern", org: "Bridgeon", time: "Aug 2025 - Feb 2026",
    logoUrl: "/bridgeon.png",
    points: [
      "Built full-stack features across React/Next.js frontend and Node/Express backend",
      "Developed REST APIs and authentication flows, handled state with Redux Toolkit",
      "Practiced system design fundamentals in a structured, production-style workflow",
    ]
  },
  {
    role: "Group Project", org: "Phemesoftware Pvt Ltd", time: "Sept 2024 - Nov 2024",
    logoUrl: "/phimsoft.png",
    points: [
      "Built the backend for an e-commerce website as part of a group internship",
      "Developed product catalog, shopping cart management, and checkout APIs",
      "Implemented secure JWT authentication and query optimization",
    ]
  },
  {
    role: "Cybersecurity & Cloud Trainee", org: "IBM Developer Training", time: "2022 - 2025",
    logoUrl: "/ibm.png",
    points: [
      "Trained in core cybersecurity and cloud computing concepts alongside my degree",
      "Learned how systems scale and how virtual machines and cloud infrastructure work under the hood",
      "Studied how real-world attacks happen and the security practices used to defend against them",
    ]
  },
];

const TECH_CATEGORIES = ["All", "Languages", "Frontend", "Backend", "Databases", "DevOps", "Tools"];

const TECH = [
  { name: "JavaScript", cat: "Languages" }, { name: "TypeScript", cat: "Languages" }, { name: "Java", cat: "Languages" },
  { name: "HTML", cat: "Frontend" }, { name: "CSS", cat: "Frontend" }, { name: "React.js", cat: "Frontend" }, { name: "Next.js", cat: "Frontend" }, { name: "Tailwind CSS", cat: "Frontend" }, { name: "Redux", cat: "Frontend" }, { name: "Phaser.js", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" }, { name: "Express.js", cat: "Backend" }, { name: "WebSockets", cat: "Backend" }, { name: "WebRTC", cat: "Backend" }, { name: "Pub/Sub", cat: "Backend" }, { name: "Multer", cat: "Backend" }, { name: "OAuth", cat: "Backend" }, { name: "Razorpay", cat: "Backend" }, { name: "Nodemailer", cat: "Backend" }, { name: "LiveKit", cat: "Backend" },
  { name: "MongoDB", cat: "Databases" }, { name: "PostgreSQL", cat: "Databases" }, { name: "Prisma ORM", cat: "Databases" }, { name: "Redis", cat: "Databases" },
  { name: "Docker", cat: "DevOps" }, { name: "AWS", cat: "DevOps" }, { name: "CI/CD", cat: "DevOps" }, { name: "NGINX", cat: "DevOps" }, { name: "CDN", cat: "DevOps" }, { name: "Cloudinary", cat: "DevOps" }, { name: "Linux", cat: "DevOps" },
  { name: "Git", cat: "Tools" }, { name: "GitHub", cat: "Tools" }, { name: "Postman", cat: "Tools" }, { name: "Figma", cat: "Tools" }, { name: "Turborepo", cat: "Tools" }, { name: "Zod", cat: "Tools" }, { name: "Tiled maps", cat: "Tools" },
];

const OPEN_SOURCE = [
  { icon: "🌟", name: "error-less", desc: "A zero-config library that intercepts V8 stack traces to print beautiful, syntax-highlighted code frames directly in the terminal, complete with AI-style troubleshooting tips." },
  { icon: "🛡️", name: "cron-safe", desc: "A drop-in wrapper for `node-cron` that brings enterprise reliability features — usually found in Redis/BullMQ — to simple file-based setups." },
  { icon: "🛰️", name: "node-network", desc: "A TUI (Terminal UI) that visualizes outgoing requests in real-time, allowing you to inspect headers, payloads and timings without leaving the terminal." },
];

const QUOTE = "Good code solves the immediate problem. Great engineering understands the system, the infrastructure, and the trade-offs all the way down.";

const MONTHS = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

function heat(seed: number) {
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
/*  GLOBAL CSS — every value here is real CSS, nothing depends on a   */
/*  Tailwind JIT compiler, so it always renders exactly as written.   */
/* ------------------------------------------------------------------ */

function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

      html { scroll-padding-top: 64px; scroll-behavior: smooth; }
      .pf *{ box-sizing:border-box; }
      .pf{
        --bg:#0a0a0a; --panel:#131313; --panel-2:#161616;
        --line:rgba(255,255,255,0.14); --line-soft:rgba(255,255,255,0.07);
        --text:#f3f1ea; --muted:#a3a39d; --faint:#6b6b68;
        --accent:#3ecf8e;
        --header-bg:rgba(10,10,10,0.9);
        background:var(--bg); color:var(--text);
        font-family:'Inter',system-ui,sans-serif;
        font-size:14px; line-height:1.6; min-height:100vh;
      }
      .pf.light{
        --bg:#ffffff; --panel:#f8f9fa; --panel-2:#f1f3f5;
        --line:rgba(0,0,0,0.1); --line-soft:rgba(0,0,0,0.05);
        --text:#111111; --muted:#555555; --faint:#888888;
        --accent:#3ecf8e;
        --header-bg:rgba(255,255,255,0.9);
      }
      .pf-serif{ font-family:'Newsreader',Georgia,serif; }
      .pf-mono{ font-family:'JetBrains Mono',ui-monospace,monospace; }

      /* ---- centered framed column ---- */
      .pf-wrap{ max-width:720px; margin:0 auto; border-left:1px solid var(--line); border-right:1px solid var(--line); background:var(--bg); }
      .pf-pad{ padding-left:20px; padding-right:20px; }
      @media (min-width:768px){ .pf-pad{ padding-left:40px; padding-right:40px; } }

      /* ---- header ---- */
      .pf-header{ position:sticky; top:0; z-index:30; background:var(--header-bg); backdrop-filter:blur(6px); border-bottom:1px solid var(--line); }
      .pf-header-row{ display:flex; align-items:center; justify-content:space-between; height:56px; }
      .pf-logo{ font-size:19px; }
      .pf-nav{ display:none; align-items:center; gap:24px; font-size:11px; color:var(--muted); }
      .pf-nav a, .pf-nav-mobile a { position:relative; color:inherit; text-decoration:none; padding-bottom:2px; transition:color 0.2s ease; }
      .pf-nav a::after, .pf-nav-mobile a::after { content:''; position:absolute; width:0; height:1px; bottom:0; left:0; background-color:var(--text); transition:width 0.3s ease; }
      .pf-nav a:hover::after, .pf-nav-mobile a:hover::after { width:100%; }
      .pf-nav a:hover, .pf-nav-mobile a:hover { color:var(--text); }
      @media (min-width:640px){ .pf-nav{ display:flex; } .pf-nav-mobile{ display:none !important; } }
      .pf-nav-mobile{ display:flex; align-items:center; gap:16px; font-size:11px; color:var(--muted); }
      .pf-header-right{ display:flex; align-items:center; gap:16px; }
      .pf-toggle{ width:28px; height:28px; border-radius:999px; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; color:var(--muted); background:transparent; flex-shrink:0; cursor:pointer; transition:all 0.2s ease; }
      .pf-toggle:hover{ border-color:rgba(255,255,255,0.3); background:rgba(255,255,255,0.05); color:#ffffff; }
      .pf-toggle svg{ transition:transform 0.3s ease; }
      .pf-toggle:hover svg{ transform:rotate(45deg); }

      /* ---- section rules ---- */
      .pf-section{ padding-top:32px; padding-bottom:32px; }
      .pf-heading-band{ width:100%; border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:repeating-linear-gradient(-45deg, var(--line-soft), var(--line-soft) 1px, transparent 1px, transparent 8px); margin-top:0px; }
      .pf-heading-inner{ max-width:720px; margin:0 auto; border-left:1px solid var(--line); border-right:1px solid var(--line); background:var(--bg); }
      .pf-heading-row{ display:flex; align-items:center; justify-content:space-between; height:56px; }
      .pf-h2{ font-size:18px; margin:0; }
      .pf-heading-right{ font-size:12px; color:var(--muted); }
      @media (min-width:768px){ .pf-h2{ font-size:20px; } }
      .pf-eyebrow{ font-size:12px; color:var(--muted); white-space:nowrap; }
      @media (min-width:768px){ .pf-eyebrow{ font-size:13px; } }

      /* ---- hero ---- */
      .pf-banner{ height:100px; border-radius:0; margin-top:0px; background:url('/banner2.jpg') center/cover no-repeat; }
      @media (min-width:768px){ .pf-banner{ height:150px; } }
      .pf-profile-row{ display:flex; align-items:center; gap:16px; margin-top:20px; padding-bottom:24px; }
      .pf-avatar{ width:64px; height:64px; border-radius:8px; object-fit:cover; filter:grayscale(1); border:1px solid var(--line); flex-shrink:0; }
      .pf-name{ font-size:18px; margin:0; }
      @media (min-width:768px){ .pf-name{ font-size:20px; } }
      .pf-role{ font-size:11px; color:var(--muted); margin-top:2px; }
      @media (min-width:768px){ .pf-role{ font-size:12px; } }
      .pf-loc{ display:flex; align-items:center; gap:4px; font-size:11px; color:var(--faint); margin-top:2px; }

      /* ---- lists ---- */
      .pf-list{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:16px; }
      .pf-list li{ display:flex; gap:12px; font-size:14px; color:var(--muted); line-height:1.6; }
      .pf-list li::before{ content:"•"; color:var(--faint); margin-top:2px; }

      /* ---- horizontal scroll rows ---- */
      .pf-scroll{ display:flex; gap:16px; overflow-x:auto; padding-bottom:12px; scrollbar-width:thin; scrollbar-color:#3a3a3a transparent; }
      .pf-scroll::-webkit-scrollbar{ height:6px; }
      .pf-scroll::-webkit-scrollbar-thumb{ background:#3a3a3a; border-radius:4px; }
      .pf-scroll::-webkit-scrollbar-track{ background:transparent; }

      .pf-card{ background:var(--panel); border:1px solid var(--line); border-radius:10px; }
      .pf-highlight-card{ min-width:280px; flex-shrink:0; padding:20px; }
      @media (min-width:768px){ .pf-highlight-card{ min-width:320px; } }
      .pf-highlight-title{ font-size:14px; font-weight:500; margin:0 0 6px 0; }
      .pf-highlight-desc{ font-size:13px; color:var(--muted); line-height:1.6; margin:0; }

      /* ---- contact ---- */
      .pf-contact-grid{ display:grid; grid-template-columns:repeat(2, 1fr); }
      @media (min-width:768px){ .pf-contact-grid{ grid-template-columns:repeat(5, 1fr); } }
      .pf-contact-btn{ display:flex; align-items:center; justify-content:center; gap:8px; padding:20px 0; border-right:1px solid var(--line); border-bottom:1px solid var(--line); transition:background 0.2s, color 0.2s; color:var(--text); text-decoration:none; }
      @media (max-width:767px){ 
        .pf-contact-btn:nth-child(2n){ border-right:none; }
        .pf-contact-btn:last-child{ border-bottom:none; grid-column:span 2; border-right:none; }
      }
      @media (min-width:768px){ 
        .pf-contact-btn{ border-bottom:none; }
        .pf-contact-btn:last-child{ border-right:none; }
      }
      .pf-contact-btn:hover{ background:rgba(255,255,255,0.03); }
      .pf-contact-arrow{ transition:transform 0.2s, color 0.2s; color:var(--faint); }
      .pf-contact-btn:hover .pf-contact-arrow{ transform:translate(2px, -2px); color:var(--text); }
      .pf-contact-icon-box{ width:28px; height:28px; border-radius:6px; background:var(--line); display:flex; align-items:center; justify-content:center; color:var(--text); border:1px solid rgba(255,255,255,0.05); }
      .pf-contact-label{ font-size:13px; font-weight:500; }

      /* ---- projects ---- */
      .pf-project-grid{ display:grid; grid-template-columns:1fr; }
      .pf-project-card{ display:flex; flex-direction:column; text-decoration:none; color:var(--text); padding:32px 20px; border-bottom:1px solid var(--line-soft); }
      .pf-project-card:last-child{ border-bottom:none; }
      @media (min-width:768px){ 
        .pf-project-grid{ grid-template-columns:1fr 1fr; }
        .pf-project-card{ padding:24px 40px; }
        .pf-project-card:nth-last-child(-n+2){ border-bottom:none; }
        .pf-project-card:nth-child(odd){ padding:24px 16px 24px 20px; border-right:1px solid var(--line-soft); }
        .pf-project-card:nth-child(even){ padding:24px 20px 24px 16px; }
      }
      .pf-project-banner{ position:relative; height:160px; display:flex; align-items:center; justify-content:center; text-align:center; padding:0 24px; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.05); }
      .pf-project-banner img{ transition:transform 0.4s ease; }
      .pf-project-card:hover .pf-project-banner img{ transform:scale(1.04); }
      @media (min-width:768px){ .pf-project-banner{ height:180px; } }
      .pf-dots{ position:absolute; top:12px; left:12px; display:flex; gap:6px; }
      .pf-dots span{ width:8px; height:8px; border-radius:999px; background:rgba(255,255,255,0.4); }
      .pf-featured{ position:absolute; top:14px; right:-32px; background:#facc15; color:#111; font-size:10px; font-weight:600; padding:4px 40px; transform:rotate(45deg); font-family:'JetBrains Mono',monospace; }
      .pf-project-headline{ font-family:'Newsreader',Georgia,serif; color:#fff; font-size:19px; line-height:1.3; text-shadow:0 1px 6px rgba(0,0,0,0.35); }
      @media (min-width:768px){ .pf-project-headline{ font-size:21px; } }
      .pf-project-body{ padding:16px 0 0 0; display:flex; flex-direction:column; flex:1; }
      .pf-project-top{ display:flex; align-items:center; justify-content:space-between; margin-bottom:2px; }
      .pf-project-name{ font-size:15px; font-weight:600; margin:0; }
      .pf-live{ display:flex; align-items:center; gap:6px; font-size:12px; color:var(--accent); }
      .pf-project-desc{ font-size:13px; color:var(--muted); line-height:1.6; margin:0 0 16px 0; }
      .pf-project-bottom{ margin-top:auto; display:flex; align-items:center; justify-content:space-between; gap:8px; }
      .pf-tags{ display:flex; flex-wrap:wrap; gap:6px; }
      .pf-tag{ border:1px solid var(--line); color:var(--muted); background:var(--panel-2); font-size:11px; padding:4px 8px; border-radius:6px; }
      .pf-source-btn{ display:inline-flex; align-items:center; gap:6px; background:var(--panel-2); color:var(--text); font-size:11px; padding:6px 12px; border:1px solid var(--line); border-radius:6px; text-decoration:none; white-space:nowrap; transition:background 0.2s, border-color 0.2s; }
      .pf-source-btn:hover{ background:var(--line); border-color:rgba(255,255,255,0.2); }

      /* ---- projects header link ---- */
      .pf-view-all{ display:flex; align-items:center; gap:4px; font-size:13px; color:var(--muted); text-decoration:none; transition:color 0.2s; }
      .pf-view-all:hover{ color:var(--text); }
      .pf-view-arrow{ transition:transform 0.2s, color 0.2s; color:var(--muted); }
      .pf-view-all:hover .pf-view-arrow{ transform:translate(2px, -2px); color:var(--text); }

      /* ---- experience ---- */
      .pf-exp-item{ padding:24px 20px; border-top:1px solid var(--line-soft); }
      .pf-exp-item:first-child{ border-top:none; }
      @media (min-width:768px){ .pf-exp-item{ padding:32px 40px; } }
      .pf-exp-top{ display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:12px; }
      .pf-exp-role{ font-size:14px; }
      .pf-exp-role b{ font-weight:600; }
      .pf-exp-org{ color:var(--faint); }
      .pf-exp-time{ font-size:11px; color:var(--faint); white-space:nowrap; }
      .pf-list{ list-style:none; padding:0; margin:0 0 0 32px; }
      .pf-list li{ position:relative; font-size:13px; color:var(--muted); line-height:1.4; margin-bottom:0; }
      .pf-list li::before{ content:"•"; position:absolute; left:-14px; color:var(--faint); font-size:14px; }
      .pf-list li:last-child{ margin-bottom:0; }

      /* ---- tech stack ---- */
      .pf-tabs{ display:inline-flex; align-items:center; gap:4px; overflow-x:auto; padding:6px; margin-bottom:24px; scrollbar-width:none; -ms-overflow-style:none; border:1px solid var(--line); border-radius:8px; background:var(--panel-2); max-width:100%; }
      .pf-tabs::-webkit-scrollbar{ display:none; }
      .pf-tab{ flex-shrink:0; font-size:13px; font-weight:500; padding:6px 14px; border-radius:6px; border:none; color:var(--muted); background:transparent; white-space:nowrap; cursor:pointer; transition:all 0.2s; }
      .pf-tab:hover{ color:var(--text); }
      .pf-tab.active{ background:var(--text); color:var(--bg); }
      .pf-pill-grid{ display:flex; flex-wrap:wrap; gap:8px; }
      .pf-pill{ display:inline-flex; align-items:center; border:1px solid var(--line); color:var(--muted); background:transparent; font-size:11px; font-family:'JetBrains Mono',monospace; padding:4px 10px; border-radius:6px; }
      .pf-pill span{ color:var(--faint); margin-right:4px; }

      /* ---- github activity ---- */
      .gh-cal-wrap svg { width:100% !important; height:auto !important; }
      .pf-gh-inner{ min-width:620px; }
      .pf-gh-months{ display:flex; font-size:10px; color:var(--faint); font-family:'JetBrains Mono',monospace; margin-bottom:6px; padding-left:2px; }
      .pf-gh-months span{ width:calc(100% / 12); }
      .pf-gh-grid{ display:grid; grid-auto-flow:column; grid-template-rows:repeat(7,10px); gap:3px; }
      .pf-gh-cell{ width:10px; height:10px; border-radius:2px; }
      .pf-gh-footer{ display:flex; align-items:center; justify-content:space-between; margin-top:16px; flex-wrap:wrap; gap:8px; }
      .pf-gh-count{ font-size:12px; color:var(--muted); }
      .pf-gh-legend{ display:flex; align-items:center; gap:6px; font-size:11px; color:var(--faint); }
      .pf-gh-legend span.sq{ width:10px; height:10px; border-radius:2px; display:inline-block; }

      /* ---- open source ---- */
      .pf-os-card{ min-width:260px; flex-shrink:0; padding:20px; display:flex; flex-direction:column; }
      .pf-os-name{ font-size:14px; font-weight:500; margin:0 0 8px 0; }
      .pf-os-desc{ font-size:13px; color:var(--muted); line-height:1.6; flex:1; margin:0; }
      .pf-os-icons{ display:flex; align-items:center; gap:12px; margin-top:16px; color:var(--faint); }

      /* ---- CTA / quote / footer ---- */
      .pf-cta-title{ margin-bottom:32px; }
      .pf-cta-center{ text-align:center; padding:24px 0; }
      .pf-cta-text{ font-size:13px; color:var(--muted); margin-bottom:24px; }
      .pf-cta-btn{ display:inline-flex; align-items:center; gap:8px; background:var(--text); color:var(--bg); font-size:13px; font-weight:500; padding:12px 20px; border-radius:8px; text-decoration:none; }
      .pf-quote-wrap{ padding:56px 20px; text-align:center; }
      @media (min-width:768px){ .pf-quote-wrap{ padding:56px 64px; } }
      .pf-quote-mark{ font-family:'Newsreader',Georgia,serif; color:var(--faint); font-size:30px; margin-bottom:8px; }
      .pf-quote-text{ font-family:'Newsreader',Georgia,serif; font-style:italic; font-size:20px; line-height:1.35; max-width:640px; margin:0 auto; }
      @media (min-width:768px){ .pf-quote-text{ font-size:26px; } }
      .pf-quote-attr{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.2em; color:var(--faint); margin-top:24px; }
      .pf-footer{ padding:32px 0; text-align:center; }
      .pf-footer p{ font-size:13px; color:var(--muted); margin:0; }
      .pf-footer .pf-copy{ font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--faint); margin-top:4px; }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARED BITS                                                        */
/* ------------------------------------------------------------------ */

function Section({ title, right, children }: { title?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      {title && (
        <div className="pf-heading-band">
          <div className="pf-heading-inner">
            <div className="pf-pad pf-heading-row">
              <h2 className="pf-serif pf-h2">{title}</h2>
              {right && <span className="pf-mono pf-heading-right">{right}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="pf-wrap">
        <div className="pf-pad pf-section">
          {children}
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTIONS                                                           */
/* ------------------------------------------------------------------ */

function Header({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
  return (
    <div className="pf-header">
      <div className="pf-wrap">
        <div className="pf-pad pf-header-row">
          <span className="pf-serif pf-logo">Niyaf</span>
          <div className="pf-header-right">
            <nav className="pf-nav">
              {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
            </nav>
            <nav className="pf-nav-mobile">
              {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
            </nav>
            <button className="pf-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="pf-wrap" id="home">
      <div className="pf-banner" />
      <div className="pf-pad">
        <div className="pf-profile-row">
          <img
            className="pf-avatar"
            src="/dp.png"
            alt="Profile"
          />
          <div>
            <h1 className="pf-serif pf-name">Mohammed Niyaf</h1>
            <p className="pf-mono pf-role">Full-Stack Engineer & Web3 Developer</p>
            <p className="pf-loc"><MapPin size={12} /> India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section title="About">
      <ul className="pf-list" style={{ gap: '8px' }}>
        {ABOUT.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </Section>
  );
}

function Highlights() {
  return (
    <Section title="Highlights">
      <div className="pf-scroll">
        {HIGHLIGHTS.map((h) => (
          <div key={h.title} className="pf-card pf-highlight-card">
            <p className="pf-highlight-title"><span>{h.icon} </span>{h.title}</p>
            <p className="pf-highlight-desc">{h.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <div id="contact">
      <div className="pf-heading-band">
        <div className="pf-heading-inner">
          <div className="pf-pad pf-heading-row">
            <h2 className="pf-serif pf-h2">Contact</h2>
          </div>
        </div>
      </div>
      <div className="pf-wrap">
        <div className="pf-contact-grid">
          {CONTACTS.map(({ label, Icon, href }) => (
            <a key={label} href={href} className="pf-contact-btn">
              <span className="pf-contact-icon-box"><Icon size={14} /></span>
              <span className="pf-contact-label">{label}</span>
              <ArrowUpRight size={14} className="pf-contact-arrow" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: any }) {
  return (
    <div className="pf-project-card">
      <div className="pf-project-banner" style={{ padding: 0 }}>
        {p.imageUrl ? (
          <img src={p.imageUrl} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ background: p.gradient || 'var(--panel-2)', width: '100%', height: '100%' }}>
            <div className="pf-dots"><span /><span /><span /></div>
            <span className="pf-project-headline">{p.headline}</span>
          </div>
        )}
        {p.featured && <div className="pf-featured">FEATURED</div>}
      </div>
      <div className="pf-project-body">
        <div className="pf-project-top">
          <h3 className="pf-project-name">{p.name}</h3>
        </div>
        <p className="pf-project-desc">{p.desc}</p>
        <div className="pf-project-bottom">
          <div className="pf-tags">
            {p.tags.map((t: string) => <span key={t} className="pf-tag">{t}</span>)}
          </div>
        </div>
        {(p.sourceUrl || p.demoUrl || p.liveUrl) && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            {p.sourceUrl && <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="pf-source-btn">Source Code</a>}
            {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="pf-source-btn">Demo Link</a>}
            {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="pf-source-btn">Live Link</a>}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects">
      <div className="pf-heading-band">
        <div className="pf-heading-inner">
          <div className="pf-pad pf-heading-row">
            <h2 className="pf-serif pf-h2">Projects</h2>
            <a href="https://github.com/mohammedniyafsm" target="_blank" rel="noopener noreferrer" className="pf-view-all">View all <ArrowUpRight size={13} className="pf-view-arrow" /></a>
          </div>
        </div>
      </div>
      <div className="pf-wrap">
        <div className="pf-project-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <>
      <div className="pf-heading-band">
        <div className="pf-heading-inner">
          <div className="pf-pad pf-heading-row">
            <h2 className="pf-serif pf-h2">Experience</h2>
          </div>
        </div>
      </div>
      <div className="pf-wrap">
        <div>
          {EXPERIENCE.map((e) => (
            <div key={e.role + e.org} className="pf-exp-item">
              <div className="pf-exp-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {e.logoUrl && <img src={e.logoUrl} alt={e.org} style={{ width: '32px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} />}
                  <p className="pf-exp-role" style={{ margin: 0 }}><b>{e.role}</b> <span className="pf-exp-org">· {e.org}</span></p>
                </div>
                <span className="pf-exp-time pf-mono">{e.time}</span>
              </div>
              <ul className="pf-list">
                {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function TechStack() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? TECH : TECH.filter((t) => t.cat === active);
  return (
    <Section title="Tech Stack">
      <div className="pf-tabs">
        {TECH_CATEGORIES.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`pf-tab${active === c ? " active" : ""}`}>{c}</button>
        ))}
      </div>
      <div className="pf-pill-grid">
        {items.map((t) => <span key={t.name} className="pf-pill"><span>•</span>{t.name}</span>)}
      </div>
    </Section>
  );
}

function GithubActivity() {
  return (
    <Section title="GitHub Activity" right={<span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--accent)" }}><Circle size={7} fill="currentColor" stroke="none" /> Live</span>}>
      <div className="pf-gh-scroll" style={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingTop: "8px" }} className="gh-cal-wrap">
          <GitHubCalendar
            username="mohammedniyafsm"
            colorScheme="dark"
            theme={{
              dark: ['#16121e', '#3b2c4c', '#664988', '#976ebf', '#d5a4eb'],
            }}
            style={{ fontFamily: 'inherit', width: '100%' }}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </Section>
  );
}

function OpenSource() {
  return (
    <Section title="Open Source" right="( published on npm )">
      <div className="pf-scroll">
        {OPEN_SOURCE.map((pkg) => (
          <div key={pkg.name} className="pf-card pf-os-card">
            <p className="pf-os-name">{pkg.icon} {pkg.name}</p>
            <p className="pf-os-desc">{pkg.desc}</p>
            <div className="pf-os-icons"><Package size={14} /><GitBranch size={14} /></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <>
      <Section title="Scrolled Too Far">
        <div className="pf-cta-center">
          <p className="pf-cta-text">If you've read this far, you might be interested in what I do.</p>
          <a href="https://cal.com/mohammed-niyaf-s.m-v01mfl/15min" target="_blank" rel="noopener noreferrer" className="pf-cta-btn">Let's Talk <ArrowRight size={14} /></a>
        </div>
      </Section>
      <div className="pf-heading-band">
        <div className="pf-heading-inner" style={{ minHeight: '48px' }} />
      </div>
      <div className="pf-wrap">
        <div className="pf-quote-wrap">
          <p className="pf-quote-mark">&ldquo;</p>
          <p className="pf-quote-text">{QUOTE}</p>
          <p className="pf-quote-attr">— MOHAMMED NIYAF</p>
        </div>
      </div>
      <div className="pf-heading-band">
        <div className="pf-heading-inner" style={{ minHeight: '48px' }} />
      </div>
      <div className="pf-wrap">
        <div className="pf-footer">
          <p>Designed &amp; Developed by <b style={{ color: "var(--text)" }}>Mohammed Niyaf</b></p>
          <p className="pf-copy">© 2026 All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */

export default function PortfolioClone() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className={`pf ${theme}`}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      {/* <Highlights /> */}
      <Contact />
      <Projects />
      <Experience />
      <TechStack />
      <GithubActivity />
      {/* <OpenSource /> */}
      <CTA />
    </div>
  );
}