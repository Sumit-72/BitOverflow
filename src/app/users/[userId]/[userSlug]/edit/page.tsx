"use client";   
import React, { useState } from "react";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import { account } from "@/models/client/config"; // Make sure this import is correct

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showRecovery, setShowRecovery] = useState(false);
    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [recoveryMsg, setRecoveryMsg] = useState("");

    const updateProfile = useAuthStore((state) => state.updateProfile);
    const router = useRouter();

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        const result = await updateProfile({
            name: name || undefined,
            email: email || undefined,
            oldPassword: oldPassword || undefined,
            newPassword: newPassword || undefined,
        });

        if (result.success) {
            setMessage("Profile updated successfully!");
        } else {
            setMessage(result.error?.message || "Update failed.");
        }
    };

    // Handle password recovery
    const handleRecovery = async (e: React.FormEvent) => {
        e.preventDefault();
        setRecoveryMsg("");
        try {
            await account.createRecovery(
                recoveryEmail,
                window.location.origin + "/recovery"
            );
            setRecoveryMsg("Recovery email sent! Check your inbox.");
        } catch (err: any) {
            setRecoveryMsg(err.message || "Failed to send recovery email.");
        }
    };

    return (
        <div className="container mx-auto space-y-4 px-4 pb-20 pt-32">
            <h1>Edit Profile</h1>
            <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="New name"
                    />
                </div>
                <div>
                    <label className="block mb-1">Old Password</label>
                    <input
                        type="password"
                        className="w-full border rounded px-3 py-2"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        placeholder="Current password"
                    />
                    <button
                        type="button"
                        className="mt-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-150"
                        onClick={() => setShowRecovery(true)}
                    >
                        Forgot Password?
                    </button>
                </div>
                <div>
                    <label className="block mb-1">New Password</label>
                    <input
                        type="password"
                        className="w-full border rounded px-3 py-2"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder="New password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-150"
                >
                    Update
                </button>
                {message && (
                    <div className="mt-2 text-sm text-red-600">{message}</div>
                )}
            </form>

            {/* Modal for password recovery */}
            {showRecovery && (
                <div className="fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-2xl w-full max-w-sm transition-all duration-300">
                        <h2 className="text-xl font-bold mb-4">Password Recovery</h2>
                        <form onSubmit={handleRecovery}>
                        <input
                            type="email"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 transition"
                            placeholder="Enter your email"
                            value={recoveryEmail}
                            onChange={e => setRecoveryEmail(e.target.value)}
                            required
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                            type="button"
                            className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-sm transition"
                            onClick={() => {
                                setShowRecovery(false);
                                setRecoveryMsg("");
                                setRecoveryEmail("");
                            }}
                            >
                            Cancel
                            </button>
                            <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition"
                            >
                            Send Recovery Email
                            </button>
                        </div>
                        </form>
                        {recoveryMsg && (
                        <div className="mt-4 text-sm text-green-400">{recoveryMsg}</div>
                        )}
                    </div>
                </div>

            )}
        </div>
    );
};

export default Page;
