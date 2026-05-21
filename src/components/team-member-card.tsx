import { RotdBadgeList } from "@/components/rotd-badge-list";
import { PortraitImageFade } from "@/components/portrait-image-fade";
import { PlayerIdentity } from "@/components/player-identity";
import type { Player } from "@/types/player";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  player: Player;
  className?: string;
};

export function TeamMemberCard({ player, className }: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "h-90 w-60 shrink-0 rounded-2xl border border-border/50 bg-background px-4 pt-0 pb-2 text-center transition-colors hover:border-border active:border-border",
        className,
      )}
    >
      <div className="relative h-full w-full">
        <PortraitImageFade
          src={player.image}
          alt={`${player.name} - Crystal Realms`}
          layout="card"
          fadeHeight="50%"
          width={200}
          height={300}
        />

        <div className="absolute bottom-4 left-0 w-full bg-transparent px-4 pt-2 text-center">
          <PlayerIdentity
            name={player.name}
            role={player.role}
            adminRoles={player.admin}
            align="center"
          />
          {player.ROTD && <RotdBadgeList stats={player.ROTD} />}
        </div>
      </div>
    </div>
  );
}
