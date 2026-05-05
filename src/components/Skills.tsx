import { Palette, Code2, Gauge, Sparkles, Figma, Layers, Boxes, Globe, Wand2 } from "lucide-react";

const skills = [
  { icon: Palette,  name: "UI/UX Design",        level: 95, desc: "Wireframes, design systems, user-first thinking." },
  { icon: Code2,    name: "Web Development",      level: 92, desc: "From scratch with React, Next.js, modern stacks." },
  { icon: Gauge,    name: "Performance",          level: 90, desc: "Lighthouse 95+, Core Web Vitals, scale-ready." },
  { icon: Sparkles, name: "Brand-led Layouts",    level: 88, desc: "Visual identity translated into pixel-perfect UI." },
];

const stack = [
  { icon: Figma,    label: "Figma" },
  { icon: Code2,    label: "React" },
  { icon: Layers,   label: "Next.js" },
  { icon: Boxes,    label: "Tailwind" },
  { icon: Globe,    label: "Vercel" },
  { icon: Sparkles, label: "Framer" },
  { icon: Wand2,    label: "shadcn/ui" },
];

const Skills = () => (
  <section id="skills" className="section-padding relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-primary/[0.03] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

    <div className="section-container">

      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <div className="label-tag mb-4">Expertise</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          A toolbox built for{" "}
          <span className="gradient-text">high performance</span>.
        </h2>
        <p className="mt-4 text-white/50 leading-relaxed max-w-xl">
          Years of refinement with a focused tech stack that balances developer
          velocity with absolute performance — picked because it scales without
          compromise.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {skills.map((skill, i) => (
          <div key={i} className="card p-7 group">
            <div className="flex items-start justify-between mb-6">
              <div className="h-13 w-13 h-12 w-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                <skill.icon size={22} className="text-primary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
                  {skill.level}%
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Mastery
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
            <p className="text-sm text-white/40 mb-5 leading-relaxed">{skill.desc}</p>

            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack strip */}
      <div className="card overflow-hidden">
        <div className="flex items-center gap-0 overflow-hidden">
          <div className="hidden sm:flex items-center justify-center shrink-0 px-6 py-5 border-r border-white/8">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30 whitespace-nowrap">
              The Stack
            </span>
          </div>
          {/* Scrollable on mobile, marquee on desktop */}
          <div className="flex gap-8 px-6 py-5 overflow-x-auto scrollbar-none flex-nowrap w-full">
            {stack.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-default"
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
