import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#studio' },
  { name: 'Project', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Education', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className={cn(
          "flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500",
          isScrolled ? "glass-dark shadow-2xl py-2" : "bg-transparent backdrop-blur-sm px-4"
        )}
      >
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-xl font-mono font-bold tracking-tighter text-white">
          Aldiyee<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10">
          <a href="https://github.com/alditfq" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 text-white/60 hover:text-accent rounded-full transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:lihataldi@gmail.com" className="p-2 bg-white text-black rounded-full hover:bg-accent transition-all hover:scale-110 active:scale-95 shadow-lg">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-white/10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute top-20 left-4 right-4 glass-dark border border-white/10 rounded-3xl p-8 md:hidden flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-mono tracking-[0.2em] uppercase text-white hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 mt-4">
              <a href="#" className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:lihataldi@gmail.com" className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
