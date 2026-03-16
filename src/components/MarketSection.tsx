import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
{ num: "850M", suffix: "+", label: "Gamers in emerging markets" },
{ num: "45M", suffix: "", label: "Nuuvem monthly players" },
{ num: "3.1M", suffix: "", label: "Units sold LATAM 2024" },
{ num: "#1", suffix: "", label: "LATAM gaming ecosystem" }];


export const MarketSection = () =>
<section id="market" className="bg-ink relative overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: `url(${heroBg})` }} />
    <div className="relative max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <Eyebrow>The Market</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              LATAM GAMING<br />IS BOOMING.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionParagraph>
              850 million gamers in emerging markets. LATAM leads the growth — and Latin American gamers spend 2.5× more than the average e-commerce buyer.
            </SectionParagraph>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 p-4 border-l-2 border-primary bg-card text-sm text-muted-foreground leading-relaxed">
            <strong className="text-primary-foreground">Real opportunity:</strong> Premium hardware is at the heart of the gaming experience. Cooler Master is the brand this audience seeks — and Nuuvem is where they buy.
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-px bg-border">
            {stats.map((s, i) =>
          <div key={i} className="bg-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 gradient-brand" />
                <div className="font-display font-black text-[2.9rem] text-primary-foreground leading-none mb-1">
                  <span className="text-nb3">{s.num}</span>{s.suffix}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
              </div>
          )}
          </div>
        </Reveal>
      </div>
    </div>
  </section>;
