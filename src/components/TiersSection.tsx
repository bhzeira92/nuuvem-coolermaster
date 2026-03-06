import { Reveal, Eyebrow, SectionHeading } from "./ui-landing";

const tiers = [
  {
    badge: "Epic Sponsor",
    badgeClass: "bg-[#FFD100] text-background",
    borderClass: "border-[#FFD100]/40",
    barGradient: "bg-gradient-to-r from-[#FFD100] to-[#FF8C00]",
    name: "EPIC",
    sub: "Cota Exclusiva · 1 marca",
    highlight: "Domínio total do stand e do naming — a Cooler Master é o hardware oficial da × Nuuvem.",
    items: [
      "Naming rights: 'Nuuvem Lounge powered by Cooler Master'",
      "Logo em TODOS os 8 PCs, monitores, periféricos e backdrop",
      "Exclusividade de categoria hardware durante o evento",
      "Produto showcase dedicado no Cloud Lounge VIP",
      "8 convites VIP + 10 visitante",
      "Campanha digital co-branded ",
      "Relatório completo pós-evento",
    ],
  },
  {
    badge: "Partner",
    badgeClass: "bg-primary text-primary-foreground",
    borderClass: "border-primary/50",
    barGradient: "bg-gradient-to-r from-primary to-v2",
    name: "PARTNER",
    sub: "Até 2 marcas",
    highlight: "Presença premium com branding em PCs e acesso ao ecossistema de creators.",
    items: [
      "Branding em 8 PCs gaming + periféricos selecionados",
      "Logo no backdrop principal e materiais do stand",
      "Acesso ao Cloud Lounge para 2 representantes",
      "1 sessão com creators parceiros",
      "Menções em campanhas digitais (35M reach social)",
      "Relatório de métricas pós-evento",
    ],
  },
  {
    badge: "Standard",
    badgeClass: "border border-border text-dim",
    borderClass: "",
    barGradient: "bg-gradient-to-r from-v2 to-nb2",
    name: "STANDARD",
    sub: "Até 4 marcas",
    highlight: "Visibilidade no stand com produto showcase e presença digital.",
    items: [
      "Logo em materiais do stand e backdrop secundário",
      "Produto showcase em área designada",
      "Menção em campanhas digitais selecionadas",
      "1 convite VIP para o evento",
      "Relatório resumido pós-evento",
    ],
  },
];

export const TiersSection = () => (
  <section id="tiers" className="bg-background">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <Reveal><Eyebrow>Cotas de Patrocínio</Eyebrow></Reveal>
      <Reveal delay={0.05}>
        <SectionHeading>ESCOLHA SEU NÍVEL<br />DE DOMÍNIO.</SectionHeading>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {tiers.map((tier, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className={`bg-card border border-border ${tier.borderClass} p-7 pt-8 relative overflow-hidden hover:-translate-y-1 transition-transform`}>
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${tier.barGradient}`} />
              <span className={`inline-block font-display font-bold text-[0.62rem] tracking-[0.18em] uppercase py-1 px-3 mb-4 ${tier.badgeClass}`}>
                {tier.badge}
              </span>
              <div className="font-display font-black text-[2.1rem] uppercase text-primary-foreground leading-none mb-1">
                {tier.name}
              </div>
              <div className="font-display font-semibold text-[0.68rem] tracking-[0.14em] uppercase text-dim mb-4">
                {tier.sub}
              </div>
              <div className="h-px bg-border my-4" />
              <div className="font-display font-bold text-base text-primary-foreground leading-snug mb-4">
                {tier.highlight}
              </div>
              <ul className="list-none space-y-0">
                {tier.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-snug py-2 border-b border-border last:border-b-0 flex gap-2 items-baseline">
                    <span className="text-nb3 text-[0.7rem] flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
