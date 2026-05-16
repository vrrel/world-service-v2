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
import { Badge } from "@/components/ui/badge";
import { Image3D } from "@/components/image-3d";

// English Copywriting: Builder Service (Custom Realm Architecture & Design)
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

// English Copywriting: Music Service (Custom Note Block Composition)
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
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">
            Crystal Realms Premium Services
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Elevate Your Realm to the Ultimate Level
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We provide all-in-one professional services ranging from grand
            architecture to custom musical arrangements, helping you craft a
            truly unique and unforgettable identity.
          </p>
        </div>

        {/* First Feature Section - Builder Service */}
        <div className="mb-28 grid items-start gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Image */}
          <Image3D
            lightSrc="/main.webp"
            darkSrc="/main.webp"
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
                <li
                  key={index}
                  className="group flex cursor-pointer items-start gap-3 rounded-xl bg-transparent p-3 transition-all duration-100 hover:bg-accent/5 active:scale-98 active:bg-accent/10"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon
                      className="size-5 text-yellow-500 transition-transform group-hover:scale-110 dark:text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-normal text-muted-foreground sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
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
                <li
                  key={index}
                  className="group flex cursor-pointer items-start gap-3 rounded-xl bg-transparent p-3 transition-all duration-100 hover:bg-accent/5 active:scale-98 active:bg-accent/10"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon
                      className="size-5 text-purple-500 transition-transform group-hover:scale-110 dark:text-purple-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-normal text-muted-foreground sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/xbase.png"
            darkSrc="/xbase.png"
            alt="Crystal Realms Music Service Preview"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
