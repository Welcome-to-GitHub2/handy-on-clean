import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-32 md:pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero modern bright home interior */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Bright modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground font-medium text-sm mb-6 backdrop-blur-sm">
              ✨ Premium Cleaning in Gauteng
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
              Making Gauteng Shine, <span className="text-secondary">One Clean at a Time.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Professional residential, office & commercial cleaning services across Johannesburg, Pretoria and surrounding areas. Reliable, thorough, and tailored to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-secondary/30 transition-all hover:-translate-y-1"
                asChild
              >
                <a href="#contact">Get Your Free Quote</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg h-14 px-8 rounded-full backdrop-blur-md transition-all hover:-translate-y-1"
                asChild
              >
                <a href="tel:+27713953673" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Call Now
                </a>
              </Button>
            </div>
            
            <div className="mt-12 mb-8 flex items-center gap-4 text-slate-300 text-sm font-medium">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-500"></div>
              </div>
              <p>Trusted by 180+ happy clients in Gauteng</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[2px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
