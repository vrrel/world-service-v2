"use client";

import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/landing/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getClientFaq, getStaffFaq } from "@/lib/site-data";
import type { FaqItem } from "@/types/site-data";

function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-5">
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="overflow-hidden rounded-xl !border bg-transparent transition-all"
        >
          <AccordionTrigger className="cursor-pointer items-center gap-4 rounded-none bg-transparent py-4 ps-4 pe-5 transition-colors duration-200 hover:bg-accent/5 hover:no-underline data-[state=open]:border-b">
            <div className="flex items-center gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CircleHelp className="size-5 text-purple-500 dark:text-purple-400" />
              </div>
              <span className="text-start text-sm leading-snug font-semibold text-foreground sm:text-base">
                {item.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t border-border/10 bg-muted/20 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection() {
  const clientFaq = getClientFaq();
  const staffFaq = getStaffFaq();

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers for clients ordering services and players applying to join our staff."
          titleClassName="mb-4"
          descriptionClassName="text-lg"
        />

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="client" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="client" className="cursor-pointer">
                For Clients
              </TabsTrigger>
              <TabsTrigger value="staff" className="cursor-pointer">
                For Staff / Applicants
              </TabsTrigger>
            </TabsList>
            <TabsContent value="client">
              <FaqAccordion items={clientFaq} />
            </TabsContent>
            <TabsContent value="staff">
              <FaqAccordion items={staffFaq} />
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Ready to claim your dream Realm? Let&apos;s build something
              legendary together.
            </p>
            <Button className="cursor-pointer px-6 font-semibold shadow-md" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
