import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        ["Paintings", "category/paintings"],
        ["Photography", "category/photography"],
        ["Sculpture", "category/sculpture"],
        ["Drawings", "category/drawings"],
        ["Modern Art", "category/modern-art"],
        ["Oil Paintings", "category/oil-paintings"],
        ["Abstract Art", "category/abstract-art"],
        ["Curated Collections", "/collections"],
    ];

    return (
        <header className="w-full bg-white shadow-sm">
            {/* Top promo */}
            <div className="bg-red-600 text-white text-center text-sm py-1 px-3">
                Limited Time — Collect More, Earn More
                <NavLink to={'/MuseTales-art'} className="underline ml-2">Learn more</NavLink>
            </div>

            {/* Main nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* left: logo */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501345/logo_y96lpl.png" alt="logo" className="w-10 h-10 object-contain" />
                            <span className="hidden sm:inline-block font-semibold text-gray-800">MuseTales</span>
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

                        <Link to="/" className="text-gray-700 hover:text-teal-600 p-2 rounded-md" title="Home">
                            <FaHome className="text-2xl" />
                        </Link>

                        <button
                            className="text-gray-700 hover:text-teal-600 p-2 rounded-md"
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
                                className="flex items-center gap-2 text-gray-700 hover:text-teal-600 p-1 rounded-md"
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
                                            className="w-full text-left px-2 py-2 text-sm hover:text-teal-600"
                                        >
                                            Log in
                                        </button>
                                        <button
                                            onClick={() => { setShowSignup(true); setProfileOpen(false); }}
                                            className="w-full text-left px-2 py-2 text-sm hover:text-teal-600"
                                        >
                                            Sign up
                                        </button>
                                        <NavLink to="/profile" className="block px-2 py-2 text-sm hover:text-teal-600">My profile</NavLink>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileOpen((s) => !s)}
                                className="p-2 rounded-md text-gray-700 hover:text-teal-600"
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
                                        className="py-2 text-gray-700 hover:text-teal-600 border-b last:border-b-0"
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
                                        className="flex-1 py-2 bg-black text-white rounded"
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
                            `text-xl ${isActive ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`
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