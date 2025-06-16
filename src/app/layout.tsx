// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientComponent from "./c"; // Import the client component
import { Suspense } from "react";
import PageLoader from "./components/PageLoader"; // Import the loader component
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata= {
  title: 'BitOverflow',
  description:
    'BitOverflow is the ultimate student platform for BIT Mesra – join discussions, explore clubs, events, and navigate campus all in one place.',
  keywords: [
    'BitOverflow',
    'BIT Mesra community',
    'BIT Mesra forum',
    'BIT Mesra events',
    'BIT Mesra clubs',
    'BIT Mesra navigation',
    'student platform BIT Mesra',
    'Sumit Shekhar',
  ],
  authors: [{ name: 'Sumit Shekhar' }],
  creator: 'Sumit Shekhar',
  openGraph: {
    title: 'BitOverflow Unite. Share. Discover.',
    description:
      'Connect with peers, ask questions, and share knowledge – all in one place. From forums and clubs to events and campus maps, BitOverflow is the ultimate community platform for BIT Mesra students.',
    url: 'https://bit-overflow.vercel.app',
    siteName: 'BitOverflow',
    images: [
      {
        url: '/bitoverflow_preview.png', // Replace with real image URL
        width: 1200,
        height: 630,
        alt: 'BitOverflow Platform Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitOverflow Unite. Share. Discover.',
    description: 'Connect with peers, ask questions, and share knowledge – all in one place. From forums and clubs to events and campus maps, BitOverflow is the ultimate community platform for BIT Mesra students.',
    images: ['/bitoverflow_preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
    <head>
      <meta name="google-site-verification" content="lkm3vAuVAaNjtOxkw09hQEncIv4eMoE5rpWDkqcrK6I" />
    </head>
      
      <body className={cn(inter.className, "dark:bg-black dark:text-white")}>
        <Suspense fallback={<div>Loading...</div>}>
          <PageLoader />
      </Suspense>
        <ClientComponent>{children}</ClientComponent> {/* Use the client component */}
        
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}

