"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { Swords, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-background/90 p-3 backdrop-blur-xl transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex gap-2">
        <Button size="sm" className="flex-1 font-bold" asChild>
          <Link href="/#contact">
            <Swords className="mr-1 size-4" />
            Order
          </Link>
        </Button>
        <DiscordLinkButton
          size="sm"
          label="Discord"
          className="flex-1 font-semibold"
        />
        <Button size="sm" variant="outline" className="flex-1 font-semibold" asChild>
          <Link href="/#careers">
            <Users className="mr-1 size-4" />
            Careers
          </Link>
        </Button>
      </div>
    </div>
  );
}
