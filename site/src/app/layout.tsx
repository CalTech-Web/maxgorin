import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Max Gorin - EMS Entrepreneur & Community Leader",
    template: "%s | Max Gorin",
  },
  description:
    "Max Gorin is the founder of LifeLine Ambulance, a leading emergency medical services company in Los Angeles County with 19+ years of EMS leadership.",
  metadataBase: new URL("https://maxgorin.com"),
  openGraph: {
    title: "Max Gorin - EMS Entrepreneur & Community Leader",
    description:
      "Founder of LifeLine Ambulance. 19+ years of EMS leadership, 70 ambulances, 300 employees. Making a difference in the lives of others.",
    url: "https://maxgorin.com",
    siteName: "Max Gorin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Max Gorin - EMS Entrepreneur & Community Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Gorin - EMS Entrepreneur & Community Leader",
    description:
      "Founder of LifeLine Ambulance. 19+ years of EMS leadership in Los Angeles County.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maxgorin.com",
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
