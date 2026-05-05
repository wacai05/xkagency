import { ArrowUpRight, MapPin } from "lucide-react";
import office from "@/assets/project-office.jpg";

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
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=999&auto=format&fit=crop",
  },
  {
    title: "Nova FinTech Dashboard",
    location: "London, UK",
    year: "2024",
    desc: "Advanced data visualization and real-time asset management platform for modern investors.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=999&auto=format&fit=crop",
  },
];

const Work = () => {
  const scrollContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/6 blur-[100px]" />

      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-tag mb-4">Selected Projects</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Proof of{" "}
              <span className="gradient-text">Performance</span>.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed sm:text-right">
            A curated selection where design meets functional excellence.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.map((p, i) => (
            <div key={i} className="card group overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Year + location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="rounded-full border border-primary/40 bg-primary/20 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                    {p.year}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/70">
                    <MapPin size={11} className="text-primary" />
                    {p.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{p.desc}</p>
                <div className="border-t border-white/5 pt-4">
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors group/btn">
                    Case Study
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="card flex flex-col items-center justify-center p-10 text-center min-h-[260px] group border-dashed">
            <div className="mb-3 text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
              ✦
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
              Next Big Project
            </div>
            <p className="text-sm text-white/25 max-w-[200px] mb-6">
              Your business could be the next success story featured here.
            </p>
            <button
              onClick={scrollContact}
              className="btn-secondary text-xs px-5 py-2.5"
            >
              Start Collaboration
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
