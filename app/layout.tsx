import type { Metadata } from "next";
import "@fontsource/inter";

// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "BankDash",
  description: "Proyecto portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
