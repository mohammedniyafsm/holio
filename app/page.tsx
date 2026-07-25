"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { TechDescription } from "@/components/TechDescription";
import { SocialLinks } from "@/components/SocialLinks";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BottomNav } from "@/components/BottomNav";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

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

      {/* Background grid - dynamic based on route/tab */}
      {activeNav === "projects" ? (
        <div className="projects-dashed-bg" />
      ) : (
        <div className="grid-bg" />
      )}

      {/* Main Container */}
      <main className="main-wrapper">
        {activeNav === "projects" ? (
          <div className="projects-container">
            <ProjectsSection />
          </div>
        ) : (
          <div className="content-container">
            <Hero />
            <TechDescription />
            <SocialLinks />
            <ExperienceSection />
          </div>
        )}
      </main>

      {/* Floating Bottom Bar */}
      <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
}
