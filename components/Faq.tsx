"use client";

import { useState } from "react";

const ITEMS: { q: string; a: string }[] = [
  {
    q: 'What does "governance orchestration" actually mean?',
    a: "It means connecting the tools, people, and policies that already exist in your organization into a running program — rather than a static framework. Procela automates assignment, policy propagation, and audit trail generation across your existing stack.",
  },
  {
    q: "How does Procela differ from Collibra or Alation?",
    a: "Collibra and Alation are catalog-first platforms. Procela is an orchestration layer — it sits above your catalog, discovery tool, and access control system, connecting them into a coordinated governance program. You can run Procela alongside, not instead of, an existing catalog.",
  },
  {
    q: "Does Procela move or store our data?",
    a: "No. Procela Edge Agents run inside your environment and send only metadata to the platform. Your data never leaves your perimeter — making Procela suitable for ITAR, CMMC, CUI, and HIPAA environments.",
  },
  {
    q: "How long does a Phase 1 governance program take to stand up?",
    a: "Most organizations reach a governance baseline — stewardship assignments, policy layer, and audit-ready lineage — within 30 days. The DG Foundation track is phased, starting with your highest-priority domains.",
  },
  {
    q: "Can AI agents participate in governance roles?",
    a: "Yes. Procela's principal model supports both human and AI participants as data stewards and domain owners. AI agents operate under a three-tier autonomy framework — Autonomous, Propose-and-approve, or Advisory — giving your team control over how independently the agent acts.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
