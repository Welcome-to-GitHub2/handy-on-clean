import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Handy On</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional, reliable, and friendly cleaning services making Gauteng shine, one clean at a time.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#plans" className="text-slate-400 hover:text-secondary transition-colors">Cleaning Plans</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-secondary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-slate-400">+27 71 395 3673</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-slate-400">Eleezy90@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-slate-400">Johannesburg, Pretoria<br/>& Surrounding Areas</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <MapPin className="w-8 h-8 text-secondary mb-2" />
              <p className="text-sm font-medium text-white">Proudly Serving<br/>Gauteng</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Handy On Cleaning Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
