import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureListItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "yellow" | "purple";
};

const accentIconClasses = {
  yellow: "size-5 text-yellow-500 transition-transform group-hover:scale-110 dark:text-yellow-400",
  purple:
    "size-5 text-purple-500 transition-transform group-hover:scale-110 dark:text-purple-400",
} as const;

export function FeatureListItem({
  icon: Icon,
  title,
  description,
  accent = "yellow",
}: FeatureListItemProps) {
  return (
    <li className="group flex cursor-pointer items-start gap-3 rounded-xl bg-transparent p-3 transition-all duration-100 hover:bg-accent/5 active:scale-98 active:bg-accent/10">
      <div className="mt-0.5 flex shrink-0 items-center justify-center">
        <Icon
          className={cn(accentIconClasses[accent])}
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-normal text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>
    </li>
  );
}
