import React from "react";
import { Header } from "../../components/layout/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { AboutSection } from "../../components/sections/AboutSection";
import { TechnologiesSection } from "../../components/sections/TechnologiesSection";
import { StatsSection } from "../../components/sections/StatsSection";
import { SpeakersSection } from "../../components/sections/SpeakersSection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="bg-background min-h-screen w-full">
      <div className="relative w-full">
        <Header />
        <main className="pt-[147px]">
          <HeroSection />
          <AboutSection />
          <TechnologiesSection />
          <StatsSection />
          <SpeakersSection />
          <TestimonialsSection />
          <SponsorsSection />
        </main>
      </div>
    </div>
  );
};