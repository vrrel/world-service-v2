import { BlogCard } from "@/components/blog-card";
import { DotPattern } from "@/components/dot-pattern";
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from "@/lib/blog";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-16 select-none sm:px-6 sm:py-24 lg:px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-background/90 to-background/50" />
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
              <div key={post.slug} className="w-full max-w-80 shrink-0">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
