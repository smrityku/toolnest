import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "65vh",
        padding: "var(--space-12) var(--space-6)",
      }}
    >
      <div
        style={{
          fontSize: "var(--text-4xl)",
          marginBottom: "var(--space-4)",
        }}
      >
        🔍
      </div>
      <h1
        style={{
          fontSize: "var(--text-3xl)",
          fontWeight: 800,
          marginBottom: "var(--space-2)",
          letterSpacing: "-0.02em",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontSize: "var(--text-base)",
          color: "var(--text-secondary)",
          maxWidth: "500px",
          marginBottom: "var(--space-8)",
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        The page or tool you are looking for does not exist, has been moved, or
        has a typo in the URL.
      </p>

      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn btn-primary">
          ⚡ Back to Home
        </Link>
        <Link href="/tools/" className="btn">
          🛠️ Browse All Tools
        </Link>
        <Link href="/guides/" className="btn">
          📚 Browse Guides
        </Link>
      </div>
    </div>
  );
}
