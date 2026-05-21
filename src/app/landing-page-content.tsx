import { LandingShell } from "@/components/landing/landing-shell";
import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { CTASection } from "./components/cta-section";
import { FaqSection } from "./components/faq-section";
import { FeaturesSection } from "./components/features-section";
import { HeroSection } from "./components/hero-section";
import { LogoCarousel } from "./components/logo-carousel";
import { StatsSection } from "./components/stats-section";
import { TestimonialsSection } from "./components/testimonials-section";

export function LandingPageContent() {
  return (
    <LandingShell asMain>
      <HeroSection />
      <LogoCarousel />
      <StatsSection />
      <BlogSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
    </LandingShell>
  );
}
