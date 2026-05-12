import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter, Sparkles, Instagram } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-brand-cyan text-brand-cyan px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                Get in Touch
              </span>
              <h2 className="text-5xl md:text-8xl font-editorial tracking-tighter leading-none text-brand-navy">
                LET'S START <br /> A <span className="italic text-brand-cyan">CONVERSATION</span>
              </h2>
              <p className="text-xl text-brand-navy/60 max-w-md leading-relaxed">
                Have a project in mind or just want to chat about creative development? My inbox is always open for bold ideas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 rounded-2xl bg-brand-navy text-white group-hover:bg-brand-cyan transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-navy/40 font-bold">Email Me</p>
                  <p className="text-xl font-display font-medium text-brand-navy">lihataldi@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/aldyrahman071?igsh=bDl0YW5pZnQ0M3ox" className="p-4 rounded-2xl border border-brand-navy/10 hover:bg-brand-navy hover:text-white transition-all text-brand-navy">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/alditfq" className="p-4 rounded-2xl border border-brand-navy/10 hover:bg-brand-navy hover:text-white transition-all text-brand-navy">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://x.com/Bukanaldi071" className="p-4 rounded-2xl border border-brand-navy/10 hover:bg-brand-navy hover:text-white transition-all text-brand-navy">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 md:p-12 rounded-[2.5rem] space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-navy/40 ml-4">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-navy/5 focus:border-brand-cyan outline-none transition-all placeholder:text-brand-navy/20 text-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-navy/40 ml-4">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-navy/5 focus:border-brand-cyan outline-none transition-all placeholder:text-brand-navy/20 text-brand-navy"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-navy/40 ml-4">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-navy/5 focus:border-brand-cyan outline-none transition-all placeholder:text-brand-navy/20 text-brand-navy"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-navy/40 ml-4">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-navy/5 focus:border-brand-cyan outline-none transition-all placeholder:text-brand-navy/20 resize-none text-brand-navy"
                  />
                </div>
              </div>

              <button className="w-full py-5 rounded-2xl bg-brand-navy hover:bg-brand-cyan text-white font-display font-bold text-lg group transition-all flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-3 text-brand-navy/30 text-xs">
                <Sparkles className="w-3 h-3" />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 blur-[120px] -z-10" />
    </section>
  );
}
