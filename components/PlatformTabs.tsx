"use client";

import { useState } from "react";
import Link from "next/link";

type Row = {
  label: string;
  badge: string;
  active?: boolean;
  gray?: boolean;
  bordered?: boolean;
};

type Panel = {
  tab: string;
  heading: string;
  body: string;
  link: string;
  href: string;
  rows: Row[];
  arrows?: number[]; // indices after which to render a downward arrow
  note?: string;
};

const PANELS: Panel[] = [
  {
    tab: "Governance orchestration",
    heading: "The layer above your discovery and access stack",
    body: "Procela sits above BigID and Immuta — pulling classified assets, applying governance policies, and routing stewardship assignments through a single orchestration engine.",
    link: "See the integration architecture →",
    href: "/integrations",
    arrows: [1, 2],
    rows: [
      { label: "BigID — discovery & classification", badge: "input", gray: true },
      { label: "Immuta — access policy enforcement", badge: "input", gray: true },
      {
        label: "Procela — governance orchestration",
        badge: "active",
        active: true,
        bordered: true,
      },
      { label: "Audit log & compliance reporting", badge: "output", gray: true },
    ],
  },
  {
    tab: "Stewardship & ownership",
    heading: "Clear ownership across every data domain",
    body: "Assign data owners, domain stewards, and AI agents to assets automatically. Procela's principal model supports human and AI participants in governance roles with three-tier autonomy controls.",
    link: "Learn about the principal model →",
    href: "/platform",
    rows: [
      { label: "Hull #789 — Production Data Domain", badge: "owner assigned", active: true },
      { label: "SWBS 500 — Engineering Assets", badge: "steward active", active: true },
      { label: "CUI Financial Records", badge: "pending review", gray: true },
      { label: "AI Agent — Classification Review", badge: "propose-approve", active: true },
    ],
  },
  {
    tab: "Policy management",
    heading: "Policies that flow from business rules, not spreadsheets",
    body: "Define governance policies in plain language. Procela translates them into enforceable rules, propagates them downstream, and maintains a full audit trail of every change and decision.",
    link: "See policy workflow demo →",
    href: "/platform",
    rows: [
      { label: "CUI data — restricted access policy", badge: "enforced", active: true },
      { label: "PII retention — 90-day expiry rule", badge: "active", active: true },
      { label: "ITAR export classification check", badge: "in review", gray: true },
      { label: "CMMC audit trail — all access events", badge: "logging", active: true },
    ],
  },
  {
    tab: "Edge agent connectivity",
    heading: "Scan your sources without moving your data",
    body: "Procela Edge Agents deploy inside your environment via Kubernetes or Helm. Push-down profiling, mTLS identity, and tamper-evident audit logs — your data never leaves the perimeter.",
    link: "Read the edge agent spec →",
    href: "/security",
    note: "✓ mTLS · push-down profiling · no data egress",
    rows: [
      { label: "Edge Agent — AWS VPC (us-east-1)", badge: "connected", active: true },
      { label: "Edge Agent — On-premise Oracle DB", badge: "connected", active: true },
      { label: "Edge Agent — Azure SQL (staging)", badge: "deploying", gray: true },
    ],
  },
];

export default function PlatformTabs() {
  const [active, setActive] = useState(0);
  const panel = PANELS[active];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Platform capabilities">
        {PANELS.map((p, i) => (
          <button
            key={p.tab}
            role="tab"
            aria-selected={active === i}
            className={`tab${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {p.tab}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel">
        <div>
          <div className="tab-body-heading">{panel.heading}</div>
          <p className="tab-body-text">{panel.body}</p>
          <Link href={panel.href} className="tab-link">
            {panel.link}
          </Link>
        </div>
        <div className="tab-visual">
          {panel.rows.map((row, i) => (
            <div key={row.label}>
              <div
                className="tv-row"
                style={row.bordered ? { border: "1px solid var(--border-green)" } : undefined}
              >
                <span className={`tv-dot${row.gray ? " gray" : ""}`} />
                <span className="tv-label">{row.label}</span>
                <span className={`tv-badge${row.gray ? " gray" : ""}`}>{row.badge}</span>
              </div>
              {panel.arrows?.includes(i) && <div className="tv-arrow">↓</div>}
            </div>
          ))}
          {panel.note && <div className="tv-note">{panel.note}</div>}
        </div>
      </div>
    </>
  );
}
