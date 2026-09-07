import * as React from "react";
import NextLink from "next/link";

import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

/**
 * Atomic link element. Internal hrefs ("/...") render via next/link (client
 * navigation); external hrefs ("http...") render a plain <a>. Consistent
 * focus/underline styling. Use for all navigation.
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, ...props }, ref) => {
    const cls = cn(
      "text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      className
    );
    if (/^https?:\/\//.test(href)) {
      return <a ref={ref} href={href} className={cls} {...props} />;
    }
    return <NextLink ref={ref} href={href} className={cls} {...props} />;
  }
);
Link.displayName = "Link";

export { Link };
