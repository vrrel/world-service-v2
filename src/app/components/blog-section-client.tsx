"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { PostData } from "@/lib/blog";

export function BlogSectionClient({ posts }: { posts: PostData[] }) {
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

        {posts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 bg-background/30 py-12 text-center backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">
              The archives are currently empty. Check back soon for new
              chronicles!
            </p>
          </div>
        ) : (
          <div className="relative mx-auto w-full max-w-5xl px-4">
            <Carousel
              opts={{
                align: "start",
                loop: false, // Menjamin carousel tidak berputar kembali ke awal secara otomatis
              }}
              className="relative w-full p-0"
            >
              {/* Mengunci container flex utama agar overflow horizontal aman */}
              <CarouselContent className="flex">
                {posts.map((post) => (
                  <CarouselItem
                    key={post.slug}
                    className="w-full max-w-80 shrink-0"
                  >
                    <Card className="flex h-[420px] w-full overflow-hidden border border-border/60 bg-background pt-0 transition-colors hover:border-purple-400 active:border-purple-400">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted">
                          <Image
                            src={
                              post.image ||
                              "https://ui.shadcn.com/placeholder.svg"
                            }
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105 active:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Content Body */}
                        <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-xs font-bold tracking-widest text-purple-400">
                                {post.tags[0]}
                              </p>
                              <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                                <Calendar className="size-4" />
                                <span>{post.date}</span>
                              </div>
                            </div>

                            <Link href={`/blog/${post.slug}`} className="block">
                              <h3 className="line-clamp-2 text-base leading-snug font-bold text-foreground transition-colors hover:text-purple-400 active:text-purple-400">
                                {post.title}
                              </h3>
                            </Link>

                            <p className="line-clamp-4 text-xs leading-relaxed text-muted-foreground">
                              {post.description}
                            </p>
                          </div>

                          <div className="border-t border-border/50 pt-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="group inline-flex items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-purple-400 active:text-purple-400"
                            >
                              Read Article
                              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex justify-end gap-2 lg:absolute lg:-top-24 lg:right-0 lg:mt-0">
                <CarouselPrevious className="static size-10 translate-y-0 cursor-pointer border-border/60 bg-background/50 backdrop-blur-sm" />
                <CarouselNext className="static size-10 translate-y-0 cursor-pointer border-border/60 bg-background/50 backdrop-blur-sm" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
