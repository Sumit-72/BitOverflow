"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { account } from "@/models/client/config"; // Adjust import as needed

export default function RecoveryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const userId = searchParams?.get("userId") || "";
  const secret = searchParams?.get("secret") || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await account.updateRecovery(userId, secret, password);
      setSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-zinc-900 pt-24 px-4">
  <div className="bg-white dark:bg-zinc-800 text-black dark:text-white rounded-2xl shadow-xl p-8 w-full max-w-md transition-all">
    <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>

    {success ? (
      <div className="text-green-600 dark:text-green-400 text-center">
        Password reset successful! Redirecting to login...
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
          className="w-full px-4 py-2 mb-4 border dark:text-white border-gray-300 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
          minLength={8}
          className="w-full px-4 py-2 mb-4 border dark:text-white border-gray-300 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-sm transition"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    )}
  </div>
</div>

  );
}