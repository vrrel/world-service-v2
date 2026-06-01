import { LandingShell } from "@/components/landing/landing-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Crystal Chronicles | Official World Service Blog",
  description:
    "Masterclass guides, market analysis, and economy secrets directly from the senior vanguard of the Crystal Realms. Elevate your gameplay today.",

  alternates: {
    canonical: "https://worldservice.vercel.app/blog",
  },

  keywords: [
    "crystal realms blog",
    "crystal realms guides",
    "crystal realms economy secrets",
    "world service chronicles",
    "crystal realms masterclass",
    "rotd stats updates",
  ],

  openGraph: {
    title: "The Crystal Chronicles | Official World Service Blog",
    description:
      "Masterclass guides, market analysis, and economy secrets directly from the senior vanguard of the Crystal Realms. Elevate your gameplay today.",
    type: "website",
    url: "https://worldservice.vercel.app/blog",
    images: "https://worldservice.vercel.app/showcase/nyyuonkk.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Crystal Chronicles | Official World Service Blog",
    description:
      "Masterclass guides, market analysis, and economy secrets directly from the senior vanguard of the Crystal Realms. Elevate your gameplay today.",
  },
  other: {
    "theme-color": "#7289DA",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingShell>{children}</LandingShell>;
}
