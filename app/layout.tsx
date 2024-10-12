import Layout from "@/src/components/layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserDataProvider from "@/src/contexts/data-profile/provider";
import { CardsProvider } from "@/src/contexts/data-form-card/provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={inter.className}>
        <UserDataProvider>
          <CardsProvider>
            <Layout>{children}</Layout>
          </CardsProvider>
        </UserDataProvider>
      </body>
    </html>
  );
}
