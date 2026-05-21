import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge: React.ReactNode;
  title: string;
  description: string;
  maxWidth?: "2xl" | "3xl" | "4xl";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const maxWidthClasses = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
} as const;

export function SectionHeader({
  badge,
  title,
  description,
  maxWidth = "2xl",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-16 text-center",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {typeof badge === "string" ? (
        <Badge variant="outline" className="mb-4 backdrop-blur-sm">
          {badge}
        </Badge>
      ) : (
        badge
      )}
      <h2
        className={cn(
          "mb-6 text-3xl font-bold tracking-tight sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg",
          maxWidth === "2xl" && "max-w-2xl",
          maxWidth === "4xl" && "max-w-2xl",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
