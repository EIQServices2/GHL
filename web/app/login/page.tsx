"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import { Link } from "@/elements/Link";

/**
 * Login page (ditto clone of powerrateindex.org/login). UI only — form is
 * not wired to Cognito yet (auth endpoints captured in data/site.json).
 */
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full bg-pri-bg-light py-16">
      <Container size="form">
        <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-sm">
          <h1 className="text-center text-2xl font-bold text-pri-ink">
            {t("auth.signIn")}
          </h1>

          <form
            className="mt-8 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="login-username"
                className="mb-1 block text-sm text-pri-ink-muted"
              >
                {t("auth.username")}
              </label>
              <input
                id="login-username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded border border-pri-border px-3 py-2 text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="login-password"
                className="mb-1 block text-sm text-pri-ink-muted"
              >
                {t("auth.password")}
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border border-pri-border px-3 py-2 text-sm"
              />
            </div>

            <div className="mt-3 text-right">
              <Link
                href="/reset-password"
                className="text-sm text-pri-purple hover:underline"
              >
                {t("auth.forgotPassword")}
              </Link>
            </div>

            <Button
              type="submit"
              className="mt-6 w-full rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white"
            >
              {t("auth.signIn")}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
