import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

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
