import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";

import PlausibleProvider from "next-plausible";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marco-greiveldinger.de"),
  authors: { name: "Marco Greiveldinger" },
  creator: "Marco Greiveldinger",
  publisher: "Marco Greiveldinger",
  title: {
    template: "%s | Marco Greiveldinger",
    default: "Marco Greiveldinger – Developer and Cloud Expert",
  },
  description:
    "A freelance developer and cloud expert to help you build your architecture.",
  keywords: [
    "DevOps Engineer",
    "Cloud Architecture",
    "Web Development",
    "Freelancer",
  ],
  openGraph: {
    type: "profile",
    firstName: "Marco",
    lastName: "Greiveldinger",
    username: "mgreivel",
    emails: ["hello@marco-greiveldinger.de"],
    url: "https://marco-greiveldinger.de",
    siteName: "Marco Greiveldinger",
    title: "Marco Greiveldinger – Developer and Cloud Expert",
    description:
      "A freelance developer and cloud expert to help you build your architecture.",
    countryName: "Germany",
    locale: "en_US",
  },
  viewport: { width: "device-width", initialScale: 1 },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Marco Greiveldinger",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="marco-greiveldinger.de"
          customDomain="https://plausible.marco-greiveldinger.de"
          selfHosted={true}
        />
      </head>
      <body className={inter.className}>
        <div className="dark:bg-gray-900 flex-col">
          <Layout />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
