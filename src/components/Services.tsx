import { Check, Layers, Smartphone, Zap, Sparkles, ArrowUpRight, Search, Layout, Rocket, Package } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";
import { ContactDialog } from "./ContactDialog";

const sub = [
  { icon: Smartphone, t: "Responsive Design", d: "Pixel-perfect on every device, mobile-first by default." },
  { icon: Zap, t: "Performance Optimization", d: "Fast, lean, indexable — Core Web Vitals in the green." },
  { icon: Sparkles, t: "Branding-focused Layouts", d: "Visual identity translated into every interaction." },
];

const process = [
  { icon: Search, n: "01", t: "Discover", d: "Deep dive into goals, audience, and project scope." },
  { icon: Layout, n: "02", t: "Design", d: "Crafting intuitive UI/UX and interactive prototypes." },
  { icon: Layers, n: "03", t: "Develop", d: "Building with clean, scalable, and modern code." },
  { icon: Rocket, n: "04", t: "Deliver", d: "Launching, testing, and continuous iteration." },
];

const Services = () => (
  <section id="services" className="relative py-32 overflow-hidden">
    {/* Ambient Glow */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

    <div className="relative mx-auto max-w-6xl px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <div className="kicker justify-center mb-6">Service Offering</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Everything you need <br />
          <span className="text-gradient">to dominate online</span>.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Featured Service: Custom Dev */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <SpotlightCard className="p-10 md:p-14 group h-full">
            <div className="absolute top-0 right-0 p-8">
               <Package className="w-24 h-24 text-white/[0.03] group-hover:text-primary/10 transition-colors duration-700" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary shadow-glow-primary flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <span className="px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary-glow">Flagship Offering</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Custom Full-Stack <br />
                <span className="text-primary-glow">Website Development</span>
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
                From the first wireframe to the final deployment, I handle the entire lifecycle of your project. 
                Built on React and Next.js for ultimate speed and scalability.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-auto">
                {[
                  "Conversion-Optimized Design",
                  "SEO & Core Web Vitals Ready",
                  "Custom CMS Integration",
                  "Ultra-Fast Load Times",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-glow" />
                    </div>
                    <span className="text-sm font-bold text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <ContactDialog>
                  <button className="magnetic-button px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-3 shadow-glow-primary group/btn hover:scale-105 transition-all">
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </ContactDialog>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Side Services Column */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {sub.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="p-8 group h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary-glow" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{service.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.d}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Process Grid */}
      <div className="mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="kicker mb-12"
        >
          The Methodology
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <SpotlightCard className="p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">{step.n}</div>
                  <step.icon className="w-6 h-6 text-primary-glow/50 group-hover:text-primary-glow transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-white mb-2">{step.t}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </SpotlightCard>
              
              {/* Connector for large screens */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
