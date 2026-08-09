"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/types/tool";
import styles from "./FAQ.module.css";

interface FAQProps {
  items: FAQType[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${openIndex === index ? styles.itemOpen : ""}`}
          >
            <button
              className={styles.question}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              id={`faq-question-${index}`}
            >
              <span>{item.question}</span>
              <span className={styles.chevron}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                className={styles.answer}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
