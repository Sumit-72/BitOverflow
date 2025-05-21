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

export const metadata: Metadata = {
  title: "BitOverflow",
  description: "Bit community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      
      <body className={cn(inter.className, "dark:bg-black dark:text-white")}>
        <Suspense fallback={<div>Loading...</div>}>
          <PageLoader />
      </Suspense>
        <ClientComponent>{children}</ClientComponent> {/* Use the client component */}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}

