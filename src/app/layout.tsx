import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CANDIDATE_NAME, jsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CANDIDATE_NAME} for Oregon State Senate District 3`,
    template: `%s | Tysan for Oregon Senate`,
  },
  description: "Tysan McClusky is running for Oregon State Senate District 3 with a constituent-led approach. Explore Southern Oregon issues, legislation, election information, and ways to weigh in.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: `${CANDIDATE_NAME} for Oregon State Senate District 3`,
    description: "Explore Oregon Senate District 3 issues, legislation, election information, and constituent feedback from Southern Oregon.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/candidate_hero.jpg", width: 400, height: 400, alt: `${CANDIDATE_NAME}, candidate for Oregon State Senate District 3` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CANDIDATE_NAME} for Oregon State Senate District 3`,
    description: "Southern Oregon issues, legislation, election information, and constituent-led representation.",
    images: ["/candidate_hero.jpg"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#campaign` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#tysan-mcclusky`,
      name: CANDIDATE_NAME,
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/candidate_hero.jpg`,
      jobTitle: "Candidate for Oregon State Senate District 3",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#campaign`,
      name: SITE_NAME,
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#tysan-mcclusky` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Oregon State Senate District 3",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W9HC2T5LZ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9HC2T5LZ3');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(siteJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
