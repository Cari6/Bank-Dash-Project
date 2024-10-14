"use client";
import Layout from "@/src/components/layout";
import { Inter } from "next/font/google";
import "./globals.css";
import UserDataProvider from "@/src/contexts/data-profile/provider";
import { CardsProvider } from "@/src/contexts/data-form-card/provider";
import { useEffect, useState } from "react";
import { Spinner } from "@/src/components";
import { metadata } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  const triggerLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleResize = () => {
      triggerLoading();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/spinkit/2.0.1/spinkit.min.css"
        />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href={"/favicon1.png"} />
      </head>
      <body className={inter.className}>
        <UserDataProvider>
          <CardsProvider>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100%",
                }}
              >
                <Spinner />
              </div>
            ) : (
              <Layout>{children}</Layout>
            )}
          </CardsProvider>
        </UserDataProvider>
      </body>
    </html>
  );
}
