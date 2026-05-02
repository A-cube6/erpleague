import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ERPLeague Australia | SAP & ERP Services for Australian Businesses",
    template: "%s | ERPLeague Australia",
  },
  description:
    "ERPLeague Australia provides SAP support, ERP advisory, S/4HANA readiness, SAP BTP development, Fiori UI5 development, integration, NetSuite support, and managed ERP support for Australian businesses.",
  keywords: [
    "SAP services Australia",
    "ERP consulting Australia",
    "SAP support Australia",
    "S/4HANA migration Australia",
    "SAP BTP development",
    "Fiori UI5 development",
    "ERP managed support",
    "NetSuite support Australia",
  ],
  openGraph: {
    title: "ERPLeague Australia | SAP & ERP Services",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPLeague Australia | SAP & ERP Services",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
