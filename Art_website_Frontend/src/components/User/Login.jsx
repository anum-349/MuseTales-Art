import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBackspace, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from "react";

export default function Login({ showLogin, setShowLogin, setShowSignup, setShowForget }) {
    const [loginPending, setLoginPending] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState(null)

    const login = useGoogleLogin({
        flow: "auth-code",
        onSuccess: async (tokenResponse) => {
            try {
                const code = tokenResponse.code;

                const res = await fetch("http://localhost:5000/api/auth/google-login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code }),
                });

                const data = await res.json();

                if (!res.ok) {
                    setNotification({ type: "error", message: data.message || "Google login failed" });
                    return;
                }
                localStorage.setItem("token", data.token);
                setNotification({ type: "success", message: "Google Login successful" })
                setShowLogin(false);
            } catch (err) {
                setNotification({ type: "error", message: `Google login error ${err}` });
            }
        },
        onError: () => {
            setNotification({ type: "error", message: "Google login failed." });
        },
    });


    async function submitLogin(form) {
        setLoginPending(true);

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
                setNotification({ type: "error", message: data.message || "Login failed" });
            } else {
                localStorage.setItem("token", data.token);
                window.location.reload();
                setShowLogin(false);
            }
        } catch (err) {
            console.error(err);
            setNotification({ type: "error", message: "Server error" });
        } finally {
            setLoginPending(false);
        }
    }

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

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
                            className="relative bg-white_web rounded-lg shadow-xl w-[92%] max-w-md p-6 mx-4"
                        >
                            <button
                                onClick={() => setShowLogin(false)}
                                className="absolute top-3 right-3 text-gray-600"
                            >
                                <FaBackspace />
                            </button>
                            <h3 className="text-xl font-semibold mb-3">Welcome back</h3>

                            <button className="w-full border border-blue-600 text-blue-600 rounded py-2 flex items-center justify-center gap-2 mb-4" onClick={() => login()}>
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
                                    className="mt-4 bg-black text-white_web py-2 rounded disabled:opacity-60"
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

            {/* Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white_web ${notification.type === "error" ? "bg-red-600" : "bg-green-600"
                            }`}
                    >
                        {notification.message}
                        <button
                            className="ml-3 text-white_web font-bold"
                            onClick={() => setNotification(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
