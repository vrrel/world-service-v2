import { LandingFooter } from "@/app/components/footer";
import { LandingNavbar } from "@/app/components/navbar";

type LandingShellProps = {
  children: React.ReactNode;
  asMain?: boolean;
};

export function LandingShell({ children, asMain = false }: LandingShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      {asMain ? <main>{children}</main> : children}
      <LandingFooter />
    </div>
  );
}
