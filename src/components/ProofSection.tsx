import { Reveal, Eyebrow, SectionHeading } from "./ui-landing";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";

const photos = [
  { img: proof1, cap: "Gamescom LATAM 2025 — Crowd" },
  { img: proof2, cap: "Cloud Lounge — Creators" },
  { img: proof3, cap: "Hardware Showcase" },
];

const proofStats = [
  { num: "200K", suffix: "+", label: "Visitantes presenciais no último evento" },
  { num: "67M", suffix: "", label: "Impressões digitais anuais" },
  { num: "330", suffix: "+", label: "Creators parceiros ativos" },
  { num: "92", suffix: "%", label: "Taxa de satisfação de patrocinadores" },
];

export const ProofSection = () => (
  <section id="proof" className="bg-ink">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <Reveal><Eyebrow>Track Record</Eyebrow></Reveal>
      <Reveal delay={0.05}>
        <SectionHeading>A NUUVEM JÁ PROVOU<br />QUE SABE FAZER.</SectionHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border mt-12 mb-px">
          {photos.map((p, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={p.img}
                alt={p.cap}
                className="w-full h-full object-cover transition-transform duration-500 saturate-[0.85] group-hover:scale-105 group-hover:saturate-110"
              />
              <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-gradient-to-t from-background/90 to-transparent font-display text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                {p.cap}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {proofStats.map((s, i) => (
            <div key={i} className="bg-card p-7 relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 gradient-brand" />
              <div className="font-display font-black text-[2.5rem] text-primary-foreground leading-none mb-1">
                {s.num}<span className="text-nb3">{s.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
