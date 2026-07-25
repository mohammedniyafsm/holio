"use client";

import ProfileCard from "./ProfileCard";

export function Hero() {
  return (
    <section className="hero-section fade-in">
      <div className="avatar-wrapper-tilt cursor-target">
        <ProfileCard
          avatarUrl="/niyaf.png"
          name="Mohammed Niyaf"
          title="Fullstack Engineer & Web3 Developer"
          handle="niyafs"
          status="Online"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowEnabled={true}
          behindGlowColor="rgba(200, 240, 90, 0.4)"
          innerGradient="linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(40, 40, 40, 0.5) 100%)"
        />
      </div>

      <div className="hero-text">
        <div className="hero-greeting">
          Hi, I&apos;m Niyaf
          <div className="status-dot" />
          Open to Work
        </div>
        <h1 className="hero-title">
          FULLSTACK <br /> DEVELOPER
        </h1>
        <div className="hero-actions">
          <a
            href="https://cal.com/mohammed-niyaf-s.m-v01mfl/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="book-meet-btn cursor-target"
          >
            Book a Meet
          </a>
          <a
            href="https://x.com/n1yaf_"
            target="_blank"
            rel="noopener noreferrer"
            className="dm-x-btn cursor-target"
          >
            DM on X
          </a>
        </div>
      </div>
    </section>
  );
}
