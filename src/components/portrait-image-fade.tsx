import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/format-name";
import Image from "next/image";

type PortraitImageFadeProps = {
  src: string;
  alt: string;
  name?: string;
  variant?: "background" | "card";
  fadeHeight?: "30%" | "50%";
  layout?: "inline" | "card" | "avatar";
  imageSizeClassName?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

const fadeClasses = {
  background: {
    "30%": "bg-linear-to-b from-background/0 via-background/50 to-background",
    "50%": "bg-linear-to-b from-background/0 via-background/90 to-background",
  },
  card: {
    "30%": "bg-gradient-to-b from-card/10 via-card/50 to-card",
    "50%": "bg-gradient-to-b from-card/10 via-card/90 to-card",
  },
} as const;

export function PortraitImageFade({
  src,
  alt,
  name,
  variant = "background",
  fadeHeight = "30%",
  layout = "inline",
  imageSizeClassName = "max-w-16",
  className,
  width = 500,
  height = 500,
  loading = "eager",
}: PortraitImageFadeProps) {
  const fadeClassName = cn(
    "absolute bottom-0 left-0 w-full",
    fadeHeight === "30%" ? "h-[30%]" : "h-[50%]",
    fadeClasses[variant][fadeHeight],
  );

  if (layout === "avatar") {
    return (
      <Avatar
        className={cn("relative size-11 shrink-0 rounded-none", className)}
      >
        <AvatarImage
          alt={alt}
          src={src}
          loading={loading}
          width={120}
          height={120}
          className="object-cover object-top [image-rendering:-webkit-optimize-contrast] [image-rendering:pixelated]"
        />
        <AvatarFallback>{name ? getInitials(name) : "?"}</AvatarFallback>
        <div className={fadeClassName} />
      </Avatar>
    );
  }

  if (layout === "card") {
    return (
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center overflow-hidden",
          className,
        )}
      >
        <Image
          width={width}
          height={height}
          alt={alt}
          src={src}
          className="block w-[80%] object-cover object-top [image-rendering:-webkit-optimize-contrast] [image-rendering:pixelated]"
          loading={loading}
        />
        <div className={fadeClassName} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-full max-h-16 w-full overflow-y-hidden",
        imageSizeClassName,
        className,
      )}
    >
      <Image
        width={width}
        height={height}
        src={src}
        loading={loading}
        alt={alt}
        className="block w-[80%] object-cover object-top [image-rendering:-webkit-optimize-contrast] [image-rendering:pixelated]"
      />
      <div className={fadeClassName} />
    </div>
  );
}
