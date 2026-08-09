import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ToolNest team. Suggest new tools, report bugs, or ask questions.",
};

export default function ContactPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>

        <section className={styles.section}>
          <p>
            We&apos;d love to hear from you! Whether you have a suggestion for a
            new tool, found a bug, or just want to say hello — feel free to
            reach out.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Get in Touch</h2>
          <p>
            You can reach us at:{" "}
            <a href="mailto:hello@toolnest.dev">hello@toolnest.dev</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Suggest a Tool</h2>
          <p>
            Have an idea for a tool you&apos;d like us to build? We&apos;re always
            looking to expand our collection with genuinely useful tools.
            Send us your suggestion and we&apos;ll consider it for future updates.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Report a Bug</h2>
          <p>
            Found something not working correctly? Please let us know with as
            much detail as possible — including the tool name, your browser,
            and what you expected to happen. This helps us fix issues quickly.
          </p>
        </section>
      </div>
    </div>
  );
}
