"use client";

import React from "react";

interface TechBadgeProps {
  icon?: string;
  label: string;
  emoji?: string;
}

export function TechBadge({ icon, label, emoji }: TechBadgeProps) {
  return (
    <span className="tech-badge cursor-target">
      {emoji ? (
        <span className="badge-emoji">{emoji}</span>
      ) : icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          alt={label}
          className="badge-icon"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ) : null}
      {label}
    </span>
  );
}
