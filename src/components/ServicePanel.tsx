import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

interface ServicePoint {
  lead: string;
  detail: string;
}
interface Props {
  panelIndex: number;
  name: string;
  tagline: string;
  points: ServicePoint[];
}

export function ServicePanel({ panelIndex, name, tagline, points }: Props) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isObserving, setIsObserving] = useState(false);
  const [pinEnabled, setPinEnabled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopOk = window.matchMedia("(min-width: 1024px)").matches;
    setPinEnabled(motionOk && desktopOk);
    if (!motionOk || !desktopOk) return;
    setIsObserving(true);
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveCard(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const n = String(panelIndex).padStart(2, "0");
  const isTwoCard = points.length <= 2;

  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-24">
      <div className={cn("space-y-6", pinEnabled && "lg:sticky lg:top-36 lg:self-start")}>
        <div className="flex items-center gap-4">
          <span className="font-display text-sm text-accent-hover">{n}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-tight">{name}</h2>
        <p className="text-lg italic leading-relaxed text-text-muted">{tagline}</p>
      </div>
      <div className={cn("flex flex-col lg:pt-2", isTwoCard ? "gap-10 lg:gap-12 pb-16 lg:pb-20" : "gap-5")}>
        {points.map((point, i) => {
          const isHovered = hoveredCard === i;
          const isActive = isHovered || (isObserving && activeCard === i);
          const isInactive = !isHovered && isObserving && activeCard !== null && activeCard !== i;
          return (
            <div key={i}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "rounded-2xl border bg-surface-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isTwoCard ? "p-9 lg:p-12" : "p-7 lg:p-8",
                  isActive ? "border-accent" : "border-border",
                  isInactive && "opacity-40"
                )}
              >
                <p className="mb-3 font-display text-sm text-accent-hover">{String(i + 1).padStart(2, "0")}</p>
                <h3 className={cn("font-display font-medium leading-tight tracking-tight text-text-primary", isTwoCard ? "text-2xl md:text-3xl" : "text-xl md:text-2xl")}>
                  {point.lead}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
