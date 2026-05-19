import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string; // Di sini tipenya string, jadi datanya wajib string!
  updated: string;
  author: string;
  image: string;
  urlYoutube?: string;
  tags: string[];
  draft: boolean;
  contentHtml?: string;
}

// Fungsi helper untuk memastikan tanggal selalu bertipe string
function formatDate(date: any): string {
  if (date instanceof Date) {
    // Mengubah objek Date menjadi string "YYYY-MM-DD"
    return date.toISOString().split("T")[0];
  }
  return date ? String(date) : "";
}

export function getSortedPostsData(): PostData[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        ...matterResult.data, // Posisikan spread di atas agar tidak menimpa properti kustom di bawah
        slug,
        title: matterResult.data.title,
        description: matterResult.data.excerpt || matterResult.data.description,
        // KUNCI PERBAIKAN: Paksa menjadi string
        date: formatDate(matterResult.data.date),
        updated: formatDate(matterResult.data.updated),
        image: matterResult.data.image,
        tags: matterResult.data.tags || [],
        draft: matterResult.data.draft ?? false,
      } as PostData;
    })
    .filter((post) => post.draft === false);

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  if (matterResult.data.draft === true) {
    return null;
  }

  // Proses markdown menjadi string HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    ...matterResult.data, // Posisikan spread di atas
    slug,
    title: matterResult.data.title,
    description: matterResult.data.excerpt || matterResult.data.description,
    // KUNCI PERBAIKAN: Paksa menjadi string
    date: formatDate(matterResult.data.date),
    updated: formatDate(matterResult.data.updated),
    author: matterResult.data.author,
    image: matterResult.data.image,
    urlYoutube: matterResult.data.urlYoutube,
    tags: matterResult.data.tags || [],
    draft: matterResult.data.draft ?? false,
    contentHtml,
  } as PostData;
}
