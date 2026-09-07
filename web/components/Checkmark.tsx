import { Check } from "lucide-react";

export interface CheckmarkProps {
  className?: string;
}

/**
 * Customizable checkmark (replaces ✅ emoji — emojis aren't style-controllable).
 * Uses the --pri-blue token color.
 */
export function Checkmark({ className }: CheckmarkProps) {
  return (
    <Check
      className={className ?? "h-5 w-5 text-pri-blue"}
      strokeWidth={3}
      aria-hidden
    />
  );
}
