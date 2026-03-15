import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
{ num: "850M", suffix: "+", label: "Gamers em mercados emergentes" },
{ num: "45M", suffix: "", label: "Players mensais Nuuvem" },
{ num: "3.1M", suffix: "", label: "Unidades vendidas LATAM 2024" },
{ num: "#1", suffix: "", label: "Ecossistema gaming da LATAM" }];


export const MarketSection = () =>
<section id="market" className="bg-ink relative overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: `url(${heroBg})` }} />
    <div className="relative max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <Eyebrow>O Mercado</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              O GAMING LATAM<br />ESTÁ EXPLODINDO.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionParagraph>
              850 milhões de gamers em mercados emergentes. O LATAM lidera o crescimento — e o gamer latino compra 2.5× mais que a média do e-commerce.
            </SectionParagraph>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 p-4 border-l-2 border-primary bg-card text-sm text-muted-foreground leading-relaxed">Hardware premium está no centro da experiência gaming. Cooler Master é a marca que este público busca.
            <strong className="text-primary-foreground">Oportunidade real:</strong> Hardware premium está no centro da experiência gaming. Cooler Master é a marca que este público busca — e a Nuuvem é onde ele compra.
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