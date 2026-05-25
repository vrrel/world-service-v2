export function getRoleColor(role: string): string {
  const roleColors: Record<string, string> = {
    owner: "text-green-400",
    builder: "text-yellow-400",
    composer: "text-purple-400",
    artist: "text-cyan-400",
    hoster: "text-blue-400",
    broadcaster: "text-purple-500",
    coordinator: "text-lime-500",
    worker: "text-cyan-400",
    developer: "text-red-400",
    "server admin": "text-red-400",
    police: "text-pink-400",
    "brand ambassador": "text-cyan-400",
  };

  return roleColors[role.toLowerCase()] || "text-gray-400";
}
