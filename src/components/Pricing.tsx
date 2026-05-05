import { useState } from "react";
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, Clock, Star } from "lucide-react";

const plans = [
  {
    icon: Zap,
    title: "Starter",
    subtitle: "Perfect for small businesses & startups",
    oneTime: 499,
    monthly: 49,
    popular: false,
    color: "text-blue-400",
    features: [
      "1-Page Landing Site",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "Google Analytics",
      "Delivered in 5–7 days",
      "1 Round of Revisions",
      "30-day Free Support",
    ],
    notIncluded: ["CMS / Blog", "E-Commerce", "Custom Animations"],
  },
  {
    icon: Sparkles,
    title: "Professional",
    subtitle: "For growing brands that want results",
    oneTime: 1299,
    monthly: 129,
    popular: true,
    color: "text-primary",
    features: [
      "Up to 8 Pages",
      "Premium Custom Design",
      "Mobile-First Development",
      "CMS Integration (Blog/News)",
      "Advanced SEO & Sitemap",
      "Performance Optimization",
      "Contact Form + Email Setup",
      "3 Rounds of Revisions",
      "60-day Free Support",
      "Free Domain Setup",
    ],
    notIncluded: ["Custom Web App", "E-Commerce Store"],
  },
  {
    icon: ShieldCheck,
    title: "Business",
    subtitle: "Full-scale digital ecosystem",
    oneTime: 2499,
    monthly: 249,
    popular: false,
    color: "text-violet-400",
    features: [
      "Unlimited Pages",
      "E-Commerce Ready",
      "Custom Web Application",
      "API & Third-party Integrations",
      "Advanced Animations",
      "Multi-language Support",
      "Full SEO Strategy",
      "Priority 24h Support",
      "Unlimited Revisions",
      "90-day Free Maintenance",
      "Analytics Dashboard",
      "Growth Consulting Call",
    ],
    notIncluded: [],
  },
];

const Pricing = () => {
  const [mode, setMode] = useState<"project" | "monthly">("project");

  const scrollContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]" />
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="label-tag justify-center mb-4">Pricing</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Transparent pricing,{" "}
            <span className="gradient-text">zero surprises</span>.
          </h2>
          <p className="text-white/45 leading-relaxed">
            Competitive rates for world-class quality. Pay per project or keep your site
            growing with a monthly plan.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5">
            <button
              onClick={() => setMode("project")}
              className={`relative z-10 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                mode === "project" ? "text-white" : "text-white/40"
              }`}
            >
              {mode === "project" && (
                <span className="absolute inset-0 rounded-xl bg-primary shadow-glow" />
              )}
              <span className="relative">Per Project</span>
            </button>
            <button
              onClick={() => setMode("monthly")}
              className={`relative z-10 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                mode === "monthly" ? "text-white" : "text-white/40"
              }`}
            >
              {mode === "monthly" && (
                <span className="absolute inset-0 rounded-xl bg-primary shadow-glow" />
              )}
              <span className="relative">
                Monthly{" "}
                <span className="text-[10px] font-bold text-emerald-400 ml-1">Save 20%</span>
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => {
            const price = mode === "project" ? plan.oneTime : plan.monthly;
            const suffix = mode === "project" ? "" : "/mo";
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/50 bg-primary/8"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
                style={plan.popular ? { boxShadow: "0 0 40px hsl(263.4 70% 50.4% / 0.12)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-glow whitespace-nowrap">
                    ✦ Most Popular
                  </div>
                )}

                {/* Icon + title */}
                <div className="mb-5 flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-xl border flex items-center justify-center ${
                    plan.popular ? "bg-primary/20 border-primary/40" : "bg-white/5 border-white/10"
                  }`}>
                    <plan.icon size={22} className={plan.popular ? "text-primary" : "text-white/50"} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{plan.title}</div>
                    <div className="text-xs text-white/30 leading-tight">{plan.subtitle}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${price.toLocaleString()}
                    </span>
                    <span className="mb-1.5 text-sm text-white/35">{suffix}</span>
                  </div>
                  {mode === "project" ? (
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <Clock size={11} />
                      {i === 0 ? "5–7 days" : i === 1 ? "2–3 weeks" : "4–6 weeks"}
                    </div>
                  ) : (
                    <div className="text-xs text-emerald-400">
                      Save ${((plan.oneTime * 0.2) / 12).toFixed(0)}/mo vs per-project
                    </div>
                  )}
                </div>

                {/* Included features */}
                <ul className="flex flex-col gap-2.5 mb-5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="text-sm text-white/65">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Not included */}
                {plan.notIncluded.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-6 border-t border-white/5 pt-4">
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="h-4 w-4 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                          <span className="text-[8px] text-white/20 font-bold">✕</span>
                        </div>
                        <span className="text-sm text-white/20">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={scrollContact}
                  className={`${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  } justify-center py-3.5 text-sm font-semibold`}
                >
                  Get Started <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { icon: "🔒", label: "Secure Payment", sub: "Stripe & PayPal" },
            { icon: "🔄", label: "Free Revisions", sub: "Until you're happy" },
            { icon: "⚡", label: "Fast Delivery",  sub: "On-time, every time" },
            { icon: "📞", label: "Direct Access",  sub: "1-on-1 communication" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1 min-w-[100px]">
              <span className="text-2xl">{item.icon}</span>
              <div className="text-sm font-semibold text-white">{item.label}</div>
              <div className="text-xs text-white/30">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/30 mb-3">
            Need something custom? Have a bigger project in mind?
          </p>
          <button
            onClick={scrollContact}
            className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/70 transition-colors"
          >
            Let's talk about your specific needs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
