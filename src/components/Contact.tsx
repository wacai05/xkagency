import { useState, useEffect } from "react";
import { Mail, Github, MapPin, Clock, ArrowRight, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Morocco is UTC+1
      const moroccoTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(moroccoTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40 -z-10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <SpotlightCard className="p-8 md:p-20 rounded-[3rem] shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Left side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="kicker mb-8">Exclusive Collaboration</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Building the <br />
                <span className="text-gradient">Future</span> of your presence.
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
                Beyond code and design lies a strategic partnership dedicated to excellence. 
                At <span className="text-white font-bold">xkagency</span>, we architect high-impact digital experiences. 
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Direct Line", value: "hello@xkagency.com", href: "mailto:hello@xkagency.com" },
                  { icon: Github, label: "Source", value: "github.com/xkagency", href: "https://github.com/xkagency" },
                ].map((item, idx) => (
                  <motion.a 
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center gap-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-glow-primary group-hover:rotate-6 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-lg font-semibold text-white">{item.value}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-primary-glow group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Kenitra, MA
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  <Clock className="w-4 h-4 text-primary" />
                  {time} <span className="text-muted-foreground ml-1">Local Time</span>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-12 flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ContactForm />
            </motion.div>

          </div>
        </SpotlightCard>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
               <div className="text-xl font-bold tracking-tighter text-white">xkagency</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                 © {new Date().getFullYear()} ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.
               </div>
            </div>

            <button 
              onClick={scrollToTop}
              className="w-16 h-16 rounded-full border border-white/10 flex flex-col items-center justify-center gap-1 group hover:border-primary/50 hover:bg-primary/5 transition-all duration-500"
            >
              <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-1 transition-transform" />
              <span className="text-[8px] font-black uppercase text-muted-foreground group-hover:text-primary-glow">Top</span>
            </button>

            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow-primary" />
                <span>Kenitra, Morocco</span>
              </div>
              <span className="text-white/10">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
