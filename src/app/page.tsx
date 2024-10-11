import CtaMultiple from "@/components/cta-multiple";
import Discover from "@/components/discover";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PageMarquee from "@/components/page-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <PageMarquee />
      <Discover />
      <CtaMultiple />
      <Features />
    </>
  );
}
