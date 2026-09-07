import { Logo } from "@/components/Logo";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import { t } from "@/lib/i18n";

/**
 * Common header (shared across all pages): logo left (clickable → home) +
 * purple "Login" button right. Matches powerrateindex.org header.
 */
export function Header() {
  return (
    <header className="w-full bg-white py-3">
      <Container className="flex min-h-[64px] items-center justify-between">
        <Logo
          href="/"
          width={1406}
          height={174}
          className="h-12 w-auto min-w-[120px]"
          priority
        />
        <Button className="rounded bg-pri-purple px-5 py-2 text-sm font-semibold text-white hover:bg-pri-purple/90">
          {t("home.login")}
        </Button>
      </Container>
    </header>
  );
}
