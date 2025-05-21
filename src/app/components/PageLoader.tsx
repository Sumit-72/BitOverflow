"use client"; // Use client-side React hooks

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "./Loader"; // Your custom loader

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timeout = setTimeout(() => setLoading(false), 1500); // Simulate loading delay

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]); // Runs when pathname or search params change

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/80 z-50">
      <Loader />
    </div>
  ) : null;
}
