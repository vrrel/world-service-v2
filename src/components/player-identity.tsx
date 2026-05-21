import { cn } from "@/lib/utils";
import { PlayerRole } from "@/utils/player";
import { getRoleColor } from "@/utils/role-color";

type PlayerIdentityProps = {
  name: string;
  role?: string;
  subtitle?: string;
  adminRoles?: string[];
  size?: "sm" | "md";
  align?: "start" | "center";
  nameClassName?: string;
  subtitleClassName?: string;
};

export function PlayerIdentity({
  name,
  role,
  subtitle,
  adminRoles,
  size = "md",
  align = "start",
  nameClassName,
  subtitleClassName,
}: PlayerIdentityProps) {
  const nameSizeClass =
    size === "sm"
      ? "text-sm font-bold sm:text-base"
      : "text-lg font-bold leading-tight text-nowrap text-foreground";

  const subtitleSizeClass =
    size === "sm"
      ? "mt-0.5 block text-xs tracking-wide text-muted-foreground"
      : "text-sm font-semibold whitespace-nowrap text-muted-foreground";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        align === "start" && "items-start",
      )}
    >
      <h3
        className={cn(
          nameSizeClass,
          size === "sm" && "truncate transition-colors hover:text-purple-500",
          nameClassName,
        )}
      >
        <PlayerRole name={name} role={role} />
      </h3>

      {adminRoles && adminRoles.length > 0 ? (
        <div className={cn("mb-3 text-balance", align === "center" && "text-center")}>
          {adminRoles.map((adminRole, idx) => (
            <span
              key={`${adminRole}-${idx}`}
              className={cn("text-sm font-semibold", getRoleColor(adminRole))}
            >
              {adminRole}
              {idx < adminRoles.length - 1 && (
                <span className="text-muted-foreground"> & </span>
              )}
            </span>
          ))}
        </div>
      ) : (
        subtitle && (
          <span className={cn(subtitleSizeClass, subtitleClassName)}>
            {subtitle}
          </span>
        )
      )}
    </div>
  );
}
