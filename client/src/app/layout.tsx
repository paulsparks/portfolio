import { Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Paul Sparks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased flex flex-col items-center text-center`}
      >
        {children}
      </body>
    </html>
  );
}
