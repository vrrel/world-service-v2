"use client";

import { BlogEmptyState } from "@/components/blog/empty-state";
import { BlogPageHeader } from "@/components/blog/page-header";
import { BlogPostGridItem } from "@/components/blog/post-grid-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PostData } from "@/lib/blog";

export function BlogSectionClient({ posts }: { posts: PostData[] }) {
  return (
    <section
      id="blog"
      className="overflow-hidden bg-muted/50 py-24 select-none sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPageHeader
          badge="Official Chronicles"
          title="From Our Newsroom"
          description="Stay ahead of the competition with masterclass guides, economic breakdowns, and building secrets directly from our senior team."
        />

        {posts.length === 0 ? (
          <BlogEmptyState />
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
                  <CarouselItem key={post.slug} className="w-full max-w-80 shrink-0">
                    <BlogPostGridItem post={post} />
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
