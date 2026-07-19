import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">404</span>
          <h1>This page couldn&apos;t be found</h1>
          <p>
            The page you&apos;re looking for may have moved or never existed. Let&apos;s
            get you back on track.
          </p>
          <div className="hero-actions" style={{ marginTop: "2rem" }}>
            <Link className="btn-primary-lg" href="/">
              Back to home
            </Link>
            <Link className="btn-outline-lg" href="/platform">
              Explore the platform
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
