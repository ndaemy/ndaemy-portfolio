import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { productionOrigin, siteMetadata } from "@/resources";
import "@/ui/globals.css";

config.autoAddCss = false;

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export async function generateMetadata(): Promise<Metadata> {
  const { title, titleSuffix, description } = siteMetadata;

  return {
    title: {
      default: title,
      template: `%s${titleSuffix}`,
    },
    description,
    openGraph: {
      title: {
        default: title,
        template: `%s${titleSuffix}`,
      },
      description,
      type: "website",
      url: productionOrigin,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { webAppTitle } = siteMetadata;

  return (
    <html lang="ko" data-theme="dark">
      <head>
        <meta name="apple-mobile-web-app-title" content={webAppTitle} />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${pretendard.variable} antialiased`}>
        <div className="mx-10 flex flex-col items-center py-20 *:w-full *:max-w-(--breakpoint-lg) md:mx-14 print:pb-0 print:pt-10">
          {children}
        </div>
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}
