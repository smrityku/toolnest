import Link from "next/link";
import { tools } from "@/registry/tools";

export default function NotFound() {
  const popularTools = [
    { slug: "json-formatter", name: "JSON Formatter", category: "json-tools", icon: "{ }" },
    { slug: "jwt-decoder", name: "JWT Decoder", category: "encoding-tools", icon: "🔐" },
    { slug: "base64-encoder", name: "Base64 Encoder", category: "encoding-tools", icon: "📦" },
    { slug: "uuid-generator", name: "UUID Generator", category: "generators", icon: "⚡" },
    { slug: "sql-formatter", name: "SQL Formatter", category: "web-tools", icon: "🗄️" },
    { slug: "hash-generator", name: "Hash Generator", category: "generators", icon: "#" },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "var(--space-12) var(--space-6)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "var(--text-4xl)", marginBottom: "var(--space-3)" }}>
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
        Page Not Found (404)
      </h1>
      <p
        style={{
          fontSize: "var(--text-base)",
          color: "var(--text-secondary)",
          maxWidth: "520px",
          margin: "0 auto var(--space-8)",
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        The page, tool, or guide you are looking for does not exist or may have been moved.
        Explore our popular developer utilities below or jump back to the homepage.
      </p>

      <div
        style={{
          display: "flex",
          gap: "var(--space-3)",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "var(--space-12)",
        }}
      >
        <Link href="/" className="btn btn-primary">
          ⚡ Home
        </Link>
        <Link href="/tools/" className="btn">
          🛠️ Browse All {tools.length} Tools
        </Link>
        <Link href="/guides/" className="btn">
          📚 Technical Guides
        </Link>
      </div>

      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-primary)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-6)",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: 700,
            marginBottom: "var(--space-4)",
            color: "var(--text-primary)",
          }}
        >
          Popular Developer Tools
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "var(--space-3)",
          }}
        >
          {popularTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.category}/${tool.slug}/`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-4)",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--text-primary)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                transition: "border-color var(--transition-fast)",
              }}
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
