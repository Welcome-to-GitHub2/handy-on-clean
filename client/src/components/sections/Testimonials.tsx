import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "Handy On did an amazing deep clean before we moved into our new house in Pretoria. Every surface was spotless. Highly recommend their friendly team!",
    name: "Sarah M.",
    area: "Pretoria East"
  },
  {
    text: "Reliable and thorough. They clean our offices weekly and the difference is night and day. The staff is always smiling and professional.",
    name: "David K.",
    area: "Sandton, JHB"
  },
  {
    text: "I was struggling to keep up with chores. The bi-weekly plan from Handy On has been a lifesaver. My apartment always smells so fresh!",
    name: "Lerato T.",
    area: "Midrand"
  },
  {
    text: "Incredible attention to detail! They managed to get stains out of the carpets that I thought were permanent. Premium service indeed.",
    name: "Michael B.",
    area: "Centurion"
  },
  {
    text: "Booking was so easy and the ladies who came were lovely. They worked quickly but didn't cut any corners. Best cleaning service in Gauteng.",
    name: "Jessica P.",
    area: "Fourways"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(scrollNext, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Loved by homes across Gauteng.
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Don't just take our word for it. Here's what our happy clients have to say about our cleaning services.
            </p>
            <div className="flex gap-2 text-secondary">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="font-bold text-xl">5.0 Average Rating</p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex gap-6 py-4">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_80%] min-w-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-white text-slate-800 p-8 md:p-10 rounded-3xl shadow-xl h-full flex flex-col justify-between"
                    >
                      <div>
                        <Quote className="w-12 h-12 text-secondary/30 mb-6" />
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">"{t.text}"</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-lg">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-lg">{t.name}</p>
                          <p className="text-slate-500 text-sm">{t.area}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
