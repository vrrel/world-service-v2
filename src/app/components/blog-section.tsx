import { getSortedPostsData } from "@/lib/blog";
import { BlogSectionClient } from "./blog-section-client";

export function BlogSection() {
  const allPosts = getSortedPostsData();
  const featuredPosts = allPosts.slice(0, 7);

  return <BlogSectionClient posts={featuredPosts} />;
}
