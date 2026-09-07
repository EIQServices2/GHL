import Image from "next/image";
import Link from "next/link";

/**
 * Header/nav section: white background (90% opacity), subtle shadow, logo
 * left-aligned (clickable → home). Matches GHL section-LzHRYt-Xvw.
 */
export function HeaderSection() {
  return (
    <header className="w-full bg-pri-header py-4 shadow-[0_1px_3px_0_#03004717]">
      <div className="mx-auto flex min-h-[64px] max-w-3xl items-center px-6">
        <Link href="/" aria-label="Power Rate Index home">
          <Image
            src="/images/logo-powerrateindex.png"
            alt="Power Rate Index"
            width={1406}
            height={174}
            className="h-12 w-auto min-w-[120px]"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
