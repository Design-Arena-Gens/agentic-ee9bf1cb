import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ताजमहलचे सत्य - The Truth of Taj Mahal",
  description: "विष्णुदासच्या सत्य शोधाची कथा",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
