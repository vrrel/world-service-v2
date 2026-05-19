import { cn } from "@/lib/utils";

interface SeparatorGradientProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SeparatorGradient({
  className,
  ...props
}: SeparatorGradientProps) {
  return (
    <div
      className={cn(
        "my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
        className,
      )}
      {...props}
    />
  );
}
