import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";

const metrics = [
  { value: "45M", suffix: "+", label: "Monthly gamers" },
  { value: "12M", suffix: "+", label: "Transactions/year" },
  { value: "#1", suffix: "", label: "LATAM gaming store" },
  { value: "330", suffix: "+", label: "Partner creators" },
  { value: "67M", suffix: "", label: "Annual reach" },
  { value: "35M", suffix: "", label: "Social reach" },
];

export const NuuvemSection = () => (
  <section id="nuuvem" className="bg-background">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <Reveal><Eyebrow>Nuuvem</Eyebrow></Reveal>
      <Reveal delay={0.05}>
        <SectionHeading>THE #1 GAMING<br />ECOSYSTEM IN LATIN AMERICA.</SectionHeading>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionParagraph>
          More than a store. Nuuvem is the hub connecting brands, creators, and gamers in a community that plays, buys, and influences.
        </SectionParagraph>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border mt-12">
          {metrics.map((m, i) => (
            <div key={i} className="group bg-card p-7 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-[2.7rem] text-primary-foreground leading-none mb-2">
                {m.value}<span className="text-nb3">{m.suffix}</span>
              </div>
              <div className="font-display font-semibold text-[0.68rem] tracking-[0.14em] uppercase text-dim">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
