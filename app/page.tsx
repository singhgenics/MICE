import { Hero } from "@/components/home/hero";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { Mandate } from "@/components/home/mandate";
import { ProgramsSplit } from "@/components/home/programs-split";
import { DestinationsPreview } from "@/components/home/destinations-preview";
import { CaseStudiesStack } from "@/components/home/case-studies-stack";
import { CtaBand } from "@/components/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Mandate />
      <ProgramsSplit />
      <DestinationsPreview />
      <CaseStudiesStack />
      <CtaBand />
    </>
  );
}
