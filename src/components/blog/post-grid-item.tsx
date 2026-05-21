import { BlogCard } from "@/components/blog-card";
import { PostData } from "@/lib/blog";

export function BlogPostGridItem({ post }: { post: PostData }) {
  return (
    <div className="w-full max-w-80 shrink-0">
      <BlogCard post={post} />
    </div>
  );
}
