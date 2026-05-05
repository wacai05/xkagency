import { Target, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  { icon: Lightbulb, n: "2",    label: "Years Training",      desc: "Deep dive into modern frameworks & fundamentals." },
  { icon: Target,    n: "5+",   label: "Years Freelancing",    desc: "Shipping production-grade sites for real clients." },
  { icon: TrendingUp,n: "100+", label: "Businesses Helped",    desc: "Results-driven, focused on actual business growth." },
];

const tags = ["Strategy First", "Pixel-Perfect", "Future-Ready", "Ultra-Fast"];

const About = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/8 blur-[80px]" />

    <div className="section-container">

      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <div className="label-tag mb-4">About</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          Bridging the gap between{" "}
          <span className="gradient-text">Vision</span> and{" "}
          <span className="gradient-text">Reality</span>.
        </h2>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">

        {/* Quote card */}
        <div className="card p-8 md:p-10">
          <div className="mb-6 text-4xl text-primary/40 font-serif select-none">"</div>
          <p className="text-xl sm:text-2xl font-medium leading-snug text-white italic mb-8">
            Design isn't just about how it looks. It's about how it{" "}
            <span className="text-primary">converts</span> visitors into loyal
            customers.
          </p>
          <div className="flex items-center gap-3 border-t border-white/8 pt-6">
            <div className="h-10 w-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary text-sm">
              xk
            </div>
            <div>
              <div className="text-sm font-bold text-white">xk Agency</div>
              <div className="text-xs text-white/40">Founder &amp; Lead Designer</div>
            </div>
          </div>
        </div>

        {/* Copy + tags */}
        <div className="flex flex-col gap-6">
          <p className="text-white/55 leading-relaxed">
            I am a passionate freelance developer specializing in creating
            high-performance digital ecosystems. With over half a decade of
            experience, I don't just build websites — I build business engines
            that work around the clock.
          </p>
          <p className="text-white/55 leading-relaxed">
            Every pixel, every interaction, every line of code is shaped by one
            goal: delivering measurable results for your business.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {tags.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm font-medium text-white/75">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <div key={i} className="card p-7 group">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-12 w-12 rounded-xl border border-white/8 bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                <s.icon size={22} className="text-primary" />
              </div>
              <span className="text-4xl font-black text-white/6 group-hover:text-primary/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="text-4xl font-extrabold text-white mb-1 group-hover:text-primary transition-colors duration-300">
              {s.n}
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-2">
              {s.label}
            </div>
            <p className="text-sm text-white/35 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
