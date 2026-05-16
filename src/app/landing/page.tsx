import type { Metadata } from "next";
import { LandingPageContent } from "./landing-page-content";

// Metadata yang disesuaikan untuk Crystal Service / Crystal Realms
export const metadata: Metadata = {
  title:
    "Crystal Service - Elite Boosting & Professional Building | Crystal Realms",
  description:
    "The most trusted service providers in the Crystal Realms. Professional building, rapid grinding, secure account boosting, and trusted middleman services tailored for your ultimate gaming journey.",
  keywords: [
    "crystal service",
    "crystal realms",
    "crystal realms service",
    "crystal realms boosting",
    "professional builder crystal realms",
    "account boosting",
    "trusted middleman",
    "rotd stats",
  ],
  openGraph: {
    title: "Crystal Service - Elite Boosting & Professional Building",
    description:
      "The most trusted service providers in the Crystal Realms. Elevate your gaming journey with professional building, fast grinding, and elite boosting.",
    type: "website",
    url: "https://yourdomain.com", // Ganti dengan URL website asli kamu nanti
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Service - Elite Boosting & Professional Building",
    description:
      "The most trusted service providers in the Crystal Realms. Fast, secure, and legendary boosting services.",
  },
};

export default function LandingPage() {
  return <LandingPageContent />;
}
