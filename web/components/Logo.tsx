import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-powerrateindex.png"
      alt="Power Rate Index"
      width={1406}
      height={174}
      className={className ?? "h-10 w-auto"}
      priority
    />
  );
}
