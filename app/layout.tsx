"use client";

import { ApolloProvider } from "@apollo/client";
import { Inter } from "next/font/google";
import useClient from "./util/useClient";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useClient();
  return (
    <html lang="en" >
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
