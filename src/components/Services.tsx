import { useState } from "react";
import {
  Check, Layers, Smartphone, Zap, Sparkles, Search, Layout,
  Rocket, ArrowRight, X, Code2, ShoppingBag, BarChart3,
  Globe, Palette, Shield, Clock, Star
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Layers,
    badge: "Most Requested",
    title: "Custom Website Development",
    short: "Full-stack sites built from scratch with React & Next.js.",
    color: "primary",
    features: [
      "Fully Custom Design — no templates",
      "React / Next.js / TypeScript",
      "Mobile-First & Fully Responsive",
      "SEO & Core Web Vitals Optimized",
      "CMS Integration (Sanity, Contentful)",
      "Ultra-Fast Load Times",
      "Deployment on Vercel / Netlify",
      "3 Rounds of Revisions Included",
    ],
    timeline: "2–4 weeks",
    starting: 599,
    description:
      "From landing pages to full multi-page business sites, I handle every step — strategy, design, development, and launch. Built to convert visitors into customers.",
  },
  {
    id: "ui-ux",
    icon: Palette,
    badge: "Design First",
    title: "UI/UX Design & Prototyping",
    short: "User-centered interfaces that feel premium and convert.",
    color: "violet",
    features: [
      "Full Figma Design System",
      "User Flow Mapping",
      "Wireframes & Interactive Prototypes",
      "Responsive Breakpoints",
      "Component Library",
      "Micro-interaction Design",
      "Design Handoff for Developers",
      "Unlimited Iterations",
    ],
    timeline: "1–2 weeks",
    starting: 349,
    description:
      "Beautiful interfaces start with rigorous thinking. I design pixel-perfect, user-tested layouts in Figma — ready to hand off or build myself.",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    badge: "High ROI",
    title: "E-Commerce Development",
    short: "Conversion-optimized stores that sell while you sleep.",
    color: "green",
    features: [
      "Shopify / WooCommerce / Custom",
      "Product Catalog & Filtering",
      "Secure Payment Integration",
      "Cart & Checkout Optimization",
      "Inventory Management",
      "Email & Abandoned Cart Flows",
      "Analytics & Conversion Tracking",
      "Post-launch Support",
    ],
    timeline: "3–5 weeks",
    starting: 799,
    description:
      "E-commerce stores that are built to sell — fast checkout, smooth product browsing, and payment integrations that work flawlessly on every device.",
  },
  {
    id: "performance",
    icon: Zap,
    badge: "Quick Win",
    title: "Speed & SEO Optimization",
    short: "Turn a slow site into a Lighthouse 95+ machine.",
    color: "yellow",
    features: [
      "Lighthouse Audit & Fix",
      "Core Web Vitals Optimization",
      "Image Compression & Lazy Loading",
      "Code Splitting & Bundling",
      "Technical SEO Audit",
      "Meta Tags & Schema Markup",
      "Sitemap & robots.txt",
      "Performance Report Included",
    ],
    timeline: "3–7 days",
    starting: 199,
    description:
      "Slow websites lose customers. I audit, diagnose, and fix performance bottlenecks so your site ranks higher and converts better.",
  },
  {
    id: "branding",
    icon: Sparkles,
    badge: "Brand Identity",
    title: "Branding & Visual Identity",
    short: "A logo isn't a brand. I build the whole system.",
    color: "pink",
    features: [
      "Logo Design (3 concepts)",
      "Brand Color Palette",
      "Typography System",
      "Icon & Illustration Style",
      "Brand Guidelines PDF",
      "Social Media Kit",
      "Favicon & App Icon",
      "Full Source Files (AI, SVG, PNG)",
    ],
    timeline: "1–2 weeks",
    starting: 299,
    description:
      "A cohesive brand identity that communicates authority and trust. From logo to full design system, delivered in a professional brand guidelines document.",
  },
  {
    id: "maintenance",
    icon: Shield,
    badge: "Ongoing",
    title: "Maintenance & Support",
    short: "Your site stays fast, secure, and up-to-date.",
    color: "blue",
    features: [
      "Monthly Security Updates",
      "Content Updates (up to 5/mo)",
      "Performance Monitoring",
      "Bug Fixes & Hotfixes",
      "Uptime Monitoring",
      "Backup & Recovery",
      "Analytics Reporting",
      "Priority Response (24h SLA)",
    ],
    timeline: "Ongoing / Monthly",
    starting: 99,
    description:
      "Keep your digital presence running at 100%. Monthly retainer plans that cover everything from content updates to security patches — so you never have to worry.",
  },
];

const process = [
  { icon: Search, n: "01", title: "Discover", desc: "Goals, audience, scope & timeline." },
  { icon: Layout, n: "02", title: "Design",   desc: "Wireframes, UI prototypes, feedback." },
  { icon: Layers, n: "03", title: "Develop",  desc: "Clean, scalable, tested code." },
  { icon: Rocket, n: "04", title: "Deliver",  desc: "Launch, QA, and handoff." },
];

const colorMap: Record<string, string> = {
  primary: "bg-violet-500/20 border-violet-500/30 text-violet-400",
  violet:  "bg-purple-500/20 border-purple-500/30 text-purple-400",
  green:   "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  yellow:  "bg-amber-500/20 border-amber-500/30 text-amber-400",
  pink:    "bg-pink-500/20 border-pink-500/30 text-pink-400",
  blue:    "bg-blue-500/20 border-blue-500/30 text-blue-400",
};

const iconColorMap: Record<string, string> = {
  primary: "bg-violet-600",
  violet:  "bg-purple-600",
  green:   "bg-emerald-600",
  yellow:  "bg-amber-500",
  pink:    "bg-pink-600",
  blue:    "bg-blue-600",
};

const Services = () => {
  const [selected, setSelected] = useState<typeof services[0] | null>(null);

  const scrollContact = () => {
    setSelected(null);
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-[100px]" />

      <div className="section-container">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="label-tag justify-center mb-4">Services</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Everything you need to{" "}
            <span className="gradient-text">dominate online</span>.
          </h2>
          <p className="text-white/45 leading-relaxed">
            Click any service to see full details, features, and pricing.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((s) => {
            const badgeClass = colorMap[s.color] || colorMap.primary;
            const iconClass  = iconColorMap[s.color] || iconColorMap.primary;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(s)}
                className="card p-7 text-left group hover:border-primary/30 flex flex-col gap-4 transition-all duration-200"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between">
                  <div className={`h-12 w-12 rounded-xl ${iconClass} flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg`}>
                    <s.icon size={22} className="text-white" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${badgeClass}`}>
                    {s.badge}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.short}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="text-sm font-bold text-white">
                    from <span className="text-primary">${s.starting}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-primary transition-colors">
                    <Clock size={11} />
                    {s.timeline}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/60 group-hover:text-primary transition-colors">
                  View Details <ArrowRight size={12} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Service detail modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[hsl(240,10%,6%)] shadow-2xl">
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 h-9 w-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              <div className="p-7 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`h-14 w-14 shrink-0 rounded-2xl ${iconColorMap[selected.color]} flex items-center justify-center shadow-lg`}>
                    <selected.icon size={26} className="text-white" />
                  </div>
                  <div>
                    <div className={`mb-1 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest ${colorMap[selected.color]}`}>
                      {selected.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                  </div>
                </div>

                <p className="text-white/55 leading-relaxed mb-8">{selected.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                    What's Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selected.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check size={11} className="text-primary" />
                        </div>
                        <span className="text-sm text-white/65">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + timeline */}
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Starting at</div>
                    <div className="text-3xl font-extrabold text-white">
                      ${selected.starting.toLocaleString()}
                    </div>
                  </div>
                  <div className="h-px sm:h-10 w-full sm:w-px bg-white/8" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Timeline</div>
                    <div className="flex items-center gap-2 text-lg font-bold text-white">
                      <Clock size={16} className="text-primary" />
                      {selected.timeline}
                    </div>
                  </div>
                  <div className="h-px sm:h-10 w-full sm:w-px bg-white/8" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Rating</div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-primary text-primary" />)}
                    </div>
                  </div>
                </div>

                <button onClick={scrollContact} className="btn-primary w-full justify-center py-4 text-base">
                  Get a Free Quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Process */}
        <div>
          <div className="label-tag mb-8">How It Works</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <div key={i} className="card p-7 group relative">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                    {step.n}
                  </span>
                  <step.icon size={20} className="text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{step.title}</h5>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-gradient-to-r from-primary/30 to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
