import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Niyaf | Fullstack Software Engineer & Web3 Developer",
  description:
    "Portfolio of Mohammed Niyaf, a Fullstack Software Engineer & Web3 developer offering freelance services and seeking internships. Based in India, serving global clients including USA, San Francisco, Kerala, Karnataka, Mumbai, Delhi, and Bangalore.",
  keywords: [
    "Fullstack Software Engineer", "Web3 developer", "Freelance developer", "Internship", "Full-time Engineering Role",
    "React", "Next.js", "Node.js", "Solana", "Rust", "DevOps", "Cloud", "Core CS",
    "Kerala", "Karnataka", "Mumbai", "Delhi", "Bangalore", "India", "USA", "San Francisco"
  ],
  authors: [{ name: "Mohammed Niyaf" }],
  creator: "Mohammed Niyaf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedniyaf.com",
    title: "Mohammed Niyaf | Fullstack Software Engineer",
    description: "Freelance Fullstack Software Engineer & Web3 Developer. Open to opportunities globally.",
    siteName: "Mohammed Niyaf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Niyaf | Fullstack Software Engineer",
    description: "Freelance Fullstack Software Engineer & Web3 Developer.",
    creator: "@n1yaf_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Mohammed Niyaf",
                  "jobTitle": "Fullstack Software Engineer",
                  "url": "https://mohammedniyaf.com",
                  "sameAs": [
                    "https://github.com/mohammedniyafsm",
                    "https://www.linkedin.com/in/mohammad-niyaf-s-m-692801259",
                    "https://x.com/n1yaf_"
                  ],
                  "knowsAbout": ["Web3", "Next.js", "React", "Node.js", "TypeScript", "Blockchain", "Freelancing", "Software Engineering Internships", "Rust", "Solana", "DevOps", "Cloud", "Core CS"]
                },
                {
                  "@type": "ProfessionalService",
                  "name": "Mohammed Niyaf - Fullstack, Web3, & Core CS Engineer",
                  "description": "Passionate Fullstack Software Engineer and Web3 Developer available for full-time core CS roles, freelance projects, and internships.",
                  "areaServed": [
                    { "@type": "City", "name": "Kerala" },
                    { "@type": "State", "name": "Karnataka" },
                    { "@type": "City", "name": "Mumbai" },
                    { "@type": "City", "name": "Delhi" },
                    { "@type": "City", "name": "Bangalore" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "USA" },
                    { "@type": "City", "name": "San Francisco" }
                  ],
                  "priceRange": "$$"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
