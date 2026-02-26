import { motion } from "framer-motion";

const images = [
  // clean bright kitchen
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
  // clean pristine bathroom
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  // clean living room
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
  // modern clean office desk
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  // close up of cleaning surface
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  // clean bedroom
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">See the Transformation</h2>
          <p className="text-muted-foreground text-lg">Swipe through to see the standard of cleanliness we bring to every job.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden shadow-md group relative ${
                idx === 0 || idx === 3 ? "col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img 
                src={src} 
                alt={`Cleaning gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
