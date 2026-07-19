import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Standing up a DG Foundation program in 30 days — Procela",
  description:
    "A phased playbook for reaching an audit-ready data governance baseline in under 30 days, starting with your highest-priority domains.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Guide"
      title="Standing up a DG Foundation program in 30 days"
      deck="A phased playbook for reaching an audit-ready governance baseline, starting with your highest-priority domains."
      meta="By the Procela team · 7 min read"
    >
      <p>
        Most data governance initiatives stall not because the tools are missing,
        but because the program never becomes <em>operational</em>. Policies live in
        documents, ownership is ambiguous, and the connection between discovery,
        access control, and audit is manual. The DG Foundation track is designed to
        get past that — to a running baseline you can defend in an audit — in about
        thirty days.
      </p>

      <h2>What a &ldquo;baseline&rdquo; actually means</h2>
      <p>
        A governance baseline isn&apos;t a finished program; it&apos;s the smallest
        version that runs on its own. Concretely, at the end of the first phase you
        should have:
      </p>
      <ul>
        <li>Your highest-priority data domains modeled and connected;</li>
        <li>Owners and stewards assigned, with explicit authority;</li>
        <li>A working policy layer that propagates to your enforcement tools; and</li>
        <li>Audit-ready lineage on every governed asset.</li>
      </ul>
      <p>
        The scope is deliberately narrow. You are not trying to govern everything —
        you are proving the loop closes for the data that matters most.
      </p>

      <h2>Week 1 — Connect and scope</h2>
      <p>
        Deploy Procela Edge Agents inside your environment and connect your existing
        discovery, catalog, and access-control tools. Only metadata leaves your
        perimeter. In parallel, pick the domains for Phase 1 — usually the ones under
        the most regulatory pressure, such as CUI, PII, or export-controlled
        engineering data.
      </p>

      <h2>Week 2 — Classify and reconcile</h2>
      <p>
        Pull classified assets in from tools like BigID and reconcile them against
        your chosen domains. Let Procela&apos;s agents propose classifications for
        anything unlabeled, routed for review at the autonomy tier you&apos;re
        comfortable with. The goal here is coverage: every asset in scope has a known
        classification and a home domain.
      </p>

      <h2>Week 3 — Assign stewardship</h2>
      <p>
        Map owners, stewards, and agents to domains and assets. Procela distributes
        assignments automatically based on your org structure, so accountability is
        explicit rather than implied. This is the step most programs skip — and the
        reason audits turn into fire drills later.
      </p>

      <h2>Week 4 — Govern and audit</h2>
      <p>
        Author your first policies in plain language. Procela translates them into
        enforceable rules and propagates them to your enforcement tools — access,
        retention, export controls. Every change and access event lands in a
        tamper-evident log, so audit prep becomes a query rather than a project.
      </p>

      <h2>Common pitfalls</h2>
      <ul>
        <li>
          <strong>Boiling the ocean.</strong> Trying to govern every domain at once
          guarantees you finish none. Phase 1 is a wedge, not the whole program.
        </li>
        <li>
          <strong>Ownership by committee.</strong> If everyone owns a domain, no one
          does. Assign a single accountable owner per domain.
        </li>
        <li>
          <strong>Policies without propagation.</strong> A policy that isn&apos;t
          wired to an enforcement tool is just documentation.
        </li>
      </ul>

      <h2>After Phase 1</h2>
      <p>
        Once the baseline is live and self-maintaining, expanding is mostly a matter
        of adding domains — the orchestration, stewardship model, and audit trail are
        already in place. The hard part, going from zero to a running program, is
        behind you.
      </p>
    </ArticleLayout>
  );
}
