import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="font-display font-bold text-[0.7rem] tracking-[0.26em] uppercase text-nb3 flex items-center gap-3 mb-4">
    <span className="w-6 h-0.5 gradient-brand flex-shrink-0" />
    {children}
  </div>
);

export const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display font-black text-[clamp(2.4rem,4.2vw,4.2rem)] leading-[0.92] uppercase text-primary-foreground mb-5">
    {children}
  </h2>
);

export const SectionParagraph = ({ children }: { children: ReactNode }) => (
  <p className="text-base leading-relaxed text-muted-foreground max-w-[540px]">
    {children}
  </p>
);
