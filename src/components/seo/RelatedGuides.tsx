import Link from "next/link";
import { getGuideBySlug } from "@/registry/guides";
import styles from "./RelatedGuides.module.css";

interface RelatedGuidesProps {
  guideSlugs: string[];
}

export default function RelatedGuides({ guideSlugs }: RelatedGuidesProps) {
  if (!guideSlugs || guideSlugs.length === 0) return null;

  const validGuides = guideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean);

  if (validGuides.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className="section-title">Related Technical Guides</h2>
      <div className={styles.grid}>
        {validGuides.map((guide) => (
          <Link
            key={guide!.slug}
            href={`/guides/${guide!.slug}/`}
            className={styles.card}
          >
            <div className={styles.badge}>{guide!.categoryLabel}</div>
            <h3 className={styles.title}>{guide!.title}</h3>
            <p className={styles.desc}>{guide!.description}</p>
            <div className={styles.footer}>
              <span>⏱️ {guide!.readTime}</span>
              <span className={styles.readMore}>Read guide &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
