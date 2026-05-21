import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SiteService } from "@/types/site-data";
import { Hammer, Music, Wheat, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconMap = {
  hammer: Hammer,
  music: Music,
  wheat: Wheat,
} as const;

type ServiceCardProps = {
  service: SiteService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Hammer;

  return (
    <Card className="flex h-full flex-col border-border/60 bg-background/50 backdrop-blur-sm transition-colors hover:border-purple-500/40">
      <CardHeader>
        <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-purple-500/10">
          <Icon className="size-5 text-purple-500" />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <p className="text-sm font-medium text-purple-400">{service.tagline}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mb-6 space-y-2">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{service.startingPrice}</Badge>
            <Badge variant="secondary">{service.deliveryDays}</Badge>
          </div>
          <Button className="w-full font-semibold" asChild>
            <Link href={service.ctaHref}>
              Request Quote
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
