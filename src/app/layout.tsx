import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Ndaemy | 유예빈",
  description: "만드는 것과 공유하는 것을 좋아하는 개발자 유예빈입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-default">
        <Header />
        <main
          className="relative min-h-screen
            bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900"
        >
          <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
