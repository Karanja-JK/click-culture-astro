import { useCountUp } from "@/hooks/use-count-up";

export function StatBlock({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div data-reveal className="flex flex-col gap-4">
      <span
        ref={ref as never}
        className="font-display text-[clamp(3.5rem,8vw,6rem)] font-medium leading-none tracking-tight text-text-primary"
      >
        {prefix}
        {decimals ? v.toFixed(decimals) : Math.round(v)}
        <span className="text-accent-hover">{suffix}</span>
      </span>
      <span className="text-sm uppercase tracking-[0.18em] text-text-muted">{label}</span>
    </div>
  );
}
