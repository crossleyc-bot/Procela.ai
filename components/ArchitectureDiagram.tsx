const SOURCES = [
  { title: "Discovery & classification", sub: "BigID · Purview", y: 46 },
  { title: "Access control", sub: "Immuta", y: 146 },
  { title: "Data platforms", sub: "Snowflake · Databricks", y: 246 },
];

const OUTPUTS = [
  { title: "Policy enforced", sub: "downstream", y: 46 },
  { title: "Stewardship assigned", sub: "owners & agents", y: 146 },
  { title: "Audit-ready lineage", sub: "tamper-evident", y: 246 },
];

const FS = "var(--font-inter), Inter, sans-serif";
const FM = "var(--font-mono), monospace";

export default function ArchitectureDiagram() {
  return (
    <div className="arch-wrap">
      <svg
        className="arch-diagram"
        viewBox="0 0 920 356"
        role="img"
        aria-label="Procela sits between your existing tools and your governance outputs, orchestrating the flow between them."
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 10 5 0 10z" fill="var(--green)" />
          </marker>
        </defs>

        {/* connectors: sources -> Procela */}
        {SOURCES.map((s) => (
          <path
            key={`in-${s.y}`}
            d={`M256 ${s.y + 32} C330 ${s.y + 32}, 340 178, 372 178`}
            fill="none"
            stroke="var(--green)"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />
        ))}
        {/* connectors: Procela -> outputs */}
        {OUTPUTS.map((o) => (
          <path
            key={`out-${o.y}`}
            d={`M548 178 C580 178, 590 ${o.y + 32}, 664 ${o.y + 32}`}
            fill="none"
            stroke="var(--green)"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />
        ))}

        {/* source boxes */}
        {SOURCES.map((s) => (
          <g key={s.title}>
            <rect
              x="40"
              y={s.y}
              width="216"
              height="64"
              rx="10"
              fill="var(--navy-mid)"
              stroke="var(--border)"
            />
            <text x="60" y={s.y + 28} fontFamily={FS} fontSize="14.5" fontWeight="600" fill="var(--ink)">
              {s.title}
            </text>
            <text x="60" y={s.y + 47} fontFamily={FM} fontSize="10.5" fill="var(--slate)" letterSpacing="0.03em">
              {s.sub}
            </text>
          </g>
        ))}

        {/* Procela core */}
        <rect x="372" y="98" width="176" height="160" rx="14" fill="var(--green-faint)" stroke="var(--green)" strokeWidth="1.5" />
        <text x="460" y="166" textAnchor="middle" fontFamily={FS} fontSize="21" fontWeight="700" fill="var(--ink)">
          Procela
        </text>
        <text x="460" y="190" textAnchor="middle" fontFamily={FM} fontSize="10.5" fill="var(--green-text)" letterSpacing="0.06em">
          ORCHESTRATION
        </text>

        {/* output boxes */}
        {OUTPUTS.map((o) => (
          <g key={o.title}>
            <rect
              x="664"
              y={o.y}
              width="216"
              height="64"
              rx="10"
              fill="var(--navy-mid)"
              stroke="var(--border)"
            />
            <text x="684" y={o.y + 28} fontFamily={FS} fontSize="14.5" fontWeight="600" fill="var(--ink)">
              {o.title}
            </text>
            <text x="684" y={o.y + 47} fontFamily={FM} fontSize="10.5" fill="var(--slate)" letterSpacing="0.03em">
              {o.sub}
            </text>
          </g>
        ))}

        {/* column captions */}
        <text x="148" y="26" textAnchor="middle" fontFamily={FM} fontSize="10.5" fill="var(--slate)" letterSpacing="0.12em">
          YOUR STACK
        </text>
        <text x="772" y="26" textAnchor="middle" fontFamily={FM} fontSize="10.5" fill="var(--slate)" letterSpacing="0.12em">
          GOVERNANCE OUTPUTS
        </text>
      </svg>
    </div>
  );
}
