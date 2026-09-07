import Image from "next/image";

/**
 * Header/nav section: white background (90% opacity), subtle shadow, logo
 * left-aligned at 16% width. Matches GHL section-LzHRYt-Xvw.
 */
export function HeaderSection() {
  return (
    <header className="w-full bg-pri-header py-2.5 shadow-[0_1px_3px_0_#03004717]">
      <div className="mx-auto max-w-3xl px-6">
        <Image
          src="/images/logo-powerrateindex.png"
          alt="Power Rate Index"
          width={1406}
          height={174}
          className="h-auto w-[16%] min-w-[120px]"
          priority
        />
      </div>
    </header>
  );
}
