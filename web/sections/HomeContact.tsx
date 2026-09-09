import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import { ContactForm } from "@/components/ContactForm";

// Contact form section: heading + shared ContactForm.
export function HomeContact() {
  return (
    <section id="contact" className="w-full bg-pri-bg-light py-12">
      <Container size="form" className="text-center">
        <h2 className="text-2xl font-bold text-pri-ink md:text-3xl">
          {t("HomeContact.Title")}
        </h2>
        <p className="mt-3 text-[15px] text-pri-ink-muted">
          {t("HomeContact.Subtitle")}
        </p>

        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm md:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
