/**
 * Central site configuration and canonical URL generator.
 * Allows easy switching to custom production domains without hardcoded URLs across the codebase.
 */

export const SITE_CONFIG = {
  name: "ToolNest",
  tagline: "Free Online Developer & Utility Tools",
  description:
    "Fast, free, privacy-first developer and utility tools that run 100% locally in your browser. Format JSON & SQL, encode Base64, decode JWTs, generate UUIDs, calculate hashes, and more.",
  defaultBaseUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://toolnest.smrityku.workers.dev",
  author: "ToolNest Maintainers",
  contactEmail: "smrityku@gmail.com",
};

/**
 * Returns the base site URL without trailing slash.
 */
export function getSiteUrl(): string {
  const url = SITE_CONFIG.defaultBaseUrl.trim();
  return url.replace(/\/+$/, "");
}

/**
 * Generates a clean, normalized, self-referencing canonical URL.
 * Enforces HTTPS, removes query params/hash, strips redundant slashes, and appends a trailing slash for directories while leaving file extensions clean.
 */
export function getCanonicalUrl(path = "/"): string {
  const baseUrl = getSiteUrl();
  const cleanPath = path.split("?")[0].split("#")[0].replace(/^\/+/, "");
  
  if (!cleanPath) {
    return `${baseUrl}/`;
  }

  // If path ends with a file extension (e.g. .xml, .txt, .json, .ico), do not append trailing slash
  if (/\.[a-zA-Z0-9]+$/.test(cleanPath)) {
    return `${baseUrl}/${cleanPath.replace(/\/+$/, "")}`;
  }
  
  const pathWithTrailing = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  return `${baseUrl}/${pathWithTrailing}`;
}

/**
 * Returns canonical URL for a tool page.
 */
export function getToolCanonicalUrl(category: string, toolSlug: string): string {
  return getCanonicalUrl(`${category}/${toolSlug}/`);
}

/**
 * Returns canonical URL for a guide page.
 */
export function getGuideCanonicalUrl(guideSlug: string): string {
  return getCanonicalUrl(`guides/${guideSlug}/`);
}
