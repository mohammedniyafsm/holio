"use client";

import React, { useState } from "react";
import { ExperienceItem } from "./ExperienceItem";
import { ResumeIcon, MapIcon } from "./Icons";
import { experiences } from "@/data/portfolioData";
import { MapModal } from "./MapModal";

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <>
      <section className="experience-section fade-in fade-in-delay-3">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-actions">
            <a
              href="https://drive.google.com/file/d/1Y5nHGs-37ymbGZ7QJEfUeH4tJGT9GJ05/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn active cursor-target"
              aria-label="View resume"
              title="Resume"
            >
              <ResumeIcon />
            </a>
            <button
              onClick={() => setIsMapOpen(true)}
              className="icon-btn cursor-target"
              aria-label="View map"
              title="Map"
            >
              <MapIcon />
            </button>
          </div>
        </div>

        <div className="experience-list">
          {displayedExperiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              role={exp.role}
              dateRange={exp.dateRange}
              location={exp.location}
              accentColor={exp.accentColor}
              logoUrl={exp.logoUrl}
              link={exp.link}
              tags={exp.tags}
              achievements={exp.achievements}
            />
          ))}
        </div>

        {!showAll && experiences.length > 2 && (
          <div style={{ textAlign: "center", marginTop: "12px" }}>
            <button
              onClick={() => setShowAll(true)}
              className="view-archive-btn cursor-target"
            >
              View full archive &rarr;
            </button>
          </div>
        )}
      </section>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
