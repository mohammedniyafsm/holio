"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ArchiveIcon, AboutIcon, ResumeIcon, GithubIcon } from "./Icons";

interface BottomNavProps {
  activeNav?: string;
  setActiveNav?: (tab: string) => void;
}

export function BottomNav({ activeNav, setActiveNav }: BottomNavProps) {
  const pathname = usePathname();
  const [isTopNav, setIsTopNav] = React.useState(false);

  const isProjects = activeNav === "projects" || pathname === "/projects";
  const isHome = (activeNav === "home" || pathname === "/") && !isProjects;
  const isAbout = activeNav === "about" || pathname === "/about";

  React.useEffect(() => {
    if (!isProjects) {
      setIsTopNav(false);
      return;
    }

    const handleScroll = () => {
      // Switch when scrolled past 300px (entering first project card area)
      if (window.scrollY > 300) {
        setIsTopNav(true);
      } else {
        setIsTopNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount/pathname change

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProjects]);

  return (
    <nav className={`bottom-nav ${isTopNav ? "nav-at-top" : ""}`} aria-label="Main navigation">
      <Link
        id="nav-home"
        href="/"
        className={`nav-item cursor-target ${isHome ? "active" : ""}`}
        onClick={() => setActiveNav?.("home")}
        aria-label="Home"
      >
        <HomeIcon />
        {isHome && <span>Home</span>}
      </Link>

      <Link
        id="nav-projects"
        href="/projects"
        className={`nav-item cursor-target ${isProjects ? "active" : ""}`}
        onClick={() => setActiveNav?.("projects")}
        aria-label="Projects"
      >
        <ArchiveIcon />
        {isProjects && <span>Projects</span>}
      </Link>

      <Link
        id="nav-about"
        href="/about"
        className={`nav-item cursor-target ${isAbout ? "active" : ""}`}
        onClick={() => setActiveNav?.("about")}
        aria-label="About"
      >
        <AboutIcon />
        {isAbout && <span>About</span>}
      </Link>

      <a
        id="nav-resume"
        href="https://drive.google.com/file/d/1Y5nHGs-37ymbGZ7QJEfUeH4tJGT9GJ05/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item cursor-target"
        aria-label="Resume"
      >
        <ResumeIcon />
      </a>

      <a
        id="nav-github"
        href="https://github.com/mohammedniyafsm"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item cursor-target"
        aria-label="GitHub"
      >
        <GithubIcon />
      </a>
    </nav>
  );
}

