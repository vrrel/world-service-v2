import { PlayerProfile } from "@/components/player-profile";
import { SeparatorGradient } from "@/components/ui/seperator-gradient";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { formatPostDate } from "@/lib/format-date";
import { getPlayerByName } from "@/lib/players";
import { getPostData as getRawPostData, getSortedPostsData } from "@/lib/blog";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

const getPostData = cache(async (slug: string) => {
  return await getRawPostData(slug);
});

interface PostProps {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;

  const postData = await getPostData(slug);

  if (!postData) {
    return {
      title: "Article Not Found",
    };
  }

  const imageUrl = postData.image
    ? postData.image.startsWith("http")
      ? postData.image
      : postData.image
    : null;

  return {
    metadataBase: new URL("https://worldservice.vercel.app"),
    title: `${postData.title} | Crystal Realms`,
    description: postData.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: "article",
      publishedTime: postData.date,
      authors: [postData.author || "World Service Team"],
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  const player = postData.author
    ? getPlayerByName(postData.author)
    : undefined;

  return (
    <article className="mx-auto w-full max-w-3xl p-4">
      <h1 className="text-3xl font-bold">{postData.title}</h1>

      <SeparatorGradient className="mt-4 mb-2" />
      {player && (
        <div className="flex h-16 w-fit items-center justify-center">
          <PlayerProfile player={player} imageSizeClassName="max-w-14" />
        </div>
      )}
      <SeparatorGradient className="mt-2 mb-4" />

      {postData.urlYoutube && <YouTubeEmbed url={postData.urlYoutube} />}

      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
        className="prose max-w-none prose-invert prose-p:text-muted-foreground prose-img:aspect-video prose-img:rounded-2xl"
      />

      <SeparatorGradient className="my-4" />
      <div className="flex shrink-0 flex-col gap-1">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="size-4" />
          <time dateTime={postData.date}>{formatPostDate(postData.date)}</time>
        </div>
        <span>
          Tags:{" "}
          <span className="text-muted-foreground">
            {postData.tags ? postData.tags.join(", ") : ""}
          </span>
        </span>
      </div>
      <SeparatorGradient className="my-4" />
    </article>
  );
}
