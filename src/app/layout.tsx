import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";

const dotGothic = DotGothic16({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jen",
  description: "Jen - Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dotGothic.className}>{children}</body>
    </html>
  );
}
