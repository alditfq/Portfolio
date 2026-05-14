import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useRef } from "react";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", category: "Front End" },
  { name: "Next.js", category: "Front End" },
  { name: "Tailwind Css", category: "Front End" },
  { name: "Framer Motion", category: "Front End" },
  { name: "PHP", category: "Back End" },
  { name: "Laravel", category: "Back End" },
  { name: "MySQL", category: "Back End" },
  { name: "Firebase", category: "Back End" },
  { name: "UI Design", category: "Visual Work" },
  { name: "Video Editing", category: "Visual Work" },
  { name: "Photo Editing", category: "Visual Work" },
  { name: "Typography", category: "Visual Work" },
  { name: "Editing", category: "Technical" },
  { name: "Web Development", category: "Technical" },
  { name: "UI Design", category: "Technical" },
  { name: "Microsoft Office", category: "Technical" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Teamwork", category: "Soft Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Fast Learning", category: "Soft Skills" },
];

const categories = [...new Set(skills.map((s) => s.category))];

function SkillPill({ name }: { name: string; key?: React.Key }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      className="relative group cursor-none"
    >
      <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      <div className="relative px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-accent/40 group-hover:bg-white/10">
        <span className="text-sm font-display tracking-wider text-white/70 group-hover:text-white transition-colors">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-40 px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Title & Info */}
        <div className="md:col-span-4 self-start md:sticky md:top-40">
          <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">
            02 / Skills
          </span>
          <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] uppercase italic font-serif">
            Skills <br />
            Behind <span className="text-white opacity-50 not-italic font-sans">the Screen</span>
          </h2>
          <div className="mt-8">
            <p className="text-white/50 text-lg font-sans leading-relaxed">
              Menggabungkan presisi teknis dengan visi kreatif untuk membangun pengalaman digital yang immersive.
            </p>
          </div>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="md:col-span-8">
          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <div key={cat} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xs font-mono text-accent/60 uppercase tracking-[0.2em]">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-sm font-display uppercase tracking-widest text-white/30">
                    {cat}
                  </span>
                </motion.div>
                
                <div className="flex flex-wrap gap-4">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill) => (
                      <SkillPill key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
