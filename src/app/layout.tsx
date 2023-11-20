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
        {children}
      </body>
    </html>
  );
}
