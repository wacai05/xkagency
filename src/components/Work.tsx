import { ArrowUpRight, MapPin, ExternalLink, Github } from "lucide-react";
import office from "@/assets/project-office.jpg";
import { SpotlightCard } from "./ui/SpotlightCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Office Space Rental Platform",
    location: "Kenitra, Morocco",
    year: "2025",
    desc: "A comprehensive ecosystem for managing flexible office rentals, featuring high-speed UI and seamless booking flows.",
    tags: ["React", "Tailwind", "Framer Motion"],
    img: office,
  },
  {
    title: "Eco-Commerce Ecosystem",
    location: "Global / Remote",
    year: "2024",
    desc: "A high-conversion headless e-commerce build focused on sustainability and performance optimization.",
    tags: ["Next.js", "Shopify", "Three.js"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
  },
  {
    title: "Nova FinTech Dashboard",
    location: "London, UK",
    year: "2024",
    desc: "Advanced data visualization and real-time asset management platform for modern investors.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

const Work = () => (
  <section id="work" className="relative py-32 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="kicker">Selected Projects</div>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Proof of <span className="text-gradient">Performance</span>.
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xs text-muted-foreground text-sm leading-relaxed mb-2"
        >
          A curated selection of my latest work, where design meets functional excellence.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <SpotlightCard className="group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 right-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white">
                    {p.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="w-3.5 h-3.5 text-primary-glow" />
                    {p.location}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-glow">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-glow transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <div className="h-px w-full bg-white/5 mb-6" />
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group/link">
                  Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}

        {/* Empty Slots */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (projects.length + i) * 0.1 }}
          >
            <SpotlightCard className="group flex flex-col items-center justify-center p-12 text-center min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
              <div className="text-7xl font-black text-white/5 mb-4 group-hover:text-primary/10 transition-colors">0{i + 1}</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Next Big Project</div>
              <p className="text-sm text-muted-foreground/60 max-w-[200px] mb-8">
                Your business could be the next success story featured here.
              </p>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                Start Collaboration
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
