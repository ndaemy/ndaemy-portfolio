import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Toaster } from '@/components/ui/sonner';
import { productionOrigin, siteMetadata } from '@/resources';
import '@/ui/globals.css';

config.autoAddCss = false;

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
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
      type: 'website',
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
    <html data-theme='dark' lang='ko'>
      <head>
        <meta content={webAppTitle} name='apple-mobile-web-app-title' />
        <link href='/site.webmanifest' rel='manifest' />
      </head>
      <body className={`${pretendard.variable} dark antialiased`}>
        <div className='mx-10 flex flex-col items-center py-10 *:w-full *:max-w-(--breakpoint-lg) md:mx-14 print:pt-10 print:pb-0'>
          {children}
        </div>
        <Toaster />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // hash 값이 있을 경우 hash를 가진 element로 scroll
              (function() {
                const hash = window.location.hash;
                if (hash) {
                  const el = document.querySelector(hash);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              })();
            `,
          }}
        />
      </body>
      <Analytics />
    </html>
  );
}
