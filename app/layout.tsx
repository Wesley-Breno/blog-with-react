import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - This is a blog built with Next.js",
  description: "A blog built with Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <header>
        <h1>Header</h1>
      </header>

      <body>
        <div className="bg-red-500">{children}</div>
      </body>

      <footer>
        <h1>Footer</h1>
      </footer>
    </html>
  );
}
