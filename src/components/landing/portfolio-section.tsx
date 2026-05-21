"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getShowcases, getShowcasesByService } from "@/lib/site-data";
import type { ServiceId } from "@/types/site-data";
const filters: { id: "all" | ServiceId; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "builder", label: "Builder" },
  { id: "music", label: "Music" },
];

export function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | ServiceId>("all");
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState("");

  const items =
    filter === "all" ? getShowcases() : getShowcasesByService(filter);

  const selectedItem = items.find((i) => i.src === selectedSrc);

  return (
    <section id="portfolio" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="3xl"
          badge="Verified Portfolio"
          title="Realms We've Delivered"
          description="Browse completed worlds and music projects. Every screenshot maps to a real Crystal Realms World ID you can visit in-game."
          titleClassName="mb-4"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "default" : "outline"}
              size="sm"
              className="cursor-pointer"
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <button
              key={item.worldId}
              type="button"
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card text-left transition-colors hover:border-purple-500/50 active:border-purple-500/50"
              onClick={() => {
                setSelectedSrc(item.src);
                setSelectedLabel(item.label);
              }}
            >
              <div className="relative aspect-video">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-70" />
                <div className="absolute right-2 bottom-2 left-2">
                  <p className="truncate text-xs font-bold text-foreground">
                    {item.label}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {item.service}
                    </Badge>
                    {item.featured && (
                      <Badge className="bg-purple-500/80 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <Dialog
          open={!!selectedSrc}
          onOpenChange={(open) => !open && setSelectedSrc(null)}
        >
          <DialogContent className="max-w-3xl rounded-2xl p-4">
            <DialogHeader>
              <DialogTitle>{selectedLabel}</DialogTitle>
            </DialogHeader>
            {selectedSrc && (
              <div className="space-y-2">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={selectedSrc}
                    alt={selectedLabel}
                    fill
                    className="object-cover"
                  />
                </div>
                {selectedItem && (
                  <p className="text-base text-muted-foreground">
                    World ID:{" "}
                    <span className="font-semibold text-foreground">
                      {selectedItem.worldId}
                    </span>
                  </p>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
