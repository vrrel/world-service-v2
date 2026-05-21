import { LandingShell } from "@/components/landing/landing-shell";
import { ServicesSection } from "@/components/landing/services-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CareersSection } from "@/components/landing/careers-section";
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
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <HowItWorksSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
      <BlogSection />
    </LandingShell>
  );
}
