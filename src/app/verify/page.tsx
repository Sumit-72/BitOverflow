'use client'
import React, { useEffect, useState } from "react";
import { account } from "@/models/client/config";

const Verify: React.FC = () => {
  const [status, setStatus] = useState<"pending" | "success" | "error">("pending");
  const [message, setMessage] = useState<string>("Verifying...");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get("secret");
    const userId = urlParams.get("userId");

    if (!secret || !userId) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    account.updateVerification(userId, secret)
      .then(() => {
        setStatus("success");
        setMessage("Email verified successfully! You can now log in.");
      })
      .catch(() => {
        setStatus("error");
        setMessage("Verification failed or link expired.");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-32 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Email Verification</h2>
      <p className="text-lg text-gray-800 dark:text-white max-w-md">{message}</p>
    </div>

  );
};

export default Verify;