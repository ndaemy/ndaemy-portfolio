import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/ui/globals.css";
import { baseURL, siteMetadata } from "@/resources";

config.autoAddCss = false;

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export function generateMetadata(): Metadata {
  const { title, description } = siteMetadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${pretendard.variable} antialiased`}>
        <div className="mx-10 flex flex-col items-center py-20 *:w-full *:max-w-screen-lg md:mx-14">
          {children}
        </div>
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}
