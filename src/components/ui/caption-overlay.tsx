import { cva, type VariantProps } from "class-variance-authority";
import { ShieldCheck } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const captionOverlayVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-balance text-muted-foreground backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "border-border bg-background/50 text-muted-foreground",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        destructive: "border-destructive/30 bg-destructive/10 text-destructive",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px] gap-1 [&_svg]:size-3",
        lg: "px-4 py-1.5 text-sm gap-2 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface CaptionOverlayProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof captionOverlayVariants> {
  showIcon?: boolean;
}

function CaptionOverlay({
  className,
  variant,
  size,
  children,
  showIcon = true,
  ...props
}: CaptionOverlayProps) {
  return (
    <div className="absolute bottom-4 left-0 w-full px-4 text-center">
      <span
        className={cn(captionOverlayVariants({ variant, size, className }))}
        {...props}
      >
        {showIcon && (
          <ShieldCheck className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
        )}
        {children}
      </span>
    </div>
  );
}

export { CaptionOverlay, captionOverlayVariants };
