import { PortraitImageFade } from "@/components/portrait-image-fade";
import { PlayerIdentity } from "@/components/player-identity";
import type { Player } from "@/types/player";

interface PlayerProfileProps {
  player: Pick<Player, "name" | "role" | "image" | "bio">;
  imageSizeClassName?: string;
}

export function PlayerProfile({
  player,
  imageSizeClassName = "max-w-16",
}: PlayerProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <PortraitImageFade
        src={player.image}
        alt={
          typeof player.name === "string" ? player.name : "Crystal Realms"
        }
        imageSizeClassName={imageSizeClassName}
        layout="inline"
        fadeHeight="30%"
      />

      <PlayerIdentity
        name={player.name}
        role={player.role}
        subtitle={player.bio}
      />
    </div>
  );
}
