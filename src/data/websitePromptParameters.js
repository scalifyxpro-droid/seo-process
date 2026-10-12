// 300 Mandatory Website Prompt Parameters & Architectural Directives
// To be added into AI prompts (Claude / ChatGPT / Gemini) when generating websites
// Ensures the generated website strictly adheres to 2026 Website SEO, AEO, GEO, LLMO, Speed & UX standards.

export const PARAMETER_CATEGORIES = [
  { id: "all", name: "All 300 Parameters", count: 300, icon: "⚡" },
  { id: "architecture", name: "1. Site Architecture & URLs (1–30)", count: 30, icon: "🏛️" },
  { id: "html_semantics", name: "2. Semantic HTML & Headings (31–60)", count: 30, icon: "🏷️" },
  { id: "web_vitals", name: "3. Core Web Vitals & Speed (61–90)", count: 30, icon: "🚀" },
  { id: "aeo_snippets", name: "4. AEO & Direct Answers (91–120)", count: 30, icon: "🤖" },
  { id: "geo_llmo", name: "5. GEO & LLM Citations (121–150)", count: 30, icon: "🧠" },
  { id: "schema_entities", name: "6. JSON-LD & Entity Graphs (151–180)", count: 30, icon: "🕸️" },
  { id: "content_eeat", name: "7. Content Depth & E-E-A-T (181–210)", count: 30, icon: "✍️" },
  { id: "internal_links", name: "8. Internal Linking & Silos (211–240)", count: 30, icon: "🔗" },
  { id: "cro_mobile", name: "9. CRO & Mobile UX (241–270)", count: 30, icon: "📱" },
  { id: "technical_crawl", name: "10. Crawl Budget & Indexing (271–300)", count: 30, icon: "🛡️" }
];

export const WEBSITE_PROMPT_PARAMETERS = [
  // ==========================================
  // GROUP 1: SITE ARCHITECTURE & URL TAXONOMY (1–30)
  // ==========================================
  {
    id: 1,
    category: "architecture",
    tag: "URL Slug",
    name: "Strict Lowercase Hyphenated Slugs",
    directive: "Generate all URLs in strictly lowercase characters separated by single hyphens only (e.g., `/emergency-roof-repair`). Never allow underscores, spaces, or camelCase in URLs.",
    importance: "Mandatory"
  },
  {
    id: 2,
    category: "architecture",
    tag: "Trailing Slash",
    name: "Enforced Uniform Trailing Slash Policy",
    directive: "Configure the router and server to enforce a single canonical trailing slash convention (strictly non-trailing slash `/services` or strictly trailing `/services/`). Enforce immediate 301 redirects for the alternate variation.",
    importance: "Critical"
  },
  {
    id: 3,
    category: "architecture",
    tag: "URL Depth",
    name: "Maximum 3-Click Crawl Depth",
    directive: "Structure website taxonomy such that any published page is reachable within a maximum of 3 clicks from the homepage root (`/category/sub-category/target-page`).",
    importance: "Mandatory"
  },
  {
    id: 4,
    category: "architecture",
    tag: "Clean Slugs",
    name: "Zero Stop Words in Primary URLs",
    directive: "Strip non-essential stop words (the, of, and, in, a, for) from core target URLs to maximize keyword density and readability (e.g., use `/seo-services` instead of `/the-best-seo-services-in-the-world`).",
    importance: "High"
  },
  {
    id: 5,
    category: "architecture",
    tag: "Parent-Child Silo",
    name: "Strict Hierarchical Folder Routing",
    directive: "Group child content under parent category folders (e.g., `/services/web-development` and `/services/mobile-development`), never creating unorganized flat root sprawl.",
    importance: "Mandatory"
  },
  {
    id: 6,
    category: "architecture",
    tag: "Canonical Tags",
    name: "Self-Referencing Canonical Tags on Every Page",
    directive: "Add an explicit `<link rel='canonical' href='https://domain.com/canonical-url' />` in the `<head>` of every single HTML page, pointing strictly to the HTTPS preferred variation.",
    importance: "Critical"
  },
  {
    id: 7,
    category: "architecture",
    tag: "WWW Normalization",
    name: "301 Permanent Protocol & Hostname Normalization",
    directive: "Enforce a permanent 301 server redirect from `http://` to `https://` and from `www.` to non-`www.` (or vice-versa) before HTML response streaming begins.",
    importance: "Critical"
  },
  {
    id: 8,
    category: "architecture",
    tag: "Breadcrumb Hierarchy",
    name: "Visible Semantic Breadcrumbs on Subpages",
    directive: "Render a visible, clickable breadcrumb trail at the top of every internal page (`Home > Services > Specific Service`) wrapped in semantic `<nav aria-label='Breadcrumb'>`.",
    importance: "High"
  },
  {
    id: 9,
    category: "architecture",
    tag: "HTML Sitemap",
    name: "Dedicated Footer HTML Sitemap",
    directive: "Include a human-navigable `/sitemap` page linked in the website footer that categorizes all money pages, pillar articles, and service hubs.",
    importance: "High"
  },
  {
    id: 10,
    category: "architecture",
    tag: "Query Parameters",
    name: "Clean Canonical Filtering Without URL Duplication",
    directive: "For filterable views or search sorting, use URL search parameters (`?sort=price`) while ensuring the canonical tag points back to the clean, unfiltered base URL.",
    importance: "Critical"
  },
  {
    id: 11,
    category: "architecture",
    tag: "Pagination",
    name: "SEO-Compliant Clean Numeric Pagination",
    directive: "Implement clear server-side pagination URLs (`/blog?page=2`) with unique titles (`Page 2 of Blog`), avoiding infinite scrolling that traps search engine crawlers.",
    importance: "Mandatory"
  },
  {
    id: 12,
    category: "architecture",
    tag: "Pillar Clusters",
    name: "Topical Pillar and Cluster Architecture",
    directive: "Structure related sub-topics into distinct clusters where 5–10 child articles link up to a master comprehensive pillar guide and cross-link laterally to sibling articles.",
    importance: "Mandatory"
  },
  {
    id: 13,
    category: "architecture",
    tag: "Navigation Cap",
    name: "Streamlined Header Navigation Under 10 Items",
    directive: "Limit the primary header navigation to 7–9 high-priority macro categories to concentrate PageRank flow rather than diluting equity into 100+ dropdown links.",
    importance: "High"
  },
  {
    id: 14,
    category: "architecture",
    tag: "Utility Footer",
    name: "Separation of Utility Links to Footer",
    directive: "Place low-commercial legal and administrative pages (Privacy Policy, Terms of Service, Careers, Disclaimer) exclusively in the footer to preserve main navigation equity.",
    importance: "High"
  },
  {
    id: 15,
    category: "architecture",
    tag: "Language Tags",
    name: "Accurate Document Language Declaration",
    directive: "Always include the exact document language attribute on the root tag (e.g., `<html lang='en'>` or `<html lang='en-US'>`).",
    importance: "Mandatory"
  },
  {
    id: 16,
    category: "architecture",
    tag: "Favicon Suite",
    name: "Complete High-DPI Favicon & Web Manifest Suite",
    directive: "Provide modern SVG favicon with PNG fallbacks (`16x16`, `32x32`, `apple-touch-icon.png`) and a valid `site.webmanifest` for crisp Google search result icons.",
    importance: "High"
  },
  {
    id: 17,
    category: "architecture",
    tag: "404 Page",
    name: "Custom Helpful 404 Error Page with Search Bar",
    directive: "Build a custom, branded 404 page that returns a true HTTP 404 status code (never a 200 or soft 404), equipped with an instant search bar and links to top 5 popular pages.",
    importance: "Mandatory"
  },
  {
    id: 18,
    category: "architecture",
    tag: "Sitemap Discovery",
    name: "Auto-Generated XML Sitemap at `/sitemap.xml`",
    directive: "Automatically output an XML sitemap complying with the sitemaps.org protocol at `/sitemap.xml`, containing `<loc>`, `<lastmod>`, and `<changefreq>` tags.",
    importance: "Critical"
  },
  {
    id: 19,
    category: "architecture",
    tag: "Sitemap Index",
    name: "Multi-Sitemap Index Structure for Large Sites",
    directive: "For websites exceeding 1,000 pages, generate a sitemap index (`sitemap-index.xml`) splitting URLs into `sitemap-pages.xml`, `sitemap-services.xml`, and `sitemap-blog.xml`.",
    importance: "High"
  },
  {
    id: 20,
    category: "architecture",
    tag: "Robots Sitemap Pointer",
    name: "Explicit Sitemap Reference in Robots.txt",
    directive: "Always append `Sitemap: https://yourdomain.com/sitemap.xml` at the bottom of the `/robots.txt` file for automatic bot discovery.",
    importance: "Mandatory"
  },
  {
    id: 21,
    category: "architecture",
    tag: "No Orphan Pages",
    name: "Zero Orphan Page Architecture",
    directive: "Ensure that every newly published page has at least two inbound internal links from established, indexed contextual pages on the site.",
    importance: "Mandatory"
  },
  {
    id: 22,
    category: "architecture",
    tag: "No Attachment Pages",
    name: "Disable Image and Media Attachment Pages",
    directive: "Prevent the CMS from generating thin attachment URLs for uploaded images, redirecting any media URLs directly to the parent article.",
    importance: "High"
  },
  {
    id: 23,
    category: "architecture",
    tag: "Author Archives",
    name: "Rich E-E-A-T Author Archive Architecture",
    directive: "Every author byline must link to an author profile page (`/author/name`) detailing credentials, certifications, professional bio, and published articles.",
    importance: "Critical"
  },
  {
    id: 24,
    category: "architecture",
    tag: "Date in Slugs",
    name: "Evergreen URLs Free of Dates or Years",
    directive: "Never include publishing years or months in URL slugs (e.g., use `/best-seo-tools` instead of `/2024/05/best-seo-tools`) so content remains evergreen without 301 redirects.",
    importance: "High"
  },
  {
    id: 25,
    category: "architecture",
    tag: "Subdomain Avoidance",
    name: "Subdirectories Over Subdomains for Content",
    directive: "Host blogs, resources, and programmatic pages in subdirectories (`domain.com/blog`) rather than subdomains (`blog.domain.com`) to pool domain authority.",
    importance: "Critical"
  },
  {
    id: 26,
    category: "architecture",
    tag: "UTF-8 Charset",
    name: "Standard UTF-8 Charset Declaration",
    directive: "Place `<meta charset='UTF-8' />` as the very first element inside `<head>` to avoid character encoding misinterpretations.",
    importance: "Mandatory"
  },
  {
    id: 27,
    category: "architecture",
    tag: "Viewport Meta",
    name: "Responsive Mobile Viewport Meta Tag",
    directive: "Include `<meta name='viewport' content='width=device-width, initial-scale=1' />` on all templates to ensure proper mobile rendering.",
    importance: "Mandatory"
  },
  {
    id: 28,
    category: "architecture",
    tag: "Dynamic Rendering",
    name: "Server-Side Pre-Rendering for Dynamic Components",
    directive: "Use Server Components (RSC) or SSG so HTML is fully formed upon initial response, eliminating reliance on client-side JS hydration for crawler discovery.",
    importance: "Critical"
  },
  {
    id: 29,
    category: "architecture",
    tag: "Hreflang Tags",
    name: "Clean Hreflang Tag Implementation for Multi-Locale",
    directive: "When serving multiple languages, output reciprocal `<link rel='alternate' hreflang='xx' href='...' />` tags and an `x-default` fallback.",
    importance: "High"
  },
  {
    id: 30,
    category: "architecture",
    tag: "No Staging Index",
    name: "Staging and Preview Environment Disallow",
    directive: "Always set `X-Robots-Tag: noindex, nofollow` on non-production, staging, and vercel preview deployments.",
    importance: "Critical"
  },

  // ==========================================
  // GROUP 2: SEMANTIC HTML & HEADING HIERARCHY (31–60)
  // ==========================================
  {
    id: 31,
    category: "html_semantics",
    tag: "Single H1",
    name: "Exactly One H1 Tag Per Page",
    directive: "Ensure each page contains strictly one `<h1>` element that encapsulates the primary target keyword topic in natural phrasing.",
    importance: "Mandatory"
  },
  {
    id: 32,
    category: "html_semantics",
    tag: "H1 Matching Title",
    name: "Semantic Alignment Between H1 and Meta Title",
    directive: "Keep the H1 headline closely aligned with the `<title>` tag in intent and keyword positioning while allowing natural conversational phrasing.",
    importance: "High"
  },
  {
    id: 33,
    category: "html_semantics",
    tag: "Heading Sequence",
    name: "No Skipping Heading Levels",
    directive: "Follow strict descending heading order: `<h1>` -> `<h2>` -> `<h3>` -> `<h4>`. Never jump from an `<h1>` directly to an `<h3>` without an intervening `<h2>`.",
    importance: "Mandatory"
  },
  {
    id: 34,
    category: "html_semantics",
    tag: "Semantic Sections",
    name: "Semantic HTML5 Structural Tags",
    directive: "Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` rather than generic `<div>` wrappers for major page landmarks.",
    importance: "Mandatory"
  },
  {
    id: 35,
    category: "html_semantics",
    tag: "Main Landmark",
    name: "Single `<main>` Element Landmark",
    directive: "Enclose all unique page content inside a single `<main id='main-content'>` landmark, excluding global headers and footers.",
    importance: "Mandatory"
  },
  {
    id: 36,
    category: "html_semantics",
    tag: "Skip to Content",
    name: "Accessible Skip-To-Content Navigation Link",
    directive: "Place an accessible `<a href='#main-content' class='skip-link'>Skip to content</a>` link as the very first body child, visible upon keyboard tab focus.",
    importance: "High"
  },
  {
    id: 37,
    category: "html_semantics",
    tag: "Question Headings",
    name: "H2 and H3 Formatted as Search Question Queries",
    directive: "Format at least 30% of subheadings as direct natural questions (e.g., `<h2>How Much Does Commercial Roof Replacement Cost?</h2>`) to target Google Featured Snippets.",
    importance: "Critical"
  },
  {
    id: 38,
    category: "html_semantics",
    tag: "List Elements",
    name: "Semantic Ordered & Unordered Lists",
    directive: "Render step-by-step procedures in `<ol>` and feature comparisons in `<ul>`, never using plain `<p>` lines with bullet symbols.",
    importance: "High"
  },
  {
    id: 39,
    category: "html_semantics",
    tag: "Data Tables",
    name: "Semantic Data Tables with `<thead>` and `<th>`",
    directive: "Build comparison matrices and pricing tables using semantic `<table>`, `<thead>`, `<tbody>`, and `<th scope='col'>` for AI overview table extraction.",
    importance: "High"
  },
  {
    id: 40,
    category: "html_semantics",
    tag: "Image Alt Tags",
    name: "Descriptive Contextual Alt Text on All Images",
    directive: "Provide accurate, descriptive `alt` attributes on all content images describing the scene naturally with relevant entities; use `alt=''` on purely decorative icons.",
    importance: "Mandatory"
  },
  {
    id: 41,
    category: "html_semantics",
    tag: "Image Dimensions",
    name: "Explicit Width and Height on Image Elements",
    directive: "Always specify explicit `width` and `height` attributes (or CSS aspect-ratio) on all `<img>` tags to eliminate layout shifts (CLS).",
    importance: "Critical"
  },
  {
    id: 42,
    category: "html_semantics",
    tag: "Figure & Caption",
    name: "Semantic `<figure>` and `<figcaption>` for Visuals",
    directive: "Enclose charts, diagrams, and illustrative screenshots within `<figure>` accompanied by an informative `<figcaption>`.",
    importance: "High"
  },
  {
    id: 43,
    category: "html_semantics",
    tag: "Blockquote & Cite",
    name: "Semantic `<blockquote>` with `<cite>` for Quotes",
    directive: "Format client testimonials, expert opinions, and industry citations inside `<blockquote>` with a semantic `<cite>` linking to verifiable sources.",
    importance: "High"
  },
  {
    id: 44,
    category: "html_semantics",
    tag: "Time Tag",
    name: "Semantic `<time>` Tag with ISO Datetime",
    directive: "Mark publication and modification dates with `<time datetime='2026-10-15T08:00:00Z'>October 15, 2026</time>` for accurate crawler timestamping.",
    importance: "High"
  },
  {
    id: 45,
    category: "html_semantics",
    tag: "Address Tag",
    name: "Semantic `<address>` Tag for Business Coordinates",
    directive: "Enclose company physical address, support email, and telephone number within `<address>` inside the website footer.",
    importance: "High"
  },
  {
    id: 46,
    category: "html_semantics",
    tag: "Button vs Link",
    name: "Strict Distinction Between `<button>` and `<a>`",
    directive: "Use `<a>` strictly for navigation transitions between URLs, and `<button>` for in-page actions or form submissions; never use `<a href='#'>` as a button.",
    importance: "Mandatory"
  },
  {
    id: 47,
    category: "html_semantics",
    tag: "Form Labels",
    name: "Explicit `<label for='id'>` on All Form Inputs",
    directive: "Every form input, select, and textarea must be explicitly bound to a visible `<label>` element matching its unique `id`.",
    importance: "Mandatory"
  },
  {
    id: 48,
    category: "html_semantics",
    tag: "ARIA Landmarks",
    name: "Supplementary ARIA Roles for Accessibility",
    directive: "Enhance accessibility with `role='search'` on search forms, `aria-expanded` on accordion FAQs, and `aria-current='page'` on active navigation links.",
    importance: "High"
  },
  {
    id: 49,
    category: "html_semantics",
    tag: "Details & Summary",
    name: "Native `<details>` and `<summary>` for Accordion FAQs",
    directive: "Implement expandable FAQ sections using native HTML `<details>` and `<summary>` tags, allowing search bots to crawl the answer text without JavaScript.",
    importance: "Critical"
  },
  {
    id: 50,
    category: "html_semantics",
    tag: "Strong vs B",
    name: "Semantic `<strong>` and `<em>` for Key Entities",
    directive: "Use `<strong>` to emphasize critical definitions and core entities, signaling topical importance over purely stylistic `<b>` tags.",
    importance: "High"
  },
  {
    id: 51,
    category: "html_semantics",
    tag: "Code Tags",
    name: "Semantic `<code>` and `<pre>` for Technical Snippets",
    directive: "Wrap inline code terms in `<code>` and code blocks in `<pre><code>` with proper language attributes to facilitate syntax highlighting and search parsing.",
    importance: "High"
  },
  {
    id: 52,
    category: "html_semantics",
    tag: "Definition Lists",
    name: "Semantic `<dl>`, `<dt>`, and `<dd>` for Glossaries",
    directive: "Format terminology definitions and key-value specs using definition list markup (`<dl> <dt>Term</dt> <dd>Definition</dd> </dl>`).",
    importance: "High"
  },
  {
    id: 53,
    category: "html_semantics",
    tag: "Meta Title Length",
    name: "Meta Title Character Budget (50–60 Chars)",
    directive: "Craft `<title>` tags between 50 and 60 characters (under 580 pixels) with the primary keyword near the beginning, followed by brand separator (`| Brand`).",
    importance: "Mandatory"
  },
  {
    id: 54,
    category: "html_semantics",
    tag: "Meta Description",
    name: "High-CTR Meta Description (140–160 Chars)",
    directive: "Write compelling meta descriptions between 140 and 155 characters featuring primary keyword, a clear benefit, and an action-oriented call to action.",
    importance: "Mandatory"
  },
  {
    id: 55,
    category: "html_semantics",
    tag: "Open Graph Tags",
    name: "Complete Open Graph Protocol Meta Tags",
    directive: "Include `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, and `og:site_name` on all indexable pages for social and messenger previews.",
    importance: "Mandatory"
  },
  {
    id: 56,
    category: "html_semantics",
    tag: "Twitter Cards",
    name: "Twitter Card Meta Protocol Tags",
    directive: "Provide `twitter:card` set to `summary_large_image`, alongside `twitter:title`, `twitter:description`, and `twitter:image`.",
    importance: "High"
  },
  {
    id: 57,
    category: "html_semantics",
    tag: "OG Image Specs",
    name: "High-Resolution 1200x630px Open Graph Images",
    directive: "Use a dedicated 1200x630 pixel WebP/PNG image for each template with high visual contrast and branded typography.",
    importance: "High"
  },
  {
    id: 58,
    category: "html_semantics",
    tag: "Robots Meta Tag",
    name: "Explicit Default Robots Meta Tag",
    directive: "Include `<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />` on all production pages.",
    importance: "Critical"
  },
  {
    id: 59,
    category: "html_semantics",
    tag: "Anchor Text",
    name: "Meaningful Anchor Text Without 'Click Here'",
    directive: "Never use generic anchor text like 'click here' or 'read more'; write descriptive anchor text indicating the destination topic (e.g., 'explore our emergency plumbing services').",
    importance: "Mandatory"
  },
  {
    id: 60,
    category: "html_semantics",
    tag: "No Broken Links",
    name: "Automated 0-Broken-Links Verification",
    directive: "Ensure all internal and outbound links return HTTP 200 status codes with zero broken 404 links across the entire DOM.",
    importance: "Critical"
  },

  // ==========================================
  // GROUP 3: CORE WEB VITALS & FRONTEND PERFORMANCE (61–90)
  // ==========================================
  {
    id: 61,
    category: "web_vitals",
    tag: "LCP Target",
    name: "Largest Contentful Paint (LCP) Under 1.8s",
    directive: "Ensure the largest content element (hero image or primary headline) renders in under 1.8 seconds on standard 4G mobile emulation.",
    importance: "Critical"
  },
  {
    id: 62,
    category: "web_vitals",
    tag: "CLS Target",
    name: "Cumulative Layout Shift (CLS) Under 0.05",
    directive: "Maintain a cumulative layout shift score below 0.05 by reserving layout space for images, ads, dynamic embeds, and web fonts.",
    importance: "Critical"
  },
  {
    id: 63,
    category: "web_vitals",
    tag: "INP Target",
    name: "Interaction to Next Paint (INP) Under 150ms",
    directive: "Keep UI interaction responsiveness under 150ms by breaking long JavaScript tasks (>50ms) using `requestAnimationFrame` or `scheduler.yield()`.",
    importance: "Critical"
  },
  {
    id: 64,
    category: "web_vitals",
    tag: "Hero Preload",
    name: "Preload Largest Hero Image in Head",
    directive: "Preload the primary above-the-fold hero image with `<link rel='preload' as='image' href='hero.webp' fetchpriority='high' />`.",
    importance: "Mandatory"
  },
  {
    id: 65,
    category: "web_vitals",
    tag: "Fetchpriority",
    name: "Use `fetchpriority='high'` on Hero Media",
    directive: "Set `fetchpriority='high'` directly on the hero `<img>` tag and ensure it does NOT have `loading='lazy'`.",
    importance: "Mandatory"
  },
  {
    id: 66,
    category: "web_vitals",
    tag: "Lazy Loading",
    name: "Native `loading='lazy'` on Below-the-Fold Images",
    directive: "Apply native `loading='lazy'` and `decoding='async'` to all images appearing below the initial mobile viewport.",
    importance: "Mandatory"
  },
  {
    id: 67,
    category: "web_vitals",
    tag: "WebP & AVIF",
    name: "Modern Next-Gen Image Formats (AVIF & WebP)",
    directive: "Serve all photographic imagery in modern AVIF or WebP format with automated responsive sizing via `<picture>` or Next.js `<Image />`.",
    importance: "Critical"
  },
  {
    id: 68,
    category: "web_vitals",
    tag: "Font Optimization",
    name: "Self-Hosted Local WOFF2 Web Fonts",
    directive: "Self-host all web fonts in modern WOFF2 format locally rather than calling external font CDNs, eliminating third-party DNS latency.",
    importance: "High"
  },
  {
    id: 69,
    category: "web_vitals",
    tag: "Font Display",
    name: "Enforce `font-display: swap` in Typography",
    directive: "Set `font-display: swap` on all `@font-face` definitions to ensure immediate text readability during font download.",
    importance: "Mandatory"
  },
  {
    id: 70,
    category: "web_vitals",
    tag: "Preload Fonts",
    name: "Preload Key Primary Font Weights",
    directive: "Preload only the 1–2 essential font files used for the hero heading and body using `<link rel='preload' as='font' type='font/woff2' crossorigin />`.",
    importance: "High"
  },
  {
    id: 71,
    category: "web_vitals",
    tag: "Critical CSS",
    name: "Inline Critical Above-the-Fold CSS",
    directive: "Inline essential above-the-fold layout styles directly into a `<style>` block in `<head>`, deferring remaining non-critical styles.",
    importance: "High"
  },
  {
    id: 72,
    category: "web_vitals",
    tag: "Minification",
    name: "Automated HTML, CSS, and JS Minification",
    directive: "Strip all whitespace, comments, and unused code in production build pipelines to minimize transmitted byte volume.",
    importance: "Mandatory"
  },
  {
    id: 73,
    category: "web_vitals",
    tag: "Gzip & Brotli",
    name: "Brotli and Gzip HTTP Compression Enabled",
    directive: "Serve all text assets (HTML, CSS, JS, SVG, JSON) with Brotli (`br`) compression or Gzip enabled at the reverse proxy/edge.",
    importance: "Critical"
  },
  {
    id: 74,
    category: "web_vitals",
    tag: "Cache-Control",
    name: "Immutable 1-Year Cache Headers on Static Assets",
    directive: "Send `Cache-Control: public, max-age=31536000, immutable` for all content-hashed static files (images, JS bundles, CSS).",
    importance: "Mandatory"
  },
  {
    id: 75,
    category: "web_vitals",
    tag: "TTFB Target",
    name: "Time to First Byte (TTFB) Under 200ms",
    directive: "Ensure edge server response initiates within 200ms using edge caching or incremental static regeneration (ISR).",
    importance: "Critical"
  },
  {
    id: 76,
    category: "web_vitals",
    tag: "Zero Render-Blocking JS",
    name: "Zero Render-Blocking Scripts in `<head>`",
    directive: "Load all third-party scripts with `defer` or `async`, never placing synchronous `<script>` tags in `<head>`.",
    importance: "Critical"
  },
  {
    id: 77,
    category: "web_vitals",
    tag: "DNS Prefetch",
    name: "Preconnect & DNS-Prefetch for External CDNs",
    directive: "Declare `<link rel='preconnect' href='https://analytics.google.com'>` for essential third-party analytics APIs to accelerate handshakes.",
    importance: "High"
  },
  {
    id: 78,
    category: "web_vitals",
    tag: "DOM Size",
    name: "Shallow DOM Tree Under 800 Nodes",
    directive: "Keep total DOM tree size under 800 nodes and maximum nesting depth under 15 levels to preserve mobile rendering speed.",
    importance: "High"
  },
  {
    id: 79,
    category: "web_vitals",
    tag: "CSS Containment",
    name: "Use `content-visibility: auto` on Long Articles",
    directive: "Apply `content-visibility: auto` with `contain-intrinsic-size` on lower sections of long-form articles to skip rendering off-screen DOM.",
    importance: "High"
  },
  {
    id: 80,
    category: "web_vitals",
    tag: "SVG Optimization",
    name: "Inline & Cleaned SVGs Stripped of Bloat",
    directive: "Pass all SVGs through SVGO to strip editor metadata, XML declarations, and unused clipPaths before embedding.",
    importance: "High"
  },
  {
    id: 81,
    category: "web_vitals",
    tag: "CSS GPU Animation",
    name: "Hardware-Accelerated CSS Transitions",
    directive: "Animate exclusively `transform` and `opacity` properties using CSS transitions to prevent CPU reflows and frame drops.",
    importance: "High"
  },
  {
    id: 82,
    category: "web_vitals",
    tag: "Third-Party Script Diet",
    name: "Third-Party JavaScript Budget Under 50KB",
    directive: "Strictly limit non-essential tracking scripts and embed widgets; load analytics lazily after the user's initial scroll interaction.",
    importance: "Critical"
  },
  {
    id: 83,
    category: "web_vitals",
    tag: "Faceted Search Clean",
    name: "Client-Side Filter State Without Server Loops",
    directive: "Render product and blog filter state changes smoothly without reloading the entire page or triggering endless duplicate crawler hits.",
    importance: "High"
  },
  {
    id: 84,
    category: "web_vitals",
    tag: "Http/2 or Http/3",
    name: "HTTP/2 or HTTP/3 Multiplexing Enabled",
    directive: "Serve all traffic over modern HTTP/2 or HTTP/3 to eliminate head-of-line blocking and allow parallel multiplexed downloads.",
    importance: "Mandatory"
  },
  {
    id: 85,
    category: "web_vitals",
    tag: "Responsive Picture",
    name: "Responsive `<picture>` with Media Queries",
    directive: "Use `<picture>` with srcset breakpoints (`320w`, `768w`, `1200w`) to avoid transmitting desktop 4K images to mobile screens.",
    importance: "Mandatory"
  },
  {
    id: 86,
    category: "web_vitals",
    tag: "Video Optimization",
    name: "Self-Hosted Compressed MP4/WebM Without Autoplay Audio",
    directive: "Encode background video loops in WebM/H.264, muted with `playsinline` and `preload='metadata'` to prevent bandwidth drain.",
    importance: "High"
  },
  {
    id: 87,
    category: "web_vitals",
    tag: "Fast Mobile Scrolling",
    name: "Passive Event Listeners on Scroll Handlers",
    directive: "Ensure all touch and scroll listeners are registered with `{ passive: true }` so mobile scrolling remains smooth at 60fps.",
    importance: "High"
  },
  {
    id: 88,
    category: "web_vitals",
    tag: "Reduced Motion",
    name: "Respect `prefers-reduced-motion` Media Query",
    directive: "Wrap all decorative animations in `@media (prefers-reduced-motion: reduce)` to disable motion for users with vestibular sensitivity.",
    importance: "High"
  },
  {
    id: 89,
    category: "web_vitals",
    tag: "Service Worker",
    name: "Smart Offline Service Worker for Instant Nav",
    directive: "Implement a lightweight service worker to precache core CSS/JS assets and support offline resilience where applicable.",
    importance: "High"
  },
  {
    id: 90,
    category: "web_vitals",
    tag: "Lighthouse Score",
    name: "Target Lighthouse Performance Score 95+",
    directive: "Design code and asset pipeline to consistently achieve a 95+ Performance rating on Google Lighthouse mobile audits.",
    importance: "Critical"
  },

  // ==========================================
  // GROUP 4: ANSWER ENGINE OPTIMIZATION (AEO) & DIRECT ANSWERS (91–120)
  // ==========================================
  {
    id: 91,
    category: "aeo_snippets",
    tag: "40-Word Answer Box",
    name: "Direct 40-Word Answer Box Below Core H2",
    directive: "Directly underneath primary question H2s, place a concise 35–45 word direct answer summarizing the core fact before diving into elaboration.",
    importance: "Critical"
  },
  {
    id: 92,
    category: "aeo_snippets",
    tag: "Snippet Inversion",
    name: "Inverted Pyramid Writing Structure",
    directive: "Place the conclusion and primary solution in the very first sentence of each section, followed by nuances, data, and supporting arguments.",
    importance: "Mandatory"
  },
  {
    id: 93,
    category: "aeo_snippets",
    tag: "PAA Targets",
    name: "Incorporate 'People Also Ask' Questions Verbatim",
    directive: "Extract the exact phrasing of 4–6 top Google 'People Also Ask' queries and include them as explicit `<h3>` subheadings on the page.",
    importance: "Critical"
  },
  {
    id: 94,
    category: "aeo_snippets",
    tag: "FAQ Accordion",
    name: "On-Page FAQ Section with Structured Answers",
    directive: "Add a dedicated FAQ section with 5–8 practical questions and definitive answers at the bottom of every commercial landing page.",
    importance: "Mandatory"
  },
  {
    id: 95,
    category: "aeo_snippets",
    tag: "Definition Header",
    name: "Standard 'What Is [X]?' Definition Block",
    directive: "Structure educational guides with a clear 'What Is [Topic]?' heading followed by an authoritative definition sentence.",
    importance: "High"
  },
  {
    id: 96,
    category: "aeo_snippets",
    tag: "Numbered Steps",
    name: "Numbered Step-by-Step 'How-To' Snippets",
    directive: "Format processes as numbered steps (`Step 1: Inspect`, `Step 2: Clean`) with bolded step titles for Google list snippet capture.",
    importance: "Critical"
  },
  {
    id: 97,
    category: "aeo_snippets",
    tag: "Comparison Matrix",
    name: "Side-by-Side Feature & Cost Matrix Table",
    directive: "Present option trade-offs in a structured comparison table with clear headings (`Option`, `Pros`, `Cons`, `Average Cost`).",
    importance: "High"
  },
  {
    id: 98,
    category: "aeo_snippets",
    tag: "Bullet Summary",
    name: "'Key Takeaways' Bullet Summary at Top of Page",
    directive: "Include a 3–4 bullet 'Key Takeaways' box directly beneath the page introduction for immediate AI and reader scanning.",
    importance: "High"
  },
  {
    id: 99,
    category: "aeo_snippets",
    tag: "Pricing Ranges",
    name: "Explicit Price Ranges and Estimated Costs",
    directive: "Include transparent estimated pricing ranges (e.g., '$1,500 – $3,500 on average') to capture commercial pricing answer boxes.",
    importance: "Critical"
  },
  {
    id: 100,
    category: "aeo_snippets",
    tag: "Timeline Expectations",
    name: "Specific Timeframes and Durations",
    directive: "Provide specific timeframe figures (e.g., 'typically completed in 2 to 4 business days') answering user turnaround queries.",
    importance: "High"
  },
  {
    id: 101,
    category: "aeo_snippets",
    tag: "Pros & Cons Card",
    name: "Distinct Pros and Cons Layout Component",
    directive: "Render balanced advantages and disadvantages using visually distinct green checkmark and red cross callouts.",
    importance: "High"
  },
  {
    id: 102,
    category: "aeo_snippets",
    tag: "Checklist Snippet",
    name: "Interactive / Actionable Pre-Service Checklist",
    directive: "Provide an actionable bullet checklist (e.g., 'What to Prepare Before Your Consultation') to satisfy procedural search intents.",
    importance: "High"
  },
  {
    id: 103,
    category: "aeo_snippets",
    tag: "Expert Verdict",
    name: "'Expert Verdict' Quotable Summary Box",
    directive: "Highlight a distinct 'Expert Verdict' quote from the lead specialist summarizing the recommended path forward.",
    importance: "High"
  },
  {
    id: 104,
    category: "aeo_snippets",
    tag: "Zero Fluff",
    name: "Zero Introductory Filler Sentences",
    directive: "Ban generic filler openers ('In today's fast-paced digital world', 'Have you ever wondered'); dive straight into the problem and answer.",
    importance: "Critical"
  },
  {
    id: 105,
    category: "aeo_snippets",
    tag: "Voice Search Tone",
    name: "Conversational Phrasing for Voice Search Queries",
    directive: "Optimize for voice queries by answering natural full-sentence spoken questions ('Can I wash my car after ceramic coating?').",
    importance: "High"
  },
  {
    id: 106,
    category: "aeo_snippets",
    tag: "Glossary Links",
    name: "Contextual Definition Tooltips or Glossary Links",
    directive: "Provide inline definitions for industry jargon or link to a dedicated `/glossary` page to establish deep topical authority.",
    importance: "High"
  },
  {
    id: 107,
    category: "aeo_snippets",
    tag: "Do's and Don'ts",
    name: "Side-by-Side 'Do's and Don'ts' Table",
    directive: "Format best practices as a comparative table of 'What To Do' versus 'Common Mistakes to Avoid'.",
    importance: "High"
  },
  {
    id: 108,
    category: "aeo_snippets",
    tag: "Calculation Formula",
    name: "Clear Explanatory Calculation Formula Box",
    directive: "When explaining financial or technical concepts, show the formula in an isolated callout box with a worked practical example.",
    importance: "High"
  },
  {
    id: 109,
    category: "aeo_snippets",
    tag: "Alternative Solutions",
    name: "Comprehensive 'Alternatives' Sub-Section",
    directive: "Dedicate a sub-section to valid alternatives and workarounds to capture searches for competitor replacements.",
    importance: "High"
  },
  {
    id: 110,
    category: "aeo_snippets",
    tag: "Criteria List",
    name: "'How to Choose' Decision Criteria Matrix",
    directive: "Provide a 5-point decision framework detailing what criteria customers should evaluate before hiring or buying.",
    importance: "High"
  },
  {
    id: 111,
    category: "aeo_snippets",
    tag: "Stat Callouts",
    name: "High-Contrast Numerical Data Callout Cards",
    directive: "Display key statistical metrics (e.g., '99.8% Uptime', 'Over 4,500 Completed Projects') in large typography callout cards.",
    importance: "High"
  },
  {
    id: 112,
    category: "aeo_snippets",
    tag: "Short Sentences",
    name: "Sentence Length Capped Under 25 Words",
    directive: "Keep average sentence length between 14 and 20 words to maximize readability score (Flesch-Kincaid Grade 7–8) for answer snippet extraction.",
    importance: "Mandatory"
  },
  {
    id: 113,
    category: "aeo_snippets",
    tag: "Paragraph Cap",
    name: "Paragraph Length Capped at 3 Sentences",
    directive: "Limit paragraphs to 2–3 sentences maximum, breaking dense walls of text into digestible, scannable units.",
    importance: "Mandatory"
  },
  {
    id: 114,
    category: "aeo_snippets",
    tag: "Lead Entity Placement",
    name: "Subject Entity Named in Opening 5 Words of Answers",
    directive: "Begin direct answers by naming the subject entity immediately (e.g., 'Commercial roof replacement involves...' rather than 'It involves...').",
    importance: "Critical"
  },
  {
    id: 115,
    category: "aeo_snippets",
    tag: "Quick Specs Card",
    name: "Top-of-Page 'At a Glance' Quick Specs Card",
    directive: "Feature a sidebar or header card summarizing duration, difficulty, cost, and prerequisites at a glance.",
    importance: "High"
  },
  {
    id: 116,
    category: "aeo_snippets",
    tag: "Safety Notes",
    name: "Distinct Regulatory / Safety Warning Callouts",
    directive: "Highlight important safety notices, legal disclosures, or licensing requirements in a standardized warning callout box.",
    importance: "High"
  },
  {
    id: 117,
    category: "aeo_snippets",
    tag: "Who This Is For",
    name: "'Who This Is For vs Who It Is NOT For' Section",
    directive: "Clearly define ideal customer qualification and disqualification to align user search intent perfectly.",
    importance: "High"
  },
  {
    id: 118,
    category: "aeo_snippets",
    tag: "FAQ Schema Linkage",
    name: "1-to-1 Match Between Visible FAQ and FAQ Schema",
    directive: "Ensure the questions and answers in JSON-LD FAQ schema mirror the visible on-page text verbatim to prevent Google search penalties.",
    importance: "Critical"
  },
  {
    id: 119,
    category: "aeo_snippets",
    tag: "Updated Year Badge",
    name: "Dynamic Current Year Reference in Headings",
    directive: "Include the current year dynamically in review, pricing, and benchmark guides (`Updated for 2026`) to signal freshness.",
    importance: "High"
  },
  {
    id: 120,
    category: "aeo_snippets",
    tag: "Table of Contents",
    name: "Sticky In-Page Table of Contents with Anchor Jump Links",
    directive: "Provide an automated Table of Contents with jump links to every H2/H3 for sitelinks generation in Google search.",
    importance: "Mandatory"
  },

  // ==========================================
  // GROUP 5: GENERATIVE ENGINE OPTIMIZATION (GEO) & LLM CITATIONS (121–150)
  // ==========================================
  {
    id: 121,
    category: "geo_llmo",
    tag: "Information Gain",
    name: "High Information Gain with Proprietary Insights",
    directive: "Include proprietary survey findings, original case benchmarks, or firsthand observations that cannot be found on generic competitor sites.",
    importance: "Critical"
  },
  {
    id: 122,
    category: "geo_llmo",
    tag: "Verifiable Facts",
    name: "Citable Factual Statements with Named Sources",
    directive: "Structure factual statements with explicit attribution (e.g., 'According to the 2026 National Association study...') so LLMs cite your site as an authority.",
    importance: "Critical"
  },
  {
    id: 123,
    category: "geo_llmo",
    tag: "Neutral Tone",
    name: "Objective, Encyclopedic Tone for LLM RAG Ingestion",
    directive: "Maintain an objective, factual, third-person perspective in informational sections, avoiding exaggerated marketing hyperbole.",
    importance: "High"
  },
  {
    id: 124,
    category: "geo_llmo",
    tag: "Named Entities",
    name: "Consistent Canonical Naming of Core Entities",
    directive: "Refer to products, methods, and organizations by their formal canonical names consistently rather than ambiguous pronouns.",
    importance: "Mandatory"
  },
  {
    id: 125,
    category: "geo_llmo",
    tag: "Author Credentials",
    name: "Explicit Author Credentials and Reviewer Bylines",
    directive: "Include author name, title, years of experience, and a 'Medically/Technically Reviewed By' byline with credentials.",
    importance: "Critical"
  },
  {
    id: 126,
    category: "geo_llmo",
    tag: "Wikidata Entity",
    name: "Explicit Linking to Wikidata & Wikipedia Entities",
    directive: "Link core concepts and technologies to their canonical Wikidata entity URIs in schema to ground the site within the global knowledge graph.",
    importance: "High"
  },
  {
    id: 127,
    category: "geo_llmo",
    tag: "Quote Worthy Snippets",
    name: "High-Quotability Executive Summary Sentences",
    directive: "Formulate standalone 1-sentence analytical conclusions suitable for direct quotation by Perplexity, ChatGPT, and Gemini.",
    importance: "High"
  },
  {
    id: 128,
    category: "geo_llmo",
    tag: "Case Study Data",
    name: "Real Measurable Metrics in Customer Case Studies",
    directive: "Detail client case studies with exact numbers (e.g., 'Reduced churn from 8.4% to 2.1% in 90 days') rather than vague success claims.",
    importance: "Critical"
  },
  {
    id: 129,
    category: "geo_llmo",
    tag: "Methodology Section",
    name: "Transparent 'How We Tested / Evaluated' Methodology",
    directive: "Add an explicit methodology section detailing evaluation criteria, scoring rubrics, and testing conditions for product reviews.",
    importance: "High"
  },
  {
    id: 130,
    category: "geo_llmo",
    tag: "Perplexity Citations",
    name: "Structured Answer Blocks Formatted for Perplexity",
    directive: "Format key conclusions in bulleted point-by-point syntheses designed for direct synthesis into Perplexity AI search answers.",
    importance: "Critical"
  },
  {
    id: 131,
    category: "geo_llmo",
    tag: "Original Media",
    name: "Original Real Photography and Custom Diagrams",
    directive: "Use genuine real-world team photos, on-site project captures, and custom branded diagrams instead of generic stock photos.",
    importance: "Mandatory"
  },
  {
    id: 132,
    category: "geo_llmo",
    tag: "Editorial Policy",
    name: "Published Editorial Independence & Ethics Policy",
    directive: "Link to a dedicated `/editorial-policy` page detailing review standards, fact-checking procedures, and affiliate disclosure.",
    importance: "High"
  },
  {
    id: 133,
    category: "geo_llmo",
    tag: "Last Updated Timestamp",
    name: "Prominent 'Last Updated' Date on Every Article",
    directive: "Display both 'Originally Published' and 'Last Fact-Checked & Updated on [Date]' prominently near the author byline.",
    importance: "Critical"
  },
  {
    id: 134,
    category: "geo_llmo",
    tag: "Disclaimers",
    name: "Clear Professional and Legal Disclaimers",
    directive: "Include explicit disclaimers for legal, medical, or financial topics stating content is educational and not individual advice.",
    importance: "High"
  },
  {
    id: 135,
    category: "geo_llmo",
    tag: "Citations List",
    name: "Footnote Citation References List at Bottom",
    directive: "Provide an academic-style reference list at the conclusion of deep-dive articles linking to primary peer-reviewed sources.",
    importance: "High"
  },
  {
    id: 136,
    category: "geo_llmo",
    tag: "Entity Co-Occurrence",
    name: "Natural Co-Occurrence of Related Semantic Entities",
    directive: "Naturally incorporate secondary related industry entities, acronyms, and governing bodies (e.g., OSHA, IEEE, ISO standards).",
    importance: "High"
  },
  {
    id: 137,
    category: "geo_llmo",
    tag: "Contrasting Perspectives",
    name: "Discussion of Counterarguments and Edge Cases",
    directive: "Acknowledge industry controversies, edge cases, and differing viewpoints to demonstrate comprehensive subject mastery.",
    importance: "High"
  },
  {
    id: 138,
    category: "geo_llmo",
    tag: "Product Specs Sheet",
    name: "Technical Specification Data Attributes",
    directive: "Render full technical specifications using structured definition lists or tables with exact units of measurement.",
    importance: "High"
  },
  {
    id: 139,
    category: "geo_llmo",
    tag: "Primary Research",
    name: "Publish Proprietary Industry Data Surveys",
    directive: "Publish annual proprietary benchmark reports to generate permanent high-authority backlinks and LLM citations.",
    importance: "Critical"
  },
  {
    id: 140,
    category: "geo_llmo",
    tag: "Author Social Profiles",
    name: "Author SameAs Verification Links",
    directive: "Link author profiles to their verified LinkedIn, Twitter/X, and Google Scholar URLs via `sameAs` schema.",
    importance: "High"
  },
  {
    id: 141,
    category: "geo_llmo",
    tag: "Brand Definition",
    name: "Unambiguous Brand Mission and Value Proposition",
    directive: "State clearly in the first paragraph of the About page who the organization is, what it does, and what community it serves.",
    importance: "Mandatory"
  },
  {
    id: 142,
    category: "geo_llmo",
    tag: "Contact Transparency",
    name: "Full Corporate Identity on Contact Page",
    directive: "Display registered corporate entity name, business registration number, headquarters address, phone, and direct email.",
    importance: "Mandatory"
  },
  {
    id: 143,
    category: "geo_llmo",
    tag: "Awards & Honors",
    name: "Verifiable Industry Accreditations and Awards",
    directive: "Feature badges from recognized industry rating bodies (e.g., Better Business Bureau, ISO Certification) with proof links.",
    importance: "High"
  },
  {
    id: 144,
    category: "geo_llmo",
    tag: "Press Releases",
    name: "Dedicated Media and Press Hub",
    directive: "Maintain an archive of official press announcements, media kits, and executive quotes at `/news` or `/press`.",
    importance: "High"
  },
  {
    id: 145,
    category: "geo_llmo",
    tag: "AI Transparency",
    name: "Transparent AI Content Disclosure Policy",
    directive: "State whether AI was used in research and confirm that human experts have verified every factual claim and calculation.",
    importance: "High"
  },
  {
    id: 146,
    category: "geo_llmo",
    tag: "Real Quotes",
    name: "Exclusive Quotes from In-House Practitioners",
    directive: "Include direct quotes from senior engineers or founders providing unique perspectives not found in existing search results.",
    importance: "High"
  },
  {
    id: 147,
    category: "geo_llmo",
    tag: "Clean Text Extraction",
    name: "Clean Markdown/Text Extractability Without JS Gimmicks",
    directive: "Ensure article copy can be scraped cleanly by LLM web parsers without requiring scroll-triggered JavaScript reveals.",
    importance: "Critical"
  },
  {
    id: 148,
    category: "geo_llmo",
    tag: "No Cloaking",
    name: "Identical Content for AI Bots and Human Users",
    directive: "Serve the exact same HTML content to search crawlers, AI user-agents, and human visitors with zero cloaking.",
    importance: "Critical"
  },
  {
    id: 149,
    category: "geo_llmo",
    tag: "LLM Bot Allow",
    name: "Allow Modern Search Crawlers in Robots.txt",
    directive: "Explicitly allow Googlebot, Bingbot, PerplexityBot, and ChatGPT user-agents to crawl public content without blocking.",
    importance: "Mandatory"
  },
  {
    id: 150,
    category: "geo_llmo",
    tag: "Brand Anchor",
    name: "Anchor Brand Name with Core Industry Category",
    directive: "Consistently co-mention the brand name alongside the primary service category (e.g., 'Acme — High-Performance Cloud Hosting').",
    importance: "Mandatory"
  },

  // ==========================================
  // GROUP 6: JSON-LD & ENTITY GRAPHS (151–180)
  // ==========================================
  {
    id: 151,
    category: "schema_entities",
    tag: "Organization Schema",
    name: "Global Organization JSON-LD Schema",
    directive: "Deploy a master `Organization` schema in `<head>` declaring company name, legal name, URL, logo, contact points, and social profiles.",
    importance: "Critical"
  },
  {
    id: 152,
    category: "schema_entities",
    tag: "WebSite Schema",
    name: "WebSite Schema with SitelinksSearchBox",
    directive: "Embed `WebSite` schema on homepage featuring `potentialAction` of type `SearchAction` to enable Google sitelinks search box.",
    importance: "High"
  },
  {
    id: 153,
    category: "schema_entities",
    tag: "Service Schema",
    name: "Service JSON-LD Schema on Commercial Pages",
    directive: "Apply `Service` schema detailing `serviceType`, `provider`, `areaServed`, `offers`, and `hasOfferCatalog` on all service pages.",
    importance: "Critical"
  },
  {
    id: 154,
    category: "schema_entities",
    tag: "Article Schema",
    name: "Article / NewsArticle / TechArticle Schema",
    directive: "Include `Article` schema with `headline`, `image`, `datePublished`, `dateModified`, `author`, and `publisher` on all blog posts.",
    importance: "Mandatory"
  },
  {
    id: 155,
    category: "schema_entities",
    tag: "Author Person Schema",
    name: "Person Schema for Author Entities",
    directive: "Nest a `Person` schema under `author` with `name`, `jobTitle`, `sameAs` array of social profiles, and `worksFor`.",
    importance: "Critical"
  },
  {
    id: 156,
    category: "schema_entities",
    tag: "FAQPage Schema",
    name: "Valid FAQPage JSON-LD on FAQ Sections",
    directive: "Generate `FAQPage` schema with an array of `Question` and `acceptedAnswer` elements matching visible on-page text.",
    importance: "Critical"
  },
  {
    id: 157,
    category: "schema_entities",
    tag: "BreadcrumbList Schema",
    name: "BreadcrumbList Schema on Every Subpage",
    directive: "Inject `BreadcrumbList` schema specifying `itemListElement` with `position`, `name`, and canonical `item` URL.",
    importance: "Mandatory"
  },
  {
    id: 158,
    category: "schema_entities",
    tag: "Product Schema",
    name: "Product Schema with Offers and Availability",
    directive: "For ecommerce and SaaS plans, implement `Product` schema with `name`, `image`, `description`, `sku`, and `offers`.",
    importance: "High"
  },
  {
    id: 159,
    category: "schema_entities",
    tag: "Review & Rating Schema",
    name: "AggregateRating Schema with Genuine Counts",
    directive: "Include `aggregateRating` schema with `ratingValue`, `reviewCount`, and `bestRating` strictly based on real customer reviews.",
    importance: "High"
  },
  {
    id: 160,
    category: "schema_entities",
    tag: "HowTo Schema",
    name: "HowTo Schema for Step-by-Step Guides",
    directive: "Use `HowTo` schema with `step` elements containing `name`, `text`, `image`, and `url` for actionable process tutorials.",
    importance: "High"
  },
  {
    id: 161,
    category: "schema_entities",
    tag: "VideoObject Schema",
    name: "VideoObject Schema for Embedded Videos",
    directive: "Add `VideoObject` schema with `name`, `description`, `thumbnailUrl`, `uploadDate`, and `embedUrl` for on-page video embeds.",
    importance: "High"
  },
  {
    id: 162,
    category: "schema_entities",
    tag: "SameAs Entities",
    name: "SameAs Array Linking Official Corporate Profiles",
    directive: "Populate the `sameAs` array with links to official LinkedIn, Twitter, Crunchbase, Wikipedia, and GitHub brand profiles.",
    importance: "High"
  },
  {
    id: 163,
    category: "schema_entities",
    tag: "AreaServed Schema",
    name: "AreaServed Geo-Definition for Target Regions",
    directive: "Specify target service geography in schema using `areaServed` with `AdministrativeArea` or `Country` types.",
    importance: "High"
  },
  {
    id: 164,
    category: "schema_entities",
    tag: "Schema Graph @graph",
    name: "Unified `@graph` Array for Interconnected Entities",
    directive: "Bundle all page schemas into a single top-level `@graph` array connected via `@id` references rather than disjoint script tags.",
    importance: "Critical"
  },
  {
    id: 165,
    category: "schema_entities",
    tag: "Unique @id URIs",
    name: "Canonical `@id` URI Anchors for Primary Entities",
    directive: "Assign stable URI identifiers to key entities (e.g., `https://domain.com/#organization`) for unambiguous entity referencing.",
    importance: "Critical"
  },
  {
    id: 166,
    category: "schema_entities",
    tag: "Logo ImageObject",
    name: "ImageObject Specification for Brand Logo",
    directive: "Declare the organization logo as an `ImageObject` with explicit `url`, `width`, and `height` (minimum 112x112px).",
    importance: "High"
  },
  {
    id: 167,
    category: "schema_entities",
    tag: "ContactPoint Schema",
    name: "ContactPoint Schema with Telephone and Hours",
    directive: "Define customer service endpoints using `ContactPoint` with `telephone`, `contactType`, and `availableLanguage`.",
    importance: "High"
  },
  {
    id: 168,
    category: "schema_entities",
    tag: "MainEntityOfPage",
    name: "Explicit `mainEntityOfPage` Binding in Articles",
    directive: "Bind the `Article` schema directly to its canonical URL using `mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }`.",
    importance: "Mandatory"
  },
  {
    id: 169,
    category: "schema_entities",
    tag: "Zero Schema Errors",
    name: "Zero Errors on Google Rich Results Validator",
    directive: "Ensure all generated schema passes Google's Rich Results Test and Schema.org Validator with 0 errors and 0 warnings.",
    importance: "Critical"
  },
  {
    id: 170,
    category: "schema_entities",
    tag: "Date Format ISO",
    name: "Strict ISO-8601 Date Formats in All Schema",
    directive: "Format all timestamps strictly in ISO-8601 format (`YYYY-MM-DDTHH:mm:ssZ`) to avoid crawler parsing rejections.",
    importance: "Mandatory"
  },
  {
    id: 171,
    category: "schema_entities",
    tag: "About / Mentions",
    name: "`about` and `mentions` Entity Linking in Articles",
    directive: "Use `about` and `mentions` properties in `Article` schema referencing canonical Wikidata URLs for mentioned technologies.",
    importance: "High"
  },
  {
    id: 172,
    category: "schema_entities",
    tag: "Speakable Schema",
    name: "Speakable Schema Specification for Audio Snippets",
    directive: "Add `SpeakableSpecification` identifying CSS selectors of core summary paragraphs eligible for Google Assistant voice readouts.",
    importance: "High"
  },
  {
    id: 173,
    category: "schema_entities",
    tag: "Course Schema",
    name: "Course / Tutorial Schema Where Applicable",
    directive: "For educational training modules, implement `Course` schema with `name`, `description`, `provider`, and syllabus steps.",
    importance: "High"
  },
  {
    id: 174,
    category: "schema_entities",
    tag: "SoftwareApplication",
    name: "SoftwareApplication Schema for Web Tools",
    directive: "For interactive calculators and SaaS utilities, provide `SoftwareApplication` schema with `operatingSystem` and `applicationCategory`.",
    importance: "High"
  },
  {
    id: 175,
    category: "schema_entities",
    tag: "Event Schema",
    name: "Event Schema for Webinars and Conferences",
    directive: "Structure live workshops and webinars with `Event` schema detailing `startDate`, `endDate`, `location`, and registration `offers`.",
    importance: "High"
  },
  {
    id: 176,
    category: "schema_entities",
    tag: "No Fake Reviews",
    name: "Zero Fabricated Testimonial or Review Schema",
    directive: "Never include fabricated ratings or reviews in schema markup; only mark up verifiable, authentic customer feedback.",
    importance: "Critical"
  },
  {
    id: 177,
    category: "schema_entities",
    tag: "Image License",
    name: "Image License & Creator Metadata in Image Schema",
    directive: "Add `license` and `acquireLicensePage` properties to high-value original diagrams to earn Google 'Licensable' image badges.",
    importance: "High"
  },
  {
    id: 178,
    category: "schema_entities",
    tag: "PostalAddress Schema",
    name: "PostalAddress Schema with Valid Coordinates",
    directive: "Structure the official business location with `PostalAddress` specifying street address, city, state, postal code, and country.",
    importance: "High"
  },
  {
    id: 179,
    category: "schema_entities",
    tag: "OpeningHoursSpecification",
    name: "OpeningHoursSpecification for Operating Hours",
    directive: "List operating days and business support hours accurately using `OpeningHoursSpecification` in structured data.",
    importance: "High"
  },
  {
    id: 180,
    category: "schema_entities",
    tag: "PriceRange Schema",
    name: "PriceRange Attribute on Commercial Offerings",
    directive: "Indicate approximate price brackets (`$$` or explicit numerical currency ranges) in commercial schemas.",
    importance: "High"
  },

  // ==========================================
  // GROUP 7: CONTENT DEPTH, E-E-A-T & KEYWORD HOOK (181–210)
  // ==========================================
  {
    id: 181,
    category: "content_eeat",
    tag: "First 100 Words",
    name: "Primary Keyword Placement in First 100 Words",
    directive: "Place the primary target keyword naturally within the first 100 words of the body copy to establish immediate topical relevance.",
    importance: "Mandatory"
  },
  {
    id: 182,
    category: "content_eeat",
    tag: "Safe 1.5% Density",
    name: "Calibrated 1.2% – 1.8% Safe Keyword Density",
    directive: "Maintain keyword density strictly between 1.2% and 1.8% (12–18 mentions per 1,000 words); never exceed 2.0% to avoid SpamBrain penalties.",
    importance: "Critical"
  },
  {
    id: 183,
    category: "content_eeat",
    tag: "Comprehensive Length",
    name: "Comprehensive 1,000+ Word Content Depth",
    directive: "Deliver deep, comprehensive coverage (minimum 1,000 words on pillar articles and 800 words on service pages) addressing all user questions.",
    importance: "Mandatory"
  },
  {
    id: 184,
    category: "content_eeat",
    tag: "Intro Problem Hook",
    name: "High-Empathy Problem Hook in Opening Paragraph",
    directive: "Open the article by framing the specific pain point, frustration, or cost the reader is experiencing before introducing the solution.",
    importance: "Mandatory"
  },
  {
    id: 185,
    category: "content_eeat",
    tag: "LSI & Synonyms",
    name: "Rich Semantic Synonyms & LSI Variations",
    directive: "Incorporate semantic variations, synonyms, and related phrasing throughout subheadings rather than repeating the exact seed keyword.",
    importance: "Mandatory"
  },
  {
    id: 186,
    category: "content_eeat",
    tag: "Active Voice",
    name: "Strong Active Voice Over Passive Construction",
    directive: "Write in direct, active voice (>85% active construction) to maintain momentum and energetic readability.",
    importance: "High"
  },
  {
    id: 187,
    category: "content_eeat",
    tag: "No Fluff Adjectives",
    name: "Elimination of Vague Superlatives",
    directive: "Replace subjective superlatives ('revolutionary', 'groundbreaking', 'best-in-class') with concrete specifications and verifiable proofs.",
    importance: "High"
  },
  {
    id: 188,
    category: "content_eeat",
    tag: "Subheading Scannability",
    name: "Descriptive Subheading Every 200–250 Words",
    directive: "Insert an informative, descriptive H2 or H3 heading every 200–250 words so mobile users can scan sections effortlessly.",
    importance: "Mandatory"
  },
  {
    id: 189,
    category: "content_eeat",
    tag: "Direct Answers First",
    name: "Direct Answers Preceding Technical Explanations",
    directive: "Deliver the direct recommendation first, then follow with technical rationale, history, and detailed breakdown.",
    importance: "Critical"
  },
  {
    id: 190,
    category: "content_eeat",
    tag: "Author Bio Box",
    name: "Rich Author Bio Card at Base of Every Article",
    directive: "Include a dedicated author bio card featuring headshot photo, professional qualifications, relevant degrees, and social profiles.",
    importance: "Critical"
  },
  {
    id: 191,
    category: "content_eeat",
    tag: "Firsthand Experience",
    name: "Firsthand Proof of Work and Experience Demonstration",
    directive: "Demonstrate firsthand experience with phrases like 'In our testing', 'During our 2026 field audit', backed by original photos or charts.",
    importance: "Critical"
  },
  {
    id: 192,
    category: "content_eeat",
    tag: "Prerequisites Section",
    name: "Explicit Prerequisites and Requirements Box",
    directive: "Outline necessary prerequisites, required tools, and estimated preparation time before outlining procedural steps.",
    importance: "High"
  },
  {
    id: 193,
    category: "content_eeat",
    tag: "Cost Breakdown",
    name: "Transparent Factor-by-Factor Cost Breakdown",
    directive: "Break down price drivers (labor, materials, licensing, ongoing maintenance) so readers understand what determines final costs.",
    importance: "High"
  },
  {
    id: 194,
    category: "content_eeat",
    tag: "Common Pitfalls",
    name: "'Common Mistakes to Avoid' Sub-Chapter",
    directive: "Include an explicit chapter detailing the 3–5 most common errors beginners or buyers make and how to prevent them.",
    importance: "High"
  },
  {
    id: 195,
    category: "content_eeat",
    tag: "Real Examples",
    name: "Concrete Real-World Practical Examples",
    directive: "Illustrate abstract concepts with concrete practical scenarios, sample calculations, or real client walkthroughs.",
    importance: "Mandatory"
  },
  {
    id: 196,
    category: "content_eeat",
    tag: "Downloadable Asset",
    name: "Actionable Cheat Sheet or PDF Resource Offer",
    directive: "Offer a high-value downloadable checklist, spreadsheet template, or PDF guide to capture qualified lead inquiries.",
    importance: "High"
  },
  {
    id: 197,
    category: "content_eeat",
    tag: "Reading Time Estimate",
    name: "Estimated Reading Time Indicator",
    directive: "Display a clean reading time indicator (e.g., '⏱️ 6 min read') at the top of long-form articles.",
    importance: "High"
  },
  {
    id: 198,
    category: "content_eeat",
    tag: "Publishing Cadence",
    name: "Structured Content Production Velocity",
    directive: "Establish a consistent publishing rhythm of 2–4 high-authority pillar articles per week to maintain crawling velocity.",
    importance: "High"
  },
  {
    id: 199,
    category: "content_eeat",
    tag: "Content Freshness",
    name: "Quarterly Audit and Content Refresh Policy",
    directive: "Review and update top-ranking articles every 90 days with fresh statistics, revised dates, and updated screenshots.",
    importance: "Critical"
  },
  {
    id: 200,
    category: "content_eeat",
    tag: "Original Quotes",
    name: "Original Expert Quotes and Commentary",
    directive: "Incorporate unique quotes from internal directors or verified third-party authorities to increase information originality.",
    importance: "High"
  },
  {
    id: 201,
    category: "content_eeat",
    tag: "Search Intent Alignment",
    name: "Strict Search Intent Qualification (Info vs Commercial)",
    directive: "Align page structure strictly with query intent: provide informational answer formats for 'how to' and commercial feature tables for 'best'.",
    importance: "Mandatory"
  },
  {
    id: 202,
    category: "content_eeat",
    tag: "Bullet Lists",
    name: "Visual Bullet Lists for Any 3+ Related Items",
    directive: "Format any list of 3 or more related items into clean bullet points with bolded leading terms rather than comma-separated sentences.",
    importance: "Mandatory"
  },
  {
    id: 203,
    category: "content_eeat",
    tag: "Interactive Tools",
    name: "Embedded Interactive Widget or Calculator",
    directive: "Include a client-side calculator or filter widget on core service pages to increase on-page dwell time and user engagement.",
    importance: "High"
  },
  {
    id: 204,
    category: "content_eeat",
    tag: "Tone Consistency",
    name: "Brand Voice & Authoritative Friendly Tone",
    directive: "Maintain an approachable, confident tone that balances technical precision with clear plain-English explanations.",
    importance: "High"
  },
  {
    id: 205,
    category: "content_eeat",
    tag: "Bold Key Terms",
    name: "Bold Essential Takeaway Phrases Strategically",
    directive: "Bold key conclusions and crucial metrics throughout the article to guide scanning eyes directly to core value points.",
    importance: "High"
  },
  {
    id: 206,
    category: "content_eeat",
    tag: "Summary Conclusion",
    name: "Action-Oriented 'Final Verdict & Next Steps' Section",
    directive: "Conclude articles with an actionable synthesis recapping the decision path and providing a clear next step.",
    importance: "Mandatory"
  },
  {
    id: 207,
    category: "content_eeat",
    tag: "Glossary Callouts",
    name: "Inline Explanations for Technical Acronyms",
    directive: "Define technical acronyms on their first appearance (e.g., 'Core Web Vitals (CWV)') to keep content accessible to beginners.",
    importance: "High"
  },
  {
    id: 208,
    category: "content_eeat",
    tag: "FAQ Breadth",
    name: "Comprehensive Answers Covering Edge Scenarios",
    directive: "Ensure FAQ questions tackle genuine objections, pricing concerns, and edge cases rather than superficial questions.",
    importance: "High"
  },
  {
    id: 209,
    category: "content_eeat",
    tag: "Spelling & Grammar",
    name: "Flawless Linguistic Grammar and Syntax",
    directive: "Validate all published copy for zero typographical errors, correct punctuation, and natural linguistic rhythm.",
    importance: "Mandatory"
  },
  {
    id: 210,
    category: "content_eeat",
    tag: "Content Cannibalization",
    name: "Zero Overlap with Existing Website Topics",
    directive: "Ensure each new page targets a unique primary search intent, avoiding content cannibalization with previously published URLs.",
    importance: "Critical"
  },

  // ==========================================
  // GROUP 8: INTERNAL LINKING & SILOS (211–240)
  // ==========================================
  {
    id: 211,
    category: "internal_links",
    tag: "Minimum Links",
    name: "Minimum 3 Contextual Inbound Links Per Page",
    directive: "Never publish a page without adding at least 3 contextual links to it from existing, established relevant articles.",
    importance: "Mandatory"
  },
  {
    id: 212,
    category: "internal_links",
    tag: "Outbound Contextual",
    name: "Minimum 3 Contextual Outbound Internal Links",
    directive: "Include at least 3 contextual internal links within the body copy pointing to related cluster pages or core service hubs.",
    importance: "Mandatory"
  },
  {
    id: 213,
    category: "internal_links",
    tag: "Descriptive Anchors",
    name: "Keyword-Rich Descriptive Anchor Text",
    directive: "Use natural keyword-rich anchor text reflecting the target page topic; never use generic text like 'click here' or naked URLs.",
    importance: "Critical"
  },
  {
    id: 214,
    category: "internal_links",
    tag: "Anchor Diversity",
    name: "Diverse Anchor Text Variations for Target Pages",
    directive: "Vary internal anchor text across linking pages using synonyms and partial matches rather than 100% repetitive exact match anchors.",
    importance: "High"
  },
  {
    id: 215,
    category: "internal_links",
    tag: "Topic Silo Mesh",
    name: "Strict Topic Silo Cross-Linking Rules",
    directive: "Keep child cluster articles linking upward to the parent pillar and laterally to sibling topics; avoid random cross-linking across unrelated silos.",
    importance: "Critical"
  },
  {
    id: 216,
    category: "internal_links",
    tag: "First Link Rule",
    name: "Top-of-Page Contextual Link to Primary Solution",
    directive: "Place the most important internal link pointing to your primary service page early in the article body (within the first 250 words).",
    importance: "High"
  },
  {
    id: 217,
    category: "internal_links",
    tag: "Footer Links Limit",
    name: "Curated Footer Links Capped Under 25",
    directive: "Curate footer links strictly to top-tier service hubs, resource centers, and legal pages; avoid cramming 100s of keyword links in footers.",
    importance: "High"
  },
  {
    id: 218,
    category: "internal_links",
    tag: "Related Articles Card",
    name: "Dynamic 'Related Reading' Cards at End of Article",
    directive: "Render 3 visually distinct 'Related Articles' cards at the end of each post, linking to the top performing sibling cluster posts.",
    importance: "High"
  },
  {
    id: 219,
    category: "internal_links",
    tag: "No Broken 404s",
    name: "Automated Internal Broken Link Scanner",
    directive: "Maintain zero internal 404 links; update all internal anchors immediately upon URL slug modifications.",
    importance: "Critical"
  },
  {
    id: 220,
    category: "internal_links",
    tag: "No Redirect Chains",
    name: "Direct Internal Links Bypassing 301 Redirects",
    directive: "Ensure all internal links point directly to the final destination 200 URL rather than hopping through 301 redirects.",
    importance: "Critical"
  },
  {
    id: 221,
    category: "internal_links",
    tag: "Dofollow Internal",
    name: "100% Dofollow for All Editorial Internal Links",
    directive: "Never place `rel='nofollow'` on internal editorial links; let PageRank circulate freely across your domain.",
    importance: "Critical"
  },
  {
    id: 222,
    category: "internal_links",
    tag: "High Authority Outbound",
    name: "1–2 Outbound Authority Citations Per Article",
    directive: "Include 1–2 outbound links to high-authority non-competing external resources (.edu, .gov, or primary research papers).",
    importance: "High"
  },
  {
    id: 223,
    category: "internal_links",
    tag: "Nofollow Sponsored",
    name: "Strict `rel='sponsored'` on Affiliate Links",
    directive: "Mark all commercial affiliate and sponsored external links with `rel='sponsored'` or `rel='nofollow'` to comply with search guidelines.",
    importance: "Critical"
  },
  {
    id: 224,
    category: "internal_links",
    tag: "UGC Links",
    name: "Apply `rel='ugc'` on User Comments and Forums",
    directive: "Apply `rel='ugc'` to all links submitted by users in comments, forum replies, or community reviews.",
    importance: "High"
  },
  {
    id: 225,
    category: "internal_links",
    tag: "New Tab Rel",
    name: "Safe `rel='noopener noreferrer'` on `target='_blank'`",
    directive: "Whenever external links open in a new window (`target='_blank'`), enforce `rel='noopener noreferrer'` for security and performance.",
    importance: "Mandatory"
  },
  {
    id: 226,
    category: "internal_links",
    tag: "Hub-and-Spoke",
    name: "Hub-and-Spoke Content Architecture",
    directive: "Design pillar hubs that feature deep summary excerpts for every sub-spoke article, funnelling users into specialized subpages.",
    importance: "Mandatory"
  },
  {
    id: 227,
    category: "internal_links",
    tag: "Orphan Page Audit",
    name: "Zero Orphan Pages in Sitemaps",
    directive: "Cross-reference the XML sitemap against the internal crawler graph to guarantee zero unlinked orphan URLs.",
    importance: "Critical"
  },
  {
    id: 228,
    category: "internal_links",
    tag: "Link Prominence",
    name: "High Visual Contrast on Contextual Hyperlinks",
    directive: "Style body hyperlinks with clear visual contrast (distinct accent color and underline) so readers easily identify clickable paths.",
    importance: "High"
  },
  {
    id: 229,
    category: "internal_links",
    tag: "Hero CTA Link",
    name: "Direct Above-the-Fold Internal Link to Conversion",
    directive: "Feature a prominent primary conversion link in the hero section directing high-intent users directly to the quote/contact page.",
    importance: "Mandatory"
  },
  {
    id: 230,
    category: "internal_links",
    tag: "Category Index Links",
    name: "Comprehensive Category Landing Page Links",
    directive: "Equip each category landing page (`/services`) with rich links, thumbnail previews, and 50-word descriptions for every child service.",
    importance: "High"
  },
  {
    id: 231,
    category: "internal_links",
    tag: "Pagination Rel",
    name: "Clean Internal Links on Pagination Elements",
    directive: "Provide standard crawlable `<a href='/blog?page=2'>` pagination elements rather than JavaScript `onClick` triggers.",
    importance: "Critical"
  },
  {
    id: 232,
    category: "internal_links",
    tag: "Image Links Alt",
    name: "Descriptive Alt Text Serving as Anchor on Linked Images",
    directive: "When wrapping an image in a link (`<a><img></a>`), ensure the image's `alt` attribute functions as descriptive anchor text.",
    importance: "Mandatory"
  },
  {
    id: 233,
    category: "internal_links",
    tag: "No Redundant Links",
    name: "Avoid Linking to the Same URL 5+ Times on One Page",
    directive: "Avoid cluttering body content with redundant repeated links to the exact same destination URL within a single article.",
    importance: "High"
  },
  {
    id: 234,
    category: "internal_links",
    tag: "Table of Contents Anchors",
    name: "Internal Fragment Hash Links for Fast Jump Navigation",
    directive: "Use clean lowercase ID anchors (`#pricing`, `#faq`) for Table of Contents links matching section IDs.",
    importance: "High"
  },
  {
    id: 235,
    category: "internal_links",
    tag: "Link Density Balance",
    name: "Balanced Link Density (1 Link Per 150–200 Words)",
    directive: "Maintain a healthy internal link rhythm of roughly 1 contextual link per 150–200 words to avoid spammy link clusters.",
    importance: "High"
  },
  {
    id: 236,
    category: "internal_links",
    tag: "Topical Relevance",
    name: "Strict Contextual Relevance on Internal Anchors",
    directive: "Ensure internal links connect genuinely related topics that provide logical next steps for the reader.",
    importance: "Mandatory"
  },
  {
    id: 237,
    category: "internal_links",
    tag: "Service Cross-Sell",
    name: "Complementary Service Recommendation Links",
    directive: "Embed logical complementary service cross-sell links at the conclusion of service walkthroughs (e.g., 'Pairing with Our Maintenance Plan').",
    importance: "High"
  },
  {
    id: 238,
    category: "internal_links",
    tag: "Archive Depth",
    name: "Deep Archive Pagination Without Hard Crawl Cutoffs",
    directive: "Ensure older high-quality articles remain linked through paginated archive paths and related post widgets.",
    importance: "High"
  },
  {
    id: 239,
    category: "internal_links",
    tag: "Link Title Attributes",
    name: "Elimination of Redundant `title` Attributes on Links",
    directive: "Avoid redundant `title` attributes on links that merely repeat the anchor text, saving HTML weight.",
    importance: "High"
  },
  {
    id: 240,
    category: "internal_links",
    tag: "Tag Pages Cleanup",
    name: "Prune Low-Value Keyword Tag Archives",
    directive: "Do not create empty or thin tag archive pages; consolidate taxonomy into meaningful, rich category pillars.",
    importance: "Critical"
  },

  // ==========================================
  // GROUP 9: CRO & MOBILE UX (241–270)
  // ==========================================
  {
    id: 241,
    category: "cro_mobile",
    tag: "Mobile Tap Targets",
    name: "Minimum 48x48px Touch Targets for Mobile",
    directive: "Ensure all buttons, form inputs, and mobile navigation links have a minimum touch target size of 48x48px with 8px spacing.",
    importance: "Mandatory"
  },
  {
    id: 242,
    category: "cro_mobile",
    tag: "Sticky Mobile CTA",
    name: "Sticky Bottom Action Bar on Mobile Viewports",
    directive: "Display a non-intrusive sticky bottom action bar on mobile screens with instant 'Call Now' and 'Book Online' buttons.",
    importance: "Critical"
  },
  {
    id: 243,
    category: "cro_mobile",
    tag: "Click-to-Call",
    name: "Proper `tel:` Protocol on All Phone Numbers",
    directive: "Wrap all visible phone numbers in `<a href='tel:+15550192834'>` so mobile visitors can initiate a call with one tap.",
    importance: "Mandatory"
  },
  {
    id: 244,
    category: "cro_mobile",
    tag: "Form Fields Diet",
    name: "Short High-Converting Forms (Max 3–4 Fields)",
    directive: "Limit lead generation forms to 3–4 essential fields (Name, Phone/Email, Service Needed) to maximize form completion rates.",
    importance: "Critical"
  },
  {
    id: 245,
    category: "cro_mobile",
    tag: "Social Proof Badges",
    name: "'As Featured In' & Trust Badges Above the Fold",
    directive: "Place recognized press badges, security seals, and verified customer star ratings immediately below the main hero CTA.",
    importance: "Critical"
  },
  {
    id: 246,
    category: "cro_mobile",
    tag: "Contrast Ratio",
    name: "WCAG AA Contrast Ratios (Minimum 4.5:1)",
    directive: "Ensure all body copy and interactive UI elements maintain a minimum color contrast ratio of 4.5:1 against their backgrounds.",
    importance: "Mandatory"
  },
  {
    id: 247,
    category: "cro_mobile",
    tag: "No Layout Shifts",
    name: "Zero Dynamic Pop-In Elements That Move Buttons",
    directive: "Never allow late-loading notification bars or banners to push buttons downward right as a user attempts to tap.",
    importance: "Critical"
  },
  {
    id: 248,
    category: "cro_mobile",
    tag: "Readable Typography",
    name: "Minimum 16px Base Body Font Size",
    directive: "Set base font size to at least 16px (1rem) with a comfortable line-height of 1.6 to ensure readability without pinch-zooming.",
    importance: "Mandatory"
  },
  {
    id: 249,
    category: "cro_mobile",
    tag: "No Interstitial Popups",
    name: "Zero Intrusive Screen-Blocking Popups on Mobile",
    directive: "Avoid intrusive full-screen popups on mobile arrival to comply with Google's mobile interstitial penalty guidelines.",
    importance: "Critical"
  },
  {
    id: 250,
    category: "cro_mobile",
    tag: "Form Auto-Complete",
    name: "HTML `autocomplete` Attributes on Form Inputs",
    directive: "Equip form inputs with appropriate `autocomplete='name'`, `autocomplete='email'`, and `autocomplete='tel'` attributes for rapid autofill.",
    importance: "High"
  },
  {
    id: 251,
    category: "cro_mobile",
    tag: "Real-Time Validation",
    name: "Inline Form Validation with Clear Error Messages",
    directive: "Validate input fields in real time with helpful error tooltips, highlighting invalid fields clearly in accessible colors.",
    importance: "High"
  },
  {
    id: 252,
    category: "cro_mobile",
    tag: "Clarity Heatmaps",
    name: "Microsoft Clarity / Session Recording Integration",
    directive: "Integrate free Microsoft Clarity analytics to observe user scroll depth, heatmaps, and dead-click patterns.",
    importance: "High"
  },
  {
    id: 253,
    category: "cro_mobile",
    tag: "High Urgency CTA",
    name: "Action-Oriented Verbs on All CTA Buttons",
    directive: "Use high-clarity action copy on buttons ('Get My Free Instant Quote', 'Claim Your Audit') instead of generic 'Submit'.",
    importance: "Mandatory"
  },
  {
    id: 254,
    category: "cro_mobile",
    tag: "Hero Value Prop",
    name: "Crystal Clear 5-Second Hero Value Proposition",
    directive: "Ensure any first-time visitor understands who you are, what you solve, and what action to take within 5 seconds of landing.",
    importance: "Critical"
  },
  {
    id: 255,
    category: "cro_mobile",
    tag: "Live Testimonials",
    name: "Authentic Client Quotes with Full Names and Photos",
    directive: "Showcase authentic client testimonials accompanied by verified full names, company titles, and genuine profile headshots.",
    importance: "Critical"
  },
  {
    id: 256,
    category: "cro_mobile",
    tag: "Guarantee Badges",
    name: "Risk-Reversal Guarantees and Warranty Callouts",
    directive: "Prominently display satisfaction guarantees, warranties, or free trial periods directly alongside primary pricing cards.",
    importance: "High"
  },
  {
    id: 257,
    category: "cro_mobile",
    tag: "Interactive Accordions",
    name: "Accessible Animated FAQ Accordion Component",
    directive: "Build accordion dropdowns with smooth CSS transitions, keyboard focus outlines, and persistent URL hash support.",
    importance: "High"
  },
  {
    id: 258,
    category: "cro_mobile",
    tag: "Sticky Header Nav",
    name: "Compact Sticky Header with Prominent Phone/CTA",
    directive: "Keep the main header sticky or auto-revealing on scroll up, featuring a clear phone number or primary action button.",
    importance: "High"
  },
  {
    id: 259,
    category: "cro_mobile",
    tag: "Exit Intent Offer",
    name: "Non-Intrusive Exit-Intent Modal on Desktop",
    directive: "Trigger an exit-intent discount or downloadable resource offer only when desktop mouse movement leaves the viewport.",
    importance: "High"
  },
  {
    id: 260,
    category: "cro_mobile",
    tag: "Fast Checkout / Lead",
    name: "One-Click Social Sign-In or Guest Checkout",
    directive: "Enable instant guest checkout or one-click verification for SaaS sign-ups to minimize onboarding friction.",
    importance: "High"
  },
  {
    id: 261,
    category: "cro_mobile",
    tag: "Privacy Assurance",
    name: "'We Respect Your Privacy' Micro-Copy Below Forms",
    directive: "Place comforting micro-copy beneath form submission buttons ('🔒 Zero spam. We never share your data.').",
    importance: "High"
  },
  {
    id: 262,
    category: "cro_mobile",
    tag: "Live Chat / Messenger",
    name: "Asynchronous Lightweight Live Chat or WhatsApp Link",
    directive: "Embed an asynchronous chat widget or WhatsApp direct link that loads on user demand rather than freezing the main thread.",
    importance: "High"
  },
  {
    id: 263,
    category: "cro_mobile",
    tag: "Before & After",
    name: "Interactive Before-and-After Slider Component",
    directive: "For service transformations, implement an interactive image comparison slider demonstrating verified project results.",
    importance: "High"
  },
  {
    id: 264,
    category: "cro_mobile",
    tag: "Keyboard Navigation",
    name: "Complete Keyboard Accessibility (`Tab` & `Enter`)",
    directive: "Ensure every interactive element (menus, modals, forms, buttons) is fully operable via standard keyboard controls.",
    importance: "Mandatory"
  },
  {
    id: 265,
    category: "cro_mobile",
    tag: "Focus Outlines",
    name: "Visible Accessible `:focus-visible` Outlines",
    directive: "Never set `outline: none` without providing a high-visibility customized focus ring for keyboard navigation.",
    importance: "Mandatory"
  },
  {
    id: 266,
    category: "cro_mobile",
    tag: "Dark & Light Mode",
    name: "System-Aware CSS Theme with Perfect Contrast",
    directive: "Provide seamless dark and light modes adapting to system preferences (`prefers-color-scheme`) with optimized readability.",
    importance: "High"
  },
  {
    id: 267,
    category: "cro_mobile",
    tag: "Video Captions",
    name: "Closed Captions and Subtitles on Video Embeds",
    directive: "Provide WebVTT (`.vtt`) closed captions on all hosted video walkthroughs for accessibility and silent mobile viewing.",
    importance: "High"
  },
  {
    id: 268,
    category: "cro_mobile",
    tag: "Estimated Delivery",
    name: "Instant Timeline & Availability Badges",
    directive: "Indicate current service availability (e.g., '🟢 Next Dispatch Available Today') to establish real-time urgency.",
    importance: "High"
  },
  {
    id: 269,
    category: "cro_mobile",
    tag: "Transparent Pricing",
    name: "Zero Hidden Fees Disclosure",
    directive: "Explicitly mention 'No hidden charges or surprise dispatch fees' to alleviate consumer skepticism before conversion.",
    importance: "High"
  },
  {
    id: 270,
    category: "cro_mobile",
    tag: "Thank You Page",
    name: "Dedicated Conversion Tracking `/thank-you` Page",
    directive: "Direct successful form submissions to a dedicated `/thank-you` URL configured with GA4 conversion event tracking.",
    importance: "Mandatory"
  },

  // ==========================================
  // GROUP 10: CRAWL BUDGET, INDEXING & TECHNICAL SECURITY (271–300)
  // ==========================================
  {
    id: 271,
    category: "technical_crawl",
    tag: "Robots.txt Rules",
    name: "Clean Standard-Compliant `/robots.txt` File",
    directive: "Deploy a clean `/robots.txt` allowing primary search engines, disallowing admin and internal search URLs, with sitemap declaration.",
    importance: "Critical"
  },
  {
    id: 272,
    category: "technical_crawl",
    tag: "Block Search Crawl",
    name: "Disallow Internal Search Query URLs in Robots.txt",
    directive: "Add `Disallow: /*?s=` and `Disallow: /search/` to `/robots.txt` to prevent crawl budget waste on internal search results.",
    importance: "Critical"
  },
  {
    id: 273,
    category: "technical_crawl",
    tag: "HTTP 410 Gone",
    name: "HTTP 410 Gone for Permanently Deleted Pages",
    directive: "Return true HTTP 410 Gone response codes for permanently deleted URLs to remove them from search indexes in 48 hours.",
    importance: "High"
  },
  {
    id: 274,
    category: "technical_crawl",
    tag: "Noindex Thin Pages",
    name: "`noindex, follow` on Thin Utility and Thank-You Pages",
    directive: "Apply `<meta name='robots' content='noindex, follow' />` to login portals, thank-you pages, and terms documents.",
    importance: "Critical"
  },
  {
    id: 275,
    category: "technical_crawl",
    tag: "SSL Security",
    name: "Strict HTTPS with HSTS Header Enforced",
    directive: "Enforce `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` for bulletproof SSL encryption.",
    importance: "Critical"
  },
  {
    id: 276,
    category: "technical_crawl",
    tag: "X-Content-Type",
    name: "`X-Content-Type-Options: nosniff` Security Header",
    directive: "Serve all HTTP responses with `X-Content-Type-Options: nosniff` to protect against MIME-type confusion attacks.",
    importance: "High"
  },
  {
    id: 277,
    category: "technical_crawl",
    tag: "X-Frame-Options",
    name: "`X-Frame-Options: SAMEORIGIN` Anti-Clickjacking",
    directive: "Set `X-Frame-Options: SAMEORIGIN` on all pages to prevent unauthorized framing and clickjacking vulnerabilities.",
    importance: "High"
  },
  {
    id: 278,
    category: "technical_crawl",
    tag: "CSP Policy",
    name: "Content Security Policy (CSP) Directives",
    directive: "Define a secure Content Security Policy restricting authorized script, style, and media sources.",
    importance: "High"
  },
  {
    id: 279,
    category: "technical_crawl",
    tag: "Referrer-Policy",
    name: "`Referrer-Policy: strict-origin-when-cross-origin`",
    directive: "Set `Referrer-Policy: strict-origin-when-cross-origin` to preserve referrer analytics while safeguarding user privacy.",
    importance: "Mandatory"
  },
  {
    id: 280,
    category: "technical_crawl",
    tag: "Permissions-Policy",
    name: "Permissions-Policy Restricting Unused Browser APIs",
    directive: "Send `Permissions-Policy: camera=(), microphone=(), geolocation=()` to disable unauthorized hardware access.",
    importance: "High"
  },
  {
    id: 281,
    category: "technical_crawl",
    tag: "Zero Soft 404s",
    name: "Eliminate Soft 404s with True HTTP Status Codes",
    directive: "Ensure non-existent pages return an authentic HTTP 404 status code in the response header rather than HTTP 200 with error text.",
    importance: "Critical"
  },
  {
    id: 282,
    category: "technical_crawl",
    tag: "Redirect Limits",
    name: "Zero Redirect Loops & Maximum Single 301 Hops",
    directive: "Ensure redirected URLs resolve immediately in a single 301 hop without entering redirect chains or loops.",
    importance: "Critical"
  },
  {
    id: 283,
    category: "technical_crawl",
    tag: "Crawl Delay Clean",
    name: "Avoid Unnecessary Crawl-Delay Directives",
    directive: "Do not add artificial `crawl-delay` directives in robots.txt unless server capacity is critically constrained.",
    importance: "High"
  },
  {
    id: 284,
    category: "technical_crawl",
    tag: "GSC Verification",
    name: "DNS-Level Google Search Console Verification",
    directive: "Verify Google Search Console property via DNS TXT record at domain registrar to monitor all subdomains and protocol variants.",
    importance: "Mandatory"
  },
  {
    id: 285,
    category: "technical_crawl",
    tag: "GA4 Tracking",
    name: "Google Analytics 4 Measurement ID Integration",
    directive: "Implement GA4 measurement ID with enhanced measurement for outbound clicks, site search, and file downloads enabled.",
    importance: "Mandatory"
  },
  {
    id: 286,
    category: "technical_crawl",
    tag: "IndexNow Protocol",
    name: "IndexNow API Integration for Instant Discovery",
    directive: "Configure the IndexNow API key to ping Bing and Yandex automatically whenever new pages are created or modified.",
    importance: "High"
  },
  {
    id: 287,
    category: "technical_crawl",
    tag: "Lastmod Accuracy",
    name: "Accurate `<lastmod>` Dates in XML Sitemap",
    directive: "Update `<lastmod>` in sitemaps only when substantive editorial changes occur, avoiding false updates that desensitize bots.",
    importance: "High"
  },
  {
    id: 288,
    category: "technical_crawl",
    tag: "No Duplicates",
    name: "Automated Duplicate Content Detection in Pipeline",
    directive: "Verify that all programmatic and category pages possess distinct meta descriptions, titles, and unique body paragraphs.",
    importance: "Critical"
  },
  {
    id: 289,
    category: "technical_crawl",
    tag: "Static Asset CDN",
    name: "Global Edge CDN for Static Media Delivery",
    directive: "Distribute all static media assets across a global CDN (Cloudflare, AWS CloudFront, or Vercel Edge Network).",
    importance: "Mandatory"
  },
  {
    id: 290,
    category: "technical_crawl",
    tag: "Server Response 200",
    name: "Zero 5xx Server Errors During Crawler Traffic",
    directive: "Maintain 99.9% uptime with robust error handling to guarantee zero 500/502/503 server errors during automated crawler spikes.",
    importance: "Critical"
  },
  {
    id: 291,
    category: "technical_crawl",
    tag: "Log File Tracking",
    name: "Server Access Log Monitoring for Googlebot Activity",
    directive: "Periodically inspect server access logs to track Googlebot crawl frequency, identifying crawled vs neglected page clusters.",
    importance: "High"
  },
  {
    id: 292,
    category: "technical_crawl",
    tag: "Cookie Banner Clean",
    name: "Non-Blocking GDPR / CCPA Cookie Consent Banner",
    directive: "Render cookie consent banners cleanly without hiding core content from crawlers or triggering layout shifts.",
    importance: "High"
  },
  {
    id: 293,
    category: "technical_crawl",
    tag: "CORS Headers",
    name: "Strict Cross-Origin Resource Sharing (CORS) Policy",
    directive: "Configure CORS headers to protect internal APIs and fonts while permitting designated web endpoints.",
    importance: "High"
  },
  {
    id: 294,
    category: "technical_crawl",
    tag: "Database Query Cache",
    name: "Database Query Caching on Dynamic Service Pages",
    directive: "Cache frequent database queries to ensure dynamic pages generate in under 50ms without overloading backend pools.",
    importance: "High"
  },
  {
    id: 295,
    category: "technical_crawl",
    tag: "Clean HTML Source",
    name: "View-Source Readability with Clean Semantic Markup",
    directive: "Ensure raw HTML output (View Page Source) displays complete, readable semantic content before JavaScript execution.",
    importance: "Critical"
  },
  {
    id: 296,
    category: "technical_crawl",
    tag: "Bot Access Shield",
    name: "Bot Management Shielding Bad Scrapers Only",
    directive: "Configure cloud firewalls to block malicious scrapers and DDoS traffic while guaranteeing whitelisted search engine crawlers pass freely.",
    importance: "Critical"
  },
  {
    id: 297,
    category: "technical_crawl",
    tag: "Asset Versioning",
    name: "Cache Busting via Content Hashing in Asset Filenames",
    directive: "Append unique content hashes to filenames (e.g., `main.a9f4c.js`) so asset updates reflect immediately across caches.",
    importance: "Mandatory"
  },
  {
    id: 298,
    category: "technical_crawl",
    tag: "DNS Anycast",
    name: "Ultra-Fast Anycast DNS Resolution (<20ms)",
    directive: "Route domain through high-performance Anycast DNS providers (such as Cloudflare or Cloud DNS) to minimize initial lookup time.",
    importance: "High"
  },
  {
    id: 299,
    category: "technical_crawl",
    tag: "No Orphan Images",
    name: "Image Sitemaps or Integrated `<image:image>` Sitemaps",
    directive: "Include image locations in the XML sitemap with `<image:loc>` and `<image:title>` to rank in Google Image Search.",
    importance: "High"
  },
  {
    id: 300,
    category: "technical_crawl",
    tag: "Continuous Auditing",
    name: "Automated Continuous SEO & Performance CI/CD Audit",
    directive: "Run automated Lighthouse and broken-link audits in CI/CD build checks to prevent performance or SEO regressions before deploying.",
    importance: "Critical"
  }
];

// Generates the comprehensive Master Prompt to feed into ChatGPT / Claude / Gemini
export function generateMasterWebsitePrompt({ clientName = "[CLIENT_NAME]", websiteUrl = "[WEBSITE_URL]", industry = "[INDUSTRY]", primaryService = "[PRIMARY_SERVICE]" }) {
  const allDirectivesFormatted = WEBSITE_PROMPT_PARAMETERS.map(p => 
    `${p.id}. [${p.tag.toUpperCase()}] ${p.name}: ${p.directive}`
  ).join("\n");

  return `ACT AS AN ELITE PRINCIPAL WEB ARCHITECT & CHIEF TECHNICAL SEO OFFICER.

I need you to build/generate a world-class, agency-standard website for:
- Client / Brand: ${clientName}
- Website URL: ${websiteUrl}
- Industry / Niche: ${industry}
- Core Service / Offering: ${primaryService}

CRITICAL ARCHITECTURAL REQUIREMENT:
The generated website code, design system, HTML structure, copy, and technical configuration MUST STRICTLY COMPLY WITH ALL 300 OF THE FOLLOWING PARAMETERS (2026 Website SEO, AEO, GEO, LLMO, Speed & UX Directives).

Do NOT use generic placeholders or bloated code. Implement every parameter with production-ready precision:

---
${allDirectivesFormatted}
---

EXECUTION DELIVERABLES:
1. Complete HTML/React Component Architecture following these exact 300 directives.
2. Production-ready JSON-LD Schema Graph (@graph) linking Organization, WebSite, Service, BreadcrumbList, and FAQPage with canonical IDs.
3. High-converting copy with target keywords placed in the first 100 words, calibrated 1.5% density, and 40-word direct answer boxes for Google AI Overviews and Perplexity citations.
4. Clean, modular CSS/styling ensuring 95+ Mobile Lighthouse speed, zero layout shift (CLS < 0.05), and 48x48px touch targets.`;
}
