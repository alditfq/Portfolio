import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Bersedia untuk magang?',
    answer: 'Ya, saya saat ini terbuka untuk kesempatan magang di mana saya bisa berkontribusi dan belajar.',
  },
  {
    question: 'Menerima project freelance?',
    answer: 'Tergantung projectnya. Silakan hubungi saya dan kita bisa diskusikan kebutuhan Anda.',
  },
  {
    question: 'Gaya kerja yang disukai?',
    answer: 'Remote / Hybrid. Saya fleksibel dan bisa beradaptasi dengan berbagai lingkungan kerja.',
  },
  {
    question: 'Teknologi apa yang dikuasai?',
    answer: 'Saya bekerja dengan teknologi web modern termasuk React, TypeScript, Tailwind CSS, Node.js, Laravel dan berbagai tools lain.',
  },
  {
    question: 'Berapa lama waktu pengerjaan project?',
    answer: 'Tergantung skala dan kompleksitas. Project kecil bisa 1-2 minggu, sedangkan yang lebih besar bisa beberapa bulan.',
  },
  {
    question: 'Bagaimana proses desain yang dilakukan?',
    answer: 'Saya mulai dengan memahami kebutuhan Anda, membuat wireframe dan prototype, iterasi berdasarkan feedback, lalu develop produk final.',
  },
  {
    question: 'Bisa bekerja dengan tim yang sudah ada?',
    answer: 'Tentu! Saya senang berkolaborasi dengan tim dan bisa berintegrasi dengan workflow Anda.',
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group hover:text-accent transition-colors"
      >
        <span className="text-lg md:text-xl font-light text-white/90 group-hover:text-accent transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="pb-6 pr-12">
          <p className="text-base text-white/60 font-light leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative min-h-screen py-40 px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Header */}
        <div className="md:col-span-4 self-start md:sticky md:top-40">
          <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] uppercase italic font-serif">
            Common <br /> <span className="text-white opacity-50 not-italic font-sans">Questions</span>
          </h2>
          
          <div className="mt-8 flex flex-col gap-4">
            <div className="h-[1px] w-12 bg-accent/50" />
            <p className="text-sm font-mono text-white/40 tracking-wider">
              Semua yang perlu Anda tahu
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} item={faq} index={index} />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5"
          >
            <p className="text-lg text-white/80 font-light mb-4">
              Masih ada pertanyaan?
            </p>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Jangan ragu untuk menghubungi saya melalui form kontak di bawah. Biasanya saya merespon dalam 24 jam.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-accent to-transparent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                Mari Ngobrol
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
