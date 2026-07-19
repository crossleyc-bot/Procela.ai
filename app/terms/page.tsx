import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service — Procela",
  description: "Terms governing use of the Procela.ai website, operated by Datalign Technology LLC.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <article className="prose">
        <h1>Terms of Service</h1>
        <p className="prose-meta">Last updated: July 2026</p>

        <p>
          These template Terms of Service govern your use of the Procela.ai website,
          operated by Datalign Technology LLC (&ldquo;Procela,&rdquo; &ldquo;we,&rdquo;
          or &ldquo;us&rdquo;). They are a starting point and should be reviewed by legal
          counsel before publication. By using this site, you agree to these terms.
        </p>

        <h2>Use of the site</h2>
        <p>
          You may use this website for lawful purposes only. You agree not to misuse the
          site, interfere with its operation, or attempt to access it in any way other
          than through the interfaces we provide.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The content, branding, and design of this site are owned by Datalign
          Technology LLC or its licensors and are protected by applicable law. You may
          not reproduce or redistribute them without permission.
        </p>

        <h2>No warranty</h2>
        <p>
          This website is provided &ldquo;as is,&rdquo; without warranties of any kind,
          express or implied. We do not guarantee that the site will be uninterrupted,
          error-free, or free of harmful components.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Datalign Technology LLC will not be
          liable for any indirect, incidental, or consequential damages arising from
          your use of this website.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after
          changes take effect constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to Datalign Technology LLC via our{" "}
          <a href="/demo">contact page</a>.
        </p>
      </article>

      <SiteFooter />
    </>
  );
}
