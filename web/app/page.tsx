import Link from "next/link";
import { getUtilities } from "@/lib/data";

export default function HomePage() {
  const utilities = getUtilities();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-bold text-pri-body">PowerRateIndex</h1>
      <p className="text-pri-muted">TDU delivery rate updates</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {utilities.map((u) => (
          <li key={u.slug}>
            <Link
              href={`/${u.slug}`}
              className="block rounded-lg border border-border bg-card px-6 py-4 text-pri-body transition-colors hover:border-pri-blue hover:text-pri-blue"
            >
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
