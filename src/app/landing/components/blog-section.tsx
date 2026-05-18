"use client";

import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogs = [
  {
    id: 1,
    image: "/proof2.webp",
    category: "Economy",
    title: "How I Earned 60K+ RT in Just 1 Month",
    description:
      "A deep dive into supply-demand trading, flipping rare blocks, and managing your shop layout to maximize daily Realm Token revenue.",
  },
  {
    id: 2,
    image: "/proof3.webp",
    category: "Investment",
    title: "Naraka's Guide: Preparing for the Next Big Event",
    description:
      "Exclusive investment strategies from Crystal Realms' top tycoon on which materials to hoard before the upcoming seasonal update drops.",
  },
  {
    id: 3,
    image: "/proof4.webp",
    category: "Realm Design",
    title: "ROTD Blueprint: The Anatomy of Winning Worlds",
    description:
      "Learn how modern aesthetic trends, smooth parkour integration, and custom pathing can get your island nominated for Realm of the Day.",
  },
  {
    id: 4,
    image: "/proof5.webp",
    category: "Audio",
    title: "Note Block Secrets: Perfecting Seamless Music Loops",
    description:
      "Stop your music from overlapping. Discover the exact redstone repeater delay settings needed for continuous, lag-free background tracks.",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="overflow-hidden bg-muted/50 py-24 select-none sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mx-auto mb-4 flex w-fit items-center gap-2 border-purple-500/30 bg-purple-500/5"
          >
            <BookOpen className="size-3 text-purple-500" />
            Official Chronicles
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From Our Newsroom
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Stay ahead of the competition with masterclass guides, economic
            breakdowns, and building secrets directly from our senior team.
          </p>
        </div>

        {/* Blog Carousel Container */}
        <div className="relative mx-auto w-full max-w-5xl px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false, // Menjamin carousel tidak berputar kembali ke awal secara otomatis
            }}
            className="relative w-full"
          >
            {/* Mengunci container flex utama agar overflow horizontal aman */}
            <CarouselContent className="flex">
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="w-full max-w-80 shrink-0"
                >
                  <Card className="flex h-[420px] w-full overflow-hidden border border-border/60 bg-background/50 pt-0 transition-colors hover:border-purple-400/30 active:border-purple-400/30">
                    <CardContent className="flex h-full flex-col p-0">
                      {/* Image Container */}
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105 active:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Body */}
                      <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold tracking-widest text-purple-500 uppercase dark:text-purple-400">
                            {blog.category}
                          </p>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="block cursor-pointer"
                          >
                            <h3 className="line-clamp-2 text-base leading-snug font-bold text-foreground transition-colors hover:text-purple-400 active:text-purple-400">
                              {blog.title}
                            </h3>
                          </a>
                          <p className="line-clamp-4 text-xs leading-relaxed text-muted-foreground">
                            {blog.description}
                          </p>
                        </div>

                        <div className="border-t border-border/40 pt-2">
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="group inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-purple-400 active:text-purple-400"
                          >
                            Read Article
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigasi Tombol Atas Kanan */}
            <div className="mt-8 flex justify-end gap-2 lg:absolute lg:-top-24 lg:right-0 lg:mt-0">
              <CarouselPrevious className="static size-10 translate-y-0 cursor-pointer border-border/60 bg-background/50 backdrop-blur-sm" />
              <CarouselNext className="static size-10 translate-y-0 cursor-pointer border-border/60 bg-background/50 backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
