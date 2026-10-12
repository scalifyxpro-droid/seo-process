// Comprehensive SEO Knowledge Base & 100-Day Operating System Data
// Features: Plain English non-technical explanations, traffic value proposition,
// ready-to-use AI prompts for every single step, and free tools/extensions.

export const FREE_TOOLS_DIRECTORY = [
  {
    id: "gsc",
    name: "Google Search Console",
    type: "Official Google Web Tool",
    category: "Analytics & Crawl",
    badge: "100% Free Forever",
    description: "Google's direct official dashboard showing your exact search queries, impressions, real Googlebot crawl stats, and Core Web Vitals.",
    url: "https://search.google.com/search-console",
    useCases: ["Striking distance query mining", "Requesting 24h fast indexing", "Soft 404 & crawl budget checks"]
  },
  {
    id: "detailed-seo",
    name: "Detailed SEO Extension",
    type: "Chrome Extension",
    category: "On-Page Diagnostic",
    badge: "100% Free Extension",
    description: "1-click instant audit of any page: reveals title length, meta description, canonical tag, robots indexability, and full H1-H6 heading hierarchy.",
    url: "https://chromewebstore.google.com/detail/detailed-seo-extension/pfjdepjjfajaccmbedjhdiicgikflckd",
    useCases: ["H1-H6 hierarchy verification", "Missing meta descriptions", "Canonical and OpenGraph checks"]
  },
  {
    id: "seo-minion",
    name: "SEO Minion",
    type: "Chrome Extension",
    category: "SERP & PAA Scraper",
    badge: "100% Free Extension",
    description: "Automatically scrapes 50+ Google 'People Also Ask' questions into a CSV, highlights broken links in red, and previews SERP snippets.",
    url: "https://seominion.com/",
    useCases: ["Exporting PAA questions for FAQ schema", "Highlighting broken 404 links on any page"]
  },
  {
    id: "redirect-path",
    name: "Redirect Path by Ayima",
    type: "Chrome Extension",
    category: "Technical SEO",
    badge: "100% Free Extension",
    description: "Instantly flags HTTP status codes (200, 301, 302, 404, 500) and warns you if a link is going through a multi-hop redirect chain.",
    url: "https://chromewebstore.google.com/detail/redirect-path/aomidfknoampcfbfoenikakjichglian",
    useCases: ["Trailing slash redirect testing", "Killing multi-hop 301 chains to preserve PageRank"]
  },
  {
    id: "web-vitals",
    name: "Web Vitals Extension by Google",
    type: "Chrome Extension",
    category: "Core Web Vitals",
    badge: "Official & 100% Free",
    description: "Shows a live HUD (Heads-Up Display) in the corner of your browser with real-time LCP, CLS, and INP performance metrics.",
    url: "https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabaladfaaeikhomjmchff",
    useCases: ["Spotting layout shifts (CLS)", "Testing Largest Contentful Paint (LCP) speed"]
  },
  {
    id: "keyword-surfer",
    name: "Keyword Surfer Chrome Extension",
    type: "Chrome Extension",
    category: "Keyword Research",
    badge: "100% Free Extension",
    description: "Generates search volume, CPC, word count, and related keyword ideas directly inside Google Search results with $0 cost.",
    url: "https://chromewebstore.google.com/detail/keyword-surfer/bfdcomobhbnaeaaogfikmgghoiipjhcf",
    useCases: ["Instant search volume checking", "Finding long-tail keyword variations directly on Google SERP"]
  },
  {
    id: "clarity",
    name: "Microsoft Clarity",
    type: "Official Microsoft Web Tool",
    category: "CRO & Heatmaps",
    badge: "100% Free Forever",
    description: "Unlimited session recordings, scroll depth heatmaps, click maps, and rage-click detection to turn website visitors into paying customers.",
    url: "https://clarity.microsoft.com/",
    useCases: ["Finding where users get confused or bounce", "Testing call-to-action visibility"]
  },
  {
    id: "pagespeed",
    name: "Google PageSpeed Insights",
    type: "Official Google Web Tool",
    category: "Performance Audit",
    badge: "100% Free Forever",
    description: "Official Google laboratory & field CrUX test analyzing mobile speed, TTFB, render-blocking scripts, and server response time.",
    url: "https://pagespeed.web.dev/",
    useCases: ["CrUX Core Web Vitals scoring", "Identifying unoptimized images and slow CSS"]
  },
  {
    id: "mobile-simulator",
    name: "Mobile Simulator - Responsive Testing",
    type: "Chrome Extension",
    category: "Mobile UX",
    badge: "100% Free Extension",
    description: "Simulates smartphones and tablets in your browser with exact viewport sizes to verify 48x48px touch targets and layout stability.",
    url: "https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkfaekdnpgikl",
    useCases: ["Mobile viewport audit", "Testing sticky CTA buttons on iPhone/Android screens"]
  },
  {
    id: "schema-builder",
    name: "Schema Builder & Structured Data Tool",
    type: "Chrome Extension",
    category: "Schema & JSON-LD",
    badge: "100% Free Extension",
    description: "Tests and validates JSON-LD schemas right in your browser, and generates custom schema code for FAQs, Organization, and Services.",
    url: "https://chromewebstore.google.com/",
    useCases: ["Testing FAQ schema", "Organization and Service schema validation"]
  },
  {
    id: "check-my-links",
    name: "Check My Links",
    type: "Chrome Extension",
    category: "Link Building",
    badge: "100% Free Extension",
    description: "Scans entire web pages and highlights all dead 404 links in red. Used for broken-link building outreach on authority resource websites.",
    url: "https://chromewebstore.google.com/detail/check-my-links/ojkcdipnnfaheoobkbdk",
    useCases: ["Finding broken 404 links on resource pages", "Internal link health cleanup"]
  },
  {
    id: "rich-results",
    name: "Google Rich Results Test",
    type: "Official Google Web Tool",
    category: "Schema Validator",
    badge: "100% Free Forever",
    description: "Official Google tester to verify if your page code qualifies for star ratings, FAQ accordions, and sitelinks in Google search results.",
    url: "https://search.google.com/test/rich-results",
    useCases: ["Verifying schema code before publishing", "Checking rich snippet eligibility"]
  },
  {
    id: "looker-studio",
    name: "Google Looker Studio",
    type: "Official Google Web Tool",
    category: "Automated Dashboards",
    badge: "100% Free Forever",
    description: "Google's free data dashboard connecting directly to Google Search Console and GA4 for automated rank and traffic tracking.",
    url: "https://lookerstudio.google.com/",
    useCases: ["Automated monthly organic click tracking", "Monitoring Page 2 striking distance keywords"]
  }
];

// // Phase 1: Days 1 to 15 Heavy Foundation Sprint (Keyword Research + pSEO Launch)
export const TECHNICAL_SPRINT_DAYS = [
  {
    day: 1,
    title: "Seed Keyword Brainstorming & Customer Problem Identification",
    hackId: "#001",
    category: "Keyword Research",
    tool: "Google Search + Free Google Docs ($0 Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Before building or writing anything, we identify the exact core terms your customers type when they have an urgent problem or want to buy your services. We map customer pain points to high-intent search terms.",
    whyItHelps: "Prevents ranking for useless terms that bring zero buyers. Ensures every page targets verified search volume and real commercial intent from Day 1.",
    actionSteps: [
      "Write down 5 core services or products offered by the business.",
      "Write down 3 common customer pain points (e.g. 'emergency roof leak', 'teeth whitening sensitive gums').",
      "Plug each service into Google Search and observe what related searches appear at the bottom of the page."
    ],
    aiPrompt: `Act as a Master Keyword Research Strategist. My client is [CLIENT_NAME] in the [INDUSTRY] industry with website [WEBSITE_URL]. Offerings: [PRIMARY_SERVICE]. 

Generate 25 high-intent seed keywords categorized by:
1. Urgent Customer Problem / Emergency Queries (High Purchase Intent)
2. Commercial Investigation Queries ('Best', 'Cost', 'Near Me')
3. Informational How-To Queries (Top of Funnel)
4. List the exact pain-point phrases real buyers use before spending money.`
  },
  {
    day: 2,
    title: "Google Autocomplete & Alphabet Soup Scraping",
    hackId: "#002",
    category: "Keyword Research",
    tool: "Google Search Bar ($0 Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "We use Google's search bar like a free goldmine. By typing your keyword followed by 'a', 'b', 'c', Google reveals the exact real searches millions of people type every month.",
    whyItHelps: "Uncovers hidden long-tail keywords that competitors miss, allowing a new website to rank on Page 1 in weeks instead of months with zero paid tools.",
    actionSteps: [
      "Type '[Service] a', '[Service] b', '[Service] c' into the Google search bar in an incognito window.",
      "Note down every autocomplete suggestion with commercial intent.",
      "Organize the phrases into a free Google Sheet spreadsheet grouped by intent."
    ],
    aiPrompt: `Act as a Search Engine Data Mining Specialist. 
For the seed term '[PRIMARY_SERVICE]', generate the 30 most lucrative Google Alphabet Soup autocomplete query variations:
- 10 variations starting with 'How to...'
- 10 variations containing 'Cost / Price / Affordable...'
- 10 variations containing '[PRIMARY_SERVICE] for [SPECIFIC USE CASE]'.
Explain how targeting these long-tail queries lets a new site outrank established competitors.`
  },
  {
    day: 3,
    title: "Google People Also Ask (PAA) Question Scraping",
    hackId: "#003",
    category: "Keyword Research",
    tool: "SEO Minion Extension (Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Google displays an interactive 'People Also Ask' box on almost every search. We scrape these questions to get the exact headings and FAQ questions to include on your pages.",
    whyItHelps: "Directly prepares your website to win Google AI Overviews and Featured Snippets by answering the exact questions Google users ask.",
    actionSteps: [
      "Install the free SEO Minion Chrome extension.",
      "Search your primary keyword in Google.",
      "Click 'PAA (People Also Ask) - 2 levels deep' in SEO Minion to automatically export 50+ real questions into a CSV file."
    ],
    aiPrompt: `Act as an AEO and Content Architect. I have scraped these 15 'People Also Ask' questions for [PRIMARY_SERVICE]: [LIST_PAA_QUESTIONS].

1. Group them into 3 logical topic clusters.
2. Formulate a 40-word definitive answer for the top 3 questions designed specifically for Google AI Overviews.
3. Recommend how to place these questions as H2 and H3 subheadings on our service pages.`
  },
  {
    day: 4,
    title: "Search Intent Classification (Info vs Commercial vs Nav vs Trans)",
    hackId: "#004",
    category: "Keyword Strategy",
    tool: "Keyword Surfer Free (Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Every search has an intent: Informational (learning), Commercial (comparing options), Transactional (buying now), or Navigational. Matching the wrong page type will kill your rankings.",
    whyItHelps: "Google will never rank a sales page for a query where searchers want a 'how-to' guide. Classifying intent guarantees 100% search intent match.",
    actionSteps: [
      "Label each keyword in your sheet as Informational, Commercial, or Transactional.",
      "Search the keyword in Google in an incognito window to verify what Google ranks (blog post, product page, or comparison table).",
      "Align your page template to match what Google's algorithm currently favors."
    ],
    aiPrompt: `Act as a Search Intent Algorithm Specialist. 
Classify these 20 keywords for [WEBSITE_URL]: [KEYWORD_LIST] into:
- Informational (Top of Funnel - Needs Guide)
- Commercial Investigation (Middle of Funnel - Needs Comparison Matrix)
- Transactional (Bottom of Funnel - Needs Booking / Quote Page)

For each keyword, prescribe the exact page template and word count needed to rank #1.`
  },
  {
    day: 5,
    title: "Competitor Keyword Gap Analysis Using Google Search Operators",
    hackId: "#005",
    category: "Competitive Intelligence",
    tool: "Google Search Operators ($0 Free)",
    impact: "High",
    duration: "45 mins",
    plainEnglish: "We spy on your top 3 ranking competitors using free Google search operators like `site:competitor.com` to discover all the keywords they rank for that you haven't written about yet.",
    whyItHelps: "Steals your competitors' proven keyword playbook for $0 without paying for expensive SEO subscriptions.",
    actionSteps: [
      "Search `site:competitor.com \"service\"` or `site:competitor.com inurl:blog` in Google.",
      "Review their top ranking URLs, page titles, and heading tags using the Detailed SEO extension.",
      "Add their top performing topics to your keyword roadmap."
    ],
    aiPrompt: `Act as a Competitive Intelligence Analyst. My competitors are [COMPETITOR_1_URL] and [COMPETITOR_2_URL]. 

What search operators can I run in Google to uncover their highest-traffic content silos, hidden landing pages, and commercial service hubs for $0? Provide the exact Google search queries to run.`
  },
  {
    day: 6,
    title: "Reddit & Quora Customer Language & Pain Point Mining",
    hackId: "#006",
    category: "Customer Research",
    tool: "Reddit & Quora Search ($0 Free)",
    impact: "High",
    duration: "45 mins",
    plainEnglish: "Real people talk on Reddit and Quora without marketing jargon. We search Reddit to find the exact raw words, fears, and questions real customers use.",
    whyItHelps: "Helps you write copy that resonates emotionally with users, reducing bounce rates and boosting dwell time—which Google loves.",
    actionSteps: [
      "In Google, search `site:reddit.com \"[industry]\" \"how to\"` or `site:reddit.com \"[service]\" \"cost\"`.",
      "Identify the recurring frustrations and objections users mention.",
      "Use their exact vocabulary in your page headlines and FAQ sections."
    ],
    aiPrompt: `Act as a Qualitative Market Researcher. 
Analyze discussions around [INDUSTRY / SERVICE] on Reddit and Quora:
1. What are the 5 biggest customer frustrations and fears?
2. What are 3 unaddressed buyer objections competitors fail to answer?
3. List the exact emotional phrasing and questions customers use when seeking a reliable solution.`
  },
  {
    day: 7,
    title: "Keyword Difficulty Filtering & Low-Competition Gems",
    hackId: "#007",
    category: "Keyword Strategy",
    tool: "Keyword Surfer Free ($0 Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Trying to rank for broad single words as a new site is impossible. We filter our list to find low-competition long-tail keywords with low domain authority competition on Page 1.",
    whyItHelps: "Gets your new website ranking on Page 1 in the first 30–60 days instead of waiting 2 years fighting giant national brands.",
    actionSteps: [
      "Enable the free Keyword Surfer extension on Google Chrome.",
      "Search your target keywords and check the estimated search volume and keyword similarity.",
      "Prioritize keywords with 50 to 500 monthly searches where the top 5 ranking results are forums or weak blogs."
    ],
    aiPrompt: `Act as a Low-Competition SEO Strategist. 
For a brand-new website in the [INDUSTRY] niche with website [WEBSITE_URL], give me 15 low-competition 'striking distance' keyword topics (3 to 5 words long) that have high conversion intent and weak SERP competition.`
  },
  {
    day: 8,
    title: "Keyword-to-URL Mapping Matrix (1 Target Keyword Per Page)",
    hackId: "#008",
    category: "Information Architecture",
    tool: "Google Sheets ($0 Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Every page on your website must have ONE primary master keyword and 3–5 supporting synonyms. If two pages target the exact same keyword, they cannibalize and kill each other's rankings.",
    whyItHelps: "Eliminates keyword cannibalization. Creates a crystal clear 1-to-1 blueprint for the entire website development team.",
    actionSteps: [
      "Open your master Google Sheet.",
      "Create columns: Page URL Slug, Primary Keyword, Secondary LSI Keywords, Search Intent, Target Word Count.",
      "Ensure no two URLs share the same primary keyword."
    ],
    aiPrompt: `Act as a Website Information Architect. 
Build a complete Keyword-to-URL Mapping Matrix for [CLIENT_NAME] in [INDUSTRY] covering 10 essential website pages:
- URL Slug (clean lowercase)
- Primary Target Keyword
- 3 Secondary LSI Keywords
- Search Intent
- Recommended Content Format & Word Count`
  },
  {
    day: 9,
    title: "LSI Synonyms & Semantic Entity Grouping",
    hackId: "#009",
    category: "Semantic SEO",
    tool: "Google Related Searches ($0 Free)",
    impact: "High",
    duration: "45 mins",
    plainEnglish: "Google doesn't just match keywords; it understands concepts (entities). We find related terms (LSI) so Google knows our page covers the entire topic from A to Z.",
    whyItHelps: "Protects against Google SpamBrain penalties while increasing rankings for dozens of secondary long-tail queries simultaneously.",
    actionSteps: [
      "Scroll to the bottom of Google SERP to the 'Related searches' block.",
      "Note down all 8 related searches and semantic variations.",
      "Weave these phrases naturally into your article subheadings (H2/H3) and image alt tags."
    ],
    aiPrompt: `Act as a Semantic SEO Specialist. 
For the primary topic '[PRIMARY_SERVICE]', generate an entity graph list of 20 Latent Semantic Indexing (LSI) terms, related industry bodies, specifications, and synonyms to incorporate into a 1,000-word comprehensive guide.`
  },
  {
    day: 10,
    title: "Topic Silo Architecture & Category Folder Hierarchy Plan",
    hackId: "#010",
    category: "Site Architecture",
    tool: "Detailed SEO Extension (Free)",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "We organize your website like a neatly organized filing cabinet. Parent categories (e.g. `/services/`) hold child pages (e.g. `/services/service-a`). This funnels ranking power cleanly.",
    whyItHelps: "Prevents messy flat URL sprawl, passes PageRank equity down into money pages, and establishes deep topical authority.",
    actionSteps: [
      "Map out 3–5 core pillar categories for the website.",
      "Place child service and programmatic pages inside clean sub-folders.",
      "Design breadcrumbs navigation (Home > Category > Page) to mirror this folder tree."
    ],
    aiPrompt: `Act as a Technical Information Architect. 
Design the complete URL taxonomy and topic silo structure for [WEBSITE_URL] offering [PRIMARY_SERVICE]. Provide the exact folder paths, parent-child relationships, and internal linking rules to maximize PageRank distribution.`
  },
  {
    day: 11,
    title: "Programmatic SEO Architecture: Service × Top 20 Metro Matrix",
    hackId: "#042 & #094",
    category: "Programmatic SEO",
    tool: "pSEO Generator Tool",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "Instead of ranking in only 1 city, we design a smart grid to target 20 surrounding cities and suburbs all at once so your website captures searchers across the entire region.",
    whyItHelps: "Multiplies your search footprint by 20x. People search for local services by their specific suburb or city name (e.g. 'Emergency Plumber in Round Rock').",
    actionSteps: [
      "Open the pSEO Generator tab in the dashboard.",
      "Enter your primary service (e.g., Cosmetic Dentistry, Plumbing) and list your top 10-20 surrounding target cities.",
      "Review the generated URL slugs (e.g., /plumber-austin, /plumber-round-rock)."
    ],
    aiPrompt: `Act as a Programmatic SEO Architect.
For my website [WEBSITE_URL] offering [SERVICE] in [MAIN_METRO_AREA]:
1. List the top 15 surrounding suburban cities, counties, and high-income neighborhoods with search demand.
2. Outline the URL slug structure and target H1 headers for each location.
3. Formulate the core value hook to include in the opening 100 words of every page.`
  },
  {
    day: 12,
    title: "Programmatic Content Factory: 1,000-Word Location Pages Generation",
    hackId: "#042 & #060",
    category: "Programmatic SEO",
    tool: "pSEO Generator Tool",
    impact: "Critical",
    duration: "60 mins",
    plainEnglish: "We generate 1,000+ words of rich, helpful text for each city page. The exact keyword is placed in the first 100 words, but we keep keyword density at a safe 1.5% to avoid Google spam penalties.",
    whyItHelps: "Thin doorway pages get penalized by Google. Providing 1,000+ words with unique local neighborhood references, bulleted summary boxes, and local phone CTAs guarantees high rankings.",
    actionSteps: [
      "Click 'Generate Programmatic Location Pages' in the dashboard.",
      "Verify that the target keyword appears in the first 100 words and H1 for each generated city page.",
      "Verify keyword density stays between 1.2% and 1.8%."
    ],
    aiPrompt: `Act as an Elite SEO Copywriter.
Service: [SERVICE]
City: [CITY], [STATE]
Brand: [CLIENT_NAME]

Generate a comprehensive 1,000-word location service landing page:
1. Target keyword in the H1 and within the first 100 words hook.
2. Bulleted TL;DR Summary Box above the fold.
3. Breakdown of 4 local neighborhoods served in [CITY].
4. High-contrast phone hotline CTA at 50% and 100% scroll depth.
5. 3 unique local FAQs with 2-sentence direct answers.`
  },
  {
    day: 13,
    title: "Programmatic Schema Deployment: LocalBusiness & FAQ JSON-LD",
    hackId: "#047 & #091",
    category: "Programmatic Schema",
    tool: "Rich Results Test + Schema Builder",
    impact: "Critical",
    duration: "45 mins",
    plainEnglish: "We inject official Google structured data (ID tags) onto every single location page so Google knows the exact city, telephone number, and FAQ accordions for each area.",
    whyItHelps: "Qualifies your city pages for rich search snippets (star ratings, FAQ dropdowns, phone buttons) which push competitor search results down the screen.",
    actionSteps: [
      "Copy the generated LocalBusiness JSON-LD schema for each city page from the pSEO Generator tab.",
      "Copy the FAQPage schema and embed both scripts into the <head> of the location pages.",
      "Test in the free Google Rich Results Test to confirm zero syntax errors."
    ],
    aiPrompt: `Act as a Technical Schema Engineer.
Generate valid JSON-LD schemas for a local service page in [CITY], [STATE]:
1. LocalBusiness schema with areaServed: '[CITY]', telephone, and addressLocality.
2. FAQPage schema with 2 unique local questions and answers.
Provide clean, minified script tags ready to paste into the page header.`
  },
  {
    day: 14,
    title: "Geo-Silo Mesh Linking & Location Sub-Sitemap Submission",
    hackId: "#010 & #084",
    category: "Programmatic SEO",
    tool: "Detailed SEO Ext + GSC",
    impact: "High",
    duration: "45 mins",
    plainEnglish: "We connect all the location pages together in a clean 'Locations' menu and footer directory, and add them to a dedicated location sitemap so Googlebot crawls them all in one visit.",
    whyItHelps: "Internal links pass authority from your homepage directly into your new city pages, helping them rank on Google much faster.",
    actionSteps: [
      "Add a 'Locations We Serve' section or dropdown in your website footer listing the target cities.",
      "Ensure each city page links back to your main service page and 2 adjacent nearby city pages.",
      "Add the new location URLs into your XML sitemap and submit to Google Search Console."
    ],
    aiPrompt: `Act as an Internal Linking Architect.
I have launched 15 location landing pages for [SERVICE] across [METRO_AREA].
1. Design an internal linking mesh (geo-silo) where nearby cities link to each other without creating link loops.
2. Draft a clean footer 'Areas We Serve' HTML menu layout with optimal anchor texts.`
  },
  {
    day: 15,
    title: "Batch Indexation Request & Initial Multi-City Rank Scan",
    hackId: "#008 & #021",
    category: "Programmatic SEO",
    tool: "GSC URL Inspection + SEO Search Simulator",
    impact: "Critical",
    duration: "30 mins",
    plainEnglish: "We don't wait weeks for Google to find our new city pages. We ask Googlebot to inspect them immediately, and check where they start ranking in local searches.",
    whyItHelps: "Forces Googlebot to index your multi-city landing pages within 24 to 48 hours, getting you impressions across multiple cities before the first 15 days are even over.",
    actionSteps: [
      "Open Google Search Console -> URL Inspection tool.",
      "Paste your primary location page URLs and click 'Request Indexing'.",
      "Use the free SEO Search Simulator Chrome extension to spoof your search location and confirm the new pages appear."
    ],
    aiPrompt: `Act as a Fast Indexing & Rank Verification Specialist.
1. Outline the step-by-step procedure to request indexing for 15 newly launched location URLs in Google Search Console without hitting API limits.
2. How to use the free Nightwatch SEO Search Simulator extension to verify rankings across different cities without using a paid VPN.`
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
    theme: "Competitor SERP Gap Analysis & Question Expansion",
    icon: "🔍",
    coreHack: "Hack #028, #022, #038",
    tool: "SEO Minion / Google Search",
    plainEnglish: "We scrape Google's 'People Also Ask' questions from top-ranking competitors and add them directly into our website's FAQ sections and subheadings.",
    whyItHelps: "Captures high-intent question searches and feeds Google and AI answer engines the exact structured answers they need to cite your website.",
    dailyQuota: "Scrape 20 new PAA questions; add 3 into target website landing pages.",
    aiPrompt: `Act as a Search Intent & Content Gap Specialist.
Competitor Ranking URL: [COMPETITOR_URL]
Our Target Website URL: [WEBSITE_URL]
Target Topic: [TOPIC_OR_KEYWORD]

1. Extract the top 5 unanswered questions or gaps that the competitor fails to address clearly.
2. Draft 3 concise, authoritative answers to add to our website's FAQ section.
3. Suggest a comparison table format to prove why our website provides superior information.`
  },
  {
    dayOfWeek: "Sunday",
    theme: "Internal Keyword Indexation & SERP Movement Tracking",
    icon: "📈",
    coreHack: "Hack #001, #013",
    tool: "Google Search Console",
    plainEnglish: "We review private keyword rank movements and indexation rates in Google Search Console to see which pages jumped up the rankings this week.",
    whyItHelps: "Weekly internal tracking shows you exactly which tweaks moved the needle so you can double down on what works and cut what doesn't.",
    dailyQuota: "Track 5 rising keywords in GSC; identify next week's quick-win targets.",
    aiPrompt: `Act as a Senior Search Data Analyst.
Here are our top 10 search queries and average ranking positions this week from GSC: [PASTE_QUERIES_AND_POSITIONS].

1. Identify which 3 queries have the highest impressions but lowest CTR (quick-win title optimization candidates).
2. Spot which queries moved into positions 11-15 (striking distance keywords ready for Page 1 push).
3. Outline 3 specific content expansions to execute next week to capture more search traffic.`
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
