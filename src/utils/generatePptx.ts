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
  slide.addText("Cooler Master × Nuuvem · Confidential", {
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
  s1.addText("Nuuvem invites Cooler Master to dominate Gamescom LATAM 2026 — premium hardware, massive audience, and real conversions.", {
    x: 0.8, y: 3.5, w: 5.5, h: 1, fontSize: 14, color: GRAY, fontFace: "Arial", lineSpacing: 22,
  });
  s1.addText("Gamescom LATAM 2026", {
    x: 0.8, y: 1.2, w: 4, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial",
  });
  s1.addText("APR 30 – MAY 04, 2026\nSão Paulo Expo · São Paulo, BR", {
    x: 6.5, y: 6.0, w: 3, h: 0.7, fontSize: 10, color: GRAY, fontFace: "Arial", align: "right",
  });
  addFooter(s1);

  // --- SLIDE 2: TICKER / KEY NUMBERS ---
  const s2 = pptx.addSlide();
  s2.background = { color: DARK_BG };
  addGradientBar(s2);
  s2.addText("KEY NUMBERS", {
    x: 0.8, y: 0.8, w: 8, h: 0.6, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial",
  });
  const tickerItems = [
    { num: "200K+", label: "Expected visitors" },
    { num: "100m²", label: "Nuuvem Booth" },
    { num: "5", label: "Event days" },
    { num: "330+", label: "Partner creators" },
    { num: "67M", label: "Annual reach" },
    { num: "#1", label: "LATAM Event" },
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

  // --- SLIDE 3: THE MARKET ---
  const s3 = pptx.addSlide();
  s3.background = { color: DARK_BG };
  addGradientBar(s3);
  s3.addText("THE MARKET", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s3.addText("LATAM GAMING\nIS BOOMING.", {
    x: 0.8, y: 1.0, w: 4.5, h: 1.2, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  s3.addText("850 million gamers in emerging markets. LATAM leads the growth — and Latin American gamers spend 2.5× more than the average e-commerce buyer.", {
    x: 0.8, y: 2.4, w: 4.5, h: 1, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });
  const marketStats = [
    { num: "850M+", label: "Gamers in emerging markets" },
    { num: "45M", label: "Nuuvem monthly players" },
    { num: "3.1M", label: "Units sold LATAM 2024" },
    { num: "#1", label: "LATAM gaming ecosystem" },
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

  // --- SLIDE 4: THE BOOTH ---
  const s4 = pptx.addSlide();
  s4.background = { color: DARK_BG };
  addGradientBar(s4);
  s4.addText("THE NUUVEM BOOTH", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s4.addText('100m² · "BRING TOGETHER"', {
    x: 0.8, y: 1.0, w: 8, h: 0.8, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial",
  });
  s4.addText("A physical ecosystem in two worlds: a high-traffic arena on the ground floor and an exclusive VIP lounge on the mezzanine.", {
    x: 0.8, y: 1.9, w: 8, h: 0.6, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });

  const zones = [
    { tag: "Ground Floor · High Traffic", name: "NUUVEM ARENA", desc: "8 gaming PCs powered by Cooler Master, live tournaments, creator meet & greets, and hands-on hardware experiences." },
    { tag: "Mezzanine · Exclusive Access", name: "CLOUD LOUNGE", desc: "VIP space for creators, press, and strategic partners. Networking, content studio, and private product showcase." },
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

  // --- SLIDE 5: WHY COOLER MASTER ---
  const s5 = pptx.addSlide();
  s5.background = { color: DARK_BG };
  addGradientBar(s5);
  s5.addText("WHY COOLER MASTER", { x: 0.8, y: 0.4, w: 5, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s5.addText("REAL HARDWARE IN ACTION.\nAN AUDIENCE THAT BUYS.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 26, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 32,
  });
  const whyItems = [
    { num: "01", title: "Real hardware in action", desc: 'Branding on every PC, monitor, and gaming station. "Powered by Cooler Master" seen and felt by 200K+ gamers.' },
    { num: "02", title: "Ultra-qualified audience", desc: "Gamescom LATAM attendees have 2.5× higher purchase intent for premium hardware." },
    { num: "03", title: "Direct access to influencers", desc: "330+ partner creators. The Cloud Lounge is where the biggest names in gaming create content." },
    { num: "04", title: "MASSIVE DIGITAL REACH - NUUVEM", desc: "67M annual reach, 35M across social media, partnered with and covered by 100+ tier-1 outlets." },
  ];
  whyItems.forEach((item, i) => {
    const y = 2.3 + i * 1.15;
    s5.addShape("rect", { x: 0.8, y, w: 8.4, h: 1.0, fill: { type: "solid", color: CARD_BG } });
    s5.addText(item.num, { x: 1.0, y, w: 0.6, h: 1.0, fontSize: 20, color: BLUE, bold: true, fontFace: "Arial", valign: "middle" });
    s5.addText(item.title, { x: 1.7, y, w: 3, h: 0.5, fontSize: 12, color: WHITE, bold: true, fontFace: "Arial", valign: "bottom" });
    s5.addText(item.desc, { x: 1.7, y: y + 0.45, w: 7.2, h: 0.5, fontSize: 10, color: GRAY, fontFace: "Arial", valign: "top" });
  });
  addFooter(s5);

  // --- SLIDE 6: SPONSORSHIP TIERS ---
  const s6 = pptx.addSlide();
  s6.background = { color: DARK_BG };
  addGradientBar(s6);
  s6.addText("SPONSORSHIP TIERS", { x: 0.8, y: 0.4, w: 5, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s6.addText("CHOOSE YOUR LEVEL\nOF DOMINANCE.", {
    x: 0.8, y: 0.9, w: 8, h: 0.9, fontSize: 26, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 32,
  });

  const tiers = [
    {
      badge: "Epic Sponsor", name: "EPIC", sub: "EXCLUSIVE TIER · 1 BRAND - $75,000.00", color: GOLD,
      items: ["Naming rights: 'Nuuvem Lounge powered by Cooler Master'", "Logo on ALL 8 PCs, monitors, peripherals, and backdrop", "Hardware category exclusivity", "Dedicated product showcase in Cloud Lounge VIP", "8 VIP passes + 10 visitor passes", "Co-branded digital campaign", "Full post-event report"],
    },
    {
      badge: "Partner", name: "PARTNER", sub: "UP TO 2 BRANDS - $45,000.00", color: BLUE,
      items: ["Branding on 6 gaming PCs + selected peripherals",
 "Logo on main backdrop and booth materials", "Cloud Lounge access", "1 session with partner creators", "Mentions in digital campaigns", "Post-event report"],
    },
    {
      badge: "Standard", name: "STANDARD", sub: "UP TO 4 BRANDS - $15,000.00", color: GRAY,
      items: ["Logo on booth materials and secondary backdrop", "Product showcase in designated area", "Mention in selected digital campaigns", "3 VIP passes for the event", "Summary post-event report"],
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
  s7.addText("NUUVEM HAS PROVEN\nIT DELIVERS.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  const proofStats = [
    { num: "200K+", label: "In-person visitors at last event" },
    { num: "67M", label: "Annual digital impressions" },
    { num: "330+", label: "Active partner creators" },
    { num: "100%", label: "Sponsor satisfaction rate" },
  ];
  proofStats.forEach((s, i) => {
    const x = 0.8 + i * 2.3;
    s7.addShape("rect", { x, y: 3.0, w: 2.1, h: 2.0, fill: { type: "solid", color: CARD_BG } });
    s7.addShape("rect", { x, y: 3.0, w: 2.1, h: 0.04, fill: { type: "solid", color: BLUE } });
    s7.addText(s.num, { x, y: 3.3, w: 2.1, h: 0.7, fontSize: 32, color: WHITE, bold: true, fontFace: "Arial", align: "center" });
    s7.addText(s.label, { x, y: 4.1, w: 2.1, h: 0.7, fontSize: 9, color: GRAY, fontFace: "Arial", align: "center" });
  });
  addFooter(s7);

  // --- SLIDE 8: NUUVEM ---
  const s8 = pptx.addSlide();
  s8.background = { color: DARK_BG };
  addGradientBar(s8);
  s8.addText("NUUVEM", { x: 0.8, y: 0.4, w: 3, h: 0.4, fontSize: 11, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
  s8.addText("THE #1 GAMING\nECOSYSTEM IN LATIN AMERICA.", {
    x: 0.8, y: 1.0, w: 8, h: 1.0, fontSize: 28, color: WHITE, bold: true, fontFace: "Arial", lineSpacing: 34,
  });
  s8.addText("More than a store. Nuuvem is the hub connecting brands, creators, and gamers in a community that plays, buys, and influences.", {
    x: 0.8, y: 2.2, w: 7, h: 0.7, fontSize: 12, color: GRAY, fontFace: "Arial", lineSpacing: 20,
  });
  const nuuvemMetrics = [
    { value: "45M+", label: "Monthly gamers" },
    { value: "12M+", label: "Transactions/year" },
    { value: "#1", label: "LATAM gaming store" },
    { value: "330+", label: "Partner creators" },
    { value: "67M", label: "Annual reach" },
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
  s9.addText("LET'S\nPLAY\nTOGETHER", {
    x: 1.5, y: 1.0, w: 7, h: 3.0, fontSize: 52, color: WHITE, bold: true, fontFace: "Arial", align: "center", lineSpacing: 58,
  });
  s9.addText("Cooler Master deserves the stage Nuuvem has built.\nTalk to our partnerships team and secure your presence at Gamescom LATAM 2026.", {
    x: 1.5, y: 4.2, w: 7, h: 0.9, fontSize: 13, color: GRAY, fontFace: "Arial", align: "center", lineSpacing: 22,
  });
  s9.addShape("rect", { x: 3.5, y: 5.5, w: 3.0, h: 0.55, fill: { type: "solid", color: BLUE } });
  s9.addText("partnerships@nuuvem.com", {
    x: 3.5, y: 5.5, w: 3.0, h: 0.55, fontSize: 13, color: WHITE, bold: true, fontFace: "Arial", align: "center", valign: "middle",
  });
  const steps = [
    { num: "01", label: "Choose your tier" },
    { num: "02", label: "Align the scope" },
    { num: "03", label: "Dominate the event" },
  ];
  steps.forEach((s, i) => {
    const x = 2.0 + i * 2.2;
    s9.addText(s.num, { x, y: 6.3, w: 0.5, h: 0.4, fontSize: 18, color: LIGHT_BLUE, bold: true, fontFace: "Arial" });
    s9.addText(s.label, { x: x + 0.5, y: 6.3, w: 1.5, h: 0.4, fontSize: 10, color: GRAY, fontFace: "Arial" });
  });
  addFooter(s9);

  await pptx.writeFile({ fileName: "CoolerMaster_x_Nuuvem_Gamescom2026.pptx" });
}
