import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Data from "@/data/data.json";
import { ArrowRight, LucideIcon, MessageCircle } from "lucide-react";

type DiscordLinkButtonProps = {
  variant?: "outline" | "ghost" | "default";
  size?: "default" | "lg" | "sm" | "icon";
  className?: string;
  label?: string;
  icon?: LucideIcon | null;
  iconClassName?: string;
  trailingIcon?: LucideIcon;
  trailingIconClassName?: string;
};

export function DiscordLinkButton({
  variant = "outline",
  size = "default",
  className,
  label = "Join Our Discord",
  icon: Icon = MessageCircle,
  iconClassName = "mr-1.5 h-4 w-4 text-purple-500",
  trailingIcon: TrailingIcon,
  trailingIconClassName = "ms-2 size-4 transition-transform group-hover:translate-x-1",
}: DiscordLinkButtonProps) {
  return (
    <Button variant={variant} size={size} asChild className={cn(className)}>
      <a href={Data.discord} target="_blank" rel="noopener noreferrer">
        {Icon && <Icon className={iconClassName} />}
        {label}
        {TrailingIcon && <TrailingIcon className={trailingIconClassName} />}
      </a>
    </Button>
  );
}
