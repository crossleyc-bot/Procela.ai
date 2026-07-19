import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import BrowserFrame from "@/components/BrowserFrame";

export const metadata: Metadata = {
  title: "How it works — Procela",
  description:
    "Procela's phased DG Foundation track stands up an audit-ready governance baseline in under 30 days: connect, classify, assign, govern, and audit.",
};

const STEPS = [
  {
    n: "01",
    title: "Connect",
    body: "Deploy Procela Edge Agents inside your environment and connect your existing discovery, catalog, and access-control tools. No data leaves your perimeter — only metadata flows to the platform.",
  },
  {
    n: "02",
    title: "Classify",
    body: "Pull in classified assets from tools like BigID, reconcile them against your domains, and let Procela's agents propose classifications for anything unlabeled — routed for review at the autonomy tier you choose.",
  },
  {
    n: "03",
    title: "Assign",
    body: "Map assets to data domains and assign owners, stewards, and agents. Procela distributes stewardship automatically based on your org structure, so accountability is explicit from day one.",
  },
  {
    n: "04",
    title: "Govern",
    body: "Define policies in plain language. Procela translates them into enforceable rules and propagates them to your enforcement tools — access, retention, export controls — keeping everything in sync.",
  },
  {
    n: "05",
    title: "Audit",
    body: "Every classification, assignment, policy change, and access event is captured in a tamper-evident log. Audit prep becomes a query, not a fire drill.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">How it works</span>
          <h1>An audit-ready baseline in under 30 days</h1>
          <p>
            The DG Foundation track is phased and pragmatic — it starts with your
            highest-priority domains and closes the governance loop step by step.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The DG Foundation track</span>
          <h2 className="section-title">Five steps to a running program</h2>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The closed loop</span>
          <h2 className="section-title">Governance that maintains itself</h2>
          <p className="section-body">
            Once the baseline is live, Procela keeps the loop running: new assets are
            discovered and classified, stewardship is assigned, policies propagate, and
            the audit trail updates — continuously, without manual intervention. Your
            team supervises exceptions instead of doing the busywork.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">In the product</span>
          <h2 className="section-title">The program, running</h2>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Program phases</span>
              <h3>Track the DG Foundation program by phase</h3>
              <p>
                From foundation to operationalization, Procela shows exactly where the
                program stands and the next steps to advance it.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/program.webp"
              alt="Procela governance program view showing phased progress across foundation, structure, ownership, and operations."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Domains</span>
              <h3>Organize assets into governed domains</h3>
              <p>
                Group data assets under a single governance umbrella with assigned
                owners, stewards, and policies — the backbone of the classify and
                assign steps.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/domains.webp"
              alt="Procela data domains view with a domain list and a detail panel showing owner, stewards, and member data assets."
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Map the first 30 days to your environment"
        body="We'll scope a phased rollout starting with your highest-priority data domains."
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
