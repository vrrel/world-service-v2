import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  image: string;
  urlYoutube?: string;
  tags: string[];
  draft: boolean;
  contentHtml?: string;
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
        slug,
        title: matterResult.data.title,
        description: matterResult.data.excerpt,
        date: matterResult.data.date,
        image: matterResult.data.image,
        tags: matterResult.data.tags,
        draft: matterResult.data.draft ?? false,
        ...matterResult.data,
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
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title,
    description: matterResult.data.excerpt,
    date: matterResult.data.date,
    updated: matterResult.data.updated,
    author: matterResult.data.author,
    image: matterResult.data.image,
    urlYoutube: matterResult.data.youtube,
    tags: matterResult.data.tags,
    draft: matterResult.data.draft ?? false,
    contentHtml,
    ...matterResult.data,
  };
}
