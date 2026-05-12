import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: 'reveal' | 'blur' | 'mask';
}

export function SplitText({ text, className, delay = 0, variant = 'reveal' }: SplitTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const childVariants = {
    reveal: {
      hidden: { y: '100%', opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1],
        },
      },
    },
    blur: {
      hidden: { filter: 'blur(10px)', opacity: 0 },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: 'easeOut',
        },
      },
    },
    mask: {
      hidden: { clipPath: 'inset(100% 0 0 0)', y: 20 },
      visible: {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-wrap overflow-visible", className)}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-[0.2em] overflow-hidden py-[0.2em] px-[0.1em] -my-[0.2em] -mx-[0.1em]">
          <motion.span
            variants={childVariants[variant]}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
