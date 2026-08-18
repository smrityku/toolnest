import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ToolNest Support & Tool Requests",
  description:
    "Get in touch with the ToolNest team to suggest new developer tools, report a bug, or ask questions.",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/contact/",
  },
  openGraph: {
    title: "Contact Us — ToolNest Support & Tool Requests",
    description: "Suggest a tool, report a bug, or get in touch with ToolNest.",
    url: "https://toolnest.smrityku.workers.dev/contact/",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
