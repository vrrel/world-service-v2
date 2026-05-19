"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Players from "@/data/players.json";
import { PlayerRole } from "@/utils/player";

export function LogoCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="pt-12 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            Trusted by Developer, Mods and Biggest Player
          </p>

          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center">
                {Players.data.map(
                  (player, index) =>
                    player.testimoni && (
                      <div
                        key={`logos-carousel-${index}`}
                        className="flex-shrink-0 pr-8 select-none sm:pr-12"
                      >
                        <Card className="flex h-16 w-fit items-center justify-center border-0 bg-transparent opacity-100 shadow-none transition-opacity duration-300 hover:opacity-100">
                          <div className="flex items-center gap-2">
                            <div className="relative h-full max-h-16 w-full max-w-16 overflow-y-hidden">
                              <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
                              <Image
                                width={500}
                                height={500}
                                src={player.image}
                                loading="eager"
                                alt={
                                  typeof player.name === "string"
                                    ? player.name
                                    : "Crystal Realms"
                                }
                                className="block w-[80%] object-cover object-top"
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <span className="text-lg font-bold whitespace-nowrap text-foreground">
                                <PlayerRole
                                  name={player.name}
                                  role={player.role}
                                />
                              </span>
                              <span className="text-sm font-semibold whitespace-nowrap text-muted-foreground">
                                {player.bio}
                              </span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
