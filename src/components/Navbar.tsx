import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ContactDialog } from "./ContactDialog";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 flex justify-center items-center pointer-events-none",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between transition-all duration-500 pointer-events-auto",
          scrolled 
            ? "glass-card w-[90%] md:w-fit px-6 py-3 rounded-full shadow-glow-primary border-primary/20 bg-black/60 backdrop-blur-2xl" 
            : "w-full max-w-6xl px-6"
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-2xl font-bold tracking-tighter text-white"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-glow-primary transition-transform duration-500 group-hover:rotate-12">
            <span className="relative z-10 text-lg">x</span>
            <span className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </span>
          <span className={cn(
            "hidden sm:inline transition-all duration-500",
            scrolled && "sm:hidden lg:inline"
          )}>xk<span className="text-primary-glow">agency</span></span>
        </Link>

        <div className={cn(
          "flex items-center transition-all duration-500",
          scrolled ? "gap-4 md:gap-8" : "gap-8"
        )}>
          <ul className={cn(
            "hidden md:flex items-center gap-1 rounded-full p-1.5 transition-all duration-500",
            !scrolled && "border border-white/5 bg-white/[0.03] backdrop-blur-xl"
          )}>
            {links.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={cn(
                      "relative flex items-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-primary/20 shadow-[inset_0_0_12px_rgba(168,85,247,0.2)] ring-1 ring-primary/40" />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ContactDialog>
            <button
              className={cn(
                "magnetic-button group hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-sm font-semibold text-white shadow-glow-primary transition-all duration-500 hover:scale-105 active:scale-95",
                scrolled ? "px-5 py-2" : "px-6 py-2.5"
              )}
            >
              <span className={scrolled ? "hidden xl:inline" : "inline"}>Let's Talk</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white/30">
                <span className="text-[10px]">↗</span>
              </div>
            </button>
          </ContactDialog>

          {/* Mobile menu trigger */}
          <button className="md:hidden flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 active:scale-90">
            <div className="w-5 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-white transition-all" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
