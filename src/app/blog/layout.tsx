import React from "react";
import { LandingFooter } from "../components/footer";
import { LandingNavbar } from "../components/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brackground min-h-screen">
      <LandingNavbar />
      {children}
      <LandingFooter />
    </div>
  );
}
