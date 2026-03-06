import { Reveal, Eyebrow, SectionHeading, SectionParagraph } from "./ui-landing";
import standImg from "@/assets/stand-overview.jpg";
import arenaImg from "@/assets/zone-arena.jpg";
import loungeImg from "@/assets/zone-lounge.jpg";

const zones = [
{
  tag: "Ground Floor · Alta Circulação",
  name: "NUUVEM ARENA",
  desc: "16 PCs gaming powered by Cooler Master, torneios ao vivo, meet & greet com creators e experiências de hardware hands-on.",
  img: arenaImg
},
{
  tag: "Mezzanine · Acesso Exclusivo",
  name: "CLOUD LOUNGE",
  desc: "Espaço VIP para creators, imprensa e parceiros estratégicos. Networking, content studio e showcase privado de produtos.",
  img: loungeImg
}];


export const StandSection = () =>
<section id="stand" className="bg-background">
    <div className="max-w-[1200px] mx-auto px-[4vw] pt-[6.5rem] pb-16 rounded-none">
      <Reveal>
        <Eyebrow>O Stand Nuuvem</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <SectionHeading>100m² · "BRING TOGETHER"</SectionHeading>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionParagraph>
          Um ecossistema físico em dois mundos: arena de alta circulação no ground floor e lounge VIP exclusivo no mezzanine.
        </SectionParagraph>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative w-full aspect-[21/8] overflow-hidden mt-10 mb-14">
          <img src={standImg} alt="Stand Nuuvem overview" className="w-full h-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {zones.map((z, i) =>
      <Reveal key={i} delay={i * 0.08}>
            <div className="group bg-card border border-border overflow-hidden hover:border-border-bright transition-colors">
              <div className="aspect-video overflow-hidden">
                <img
              src={z.img}
              alt={z.name}
              className="w-full h-full object-cover transition-transform duration-500 saturate-[0.88] group-hover:scale-[1.04] group-hover:saturate-100" />
            
              </div>
              <div className="py-2 px-4 gradient-brand font-display font-bold text-[0.68rem] tracking-[0.18em] uppercase text-primary-foreground">
                {z.tag}
              </div>
              <div className="p-5 pb-7">
                <div className="font-display font-black text-[1.45rem] uppercase text-primary-foreground mb-2">
                  {z.name}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{z.desc}</div>
              </div>
            </div>
          </Reveal>
      )}
      </div>
    </div>
  </section>;