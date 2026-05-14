import { motion } from 'motion/react';
import { ArrowRight, Mail, Instagram, Twitter, Github } from 'lucide-react';

import Magnetic from '@/components/Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center px-8 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1]
           }}
           transition={{ duration: 8, repeat: Infinity }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full"
         />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
         <div className="overflow-hidden mb-8">
            <motion.span 
               initial={{ y: 50 }}
               whileInView={{ y: 0 }}
               viewport={{ once: true }}
               className="text-[10px] font-mono tracking-[0.6em] text-accent font-bold uppercase block"
            >
               Available for Collaboration
            </motion.span>
         </div>

         <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.8] uppercase italic font-serif mb-16"
         >
           Let's create <br/> Something <span className="not-italic font-sans text-white/20">Great</span>
         </motion.h2>

         <div className="flex justify-center">
            <Magnetic>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="group relative px-12 py-6 rounded-full bg-white text-base font-bold tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
               >
                 <span className="relative z-10 flex items-center gap-4 text-base">
                    Get in Touch <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                 </span>
               </motion.button>
            </Magnetic>
         </div>
      </div>

      <div className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
         <div className="flex gap-8">
            {[Github, Twitter, Instagram].map((Icon, i) => (
               <a key={i} href="#" className="text-white/40 hover:text-accent transition-colors">
                  <Icon size={20} />
               </a>
            ))}
         </div>
         <p className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
           Designed by Aldiyee © 2026 Personal Portfolio Aldiyee
         </p>
         <div className="flex gap-12 font-mono text-[10px] tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
         </div>
      </div>
    </section>
  );
}
