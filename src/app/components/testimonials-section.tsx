"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

import Players from "@/data/players.json";
import { PlayerRole } from "@/utils/player";

// type Testimonial = {
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     name: "Ethan Brooks",
//     role: "Realm Owner & Collector",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=male-1",
//     quote:
//       "The custom world built by this team instantly secured a Realm of the Day (ROTD) nomination! The terraforming detail and block choices are on a completely different level compared to other building services.",
//   },
//   {
//     name: "Chloe Jenkins",
//     role: "Top 50 Server Tycoon",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=female-1",
//     quote:
//       "Following their market insights and event preparation guides completely saved my coin pouch. I managed to flip rare items right before the prices sky-rocketed.",
//   },
//   {
//     name: "Marcus Vance",
//     role: "Parkour World Curator",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=male-2",
//     quote:
//       "Incredibly clean pathing. I commissioned an elite parkour trial and the block flow feels super natural for players. No glitchy jumps, pure professional craftsmanship.",
//   },
//   {
//     name: "Seraphina Vance",
//     role: "Social Hub Admin",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=female-2",
//     quote:
//       "We needed a massive spawn castle for our community hub in under a week. Not only did they finish it early, but they also provided daily screenshot updates throughout the entire process.",
//   },
//   {
//     name: "Alastair Vance",
//     role: "Note Block Enthusiast",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=male-3",
//     quote:
//       "The music loops they built are flawless. Standard redstone repeaters usually lag on heavy servers, but their custom timing setup ensures my background lounge music loops endlessly without overlapping or breaking.",
//   },
//   {
//     name: "Scarlett Reed",
//     role: "Guild Leader",
//     image: "https://notion-avatars.netlify.app/api/avatar?preset=female-3",
//     quote:
//       "Safe, fast, and highly reliable. Our guild base looks absolutely stunning now. Will definitely order another custom biome build in the future!",
//   },
// ];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 select-none sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mx-auto mb-4 flex w-fit items-center gap-2"
          >
            <MessageSquare className="size-3 text-purple-500" />
            Realm Reviews
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Players
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            See how our premium world builds, tactical trading guides, and
            custom note block loops are changing the game for players across the
            community.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {Players.data.map(
            (player, index) =>
              player.quote && (
                <Card
                  key={index}
                  className="mb-6 break-inside-avoid border border-border/60 bg-background/50 shadow-sm backdrop-blur-sm"
                >
                  <CardContent>
                    {/* Profile Header */}
                    <div className="mb-4 flex items-center gap-4">
                      <Avatar className="relative size-11 shrink-0 rounded-none">
                        <AvatarImage
                          alt={`${player.name} - Crystal Realms`}
                          src={player.image}
                          loading="lazy"
                          width="120"
                          height="120"
                          className="object-cover object-top"
                        />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                        <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
                      </Avatar>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-bold transition-colors hover:text-purple-500 sm:text-base">
                          <PlayerRole name={player.name} role={player.role} />
                        </h3>
                        <span className="mt-0.5 block text-xs tracking-wide text-muted-foreground">
                          {player.bio}
                        </span>
                      </div>
                    </div>

                    {/* Quote Body */}
                    <blockquote className="border-l-2 border-purple-500/30 pl-3">
                      <p className="text-sm leading-relaxed text-muted-foreground italic">
                        &ldquo;{player.quote}&rdquo;
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
