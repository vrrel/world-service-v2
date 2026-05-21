import Players from "@/data/players.json";
import type { Player } from "@/types/player";

const players = Players.data as Player[];

export function getAllPlayers(): Player[] {
  return players;
}

export function getTestimonialPlayers(): Player[] {
  return players.filter((player) => player.testimoni);
}

export function getQuotedPlayers(): Player[] {
  return players.filter((player) => player.quote);
}

export function getTeamPlayers(): Player[] {
  return players.filter((player) => player.admin && player.admin.length > 0);
}

export function getPlayerByName(name: string): Player | undefined {
  return players.find((player) => player.name === name);
}
