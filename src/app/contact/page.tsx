import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl } from "@/lib/config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Contact ToolNest — Support, Feedback & Tool Requests",
  description:
    "Get in touch with the ToolNest team. Submit tool suggestions, report bugs, ask questions, or provide feedback on our developer utilities.",
  alternates: {
    canonical: getCanonicalUrl("contact/"),
  },
  openGraph: {
    title: "Contact ToolNest — Support, Feedback & Tool Requests",
    description:
      "Get in touch with the ToolNest team. Submit tool suggestions, report bugs, or provide feedback.",
    url: getCanonicalUrl("contact/"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <h1 className={styles.title}>Contact Us</h1>

        <section className={styles.section}>
          <p>
            We would love to hear from you! Have an idea for a new developer utility,
            spotted a bug or inaccurate output, or want to share feedback? Fill out the
            form below to reach out to our team.
          </p>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
