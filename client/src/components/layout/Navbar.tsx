import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Plans", href: "#plans" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-tight ${isScrolled ? 'text-foreground' : 'text-foreground lg:text-white'}`}>
                Handy On
              </span>
              <span className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? 'text-primary' : 'text-primary lg:text-white/80'}`}>
                Cleaning Services
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  isScrolled ? "text-muted-foreground" : "text-foreground lg:text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-lg shadow-secondary/25"
              asChild
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-foreground sm:text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-border mt-3"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white w-full mt-4"
                size="lg"
                asChild
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Your Free Quote</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
