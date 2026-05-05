import { useState, useEffect } from "react";
import { Mail, Github, MapPin, Clock, Instagram, Twitter, Linkedin, ArrowUp, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name:    z.string().trim().min(1, "Name is required"),
  email:   z.string().trim().email("Invalid email"),
  message: z.string().trim().min(5, "Tell me a bit more"),
});

const Contact = () => {
  const [time, setTime]         = useState("");
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Casablanca",
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setLoading(true);
    try {
      await emailjs.send(
        "service_yr4aw1n",
        "template_ba6nx48",
        { name: parsed.data.name, email: parsed.data.email, message: parsed.data.message },
        { publicKey: "4aYTvQ2U7KsF7cKhu" }
      );
      toast.success("Message sent! I'll reply within 24h.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send — please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-primary/[0.04] [mask-image:radial-gradient(circle_at_50%_0%,black,transparent_70%)]" />

      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="label-tag justify-center mb-4">Contact</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Let's build something{" "}
            <span className="gradient-text">great together</span>.
          </h2>
          <p className="text-white/45 leading-relaxed">
            Ready to start your next project? Drop a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Info cards */}
            {[
              { icon: Mail,   label: "Email",  value: "hello@xkagency.com",  href: "mailto:hello@xkagency.com" },
              { icon: Github, label: "GitHub", value: "github.com/wacai05", href: "https://github.com/wacai05" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="card flex items-center gap-4 p-5 group hover:border-primary/30"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary flex items-center justify-center shadow-glow transition-transform duration-200 group-hover:scale-110">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Meta */}
            <div className="card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin size={14} className="text-primary shrink-0" />
                Kenitra, Morocco
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <Clock size={14} className="text-primary shrink-0" />
                <span className="font-mono text-white">{time}</span>
                <span className="text-white/30">local time</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-11 w-11 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="card p-7 md:p-9">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/35">
                      Your Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/35">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/35">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold text-white mb-1">xkagency</div>
              <div className="text-xs text-white/25 uppercase tracking-widest">
                © {new Date().getFullYear()} All rights reserved
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="h-12 w-12 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-0.5 group hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="text-white/40 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
              <span className="text-[8px] font-bold uppercase text-white/25 group-hover:text-white/60">Top</span>
            </button>

            <div className="flex items-center gap-4 text-xs text-white/25 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Kenitra, Morocco
              </div>
              <span className="text-white/10">|</span>
              <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
