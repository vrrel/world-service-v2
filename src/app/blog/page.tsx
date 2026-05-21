import { BlogEmptyState } from "@/components/blog/empty-state";
import { BlogPageHeader } from "@/components/blog/page-header";
import { BlogPostGridItem } from "@/components/blog/post-grid-item";
import { DotPatternBackdrop } from "@/components/landing/dot-pattern-backdrop";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-16 select-none sm:px-6 sm:py-24 lg:px-8">
      <DotPatternBackdrop />

      <BlogPageHeader
        as="h1"
        badge="The Crystal Chronicles"
        title="Our Official Blog"
        description="Masterclass guides, market analysis, and economy secrets directly from the senior vanguard of the Crystal Realms."
        className="relative z-10"
      />

      <div className="relative z-10 w-full">
        {posts.length === 0 ? (
          <BlogEmptyState />
        ) : (
          <div className="flex w-full flex-wrap justify-center gap-6 pb-6">
            {posts.map((post) => (
              <BlogPostGridItem key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
