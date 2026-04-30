import { Palette, Code2, Gauge, Sparkles, Figma, Layers, Boxes, Globe, Wand2 } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";

const skills = [
  { icon: Palette, name: "UI/UX Design", level: 95, desc: "Wireframes, design systems, user-first thinking." },
  { icon: Code2, name: "Web Development", level: 92, desc: "From scratch with React, Next.js, modern stacks." },
  { icon: Gauge, name: "Performance", level: 90, desc: "Lighthouse 95+, Core Web Vitals, scale-ready." },
  { icon: Sparkles, name: "Brand-led Layouts", level: 88, desc: "Visual identity translated into pixel-perfect UI." },
];

const stack = [
  { icon: Figma, label: "Figma" },
  { icon: Code2, label: "React" },
  { icon: Layers, label: "Next.js" },
  { icon: Boxes, label: "Tailwind" },
  { icon: Globe, label: "Vercel" },
  { icon: Sparkles, label: "Framer" },
  { icon: Wand2, label: "shadcn/ui" },
];

const Skills = () => (
  <section id="skills" className="relative py-32">
    <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] pointer-events-none" />

    <div className="relative mx-auto max-w-6xl px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <div className="kicker">Expertise</div>
        <h2 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          A toolbox built for <br />
          <span className="text-gradient">high-performance</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          I've spent years refining a focused tech stack that balances developer velocity with absolute performance. 
          Picked because it scales without compromise.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-8 group h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary shadow-glow-primary flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white group-hover:text-primary-glow transition-colors">{skill.level}%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mastery</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-muted-foreground mb-8">{skill.desc}</p>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <span>Core Skillset</span>
                  <span>Tier 1</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary-glow shadow-glow-primary transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Marquee */}
      <div className="mt-20 glass-card p-1">
        <div className="bg-black/20 rounded-[calc(var(--radius)-4px)] px-8 py-6 flex items-center gap-12 overflow-hidden relative">
          <div className="shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground border-r border-white/10 pr-12 hidden md:block">
            The Stack
          </div>
          
          <div className="flex w-full overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
                <div key={i} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group/item">
                  <item.icon className="w-5 h-5 text-primary-glow transition-transform group-hover/item:scale-110" />
                  <span className="text-sm font-bold text-white">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Fades */}
          <div className="absolute inset-y-0 left-24 w-32 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
