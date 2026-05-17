import type { Metadata } from "next";
import { LandingPageContent } from "./landing-page-content";

// Metadata yang disesuaikan untuk Crystal Service / Crystal Realms
export const metadata: Metadata = {
  title: "World Service Best Serivce Provider | Crystal Realms",
  description:
    "The most trusted service providers in the Crystal Realms. Elevate your gaming journey with professional building, fast grinding.",
  keywords: [
    "world service",
    "crystal realms",
    "crystal realms service",
    "professional builder crystal realms",
    "trusted middleman",
    "rotd stats",
  ],
  openGraph: {
    title: "World Service Best Serivce Provider | Crystal Realms",
    description:
      "The most trusted service providers in the Crystal Realms. Elevate your gaming journey with professional building, fast grinding.",
    type: "website",
    url: "https://worldservice.vercel.app", // Ganti dengan URL website asli kamu nanti
    images: "https://worldservice.vercel.app/main.webp", // Ganti dengan URL website asli kamu nanti
  },
  twitter: {
    card: "summary_large_image",
    title: "World Service Best Serivce Provider | Crystal Realms",
    description:
      "The most trusted service providers in the Crystal Realms. Elevate your gaming journey with professional building, fast grinding.",
  },
};

export default function LandingPage() {
  return <LandingPageContent />;
}
