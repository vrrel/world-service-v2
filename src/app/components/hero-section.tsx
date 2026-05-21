"use client";

import Image from "next/image";
import AutoplayPlugin from "embla-carousel-autoplay";
import { Users, ArrowRight, Sparkles, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccentBadge } from "@/components/landing/accent-badge";
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { DotPattern } from "@/components/dot-pattern";
import useEmblaCarousel from "embla-carousel-react";

import Showcases from "@/data/showcases.json";
import { CaptionOverlay } from "@/components/ui/caption-overlay";

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      align: "start",
    },
    [AutoplayPlugin({ delay: 3000, stopOnInteraction: false })],
  );

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-background to-background/80 pt-20 pb-16 sm:pt-28"
    >
      <div className="absolute inset-0 z-0">
        <DotPattern
          className="opacity-70 dark:opacity-40"
          size="md"
          fadeStyle="ellipse"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <AccentBadge icon={Sparkles}>
              The Sovereign Service Guild
            </AccentBadge>
          </div>

          <h1 className="mb-6 text-4xl leading-none font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            #1 Best{" "}
            <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
              Crystal
            </span>{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-500">
              Realms
            </span>{" "}
            Service
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Stop wasting hours on complex wireframes and trial-and-error note
            blocks. Dominate{" "}
            <span className="font-semibold text-foreground">
              Crystal Realms
            </span>{" "}
            with custom mega-structures, flawless music loops, and high-tier
            grinding networks built by certified game veterans.
          </p>

          <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="group w-full cursor-pointer text-base font-bold shadow-md sm:w-auto"
                asChild
              >
                <a href="#contact">
                  <Swords className="mr-2 h-4 w-4" />
                  Commission Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer bg-background/50 text-base font-semibold backdrop-blur-sm sm:w-auto"
                asChild
              >
                <a href="#services">View Services</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="ghost"
                className="w-full cursor-pointer text-base font-semibold sm:w-auto"
                asChild
              >
                <a href="#careers">
                  <Users className="mr-2 h-4 w-4 text-purple-500" />
                  Join Staff
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="pointer-events-none absolute -top-5 left-1/2 z-0 h-40 w-full -translate-x-1/2 transform rounded-full bg-primary/20 blur-3xl"></div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex w-full cursor-grab items-center active:cursor-grabbing">
              {Showcases.data.map((showcase, index) => (
                <div
                  key={`hero-${showcase.src}`}
                  className="group w-full max-w-xs shrink-0 pr-6 md:max-w-md"
                >
                  <div className="w-full overflow-hidden rounded-2xl border border-border/60 bg-card">
                    <div className="relative w-full">
                      <Image
                        src={showcase.src}
                        alt={showcase.label}
                        width={1280}
                        height={720}
                        className="aspect-video w-full rounded-2xl object-cover transition-transform group-hover:scale-105 group-active:scale-105"
                        priority={index === 1}
                      />

                      {/* Gradient Ambient Masking bottom */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60"></div>

                      <CaptionOverlay>{showcase.label}</CaptionOverlay>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
