import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Edge Agents and the no-egress deployment model — Procela",
  description:
    "How Procela Edge Agents use push-down profiling, mTLS identity, and tamper-evident logs to govern data without ever moving it out of your perimeter.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Architecture"
      title="Edge Agents and the no-egress deployment model"
      deck="How push-down profiling and mTLS identity keep source data inside your perimeter."
      meta="By the Procela team · 6 min read"
    >
      <p>
        For the organizations Procela is built for, one constraint dominates every
        architecture decision: the data cannot move. Export-controlled engineering
        data, CUI, and regulated health and financial records can&apos;t be copied to
        a vendor&apos;s cloud for processing. So Procela is designed around a simple
        principle — <strong>governance comes to the data, not the other way around</strong>.
      </p>

      <h2>The no-egress principle</h2>
      <p>
        Procela Edge Agents run <em>inside</em> your environment. They profile and
        govern data where it lives and send only metadata — classifications, lineage,
        policy state — back to the platform. Source records never cross your
        perimeter. This is what makes Procela viable in ITAR, CMMC, CUI, and HIPAA
        contexts where data residency is non-negotiable.
      </p>

      <h2>How Edge Agents work</h2>
      <p>
        Agents deploy via Kubernetes or Helm into your infrastructure — a VPC, an
        on-premise cluster, or a secured enclave. Rather than pulling data out to
        scan it, they perform <strong>push-down profiling</strong>: the analysis
        executes next to the source, and only the resulting metadata is returned.
      </p>

      <h2>Identity: mutual TLS</h2>
      <p>
        Every agent authenticates to the platform with mutual TLS. Both sides of the
        connection prove their identity cryptographically, so a rogue agent
        can&apos;t impersonate a real one and the platform can&apos;t be spoofed.
        Agent identity is also the anchor for the audit trail — every action an agent
        takes is attributable to a verified principal.
      </p>

      <h2>Tamper-evident audit logs</h2>
      <p>
        Agents maintain append-only, tamper-evident logs of everything they do:
        what was profiled, what was classified, what policies were evaluated. Because
        the log is tamper-evident, an auditor can trust that what they&apos;re reading
        is what actually happened.
      </p>

      <h2>What actually leaves the perimeter</h2>
      <p>
        Only metadata: asset identifiers, classifications, ownership and stewardship
        assignments, policy decisions, and lineage. No column values, no records, no
        file contents. If it would be sensitive to move, it doesn&apos;t move.
      </p>

      <h2>Deployment topologies</h2>
      <ul>
        <li>
          <strong>Cloud VPC.</strong> An agent in your AWS VPC profiles S3, RDS,
          Redshift, and other sources in-region.
        </li>
        <li>
          <strong>On-premise.</strong> An agent inside your data center reaches legacy
          databases that never touch the internet.
        </li>
        <li>
          <strong>Hybrid.</strong> Multiple agents across environments report into one
          governance program, giving you a single view without consolidating the data.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        You get a unified, audit-ready governance program across every source — while
        your data stays exactly where your security and compliance teams require it to
        be.
      </p>
    </ArticleLayout>
  );
}
