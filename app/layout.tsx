import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";

import { ArchiveFooter } from "@/components/ArchiveFooter";
import { ArchiveHeader } from "@/components/ArchiveHeader";
import { StarField } from "@/components/StarField";
import { site } from "@/lib/content";

import "./globals.css";

const heebo = Heebo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heebo",
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["latin", "latin-ext"],
  variable: "--font-frank",
  display: "swap",
});

const title = `${site.title} | ${site.archive}`;

export const metadata: Metadata = {
  title,
  description: site.description,
  applicationName: site.archive,
  authors: [{ name: site.author }],
  category: "satire",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title,
    description: site.description,
    type: "article",
    locale: "sk_SK",
    siteName: site.archive,
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${heebo.variable} ${frankRuhl.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Preskočiť na obsah
        </a>

        <StarField />

        <div id="top" className="site-frame">
          <ArchiveHeader />
          {children}
          <ArchiveFooter />
        </div>
      </body>
    </html>
  );
}
