import { motion } from 'motion/react';

const technicalSkills = [
  'Editing',
  'Web Development',
  'UI Design',
  'Microsoft Office',
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Fast Learning',
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-40 px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Header */}
        <div className="md:col-span-4 self-start md:sticky md:top-40">
          <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">
            02 / Skills
          </span>
          <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] uppercase italic font-serif">
            What I <br /> <span className="text-white opacity-50 not-italic font-sans">Bring</span>
          </h2>
        </div>

        {/* Skills Content */}
        <div className="md:col-span-8 flex flex-col gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent/50" />
              <h3 className="text-2xl font-bold tracking-tight uppercase font-serif italic text-accent">
                Technical
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-6 border border-white/10 rounded-lg backdrop-blur-sm hover:border-accent transition-all duration-300 hover:bg-accent/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
                      <span className="text-lg font-light text-white/80 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-blue-500/50" />
              <h3 className="text-2xl font-bold tracking-tight uppercase font-serif italic text-blue-500">
                Soft Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-6 border border-white/10 rounded-lg backdrop-blur-sm hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-lg font-light text-white/80 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-4 pt-8"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent via-blue-500 to-transparent" />
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30">
              Always Learning & Growing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
