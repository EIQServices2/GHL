import * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

/**
 * Atomic link element. Renders an <a> (or a Slot child) with consistent
 * focus/underline styling. Use for all internal/external navigation.
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "a";
    return (
      <Comp
        ref={ref}
        className={cn(
          "text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link };
