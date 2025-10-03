import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBackspace, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ showLogin, setShowLogin, setShowSignup, setShowForget }) {
    const [loginPending, setLoginPending] = useState(false);
    const [loginResult, setLoginResult] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    async function submitLogin(form) {
        setLoginPending(true);
        setLoginResult(null);

        const email = form.get("email");
        const password = form.get("password");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setLoginResult({ error: data.message || "Login failed" });
                setTimeout(() => setLoginResult(null), 3000);
            } else {
                localStorage.setItem("token", data.token); // store JWT
                setShowLogin(false);
            }
        } catch (err) {
            console.error(err);
            setLoginResult({ error: "Server error" });
            setTimeout(() => setLoginResult(null), 3000);
        } finally {
            setLoginPending(false);
        }
    }

    return (
        <>
            {/* Login Modal */}
            <AnimatePresence>
                {showLogin && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 bg-black/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowLogin(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="relative bg-white rounded-lg shadow-xl w-[92%] max-w-md p-6 mx-4"
                        >
                            <button
                                onClick={() => setShowLogin(false)}
                                className="absolute top-3 right-3 text-gray-600"
                            >
                                <FaBackspace />
                            </button>
                            <h3 className="text-xl font-semibold mb-3">Welcome back</h3>

                            <button className="w-full border border-blue-600 text-blue-600 rounded py-2 flex items-center justify-center gap-2 mb-4">
                                <FaGoogle /> <span className="font-medium">Continue with Google</span>
                            </button>

                            <p className="text-sm text-gray-600 mb-3 text-center">OR</p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = new FormData(e.target);
                                    submitLogin(form);
                                }}
                                className="flex flex-col gap-3"
                            >
                                <input
                                    id="login-email"
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="border p-2 rounded"
                                />

                                <div className="relative">
                                    <input
                                        id="login-password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="border p-2 rounded w-full"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        className="absolute right-3 top-2 text-gray-500"
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>

                                <div className="flex justify-between items-center text-sm">
                                    <button
                                        type="button"
                                        className="underline"
                                        onClick={() => {
                                            setShowLogin(false);
                                            setShowForget(true); // 🔹 open Forget modal
                                        }}
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <button
                                    className="mt-4 bg-black text-white py-2 rounded disabled:opacity-60"
                                    disabled={loginPending}
                                >
                                    {loginPending ? "Logging in..." : "Log in"}
                                </button>

                                <p className="text-sm text-gray-600 text-center mt-3">
                                    Don't have an account?{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowLogin(false);
                                            setShowSignup(true); // 🔹 open Signup modal
                                        }}
                                        className="underline"
                                    >
                                        Register
                                    </button>
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🔹 Popup Notification */}
            <AnimatePresence>
                {loginResult?.error && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-5 right-5 z-[9999] bg-red-600 text-white px-4 py-2 rounded shadow-lg"
                    >
                        {loginResult.error}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
