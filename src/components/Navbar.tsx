import { useState, useEffect } from "react";
import { generatePptx } from "@/utils/generatePptx";

const navLinks = [
  { label: "Market", href: "#market" },
  { label: "Booth", href: "#stand" },
  { label: "Tiers", href: "#tiers" },
  { label: "Track Record", href: "#proof" },
  { label: "Nuuvem", href: "#nuuvem" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-[58px] flex items-center justify-between px-[4vw] backdrop-blur-[18px] border-b border-border transition-colors ${
        scrolled ? "bg-background/90" : "bg-background/82"
      }`}
    >
      <div className="font-display font-black text-base tracking-[0.12em] uppercase text-primary-foreground">
        Cooler Master <span className="text-nb3">× Nuuvem</span>
      </div>
      <ul className="hidden md:flex gap-7 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-display font-semibold text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-primary-foreground transition-colors no-underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button
          onClick={() => generatePptx()}
          className="font-display font-bold text-xs tracking-[0.1em] uppercase py-2 px-5 bg-transparent text-muted-foreground no-underline border border-border-bright hover:border-v3 hover:text-primary-foreground transition-all cursor-pointer"
        >
          ⬇ PPT
        </button>
        <a
          href="#cta"
          className="font-display font-bold text-xs tracking-[0.1em] uppercase py-2 px-5 bg-primary text-primary-foreground no-underline hover:bg-nb2 hover:shadow-[0_0_20px_hsl(var(--glow-blue)/0.55)] transition-all"
        >
          Talk to Nuuvem
        </a>
      </div>
    </nav>
  );
};
