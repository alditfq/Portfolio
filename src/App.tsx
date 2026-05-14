/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLenis } from '@/hooks/useLenis';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';             // From Port 4 (cinematic crosshair)
import About from '@/components/About';
import Skills from '@/components/sections/Skills';             // Skills section
import Projects from '@/components/Projects';
import Stack from '@/components/sections/Stack';               // From Port 3
import Timeline from '@/components/sections/Timeline';         // From Port 3 (Journey)
import FAQ from '@/components/sections/FAQ';                   // FAQ section
import ContactForm from '@/components/sections/ContactForm';   // From Port 1 (Get in Touch)
import Footer from '@/components/sections/Footer';             // From Port 3
import { Showcase } from '@/components/sections/Showcase';     // From Projek1
import { CursorDitherTrail } from '@/components/ui/cursor-dither-trail';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function App() {
  useLenis();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-base selection:bg-accent selection:text-base">
      <div className="noise-overlay" />
      <Preloader />

      {/* Global Cursor Dither Trail Effect */}
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        <CursorDitherTrail
          className="w-full h-full"
          trailColor="#3b82f6"
          dotSize={3}
          fadeDuration={600}
          maxTrailLength={100}
        />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Navbar />

          {/* Hero — Port 4 (cinematic portrait + crosshair) */}
          <Hero />

          {/* About — Port 2 original */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects — Port 2 original */}
          <Projects />

          {/* Showcase — Projek1 */}
          <Showcase />

          {/* Stack — Port 3 (marquee tech ticker) */}
          <Stack />

          {/* Journey/Timeline — Port 3 */}
          <Timeline />

          {/* FAQ Section */}
          <FAQ />

          {/* Get in Touch — Port 1 (full contact form) */}
          <ContactForm />

          {/* Footer — Port 3 */}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
