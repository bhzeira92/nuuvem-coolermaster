import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";
import proofImg from "@/assets/proof-3.jpg";

const items = [
  { num: "01", title: "Hardware em uso real", desc: 'Branding em cada PC, monitor e ilha de jogo. "Powered by Cooler Master" visto e sentido por 200K+ gamers que jogam e compram.' },
  { num: "02", title: "Audiência ultra-qualificada", desc: "O visitante da Gamescom LATAM tem 2.5× maior intenção de compra de hardware premium que a média do e-commerce." },
  { num: "03", title: "Acesso direto a influencers", desc: "330+ criadores parceiros. O Cloud Lounge é onde os maiores nomes do gaming brasileiro criam conteúdo organicamente." },
  { num: "04", title: "Alcance digital massivo", desc: "67M de reach anual, 35M em redes sociais, 3.5M na rede Twitch parceira e cobertura de 100+ veículos tier-1." },
];

export const WhySection = () => (
  <section id="why" className="bg-ink">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-start">
        <div>
          <Reveal><Eyebrow>Por que Cooler Master</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>HARDWARE EM USO REAL.<br />AUDIÊNCIA QUE COMPRA.</SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionParagraph>
              Não é banner em site. É a sua marca nas mãos de quem ama performance — durante 4 dias intensos no maior evento gaming da América Latina.
            </SectionParagraph>
          </Reveal>
          <div className="flex flex-col gap-4 mt-9">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 items-start p-4 bg-card border border-border border-l-2 border-l-primary hover:bg-[hsl(240_33%_10%)] hover:border-l-v2 transition-colors">
                  <div className="font-display font-black text-2xl text-primary leading-none min-w-[1.8rem] flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm uppercase tracking-wide text-primary-foreground mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1} className="hidden md:block">
          <div className="relative">
            <img src={proofImg} alt="Hardware showcase" className="w-full block border border-border" />
            <div className="absolute bottom-0 left-0 right-0 py-3 px-5 gradient-brand font-display font-bold text-[0.7rem] tracking-[0.15em] uppercase text-primary-foreground">
              Powered by Cooler Master · Gamescom LATAM 2026
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
