import Image from "next/image";
import { Link } from "@/elements/Link";

export interface LogoProps {
  alt?: string;
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// Reusable logo (single source: /images/logo-powerrateindex.png).
export function Logo({
  alt = "Power Rate Index",
  className = "h-10 w-auto",
  href,
  width = 1406,
  height = 174,
  priority = false,
}: LogoProps) {
  const img = (
    <Image
      src="/images/logo-powerrateindex.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link href={href} aria-label={alt} className="inline-block">
        {img}
      </Link>
    );
  }
  return img;
}
