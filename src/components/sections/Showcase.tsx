import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

type Project = {
  id: string;
  title: string;
  number: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  type: "laptop" | "tablet";
};

const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'SPMB PORTAL BAKNUS',
    year: '2025',
    category: 'ACADEMIC SYSTEM',
    description: 'Platform penerimaan siswa baru terintegrasi. Dirancang untuk menyederhanakan alur pendaftaran dengan antarmuka yang responsif dan sistem manajemen data yang aman.',
    tech: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'Bootstrap'],
    image: '/ss1.png',
    github: 'https://github.com/alditfq/PPDB_SMK',
    live: '#',
    type: 'laptop',
  },
  {
    id: '2',
    number: '02',
    title: 'PIKETWAY DASHBOARD',
    year: '2025',
    category: 'MANAGEMENT SYSTEM',
    description: 'Sistem informasi manajemen kelas untuk memantau jadwal piket, kehadiran siswa, dan laporan harian secara real-time dengan antarmuka dark mode yang modern.',
    tech: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'Bootstrap'],
    image: '/ss3.png',
    github: 'https://github.com/alditfq/PiketWay',
    live: '#',
    type: 'tablet',
  },
  {
    id: '3',
    number: '03',
    title: 'SMART DESK HAKI',
    year: '2026',
    category: 'CONSULTATION PLATFORM',
    description: 'Layanan mandiri interaktif untuk Hak Kekayaan Intelektual (HAKI). Menghadirkan asisten chatbot cerdas untuk memandu proses pemahaman dan pendaftaran konsultasi online.',
    tech: ['Laravel', 'AI Integration', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    image: '/ss2.png',
    github: 'https://github.com/alditfq/KI-SMARTDESK',
    live: '#',
    type: 'laptop',
  }
];

export const Showcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.1, 0.1, 0.3]);

  return (
    <section ref={containerRef} className="relative bg-base py-32 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[60vw] h-[60vw] bg-white/[0.01] rounded-full blur-[100px]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-6 relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="overflow-hidden">
              <motion.h2 
                 whileInView={{ y: 0 }}
                 initial={{ y: '100%' }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                 className="text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase italic font-serif text-white/10"
              >
                 Web <br/> <span className="not-italic text-white">Showcase</span>
              </motion.h2>
           </div>
           <div className="flex flex-col items-end gap-2 text-right">
              <p className="text-sm font-mono text-white/40 tracking-widest uppercase">Interactive Experiences — 2026</p>
              <div className="w-32 h-[1px] bg-accent/30" />
           </div>
        </div>
      </div>

      {/* Sticky Editorial Heading */}
      <div className="sticky top-0 h-screen flex flex-col justify-center pointer-events-none z-0 overflow-hidden -mt-[25vh]">
        <motion.h2 
          style={{ x: headingX, opacity: headingOpacity }}
          className="font-display text-[25vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap text-white mix-blend-difference"
        >
          Featured Work
        </motion.h2>
      </div>

      {/* Projects Container */}
      <div className="container mx-auto px-6 relative z-10 -mt-[50vh]">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
};
