// Google Business Profile (GBP / GMB) 100-Day Local 3-Pack Dominance Engine
// 100 Days × Daily 5 Actionable Micro-Tasks = 500 Actionable Local Tasks
// 100% Free Tools Only • High-Impact Agency Ranking Hacks • Pure Local SEO

export const GBP_PILLARS = [
  {
    id: "setup_verification",
    name: "Stage 1: Core Setup & Category Lock (Days 1–10)",
    icon: "🏢",
    focus: "Primary Category dominance, NAP consistency, business hours, and instant profile verification."
  },
  {
    id: "services_description",
    name: "Stage 2: Services Menu & Description SEO (Days 11–20)",
    icon: "📋",
    focus: "Granular service items with pricing, 750-character keyword stacking, and special attributes."
  },
  {
    id: "geo_photos",
    name: "Stage 3: High-Res Geo Photos & Video Proof (Days 21–30)",
    icon: "📸",
    focus: "Exif location metadata, exterior/interior shots, team transparency, and short vertical videos."
  },
  {
    id: "review_velocity",
    name: "Stage 4: Review Velocity & Keyword Replies (Days 31–40)",
    icon: "⭐",
    focus: "Direct review shortlink funnel, ethical customer prompt templates, and keyword-injected owner replies."
  },
  {
    id: "google_posts",
    name: "Stage 5: Google Updates & Offer Posts (Days 41–50)",
    icon: "📣",
    focus: "Weekly 'What's New' & 'Offer' updates, UTM tracking parameters, and high-converting CTA buttons."
  },
  {
    id: "qa_community",
    name: "Stage 6: Google Q&A Community Injections (Days 51–60)",
    icon: "💬",
    focus: "Seeding high-intent customer FAQs into Google Q&A and answering with geo-keyword rich replies."
  },
  {
    id: "local_citations",
    name: "Stage 7: Top 30 Free Citations & Apple/Bing Sync (Days 61–70)",
    icon: "📍",
    focus: "100% Free tier directory sync (Apple Business Connect, Bing Places, Yelp, MapQuest, YellowPages)."
  },
  {
    id: "proximity_signals",
    name: "Stage 8: Geo-Grid Proximity & Driving Directions (Days 71–80)",
    icon: "🗺️",
    focus: "Expanding ranking radius beyond 1 mile through organic driving directions and location check-ins."
  },
  {
    id: "website_gbp_sync",
    name: "Stage 9: Website-to-GBP Signal Amplification (Days 81–90)",
    icon: "🔗",
    focus: "Embedding dynamic Google Maps iframe, LocalBusiness JSON-LD schema with CID number & coordinates."
  },
  {
    id: "pack_defense",
    name: "Stage 10: 3-Pack Defense & Spam Fighting (Days 91–100)",
    icon: "🛡️",
    focus: "Suggesting edits on fake competitor keyword-stuffing, Redressal form, and maximizing call conversions."
  }
];

export const GBP_FREE_TOOLS = [
  { name: "Google Business Profile App & Web", url: "https://business.google.com", desc: "Official $0 management console for edits, posts, and verification." },
  { name: "PlePer Local SEO Tools Extension", url: "https://pleper.com", desc: "Free Chrome extension to inspect competitor primary & secondary categories and CID." },
  { name: "GMB Everywhere Chrome Extension", url: "https://gmbeverywhere.com", desc: "Free audit tool for local ranking grid, category auditing, and post frequency." },
  { name: "Campaign URL Builder (Google UTM)", url: "https://ga-dev-tools.google/campaign-url-builder/", desc: "Generate free UTM codes to track exact calls and clicks from GBP in Google Analytics." },
  { name: "Google Review Link Generator", url: "https://supple.com.au/tools/google-review-link-generator/", desc: "Creates the direct 1-click 5-star review modal link to send customers." },
  { name: "Toolsdog Geo Photo EXIF Viewer", url: "https://toolsdog.com", desc: "Free online EXIF & GPS coordinate inspector for uploaded photos." },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", desc: "Free claiming portal for Apple Maps native presence." },
  { name: "Bing Places for Business", url: "https://www.bingplaces.com", desc: "1-click free sync from your verified Google Business Profile to Bing Search & Maps." }
];

export const GBP_POST_TEMPLATES = {
  morningPost: ({ clientName = "[BUSINESS_NAME]", service = "[SERVICE]", location = "[CITY/LOCATION]" }) => `🌟 Recent ${service} in ${location} by ${clientName}!

Our local team just completed another successful ${service} project right here in ${location}. 

Why neighbors in ${location} trust ${clientName}:
✅ 5-Star rated local craftsmanship & prompt service
✅ Upfront estimates with zero hidden fees
✅ Convenient appointments across ${location} and nearby neighborhoods

📸 Check out our latest project photo below. Need help with ${service}? Call our local team today!`,

  eveningOffer: ({ clientName = "[BUSINESS_NAME]", service = "[SERVICE]", location = "[CITY/LOCATION]" }) => `🔥 Special Local Offer for ${location} Neighbors!

Looking for reliable, professional ${service} in ${location}?

${clientName} has opened limited VIP consultation slots this week for residents across ${location}. Mention this Google post to claim your special local rate!

📍 Location: ${location} & Surrounding Communities
📞 Click "Call Now" or "Book" below to speak directly with our local specialist team.`
};

// Helper to generate the 5 daily tasks for each day from 1 to 100
export function getGBPTasksForDay(dayNumber) {
  const pIdx = Math.min(9, Math.floor((dayNumber - 1) / 10));
  const pillar = GBP_PILLARS[pIdx];

  const taskTemplates = [
    // Task 1: Core Profile Directive
    {
      type: "Profile Directive",
      title: (day) => `Day ${day} Profile Optimization & Category Lock`,
      desc: (day) => `Audit and tune core GBP business parameters for Day ${day}. Ensure primary and secondary categories match exact Google Maps taxonomy.`,
      hack: "The Primary Category accounts for over 60% of Google 3-Pack ranking weight. Use PlePer Chrome Extension to spy on the #1 ranked competitor's primary category.",
      tool: "PlePer Local SEO Extension"
    },
    // Task 2: Morning GBP Post #1
    {
      type: "Morning Post #1 (Update)",
      title: (day) => `Day ${day} Morning GBP Post #1 ("What's New / Case Study")`,
      desc: (day) => `Publish your morning Google Post featuring an authentic photo of recent work, client transformation, or project highlight in your city.`,
      hack: "Posting 2 updates daily signals extreme business activity to Google RankBrain algorithms. Include target neighborhood names in the first 2 sentences.",
      tool: "GBP Dashboard Posts"
    },
    // Task 3: Evening GBP Post #2
    {
      type: "Evening Post #2 (Offer/Tip)",
      title: (day) => `Day ${day} Evening GBP Post #2 ("Special Offer / Quick Tip")`,
      desc: (day) => `Publish your evening Google Post featuring a limited-time special offer, client FAQ tip, and a trackable UTM 'Call Now' / 'Book' CTA button.`,
      hack: "Always append `?utm_source=gbp&utm_medium=post_evening&utm_campaign=daily_posts` to track every booking click inside Google Analytics 4 for $0.",
      tool: "Campaign URL Builder"
    },
    // Task 4: Review Velocity & Smart Reply
    {
      type: "Review & Sentiment",
      title: (day) => `Day ${day} Review Request & Keyword Reply Formula`,
      desc: (day) => `Send 1 customer review request via WhatsApp/SMS using your Place ID shortlink, or reply to a pending review injecting service & city keywords.`,
      hack: "When replying to reviews, say 'Thank you [Name] for trusting us for your [Target Service] in [Target City]'. Google indexes owner response keywords!",
      tool: "Google Review Shortlink"
    },
    // Task 5: Local Signal / Citation / Anti-Spam
    {
      type: "Proximity & 3-Pack Check",
      title: (day) => `Day ${day} Proximity Signal Check & Competitor Audit`,
      desc: (day) => `Audit nearby competitors on Google Maps, check for illegal keyword stuffing in business names, and verify NAP sync on top free directories.`,
      hack: "If a competitor has stuffed keywords into their business name (e.g. 'Bob Plumbing Best Emergency Plumber NYC'), click 'Suggest an Edit' to remove spam and leapfrog them.",
      tool: "Google Maps App"
    }
  ];

  // Specific day-by-day customized titles and instructions
  const daySpecifics = getDaySpecifics(dayNumber);

  return [1, 2, 3, 4, 5].map((tIndex) => {
    const template = taskTemplates[tIndex - 1];
    const specific = daySpecifics[tIndex - 1] || {};
    return {
      id: `gbp-d${dayNumber}-t${tIndex}`,
      dayNumber,
      taskIndex: tIndex,
      pillarId: pillar.id,
      pillarName: pillar.name,
      pillarIcon: pillar.icon,
      type: specific.type || template.type,
      title: specific.title || template.title(dayNumber),
      description: specific.desc || template.desc(dayNumber),
      hack: specific.hack || template.hack,
      tool: specific.tool || template.tool
    };
  });
}

function getDaySpecifics(day) {
  // Customized guidance across key milestones
  switch (day) {
    case 1:
      return [
        {
          title: "Claim & Lock Exact Primary Category",
          desc: "Inspect top 3 competitors in your city using PlePer Extension. Select the exact matching primary category (e.g. 'Cosmetic Dentist' vs generic 'Dentist').",
          hack: "Never change your primary category frequently. Lock the single highest-volume primary category on Day 1.",
          tool: "PlePer Chrome Extension"
        },
        {
          title: "Upload Authentic Storefront Exterior Photo",
          desc: "Take a wide-angle mobile photo showing your permanent building signage and street number. Upload under 'Exterior'.",
          hack: "Signage verification confirms physical existence to Google AI algorithms, protecting against immediate suspensions.",
          tool: "Mobile Camera"
        },
        {
          title: "Generate Direct 1-Click 5-Star Review Shortlink",
          desc: "Go to GBP dashboard > Ask for reviews > Copy the direct short link (g.page/r/...). Test it in an incognito window.",
          hack: "Append `&review_stars=5` if supported or test that it opens directly to the 5-star rating dialogue box.",
          tool: "Google Business Profile"
        },
        {
          title: "Publish Launch 'What's New' Welcome Post",
          desc: "Post a 120-word welcome update introducing your local business with target city and neighborhood mentions.",
          hack: "Include your primary service keyword in the first sentence of the Google update.",
          tool: "GBP Dashboard"
        },
        {
          title: "Audit Exact NAP on Website Footer",
          desc: "Ensure Name, Address, and Phone number on your website footer matches your Google profile character for character.",
          hack: "Even a discrepancy between 'Suite 200' and 'Ste 200' can weaken local citation confidence.",
          tool: "Website Footer"
        }
      ];
    case 15:
      return [
        {
          title: "Build Granular 20-Item Services Menu with Prices",
          desc: "Add 15 to 20 individual services under your primary category with detailed descriptions and starting prices.",
          hack: "Google often creates 'justifications' in the 3-Pack snippet based on text inside your custom services list.",
          tool: "GBP Services Tab"
        },
        {
          title: "Upload Behind-The-Scenes Team In-Action Photo",
          desc: "Upload a real photo of your staff working or serving clients inside the business location.",
          hack: "Images with real human faces receive 40% higher click-through rates from local map browsers.",
          tool: "GBP Photos"
        },
        {
          title: "Set Up Review Request SMS/WhatsApp Template",
          desc: "Draft a polite 2-sentence WhatsApp/SMS message with your shortlink to send clients immediately after service.",
          hack: "Sending review requests within 2 hours of completed service yields a 65% conversion rate vs 12% after 24 hours.",
          tool: "WhatsApp / SMS"
        },
        {
          title: "Publish 'Limited-Time Local Special' Offer Post",
          desc: "Create an 'Offer' post with a start/end date, coupon code, and direct link to your booking landing page.",
          hack: "Offer posts receive prominent yellow badge highlighting in Google Maps and stay active for up to 30 days.",
          tool: "GBP Posts"
        },
        {
          title: "Sync Free Profile to Bing Places for Business",
          desc: "Go to bingplaces.com and click 'Import from Google My Business' to clone your verified profile to Bing for free.",
          hack: "Takes under 2 minutes and captures Bing/Yahoo map searches on Windows computers for $0 cost.",
          tool: "Bing Places"
        }
      ];
    case 30:
      return [
        {
          title: "Audit & Maximize 750-Character Description",
          desc: "Write all 750 characters of your business description. Place primary keywords and target neighborhoods in the first 250 characters.",
          hack: "The first 250 characters appear before the 'Read more' cutoff on mobile browsers.",
          tool: "GBP Info Tab"
        },
        {
          title: "Upload 30-Second Storefront Video Walkthrough",
          desc: "Record a smooth 30-second mobile video walking through your entrance and reception area. Upload under Videos.",
          hack: "Less than 5% of local businesses have video uploaded. Video triggers higher trust scores in Google Maps.",
          tool: "GBP Video Uploader"
        },
        {
          title: "Keyword Injection Review Reply to Recent Feedback",
          desc: "Reply to your latest 5-star review referencing specific equipment, city name, and service provided.",
          hack: "Example: 'Thank you Sarah! Our team loves providing gentle teeth whitening in North Austin.'",
          tool: "GBP Reviews Tab"
        },
        {
          title: "Publish Product Card with Pricing & Buy Link",
          desc: "Create a 'Product' showcase item in GBP with image, description, price, and link to your booking page.",
          hack: "Products appear in visual carousel cards on mobile devices right below your main photos.",
          tool: "GBP Products"
        },
        {
          title: "Claim Apple Business Connect (Free Apple Maps)",
          desc: "Visit businessconnect.apple.com with your Apple ID and claim your official Apple Maps pin.",
          hack: "Ensures iPhone users using Siri, Apple Maps, and iOS Spotlight find your exact business details.",
          tool: "Apple Business Connect"
        }
      ];
    default:
      return [];
  }
}
