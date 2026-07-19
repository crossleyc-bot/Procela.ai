type LogoProps = {
  height?: number;
  className?: string;
  wordmark?: boolean;
  title?: string;
};

/**
 * Procela brand mark. Rendered inline so the "Procela" wordmark uses the
 * page's Inter font. The tile grid recreates the brand icon; swap in the
 * official raster/vector asset here if it needs to change.
 */
export default function Logo({
  height = 32,
  className,
  wordmark = true,
  title = "Procela",
}: LogoProps) {
  const width = wordmark ? (height * 176) / 40 : height;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={wordmark ? "0 0 176 40" : "0 0 40 40"}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <rect x="0" y="0" width="40" height="40" rx="9" fill="#0D1F17" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="8.5"
        stroke="#4A8C6A"
        strokeOpacity="0.35"
      />
      {/* left column: small square tiles */}
      <rect x="8" y="8" width="7" height="6" rx="1.8" fill="#70C090" />
      <rect x="8" y="17" width="7" height="6" rx="1.8" fill="#4A8C6A" />
      <rect x="8" y="26" width="7" height="6" rx="1.8" fill="#4A8C6A" />
      {/* right column: wider bar tiles */}
      <rect x="17" y="8" width="15" height="6" rx="1.8" fill="#4A8C6A" />
      <rect x="17" y="17" width="15" height="6" rx="1.8" fill="#70C090" />
      <rect x="17" y="26" width="15" height="6" rx="1.8" fill="#3D7558" />
      {wordmark && (
        <text
          x="50"
          y="28"
          fontFamily="var(--font-inter), Inter, system-ui, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="-0.02em"
          fill="currentColor"
        >
          Procela
        </text>
      )}
    </svg>
  );
}
