import { cn } from "@/lib/utils";

export interface RateCardProps {
  label: string;
  value: string;
  variant?: "default" | "current";
}

// Rate display (unboxed comparison); `current` variant = purple text.
export function RateCard({ label, value, variant = "default" }: RateCardProps) {
  const isCurrent = variant === "current";
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-pri-muted">{label}</p>
      <p
        className={cn(
          "mt-2 text-3xl font-bold leading-tight md:text-[44px]",
          isCurrent ? "text-pri-purple" : "text-pri-footer-text"
        )}
      >
        {value}
      </p>
    </div>
  );
}
