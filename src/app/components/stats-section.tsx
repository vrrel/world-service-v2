"use client";

import { DotPatternBackdrop } from "@/components/landing/dot-pattern-backdrop";
import { SectionHeader } from "@/components/landing/section-header";
import { TeamMemberCard } from "@/components/team-member-card";
import { getTeamPlayers } from "@/lib/players";
import useEmblaCarousel from "embla-carousel-react";

export function StatsSection() {
  const [mainTeamRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const teamPlayers = getTeamPlayers();

  return (
    <section id="team" className="relative overflow-hidden py-24 select-none">
      <DotPatternBackdrop />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="4xl"
          badge="Our Service Team"
          title="Meet our Team"
          description="The most trusted service providers in the Crystal Realms."
        />

        <div
          className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
          ref={mainTeamRef}
        >
          <div className="flex gap-4">
            {teamPlayers.map((player, index) => (
              <TeamMemberCard key={`team-member-${index}`} player={player} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
