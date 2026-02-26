import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "One-Time Deep Clean",
    desc: "Perfect for spring cleaning or post-event recovery.",
    features: ["Intensive top-to-bottom clean", "Inside cabinets & appliances", "Baseboards & blinds", "Hard-to-reach areas"],
    highlight: false,
  },
  {
    name: "Weekly / Bi-Weekly",
    desc: "Consistent care to keep your home flawlessly maintained.",
    features: ["Dusting & wiping surfaces", "Vacuuming & mopping", "Kitchen & bathroom sanitization", "Trash removal & tidying"],
    highlight: true,
  },
  {
    name: "Monthly Refresh",
    desc: "A thorough touch-up to reset your space every month.",
    features: ["Detailed dusting", "Full floor care", "Fixture polishing", "General organization"],
    highlight: false,
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Flexible Options</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">Cleaning Frequency Plans</h2>
          <p className="text-muted-foreground text-lg">Choose a schedule that works perfectly for your lifestyle and budget.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2
                ${plan.highlight ? 'border-2 border-primary shadow-xl scale-100 lg:scale-105 z-10' : 'border border-border shadow-md'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-8 min-h-[48px]">{plan.desc}</p>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-secondary'}`} />
                    <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full rounded-xl py-6 text-lg font-semibold ${
                  plan.highlight 
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                }`}
                asChild
              >
                <a href="#contact">Select Plan</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
