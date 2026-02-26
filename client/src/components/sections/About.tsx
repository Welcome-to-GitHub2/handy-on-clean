import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square border-8 border-white dark:border-slate-800">
              {/* friendly cleaning team member */}
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" 
                alt="Friendly cleaning professional" 
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm font-medium text-muted-foreground">Satisfaction Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">About Handy On</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Passionate about making Gauteng homes sparkle.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Handy On Cleaning Services, we believe a clean space is a happy space. We are a hands-on, reliable, and friendly team dedicated to delivering premium cleaning solutions without the premium attitude.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's your family home or your bustling office, we treat every space with the utmost care and respect, using high-quality products to ensure an impeccable finish.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                "Fully Trained Professionals",
                "Eco-Friendly Options",
                "Flexible Scheduling",
                "Transparent Pricing",
                "Locally Owned & Operated",
                "Fully Insured",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/25" asChild>
                <a href="#contact">Book Your Clean Today</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
