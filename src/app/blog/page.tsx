import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DotPattern } from "@/components/dot-pattern";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-16 select-none sm:px-6 sm:py-24 lg:px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      <DotPattern className="opacity-40" size="md" fadeStyle="ellipse" />

      <div className="relative z-10 mb-16 space-y-4 text-center">
        <Badge
          variant="outline"
          className="mx-auto mb-2 flex w-fit items-center gap-2 border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs"
        >
          <BookOpen className="size-3.5 text-purple-500" />
          The Crystal Chronicles
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Our Official Blog
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Masterclass guides, market analysis, and economy secrets directly from
          the senior vanguard of the Crystal Realms.
        </p>
      </div>

      <div className="relative z-10 w-full">
        {posts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 bg-background/30 py-12 text-center backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">
              The archives are currently empty. Check back soon for new
              chronicles!
            </p>
          </div>
        ) : (
          <div className="flex w-full flex-wrap justify-center gap-6 pb-6">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="w-full max-w-80 shrink-0 snap-center"
              >
                <Card className="flex h-[420px] w-full flex-col overflow-hidden border border-border/60 bg-background pt-0 transition-colors hover:border-purple-400/30 active:border-purple-400/30">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={
                          post.image || "https://ui.shadcn.com/placeholder.svg"
                        }
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105 active:scale-105"
                        loading="lazy"
                      />
                    </div>


                    <div className="flex flex-col justify-between space-y-3 p-4">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
