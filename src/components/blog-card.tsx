import { Card, CardContent } from "@/components/ui/card";
import { PostData } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: PostData;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex h-[420px] w-full overflow-hidden border border-border/60 bg-background pt-0 transition-colors hover:border-border active:border-border">
      <CardContent className="flex h-full w-full flex-col p-0">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted">
          <Image
            src={post.image || "https://ui.shadcn.com/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105 active:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between space-y-3 p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-bold tracking-widest text-purple-400">
                {post.tags && post.tags[0]}
              </p>
              <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <Calendar className="size-4" />
                <span>{formatPostDate(post.date)}</span>
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
  );
}
