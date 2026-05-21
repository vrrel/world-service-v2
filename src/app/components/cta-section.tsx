"use client";

import { ArrowRight, Sparkles, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { TrustMetricsBar } from "@/components/landing/trust-metrics-bar";

export function CTASection() {
  return (
    <section className="bg-muted/50 py-16 select-none lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="space-y-8">
              {/* Badge and Server Stats */}
              <div className="flex flex-col items-center gap-4">
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 backdrop-blur-sm"
                >
                  <Sparkles className="size-3 text-purple-500" />
                  Premium Gaming Service
                </Badge>

                <TrustMetricsBar />
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-4xl leading-none font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Transform your island into a
                  <span className="flex justify-center sm:inline-flex">
                    <span className="relative mx-2">
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
                        masterpiece
                      </span>
                      <div className="absolute start-0 -bottom-1 h-1 w-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30" />
                    </span>
                    today
                  </span>
                </h2>

                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-balance text-muted-foreground sm:text-lg">
                  Don&apos;t waste weeks grinding and miscalculating note block
                  circuits. Secure an elite build or a seamless custom music
                  loop engineered perfectly by our server professionals.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-6">
                <Button
                  size="lg"
                  className="cursor-pointer px-8 py-6 text-base font-bold shadow-md"
                  asChild
                >
                  <a href="#contact">
                    <Swords className="me-2 size-5" />
                    Commission Us Now
                  </a>
                </Button>
                <DiscordLinkButton
                  size="lg"
                  iconClassName="me-2 size-5 text-purple-500"
                  trailingIcon={ArrowRight}
                  className="group cursor-pointer bg-background/50 px-8 py-6 text-base font-semibold backdrop-blur-sm"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs text-muted-foreground sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>100% Handcrafted (No Cheats/Exploits)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                  <span>Daily Screenshot Updates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  <span>Safe & Secured Transactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
