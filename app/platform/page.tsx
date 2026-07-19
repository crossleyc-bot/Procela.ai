import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Platform — Procela",
  description:
    "Procela is the orchestration layer above your data governance stack: governance orchestration, stewardship, policy management, and edge-agent connectivity.",
};

const PILLARS: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: "orchestration",
    kicker: "Governance orchestration",
    title: "The layer above your discovery and access stack",
    body: "Procela sits above tools like BigID and Immuta — pulling in classified assets, applying governance policies, and routing stewardship assignments through a single orchestration engine. One control plane instead of a dozen disconnected consoles.",
  },
  {
    icon: "stewardship",
    kicker: "Stewardship & ownership",
    title: "Clear accountability across every data domain",
    body: "Assign data owners, domain stewards, and AI agents to assets automatically. Procela's principal model treats human and AI participants as first-class governance actors, each operating under explicit, auditable authority.",
  },
  {
    icon: "policy",
    kicker: "Policy management",
    title: "Policies that flow from business rules, not spreadsheets",
    body: "Define governance policies in plain language. Procela translates them into enforceable rules, propagates them downstream to your enforcement tools, and maintains a full audit trail of every change and decision.",
  },
  {
    icon: "edge",
    kicker: "Edge agent connectivity",
    title: "Scan your sources without moving your data",
    body: "Procela Edge Agents deploy inside your environment via Kubernetes or Helm. Push-down profiling, mTLS identity, and tamper-evident audit logs mean only metadata ever leaves the perimeter — your data never does.",
  },
];

const AUTONOMY = [
  {
    kicker: "Tier 1 — Advisory",
    title: "Recommends, never acts",
    body: "The agent surfaces suggestions — a classification, an owner, a policy match — and a human decides. Ideal for your highest-sensitivity domains.",
  },
  {
    kicker: "Tier 2 — Propose & approve",
    title: "Acts with a human in the loop",
    body: "The agent prepares changes and routes them for approval. Nothing takes effect until a steward signs off, and every decision is logged.",
  },
  {
    kicker: "Tier 3 — Autonomous",
    title: "Acts within guardrails",
    body: "For well-understood, low-risk work, the agent operates independently inside policy boundaries you define — with a complete audit trail.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Platform</span>
          <h1>Context and control, across every layer</h1>
          <p>
            Procela is the connective tissue of your governance program — turning
            the tools, people, and policies you already have into one coordinated,
            auditable system.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Four pillars, one platform</span>
          <h2 className="section-title">Everything a governance program needs to run</h2>
          <div className="feature-list">
            {PILLARS.map((p) => (
              <div className="feature-row" key={p.kicker}>
                <div>
                  <div className="feature-icon">
                    <Icon name={p.icon} size={22} />
                  </div>
                  <div className="feature-kicker">{p.kicker}</div>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">How it fits together</span>
          <h2 className="section-title">One orchestration layer, between your tools and your outcomes</h2>
          <p className="section-body">
            Procela draws from the discovery, access, and platform tools you already
            run, and drives governance outcomes back out — without becoming another
            silo.
          </p>
          <ArchitectureDiagram />
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The principal model</span>
          <h2 className="section-title">Human and AI governance actors, under explicit authority</h2>
          <p className="section-body">
            Every steward, owner, and agent in Procela is a &ldquo;principal&rdquo; with a
            defined scope of authority. AI agents participate in governance roles under
            a three-tier autonomy framework, so your team controls exactly how
            independently each one acts.
          </p>
          <div className="card-grid">
            {AUTONOMY.map((a) => (
              <div className="card" key={a.kicker}>
                <span className="card-kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See the platform against your environment"
        body="We'll walk through how Procela connects to your existing stack and stands up a governance baseline."
        secondaryLabel="View integrations"
        secondaryHref="/integrations"
      />

      <SiteFooter />
    </>
  );
}
