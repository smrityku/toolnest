import Link from "next/link";
import { tools, categories } from "@/registry/tools";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span>⚡</span> {tools.length} Free Tools — No Sign-up Required
          </div>
          <h1 className={styles.heroTitle}>
            Developer &amp; Utility Tools
            <span className={styles.heroGradient}> That Just Work</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Free online tools that run entirely in your browser. Format JSON,
            encode Base64, count words, generate UUIDs, and more. Fast, private,
            and always free.
          </p>
        </div>
      </section>

      {/* Tools by Category */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          {categories.map((category) => {
            const categoryTools = tools.filter(
              (t) => t.category === category.slug
            );
            if (categoryTools.length === 0) return null;

            return (
              <div key={category.slug} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    {category.label}
                  </h2>
                  <p className={styles.categoryDesc}>{category.description}</p>
                </div>

                <div className={styles.toolGrid}>
                  {categoryTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.category}/${tool.slug}/`}
                      className={styles.toolCard}
                    >
                      <div className={styles.toolIcon}>{tool.icon}</div>
                      <div className={styles.toolInfo}>
                        <h3 className={styles.toolName}>{tool.name}</h3>
                        <p className={styles.toolDesc}>{tool.description}</p>
                      </div>
                      <span className={styles.toolArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why ToolNest */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Why ToolNest?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>100% Private</h3>
              <p>
                Everything runs in your browser. Your data never leaves your
                device — no server processing, no data collection.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Instant Results</h3>
              <p>
                No waiting for server responses. All tools process data
                client-side for instant, real-time results.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🆓</div>
              <h3>Always Free</h3>
              <p>
                No sign-up, no subscription, no usage limits. Every tool is free
                to use, forever.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Works Everywhere</h3>
              <p>
                Fully responsive design. Use on desktop, tablet, or mobile —
                all tools work perfectly on any device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
