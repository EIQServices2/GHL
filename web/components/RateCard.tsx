import { cn } from "@/lib/utils";

export interface RateCardProps {
  label: string;
  value: string;
  variant?: "default" | "current";
}

/**
 * Reusable rate display card. `current` variant highlights with purple
 * border + purple text (GHL #624BFF). Numbers 44px fw700.
 */
export function RateCard({ label, value, variant = "default" }: RateCardProps) {
  const isCurrent = variant === "current";
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6 text-center",
        isCurrent ? "border-pri-purple" : "border-border"
      )}
    >
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
