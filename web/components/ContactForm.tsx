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
        <p className="text-lg font-semibold text-[#121f27]">
          {t("home.formSuccess")}
        </p>
        <p className="mt-2 text-[15px] text-[#666]">
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
          <label className="mb-1 block text-sm text-[#666]">
            {t("home.formFirstName")}
          </label>
          <input
            type="text"
            required
            className="w-full rounded border border-[#e5e5e5] px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-[#666]">
            {t("home.formLastName")}
          </label>
          <input
            type="text"
            required
            className="w-full rounded border border-[#e5e5e5] px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-sm text-[#666]">
          {t("home.formCompany")}
        </label>
        <input
          type="text"
          className="w-full rounded border border-[#e5e5e5] px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-sm text-[#666]">
          {t("home.formEmail")}
        </label>
        <input
          type="email"
          required
          className="w-full rounded border border-[#e5e5e5] px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-sm text-[#666]">
          {t("home.formMessage")}
        </label>
        <textarea
          rows={4}
          className="w-full rounded border border-[#e5e5e5] px-3 py-2 text-sm"
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
