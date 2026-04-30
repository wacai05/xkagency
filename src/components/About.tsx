import { Target, Lightbulb, TrendingUp, Quote } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";

const items = [
  { n: "02", t: "Years Training", d: "Deep dive into web development fundamentals & modern frameworks.", icon: Lightbulb },
  { n: "05", t: "Years Freelancing", d: "Shipping production-grade sites for clients across industries.", icon: Target },
  { n: "100+", t: "Businesses Helped", d: "Results-driven mindset focused on real business growth.", icon: TrendingUp },
];

const About = () => (
  <section id="about" className="relative py-32 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Visual/Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <SpotlightCard className="p-8 md:p-12 rounded-[2.5rem]">
            <Quote className="w-12 h-12 text-primary-glow/50 mb-6" />
            <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight text-white italic">
              "Design isn't just about how it looks. It's about how it <span className="text-primary-glow">converts</span> visitors into loyal customers."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary-glow">
                xk
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-widest">xk Agency</div>
                <div className="text-xs text-muted-foreground">Founder & Lead Designer</div>
              </div>
            </div>
          </SpotlightCard>
          
          {/* Floating tag */}
          <div className="absolute -top-6 -right-6 glass-card px-6 py-3 rounded-2xl border-primary/30 rotate-6 shadow-glow-primary animate-float">
            <span className="text-xs font-bold uppercase tracking-tighter">Conversion Focused</span>
          </div>
        </motion.div>

        {/* Right Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex flex-col space-y-6"
        >
          <div className="kicker">The Story</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bridging the gap between <span className="text-gradient">Vision</span> and <span className="text-primary-glow">Reality</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate freelance developer specializing in creating high-performance digital ecosystems. 
            With over half a decade of experience, I don't just build websites; I build business engines.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Strategy First", "Pixel-Perfect", "Future-Ready", "Ultra-Fast"].map((tag) => (
              <div key={tag} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-glow-primary" />
                <span className="text-sm font-semibold text-white/80">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-32 grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-10 group h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary-glow" />
                </div>
                <span className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">0{idx + 1}</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">
                {item.n}
              </div>
              <div className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{item.t}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.d}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
