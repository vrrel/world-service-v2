import { SectionHeader } from "@/components/landing/section-header";
import { ServiceCard } from "@/components/landing/service-card";
import { getServices } from "@/lib/site-data";

export function ServicesSection() {
  const services = getServices();

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          maxWidth="3xl"
          badge="Crystal Realms Services"
          title="What We Build For You"
          description="Professional builder, music, and harvest services all handcrafted by verified veterans. Pick a category and start your commission."
          titleClassName="mb-4"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
