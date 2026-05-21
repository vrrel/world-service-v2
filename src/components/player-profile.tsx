import { PlayerRole } from "@/utils/player";
import Image from "next/image";

interface PlayerProfileProps {
  player: {
    name: string;
    role?: string;
    image: string;
    bio: string;
    [key: string]: any;
  };
  imageSizeClassName?: string;
}

export function PlayerProfile({
  player,
  imageSizeClassName = "max-w-16",
}: PlayerProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative h-full max-h-16 w-full overflow-y-hidden ${imageSizeClassName}`}
      >
        <div className="absolute bottom-0 left-0 h-[30%] w-full bg-linear-to-b from-background/0 via-background/50 to-background"></div>

        <Image
          width={500}
          height={500}
          src={player.image}
          loading="eager"
          alt={typeof player.name === "string" ? player.name : "Crystal Realms"}
          className="block w-[80%] object-cover object-top"
        />
      </div>

      <div className="flex flex-col items-start">
        <span className="text-lg font-bold whitespace-nowrap text-foreground">
          <PlayerRole name={player.name} role={player.role} />
        </span>
        <span className="text-sm font-semibold whitespace-nowrap text-muted-foreground">
          {player.bio}
        </span>
      </div>
    </div>
  );
}
