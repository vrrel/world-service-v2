"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { submitToApi } from "@/lib/submit-form";
import { getServiceById, getServices } from "@/lib/site-data";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  lastName: z.string().optional(),
  discordUsername: z.string().min(2, {
    message: "Discord username is required for follow-up.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.string().min(1, { message: "Please select a service." }),
  worldId: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
  const services = getServices();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      discordUsername: "",
      email: "",
      serviceType: "",
      worldId: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get("service");
    if (!serviceId) return;

    const service = getServiceById(serviceId);
    if (service) {
      form.setValue("serviceType", serviceId);
      form.setValue("subject", `${service.name} — Quote Request`);
    }
  }, [form]);

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const result = await submitToApi("/api/contact", values, {
      successMessage:
        "Your order inquiry has been sent to our Discord team! We will contact you shortly.",
      errorMessage:
        "Something went wrong. Please join our Discord server and contact us directly!",
      logLabel: "Contact form",
    });

    if (result.ok) {
      form.reset();
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Ready to Build Your Dream Realm?"
          description="Submit a structured request — we route it to the right builder, composer, or harvester on Discord."
          titleClassName="mb-4"
          descriptionClassName="text-lg"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="order-2 space-y-6 lg:order-1">
            <Card className="bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
                  <MessageCircle className="h-5 w-5" />
                  Discord Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Join our official server to check live queues, view portfolio
                  channels, and chat with assigned staff.
                </p>
                <DiscordLinkButton
                  size="sm"
                  icon={null}
                  className="cursor-pointer font-semibold"
                />
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500 dark:text-yellow-400">
                  <ShieldCheck className="h-5 w-5" />
                  Verified Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  100% hand-crafted work. Daily screenshots. Safe middleman
                  workflow available on request.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer font-semibold"
                  asChild
                >
                  <a href="#faq">View Safety FAQ</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2">
            <Card className="bg-background/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  Send us a service request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              const svc = getServiceById(value);
                              if (svc && !form.getValues("subject")) {
                                form.setValue(
                                  "subject",
                                  `${svc.name} — Quote Request`,
                                );
                              }
                            }}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="cursor-pointer">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((svc) => (
                                <SelectItem
                                  key={svc.id}
                                  value={svc.id}
                                  className="cursor-pointer"
                                >
                                  {svc.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>In-Game Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Igris" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="discordUsername"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Discord Username</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., igris_cr" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="yourname@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="worldId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>World ID (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., kerynudu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Premium ROTD Build — Spawn Hub"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your vision, references (YouTube links for music), timeline, and budget range in RT..."
                              rows={8}
                              className="min-h-40 leading-relaxed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full cursor-pointer font-bold shadow-md"
                    >
                      Submit Order Inquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
