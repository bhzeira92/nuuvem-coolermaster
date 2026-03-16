import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";
import proofImg from "@/assets/proof-3.jpg";

const items = [
  { num: "01", title: "Real hardware in action", desc: 'Branding on every PC, monitor, and gaming station. "Powered by Cooler Master" seen and felt by 200K+ gamers who play and buy.' },
  { num: "02", title: "Ultra-qualified audience", desc: "Gamescom LATAM attendees have 2.5× higher purchase intent for premium hardware than the average e-commerce buyer." },
  { num: "03", title: "Direct access to influencers", desc: "330+ partner creators. The Cloud Lounge is where the biggest names in gaming create content organically." },
  { num: "04", title: "MASSIVE DIGITAL REACH - NUUVEM", desc: "67M annual reach, 35M across social media, partnered with and covered by 100+ tier-1 outlets." },
];

export const WhySection = () => (
  <section id="why" className="bg-ink">
    <div className="max-w-[1200px] mx-auto px-[4vw] py-[6.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-start">
        <div>
          <Reveal><Eyebrow>Why Cooler Master</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>REAL HARDWARE IN ACTION.<br />AN AUDIENCE THAT BUYS.</SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionParagraph>
              This isn't a banner on a website. It's your brand in the hands of performance enthusiasts — for 4 intense days at Latin America's largest gaming event.
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
