import React from 'react';
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#studio' },
    { name: 'Project', href: '#work' },
    { name: 'Stack', href: '#stack' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-ink-deep text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div>
            <span className="text-brand-cyan font-accent font-bold tracking-[0.3em] uppercase text-xs block mb-6">Navigation</span>
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-display font-bold hover:text-brand-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right max-w-xs">
            <span className="text-brand-cyan font-accent font-bold tracking-[0.3em] uppercase text-xs block mb-6">Status</span>
            <p className="text-slate-400 font-medium mb-8">
              Saat ini saya sedang aktif mencari kesempatan magang (internship) di bidang pengembangan web dan desain grafis. Terutama untuk daerah Kota Bandung, Jawa Barat.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all ml-auto"
            >
              <ArrowUp />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[clamp(4rem,20vw,24rem)] font-display font-bold leading-[0.75] tracking-tighter text-white/5 whitespace-nowrap mb-[-0.1em]"
          >
            RAHMAN
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">
            <div>© {currentYear} PORTFOLIO. ALL RIGHTS RESERVED.</div>
            <div className="mt-4 md:mt-0 flex gap-12">
              <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
