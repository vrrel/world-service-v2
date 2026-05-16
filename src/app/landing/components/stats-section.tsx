"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DotPattern } from "@/components/dot-pattern";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// 1. Tipe Data
interface RotdStat {
  icon: string;
  count: number;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  rotdStats: RotdStat[];
}

// 2. Data Anggota Tim Jasa Service / Booster
const teamMembers: TeamMember[] = [
  {
    name: "Wony",
    role: "Composer",
    image: "/wony.png",
    rotdStats: [
      { icon: "/artROTD.png", count: 4 },
      { icon: "/storyROTD.png", count: 1 },
      { icon: "/specialROTD.png", count: 3 },
      { icon: "/artROTD.png", count: 2 },
      { icon: "/artROTD.png", count: 2 },
    ],
  },
  {
    name: "WhyNotJustDied",
    role: "Builder",
    image: "/whynot.png",
    rotdStats: [
      { icon: "/specialROTD.png", count: 5 },
      { icon: "/artROTD.png", count: 3 },
      { icon: "/storyROTD.png", count: 2 },
    ],
  },
  {
    name: "IGRIS",
    role: "Owner Crystal Service",
    image: "/igris.png",
    rotdStats: [
      { icon: "/specialROTD.png", count: 1 },
      { icon: "/artROTD.png", count: 6 },
      { icon: "/storyROTD.png", count: 4 },
    ],
  },
  {
    name: "Regas",
    role: "Resource Supplier",
    image: "/whynot.png",
    rotdStats: [
      { icon: "/artROTD.png", count: 3 },
      { icon: "/storyROTD.png", count: 5 },
    ],
  },
  {
    name: "Xenon",
    role: "Account Security Expert",
    image: "/whynot.png",
    rotdStats: [
      { icon: "/specialROTD.png", count: 2 },
      { icon: "/storyROTD.png", count: 3 },
    ],
  },
];

// 3. Sub-Komponen khusus untuk Carousel ROTD di dalam Card (Pure Auto-Scroll Loop)
function RotdCarousel({ stats }: { stats: RotdStat[] }) {
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
    <div className="pointer-events-none w-full overflow-hidden" ref={rotdRef}>
      <div className="flex items-center justify-center">
        {stats.map((stat, idx) => (
          <div
            key={`rotd-slide-${idx}`}
            className="flex flex-shrink-0 items-center gap-1 pr-2 select-none"
          >
            <img
              src={stat.icon}
              alt="ROTD Icon"
              className="block w-6 object-contain"
            />
            <span className="text-sm font-bold text-foreground">
              {stat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Komponen Utama
export function StatsSection() {
  const [mainTeamRef] = useEmblaCarousel({
    loop: false, // Diubah ke false agar ujung scroll manual memiliki batasan natural
    dragFree: true, // Memperbolehkan user menghentikan geseran di titik mana saja bebas
    align: "start", // Meratakan card dimulai dari sisi kiri kontainer luar
  });

  return (
    <section id="team" className="relative overflow-hidden py-24 select-none">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      <DotPattern className="opacity-40" size="md" fadeStyle="ellipse" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Copywriting Jasa Service */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">
            Our Service Team
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our experts
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The most trusted service providers in the Crystal Realms. Every
            build, trade, and grind is handled with maximum precision.
          </p>
        </div>

        {/* Carousel Utama Card (Hanya aktif untuk Geser/Drag Manual) */}
        <div
          className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
          ref={mainTeamRef}
        >
          <div className="flex pl-1">
            {teamMembers.map((member, index) => (
              <div
                key={`team-member-${index}`}
                className="flex-shrink-0 pr-6 select-none"
              >
                <Card className="h-96 w-64 overflow-hidden border-border/50 bg-background pt-0 pb-2 text-center">
                  <CardContent className="relative h-full w-full px-4 py-0 text-center">
                    {/* Wadah Gambar */}
                    <div className="relative flex h-[80%] w-full items-end justify-center overflow-hidden text-center">
                      <Image
                        width={200}
                        height={300}
                        alt={`${member.name} - Crystal Realms`}
                        src={member.image}
                        className="block w-[80%] object-cover object-top"
                      />
                      {/* Bottom fade effect */}
                      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-background/0 via-background/90 to-background"></div>
                    </div>

                    {/* Informasi Profil & Komponen Carousel ROTD */}
                    <div className="absolute bottom-4 left-0 w-full bg-transparent px-5 pt-2 text-center">
                      {/* Name and Role */}
                      <h3 className="text-lg leading-tight font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-sm font-semibold text-purple-500 dark:text-purple-400">
                        {member.role}
                      </p>

                      {/* Pemanggilan Auto-Scroll Embla Khusus Ikon ROTD */}
                      <div className="w-full items-center text-center">
                        <RotdCarousel stats={member.rotdStats} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
