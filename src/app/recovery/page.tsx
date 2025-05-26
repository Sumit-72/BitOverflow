import { Suspense } from "react";
import RecoveryPage from "./RecoveryPage"; // Move your logic to RecoveryPage.tsx

export default function RecoveryPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoveryPage />
    </Suspense>
  );
}