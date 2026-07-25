import { BottomNav } from "@/components/BottomNav";
import { GithubContributions } from "@/components/GithubContributions";
import { Metadata } from "next";
import TargetCursor from "@/components/TargetCursor";

export const metadata: Metadata = {
  title: "About — Mohammed Niyaf",
  description: "Skills, tools, and technologies I work with.",
};

const GITHUB_USER = "mohammedniyafsm";

const allSkills = [
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { label: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { label: "OAuth", emoji: "🔐" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Express.js", emoji: "⚙️" },
  { label: "WebSockets", emoji: "⚡" },
  { label: "WebRTC", emoji: "📞" },
  { label: "Pub/Sub", emoji: "📢" },
  { label: "Multer", emoji: "📁" },
  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "Prisma ORM", emoji: "◈" },
  { label: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { label: "CI/CD", emoji: "🔄" },
  { label: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { label: "CDN", emoji: "🌐" },
  { label: "Cloudinary", emoji: "☁️" },
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "GitHub", emoji: "🐙" },
  { label: "Postman", emoji: "📮" },
  { label: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { label: "Turborepo", emoji: "🚀" },
  { label: "Zod", emoji: "🛡️" },
  { label: "Razorpay", emoji: "💳" },
  { label: "Nodemailer", emoji: "✉️" },
  { label: "LiveKit", emoji: "📹" },
  { label: "Phaser.js", emoji: "🎮" },
  { label: "Tiled maps", emoji: "🗺️" },
];

export default function AboutPage() {
  return (
    <>
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#c8f05a"
      />
      <main className="about-page">
        <div className="about-container">

          {/* Hero */}
          <div className="about-hero">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              I am a <strong>full-stack developer</strong> dedicated to building high-performance backends, seamless frontends, and robust digital products from the ground up.
            </p>
            <p className="about-bio">
              Currently specializing in real-time systems, scalable architectures, and interactive experiences. Having engineered and shipped production-ready platforms across e-commerce, SaaS, and 2D metaverses, I bring a strong execution-focused mindset to every project.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills-section">
            <h2 className="about-section-title">Skills &amp; Tools</h2>
            <div className="about-skills-list">
              {allSkills.map((skill) => (
                <span className="about-skill-badge cursor-target" key={skill.label}>
                  {skill.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={skill.icon} alt={skill.label} className="about-skill-icon" />
                  ) : skill.emoji ? (
                    <span className="about-skill-emoji">{skill.emoji}</span>
                  ) : null}
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

        {/* GitHub Stats */}
        <div className="about-github-section">
          <GithubContributions />

          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View full GitHub profile →
          </a>
        </div>

      </div>
      <BottomNav />
      </main>
    </>
  );
}
