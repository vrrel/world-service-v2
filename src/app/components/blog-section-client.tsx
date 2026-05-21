"use client";

import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PostData } from "@/lib/blog";
import { BookOpen } from "lucide-react";

export function BlogSectionClient({ posts }: { posts: PostData[] }) {
  return (
    <section
      id="blog"
      className="overflow-hidden bg-muted/50 py-24 select-none sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                loop: false,
              }}
              className="relative w-full p-0"
            >
              <CarouselContent className="flex">
                {posts.map((post) => (
                  <CarouselItem
                    key={post.slug}
                    className="w-full max-w-80 shrink-0"
                  >
                    <BlogCard post={post} />
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
