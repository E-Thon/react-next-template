import type { Metadata } from "next";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | E-Thon", // %s will be replaced by the current page title (%s looks for a string)
    default: "E-Thon",
  },
  description: "NextJS TypeScript ESLint Zod Starter Template created by E-Thon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
