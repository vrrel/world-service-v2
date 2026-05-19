import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "World Service - Premium Crystal Realms Service Provider",
  description:
    "The most trusted service provider in Crystal Realms. Elevate your gaming experience with our professional building, fast grinding, and secure middleman services.",
  keywords: [
    "world service",
    "crystal realms",
    "crystal realms service",
    "professional builder crystal realms",
    "trusted middleman crystal realms",
    "crystal realms grinding",
    "rotd stats",
  ],
  openGraph: {
    title: "World Service - Premium Crystal Realms Service Provider",
    description:
      "The most trusted service provider in Crystal Realms. Elevate your gaming experience with our professional building, fast grinding, and secure middleman services.",
    type: "website",
    url: "https://worldservice.vercel.app",
    images: "https://worldservice.vercel.app/showcase/nyyuonkk.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Service - Premium Crystal Realms Service Provider",
    description:
      "The most trusted service provider in Crystal Realms. Elevate your gaming experience with our professional building, fast grinding, and secure middleman services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="nextjs-ui-theme">
          <SidebarConfigProvider>{children}</SidebarConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
