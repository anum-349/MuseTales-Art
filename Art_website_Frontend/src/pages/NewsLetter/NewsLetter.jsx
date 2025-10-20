import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function NewsLetter() {
    const [email, setEmail] = useState("")
    const [notification, setNotification] = useState(null)

    function handleSubmit() {
        if (!email.trim()) {
            setNotification({type: "error", message: "Please enter your email address."});
            return;
        }
        setNotification({type: "success", message:"Thank you for subscribing!"});
        setEmail("");
    }

    return (
        <>
            <div className="grid md:grid-cols-2">
                <div className="w-full h-full">
                    <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501045/advisory2_qn3suj.png" alt="newsletter" className="w-full h-full object-cover " />
                </div>
                <div className="p-20 bg-dim_gray">
                    <div className="flex items-center gap-3 justify-center">
                            <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1760112520/logo_gunlix.png" alt="logo" width={70} height={70} />
                        <h2 className="text-caramine" >MUSETALES ART</h2>
                    </div>
                    <div className="text-center [&>*]:text-white_web mt-5">
                        <h1 className="text-5xl">MUSETALES ART</h1>
                        <h1 className="text-5xl">NEWSLETTER SIGNUP</h1>
                        <p className="p-10 mt-6 mb-2 font-semibold text-2xl">Step into a world where art meets imagination.</p>
                        <p>Subscribe to the MUSETALES ART Newsletter and be the first to explore our newest curated collections, artist stories, creative inspirations, and exclusive member offers.</p>
                        <p>Let every update spark your creativity — because every masterpiece begins with a muse.</p>
                        <p className="p-5 pb-0">Recevie updates on new curated collections, exclusive promotions, featured artists, and more.</p>
                        <p className="mt-6 mb-2">Enter your email to subscribe:</p>
                        <div className="flex gap-2 ml-20 mr-20">
                            <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full p-2 border border-white rounded-sm" />
                            <FaCaretRight className="bg-white_web hover:text-orange_web text-eerieBlack rounded-sm w-10 h-11 p-2" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>

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
                            className="ml-3 font-bold"
                            onClick={() => setNotification(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}