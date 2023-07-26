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
  title: "Marco Greiveldinger",
  description: "My personal portfolio",
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
