export function getRoleColor(role: string): string {
  const roleColors: Record<string, string> = {
    owner: "text-green-400",
    builder: "text-yellow-400",
    composer: "text-purple-400",
    "admin server": "text-red-400",
    policy: "text-cyan-400",
  };

  return roleColors[role.toLowerCase()] || "text-gray-400";
}
