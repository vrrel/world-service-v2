"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Data from "@/data/data.json";

const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Taruh URL Webhook Discord kamu di bawah ini
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL_REQUEST!;

    // Format tampilan info pesanan rapi (Embed) untuk Discord
    const discordMessage = {
      username: "Order Bot",
      avatar_url: "https://worldservice.vercel.app/bot/order.png",
      // content: "🔔 **New Service Inquiry Received!**",
      embeds: [
        {
          title: `Subject: ${values.subject}`,
          color: 3447003,
          fields: [
            {
              name: "Client Name",
              value: `${values.firstName} ${values.lastName}`,
              inline: true,
            },
            {
              name: "Email Address",
              value: values.email,
              inline: true,
            },
            {
              name: "Message Details",
              value: values.message,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Crystal Realms Service Department",
          },
        },
      ],
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        alert(
          "Your order inquiry has been sent to our Discord team! We will contact you shortly.",
        );
        form.reset();
      } else {
        throw new Error("Failed to send to Discord");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Something went wrong. Please join our Discord server and contact us directly!",
      );
    }
  }

  return (
    <section id="contact" className="py-24 select-none sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">
            Get In Touch
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Your Dream Realm?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our team is ready to assist you with elite building designs and
            premium custom music loops. Choose the best way to reach out and
            commission us.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Options */}
          <div className="order-2 space-y-6 lg:order-1">
            <Card className="cursor-pointer bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
                  <MessageCircle className="h-5 w-5" />
                  Discord Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Join our official community server to chat directly with our
                  active boosters, check real-time queues, and view our building
                  portfolio.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer font-semibold"
                  asChild
                >
                  <a
                    href={Data.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500 dark:text-yellow-400">
                  <ShieldCheck className="h-5 w-5" />
                  Verified Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Need a secure transaction or a middleman setup? Track your
                  order ticket safely under our team&apos;s strict privacy
                  encryption rules.
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

          {/* Contact Form */}
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
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name / In-Game Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Igris" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Custom ROTD Build Request, Custom Note Block Music Loop..."
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
                          <FormLabel>Message Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your design vision, realm size, or provide the song name/YouTube link you want us to arrange..."
                              rows={10}
                              className="min-h-50 leading-relaxed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full cursor-pointer font-bold shadow-md transition-transform active:scale-99"
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
