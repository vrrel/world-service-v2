"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PortraitImageFade } from "@/components/portrait-image-fade";
import { PlayerIdentity } from "@/components/player-identity";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { getQuotedPlayers } from "@/lib/players";
import { MessageSquare } from "lucide-react";

export function TestimonialsSection() {
  const quotedPlayers = getQuotedPlayers();

  return (
    <section id="testimonials" className="py-24 select-none sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={
            <Badge
              variant="outline"
              className="mx-auto mb-4 flex w-fit items-center gap-2"
            >
              <MessageSquare className="size-3 text-purple-500" />
              Realm Reviews
            </Badge>
          }
          title="Trusted by Players"
          description="See how our premium world builds, tactical trading guides, and custom note block loops are changing the game for players across the community."
          titleClassName="mb-4"
          descriptionClassName="text-base sm:text-lg"
        />

        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {quotedPlayers.map((player, index) => (
            <Card
              key={index}
              className="mb-6 break-inside-avoid border border-border/60 bg-background/50 shadow-sm backdrop-blur-sm"
            >
              <CardContent>
                <div className="mb-4 flex items-center gap-4">
                  <PortraitImageFade
                    src={player.image}
                    alt={`${player.name} - Crystal Realms`}
                    name={player.name}
                    layout="avatar"
                    loading="lazy"
                  />

                  <div className="min-w-0 flex-1">
                    <PlayerIdentity
                      name={player.name}
                      role={player.role}
                      subtitle={player.bio}
                      size="sm"
                    />
                  </div>
                </div>

                <blockquote className="border-l-2 border-purple-500/30 pl-3">
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    &ldquo;{player.quote}&rdquo;
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
