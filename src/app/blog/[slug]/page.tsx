import Image from "next/image";
import { getPostData as getRawPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";
import Players from "@/data/players.json";
import { PlayerRole } from "@/utils/player";
import { SeparatorGradient } from "@/components/ui/seperator-gradient";
import { Metadata } from "next";
import { Calendar } from "lucide-react";
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

  return {
    title: `${postData.title} | Crystal Realms`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: "article",
      publishedTime: postData.date,
      authors: [postData.author || "World Service Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fungsi pembantu untuk memastikan URL yang dimasukkan otomatis menjadi format embed
function getYouTubeEmbedUrl(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  const player = Players.find((p) => p.name === postData.author);

  return (
    <article className="mx-auto w-full max-w-3xl p-4">
      <h1 className="text-3xl font-bold">{postData.title}</h1>

      <SeparatorGradient className="mt-4 mb-2" />
      {player && (
        <div className="flex h-16 w-fit items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="relative h-full max-h-16 w-full max-w-14 overflow-y-hidden">
              <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
              <Image
                width={500}
                height={500}
                src={player.image}
                loading="eager"
                alt={
                  typeof player.name === "string"
                    ? player.name
                    : "Crystal Realms"
                }
                className="block w-[80%] object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold whitespace-nowrap text-foreground">
                <PlayerRole name={player.name} role={player.role} />
              </span>
              <span className="text-sm whitespace-nowrap text-muted-foreground">
                {player.bio}
              </span>
            </div>
          </div>
        </div>
      )}
      <SeparatorGradient className="mt-2 mb-4" />

      {postData.urlYoutube && (
        <div className="mb-6 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src={getYouTubeEmbedUrl(postData.urlYoutube)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
        className="prose max-w-none prose-invert prose-p:text-muted-foreground prose-img:aspect-video prose-img:rounded-2xl"
      />

      <SeparatorGradient className="my-4" />
      <div className="flex flex-shrink-0 flex-col gap-1">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="size-4" />
          <time dateTime={postData.date}>{postData.date}</time>
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
