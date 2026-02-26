import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Plans } from "@/components/sections/Plans";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <About />
      <Gallery />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
