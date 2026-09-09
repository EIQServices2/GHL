import { Logo } from "@/components/Logo";
import { Button } from "@/elements/Button";
import { Link } from "@/elements/Link";
import { Container } from "@/elements/Container";
import { t } from "@/lib/i18n";

// Common header: logo (→ home) + Login (→ /login).
export function Header() {
  return (
    <header className="w-full bg-white py-3">
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
          className="shrink-0 rounded bg-pri-purple px-4 py-2 text-sm font-semibold text-white hover:bg-pri-purple/90 md:px-5"
        >
          <Link href="/login">{t("Header.Login")}</Link>
        </Button>
      </Container>
    </header>
  );
}
