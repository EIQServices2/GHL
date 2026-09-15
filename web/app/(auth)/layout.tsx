// Auth route group: no site Header (original PRI auth = full-screen, no top bar).
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}