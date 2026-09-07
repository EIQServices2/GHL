"use client";

import Image from "next/image";
import { useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import { Modal } from "@/elements/Modal";
import { ContactForm } from "@/components/ContactForm";

/**
 * CTA section: deep navy background (GHL #221A76), left-aligned text,
 * dashboard screenshot as <img> (80% width, centered), purple button.
 * Button opens a modal with the contact form (GHL openPopup behavior).
 */
export function TrialFormSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-pri-navy py-[60px]">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="text-left">
            <h2 className="text-sm font-normal uppercase leading-[2] tracking-[2px] text-pri-lavender">
              {t("rateChange.experienceFree")}
            </h2>
            <h3 className="mt-2 text-5xl font-bold leading-[1.2] tracking-[-1px] text-white">
              {t("rateChange.startMonitoring")}
            </h3>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="rounded-full bg-pri-purple px-5 py-4 text-sm font-bold uppercase tracking-[2px] text-white hover:bg-pri-purple/90"
            >
              {t("rateChange.cta")}
            </Button>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Image
            src="/images/dashboard-screenshot.png"
            alt="PowerRateIndex dashboard"
            width={3454}
            height={2423}
            className="h-auto w-[80%]"
          />
        </div>
      </Container>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ContactForm onSubmitted={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
