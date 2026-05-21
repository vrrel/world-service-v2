import Careers from "@/data/careers.json";
import Data from "@/data/data.json";
import Faq from "@/data/faq.json";
import Pricing from "@/data/pricing.json";
import Services from "@/data/services.json";
import Showcases from "@/data/showcases.json";
import type {
  CareerRole,
  FaqItem,
  PricingPlan,
  ProcessStep,
  ShowcaseItem,
  SiteService,
} from "@/types/site-data";
import { getQuotedPlayers, getTeamPlayers } from "@/lib/players";
import type { Player } from "@/types/player";

export function getSiteConfig() {
  return Data;
}

export function getServices(): SiteService[] {
  return Services.data as SiteService[];
}

export function getServiceById(id: string): SiteService | undefined {
  return getServices().find((s) => s.id === id);
}

export function getPricingPlans(): PricingPlan[] {
  return Pricing.data as PricingPlan[];
}

export function getPricingPlansByService(serviceId: string): PricingPlan[] {
  return getPricingPlans().filter((p) => p.serviceId === serviceId);
}

export function getPricingNote(): string {
  return Pricing.note;
}

export function getShowcases(): ShowcaseItem[] {
  return Showcases.data as ShowcaseItem[];
}

export function getFeaturedShowcases(): ShowcaseItem[] {
  return getShowcases().filter((s) => s.featured);
}

export function getShowcasesByService(service: string): ShowcaseItem[] {
  if (service === "all") return getShowcases();
  return getShowcases().filter((s) => s.service === service);
}

export function getProcessSteps(): ProcessStep[] {
  return Data.process as ProcessStep[];
}

export function getCareerRoles(): CareerRole[] {
  return Careers.roles as CareerRole[];
}

export function getCareerPerks(): string[] {
  return Careers.perks as string[];
}

export function getCareerIntro(): string {
  return Careers.intro;
}

export function getClientFaq(): FaqItem[] {
  return Faq.client as FaqItem[];
}

export function getStaffFaq(): FaqItem[] {
  return Faq.staff as FaqItem[];
}

export function computeTrustMetrics() {
  const config = getSiteConfig();
  const showcases = getShowcases();
  const team = getTeamPlayers();
  const reviews = getQuotedPlayers();

  const rotdTotal = team.reduce((sum, player) => {
    if (!player.ROTD) return sum;
    return (
      sum +
      Object.values(player.ROTD).reduce((a, b) => a + b, 0)
    );
  }, 0);

  return {
    realmsBuilt: Math.max(config.stats.realmsBuilt, showcases.length),
    activeStaff: Math.max(config.stats.activeStaff, team.length),
    averageRating: config.stats.averageRating,
    reviewCount: Math.max(config.stats.reviewCount, reviews.length),
    rotdBadges: rotdTotal,
    showcaseCount: showcases.length,
  };
}

export type { Player };
