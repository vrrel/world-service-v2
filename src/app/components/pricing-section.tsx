"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started with essential components",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Access to 50+ free components",
      "Basic dashboard templates",
      "Community support",
      "GitHub repository access",
      "Documentation and guides",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For developers who need premium templates and components",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Premium template collection",
      "Advanced dashboard layouts",
      "Priority support",
      "Commercial use license",
      "Early access to new releases",
      "Figma design files",
      "Custom component requests",
      "Direct developer access",
      "Exclusive design resources",
    ],
    cta: "Get Started",
    popular: true,
    includesPrevious: "All Free features, plus",
  },
  {
    name: "Lifetime",
    description: "One-time payment for lifetime access to everything",
    monthlyPrice: 299,
    yearlyPrice: 299,
    features: [
      "Lifetime updates and support",
      "Private Discord channel",
      "No recurring fees ever",
      "Future template access",
      "VIP support priority",
      "Exclusive beta features",
    ],
    cta: "Get Started",
    popular: false,
    includesPrevious: "All Pro features, plus",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="bg-muted/40 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Pricing Plans
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start building with our free components or upgrade to Pro for access
            to premium templates and advanced features.
          </p>

          {/* Billing Toggle */}
          <div className="mb-2 flex items-center justify-center">
            <ToggleGroup
              type="single"
              value={isYearly ? "yearly" : "monthly"}
              onValueChange={(value) => setIsYearly(value === "yearly")}
              className="cursor-pointer rounded-full border-none bg-secondary p-1 text-secondary-foreground shadow-none"
            >
              <ToggleGroupItem
                value="monthly"
                className="cursor-pointer !rounded-full border border-transparent px-6 transition-colors hover:bg-transparent data-[state=on]:border-border data-[state=on]:bg-background data-[state=on]:text-foreground"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="cursor-pointer !rounded-full border border-transparent px-6 transition-colors hover:bg-transparent data-[state=on]:border-border data-[state=on]:bg-background data-[state=on]:text-foreground"
              >
                Annually
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Save 20%</span> On
            Annual Billing
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border">
            <div className="grid lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`row-span-4 grid grid-rows-subgrid gap-6 p-8 ${
                    plan.popular
                      ? "mx-4 my-2 rounded-xl border-transparent bg-card shadow-xl ring-1 ring-foreground/10 backdrop-blur"
                      : ""
                  }`}
                >
                  {/* Plan Header */}
                  <div>
                    <div className="mb-2 text-lg font-medium tracking-tight">
                      {plan.name}
                    </div>
                    <div className="text-sm text-balance text-muted-foreground">
                      {plan.description}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="mb-1 text-4xl font-bold">
                      {plan.name === "Lifetime"
                        ? `$${plan.monthlyPrice}`
                        : plan.name === "Free"
                          ? "$0"
                          : `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.name === "Lifetime"
                        ? "One-time payment"
                        : "Per month"}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      className={`my-2 w-full cursor-pointer ${
                        plan.popular
                          ? "border-[0.5px] border-white/25 bg-primary text-primary-foreground shadow-md ring-1 shadow-black/20 ring-primary/15 hover:bg-primary/90"
                          : "border border-transparent bg-background shadow-sm ring-1 shadow-black/15 ring-foreground/10 hover:bg-muted/50"
                      }`}
                      variant={plan.popular ? "default" : "secondary"}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.includesPrevious && (
                        <li className="flex items-center gap-3 font-medium">
                          {plan.includesPrevious}:
                        </li>
                      )}
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check
                            className="size-4 flex-shrink-0 text-muted-foreground"
                            strokeWidth={2.5}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need custom components or have questions?{" "}
            <Button
              variant="link"
              className="h-auto cursor-pointer p-0"
              asChild
            >
              <a href="#contact">Contact our team</a>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
