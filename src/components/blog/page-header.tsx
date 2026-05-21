import { AccentBadge } from "@/components/landing/accent-badge";
import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

type BlogPageHeaderProps = {
  badge: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
  className?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
};

export function BlogPageHeader({
  badge,
  title,
  description,
  as: Heading = "h2",
  className,
  descriptionClassName,
  badgeClassName,
}: BlogPageHeaderProps) {
  const titleClassName =
    Heading === "h1"
      ? "text-3xl font-extrabold tracking-tight sm:text-5xl"
      : "mb-4 text-3xl font-bold tracking-tight sm:text-4xl";

  const descriptionClasses =
    Heading === "h1"
      ? "mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      : "text-base text-muted-foreground sm:text-lg";

  return (
    <div
      className={cn(
        "mx-auto mb-16 text-center",
        Heading === "h1" ? "space-y-4" : "max-w-2xl",
        className,
      )}
    >
      <AccentBadge
        icon={BookOpen}
        size={Heading === "h1" ? "sm" : "md"}
        className={cn("mx-auto", Heading === "h1" ? "mb-2" : "mb-4", badgeClassName)}
      >
        {badge}
      </AccentBadge>
      <Heading className={titleClassName}>{title}</Heading>
      <p className={cn(descriptionClasses, descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}
