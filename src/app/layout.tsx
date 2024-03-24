import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const myTheme = createTheme({
    primaryColor: "pubspin-blue",
    colors: {
      "pubspin-blue": [
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
        "#0C2271",
      ],
    },
  });

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={myTheme}>{children}</MantineProvider>
      </body>
    </html>
  );
}