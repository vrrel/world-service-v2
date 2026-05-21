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
import { DiscordLinkButton } from "@/components/landing/discord-link-button";
import { submitToApi } from "@/lib/submit-form";
import { Heart } from "lucide-react";
import Data from "@/data/data.json";

const newsletterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function LandingFooter() {
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterSchema>) {
    const result = await submitToApi("/api/newsletter", values, {
      successMessage:
        "Thank you! You have successfully subscribed to our newsletter updates.",
      errorMessage: "Something went wrong. Please try again later!",
      logLabel: "Newsletter subscription",
    });

    if (result.ok) {
      form.reset();
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
              <DiscordLinkButton
                size="sm"
                iconClassName="h-4 w-4 text-purple-500"
                className="cursor-pointer gap-2 font-semibold"
              />
            </div>
          </div>

          {/* Links Columns */}
          <div className="max-md:col-span-1 max-md:text-center">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {Data.links.services.map((link) => (
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
              {Data.links.company.map((link) => (
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
              {Data.links.support.map((link) => (
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
              href={Data.privacy}
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href={Data.terms}
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
