export function PlayerRole({ name, role }: { name: string; role?: string }) {
  if (role === "CC") {
    return (
      <span className="text-cyan-400">
        {name} [{role}]
      </span>
    );
  }

  if (role === "Mod") {
    return (
      <span className="text-yellow-400">
        {name} [{role}]
      </span>
    );
  }

  if (role === "Dev") {
    return (
      <span className="text-green-400">
        {name} [{role}]
      </span>
    );
  }

  return name;
}
