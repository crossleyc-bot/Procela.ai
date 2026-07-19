import Link from "next/link";
import Logo from "./Logo";

export default function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span className="ann-badge">New</span>
        BigID integration now in private beta —{" "}
        <Link className="ann-link" href="/demo">
          Join the waitlist →
        </Link>
      </div>

      <nav className="nav">
        <Link className="nav-brand" href="/" aria-label="Procela home">
          <Logo height={32} />
        </Link>
        <div className="nav-links">
          <Link href="/platform">Platform</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/integrations">Integrations</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div className="nav-actions">
          <Link className="btn-green" href="/demo">
            Request a demo
          </Link>
        </div>
      </nav>
    </>
  );
}
