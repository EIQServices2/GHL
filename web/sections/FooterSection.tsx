import Image from "next/image";
import { t } from "@/lib/i18n";
import { getData } from "@/lib/data";
import { Link } from "@/elements/Link";
import { Container } from "@/elements/Container";
import { Logo } from "@/components/Logo";

/**
 * Ditto footer from powerrateindex.org (#uni-ft). White bg, 4 columns:
 * Products / Support & Contact / Developers / Follow us on, plus logo,
 * AWS badge, eIQdigital logo + tagline, and copyright bar.
 * Links/URLs come from data/site.json (single data accessor).
 */
export function FooterSection() {
  const { site } = getData();
  const { footer } = site;

  return (
    <footer className="w-full bg-white py-[50px] text-pri-ink">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
        {/* Left: logo + AWS + eIQdigital */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <Logo href="/" width={180} height={30} className="h-[30px] w-auto" />
          </div>
          <div>
            <Link href={footer.aws.href} target="_blank" rel="noopener">
              <Image
                src="/images/powered-by-aws.png"
                alt="Powered by AWS Cloud Computing"
                width={100}
                height={40}
                className="h-auto w-[100px]"
              />
            </Link>
          </div>
          <div>
            <Link href={footer.eiqdigital.href} target="_blank" rel="noopener">
              <Image
                src="/images/eiqdigital-logo.png"
                alt="eIQdigital"
                width={160}
                height={40}
                className="h-[40px] w-auto"
              />
            </Link>
            <p className="mt-3 text-[15px] text-pri-ink-muted">
              {t("footer.tagline1")}
            </p>
            <p className="mt-1.5 text-[13px] italic leading-[1.1] text-pri-ink-faint">
              {t("footer.tagline2")}
            </p>
          </div>
        </div>

        {/* Right: nav columns */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-end md:gap-[88px]">
          <div>
            <h5 className="mb-3 text-[20px] font-semibold">
              {t("footer.products")}
            </h5>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:block">
              {footer.products.map((p) => (
                <li key={p.label} className="md:my-2">
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="text-[15px] text-pri-ink-muted no-underline"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 text-[20px] font-semibold">
              {t("footer.support")}
            </h5>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:block">
              <li className="md:my-2">
                <Link
                  href={footer.support.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[15px] text-pri-ink-muted no-underline"
                >
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 text-[20px] font-semibold">
              {t("footer.developers")}
            </h5>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:block">
              <li className="md:my-2">
                <Link
                  href={footer.developers.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[15px] text-pri-ink-muted no-underline"
                >
                  {t("footer.documentation")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 text-[20px] font-semibold">
              {t("footer.followUs")}
            </h5>
            <ul className="flex gap-5">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                  >
                    {s.label === "Facebook" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        role="img"
                      >
                        <title>Facebook</title>
                        <path
                          fill="#000"
                          fillRule="nonzero"
                          d="M18 0C8.075 0 0 8.075 0 18s8.075 18 18 18 18-8.075 18-18S27.925 0 18 0m4.476 18.634h-2.928v10.439h-4.34v-10.44h-2.062v-3.688h2.063v-2.386c0-1.71.812-4.38 4.379-4.38l3.214.013v3.58h-2.334c-.38 0-.92.19-.92 1.005v2.168h3.307z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        role="img"
                      >
                        <title>LinkedIn</title>
                        <path
                          fill="#000"
                          fillRule="evenodd"
                          d="M18 0c9.934 0 18 8.066 18 18s-8.066 18-18 18S0 27.934 0 18 8.066 0 18 0m-5.628 28.116V14.059H7.7v14.057zm16.849 0v-8.061c0-4.318-2.306-6.327-5.38-6.327-2.479 0-3.59 1.364-4.21 2.321v-1.99h-4.673c.062 1.319 0 14.057 0 14.057h4.672v-7.85c0-.42.03-.84.154-1.141.337-.84 1.107-1.709 2.397-1.709 1.69 0 2.367 1.29 2.367 3.179v7.52zM10.067 7.28c-1.599 0-2.643 1.051-2.643 2.429 0 1.349 1.013 2.429 2.581 2.429h.03c1.63 0 2.644-1.08 2.644-2.43-.03-1.377-1.014-2.428-2.612-2.428"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="mt-8 text-center text-[14px] text-pri-ink">
        {t("footer.rights")}
      </div>
    </footer>
  );
}
