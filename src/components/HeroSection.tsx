import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen grid items-end px-[4vw] pb-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center 30%" }} />
      
      {/* Gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(to right, hsl(240 60% 3% / 0.98) 0%, hsl(240 60% 3% / 0.75) 50%, hsl(240 60% 3% / 0.2) 100%), linear-gradient(to top, hsl(240 60% 3% / 1) 0%, transparent 55%)"
        }} />
      
      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] gradient-brand" />

      {/* Content */}
      <div className="relative z-[2] max-w-[820px]">
        <div className="inline-flex items-center gap-2 font-display font-bold text-[0.72rem] tracking-[0.22em] uppercase text-nb3 border border-nb3/30 py-1 px-4 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
          Gamescom LATAM 2026
        </div>
        <h1 className="font-display font-black text-[clamp(5rem,10vw,10.5rem)] leading-[0.86] uppercase text-primary-foreground tracking-tight mb-2">
          <span className="text-stroke-blue">COOLER MASTER</span>{" "}
          <span className="text-v3 italic" style={{ textShadow: "0 0 60px hsl(263 95% 77% / 0.5)" }}>
            ×
          </span>{" "}
          NUUVEM
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-muted-foreground max-w-[440px] my-6">
          A Nuuvem convida a Cooler Master para dominar a Gamescom LATAM 2026 — hardware premium, audiência massiva e conversão real.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#tiers"
            className="font-display font-bold text-sm tracking-[0.1em] uppercase py-3.5 px-8 bg-primary text-primary-foreground no-underline relative overflow-hidden hover:bg-nb2 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_hsl(var(--glow-blue)/0.55)] transition-all">
            
            Ver cotas
          </a>
          <a
            href="#stand"
            className="font-display font-bold text-sm tracking-[0.1em] uppercase py-3.5 px-8 bg-transparent text-muted-foreground no-underline border border-border-bright hover:border-v3 hover:text-primary-foreground transition-all">
            
            Explorar o stand
          </a>
        </div>
      </div>

      {/* Meta */}
      <div className="absolute right-[4vw] bottom-24 z-[2] text-right hidden md:block">
        <div className="font-display font-black text-base tracking-[0.1em] uppercase text-primary-foreground">30 ABR – 04 MAI 2026

        </div>
        <div className="text-xs text-muted-foreground tracking-wide mt-1">
          São Paulo Expo · São Paulo, BR
        </div>
      </div>
    </section>);

};