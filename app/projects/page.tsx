"use client";

import { ProjectsSection } from "@/components/ProjectsSection";
import { BottomNav } from "@/components/BottomNav";
import TargetCursor from "@/components/TargetCursor";

export default function ProjectsPage() {
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

      {/* Projects Route Vertical Dashed Grid Background */}
      <div className="projects-dashed-bg" />

      {/* Main Container */}
      <main className="main-wrapper">
        <div className="projects-container">
          <ProjectsSection />
        </div>
      </main>

      {/* Floating Bottom Bar */}
      <BottomNav activeNav="projects" />
    </>
  );
}
