"use client";

import * as React from "react";
import Image from "next/image";
import AutoplayPlugin from "embla-carousel-autoplay";
import { Users, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/dot-pattern";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Data dummy portofolio hasil bangunan Crystal Realms
const showcases = [
  {
    id: 1,
    src: "/main.webp",
    label: "World ID: beats99",
  },
  {
    id: 2,
    src: "/proof.webp",
    label: "World ID: beats99",
  },
  {
    id: 3,
    src: "/proof2.webp",
    label: "World ID: beats99",
  },
  {
    id: 4,
    src: "/proof3.webp",
    label: "World ID: beats99",
  },
  {
    id: 5,
    src: "/proof4.webp",
    label: "World ID: beats99",
  },
];

export function HeroSection() {
  // Plugin untuk menggerakkan carousel secara otomatis
  const plugin = React.useRef(
    AutoplayPlugin({ delay: 4000, stopOnInteraction: false }),
  );

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 pb-16 sm:pt-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <DotPattern
          className="opacity-70 dark:opacity-40"
          size="md"
          fadeStyle="ellipse"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge
              variant="outline"
              className="flex items-center gap-2 border-purple-500/30 bg-purple-500/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-500" />
              The Sovereign Guild of Builders & Composers
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl leading-none font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            #1 Elite{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
              Crystal
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Realms
            </span>{" "}
            Service
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Stop wasting hours on complex wireframes and trial-and-error note
            blocks. Dominate{" "}
            <span className="font-semibold text-foreground">
              Crystal Realms
            </span>{" "}
            with custom mega-structures, flawless music loops, and high-tier
            grinding networks built by certified game veterans.
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group cursor-pointer text-base font-bold shadow-md"
              asChild
            >
              <a href="#features">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer bg-background/50 text-base font-semibold backdrop-blur-sm"
              asChild
            >
              <a
                href="https://discord.com/invite/XEQhPc9a6p"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="mr-2 h-4 w-4 text-purple-500" />
                Join Our Staff
              </a>
            </Button>
          </div>
        </div>

        {/* Showcase Carousel Visual (Embla with Scale and Auto Scroll) */}
        <div className="relative mx-auto mt-16 max-w-5xl px-4">
          {/* Background Glow Premium Overlay */}
          <div className="pointer-events-none absolute -top-12 left-1/2 z-0 h-40 w-[85%] -translate-x-1/2 transform rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/30"></div>

          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="relative z-10 w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4 flex items-center">
              {showcases.map((showcase) => (
                <CarouselItem
                  key={showcase.id}
                  className="basis-full pl-4 transition-all duration-500 ease-in-out sm:basis-[85%] md:basis-[75%] [[data-active=false]_&]:scale-90 [[data-active=false]_&]:opacity-50"
                >
                  <div className="group/item relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl dark:shadow-none">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={showcase.src}
                        alt={showcase.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                        priority={showcase.id === 1}
                      />

                      {/* Gradient Ambient Masking bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60"></div>

                      {/* Caption/World Tag overlay */}
                      <div className="absolute bottom-4 left-0 w-full px-4 text-center">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-balance text-muted-foreground backdrop-blur-md">
                          <ShieldCheck className="size-3.5 text-emerald-500" />
                          {showcase.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
