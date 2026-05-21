import { DotPattern } from "@/components/dot-pattern";

export function DotPatternBackdrop() {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-background/90 to-background/50" />
      <DotPattern className="opacity-40" size="md" fadeStyle="ellipse" />
    </>
  );
}
