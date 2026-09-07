import { t } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";

/**
 * Contact form section: heading + shared ContactForm.
 * Matches powerrateindex.org contact section.
 */
export function HomeContact() {
  return (
    <section className="w-full bg-[#F2F7FA] py-12">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold text-[#121f27] md:text-3xl">
          {t("home.contactTitle")}
        </h2>
        <p className="mt-3 text-[15px] text-[#666]">
          {t("home.contactSubtitle")}
        </p>

        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
