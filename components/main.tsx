import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
import { ContactSection } from "@/components/contactSection/contactSection";

export function Main() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
