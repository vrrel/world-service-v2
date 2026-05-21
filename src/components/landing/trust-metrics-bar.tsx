import { computeTrustMetrics } from "@/lib/site-data";
import { Separator } from "@/components/ui/separator";

export function TrustMetricsBar() {
  const metrics = computeTrustMetrics();

  const items = [
    { label: `${metrics.realmsBuilt}+ Realms Built`, color: "bg-purple-500" },
    { label: `${metrics.activeStaff} Active Staff`, color: "bg-green-500" },
    {
      label: `${metrics.averageRating}★ from ${metrics.reviewCount} reviews`,
      color: "bg-amber-500",
    },
    {
      label: `${metrics.rotdBadges}+ ROTD badges earned`,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && (
            <Separator
              orientation="vertical"
              className="!hidden !h-4 sm:!inline-flex"
            />
          )}
          <span className={`size-2 rounded-full ${item.color}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
