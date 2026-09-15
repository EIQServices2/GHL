"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/elements/Button";
import { Link } from "@/elements/Link";

// Reset password page (original PRI auth): photo bg + gradient + wave + green button. UI only.
export default function ResetPasswordPage() {
  const [username, setUsername] = useState("");

  const particles = Array.from({ length: 28 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    size: 3 + (i % 3) * 2,
    delay: (i % 9) * 0.9,
    duration: 7 + (i % 5),
  }));

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="pri-auth-bg absolute inset-0 h-[380px] md:h-[420px]" aria-hidden />
      <div className="pri-auth-overlay absolute inset-0 h-[380px] md:h-[420px]" aria-hidden />
      <div className="pointer-events-none absolute left-0 right-0 top-[340px] z-[1] md:top-[380px]" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="h-auto w-full">
          <path
            fill="#f3f6f9"
            d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
          />
        </svg>
      </div>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="pri-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:p-8">
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
              className="mt-6 w-full rounded bg-pri-org-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-pri-org-green/90"
            >
              {t("Auth.SendCode")}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-sm text-pri-org-primary hover:underline"
            >
              {t("Auth.BackToSignIn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}