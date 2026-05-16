"use client";

import {
  Shield,
  BarChart3,
  Database,
  Building2,
  Rocket,
  Settings,
  Zap,
  Package,
  Layout,
  Crown,
  Palette,
} from "lucide-react";

const menuSections = [
  {
    title: "Browse Products",
    items: [
      {
        title: "Free Blocks",
        description: "Essential UI components and sections",
        icon: Package,
        href: "#free-blocks",
      },
      {
        title: "Premium Templates",
        description: "Complete page templates and layouts",
        icon: Crown,
        href: "#premium-templates",
      },
      {
        title: "Admin Dashboards",
        description: "Full-featured dashboard solutions",
        icon: BarChart3,
        href: "#admin-dashboards",
      },
      {
        title: "Landing Pages",
        description: "Marketing and product landing templates",
        icon: Layout,
        href: "#landing-pages",
      },
    ],
  },
  {
    title: "Categories",
    items: [
      {
        title: "E-commerce",
        description: "Online store admin panels and components",
        icon: Building2,
        href: "#ecommerce",
      },
      {
        title: "SaaS Dashboards",
        description: "Application admin interfaces",
        icon: Rocket,
        href: "#saas-dashboards",
      },
      {
        title: "Analytics",
        description: "Data visualization and reporting templates",
        icon: BarChart3,
        href: "#analytics",
      },
      {
        title: "Authentication",
        description: "Login, signup, and user management pages",
        icon: Shield,
        href: "#authentication",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Documentation",
        description: "Integration guides and setup instructions",
        icon: Database,
        href: "#docs",
      },
      {
        title: "Component Showcase",
        description: "Interactive preview of all components",
        icon: Palette,
        href: "#showcase",
      },
      {
        title: "GitHub Repository",
        description: "Open source foundation and community",
        icon: Settings,
        href: "#github",
      },
      {
        title: "Design System",
        description: "shadcn/ui standards and customization",
        icon: Zap,
        href: "#design-system",
      },
    ],
  },
];

export function MegaMenu() {
  return (
    <div className="w-[700px] max-w-[95vw] bg-background p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-4 lg:space-y-6">
            {/* Section Header */}
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {section.title}
            </h3>

            {/* Section Links */}
            <div className="space-y-3 lg:space-y-4">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group -mx-2 my-0 block space-y-1 rounded-md p-2 transition-colors hover:bg-accent lg:-mx-3 lg:space-y-2 lg:p-3"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </span>
                  </div>
                  <p className="ml-6 text-xs leading-relaxed text-muted-foreground lg:ml-7">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
