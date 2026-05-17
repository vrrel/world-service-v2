"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import Data from "@/data/data.json";

// Menu navigasi disesuaikan dengan ID section Crystal Realms kamu
const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Insights", href: "#blog" },
];

// Fungsi pemicu smooth scroll internal
const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith("#")) {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
};

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & Brand Identity */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="flex cursor-pointer items-center space-x-2 select-none"
          >
            <Logo size={32} />
            <span className="text-sm font-bold tracking-tight sm:text-base">
              World Service
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max cursor-pointer items-center justify-center px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-purple-500 focus:text-purple-500 focus:outline-none"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (item.href.startsWith("#")) {
                      smoothScrollTo(item.href);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Call To Action (Discord) */}
        <div className="hidden items-center space-x-2 xl:flex">
          <Button
            variant="outline"
            asChild
            className="cursor-pointer border-border/60 bg-background/50 font-semibold"
          >
            <a href={Data.discord} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4 text-purple-500" />
              Join Our Discord
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col gap-0 overflow-hidden border-l border-border/40 p-0 sm:w-[360px] [&>button]:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Drawer Mobile Header */}
              <SheetHeader className="space-y-0 border-b border-border/40 p-4 pb-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-purple-500/10 p-2">
                    <Logo size={18} />
                  </div>
                  <SheetTitle className="text-base font-bold">
                    World Service
                  </SheetTitle>
                  <div className="ml-auto flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              {/* Drawer Links Area */}
              <div className="flex-1 overflow-y-auto">
                <nav className="space-y-1 p-6">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="flex cursor-pointer items-center rounded-lg px-4 py-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-accent hover:text-purple-500 active:bg-accent"
                        onClick={(e) => {
                          setIsOpen(false);
                          if (item.href.startsWith("#")) {
                            e.preventDefault();
                            setTimeout(() => smoothScrollTo(item.href), 120);
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Actions */}
              <div className="space-y-4 border-t border-border/40 bg-muted/20 p-6">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full cursor-pointer border-border/60 bg-background font-bold"
                >
                  <a
                    href={Data.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 size-4 text-purple-500" />
                    Join Our Discord
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
