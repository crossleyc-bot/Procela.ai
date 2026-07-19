import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://procela.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Procela — Enterprise Data Governance Platform",
  description:
    "Procela is the orchestration layer that connects your stewards, policies, tools, and data assets into a single, auditable governance program.",
  keywords: [
    "data governance",
    "governance orchestration",
    "data stewardship",
    "policy management",
    "BigID",
    "Immuta",
    "regulated enterprise",
    "CMMC",
    "ITAR",
    "HIPAA",
  ],
  icons: {
    icon: [
      { url: "/procela-icon.svg", type: "image/svg+xml" },
      { url: "/procela_logo_transparent.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Procela — Enterprise Data Governance Platform",
    description:
      "The orchestration layer that aligns people, process, systems, and data into a single, auditable governance program.",
    siteName: "Procela",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procela — Enterprise Data Governance Platform",
    description:
      "The orchestration layer that aligns people, process, systems, and data into a single, auditable governance program.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
