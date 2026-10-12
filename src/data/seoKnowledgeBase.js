// Comprehensive SEO Knowledge Base & 100-Day Operating System Data
// Features: Plain English non-technical explanations, traffic value proposition,
// ready-to-use AI prompts for every single step, and free tools/extensions.

export const FREE_TOOLS_DIRECTORY = [
  {
    id: "gsc",
    name: "Google Search Console",
    type: "Web Tool",
    category: "Analytics & Crawl",
    badge: "Official & 100% Free",
    description: "Google's direct dashboard showing your exact search queries, impressions, real Googlebot crawl stats, and Core Web Vitals.",
    url: "https://search.google.com/search-console",
    useCases: ["Striking distance query mining", "Requesting 24h fast indexing", "Soft 404 & crawl budget checks"]
  },
  {
    id: "detailed-seo",
    name: "Detailed SEO Extension",
    type: "Chrome Extension",
    category: "On-Page Diagnostic",
    badge: "Must-Have",
    description: "1-click instant audit of any page: reveals title length, meta description, canonical tag, robots indexability, and full H1-H6 heading hierarchy.",
    url: "https://chromewebstore.google.com/detail/detailed-seo-extension/pfjdepjjfajaccmbedjhdiicgikflckd",
    useCases: ["H1-H6 hierarchy verification", "Missing meta descriptions", "Canonical and OpenGraph checks"]
  },
  {
    id: "seo-minion",
    name: "SEO Minion",
    type: "Chrome Extension",
    category: "SERP & PAA Scraper",
    badge: "Essential",
    description: "Automatically scrapes 50+ Google 'People Also Ask' questions into a CSV, highlights broken links in red, and previews SERP snippets.",
    url: "https://seominion.com/",
    useCases: ["Exporting PAA questions for FAQ schema", "Highlighting broken 404 links on any page"]
  },
  {
    id: "redirect-path",
    name: "Redirect Path by Ayima",
    type: "Chrome Extension",
    category: "Technical SEO",
    badge: "Audit Standard",
    description: "Instantly flags HTTP status codes (200, 301, 302, 404, 500) and warns you if a link is going through a multi-hop redirect chain.",
    url: "https://chromewebstore.google.com/detail/redirect-path/aomidfknoampcfbfoenikakjichglian",
    useCases: ["Trailing slash redirect testing", "Killing multi-hop 301 chains to preserve PageRank"]
  },
  {
    id: "web-vitals",
    name: "Web Vitals Extension by Google",
    type: "Chrome Extension",
    category: "Core Web Vitals",
    badge: "Google Official",
    description: "Shows a live HUD (Heads-Up Display) in the corner of your browser with real-time LCP, CLS, and INP performance metrics.",
    url: "https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdaba fdkjomjmchff",
    useCases: ["Spotting layout shifts (CLS)", "Testing Largest Contentful Paint (LCP) speed"]
  },
  {
    id: "clarity",
    name: "Microsoft Clarity",
    type: "Web Tool",
    category: "CRO & Heatmaps",
    badge: "100% Free Forever",
    description: "Unlimited session recordings, scroll depth heatmaps, click maps, and rage-click detection to turn website visitors into paying customers.",
    url: "https://clarity.microsoft.com/",
    useCases: ["Finding where users get confused or bounce", "Testing call-to-action visibility"]
  },
  {
    id: "hunter",
    name: "Hunter.io Chrome Extension",
    type: "Chrome Extension",
    category: "Outreach & PR",
    badge: "Free Tier",
    description: "Finds the direct, verified email address of website owners, journalists, and editors associated with any website in 2 seconds.",
    url: "https://hunter.io/chrome",
    useCases: ["PR pitch outreach", "Claiming unlinked brand mentions"]
  },
  {
    id: "schema-builder",
    name: "Schema Builder & Structured Data Tool",
    type: "Chrome Extension",
    category: "Schema & JSON-LD",
    badge: "Rich Snippets",
    description: "Tests and validates JSON-LD schemas right in your browser, and generates custom schema code for FAQs, reviews, and businesses.",
    url: "https://chromewebstore.google.com/",
    useCases: ["Testing FAQ schema", "LocalBusiness schema validation"]
  },
  {
    id: "check-my-links",
    name: "Check My Links",
    type: "Chrome Extension",
    category: "Link Building",
    badge: "Broken Link Hunter",
    description: "Scans entire web pages and highlights all dead 404 links in red. Used for broken-link building outreach on competitor websites.",
    url: "https://chromewebstore.google.com/detail/check-my-links/ojkcdipnnfaheoobkbdk",
    useCases: ["Stealing competitor resource page backlinks", "Internal link health cleanup"]
  },
  {
    id: "rich-results",
    name: "Google Rich Results Test",
    type: "Web Tool",
    category: "Schema Validator",
    badge: "Official Google Tester",
    description: "Official tool to verify if your page code qualifies for star ratings, FAQ accordions, and sitelinks in Google search results.",
    url: "https://search.google.com/test/rich-results",
    useCases: ["Verifying schema code before publishing", "Checking rich snippet eligibility"]
  }
];

// Phase 1: Days 1 to 15 Heavy Technical Sprint (One-Time Foundation)
export const TECHNICAL_SPRINT_DAYS = [
  {
    day: 1,
    title: "Google Search Console & GA4 Integration Check",
    hackId: "#017 & #012",
    category: "Health & Analytics",
    tool: "Google Search Console + GA4",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "We check if Google has flagged the website with any secret penalties, and connect Google Analytics so we can track which exact search keywords bring in real sales and phone calls.",
    whyItHelps: "If a site has an unknown manual penalty, no amount of writing or marketing will work. Linking GSC to GA4 lets you prove to clients exactly which keywords generated revenue.",
    actionSteps: [
      "Open Google Search Console -> Security & Manual Actions tab. Ensure it shows 'No issues detected'.",
      "Open Google Analytics 4 -> Admin -> Product Links -> Search Console Links. Click 'Link' and connect the GSC property.",
      "Go to GA4 Reports -> Library -> Publish the 'Search Console' collection so search data appears in main menus."
    ],
    aiPrompt: `Act as a Senior Web Analytics Specialist. I am setting up Google Search Console and GA4 for my client [CLIENT_NAME] in the [INDUSTRY] industry with website [WEBSITE_URL].

Write a step-by-step non-technical verification checklist for me to ensure:
1. GSC property ownership is cleanly verified via DNS TXT record.
2. GA4 enhanced measurement is capturing outbound clicks, file downloads, and form submits.
3. Search Console reports are cleanly linked and publishing organic search data in GA4.
4. An executive summary paragraph I can send to the client explaining why linking these two tools protects their investment.`
  },
  {
    day: 2,
    title: "XML Sitemap & Orphaned Content Deep Clean",
    hackId: "#010",
    category: "Crawlability",
    tool: "Google Search Console + Screaming Frog Free",
    impact: "High",
    duration: "60 mins",
    plainEnglish: "Think of an XML sitemap like a VIP roadmap for Google's robots. We make sure every important page is on this map, and find 'orphaned' pages (lonely pages that have no links pointing to them).",
    whyItHelps: "If Google's bots don't know a page exists, it cannot rank. Ensuring all money pages are in the sitemap guarantees fast crawling and indexing.",
    actionSteps: [
      "Check your sitemap URL (usually yourdomain.com/sitemap_index.xml or /sitemap.xml).",
      "Submit the URL into Google Search Console -> Sitemaps tab.",
      "Check GSC 'Indexed, not submitted in sitemap' to find orphaned pages and either link to them or remove them."
    ],
    aiPrompt: `Act as a Technical SEO Architect. My client's website is [WEBSITE_URL] in the [INDUSTRY] niche.

I need an XML sitemap optimization strategy:
1. Generate the ideal XML sitemap structure for their site (e.g., distinguishing /pages-sitemap.xml, /blog-sitemap.xml, and /products-sitemap.xml).
2. What types of thin URLs should NEVER be included in an XML sitemap (e.g. thank-you pages, author archives, cart pages)?
3. Provide a robots.txt sitemap declaration syntax line and an executive note explaining how this prevents orphaned pages.`
  },
  {
    day: 3,
    title: "Robots.txt & Crawl Budget Shielding",
    hackId: "#097 & #018",
    category: "Crawl Budget",
    tool: "GSC Crawl Stats + Text Editor",
    impact: "High",
    duration: "30 mins",
    plainEnglish: "Google gives your website a limited amount of 'attention' (crawl budget) each day. We tell Google's bot: 'Don't waste your time crawling search filter bars or admin pages; spend 100% of your energy crawling our money-making services.'",
    whyItHelps: "Prevents search bots from getting trapped in endless internal search loops (like `/?s=keyword`), ensuring your high-value pages get indexed faster.",
    actionSteps: [
      "Open yourdomain.com/robots.txt in your browser.",
      "Add `Disallow: /?s=` and `Disallow: /search/` to block internal search results from being indexed.",
      "Check GSC Settings -> Crawl Stats to verify average server response time is fast and 200 OK responses are >95%."
    ],
    aiPrompt: `Act as a Technical SEO Master. Write the ultimate, safest robots.txt file for a modern website running on [PLATFORM/CMS] for domain [WEBSITE_URL].

Requirements:
- Allow all primary web crawlers (Googlebot, Bingbot).
- Disallow internal search query strings (e.g. /?s=, /search/).
- Disallow admin, staging, login, and cart checkout URLs.
- Include the explicit Sitemap: directive pointing to [WEBSITE_URL]/sitemap.xml.
- Include brief inline comments explaining each rule in plain English.`
  },
  {
    day: 4,
    title: "HTTP 410 'Gone' Status for Dead Pages & Soft 404 Fixes",
    hackId: "#096 & #011",
    category: "Status Codes",
    tool: "Server Config / Redirection Plugin + GSC",
    impact: "High",
    duration: "45 mins",
    plainEnglish: "When you delete an old page, normally it turns into a 404 (Not Found). Google will keep re-checking a 404 for months just in case. But returning a '410 Gone' tells Google: 'This page is dead forever, remove it from search immediately.'",
    whyItHelps: "Cleans out dead pages from Google's index in 48 hours instead of 6 months, instantly boosting the overall quality score of your whole domain.",
    actionSteps: [
      "Open GSC -> Pages tab. Check for 'Soft 404' errors (pages with very thin or missing content).",
      "For obsolete, discontinued pages that have no replacement, configure your server to return HTTP 410 Gone.",
      "For soft 404s that should exist, add 300+ words of helpful content or 301 redirect them to the most relevant live category."
    ],
    aiPrompt: `Act as a Web Server & Technical SEO Engineer. Explain HTTP 404 vs HTTP 410 vs HTTP 301 for my client [CLIENT_NAME] in plain English.

Then, provide:
1. Apache (.htaccess) and Nginx configuration code snippets to return a 410 Gone header for a list of URLs.
2. How to identify Soft 404s in Google Search Console and a decision tree on when to 301 redirect vs when to serve a 410 Gone.`
  },
  {
    day: 5,
    title: "Trailing Slash & WWW Canonicalization 301s",
    hackId: "#083",
    category: "Canonicalization",
    tool: "Redirect Path Chrome Extension",
    impact: "High",
    duration: "30 mins",
    plainEnglish: "To Google, `example.com/about` and `example.com/about/` (with a slash at the end) are two completely different websites! If both load, Google thinks you have duplicate content and splits your ranking power in half.",
    whyItHelps: "Forces all versions of your website into one single, master URL structure. Prevents Google from penalizing your site for duplicate content.",
    actionSteps: [
      "Test loading `http://domain.com`, `http://www.domain.com`, and `https://domain.com/page` vs `https://domain.com/page/`.",
      "Ensure all non-preferred versions 301 permanently redirect to your single primary canonical version.",
      "Verify using the Redirect Path Chrome extension that there is only 1 clean redirect hop."
    ],
    aiPrompt: `Act as a Senior DevOps and Technical SEO Consultant. 
Write the canonical redirect rules for Nginx, Apache (.htaccess), and Cloudflare Page Rules to ensure:
1. All HTTP traffic redirects to HTTPS.
2. All non-WWW traffic redirects to WWW (or vice-versa, depending on standard: [PREFERENCE]).
3. All URLs strictly enforce a trailing slash (e.g., /services/ instead of /services) without causing redirect loops.
Explain in 2 sentences why duplicate slash URLs ruin SEO rankings.`
  },
  {
    day: 6,
    title: "Redirect Chain Elimination & Link Equity Preservation",
    hackId: "#025",
    category: "Link Equity",
    tool: "Redirect Path Chrome Extension",
    impact: "High",
    duration: "40 mins",
    plainEnglish: "If Link A redirects to Link B, and Link B redirects to Link C, that is a 'redirect chain'. Every time Google has to jump between redirects, you lose ranking power (link equity) and the website loads slower.",
    whyItHelps: "Eliminating chains restores 100% of your link ranking power directly to your money pages and speeds up page load times.",
    actionSteps: [
      "Open your top 10 key landing pages with the Redirect Path Chrome extension turned on.",
      "If the extension icon shows multiple numbers (e.g. 301 -> 301 -> 200), you have a chain.",
      "Update internal menu and footer links so they point straight to the final destination URL."
    ],
    aiPrompt: `Act as a Technical SEO Auditor. 
Write an audit report on Redirect Chains for my client [CLIENT_NAME]:
1. Explain in simple terms what a redirect chain is and how it bleeds 'PageRank' and slows down mobile users.
2. Provide a 3-step action protocol to find and replace internal redirect chains in [CMS_PLATFORM] (e.g. WordPress, Shopify, Next.js).
3. Draft a short note for the development team specifying how internal links should always resolve with a direct HTTP 200 OK status.`
  },
  {
    day: 7,
    title: "JavaScript Rendering & Googlebot Readability Audit",
    hackId: "#030",
    category: "Indexability",
    tool: "Web Developer Chrome Extension",
    impact: "Critical",
    duration: "60 mins",
    plainEnglish: "Many modern websites use JavaScript to load content. But if Googlebot visits with JavaScript disabled and sees a completely blank white screen, it cannot read your words or rank you.",
    whyItHelps: "Guarantees that your headings, body copy, and internal links are instantly readable by search engines on the first crawl pass.",
    actionSteps: [
      "Install the Web Developer Chrome extension.",
      "Click Disable -> Disable JavaScript, then refresh your website.",
      "Check if your main headline, paragraphs, and navigation links are still clearly visible on the screen. If it goes blank, enable Server-Side Rendering (SSR) or pre-rendering."
    ],
    aiPrompt: `Act as a Head of Technical SEO specializing in JavaScript frameworks (Next.js, React, Vue).

My client's website is built with [TECH_STACK] at [WEBSITE_URL].
1. Explain how Googlebot crawls, renders, and indexes JavaScript-rendered websites (two-wave indexing).
2. What critical on-page elements MUST be present in the raw initial HTML payload (server-rendered) before client-side hydration?
3. Provide a quick checklist to verify that metadata, canonical tags, H1-H3s, and schema are visible without client-side JS.`
  },
  {
    day: 8,
    title: "Code Minification & HTML Syntax Validation",
    hackId: "#075 & #090",
    category: "Code Quality",
    tool: "W3C Validator + Build Tools",
    impact: "Medium",
    duration: "45 mins",
    plainEnglish: "We clean up the website's code by stripping out empty spaces, notes, and unclosed HTML tags. Think of it like compressing a big suitcase so it's super lightweight and easy to carry.",
    whyItHelps: "Smaller code files download much faster on mobile networks and prevent search bots from getting confused by broken code tags.",
    actionSteps: [
      "Paste your homepage URL into the free W3C Markup Validator (validator.w3.org).",
      "Fix any fatal unclosed tags (like missing `</div>` or `</p>`).",
      "Ensure HTML, CSS, and JS minification is enabled in your website build settings or CDN."
    ],
    aiPrompt: `Act as a Senior Frontend Performance Engineer.
1. Explain what HTML/CSS/JS minification does and how it reduces Time to First Byte (TTFB) and Largest Contentful Paint (LCP).
2. What are the 3 most common HTML structural errors caught by the W3C validator that can break search engine parsers?
3. How can I enable automatic minification in Next.js / modern web frameworks with zero plugin bloat?`
  },
  {
    day: 9,
    title: "Mega-Menu Simplification & PageRank Siloing",
    hackId: "#081",
    category: "Site Architecture",
    tool: "Detailed SEO Extension",
    impact: "High",
    duration: "60 mins",
    plainEnglish: "If your top header menu has 120 links in a giant dropdown, you are diluting your website's ranking power into 120 tiny drops. We trim the header to the 7 most important categories to funnel maximum power into them.",
    whyItHelps: "Funnels Google's PageRank equity straight into your highest-margin products and services, helping them rank on Page 1.",
    actionSteps: [
      "Use the Detailed SEO extension to count how many links are in your header navigation.",
      "If you have more than 50 links in the header, streamline it down to 7-9 primary pillars.",
      "Move secondary utility links (Privacy Policy, Terms, Careers, Login) to the footer."
    ],
    aiPrompt: `Act as an Information Architect and SEO Strategist. 
My client is [CLIENT_NAME] in the [INDUSTRY] niche with website [WEBSITE_URL].
They offer these primary services/products: [LIST_SERVICES].

Design a clean, high-ranking navigation structure:
1. Propose the top 6 to 8 primary navigation menu items that funnel internal PageRank to money pages.
2. Outline the logical sub-menu hierarchy (silo structure).
3. List which utility links should be strictly relegated to the footer.`
  },
  {
    day: 10,
    title: "HTML Sitemap & Breadcrumb Hierarchy Deployment",
    hackId: "#084 & #085",
    category: "Site Architecture",
    tool: "CMS + Schema Builder Extension",
    impact: "High",
    duration: "60 mins",
    plainEnglish: "An XML sitemap is for bots; an HTML sitemap is a human-friendly directory page in the footer. Breadcrumbs (`Home > Services > Dental Implants`) show users and Google exactly where they are in the website tree.",
    whyItHelps: "Breadcrumbs appear directly inside Google search result snippets, boosting your click-through rate, and helping Google understand your topic clusters.",
    actionSteps: [
      "Create a dedicated `/sitemap` page linked in your footer with an organized list of all key service and blog pages.",
      "Add breadcrumb navigation at the top of all sub-pages.",
      "Wrap the breadcrumbs in valid `BreadcrumbList` JSON-LD schema."
    ],
    aiPrompt: `Act as a Technical SEO Specialist. 
Generate a complete, valid JSON-LD schema markup snippet for BreadcrumbList for a service page:
- Breadcrumb 1: Home (https://example.com)
- Breadcrumb 2: Services (https://example.com/services)
- Breadcrumb 3: [SERVICE_NAME] (https://example.com/services/[SERVICE_SLUG])

Provide the script tag ready to paste into HTML, and explain how Google uses this to generate clean navigation paths in the search results.`
  },
  {
    day: 11,
    title: "Mobile Viewport, 48px Tap Targets & Interstitial Removal",
    hackId: "#086 & #087",
    category: "Mobile UX",
    tool: "Mobile Simulator Extension + Lighthouse",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Over 70% of web traffic is on mobile phones. Google will actively penalize sites that have tiny buttons close together that frustrate users, or giant popups that cover the whole screen the moment someone arrives.",
    whyItHelps: "Google ranks websites based on the Mobile-First index. Passing mobile usability tests is an absolute requirement to get top rankings.",
    actionSteps: [
      "Open your site in the Mobile Simulator Chrome extension or Chrome DevTools mobile view.",
      "Ensure all buttons and links are at least 48x48 pixels so human thumbs can easily tap them without misclicking.",
      "Remove or delay any email newsletter popups so they never block mobile users on their first visit."
    ],
    aiPrompt: `Act as a Mobile UX and Conversion Rate Optimization (CRO) Specialist.
1. Outline Google's explicit rules regarding 'Intrusive Interstitials' (mobile popups) and how violating them damages SEO rankings.
2. Provide CSS code to ensure all touch targets (buttons, links, form inputs) comply with Google's 48x48px mobile accessibility standard.
3. How should lead capture popups be triggered on mobile (e.g. exit intent, 50% scroll) so they capture leads without getting penalized by Google?`
  },
  {
    day: 12,
    title: "LCP Hero Image Preload & Local Font WOFF2 Migration",
    hackId: "#073, #071, #072",
    category: "Core Web Vitals",
    tool: "Web Vitals Extension + PageSpeed Insights",
    impact: "Critical",
    duration: "60 mins",
    plainEnglish: "The 'Largest Contentful Paint' (LCP) is the biggest visual element on the screen (usually your top hero banner image). We tell the browser: 'Download this picture FIRST before anything else,' and host fonts locally so the site loads in the blink of an eye.",
    whyItHelps: "Shaves 1 to 2 full seconds off mobile page load time. Google directly uses LCP as an official ranking factor.",
    actionSteps: [
      "Find the URL of your main hero image on the homepage.",
      "Add `<link rel=\"preload\" as=\"image\" href=\"/path/to/hero.webp\">` in your `<head>` tags.",
      "Stop fetching fonts from external Google Fonts URLs; download them as WOFF2 files and host them on your server."
    ],
    aiPrompt: `Act as a Core Web Vitals Speed Expert.
1. Write the exact HTML code snippet to preload a modern responsive hero image (WebP/AVIF) for desktop and mobile screen sizes.
2. Write the @font-face CSS block to load a local WOFF2 font with 'font-display: swap' to eliminate render-blocking font downloads.
3. Explain to a non-technical business owner how improving LCP from 4.0s to 1.8s prevents 40% of visitors from leaving before the page even opens.`
  },
  {
    day: 13,
    title: "CLS Zero-Shift Layout Fix & Native Lazy Loading",
    hackId: "#080 & #074",
    category: "Core Web Vitals",
    tool: "Web Vitals Chrome Extension",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Have you ever tried to tap a button on a website, but right as you tapped, an image loaded and the whole screen jumped, making you click the wrong thing? That's Cumulative Layout Shift (CLS). We fix it by telling images exactly how much space to reserve upfront.",
    whyItHelps: "Google penalizes websites that jump around. Fixing CLS to 0.00 makes the website feel instant and premium.",
    actionSteps: [
      "Check every `<img>` and `<iframe>` tag on your website and add explicit `width=\"...\" height=\"...\"` attributes.",
      "Add `loading=\"lazy\"` to all images and videos located below the top screen fold.",
      "Verify with the Web Vitals extension that CLS score is 0.00 (green)."
    ],
    aiPrompt: `Act as a Web Performance and Core Web Vitals Auditor.
1. Explain Cumulative Layout Shift (CLS) in a simple metaphor for a business owner.
2. Provide standard HTML and CSS examples showing how setting aspect-ratio or explicit width/height dimensions eliminates layout shift.
3. Provide the correct syntax for native lazy loading on images and iframes, and specify which images should NEVER be lazy-loaded (above-the-fold hero images).`
  },
  {
    day: 14,
    title: "Browser Caching Headers & Cloudflare Edge Caching",
    hackId: "#076 & #079",
    category: "Speed & Server",
    tool: "Cloudflare / Server Caching + DevTools",
    impact: "Critical",
    duration: "60 mins",
    plainEnglish: "When someone visits your website for the second time, their browser shouldn't have to download your logo and styling all over again. We tell their computer: 'Save our logo for 1 year.' And we put your site on Cloudflare so it loads from a local server near the visitor.",
    whyItHelps: "Makes Time to First Byte (TTFB) drop under 150ms anywhere in the world. Repeat visitors see pages load in less than 300 milliseconds.",
    actionSteps: [
      "Set `Cache-Control: public, max-age=31536000` headers on all static images, CSS, and JS files.",
      "Put the domain behind free Cloudflare CDN and turn on full page caching / Edge Caching.",
      "Add `defer` to non-critical analytics and tracking scripts."
    ],
    aiPrompt: `Act as a Cloud Infrastructure and CDN Specialist.
1. Provide the exact Cache-Control HTTP response headers to set for static assets (images, fonts, stylesheets, scripts) for maximum browser caching efficiency.
2. Write a step-by-step guide to configure free Cloudflare Edge Caching / Page Rules to cache static HTML without breaking dynamic forms or shopping carts.
3. Explain TTFB (Time to First Byte) in plain English and why Google rewards servers that respond in under 200ms.`
  },
  {
    day: 15,
    title: "LocalBusiness Schema, NAP Audit & Google Maps Embed",
    hackId: "#091, #092, #095",
    category: "Local & Entity Foundation",
    tool: "Google Rich Results Test + Schema Builder",
    impact: "Critical",
    duration: "60 mins",
    plainEnglish: "We stamp your official digital ID card into the code of your website. We give Google your exact Name, Address, Phone (NAP), opening hours, and GPS coordinates so Google knows with 100% certainty who you are and where you are located.",
    whyItHelps: "This is the single most important step to appear in the Google Maps '3-Pack' for searches like 'best [service] near me', which produces the highest-converting calls and inquiries.",
    actionSteps: [
      "Inject complete LocalBusiness / Organization JSON-LD schema into your website code.",
      "Embed a responsive Google Maps iframe on your Contact Us page.",
      "Verify that Name, Address, and Phone match your Google Business Profile letter-for-letter."
    ],
    aiPrompt: `Act as an Elite Local SEO Specialist.
Generate a complete, fully valid JSON-LD schema for a LocalBusiness for my client:
- Business Name: [BUSINESS_NAME]
- Category/Type: [BUSINESS_TYPE] (e.g., Dentist, LegalService, Plumber, Store)
- Address: [STREET, CITY, STATE, ZIP, COUNTRY]
- Phone: [PHONE_NUMBER]
- Website: [WEBSITE_URL]
- Geo Coordinates: [LATITUDE, LONGITUDE]
- Opening Hours: [HOURS, e.g. Mo-Fr 08:00-18:00]
- Price Range: $$
- SameAs Social Profiles: [FACEBOOK, LINKEDIN, INSTAGRAM, TWITTER]

Provide the clean, validated code wrapped in <script type="application/ld+json"> and instructions on where to paste it.`
  }
];

// Phase 2: Days 16 to 100 Compounding Repetition Engine
// The 7-Day Weekly Rhythm repeated across 12 Sprints
export const REPETITIVE_WEEKLY_CADENCE = [
  {
    dayOfWeek: "Monday",
    theme: "GSC Striking Distance Mining",
    icon: "🎯",
    coreHack: "Hack #001 & #006",
    tool: "Google Search Console",
    plainEnglish: "We find keywords where your website is already sitting on Page 2 (Positions 10 to 20). These are your easiest, fastest wins—a small tweak can bump them straight to Page 1.",
    whyItHelps: "Keywords on Page 2 get almost zero clicks. But nudging them into positions 1 to 5 brings an immediate flood of organic search visitors without writing a brand-new page.",
    dailyQuota: "Find 2-3 striking distance keywords; update their H1 or insert 2 internal links.",
    aiPrompt: `Act as a Search Intent & GSC Optimization Expert.
I have a webpage at [URL] currently ranking in position [CURRENT_POSITION] (impressions: [IMPRESSIONS], clicks: [CLICKS]) for the target keyword: [KEYWORD].

1. Analyze how to optimize the Title tag and H1 to better match search intent and improve click-through rate.
2. Provide 3 specific subheadings (H2/H3) addressing unanswered user questions to expand the page depth.
3. Suggest 2 internal link anchor text ideas to link from our highest-traffic pages to this target URL.`
  },
  {
    dayOfWeek: "Tuesday",
    theme: "Content Velocity & High-CTR Copy",
    icon: "✍️",
    coreHack: "Hack #042, #056, #057",
    tool: "CMS / Detailed SEO Extension",
    plainEnglish: "We publish a fresh, high-value guide or give an older post a makeover. We use psychological 'power words' and add the current year [2026] so searchers choose our link over competitors.",
    whyItHelps: "A high click-through rate (CTR) tells Google users love your result. Google rewards high CTR with higher rankings.",
    dailyQuota: "1 new post published or 2 legacy posts refreshed with updated publish date (#045).",
    aiPrompt: `Act as a World-Class SEO Copywriter.
Target Keyword: [TARGET_KEYWORD]
Audience: [TARGET_AUDIENCE] in [INDUSTRY]

Generate:
1. Five high-CTR Title Tag variations (under 60 characters) using emotional power words (Proven, Ultimate, Fast, Secret) and the current year [2026].
2. Five compelling Meta Descriptions (under 155 characters) with a clear call-to-action hook.
3. An irresistible first 150-word introduction that hooks the reader immediately, states the exact problem, and provides a 'TL;DR' bulleted summary box.`
  },
  {
    dayOfWeek: "Wednesday",
    theme: "Schema Injection & Fast Indexing",
    icon: "⚡",
    coreHack: "Hack #047, #008, #041",
    tool: "Schema Generator + GSC Inspection",
    plainEnglish: "We take 3 real questions users ask, answer them clearly, and wrap them in 'FAQ Schema'. Then we ask Google's bot to inspect the page immediately instead of waiting weeks.",
    whyItHelps: "FAQ schema gives your website extra real estate in search results with collapsible question dropdowns, pushing competitor links down the screen.",
    dailyQuota: "FAQ schema live & verified on Google Rich Results; fast indexation requested.",
    aiPrompt: `Act as a Technical SEO Specialist.
Here is the topic/page content for my client: [PASTE_CONTENT_OR_SUMMARY].

1. Identify the 3 most important frequently asked questions (FAQs) searchers have about this topic.
2. Write concise, authoritative 2-sentence answers for each question.
3. Generate valid JSON-LD FAQPage schema markup ready to paste into the webpage header.`
  },
  {
    dayOfWeek: "Thursday",
    theme: "Authority, PR & Link Outreach",
    icon: "🔗",
    coreHack: "Hack #035, #061, #064, #069",
    tool: "Connectively / HARO + Hunter.io",
    plainEnglish: "Backlinks are like votes of confidence from other websites. We pitch journalists on Connectively (HARO) and find websites that mentioned our client's brand without linking to them.",
    whyItHelps: "Google views websites with authoritative media backlinks as trustworthy leaders, which lifts the rankings of the entire website.",
    dailyQuota: "2 media pitches sent or 3 outreach emails for unlinked brand mentions.",
    aiPrompt: `Act as a Digital PR and Link Building Specialist.
Journalist Query Topic: [JOURNALIST_QUERY]
Our Client: [CLIENT_NAME], [FOUNDER_TITLE] in [INDUSTRY]
Client Website: [WEBSITE_URL]

Write a compelling, concise 3-paragraph pitch for a journalist on Connectively (HARO):
- Paragraph 1: Direct, non-fluff expert answer to the journalist's core question.
- Paragraph 2: Actionable tip or unique data point proving deep domain authority.
- Paragraph 3: Founder bio, credentials, and clean attribution link.`
  },
  {
    dayOfWeek: "Friday",
    theme: "CRO & Heatmap Optimization",
    icon: "🔥",
    coreHack: "Hack #048, #043, #044",
    tool: "Microsoft Clarity",
    plainEnglish: "Traffic is worthless if people don't buy or call! We watch free Microsoft Clarity screen recordings to see where visitors get stuck, and place bold Call-To-Action (CTA) buttons.",
    whyItHelps: "Doubling your conversion rate turns 10,000 clicks from 100 leads into 200 leads without spending a single extra penny on advertising.",
    dailyQuota: "1 high-traffic landing page audited for friction & CTA improved.",
    aiPrompt: `Act as a Conversion Rate Optimization (CRO) and User Experience Expert.
Here is the copy of my client's landing page: [PASTE_LANDING_PAGE_TEXT].

Audit this page for conversion leaks:
1. Identify 3 friction points that might cause visitors to hesitate or bounce.
2. Propose a high-contrast Call-To-Action (CTA) button text and subtext (e.g., 'Get Your Free Quote - No Obligation').
3. Suggest where to position the CTA (e.g. sticky header, 50% scroll depth, bottom) to maximize inquiries.`
  },
  {
    dayOfWeek: "Saturday",
    theme: "Competitor Recon & Local Map Velocity",
    icon: "🔍",
    coreHack: "Hack #028, #093, #022",
    tool: "SEO Minion + Google Business",
    plainEnglish: "We scrape competitor questions from Google using SEO Minion, publish a fresh photo and update on Google Business Profile, and respond to customer reviews.",
    whyItHelps: "Consistent Google Business Profile activity signals to Google that your business is open, thriving, and deserves the #1 spot in Google Maps.",
    dailyQuota: "1 GBP update posted + new question backlog populated for next week.",
    aiPrompt: `Act as a Local SEO & Reputation Manager.
Client: [CLIENT_NAME] in [CITY, STATE]
Service/Niche: [SERVICE_TYPE]

1. Write an engaging, keyword-optimized Google Business Profile post (under 150 words) highlighting a seasonal offer or helpful tip with a strong CTA button.
2. Draft 2 professional, warm review reply templates: one for a glowing 5-star review, and one for a constructive review, weaving in local keywords naturally.`
  },
  {
    dayOfWeek: "Sunday",
    theme: "Sprint Verification & Client Proof Logging",
    icon: "📈",
    coreHack: "Hack #013, #100",
    tool: "Looker Studio / GSC",
    plainEnglish: "We measure non-branded search growth, log every completed task with proof links inside the client dashboard, and generate an executive report.",
    whyItHelps: "Total transparency builds unshakeable client trust. When clients see proof of continuous work, they happily pay their monthly retainers.",
    dailyQuota: "Weekly progress score updated; proof logs verified.",
    aiPrompt: `Act as an Agency Client Success Director.
Write a weekly executive progress email to my client [CLIENT_NAME]:
- Summarize that Sprint Week [WEEK_NUMBER] of our 100-Day SEO Engine was successfully executed.
- Highlight key wins: [LIST_WINS, e.g. 2 new articles indexed, schema validated, LCP speed improved by 35%].
- Outline next week's focus areas.
- Maintain a confident, high-value, partner-level tone.`
  }
];

// Helper to assemble all 100 days
export function generate100DaysProgram() {
  const days = [];

  // Days 1 to 15: Heavy Technical Sprint
  TECHNICAL_SPRINT_DAYS.forEach(item => {
    days.push({
      dayNumber: item.day,
      phase: 1,
      phaseName: "Phase 1: Heavy Technical Sprint",
      title: item.title,
      hackId: item.hackId,
      category: item.category,
      tool: item.tool,
      duration: item.duration,
      impact: item.impact,
      plainEnglish: item.plainEnglish,
      whyItHelps: item.whyItHelps,
      actionSteps: item.actionSteps,
      aiPrompt: item.aiPrompt,
      isRepetitive: false,
      milestone: null
    });
  });

  // Days 16 to 100: Repetitive Compounding Engine (85 Days across 12 Sprints)
  const cadenceDays = [
    { name: "Monday", data: REPETITIVE_WEEKLY_CADENCE[0] },
    { name: "Tuesday", data: REPETITIVE_WEEKLY_CADENCE[1] },
    { name: "Wednesday", data: REPETITIVE_WEEKLY_CADENCE[2] },
    { name: "Thursday", data: REPETITIVE_WEEKLY_CADENCE[3] },
    { name: "Friday", data: REPETITIVE_WEEKLY_CADENCE[4] },
    { name: "Saturday", data: REPETITIVE_WEEKLY_CADENCE[5] },
    { name: "Sunday", data: REPETITIVE_WEEKLY_CADENCE[6] }
  ];

  for (let d = 16; d <= 100; d++) {
    const cycleIndex = (d - 16) % 7;
    const sprintWeek = Math.floor((d - 16) / 7) + 3;
    const cadence = cadenceDays[cycleIndex];

    let milestone = null;
    if (d === 30) milestone = "🎯 MILESTONE 1: Month 1 Review (Benchmark: 1,000+ organic clicks/mo). Verify indexing velocity and crawl rate.";
    if (d === 60) milestone = "🚀 MILESTONE 2: Month 2 Review (Benchmark: 4,000+ organic clicks/mo). Merge cannibalizing posts (#050) & double down on top cluster.";
    if (d === 90) milestone = "🔥 MILESTONE 3: Month 3 Review (Benchmark: 8,000+ organic clicks/mo). Optimize high-intent conversion pathways.";
    if (d === 100) milestone = "🏆 100-DAY FINALE: Target Achieved (10,000 organic clicks/mo). Generate full executive audit deliverable report.";

    days.push({
      dayNumber: d,
      phase: 2,
      phaseName: `Phase 2: Sprint Week ${sprintWeek}`,
      title: `${cadence.name}: ${cadence.data.theme}`,
      hackId: cadence.data.coreHack,
      category: `Weekly Rhythm (${cadence.name})`,
      tool: cadence.data.tool,
      duration: "45-60 mins",
      impact: d % 10 === 0 ? "Critical" : "High",
      plainEnglish: cadence.data.plainEnglish,
      whyItHelps: cadence.data.whyItHelps,
      actionSteps: [
        `Execute today's quota: ${cadence.data.dailyQuota}`,
        `Use ${cadence.data.tool} to verify changes live on the website.`,
        "Record completion notes and proof link in the Client Proof of Work log."
      ],
      aiPrompt: cadence.data.aiPrompt,
      isRepetitive: true,
      milestone: milestone
    });
  }

  return days;
}

export const INITIAL_CLIENTS = [
  {
    id: "client-1",
    name: "Apex Cosmetic Dentistry",
    domain: "apexdentalstudio.com",
    industry: "Local Medical & Aesthetics",
    targetClicks: 10000,
    currentClicks: 2850,
    startDate: "2026-09-01",
    targetDate: "2026-12-10",
    primaryKeywords: ["cosmetic dentist austin", "teeth whitening downtown", "invisalign provider tx"],
    completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    inProgressDays: [24, 25],
    proofLogs: {
      "1": {
        date: "2026-09-01",
        by: "Lead SEO",
        notes: "GSC verified, 0 manual penalties. GA4 search console product link active.",
        link: "https://search.google.com/search-console"
      },
      "12": {
        date: "2026-09-12",
        by: "Frontend Dev",
        notes: "Added <link rel='preload' as='image'> for hero banner. LCP improved from 3.8s to 1.7s.",
        link: "https://pagespeed.web.dev"
      },
      "15": {
        date: "2026-09-15",
        by: "Tech Specialist",
        notes: "Injected LocalBusiness schema with doctor NPI, hours, coordinates. Passed Rich Results Test.",
        link: "https://search.google.com/test/rich-results"
      },
      "16": {
        date: "2026-09-16",
        by: "Content Strategist",
        notes: "Mined striking distance query 'porcelain veneers austin cost' (position 14). Updated H1 and added FAQ.",
        link: "https://apexdentalstudio.com/veneers"
      }
    }
  },
  {
    id: "client-2",
    name: "CloudMetrics Analytics",
    domain: "cloudmetrics.io",
    industry: "B2B SaaS / DevOps Monitoring",
    targetClicks: 10000,
    currentClicks: 5120,
    startDate: "2026-08-15",
    targetDate: "2026-11-23",
    primaryKeywords: ["kubernetes monitoring tool", "cloud cost tracker", "devops observability dashboard"],
    completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    inProgressDays: [36, 37],
    proofLogs: {
      "14": {
        date: "2026-08-28",
        by: "DevOps Engineer",
        notes: "Configured Cloudflare Edge caching with 1-year max-age headers for assets. TTFB reduced to 80ms worldwide.",
        link: "https://cloudflare.com"
      },
      "30": {
        date: "2026-09-14",
        by: "Growth Lead",
        notes: "Completed Month 1 review! Organic clicks increased from 1,200 to 5,120. Reached 30-day milestone.",
        link: "https://cloudmetrics.io"
      }
    }
  }
];
