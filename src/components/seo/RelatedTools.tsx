import Link from "next/link";
import { getToolBySlug } from "@/registry/tools";
import styles from "./RelatedTools.module.css";

interface RelatedToolsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function RelatedTools({
  currentSlug,
  relatedSlugs,
}: RelatedToolsProps) {
  const related = relatedSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => getToolBySlug(slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className="section-title">Related Tools</h2>
      <div className={styles.grid}>
        {related.map((tool) => (
          <Link
            key={tool!.slug}
            href={`/${tool!.category}/${tool!.slug}/`}
            className={styles.card}
          >
            <span className={styles.icon}>{tool!.icon}</span>
            <div>
              <h3 className={styles.name}>{tool!.name}</h3>
              <p className={styles.desc}>{tool!.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
