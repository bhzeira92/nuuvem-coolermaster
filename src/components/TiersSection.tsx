import { Reveal, Eyebrow, SectionHeading } from "./ui-landing";

const tiers = [
  {
    badge: "Epic Sponsor",
    badgeClass: "bg-[#FFD100] text-background",
    borderClass: "border-[#FFD100]/40",
    barGradient: "bg-gradient-to-r from-[#FFD100] to-[#FF8C00]",
    name: "EPIC",
    sub: "EXCLUSIVE TIER · 1 BRAND - $75,000.00",
    highlight: "Total booth and naming dominance — Cooler Master is the official hardware of × Nuuvem.",
    items: [
      "Naming rights: 'Nuuvem Lounge powered by Cooler Master'",
      "Logo on ALL 8 PCs, monitors, peripherals, and backdrop",
      "Hardware category exclusivity during the event",
      "Dedicated product showcase in Cloud Lounge VIP",
      "8 VIP passes + 10 visitor passes",
      "Co-branded digital campaign",
      "Full post-event report",
    ],
  },
  {
    badge: "Partner",
    badgeClass: "bg-primary text-primary-foreground",
    borderClass: "border-primary/50",
    barGradient: "bg-gradient-to-r from-primary to-v2",
    name: "PARTNER",
    sub: "UP TO 2 BRANDS - $45,000.00",
    highlight: "Premium presence with PC branding and access to the creator ecosystem.",
    items: [
      "Branding on 6 gaming PCs + selected peripherals",
      "Logo on main backdrop and booth materials",
      "Cloud Lounge access",
      "1 session with partner creators",
      "Mentions in digital campaigns",
      "Post-event report",
    ],
  },
  {
    badge: "Standard",
    badgeClass: "border border-border text-dim",
    borderClass: "",
    barGradient: "bg-gradient-to-r from-v2 to-nb2",
    name: "STANDARD",
    sub: "UP TO 4 BRANDS - $15,000.00",
    highlight: "Booth visibility with product showcase and digital presence.",
    items: [
      "Logo on booth materials and secondary backdrop",
      "Product showcase in designated area",
      "Mention in selected digital campaigns",
      "3 VIP passes for the event",
      "Summary post-event report",
    ],
  },
];

export const TiersSection = () => (
  <section id="tiers" className="bg-background">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <Reveal><Eyebrow>Sponsorship Tiers</Eyebrow></Reveal>
      <Reveal delay={0.05}>
        <SectionHeading>CHOOSE YOUR LEVEL<br />OF DOMINANCE.</SectionHeading>
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
