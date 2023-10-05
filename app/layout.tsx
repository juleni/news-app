import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live News App",
  description: "Live News Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={
            inter.className +
            " bg-gray-100 dark:bg-zinc-900 transition-all duration-700"
          }
        >
          <Header />
          <div className="max-w-6xl">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
