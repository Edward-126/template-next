import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Template-NEXT",
  description:
    "A clean Next.js template with TypeScript, TailwindCSS, and Prettier, developed by Thilina Rathnayaka (A.K.A Edward Hyde). Optimized for quick project setup with handy packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="bg-background text-foreground">{children}</main>
      </body>
    </html>
  );
}
