import Image from "next/image";
import { Link } from "@/elements/Link";

export interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Reusable logo. Renders the <Image>; wraps in a Link when `href` is set.
 * Centralizes logo markup (used by header, home header, footer).
 */
export function Logo({
  src,
  alt = "Power Rate Index",
  className = "h-10 w-auto",
  href,
  width = 180,
  height = 30,
  priority = false,
}: LogoProps) {
  const img = (
    <Image
      src={src}
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
