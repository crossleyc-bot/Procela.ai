import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Integrations — Procela",
  description:
    "Procela orchestrates the data governance stack you already run — BigID, Immuta, Databricks, Snowflake, AWS, Microsoft Purview, Collibra, and more.",
};

const INTEGRATIONS = [
  {
    role: "Discovery & classification",
    name: "BigID",
    desc: "Scans and classifies sensitive data across hybrid environments; Procela pulls classified assets in as governed objects.",
  },
  {
    role: "Access policy enforcement",
    name: "Immuta",
    desc: "Attribute-based access control at the data platform layer, driven by policies Procela propagates downstream.",
  },
  {
    role: "Data platform",
    name: "Databricks",
    desc: "Govern lakehouse assets in place — Procela maps ownership and policy to Unity Catalog objects.",
  },
  {
    role: "Data platform",
    name: "Snowflake",
    desc: "Apply stewardship and policy to Snowflake databases, schemas, and tables without moving data.",
  },
  {
    role: "Cloud",
    name: "AWS",
    desc: "Edge Agents run inside your VPC for push-down profiling of S3, RDS, Redshift, and more.",
  },
  {
    role: "Catalog & governance",
    name: "Microsoft Purview",
    desc: "Complement Purview's catalog with Procela's orchestration layer for stewardship and policy execution.",
  },
  {
    role: "Catalog",
    name: "Collibra",
    desc: "Run Procela alongside an existing catalog — it coordinates the program rather than replacing your metadata store.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Integrations</span>
          <h1>The orchestration layer above your stack</h1>
          <p>
            Procela works alongside the tools you already run — adding governance
            orchestration without ripping and replacing what&apos;s working.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Connected tools</span>
          <h2 className="section-title">Procela coordinates, your stack executes</h2>
          <p className="section-body">
            Discovery, classification, access control, and cataloging stay where they
            are. Procela connects them into one coordinated governance program.
          </p>
          <div className="card-grid">
            {INTEGRATIONS.map((i) => (
              <div className="card" key={i.name}>
                <span className="card-kicker">{i.role}</span>
                <h3>{i.name}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Don&apos;t see yours?</span>
          <h2 className="section-title">Built to connect to what you run</h2>
          <p className="section-body">
            Procela&apos;s Edge Agent framework and open connectors are designed to reach
            the sources and tools specific to regulated environments. Tell us your
            stack and we&apos;ll map the integration path.
          </p>
        </div>
      </section>

      <CtaBand
        title="Connect Procela to your environment"
        body="Bring your stack — we'll show you how the orchestration layer fits on top."
        secondaryLabel="How it works"
        secondaryHref="/how-it-works"
      />

      <SiteFooter />
    </>
  );
}
