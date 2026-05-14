import { motion } from 'motion/react';
import { useState } from 'react';

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

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
      >
        <div className="flex items-start gap-8 py-8">
          {/* Number */}
          <span className="text-sm font-mono text-white/30 mt-1 flex-shrink-0">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          
          {/* Question */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-light italic text-accent leading-tight flex-1 group-hover:text-accent/80 transition-colors">
            {item.question}
          </h3>

          {/* Toggle Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-2"
          >
            <div className="w-6 h-6 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40" />
              <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/40" />
            </div>
          </motion.div>
        </div>
      </button>
      
      {/* Answer */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="pl-16 pr-12 pb-12">
          <div className="border-l-2 border-white/20 pl-8">
            <p className="text-lg text-white/60 font-light leading-relaxed italic">
              {item.answer}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-[1px] bg-white/10" />
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Header */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-40 self-start">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-accent/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
              FAQ
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-light leading-tight tracking-tight"
          >
            Common <span className="italic">Questions</span>
          </motion.h2>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="lg:col-span-8 space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
