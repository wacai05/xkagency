import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const links = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills",   label: "Skills" },
  { href: "#work",     label: "Work" },
  { href: "#pricing",  label: "Pricing" },
  { href: "#contact",  label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-2 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-black text-white text-sm shadow-glow transition-transform duration-300 group-hover:rotate-12">
              xk
            </span>
            <span className="font-display text-lg font-bold text-white">
              agency
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === l.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {active === l.href && (
                  <span className="absolute inset-0 rounded-lg bg-white/8 border border-white/10" />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
          {links.map((l, i) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`w-full max-w-xs text-center py-4 rounded-2xl text-xl font-semibold transition-all duration-200 ${
                menuOpen ? "animate-fade-up" : ""
              } ${
                active === l.href
                  ? "text-white bg-primary/20 border border-primary/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="mt-4 btn-primary w-full max-w-xs justify-center text-base"
          >
            Let's Talk ↗
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
