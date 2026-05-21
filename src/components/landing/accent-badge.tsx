import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type AccentBadgeProps = {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  size?: "sm" | "md";
};

export function AccentBadge({
  children,
  icon: Icon,
  className,
  size = "md",
}: AccentBadgeProps) {
  const iconClassName =
    size === "sm" ? "size-3 text-purple-500" : "size-3 text-purple-500";

  return (
    <Badge
      variant="outline"
      className={cn(
        "flex w-fit items-center gap-2 border-purple-500/30 bg-purple-500/5",
        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-1.5 text-xs font-semibold backdrop-blur-sm dark:border-purple-400/30 dark:bg-purple-400/5",
        className,
      )}
    >
      {Icon && <Icon className={iconClassName} />}
      {children}
    </Badge>
  );
}
