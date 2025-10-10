import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ForgotPassword({ showForget, setShowForget, setShowLogin, setShowSignup }) {
  const [pending, setPending] = useState(false);
  const [notification, setNotification] = useState(null);

  async function handleSubmit(e) {
  e.preventDefault();
  setPending(true);

  const form = new FormData(e.target);
  const email = form.get("email");
  const new_password = form.get("new_password");
  const confirm_password = form.get("confirm_password");

  if (new_password !== confirm_password) {
    setNotification({ type: "error", message: "Passwords do not match" });
    setPending(false);
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, new_password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setNotification({ type: "error", message: data.message || "Password reset failed" });
    } else {
      setNotification({ type: "success", message: "Password reset successful!" });

      // go back to login after success
      setTimeout(() => {
        setShowForget(false);
        setShowLogin(true);
      }, 2000);
    }
  } catch (err) {
    console.error(err);
    setNotification({ type: "error", message: "Server error, please try again." });
  } finally {
    setPending(false);
  }
}


  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {showForget && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowForget(false)}
            />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white_web rounded-lg shadow-lg w-[92%] max-w-md p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForget(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-eerieBlack"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter your email address and we’ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded"
                  required
                />
                <input
                  name="new_password"
                  type="password"
                  placeholder="New Password"
                  className="border p-2 rounded"
                  required
                />
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  className="border p-2 rounded"
                  required
                />

                <button
                  type="submit"
                  disabled={pending}
                  className="bg-black text-white_web py-2 rounded disabled:opacity-50"
                >
                  {pending ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              {/* Extra links */}
              <div className="text-center mt-4 space-y-2">
                <button
                  className="text-sm underline text-gray-600"
                  onClick={() => {
                    setShowForget(false);
                    setShowLogin(true);
                  }}
                >
                  Back to Login
                </button>
                <br />
                <button
                  className="text-sm underline text-gray-600"
                  onClick={() => {
                    setShowForget(false);
                    setShowSignup(true);
                  }}
                >
                  Create a new account
                </button>
              </div>
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
            className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white_web ${
              notification.type === "error" ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {notification.message}
            <button
              className="ml-3 font-bold"
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
