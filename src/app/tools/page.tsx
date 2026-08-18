"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools, categories } from "@/registry/tools";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./tools.module.css";

export default function ToolsDirectoryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;

      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((k) => k.toLowerCase().includes(q)) ||
        tool.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className={styles.toolsDirectory}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools" },
          ]}
        />

        <header className={styles.header}>
          <div className={styles.badge}>
            <span>⚡</span> {tools.length} Developer Utilities
          </div>
          <h1 className={styles.title}>All Developer Tools</h1>
          <p className={styles.subtitle}>
            Explore our complete suite of browser-based utilities for formatting,
            encoding, converting, and analyzing data. Everything runs locally on
            your machine with zero network latency and maximum privacy.
          </p>

          {/* Search Input */}
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools by name, keyword, or format (e.g. JSON, Base64, UUID, SQL)..."
              aria-label="Search tools"
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
            <button
              className={`${styles.pill} ${selectedCategory === "all" ? styles.pillActive : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Tools ({tools.length})
            </button>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.category === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  className={`${styles.pill} ${selectedCategory === cat.slug ? styles.pillActive : ""}`}
                  onClick={() => setSelectedCategory(cat.slug)}
                >
                  <span>{cat.icon}</span> {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </header>

        {/* Tools Grid / Listing */}
        {filteredTools.length > 0 ? (
          <div className={styles.toolGrid}>
            {filteredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.category}/${tool.slug}/`}
                className={styles.toolCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.toolIcon}>{tool.icon}</div>
                  <span className={styles.categoryBadge}>{tool.categoryLabel}</span>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.toolName}>{tool.name}</h2>
                  <p className={styles.toolDesc}>{tool.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.openCta}>Open Tool &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔎</div>
            <h3>No tools found matching &quot;{search}&quot;</h3>
            <p>Try searching for a different term or browse our categories above.</p>
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
