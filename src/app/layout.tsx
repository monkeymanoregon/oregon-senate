import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Tysan for Oregon State Senate | District 3",
  description: "Join Tysan's campaign for Oregon State Senate. Working together for economic growth, outstanding education, community safety, and a better future for all Oregonians.",
  openGraph: {
    title: "Tysan for Oregon State Senate | District 3",
    description: "Join Tysan's campaign for Oregon State Senate. Working together for economic growth, outstanding education, community safety, and a better future for all Oregonians.",
    images: [{ url: "/candidate_portrait.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

