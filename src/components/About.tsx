import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <section id="studio" className="relative min-h-screen py-40 px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 self-start md:sticky md:top-40">
           <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">01 / About Me</span>
           <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] uppercase italic font-serif">About <br/> The <span className="text-white opacity-50 not-italic font-sans">Creator</span></h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-24">
           <div className="flex flex-col gap-8">
              <p className="text-3xl md:text-5xl font-light tracking-tight text-white/90 leading-[1.1]">
                Motion memberi <span className="text-accent underline decoration-[1px] underline-offset-8 italic font-serif">karakter</span> pada sebuah interface.
Saya membangun pengalaman digital yang menggabungkan visual, interaksi, dan teknologi secara seimbang.
              </p>
              <div className="flex gap-4 items-center">
                 <div className="h-[1px] w-12 bg-accent/50" />
                 <p className="text-sm font-mono text-white/40 tracking-wider">Building digital experiences</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative aspect-[4/5] overflow-hidden group">
                 <img 
                    src="/gw_juga.png" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-50"
                    alt="Process"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col justify-between py-8">
                 <p className="text-lg text-white/60 font-light leading-relaxed">
                   Untuk Saya, website bukan cuma tempat nampilin informasi, tapi juga media buat nyiptain suasana dan pengalaman.
Karena itu saya suka eksplor motion, typography, dan interaksi modern buat bikin tampilan yang terasa lebih personal dan immersive.
                 </p>
                 <div className="flex flex-wrap gap-4 mt-8">
                    {['Full Stack Developer', 'UI/UX Design', 'Graphic Design', 'Digital Art'].map(skill => (
                      <span key={skill} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-white/40 hover:border-accent hover:text-accent transition-colors">
                        {skill}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
