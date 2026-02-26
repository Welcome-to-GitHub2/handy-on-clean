import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Truck, Droplets, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Keep your home spotless and healthy with our thorough regular cleaning services tailored to your lifestyle.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Building2,
    title: "Office & Commercial",
    desc: "Create a productive, welcoming environment for your employees and clients with our commercial cleaning.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    icon: Sparkles,
    title: "Deep Cleans",
    desc: "A meticulous top-to-bottom clean tackling grime and dust in hard-to-reach places.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out",
    desc: "Ensure you leave your old place pristine or start fresh in a perfectly clean new home.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Droplets,
    title: "Specialty Cleaning",
    desc: "Expert care for carpets, upholstery, and streak-free interior/exterior windows.",
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  },
  {
    icon: Clock,
    title: "One-Time Refresh",
    desc: "Perfect for before or after events, holidays, or whenever you need an extra helping hand.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mt-2 mb-4"
          >
            Our Cleaning Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            From regular touch-ups to intensive deep cleans, we have the right service to make your space shine.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="p-8 h-full rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group bg-card">
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
