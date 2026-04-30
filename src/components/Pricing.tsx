import NumberFlow from '@number-flow/react'
import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { ContactDialog } from "./ContactDialog";

export const Pricing = () => {
  const [active, setActive] = React.useState(1); // Default to Professional
  const [period, setPeriod] = React.useState(0);
  
  // Pricing Data
  const plans = [
    {
      title: "Essential",
      monthly: 999,
      yearly: 799,
      desc: "High-performance landing pages that convert.",
      icon: Zap,
      features: ["Single Page Build", "Core Web Vitals Optimized", "SEO Fundamentals", "Standard Support"]
    },
    {
      title: "Professional",
      monthly: 2499,
      yearly: 1999,
      desc: "Full-scale business engines for scaling brands.",
      icon: Sparkles,
      features: ["Full Multi-Page Site", "Custom CMS Integration", "Advanced SEO Strategy", "Priority Support"],
      popular: true
    },
    {
      title: "Enterprise",
      monthly: 4999,
      yearly: 3999,
      desc: "Custom ecosystems for global dominance.",
      icon: ShieldCheck,
      features: ["Custom Web Applications", "API & Systems Integration", "Dedicated 24/7 Support", "Growth Consulting"]
    }
  ];

  const currentPrices = plans.map(p => period === 0 ? p.monthly : p.yearly);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="kicker justify-center mb-6">Strategic Investment</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Transparent Pricing <br />
            <span className="text-gradient">for serious results</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that aligns with your growth stage. No hidden fees, just high-performance results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Interaction Control Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col gap-8">
                
                {/* Period Toggle */}
                <div className="rounded-2xl relative w-full bg-white/5 border border-white/10 p-1.5 flex items-center">
                  <button
                    className={`font-bold rounded-xl w-full py-3 text-sm z-20 transition-colors ${period === 0 ? "text-white" : "text-white/40"}`}
                    onClick={() => setPeriod(0)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`font-bold rounded-xl w-full py-3 text-sm z-20 transition-colors ${period === 1 ? "text-white" : "text-white/40"}`}
                    onClick={() => setPeriod(1)}
                  >
                    Yearly <span className="text-[10px] text-primary-glow ml-1">-20%</span>
                  </button>
                  <div
                    className="p-1.5 flex items-center justify-center absolute inset-0 w-1/2 z-10"
                    style={{
                      transform: `translateX(${period * 100}%)`,
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="bg-primary shadow-glow-primary rounded-xl w-full h-full"></div>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="flex flex-col gap-4">
                  {plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className={`relative w-full flex justify-between items-center cursor-pointer p-6 rounded-2xl border transition-all duration-500 group overflow-hidden ${
                        active === idx 
                        ? "border-primary bg-primary/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] scale-[1.02]" 
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                      onClick={() => setActive(idx)}
                    >
                      {active === idx && (
                        <motion.div 
                          layoutId="active-glow"
                          className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none"
                        />
                      )}
                      
                      <div className="relative z-10 flex flex-col items-start gap-1">
                        <p className={`font-bold text-xl transition-colors ${active === idx ? "text-white" : "text-white/60"}`}>
                          {plan.title}
                          {plan.popular && (
                            <span className="ml-3 py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-glow text-[10px] font-black uppercase tracking-widest">
                              Popular
                            </span>
                          )}
                        </p>
                        <p className="text-muted-foreground text-xs flex items-center gap-1">
                          <span className="text-white font-bold flex items-center">
                            $<NumberFlow
                              className="text-white font-bold ml-1"
                              value={period === 0 ? plan.monthly : plan.yearly}
                            />
                          </span>
                          /month
                        </p>
                      </div>
                      
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        active === idx ? "border-primary" : "border-white/10"
                      }`}>
                        <div className={`w-3 h-3 rounded-full bg-primary transition-all duration-500 shadow-glow-primary ${
                          active === idx ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>

                <ContactDialog>
                  <button className="magnetic-button rounded-2xl bg-primary text-white font-bold py-5 text-center shadow-glow-primary hover:scale-[1.02] transition-all active:scale-95">
                    Invest in Growth
                  </button>
                </ContactDialog>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Details Column */}
          <motion.div 
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col gap-8 h-full"
          >
            <div className="glass-card p-10 md:p-14 h-full border-primary/20">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  {React.createElement(plans[active].icon, { className: "w-10 h-10 text-primary-glow" })}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{plans[active].title} Tier</h3>
                  <p className="text-muted-foreground">{plans[active].desc}</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/5 mb-10" />

              <div className="grid md:grid-cols-2 gap-8">
                {plans[active].features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                      <Check className="w-5 h-5 text-primary-glow" />
                    </div>
                    <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-primary-glow mb-2">Ready to start?</div>
                    <div className="text-xl font-bold text-white">Let's discuss the roadmap.</div>
                  </div>
                  <div className="text-3xl font-black text-white">
                    $<NumberFlow value={currentPrices[active]} />
                    <span className="text-sm font-medium text-muted-foreground ml-2">/ month</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
