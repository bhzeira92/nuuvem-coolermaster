export const TickerSection = () => {
  const items = [
    { num: "200K+", label: "Visitantes esperados" },
    { num: "100m²", label: "Stand Nuuvem" },
    { num: "5", label: "Dias de evento" },
    { num: "330+", label: "Creators parceiros" },
    { num: "67M", label: "Reach anual" },
    { num: "#1", label: "Evento LATAM" },
  ];

  const doubled = [...items, ...items];

  return (
    <div className="border-t border-b border-border bg-panel overflow-hidden py-3">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-9 border-r border-border whitespace-nowrap">
            <span className="font-display font-black text-base text-nb3">{item.num}</span>
            <span className="font-display font-semibold text-[0.7rem] tracking-[0.1em] uppercase text-dim">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
