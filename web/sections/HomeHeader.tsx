import Image from "next/image";
import Link from "next/link";
import { t } from "@/lib/i18n";

/**
 * Home header: logo left (clickable → home) + purple "Login" button right.
 * Matches powerrateindex.org header.
 */
export function HomeHeader() {
  return (
    <header className="w-full bg-white py-3">
      <div className="mx-auto flex min-h-[64px] max-w-[1440px] items-center justify-between px-4">
        <Link href="/" aria-label="Power Rate Index home">
          <Image
            src="/images/logo-dark.png"
            alt="Power Rate Index"
            width={180}
            height={30}
            className="h-[30px] w-auto"
          />
        </Link>
        <button className="cursor-pointer rounded bg-pri-purple px-5 py-2 text-sm font-semibold text-white">
          {t("home.login")}
        </button>
      </div>
    </header>
  );
}
