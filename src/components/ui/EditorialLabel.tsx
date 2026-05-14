import { motion } from "motion/react";
import React from "react";

interface EditorialLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function EditorialLabel({ children, className = "" }: EditorialLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="w-8 h-[1px] bg-accent/30" />
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
        {children}
      </span>
    </motion.div>
  );
}
