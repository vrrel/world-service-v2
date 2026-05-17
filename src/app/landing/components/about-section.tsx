"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CardDecorator } from "@/components/ui/card-decorator";
import {
  MessageCircle,
  Swords,
  Hammer,
  Music,
  ShieldAlert,
} from "lucide-react";

const values = [
  {
    icon: Hammer,
    title: "Great Architecture",
    description:
      "Every world and island structure is meticulously handcrafted by experienced in-game builders, ensuring jaw-dropping aesthetics.",
  },
  {
    icon: Music,
    title: "Acoustic Perfection",
    description:
      "Our note block arrangements use precise delays to deliver continuous, non-overlapping loop tracks tailored for your server.",
  },
  {
    icon: ShieldAlert,
    title: "100% Legit & Secured",
    description:
      "We value your account security. Every single block placement and material grind is done completely by hand without cheats or exploits.",
  },
  {
    icon: Swords,
    title: "Built For High Quality",
    description:
      "Designed specifically to boost your world reputation, attract heavy traffic, and dominate the Realm of the Day nominations.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            About World Service
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Built by players, for players
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are passionate veterans from Crystal Realms. Our mission is to
            eliminate grinding and speed up your progress by providing services
            in various fields.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border border-border/60 bg-background/50 py-2 shadow-sm backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <CardDecorator>
                    <value.icon
                      className="h-6 w-6 text-purple-500"
                      aria-hidden
                    />
                  </CardDecorator>
                  <h3 className="mt-6 text-base font-bold text-balance sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground sm:text-sm">
              💜 Dedicated to supporting the Crystal Realms community
            </span>
          </div>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row">
            <Button
              size="lg"
              className="cursor-pointer font-bold shadow-md"
              asChild
            >
              <a href="#contact">
                <Swords className="mr-2 h-5 w-5" />
                Place an Order
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer bg-background/50 font-semibold backdrop-blur-sm"
              asChild
            >
              <a
                href="https://discord.com/invite/XEQhPc9a6p"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-purple-500" />
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
