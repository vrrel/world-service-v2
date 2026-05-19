import { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://http://localhost:3000";

  // 1. Ambil semua artikel blog dari folder content/posts
  const posts = getSortedPostsData();

  // 2. Format data artikel menjadi format sitemap Next.js
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Menggunakan tanggal artikel sebagai tanggal modifikasi
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Gabungkan dengan halaman statis utama Anda
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...blogUrls];
}
