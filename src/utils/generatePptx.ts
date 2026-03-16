import PptxGenJS from "pptxgenjs";

const DARK_BG = "06061A";
const CARD_BG = "111128";
const WHITE = "FFFFFF";
const BLUE = "0066FF";
const LIGHT_BLUE = "4DA3FF";
const VIOLET = "7C3AED";
const LIGHT_VIOLET = "B47AFF";
const GRAY = "8A8AA0";
const GOLD = "FFD100";

function addGradientBar(slide: PptxGenJS.Slide) {
  slide.addShape("rect", {
    x: 0, y: 0, w: "100%", h: 0.04,
    fill: { type: "solid", color: BLUE },
  });
}

function addFooter(slide: PptxGenJS.Slide) {
  slide.addText("Cooler Master × Nuuvem · Confidencial", {
    x: 0.5, y: 7.0, w: 9, h: 0.3,
    fontSize: 8, color: GRAY, fontFace: "Arial",
  });
}

export async function generatePptx() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Nuuvem";
  pptx.title = "Cooler Master × Nuuvem — Gamescom LATAM 2026";

  // --- SLIDE 1: HERO ---
  const s1 = pptx.addSlide();
  s1.background = { color: DARK_BG };
  addGradientBar(s1);
  s1.addText([
    { text: "COOLER MASTER", options: { fontSize: 44, color: LIGHT_BLUE, bold: true, fontFace: "Arial" } },
    { text: " × ", options: { fontSize: 44, color: LIGHT_VIOLET, italic: true, fontFace: "Arial" } },
    { text: "NUUVEM", options: { fontSize: 44, color: WHITE, bold: true, fontFace: "Arial" } },
  ], { x: 0.8, y: 1.8, w: 8, h: 1.5 });
  s1.addText("A Nuuvem convida a Cooler Master para dominar a Gamescom LATAM 2026 — hardware premium, audiência massiva e conversão real.", {
    x: 0.8, y: 3.5, w: 5.5, h: 1, fontSize: 14, color: GRAY, fontFace: "Arial", lineSpacing: 22,
  });
  s1.addText("Gamescom LATAM 2026", {
    x: 0.8, y: 1.2, w: 4, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial",
  });
  s1.addText("30 ABR – 04 MAI 2026\nSão Paulo Expo · São Paulo, BR", {
    x: 6.5, y: 6.0, w: 3, h: 0.7, fontSize: 10, color: GRAY, fontFace: "Arial", align: "right",
  });
  addFooter(s1);

  // --- SLIDE 2: TICKER / KEY NUMBERS ---
  const s2 = pptx.addSlide();
  s2.background = { color: DARK_BG };
  addGradientBar(s2);
  s2.addText("NÚMEROS-CHAVE", {
    x: 0.8, y: 0.8, w: 8, h: 0.6, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial",
  });
  const tickerItems = [
    { num: "200K+", label: "Visitantes esperados" },
    { num: "100m²", label: "Stand Nuuvem" },
    { num: "5", label: "Dias de evento" },
    { num: "330+", label: "Creators parceiros" },
    { num: "67M", label: "Reach anual" },
    { num: "#1", label: "Evento LATAM" },
  ];
  tickerItems.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.8 + col * 2.8;
    const y = 2.0 + row * 2.2;
    s2.addShape("rect", { x, y, w: 2.4, h: 1.8, fill: { type: "solid", color: CARD_BG } });
    s2.addText(item.num, { x, y: y + 0.3, w: 2.4, h: 0.7, fontSize: 32, color: LIGHT_BLUE, bold: true, fontFace: "Arial", align: "center" });
    s2.addText(item.label, { x, y: y + 1.0, w: 2.4, h: 0.5, fontSize: 10, color: GRAY, fontFace: "Arial", align: "center" });
  });
  addFooter(s2);

  // --- SLIDE 3: O MERCADO ---
  const s3 = pptx.addSlide();
  s3.background = { color: DARK_BG };
  addGradientBar(s3);
  s3.addText("O MERCADO", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s3.addText("O GAMING LATAM\nESTÁ EXPLODINDO.", {
    x: 0.8, y: 1.0, w: 4.5, h: 1.2, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  s3.addText("850 milhões de gamers em mercados emergentes. O LATAM lidera o crescimento — e o gamer latino compra 2.5× mais que a média do e-commerce.", {
    x: 0.8, y: 2.4, w: 4.5, h: 1, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });
  const marketStats = [
    { num: "850M+", label: "Gamers em mercados emergentes" },
    { num: "45M", label: "Players mensais Nuuvem" },
    { num: "3.1M", label: "Unidades vendidas LATAM 2024" },
    { num: "#1", label: "Ecossistema gaming da LATAM" },
  ];
  marketStats.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 5.8 + col * 2.2;
    const y = 1.5 + row * 2.2;
    s3.addShape("rect", { x, y, w: 2.0, h: 1.8, fill: { type: "solid", color: CARD_BG } });
    s3.addText(s.num, { x, y: y + 0.3, w: 2.0, h: 0.6, fontSize: 28, color: LIGHT_BLUE, bold: true, fontFace: "Arial", align: "center" });
    s3.addText(s.label, { x, y: y + 0.9, w: 2.0, h: 0.5, fontSize: 9, color: GRAY, fontFace: "Arial", align: "center" });
  });
  addFooter(s3);

  // --- SLIDE 4: O STAND ---
  const s4 = pptx.addSlide();
  s4.background = { color: DARK_BG };
  addGradientBar(s4);
  s4.addText("O STAND NUUVEM", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s4.addText('100m² · "BRING TOGETHER"', {
    x: 0.8, y: 1.0, w: 8, h: 0.8, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial",
  });
  s4.addText("Um ecossistema físico em dois mundos: arena de alta circulação no ground floor e lounge VIP exclusivo no mezzanine.", {
    x: 0.8, y: 1.9, w: 8, h: 0.6, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });

  // Zone cards
  const zones = [
    { tag: "Ground Floor · Alta Circulação", name: "NUUVEM ARENA", desc: "8 PCs gaming powered by Cooler Master, torneios ao vivo, meet & greet com creators e experiências de hardware hands-on." },
    { tag: "Mezzanine · Acesso Exclusivo", name: "CLOUD LOUNGE", desc: "Espaço VIP para creators, imprensa e parceiros estratégicos. Networking, content studio e showcase privado de produtos." },
  ];
  zones.forEach((z, i) => {
    const x = 0.8 + i * 4.5;
    s4.addShape("rect", { x, y: 3.2, w: 4.0, h: 3.2, fill: { type: "solid", color: CARD_BG } });
    s4.addShape("rect", { x, y: 3.2, w: 4.0, h: 0.35, fill: { type: "solid", color: BLUE } });
    s4.addText(z.tag, { x, y: 3.2, w: 4.0, h: 0.35, fontSize: 8, color: WHITE, bold: true, fontFace: "Arial", align: "center" });
    s4.addText(z.name, { x: x + 0.3, y: 3.8, w: 3.4, h: 0.5, fontSize: 20, color: WHITE, bold: true, fontFace: "Arial" });
    s4.addText(z.desc, { x: x + 0.3, y: 4.4, w: 3.4, h: 1.5, fontSize: 11, color: GRAY, fontFace: "Arial", lineSpacing: 18 });
  });
  addFooter(s4);

  // --- SLIDE 5: POR QUE COOLER MASTER ---
  const s5 = pptx.addSlide();
  s5.background = { color: DARK_BG };
  addGradientBar(s5);
  s5.addText("POR QUE COOLER MASTER", { x: 0.8, y: 0.4, w: 5, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s5.addText("HARDWARE EM USO REAL.\nAUDIÊNCIA QUE COMPRA.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 26, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 32,
  });
  const whyItems = [
    { num: "01", title: "Hardware em uso real", desc: 'Branding em cada PC, monitor e ilha de jogo. "Powered by Cooler Master" visto e sentido por 200K+ gamers.' },
    { num: "02", title: "Audiência ultra-qualificada", desc: "O visitante da Gamescom LATAM tem 2.5× maior intenção de compra de hardware premium." },
    { num: "03", title: "Acesso direto a influencers", desc: "330+ criadores parceiros. O Cloud Lounge é onde os maiores nomes do gaming criam conteúdo." },
    { num: "04", title: "ALCANCE DIGITAL MASSIVO - NUUVEM", desc: "67M de reach anual, 35M em redes sociais, parceira e cobertura de 100+ veículos tier-1." },
  ];
  whyItems.forEach((item, i) => {
    const y = 2.3 + i * 1.15;
    s5.addShape("rect", { x: 0.8, y, w: 8.4, h: 1.0, fill: { type: "solid", color: CARD_BG } });
    s5.addText(item.num, { x: 1.0, y, w: 0.6, h: 1.0, fontSize: 20, color: BLUE, bold: true, fontFace: "Arial", valign: "middle" });
    s5.addText(item.title, { x: 1.7, y, w: 3, h: 0.5, fontSize: 12, color: WHITE, bold: true, fontFace: "Arial", valign: "bottom" });
    s5.addText(item.desc, { x: 1.7, y: y + 0.45, w: 7.2, h: 0.5, fontSize: 10, color: GRAY, fontFace: "Arial", valign: "top" });
  });
  addFooter(s5);

  // --- SLIDE 6: COTAS DE PATROCÍNIO ---
  const s6 = pptx.addSlide();
  s6.background = { color: DARK_BG };
  addGradientBar(s6);
  s6.addText("COTAS DE PATROCÍNIO", { x: 0.8, y: 0.4, w: 5, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s6.addText("ESCOLHA SEU NÍVEL\nDE DOMÍNIO.", {
    x: 0.8, y: 0.9, w: 8, h: 0.9, fontSize: 26, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 32,
  });

  const tiers = [
    {
      badge: "Epic Sponsor", name: "EPIC", sub: "COTA EXCLUSIVA · 1 MARCA - $75.000,00", color: GOLD,
      items: ["Naming rights: 'Nuuvem Lounge powered by Cooler Master'", "Logo em TODOS os 8 PCs, monitores, periféricos e backdrop", "Exclusividade de categoria hardware", "Produto showcase dedicado no Cloud Lounge VIP", "8 convites VIP + 10 visitante", "Campanha digital co-branded", "Relatório completo pós-evento"],
    },
    {
      badge: "Partner", name: "PARTNER", sub: "ATÉ 2 MARCAS - $45.000,00", color: BLUE,
      items: ["Branding em 6 PCs gaming + periféricos selecionados", "Logo no backdrop principal e materiais do stand", "Acesso ao Cloud Lounge", "1 sessão com creators parceiros", "Menções em campanhas digitais", "Relatório pós-evento"],
    },
    {
      badge: "Standard", name: "STANDARD", sub: "ATÉ 4 MARCAS - $15.000,00", color: GRAY,
      items: ["Logo em materiais do stand e backdrop secundário", "Produto showcase em área designada", "Menção em campanhas digitais selecionadas", "3 convite VIP para o evento", "Relatório resumido pós-evento"],
    },
  ];

  tiers.forEach((tier, i) => {
    const x = 0.5 + i * 3.2;
    s6.addShape("rect", { x, y: 2.2, w: 3.0, h: 5.0, fill: { type: "solid", color: CARD_BG } });
    s6.addShape("rect", { x, y: 2.2, w: 3.0, h: 0.04, fill: { type: "solid", color: tier.color } });
    s6.addText(tier.badge, { x: x + 0.2, y: 2.4, w: 2.0, h: 0.3, fontSize: 8, color: tier.color, bold: true, fontFace: "Arial" });
    s6.addText(tier.name, { x: x + 0.2, y: 2.8, w: 2.5, h: 0.5, fontSize: 22, color: WHITE, bold: true, fontFace: "Arial" });
    s6.addText(tier.sub, { x: x + 0.2, y: 3.3, w: 2.5, h: 0.3, fontSize: 8, color: GRAY, fontFace: "Arial" });

    tier.items.forEach((item, j) => {
      s6.addText(`▸ ${item}`, {
        x: x + 0.2, y: 3.8 + j * 0.42, w: 2.6, h: 0.4,
        fontSize: 9, color: GRAY, fontFace: "Arial", valign: "top",
      });
    });
  });
  addFooter(s6);

  // --- SLIDE 7: TRACK RECORD ---
  const s7 = pptx.addSlide();
  s7.background = { color: DARK_BG };
  addGradientBar(s7);
  s7.addText("TRACK RECORD", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s7.addText("A NUUVEM JÁ PROVOU\nQUE SABE FAZER.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  const proofStats = [
    { num: "200K+", label: "Visitantes presenciais no último evento" },
    { num: "67M", label: "Impressões digitais anuais" },
    { num: "330+", label: "Creators parceiros ativos" },
    { num: "100%", label: "Taxa de satisfação de patrocinadores" },
  ];
  proofStats.forEach((s, i) => {
    const x = 0.8 + i * 2.3;
    s7.addShape("rect", { x, y: 3.0, w: 2.1, h: 2.0, fill: { type: "solid", color: CARD_BG } });
    s7.addShape("rect", { x, y: 3.0, w: 2.1, h: 0.04, fill: { type: "solid", color: BLUE } });
    s7.addText(s.num, { x, y: 3.3, w: 2.1, h: 0.7, fontSize: 32, color: WHITE, bold: true, fontFace: "Arial", align: "center" });
    s7.addText(s.label, { x, y: 4.1, w: 2.1, h: 0.7, fontSize: 9, color: GRAY, fontFace: "Arial", align: "center" });
  });
  addFooter(s7);

  // --- SLIDE 8: A NUUVEM ---
  const s8 = pptx.addSlide();
  s8.background = { color: DARK_BG };
  addGradientBar(s8);
  s8.addText("A NUUVEM", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s8.addText("O ECOSSISTEMA GAMING\n#1 DA AMÉRICA LATINA.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  s8.addText("Mais que uma store. A Nuuvem é o hub que conecta marcas, creators e gamers em uma comunidade que joga, compra e influencia.", {
    x: 0.8, y: 2.2, w: 7, h: 0.7, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });
  const nuuvemMetrics = [
    { value: "45M+", label: "Gamers mensais" },
    { value: "12M+", label: "Transações/ano" },
    { value: "#1", label: "Store gaming LATAM" },
    { value: "330+", label: "Creators parceiros" },
    { value: "67M", label: "Reach anual" },
    { value: "35M", label: "Social reach" },
  ];
  nuuvemMetrics.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.8 + col * 2.8;
    const y = 3.5 + row * 2.0;
    s8.addShape("rect", { x, y, w: 2.5, h: 1.6, fill: { type: "solid", color: CARD_BG } });
    s8.addText(m.value, { x, y: y + 0.2, w: 2.5, h: 0.7, fontSize: 30, color: WHITE, bold: true, fontFace: "Arial", align: "center" });
    s8.addText(m.label, { x, y: y + 0.9, w: 2.5, h: 0.4, fontSize: 9, color: GRAY, fontFace: "Arial", align: "center" });
  });
  addFooter(s8);

  // --- SLIDE 9: CTA ---
  const s9 = pptx.addSlide();
  s9.background = { color: DARK_BG };
  s9.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { type: "solid", color: "0A1A3D" } });
  s9.addText("VAMOS\nJOGAR\nJUNTOS", {
    x: 1.5, y: 1.0, w: 7, h: 3.0, fontSize: 52, color: WHITE, bold: true, fontFace: "Arial", align: "center", lineSpacing: 58,
  });
  s9.addText("A Cooler Master merece o palco que a Nuuvem construiu.\nFale com a equipe de parcerias e garanta sua presença na Gamescom LATAM 2026.", {
    x: 1.5, y: 4.2, w: 7, h: 0.9, fontSize: 13, color: GRAY, fontFace: "Arial", align: "center", lineSpacing: 22,
  });
  s9.addShape("rect", { x: 3.5, y: 5.5, w: 3.0, h: 0.55, fill: { type: "solid", color: BLUE } });
  s9.addText("parcerias@nuuvem.com", {
    x: 3.5, y: 5.5, w: 3.0, h: 0.55, fontSize: 13, color: WHITE, bold: true, fontFace: "Arial", align: "center", valign: "middle",
  });
  const steps = [
    { num: "01", label: "Escolha sua cota" },
    { num: "02", label: "Alinhe o escopo" },
    { num: "03", label: "Domine o evento" },
  ];
  steps.forEach((s, i) => {
    const x = 2.0 + i * 2.2;
    s9.addText(s.num, { x, y: 6.3, w: 0.5, h: 0.4, fontSize: 18, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
    s9.addText(s.label, { x: x + 0.5, y: 6.3, w: 1.5, h: 0.4, fontSize: 10, color: GRAY, fontFace: "Arial" });
  });
  addFooter(s9);

  await pptx.writeFile({ fileName: "CoolerMaster_x_Nuuvem_Gamescom2026.pptx" });
}
