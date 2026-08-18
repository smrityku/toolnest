"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { guides } from "@/registry/guides";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./guides.module.css";

const CATEGORIES = [
  { slug: "all", label: "All Guides" },
  { slug: "json", label: "JSON" },
  { slug: "encoding", label: "Encoding & Base64" },
  { slug: "web", label: "Web & URLs" },
  { slug: "identifiers", label: "Identifiers & UUID" },
  { slug: "time", label: "Time & Dates" },
  { slug: "security", label: "Security & Auth" },
];

export default function GuidesDirectoryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      const matchesCategory =
        selectedCategory === "all" || g.category === selectedCategory;

      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.keywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className={styles.guidesPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Guides" },
          ]}
        />

        <header className={styles.header}>
          <div className={styles.badge}>
            <span>📚</span> Developer Knowledge Base
          </div>
          <h1 className={styles.title}>Developer Guides &amp; References</h1>
          <p className={styles.subtitle}>
            Practical, in-depth technical documentation covering JSON specifications,
            Base64 binary encoding, URL parameters, UUID architecture, JWT claims,
            and cryptographic hashing.
          </p>

          {/* Search Bar */}
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search technical guides by topic, standard, or keyword..."
              aria-label="Search guides"
            />
            {search && (
              <button
                className={styles.clearSearch}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className={styles.categoryPills}>
            {CATEGORIES.map((cat) => {
              const count =
                cat.slug === "all"
                  ? guides.length
                  : guides.filter((g) => g.category === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  className={`${styles.pill} ${selectedCategory === cat.slug ? styles.pillActive : ""}`}
                  onClick={() => setSelectedCategory(cat.slug)}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </header>

        {/* Guides Grid */}
        {filteredGuides.length > 0 ? (
          <div className={styles.guideGrid}>
            {filteredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className={styles.guideCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>{guide.categoryLabel}</span>
                  <span className={styles.readTime}>⏱️ {guide.readTime}</span>
                </div>
                <h2 className={styles.guideTitle}>{guide.title}</h2>
                <p className={styles.guideDesc}>{guide.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readCta}>Read Full Guide &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>📖</div>
            <h3>No guides found matching &quot;{search}&quot;</h3>
            <p>Try searching for a different term or reset your filters.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
