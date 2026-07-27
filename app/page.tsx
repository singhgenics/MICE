import { Hero } from "@/components/home/hero";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { ServicesBento } from "@/components/home/services-bento";
import { DestinationsPreview } from "@/components/home/destinations-preview";
import { CaseStudiesStack } from "@/components/home/case-studies-stack";
import { CtaBand } from "@/components/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesBento />
      <DestinationsPreview />
      <CaseStudiesStack />
      <CtaBand />
    </>
  );
}
