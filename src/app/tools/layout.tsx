import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Developer Tools & Utilities — Free Online Suite | ToolNest",
  description:
    "Explore our complete directory of free online developer and utility tools. Format JSON & SQL, encode Base64, decode JWTs, generate UUIDs & hashes, compare diffs, and more.",
  keywords:
    "developer tools directory, online developer tools, free utility tools, json tools, encoding tools, text utilities, generators",
  openGraph: {
    title: "All Developer Tools & Utilities — Free Online Suite | ToolNest",
    description:
      "Explore our complete directory of free online developer and utility tools. 100% browser-based with zero data collection.",
    url: "https://toolnest.smrityku.workers.dev/tools/",
    type: "website",
  },
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/tools/",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
