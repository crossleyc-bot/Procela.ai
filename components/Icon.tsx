type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export type IconName =
  | "orchestration"
  | "stewardship"
  | "policy"
  | "edge"
  | "security"
  | "audit"
  | "integration"
  | "check"
  | "cross"
  | "lock"
  | "layers"
  | "shield";

/**
 * Brand line-icon set. 24x24 grid, 1.6 stroke, currentColor — sized in em so
 * icons inherit the surrounding text color and scale with font size.
 */
export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

const PATHS: Record<IconName, React.ReactNode> = {
  // stacked layers → orchestration
  orchestration: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 12l9 4.5L21 12" />
      <path d="M3 16.5 12 21l9-4.5" />
    </>
  ),
  // people → stewardship & ownership
  stewardship: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14.3A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  // document with rule lines → policy
  policy: (
    <>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h2" />
    </>
  ),
  // node at the edge → edge agents
  edge: (
    <>
      <rect x="3" y="9" width="8" height="6" rx="1.5" />
      <path d="M11 12h4" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M7 9V6M7 18v-3" />
    </>
  ),
  // shield check → security
  security: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  // clipboard check → audit
  audit: (
    <>
      <rect x="5" y="5" width="14" height="16" rx="1.5" />
      <path d="M9 5V3.5h6V5" />
      <path d="m8.8 13 2 2 3.6-3.8" />
    </>
  ),
  // connected nodes → integration
  integration: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.6 7.6 10.6 16M16.4 7.6 13.4 16M8.2 6h7.6" />
    </>
  ),
  check: <path d="m5 12.5 4 4 10-10" />,
  cross: <path d="M6 6l12 12M18 6 6 18" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14v2.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="m3 12 9 4.5L21 12" />
    </>
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
  ),
};
