"use client";

import { DotPattern } from "@/components/dot-pattern";
import { Badge } from "@/components/ui/badge";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import Players from "@/data/players.json";
import { PlayerRole } from "@/utils/player";
import { getRoleColor } from "@/utils/role-color";
import { stringToROTD } from "@/utils/rotd";

export interface Player {
  name: string;
  role?: string;
  bio?: string;
  image: string;
  admin?: string[];
  testimoni?: boolean;
  ROTD?: Record<string, number>;
}

function RotdCarousel({ stats }: { stats?: Record<string, number> }) {
  if (!stats || Object.keys(stats).length === 0) {
    return null;
  }

  const [rotdRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div className="w-full overflow-hidden" ref={rotdRef}>
      <div className="flex w-full items-center justify-center gap-2">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={`rotd-slide-${key}`}
            className="flex w-fit shrink-0 items-center gap-1 select-none"
          >
            <img
              src={stringToROTD(key)}
              alt={`${key} ROTD Icon`}
              className="block w-6 object-contain"
            />
            <span className="text-sm font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  const [mainTeamRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  return (
    <section id="team" className="relative overflow-hidden py-24 select-none">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-background/90 to-background/50" />
      <DotPattern className="opacity-40" size="md" fadeStyle="ellipse" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">
            Our Service Team
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The most trusted service providers in the Crystal Realms.
          </p>
        </div>

        <div
          className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
          ref={mainTeamRef}
        >
          <div className="flex gap-4">
            {(Players.data as Player[]).map(
              (player, index) =>
                player.admin && (
                  <div
                    key={`team-member-${index}`}
                    className="h-90 w-60 shrink-0 rounded-2xl border border-border/50 bg-background px-4 pt-0 pb-2 text-center transition-colors hover:border-border active:border-border"
                  >
                    <div className="relative h-full w-full">
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                        <Image
                          width={200}
                          height={300}
                          alt={`${player.name} - Crystal Realms`}
                          src={player.image}
                          className="block w-[80%] object-cover object-top"
                        />
                        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-linear-to-b from-background/0 via-background/90 to-background"></div>
                      </div>

                      <div className="absolute bottom-4 left-0 w-full bg-transparent px-4 pt-2 text-center">
                        <h3 className="text-lg leading-tight font-bold text-nowrap text-foreground">
                          <PlayerRole name={player.name} role={player.role} />
                        </h3>

                        <div className="mb-3 text-balance">
                          {player.admin?.map((adminRole, idx) => (
                            <span
                              key={`${adminRole}-${idx}`}
                              className={`text-sm font-semibold ${getRoleColor(adminRole)}`}
                            >
                              {adminRole}
                              {idx < player.admin!.length - 1 && (
                                <span className="text-muted-foreground">
                                  {" "}
                                  &{" "}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>

                        {player.ROTD && <RotdCarousel stats={player.ROTD} />}
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
