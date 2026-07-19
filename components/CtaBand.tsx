import Link from "next/link";

type CtaBandProps = {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBand({
  title,
  body,
  primaryLabel = "Request a demo",
  primaryHref = "/demo",
  secondaryLabel = "Read the docs",
  secondaryHref = "/resources",
}: CtaBandProps) {
  return (
    <section className="cta-final">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="cta-actions">
        <Link className="btn-primary-lg" href={primaryHref}>
          {primaryLabel}
        </Link>
        {secondaryLabel && (
          <Link className="btn-outline-lg" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
