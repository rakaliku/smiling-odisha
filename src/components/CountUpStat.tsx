import { useCountUp } from "@/hooks/useCountUp";

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const CountUpStat = ({ end, suffix = "", prefix = "", label, duration = 2000 }: CountUpStatProps) => {
  const { ref, display } = useCountUp({ end, suffix, prefix, duration });

  return (
    <div ref={ref}>
      <div className="font-display text-2xl md:text-4xl font-bold text-gradient">{display}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default CountUpStat;
