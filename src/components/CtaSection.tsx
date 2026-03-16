import { Reveal } from "./ui-landing";
import ctaBg from "@/assets/cta-bg.jpg";

const steps = [
  { num: "01", label: "Choose your tier" },
  { num: "02", label: "Align the scope" },
  { num: "03", label: "Dominate the event" },
];

export const CtaSection = () => (
  <section id="cta" className="relative overflow-hidden min-h-[65vh] flex items-center justify-center text-center px-[4vw] py-32">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ctaBg})`, backgroundPosition: "center 40%" }} />
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, hsl(216 100% 31% / 0.9) 0%, hsl(263 54% 42% / 0.88) 45%, hsl(240 60% 3% / 0.95) 100%)",
      }}
    />
    <div
      className="absolute inset-0 animate-grid-shift"
      style={{
        backgroundImage:
          "linear-gradient(hsl(213 100% 65% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(213 100% 65% / 0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative z-[2] max-w-[680px]">
      <Reveal>
        <h2 className="font-display font-black text-[clamp(3.5rem,7vw,7rem)] leading-[0.87] uppercase text-primary-foreground tracking-tight mb-6">
          LET'S<br />
          <span className="text-nb3 italic">PLAY</span><br />
          TOGETHER
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-[440px] mx-auto">
          Cooler Master deserves the stage Nuuvem has built. Talk to our partnerships team and secure your presence at Gamescom LATAM 2026.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex justify-center gap-10 mb-10 flex-wrap">
          {steps.map((s) => (
            <div key={s.num} className="flex items-center gap-2.5">
              <span className="font-display font-black text-2xl text-nb3 leading-none">{s.num}</span>
              <span className="text-sm text-primary-foreground/60 text-left max-w-[110px] leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <a
          href="mailto:partnerships@nuuvem.com"
          className="inline-block font-display font-black text-base tracking-[0.08em] uppercase py-4 px-10 bg-primary text-primary-foreground no-underline hover:bg-nb2 hover:-translate-y-1 hover:shadow-[0_14px_44px_hsl(216_100%_44%/0.55)] transition-all"
        >
          partnerships@nuuvem.com
        </a>
      </Reveal>
    </div>
  </section>
);
