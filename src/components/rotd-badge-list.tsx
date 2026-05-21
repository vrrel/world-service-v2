"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { stringToROTD } from "@/utils/rotd";

type RotdBadgeListProps = {
  stats: Record<string, number>;
};

export function RotdBadgeList({ stats }: RotdBadgeListProps) {
  if (!stats || Object.keys(stats).length === 0) {
    return null;
  }

  const [rotdRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div className="w-full overflow-hidden" ref={rotdRef}>
      <div className="flex w-full items-center justify-center gap-2">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={`rotd-slide-${key}`}
            className="flex w-fit shrink-0 items-center gap-1 select-none"
          >
            <img
              src={stringToROTD(key)}
              alt={`${key} ROTD Icon`}
              className="block w-6 object-contain"
            />
            <span className="text-sm font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
