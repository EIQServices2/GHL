"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";

export interface ContactFormProps {
  onSubmitted?: () => void;
}

/**
 * Reusable contact/lead form: First/Last Name, Company, Email, Message.
 * Placeholder submit — wire endpoint later.
 */
export function ContactForm({ onSubmitted }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-pri-ink">
          {t("home.formSuccess")}
        </p>
        <p className="mt-2 text-[15px] text-pri-ink-muted">
          {t("home.formSuccessBody")}
        </p>
      </div>
    );
  }

  return (
    <form
      className="text-left"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        onSubmitted?.();
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className="mb-1 block text-sm text-pri-ink-muted">
            {t("home.formFirstName")}
          </label>
          <input
            id="contact-first-name"
            type="text"
            required
            className="w-full rounded border border-pri-border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className="mb-1 block text-sm text-pri-ink-muted">
            {t("home.formLastName")}
          </label>
          <input
            id="contact-last-name"
            type="text"
            required
            className="w-full rounded border border-pri-border px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="contact-company" className="mb-1 block text-sm text-pri-ink-muted">
          {t("home.formCompany")}
        </label>
        <input
          id="contact-company"
          type="text"
          className="w-full rounded border border-pri-border px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="contact-email" className="mb-1 block text-sm text-pri-ink-muted">
          {t("home.formEmail")}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          className="w-full rounded border border-pri-border px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1 block text-sm text-pri-ink-muted">
          {t("home.formMessage")}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className="w-full rounded border border-pri-border px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full cursor-pointer rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white sm:w-auto"
      >
        {t("home.formSubmit")}
      </button>
    </form>
  );
}
