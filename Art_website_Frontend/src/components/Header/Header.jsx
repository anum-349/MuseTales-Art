import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
    FaUserCircle,
    FaShoppingCart,
    FaHome,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

// Import your Login (and Signup when ready)
import Login from "../User/Login";
import Signup from "../User/Signup";
import ForgotPassword from "../User/ForgotPasswrod";

export default function Header() {
    const [search, setSearch] = useState("");
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showForget, setShowForget] = useState(false);

    const profileRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        function onDoc(e) {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener("click", onDoc);
        return () => document.removeEventListener("click", onDoc);
    }, []);

    const links = [
        ["Paintings", "/category/paintings"],
        ["Photography", "category/photography"],
        ["Sculpture", "/category/sculptures"],
        ["Drawings", "/category/drawings"],
        ["Texture Art", "/category/textures"],
        ["Oil Paintings", "/category/oil-paintings"],
        ["Abstract Art", "/category/abstracts"],
    ];

    return (
        <header className="w-full bg-white shadow-sm">
            {/* Top promo */}
            <div className="bg-caramine text-white_web text-center text-sm py-1 px-3">
                Limited Time — Collect More, Earn More
                <NavLink to={'/about-us'} className="underline ml-2">Learn more</NavLink>
            </div>

            {/* Main nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* left: logo */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-3 mt-2">
                            <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1760112520/logo_gunlix.png" alt="logo" width={70} height={70} />
                            <span className="sm:hidden md:inline-block font-semibold text-xl text-eerieBlack hover:text-orange_web">MuseTales</span>
                        </Link>
                    </div>

                    {/* right area */}
                    <div className="flex items-center gap-3">
                        {/* search (desktop only) */}
                        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 w-72">
                            <input
                                aria-label="Search artworks or artists"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none text-sm w-full"
                                placeholder="Search art or artists"
                            />
                        </div>

                        <Link to="/" className="text-eerieBlack hover:text-orange_web p-2 rounded-md" title="Home">
                            <FaHome className="text-2xl" />
                        </Link>

                        <button
                            className="text-eerieBlack hover:text-orange_web p-2 rounded-md"
                            title="Cart"
                            aria-label="Cart"
                            onClick={() => navigate("/cart")}
                        >
                            <FaShoppingCart className="text-2xl" />
                        </button>

                        {/* profile dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setProfileOpen((s) => !s)}
                                className="flex items-center gap-2 text-eerieBlack hover:text-orange_web p-1 rounded-md"
                                aria-haspopup="true"
                                aria-expanded={profileOpen}
                            >
                                <FaUserCircle className="text-2xl" />
                            </button>

                            <AnimatePresence>
                                {profileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md ring-1 ring-black ring-opacity-5 p-2 z-20"
                                        role="menu"
                                    >
                                        <button
                                            onClick={() => { setShowLogin(true); setProfileOpen(false); }}
                                            className="w-full text-left px-2 py-2 text-sm hover:text-orange_web"
                                        >
                                            Log in
                                        </button>
                                        <button
                                            onClick={() => { setShowSignup(true); setProfileOpen(false); }}
                                            className="w-full text-left px-2 py-2 text-sm hover:text-orange_web"
                                        >
                                            Sign up
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileOpen((s) => !s)}
                                className="p-2 rounded-md text-eerieBlack hover:text-orange_web"
                            >
                                {mobileOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile nav */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
                        >
                            <div className="px-4 py-3 flex gap-3 flex-col">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search art or artists"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                                {links.map(([label, to]) => (
                                    <NavLink
                                        key={label}
                                        to={to}
                                        className="py-2 text-eerieBlack hover:text-orange_web border-b last:border-b-0"
                                    >
                                        {label}
                                    </NavLink>
                                ))}
                                <div className="flex gap-2 pt-2">
                                    <button
                                        onClick={() => { setShowLogin(true); setMobileOpen(false); }}
                                        className="flex-1 py-2 border rounded"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        onClick={() => { setShowForget(true); setMobileOpen(false); }}
                                        className="flex-1 py-2 border rounded"
                                    >
                                        Forget Password
                                    </button>
                                    <button
                                        onClick={() => { setShowSignup(true); setMobileOpen(false); }}
                                        className="flex-1 py-2 bg-black text-white_web rounded"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>

            {/* center: nav links (desktop only) */}
            <nav className="hidden md:flex m-5 ml-20 gap-5 items-center ">
                {links.map(([label, to]) => (
                    <NavLink
                        key={label}
                        to={to}
                        className={({ isActive }) =>
                            `text-xl ${isActive ? 'text-orange_web font-semibold' : 'text-eerieBlack hover:text-orange_web'}`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            <hr />

            <Outlet />

            {/* Modals */}
            <Login
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
                setShowForget={setShowForget}
            />
            <Signup
                showSignup={showSignup}
                setShowSignup={setShowSignup}
                setShowLogin={setShowLogin}
            />
            <ForgotPassword
                showForget={showForget}
                setShowForget={setShowForget}
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
            />
        </header>
    );
}