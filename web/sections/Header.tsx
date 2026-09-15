import { Logo } from "@/components/Logo";
import { Button } from "@/elements/Button";
import { Link } from "@/elements/Link";
import { Container } from "@/elements/Container";
import { t } from "@/lib/i18n";

// Home header (powerrateindex.org): compact, 1px bottom border #e9ebec.
export function Header() {
  return (
    <header className="w-full border-b border-pri-org-header-border bg-white py-3">
      <Container className="flex min-h-[56px] items-center justify-between gap-3 md:min-h-[64px]">
        <Logo
          href="/"
          width={1406}
          height={174}
          className="h-9 w-auto min-w-[96px] md:h-12 md:min-w-[120px]"
          priority
        />
        <Button
          asChild
          className="shrink-0 rounded bg-pri-org-accent px-4 py-2 text-sm font-semibold text-white hover:bg-pri-org-accent/90 md:px-5"
        >
          <Link href="/login">{t("Header.Login")}</Link>
        </Button>
      </Container>
    </header>
  );
}

// Inner pages header (GHL eiqdigital.info): shadow bar, 10px 0 padding, logo scales with width, no fixed height.
export function GhlHeader() {
  return (
    <header className="w-full bg-white py-[10px] shadow-[0_1px_3px_0_rgba(3,0,71,0.09)]">
      <Container className="flex items-center">
        <Logo
          href="/"
          width={1406}
          height={174}
          className="h-[24px] w-auto"
          priority
        />
      </Container>
    </header>
  );
}