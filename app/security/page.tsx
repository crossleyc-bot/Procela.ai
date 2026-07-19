import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Security — Procela",
  description:
    "Procela is built for regulated environments: no data egress, edge agents with mTLS, tamper-evident audit logs, and support for ITAR, CMMC, CUI, HIPAA, and SOC 2.",
};

const PRINCIPLES: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: "shield",
    kicker: "No data egress",
    title: "Your data never leaves your perimeter",
    body: "Procela Edge Agents run inside your environment and send only metadata to the platform. Source data stays put — making Procela suitable for the most restricted environments.",
  },
  {
    icon: "edge",
    kicker: "Edge agents",
    title: "Push-down profiling, in your infrastructure",
    body: "Agents deploy via Kubernetes or Helm and profile data where it lives. They authenticate with mTLS and carry a tamper-evident audit log of everything they do.",
  },
  {
    icon: "audit",
    kicker: "Auditability",
    title: "Every action is logged and attributable",
    body: "Classifications, assignments, policy changes, and access events are captured in an append-only trail tied to a named principal — human or AI — so audits become a query.",
  },
  {
    icon: "lock",
    kicker: "Least privilege",
    title: "Explicit authority for every principal",
    body: "The principal model scopes exactly what each steward, owner, and agent may do. AI agents operate under three-tier autonomy controls you configure per domain.",
  },
];

const COMPLIANCE = [
  "ITAR",
  "CMMC",
  "CUI",
  "HIPAA",
  "SOC 2",
  "NIST 800-171",
];

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Security</span>
          <h1>Built for the most regulated environments</h1>
          <p>
            Procela was designed for organizations where data can&apos;t move and every
            action has to be accountable — defense, financial services, healthcare,
            and critical infrastructure.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Security posture</span>
          <h2 className="section-title">Governance without giving up control of your data</h2>
          <div className="feature-list">
            {PRINCIPLES.map((p) => (
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
          <span className="eyebrow">Compliance</span>
          <h2 className="section-title">Aligned to the frameworks you answer to</h2>
          <p className="section-body">
            Procela&apos;s architecture — no data egress, mTLS identity, and complete audit
            trails — is built to support governance programs operating under:
          </p>
          <div className="pill-row">
            {COMPLIANCE.map((c) => (
              <span className="pill" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Review Procela's security architecture"
        body="We'll walk your security and compliance teams through the deployment model and controls."
        primaryLabel="Talk to us"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
