import "./globals.css";

export const metadata = {
  title: "SEO Growth OS — 100-Day Website Strengthening & Traffic Engine",
  description: "The complete 100-day SEO operating system: 15-day heavy technical sprint, compounding repetition engine, plain-English non-technical knowledge base, and copy-paste AI prompts to achieve 10,000 monthly organic clicks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
