"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TechBadge } from "./TechBadge";
import { TechItem } from "@/data/portfolioData";

export interface ExperienceItemProps {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  tags: TechItem[];
  achievements: string[];
  accentColor?: "green" | "yellow";
  logoUrl?: string;
  logoContent?: React.ReactNode;
  link?: string;
}

export function ExperienceItem({
  company,
  role,
  dateRange,
  location,
  tags,
  achievements,
  accentColor = "green",
  logoUrl,
  logoContent,
  link,
}: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="experience-item">
      {/* Timeline column */}
      <div className="exp-timeline-dot">
        <div className={`dot ${accentColor === "yellow" ? "yellow" : ""}`} />
        <div className="timeline-line" />
      </div>

      {/* Content column */}
      <div className="exp-content">
        {/* Header row */}
        <div className="exp-header">
          <div className="exp-left">
            <div className="company-logo">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={`${company} logo`}
                  width={36}
                  height={36}
                  style={{ objectFit: "contain", borderRadius: "6px" }}
                />
              ) : (
                logoContent
              )}
            </div>
            <div className="exp-company-info">
              <div className="exp-company-name">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {company}
                  </a>
                ) : (
                  company
                )}
                <button
                  className="chevron-btn"
                  onClick={() => setExpanded(!expanded)}
                  aria-label="Toggle details"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      d={
                        expanded
                          ? "M18 15l-6-6-6 6"
                          : "M6 9l6 6 6-6"
                      }
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="exp-role">{role}</div>
            </div>
          </div>

          <div className="exp-right">
            <div className={`exp-date ${accentColor === "yellow" ? "yellow" : ""}`}>
              {dateRange}
            </div>
            <div className="exp-location">{location}</div>
          </div>
        </div>

        {/* Collapsible body */}
        {expanded && (
          <>
            {/* Tech Tags */}
            <div className="exp-tags">
              {tags.map((t, i) => (
                <TechBadge key={i} label={t.label} icon={t.icon} emoji={t.emoji} />
              ))}
            </div>

            {/* Achievements */}
            <div className="achievements">
              {achievements.map((ach, i) => (
                <div className="achievement-item" key={i}>
                  <div
                    className={`achievement-num ${accentColor === "yellow" ? "yellow" : ""
                      }`}
                  >
                    0{i + 1}
                  </div>
                  <div
                    className={`achievement-text ${accentColor === "yellow" ? "yellow" : ""
                      }`}
                  >
                    {ach}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
