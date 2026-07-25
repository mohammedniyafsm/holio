import React from "react";
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from "./Icons";

export function SocialLinks() {
  return (
    <div className="social-links fade-in fade-in-delay-2">
      <a
        href="https://github.com/mohammedniyafsm/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link cursor-target"
        aria-label="GitHub"
      >
        <GithubIcon />
      </a>
      <a
        href="https://x.com/n1yaf_"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link cursor-target"
        aria-label="Twitter / X"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-niyaf-s-m-692801259"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link cursor-target"
        aria-label="LinkedIn"
      >
        <LinkedinIcon />
      </a>
      <a
        href="mailto:mohammedniyafsm@gmail.com"
        className="social-link cursor-target"
        aria-label="Email"
      >
        <MailIcon />
      </a>
    </div>
  );
}
