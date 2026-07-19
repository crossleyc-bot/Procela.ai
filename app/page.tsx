import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PlatformTabs from "@/components/PlatformTabs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

const INTEGRATIONS = [
  "BigID",
  "Immuta",
  "Databricks",
  "Snowflake",
  "AWS",
  "Microsoft Purview",
  "Collibra",
];

const STATS = [
  { num: "4", accent: "×", label: "Governance pillars unified in one platform" },
  { pre: "<", num: "30", label: "Days to governance program baseline" },
  { num: "100", accent: "%", label: "Audit-ready lineage on every governed asset" },
  { num: "0", label: "Data moved outside your environment" },
];

const CUSTOMERS = [
  {
    vertical: "Defense Shipbuilding",
    quote:
      "We needed a program that could span hull-partitioned data domains and still give NAVSEA a single governance view. Procela made that possible.",
    attr: "Chief Data Architect, Tier-1 Defense Contractor",
  },
  {
    vertical: "Financial Services",
    quote:
      "Connecting BigID and Immuta through Procela's orchestration layer cut our audit prep from six weeks to five days.",
    attr: "VP Data Governance, Regional Bank",
  },
  {
    vertical: "Healthcare & Life Sciences",
    quote:
      "HIPAA, SOC 2, and internal policy — Procela enforces them through a single policy layer that our stewards actually use.",
    attr: "CDO, National Health Network",
  },
];

const STACK = [
  {
    role: "Discovery & classification",
    name: "BigID",
    desc: "Scans and classifies sensitive data across hybrid environments.",
  },
  {
    role: "Access policy enforcement",
    name: "Immuta",
    desc: "Attribute-based access control at the data platform layer.",
  },
  {
    role: "Governance orchestration",
    name: "Procela",
    desc: "The connective layer — people, process, systems, and data aligned in one program.",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div className="hero-band">
        <header className="hero">
          <span className="hero-eyebrow">Enterprise Data Governance Platform</span>
          <h1>
            Governance that <em>aligns</em>
            <br />
            people, process, systems,
            <br />
            and data
          </h1>
          <p className="hero-sub">
            Procela is the orchestration layer that connects your stewards,
            policies, tools, and data assets into a single, auditable governance
            program.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary-lg" href="/demo">
              Request a demo
            </Link>
            <Link className="btn-outline-lg" href="/platform">
              Explore the platform
            </Link>
          </div>
        </header>
      </div>

      {/* LOGO STRIP */}
      <div className="logo-strip">
        <span className="logo-strip-label">Integrates with</span>
        {INTEGRATIONS.map((name) => (
          <span key={name} className="logo-pill">
            {name}
          </span>
        ))}
      </div>

      {/* STATS */}
      <div className="stats-bar">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">
              {s.pre && <span>{s.pre}</span>}
              {s.num}
              {s.accent && <span>{s.accent}</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* WITHOUT / WITH */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The problem</span>
          <h2 className="section-title">
            Governance without orchestration is just documentation
          </h2>
          <p className="section-body">
            Most programs have the tools. What they&apos;re missing is the connective
            layer that turns scattered policies into a running program.
          </p>
          <div className="contrast-grid">
            <div className="contrast-side">
              <div className="contrast-label bad">Without Procela</div>
              <div className="contrast-heading">
                Policies in spreadsheets. Stewards without accountability. Tools that
                don&apos;t talk.
              </div>
              <p className="contrast-body">
                Discovery runs in one system. Access controls live in another.
                Ownership assignments exist in a SharePoint nobody checks. Audits take
                weeks. Compliance is a fire drill.
              </p>
            </div>
            <div className="contrast-side with">
              <div className="contrast-label good">With Procela</div>
              <div className="contrast-heading">
                One orchestration layer. Connected tools. A governance program that
                runs itself.
              </div>
              <p className="contrast-body">
                Stewards receive assignments automatically. Policies propagate from
                business rules. Discovery, classification, access, and audit close the
                loop — continuously, without manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PLATFORM TABS */}
      <section className="section" id="platform">
        <div className="section-inner">
          <span className="eyebrow">Platform</span>
          <h2 className="section-title">Context and control, across every layer</h2>
          <PlatformTabs />
        </div>
      </section>

      <hr className="divider" />

      {/* SOCIAL PROOF */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <span className="eyebrow">Built for regulated enterprises</span>
          <h2 className="section-title">
            Governance programs that hold up under audit
          </h2>
          <div className="customers-grid">
            {CUSTOMERS.map((c) => (
              <div className="customer-card" key={c.vertical}>
                <div className="customer-vertical">{c.vertical}</div>
                <div className="customer-quote">&ldquo;{c.quote}&rdquo;</div>
                <div className="customer-attr">{c.attr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* STACK */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Integrations</span>
          <h2 className="section-title">
            The orchestration layer above your data security stack
          </h2>
          <p className="section-body">
            Procela works alongside your existing tools — adding governance
            orchestration without replacing what&apos;s already working.
          </p>
          <div className="stack-row">
            {STACK.map((item) => (
              <div
                className={`stack-item${item.featured ? " featured" : ""}`}
                key={item.name}
              >
                <div className="stack-role">{item.role}</div>
                <div className="stack-name">{item.name}</div>
                <div className="stack-desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link className="tab-link" href="/integrations">
              See all integrations →
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FAQ */}
      <section className="section" id="resources">
        <div className="section-inner">
          <span className="eyebrow">Common questions</span>
          <h2 className="section-title">What organizations ask before they start</h2>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        title="For leaders who need governance that actually runs"
        body="Procela is built for regulated, complex enterprises. Let's talk about your environment."
      />

      <SiteFooter />
    </>
  );
}
