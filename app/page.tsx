import Link from "next/link";
import Icon from "@/components/Icon";
import BrowserFrame from "@/components/BrowserFrame";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PlatformTabs from "@/components/PlatformTabs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import OrchestrationDiagram from "@/components/OrchestrationDiagram";

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
  { num: "4", label: "Governance pillars in one platform" },
  { num: "5", label: "Steps in the DG Foundation track" },
  { num: "3", label: "Autonomy tiers for human & AI actors" },
  { num: "0", label: "Data moved outside your environment" },
];

const VERTICALS = [
  {
    vertical: "Defense & Shipbuilding",
    body: "Span hull- and program-partitioned data domains under CUI and ITAR controls, and give program stakeholders a single, auditable governance view — without moving data off-premises.",
  },
  {
    vertical: "Financial Services",
    body: "Connect discovery and access-control tools into one orchestrated program, with continuous, audit-ready lineage that shrinks audit prep from weeks to days.",
  },
  {
    vertical: "Healthcare & Life Sciences",
    body: "Enforce HIPAA, SOC 2, and internal policy through a single policy layer your stewards actually use — backed by a complete, tamper-evident audit trail.",
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
        <div className="hero-shot">
          <BrowserFrame
            src="/screenshots/hero.webp"
            alt="The Procela dashboard showing governance coverage across value streams, processes, data assets, and systems."
            priority
          />
        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="logo-strip">
        <span className="logo-strip-label">Designed to integrate with</span>
        {INTEGRATIONS.map((name) => (
          <span key={name} className="logo-pill">
            {name}
          </span>
        ))}
      </div>

      {/* ORCHESTRATION DIAGRAM */}
      <section className="section">
        <div className="section-inner">
          <OrchestrationDiagram />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
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
              <div className="contrast-label bad">
                <span className="ci">
                  <Icon name="cross" size={15} />
                </span>
                Without Procela
              </div>
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
              <div className="contrast-label good">
                <span className="ci">
                  <Icon name="check" size={15} />
                </span>
                With Procela
              </div>
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

      {/* BUILT FOR */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <span className="eyebrow">Built for regulated enterprises</span>
          <h2 className="section-title">
            Governance that holds up in the hardest environments
          </h2>
          <div className="customers-grid">
            {VERTICALS.map((v) => (
              <div className="customer-card" key={v.vertical}>
                <div className="customer-vertical">{v.vertical}</div>
                <p className="customer-body">{v.body}</p>
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
