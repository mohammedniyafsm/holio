"use client";

import React, { useMemo } from "react";

export function GithubContributions() {
  // Generate a mock contribution dataset for 53 weeks (371 days)
  // seeded/patterned to look natural and full of purple colors
  const contributionGrid = useMemo(() => {
    const weeksCount = 53;
    const daysCount = 7;
    const grid: number[][] = [];

    // Helper to generate levels (0 to 4) with a weighted distribution
    // to look like a highly active developer profile.
    for (let w = 0; w < weeksCount; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysCount; d++) {
        const rand = Math.random();
        let level = 0;
        if (rand < 0.25) {
          level = 0; // Empty
        } else if (rand < 0.55) {
          level = 1; // Light purple
        } else if (rand < 0.82) {
          level = 2; // Medium purple
        } else if (rand < 0.94) {
          level = 3; // Bright purple
        } else {
          level = 4; // Brightest purple/pink
        }
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="github-contrib-container">
      <h3 className="github-contrib-title">GitHub Contributions</h3>

      <div className="github-contrib-scroll-wrapper">
        <div className="github-contrib-grid-wrapper">
          {/* Months Header Row */}
          <div className="github-contrib-months">
            {months.map((month, idx) => (
              <span key={idx} className="month-label">
                {month}
              </span>
            ))}
          </div>

          {/* Grid Layout (53 columns of 7 rows) */}
          <div className="github-contrib-grid">
            {contributionGrid.map((week, wIdx) => (
              <div key={wIdx} className="contrib-column">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`contrib-cell level-${level}`}
                    title={`Contribution level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info & Legend */}
      <div className="github-contrib-footer">
        <span className="contrib-count">1891 contributions in the last year</span>
        <div className="contrib-legend">
          <span>Less</span>
          <div className="contrib-cell level-0" />
          <div className="contrib-cell level-1" />
          <div className="contrib-cell level-2" />
          <div className="contrib-cell level-3" />
          <div className="contrib-cell level-4" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
