"use client";

import { useState } from "react";
import styles from "../legal.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/smrityku@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[ToolNest Contact] ${formData.subject} - from ${formData.name}`,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:smrityku@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:smrityku@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "var(--space-6)",
          background: "var(--success-bg)",
          border: "1px solid var(--success)",
          borderRadius: "var(--radius-lg)",
          color: "var(--success)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
          ✓ Message Sent!
        </h2>
        <p style={{ color: "var(--text-primary)" }}>
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          className="btn btn-sm"
          style={{ marginTop: "var(--space-4)" }}
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              subject: "General Inquiry",
              message: "",
            });
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          type="text"
          className="input"
          required
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-email">Your Email</label>
        <input
          id="contact-email"
          type="email"
          className="input"
          required
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-subject">Topic</label>
        <select
          id="contact-subject"
          className="select"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Suggest a Tool">Suggest a Tool</option>
          <option value="Report a Bug">Report a Bug</option>
          <option value="Feedback">General Feedback</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="textarea"
          required
          rows={6}
          placeholder="Type your message, bug report, or feature suggestion here..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        style={{ alignSelf: "flex-start" }}
      >
        {loading ? "Sending..." : "✉️ Send Message"}
      </button>
    </form>
  );
}
