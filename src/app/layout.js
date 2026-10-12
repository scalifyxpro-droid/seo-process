import "./globals.css";

export const metadata = {
  title: "SEO Growth OS — 1,000 Tasks & 300 Website Architecture Engine",
  description: "The complete 100-day Website SEO operating system: 1,000 actionable tasks, 300 prompt directives, programmatic SEO engine, and 100% free tools arsenal.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/siteicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/siteicon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/siteicon.svg" />
        <meta name="theme-color" content="#0a0e1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
