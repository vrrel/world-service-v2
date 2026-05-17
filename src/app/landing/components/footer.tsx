"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Logo } from "@/components/logo";
import { Heart, MessageCircle } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const footerLinks = {
  services: [
    { name: "Realm Builder", href: "#services" },
    { name: "Music Service", href: "#services" },
    { name: "Our Portfolio", href: "#portfolio" },
    { name: "Pricing Plans", href: "#pricing" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Official Blog", href: "#blog" },
    { name: "Join Our Team", href: "#careers" },
  ],
  support: [
    { name: "Help & FAQ", href: "#faq" },
    { name: "Safety Rules", href: "#faq" },
    { name: "Contact Support", href: "#contact" },
  ],
};

export function LandingFooter() {
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterSchema>) {
    // Taruh URL Webhook Discord kamu di bawah ini
    const NEWSLETTER_WEBHOOK_URL = "SALIN_URL_WEBHOOK_NEWSLETTER_KAMU_DISINI";

    // Format tampilan info subscriber untuk Discord
    const discordMessage = {
      username: "Crystal Newsletter Bot",
      avatar_url: "https://i.imgur.com/AfFp7pu.png",
      content: "📰 **New Newsletter Subscriber!**",
      embeds: [
        {
          title: "✅ New Subscription Confirmed",
          color: 3447003, // Warna biru info khas Discord
          fields: [
            {
              name: "📧 Subscriber Email",
              value: `\`${values.email}\``, // Menggunakan format code block agar mudah di-copy staf
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Crystal Realms Lead Generation",
          },
        },
      ],
    };

    try {
      const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        alert(
          "Thank you! You have successfully subscribed to our newsletter updates.",
        );
        form.reset();
      } else {
        throw new Error("Failed to send to Discord");
      }
    } catch (error) {
      console.error("Error sending subscription:", error);
      alert("Something went wrong. Please try again later!");
    }
  }

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm select-none">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 border-b border-border/40 pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Stay Ahead of the Realm
            </h3>
            <p className="mb-6 text-sm text-muted-foreground sm:text-base">
              Get the latest updates on Crystal Realms building trends, discount
              codes, and admin recruitment openings sent straight to your inbox.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-background/80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="cursor-pointer font-semibold shadow-sm"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 items-start gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 max-w-sm max-md:mx-auto max-md:text-center">
            <div className="mb-4 flex items-center space-x-2 max-md:justify-center">
              <a
                href="/"
                className="flex cursor-pointer items-center space-x-2"
              >
                <Logo size={32} />
                <span className="text-xl font-bold tracking-tight">
                  World Service
                </span>
              </a>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Premium custom worlds, ROTD designs, and flawless note block music
              loops tailored for the Crystal Realms community.
            </p>
            <div className="flex max-md:justify-center">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer gap-2 font-semibold"
                asChild
              >
                <a
                  href="https://discord.com/invite/XEQhPc9a6p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-purple-500" />
                  Join Our Discord
                </a>
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="max-md:col-span-1 max-md:text-center">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-md:col-span-1 max-md:text-center">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-md:col-span-2 max-md:mt-4 max-md:text-center">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 border-border/40" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:text-sm lg:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-current text-purple-500" />
              <span>for the</span>
              <span className="font-semibold text-foreground">
                Crystal Realms
              </span>
              <span>community</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>
              © {new Date().getFullYear()} World Service. All rights reserved.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
