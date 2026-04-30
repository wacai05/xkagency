import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const TextReveal = ({
  text,
  className,
  delay = 0,
  staggerDelay = 0.05,
}: TextRevealProps) => {
  // Split text into characters, keeping spaces as &nbsp;
  const letters = text.split("");

  // Container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay * i 
      },
    }),
  };

  // Individual letter variants
  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={cn("flex flex-wrap cursor-default", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className={cn(
            "inline-block",
            letter === " " ? "mr-[0.25em]" : "",
            className?.includes("text-shimmer") && "animate-pulse"
          )}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextReveal;
