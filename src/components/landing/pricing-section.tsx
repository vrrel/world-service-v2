"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPricingNote, getPricingPlansByService } from "@/lib/site-data";
import type { ServiceId } from "@/types/site-data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [service, setService] = useState<ServiceId>("builder");
  const plans = getPricingPlansByService(service);
  const note = getPricingNote();

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="3xl"
          badge="Transparent Packages"
          title="Pricing That Scales With Your Vision"
          description="Starter packages for quick wins, premium tiers for ROTD-level work. Exact quotes confirmed on Discord after your brief."
          titleClassName="mb-4"
        />

        <Tabs
          value={service}
          onValueChange={(v) => setService(v as ServiceId)}
          className="mx-auto mb-10 max-w-md"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="builder" className="cursor-pointer">
              Builder
            </TabsTrigger>
            <TabsTrigger value="music" className="cursor-pointer">
              Music
            </TabsTrigger>
            <TabsTrigger value="harvest" className="cursor-pointer">
              Harvest
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid max-w-3xl mx-auto gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative flex h-full flex-col border-border/60",
                plan.popular &&
                  "border-purple-500/50 shadow-md shadow-purple-500/10",
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-auto w-full font-semibold"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={`/#contact?service=${plan.serviceId}`}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          {note}
        </p>
      </div>
    </section>
  );
}
