import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

interface ProjectCardProps {
  project: {
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
  index: number;
  key?: string;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-32 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Editorial Watermark */}
      <div 
        className={`absolute top-12 ${isEven ? 'right-12' : 'left-12'} text-[10rem] font-display font-black text-white/5 leading-none select-none pointer-events-none hidden lg:block`}
      >
        {project.number}
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10`}>
        {/* Device Mockup Section */}
        <div className={`lg:col-span-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <DeviceMockup image={project.image} type={project.type} />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className={`lg:col-span-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`flex flex-col ${isEven ? 'items-start' : 'items-end md:text-right'}`}
          >
            <div className={`flex items-center gap-4 mb-8 ${!isEven ? '' : 'flex-row-reverse'}`}>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/30">{project.year}</span>
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/30">{project.category}</span>
            </div>

            <h3 className="text-4xl md:text-6xl xl:text-7xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              {project.title}
            </h3>

            <p className="text-base md:text-lg text-white/50 mb-10 leading-relaxed font-light">
              {project.description}
            </p>

            <div className={`flex flex-wrap gap-2 mb-12 ${isEven ? 'justify-start' : 'justify-end'}`}>
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] tracking-widest text-white/70 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className={`flex items-center gap-4 ${!isEven ? '' : 'flex-row-reverse'}`}>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="group relative flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500"
              >
                <Github size={22} strokeWidth={1.5} />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] tracking-widest whitespace-nowrap">CODE</span>
              </motion.a>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Atmospheric Vertical Text */}
      <div 
        className={`absolute bottom-24 ${isEven ? 'left-6' : 'right-6'} writing-mode-vertical uppercase tracking-[1em] text-[10px] text-white/20 hidden md:block`}
        style={{ writingMode: 'vertical-rl' }}
      >
        {project.category} — {project.year}
      </div>
    </section>
  );
};
