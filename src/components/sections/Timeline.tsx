import { motion } from "motion/react";

const experience = [
  {
    year: "2024",
    role: "Web Developer Junior",
    company: "SMK BAKTI NUSANTARA 666",
    desc: "Mempelajari pengembangan web, database, dan dasar pemrograman dengan fokus pada pembuatan aplikasi yang modern dan fungsional."
  },
  {
    year: "2025",
    role: "Full-Stack Developer",
    company: "Uji Kompetensi Keahlian",
    desc: "Mengembangkan dan mempresentasikan project berbasis web sebagai bagian dari uji kompetensi keahlian dengan menerapkan frontend, backend, dan database secara terintegrasi."
  },
  {
    year: "2026",
    role: "Frontend Developer",
    company: "(PKL) Praktik Kerja Lapangan",
    desc: "Mengikuti praktik kerja lapangan untuk memperoleh pengalaman kerja secara langsung dalam pengembangan aplikasi dan proses kerja di industri teknologi."
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-cyan font-accent font-bold tracking-[0.3em] uppercase text-xs block mb-4">Journey</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter mb-20 uppercase">
            EDUCATION<br />TIMELINE<span className="text-brand-cyan">.</span>
          </h2>

          <div className="space-y-0">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-8 items-start hover:pl-6 transition-all duration-500"
              >
                <div className="w-48 text-brand-cyan font-display font-bold text-xl">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-display font-bold mb-2 uppercase group-hover:text-brand-cyan transition-colors">
                    {item.role} @ {item.company}
                  </h3>
                  <p className="text-white/50 text-lg font-medium max-w-xl">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="font-bold text-xs">ARC</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
