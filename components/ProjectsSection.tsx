"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { TechBadge } from "./TechBadge";

export function ProjectsSection() {
  return (
    <section className="projects-section fade-in">
      {/* Centered Projects Hero Section (Full Viewport Height) */}
      <div className="projects-hero-wrapper">
        <div className="projects-header-container">
          <h1 className="projects-main-title">Proof of Work</h1>
          <p className="projects-main-subtitle">
            Here&apos;s what I&apos;ve been building lately.{" "}
            <strong>Every piece tells a story</strong> of research, iteration, and execution.
          </p>
        </div>

        {/* Hand-written annotation note & curved arrow — bottom of hero */}
        <div className="projects-annotation">
          <div className="annotation-text">
            Explore selected works. Some<br />are still in progress
          </div>
          <svg
            className="curved-arrow"
            width="28"
            height="40"
            viewBox="0 0 28 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2C14 18 24 24 16 38M16 38L10 32M16 38L21 31"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div
            className="project-card cursor-target"
            key={idx}
            style={{
              top: "70px",
              zIndex: idx + 1,
            }}
          >
            {/* Banner Image Preview */}
            <div className="project-image-container cursor-target">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={idx === 0}
              />
            </div>

            {/* Content Details */}
            <div className="project-content">
              <h3 className="project-title">
                {project.title}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-demo-link cursor-target"
                  >
                    (Video Demo)
                  </a>
                )}
              </h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Badges */}
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <TechBadge key={tIdx} label={tag.label} icon={tag.icon} emoji={tag.emoji} />
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                <a
                  href={project.sourceUrl || "https://github.com/mohammedniyafsm"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link cursor-target"
                >
                  SOURCE CODE &rarr;
                </a>
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link cursor-target"
                >
                  {project.liveUrl && project.liveUrl !== "#" ? "LIVE PREVIEW" : "COMING SOON"} &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
