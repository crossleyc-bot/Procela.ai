import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "The principal model: human and AI governance actors — Procela",
  description:
    "How Procela models authority for stewards, owners, and agents — and the three-tier autonomy framework that lets AI participate in governance safely.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Whitepaper"
      title="The principal model: human and AI governance actors"
      deck="How Procela models authority for stewards, owners, and agents — and the three-tier autonomy framework behind it."
      meta="By the Procela team · 8 min read"
    >
      <p>
        Governance is ultimately about accountability: who is responsible for a piece
        of data, and what are they allowed to do with it. As AI systems begin to take
        on real governance work — classifying assets, proposing owners, flagging
        policy violations — that question gets sharper. A recommendation is only
        trustworthy if you know exactly who or what made it, and under what authority.
        Procela&apos;s answer is the <strong>principal model</strong>.
      </p>

      <h2>What is a principal?</h2>
      <p>
        A principal is any actor that can hold a governance role — a human or an AI
        agent — with a defined scope of authority. Every action in Procela is
        attributable to a named principal, and every principal&apos;s authority is
        explicit. There are no anonymous, ambient decisions.
      </p>

      <h2>Human principals</h2>
      <p>
        Data owners and domain stewards are the familiar roles. Owners are
        accountable for a domain; stewards do the day-to-day work of classification,
        review, and remediation. In Procela these aren&apos;t just labels in a
        spreadsheet — they carry enforceable scope, and their decisions are logged
        against them.
      </p>

      <h2>AI principals</h2>
      <p>
        The important move is treating AI agents as first-class principals rather than
        as background automation. An agent that reviews classifications or proposes
        stewardship assignments is a named actor with its own scope and its own audit
        trail. You can see what it did, why, and on whose authority — just as you can
        for a human.
      </p>

      <h2>The three-tier autonomy framework</h2>
      <p>
        Not every domain warrants the same level of independence from an agent, so
        Procela gives you three tiers to configure per domain:
      </p>
      <ul>
        <li>
          <strong>Advisory.</strong> The agent recommends — a classification, an
          owner, a policy match — and a human decides. Best for your highest-sensitivity
          data.
        </li>
        <li>
          <strong>Propose &amp; approve.</strong> The agent prepares changes and
          routes them for approval. Nothing takes effect until a steward signs off,
          and every decision is logged.
        </li>
        <li>
          <strong>Autonomous.</strong> For well-understood, low-risk work, the agent
          acts independently inside policy boundaries you define — with a complete
          audit trail.
        </li>
      </ul>
      <p>
        Because the tier is set per domain, you can let agents run autonomously over
        low-risk catalog hygiene while keeping export-controlled data strictly
        advisory — all in the same program.
      </p>

      <h2>Authority, scope, and auditability</h2>
      <p>
        Every principal&apos;s authority is bounded and inspectable. Combined with a
        tamper-evident log of every classification, assignment, and policy decision,
        that means you can always answer the auditor&apos;s core question: who did
        this, and were they allowed to?
      </p>

      <h2>Why it matters for regulated environments</h2>
      <p>
        In defense, financial services, and healthcare, &ldquo;the system did
        it&rdquo; is not an acceptable answer. The principal model makes AI
        participation defensible by keeping it accountable — every actor named, every
        authority explicit, every action logged.
      </p>
    </ArticleLayout>
  );
}
