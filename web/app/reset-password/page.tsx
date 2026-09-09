"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import { Link } from "@/elements/Link";

// Reset password page (ditto clone). UI only — not wired to Cognito yet.
export default function ResetPasswordPage() {
  const [username, setUsername] = useState("");

  return (
    <section className="w-full bg-pri-bg-light py-16">
      <Container size="form">
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-center text-2xl font-bold text-pri-ink">
            {t("Auth.ResetTitle")}
          </h1>
          <p className="mt-2 text-center text-[15px] text-pri-ink-muted">
            {t("Auth.ResetSubtitle")}
          </p>

          <form
            className="mt-8 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="reset-username"
                className="mb-1 block text-sm text-pri-ink-muted"
              >
                {t("Auth.Username")}
              </label>
              <input
                id="reset-username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded border border-pri-border px-3 py-2 text-sm"
              />
            </div>

            <Button
              type="submit"
              className="mt-6 w-full rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white hover:bg-pri-purple/90"
            >
              {t("Auth.SendCode")}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-sm text-pri-purple hover:underline"
            >
              {t("Auth.BackToSignIn")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
