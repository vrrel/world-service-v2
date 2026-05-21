import { SectionHeader } from "@/components/landing/section-header";
import { getProcessSteps } from "@/lib/site-data";

export function HowItWorksSection() {
  const steps = getProcessSteps();

  return (
    <section id="process" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="3xl"
          badge="How It Works"
          title="From Brief to Delivery in 5 Steps"
          description="A clear, safe workflow designed for Crystal Realms clients no guesswork, no exploits, just professional hand-crafted service."
          titleClassName="mb-4"
        />

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-border/60 bg-background/50 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-purple-500/15 text-base font-bold text-purple-500 lg:mb-5 lg:size-14 lg:text-lg">
                {step.step}
              </div>
              <h3 className="mb-2 text-base font-bold lg:mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
