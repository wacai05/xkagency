import profile from "@/assets/profile.png";
import { ArrowUpRight, ArrowRight, Sparkles, Code2, Palette, Rocket, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import TextReveal from "./TextReveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";
import { ContactDialog } from "./ContactDialog";

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden mesh-gradient flex items-center pt-20">
    {/* Ambient Effects */}
    <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary-glow/10 blur-[100px] animate-pulse" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-glow">Available for New Projects</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter text-white">
              <span className="relative inline-block">
                <TextReveal 
                  text="Digital" 
                  className="text-primary-glow shadow-glow-text relative z-10"
                />
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -rotate-1 -z-10 blur-sm rounded-full" 
                />
              </span>
              {" "}
              <TextReveal 
                text="Architect" 
                delay={0.3}
                className="inline-block"
              />
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter">
              <TextReveal 
                text="& Brand" 
                delay={0.6}
                className="inline-block text-white"
              />
              {" "}
              <span className="relative inline-block">
                <TextReveal 
                  text="Strategist" 
                  delay={0.9}
                  className="text-shimmer relative z-10"
                />
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/10 blur-2xl rounded-full -z-10"
                />
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Freelance UI/UX Specialist with <span className="text-white font-semibold">5+ years</span> of crafting 
            high-converting, scalable digital identities that bridge the gap between design and development.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <ContactDialog>
              <button className="magnetic-button group relative overflow-hidden rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-glow-primary transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Let's Build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </ContactDialog>
            
            <a 
              href="#work"
              className="group flex items-center gap-2 px-8 py-4 font-bold text-white/60 transition-all hover:text-white"
            >
              View Work <div className="h-1.5 w-1.5 rounded-full bg-primary transition-all group-hover:scale-[2] group-hover:shadow-glow-primary" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-10">
            <div className="flex flex-col gap-1">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-primary flex items-center justify-center text-[10px] font-bold">100+</div>
              </div>
              <span className="text-xs text-muted-foreground mt-2">Trusted by global businesses</span>
            </div>
            
            <div className="h-10 w-px bg-white/5 hidden sm:block" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">5.0 Star Rating on Clutch</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-[500px] mx-auto">
            
            {/* Background Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[10%] rounded-full border border-dashed border-primary/10 animate-[spin_30s_linear_reverse_infinite]" />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -left-4 z-20"
            >
              <SpotlightCard className="p-4 shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">UI/UX Design</div>
                    <div className="text-[10px] text-muted-foreground">Modern & Clean</div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -right-4 z-20"
            >
              <SpotlightCard className="p-4 shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Web Dev</div>
                    <div className="text-[10px] text-muted-foreground">React & Next.js</div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Main Portrait Frame */}
            <div className="absolute inset-[15%] rounded-[3rem] overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl group transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src={profile} 
                alt="xkagency" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <SpotlightCard className="p-3 rounded-2xl flex items-center justify-between bg-black/40">
                  <div>
                    <div className="text-sm font-bold">xk Agency</div>
                    <div className="text-[10px] text-muted-foreground">Founder & Lead Dev</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-primary-glow" />
                </SpotlightCard>
              </div>
            </div>

            {/* Interactive Glow */}
            <div className="absolute inset-[20%] bg-primary blur-[80px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
