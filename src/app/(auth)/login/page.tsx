"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";
import { account } from "@/models/client/config"; // Make sure this import is correct

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};

export default function Login() {
    const { login } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    // Add these for recovery modal
    const [showRecovery, setShowRecovery] = React.useState(false);
    const [recoveryEmail, setRecoveryEmail] = React.useState("");
    const [recoveryMsg, setRecoveryMsg] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Collect data
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        
        //validation
        if (!email || !password) {
            setError(() => "Please fill out all fields");
            return;
        }

        setIsLoading(() => true);
        setError(() => "");

        const loginResponse = await login(email.toString(), password.toString());
        if (loginResponse.error) {
            setError(() => loginResponse.error!.message);
        }

        setIsLoading(() => false);
    };

    // Add this handler
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
        <div className="mx-auto w-full max-w-md rounded-none border border-solid border-white/30 bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Login to BitOverflow
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Login to BitOverflow
                <br /> If you don&apos;t have an account,{" "}
                <Link href="/register" className="text-orange-500 hover:underline">
                    register
                </Link>{" "}
                with BitOverflow
            </p>

            {error && (
                <p className="mt-8 text-center text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                    className="text-black"
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input className="text-black" id="password" name="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>
                <div className="mb-4 text-right">
                    <button
                        type="button"
                        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                        onClick={() => setShowRecovery(true)}
                    >
                        Forgot password?
                    </button>
                </div>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isLoading}
                >
                    Log in &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                {/* <div className="flex flex-col space-y-4">
                    <button
                        className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        disabled={isLoading}
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        disabled={isLoading}
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                            GitHub
                        </span>
                        <BottomGradient />
                    </button>
                </div> */}
                
            </form>

            {/* Password Recovery Modal */}
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
}
