import { MapPin } from "lucide-react";

export function Locations() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-border shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Proudly Serving Gauteng</h3>
              <p className="text-muted-foreground text-lg">
                We operate across Johannesburg, Pretoria, Centurion, Midrand, and surrounding areas.
              </p>
              <p className="text-sm font-semibold text-primary mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Contact us to confirm your specific area!
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {['Johannesburg', 'Pretoria', 'Sandton', 'Centurion', 'Midrand', 'Fourways'].map((area) => (
              <span key={area} className="px-4 py-2 bg-white dark:bg-slate-800 border border-border rounded-full text-sm font-medium shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
