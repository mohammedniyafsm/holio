import React from "react";
import { TechBadge } from "./TechBadge";

export function TechDescription() {
  return (
    <section className="tech-description fade-in fade-in-delay-1">
      <p className="tech-paragraph">
        I&apos;m a full-stack engineer who spends a disproportionate amount of time asking &quot;but how does this actually work?&quot; &mdash; and then following that question until I have a real answer.
      </p>

      <p className="tech-paragraph">
        Most engineers stop at the API boundary. I tend to keep going. That usually means digging into networking, databases, distributed systems, authentication, infrastructure, security, and blockchain systems &mdash; not just using them, but understanding the decisions and trade-offs behind them.
      </p>

      <p className="tech-paragraph">
        Lately I&apos;ve been exploring{" "}
        <TechBadge label="Web3" emoji="🌐" />
        {" "}infrastructure,{" "}
        <TechBadge label="Solana" emoji="⚡" />
        ,{" "}
        <TechBadge label="Rust" emoji="🦀" />
        , cryptography,{" "}
        <TechBadge label="Wallet Arch" emoji="👛" />
        , key management, and transaction signing. More often than not, a small question turns into a deep technical rabbit hole.
      </p>

      <p className="tech-paragraph">
        I&apos;m always building, experimenting, and learning. If you&apos;re interested in systems, infrastructure, security, blockchain, or difficult engineering problems, we&apos;ll probably get along.
      </p>

      <p className="tech-paragraph">
        I&apos;m open to new roles, collaborations, and opportunities &mdash; reach out at{" "}
        <a
          href="mailto:mohammedniyafsm@gmail.com"
          className="cursor-target"
          style={{ color: "var(--accent-green)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          mohammedniyafsm@gmail.com
        </a>.
      </p>

      <p className="tech-paragraph" style={{ opacity: 0.85, fontStyle: "italic" }}>
        If you&apos;re here, chances are I&apos;d enjoy talking to you. I get nerd-sniped easily, and a message about something that recently fascinated you would honestly make my day.
      </p>
    </section>
  );
}
