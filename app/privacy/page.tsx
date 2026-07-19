import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Procela",
  description: "How Datalign Technology LLC (DBA Procela.ai) handles information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <article className="prose">
        <h1>Privacy Policy</h1>
        <p className="prose-meta">Last updated: July 2026</p>

        <p>
          This template Privacy Policy describes how Datalign Technology LLC, doing
          business as Procela.ai (&ldquo;Procela,&rdquo; &ldquo;we,&rdquo; or
          &ldquo;us&rdquo;), handles information collected through this website. It is a
          starting point and should be reviewed by legal counsel before publication.
        </p>

        <h2>Information we collect</h2>
        <p>
          We collect information you provide directly — such as your name, work email,
          company, and message when you request a demo or contact us — along with basic
          technical data (like your browser type and pages visited) collected
          automatically to operate and improve the site.
        </p>

        <h2>How we use information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your requests and provide the demos or materials you ask for;</li>
          <li>Communicate with you about Procela&apos;s products and services;</li>
          <li>Operate, secure, and improve our website; and</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>How we share information</h2>
        <p>
          We do not sell your personal information. We may share it with service
          providers who process it on our behalf, or where required by law. Any such
          providers are bound to use the information only to provide services to us.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain personal information only as long as necessary for the purposes
          described here, unless a longer retention period is required by law.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or delete
          your personal information. To make a request, contact us using the details
          below.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to Datalign Technology LLC via our{" "}
          <a href="/demo">contact page</a>.
        </p>
      </article>

      <SiteFooter />
    </>
  );
}
