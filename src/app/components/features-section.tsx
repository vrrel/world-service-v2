"use client";

import {
  Zap,
  Crown,
  Layout,
  Palette,
  Sparkles,
  Trophy,
  Music,
  Radio,
  Volume2,
  Piano,
} from "lucide-react";
import { FeatureListItem } from "@/components/landing/feature-list-item";
import { SectionHeader } from "@/components/landing/section-header";
import { Image3D } from "@/components/image-3d";

const mainFeatures = [
  {
    icon: Palette,
    title: "Custom Realm Aesthetics",
    description:
      "Tailor-made to match your dream theme with high-precision block placement and compositions.",
  },
  {
    icon: Crown,
    title: "ROTD-Level Quality",
    description:
      "Top-tier construction standards designed to heavily compete for the Realm of the Day title.",
  },
  {
    icon: Layout,
    title: "Ready-to-Use Layouts",
    description:
      "Functional designs optimized for marketplace hubs, PvP arenas, or custom stages.",
  },
  {
    icon: Sparkles,
    title: "Interior & Detail Polish",
    description:
      "Densely packed, neat, and aesthetically pleasing interior decorations inside out.",
  },
];

const secondaryFeatures = [
  {
    icon: Piano,
    title: "Custom Note Block Covers",
    description:
      "Transform your favorite anime tracks, pop songs, or custom melodies into in-game note block instruments.",
  },
  {
    icon: Radio,
    title: "Atmospheric BGM Design",
    description:
      "Composed background music perfectly adjusted to enhance the vibe and atmosphere of your Realm.",
  },
  {
    icon: Volume2,
    title: "Flawless Loop Setup",
    description:
      "Seamlessly engineered circuit and wire mechanisms ensuring your track loops infinitely without a hitch.",
  },
  {
    icon: Zap,
    title: "Fast & Clean Assembly",
    description:
      "Neat, well-hidden block wiring that doesn't compromise or disrupt the main visual aesthetic.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="3xl"
          badge="Crystal Realms Premium Services"
          title="Elevate Your Realm to the Ultimate Level"
          description="We provide all-in-one professional services ranging from grand architecture to custom musical arrangements, helping you craft a truly unique and unforgettable identity."
          titleClassName="mb-4 text-balance"
          descriptionClassName="text-lg"
        />

        {/* First Feature Section - Builder Service */}
        <div className="mb-28 grid items-start gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Image */}
          <Image3D
            lightSrc="/showcase/nyyuonkk.png"
            darkSrc="/showcase/nyyuonkk.png"
            alt="Crystal Realms World Building Preview"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-yellow-500 sm:text-3xl dark:text-yellow-400">
                <Trophy className="size-7" /> Builder Service
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Turn your blank canvas into a visual masterpiece. Our elite
                architects are ready to design and construct custom realms with
                grand details to skyrocket your reputation among players.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <FeatureListItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accent="yellow"
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout (Music Service) */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-purple-500 sm:text-3xl dark:text-purple-400">
                <Music className="size-7" /> Music Service
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Breathe life into your world with custom melodies. We specialize
                in arranging and deploying block-based audio instruments so
                visitors will love spending hours roaming your world.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <FeatureListItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accent="purple"
                />
              ))}
            </ul>
          </div>
          {/* Right Image */}
          <Image3D
            lightSrc="/showcase/kerynudu-music.png"
            darkSrc="/showcase/kerynudu-music.png"
            alt="Crystal Realms Music Service Preview"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
