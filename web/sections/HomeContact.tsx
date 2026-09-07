import { t } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";

/**
 * Contact form section: heading + shared ContactForm.
 * Matches powerrateindex.org contact section.
 */
export function HomeContact() {
  return (
    <section id="contact" className="w-full bg-pri-bg-light py-12">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold text-pri-ink md:text-3xl">
          {t("home.contactTitle")}
        </h2>
        <p className="mt-3 text-[15px] text-pri-ink-muted">
          {t("home.contactSubtitle")}
        </p>

        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
