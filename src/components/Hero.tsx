import { ArrowRight, Star } from "lucide-react";
import profile from "@/assets/profile.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text ── */}
          <div className="flex flex-col gap-6 animate-fade-up order-2 lg:order-1">

            {/* Badge */}
            <div className="flex items-center gap-2.5 w-fit rounded-full border border-primary/25 bg-primary/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Available for Projects
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-white">
                Digital
                <span className="gradient-text"> Architect</span>
                <br />
                &amp; Brand{" "}
                <span className="animate-shimmer">Strategist</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="max-w-lg text-base sm:text-lg text-white/55 leading-relaxed">
              Freelance UI/UX Specialist with{" "}
              <span className="font-semibold text-white">5+ years</span> of
              crafting high-converting digital experiences that bridge design
              and development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary text-sm px-6 py-3"
              >
                Let's Build Together <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#work")}
                className="btn-secondary text-sm px-6 py-3"
              >
                View My Work
              </button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5">
              <div className="flex flex-col gap-1">
                <div className="flex -space-x-2">
                  {[11, 12, 13, 14].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-black overflow-hidden bg-muted"
                    >
                      <img
                        src={`https://i.pravatar.cc/80?img=${i}`}
                        alt="client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="h-9 w-9 rounded-full border-2 border-black bg-primary flex items-center justify-center text-[9px] font-bold text-white">
                    100+
                  </div>
                </div>
                <span className="text-xs text-white/40">
                  Trusted by global businesses
                </span>
              </div>

              <div className="h-8 w-px bg-white/8 hidden sm:block" />

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-xs text-white/40">
                  5.0 rating on Clutch
                </span>
              </div>
            </div>
          </div>

          {/* ── Portrait ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-up delay-200">
            <div className="relative w-[280px] sm:w-[340px] lg:w-[420px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-primary/15 blur-3xl scale-95" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img
                  src={profile}
                  alt="xk Agency"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Name card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">xk Agency</div>
                    <div className="text-xs text-white/50">Founder &amp; Lead Dev</div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-xs font-bold text-primary">✦</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-16 sm:-left-8 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-3 animate-float shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm">🎨</div>
                  <div>
                    <div className="text-xs font-bold text-white">UI/UX Design</div>
                    <div className="text-[10px] text-white/40">Modern &amp; Clean</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-24 sm:-right-8 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-3 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm">⚡</div>
                  <div>
                    <div className="text-xs font-bold text-white">Web Dev</div>
                    <div className="text-[10px] text-white/40">React &amp; Next.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
