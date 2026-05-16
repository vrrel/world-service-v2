"use client";

import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type FaqItem = {
  value: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    value: "item-1",
    question: "How do I place an order for the Builder or Music services?",
    answer:
      "Getting started is easy! Simply click the Contact Support button below to connect with us via Discord or our official channel. You can discuss your concept, layout ideas, or desired song tracks directly with our assigned elite team member.",
  },
  {
    value: "item-2",
    question:
      "Is my Crystal Realms account completely safe during the process?",
    answer:
      "Absolutely. Security is our absolute priority. All builds and note block setups are done completely by hand by trusted team experts. We never use any forbidden exploits, hacks, or third-party software, keeping your account 100% safe from bans.",
  },
  {
    value: "item-3",
    question: "How long does a custom Realm build usually take?",
    answer:
      "The timeline depends on the scale and complexity of your requested design. Minor refinements or small arena layouts can take 1-2 days, while grand, highly-detailed ROTD-level custom worlds generally take anywhere from 4 to 7 days.",
  },
  {
    value: "item-4",
    question: "Can you recreate any song for the Music Service?",
    answer:
      "Yes! We can adapt most anime soundtracks, gaming anthems, pop music, or custom beats into the game using note blocks. We also construct seamless circuit wiring so your custom BGM loops perfectly without breaking.",
  },
  {
    value: "item-5",
    question: "Do I need to provide the build materials and blocks myself?",
    answer:
      "We offer flexible options! You can either provide the materials beforehand inside your chests, or you can opt for our full-service package where our resource suppliers will grind and secure all the necessary blocks for you.",
  },
  {
    value: "item-6",
    question: "Will I get regular progress updates while you work?",
    answer:
      "Yes, we provide daily live updates. You will receive screenshots and direct status reports from the team member working on your Realm, ensuring the final project turns out exactly how you envisioned it.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 select-none sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">
            FAQ
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about our premium gaming services,
            ordering process, and security. Still have questions? We are always
            here to help!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-transparent">
            <div className="p-0">
              <Accordion type="single" collapsible className="space-y-5">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    /* Ditambahkan cursor-pointer pada container item agar ramah sentuhan di HP */
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
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Ready to claim your dream Realm? Let&apos;s build something
              legendary together.
            </p>
            <Button
              className="cursor-pointer px-6 font-semibold shadow-md"
              asChild
            >
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
