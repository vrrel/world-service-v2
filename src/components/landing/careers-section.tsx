import { SectionHeader } from "@/components/landing/section-header";
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getCareerIntro,
  getCareerPerks,
  getCareerRoles,
} from "@/lib/site-data";
import { Check, Users } from "lucide-react";

export function CareersSection() {
  const roles = getCareerRoles();
  const perks = getCareerPerks();

  return (
    <section id="careers" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="4xl"
          badge="Join Our Guild"
          title="Build Your Career Inside World Service"
          description={getCareerIntro()}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {perks.map((perk) => (
            <Badge
              key={perk}
              variant="outline"
              className="px-3 py-1 text-xs sm:text-sm"
            >
              <Check className="mr-1 size-3 text-emerald-500" />
              {perk}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <Card
              key={role.id}
              className="border-border/60 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg">{role.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2">
                  {role.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-purple-500" />
                      {req}
                    </li>
                  ))}
                </ul>
                <DiscordLinkButton
                  label={role.ctaLabel}
                  icon={Users}
                  className="w-full font-semibold"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
