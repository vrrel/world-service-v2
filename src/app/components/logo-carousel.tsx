"use client";

import { Card } from "@/components/ui/card";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import { PlayerProfile } from "@/components/player-profile";
import { getTestimonialPlayers } from "@/lib/players";

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

          <div className="relative">
            {/* Left Fade */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
            {/* Right Fade */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center">
                {getTestimonialPlayers().map((player, index) => (
                  <div
                    key={`logos-carousel-${index}`}
                    className="shrink-0 pr-8 select-none sm:pr-12"
                  >
                    <Card className="flex h-16 w-fit items-center justify-center border-0 bg-transparent opacity-100 shadow-none transition-opacity duration-300">
                      <PlayerProfile player={player} />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
