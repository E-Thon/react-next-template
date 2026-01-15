import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | IPlayMusic", // %s will be replaced by the current page title (%s looks for a string)
    default: "IPlayMusic",
  },
  description: "Music app to play music from Spotify App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
