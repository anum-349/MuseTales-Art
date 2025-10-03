import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
    FaInstagram,
    FaTiktok,
    FaFacebookF,
    FaPinterestP,
    FaYoutube,
    FaPlus,
    FaBars,
    FaMinus,
} from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function Footer() {
    const [mobileOpenCollector, setMobileOpenCollector] = useState(false)
    const [mobileOpenArt, setMobileOpenArt] = useState(false)
    const [email, setEmail] = useState("")
    const footerlinks = {
        "Terms of Services": "terms-of-services",
        "Privacy Notice": "privacy-notice",
        "Frequently Ask Questions": "faqs",
        "Copyright Policy": "copyright-policy",
        "Do Not Sell or Share My Personal Information": "do-not-sell-info",
        "Accessability": "accessibility",
    }

    const collectorlinks = {
        "Art Advisory": "art-advisory",
        "Help Center": "help-center",
        "Returns": "returns",
        "Commisions": "commisions",
        "Curated Collections": "collections",
        "How to Buy Art": "how-to-buy",
    }


    const artlinks = {
        "About": "/about-us",
        "Mosaic Art Stories": "/stories",
        "The Other Art Fair": "other-art-fair",
        "Sell on MuseTales Art": "sell",
        "Career": "https://www.linkedin.com/in/anum-kousar-984406294/",
        "Contact Support": "support",
    }

    const socialMedia = {
        Instagram: [FaInstagram, "https://instagram.com"],
        TikTok: [FaTiktok, "https://tiktok.com"],
        Facebook: [FaFacebookF, "https://facebook.com"],
        Pinterest: [FaPinterestP, "https://pinterest.com"],
        YouTube: [FaYoutube, "https://youtube.com"]
    };
    const buttons = {
        "Paintings": "category/paintings",
        "Abstract Art": "category/abstract-art",
        "Oil Paintings": "category/oil-paintings",
        "Landescapes": "category/landscapes",
        "Acrylic Painitngs": "category/acrylic-paintings",
        "Curated Collections": "/collections",
        "Modern Art": "category/modern-art",
        "Sculptures": "category/sculpture"
    }
    return (
        <>
            <footer>
                <div className="bg-black ">
                    <div className="flex overflow-x-auto md:overflow-hidden gap-4 mt-3 p-5 md:justify-center scroll-smooth snap-x snap-mandatory">
                        <b className=" text-white text-nowrap">TOP CATEGORIES</b>
                        {
                            Object.entries(buttons).map(([name, url]) => (
                                <div key={name}>
                                    <NavLink className="text-white text-nowrap snap-start hover:text-teal-600" to={url}>{name}</NavLink>
                                </div>
                            ))
                        }
                    </div>

                    <hr className="mb-3" />

                    <div className="grid sm:grid-cols-1 lg:grid-cols-[40%,auto,auto]  mr-10 ml-10 text-white gap-2 md:gap-40 justify-center">
                        <div>
                            <div className="flex  items-center">
                                <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501345/logo_y96lpl.png" alt="logo" width={50} height={50} />
                                <b className="text-white ml-5">MuseTales ART</b>
                            </div>
                            <p>Sign Up to Receive 10% off Your First Order</p>
                            <p>
                                Discover new art and collections added weekely our curators
                            </p>
                            <input type="text" placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="border-black p-2 w-full m-5 ml-0 rounded" />
                            <div className="flex gap-5">
                                {Object.entries(socialMedia).map(([name, [Icon, url]]) => (
                                    <div key={name}>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition"
                                            title={name}
                                        >
                                            <Icon className="text-2xl text-white hover:text-teal-600 transition" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <>
                            <div className="md:hidden">
                                <div className="flex items-center justify-between">
                                    <b className="text-white">For Collectors</b>
                                    <div>
                                        <button onClick={() => setMobileOpenCollector((s) => !s)} className="p-2 rounded-md text-gray-700 hover:text-teal-600">
                                            {mobileOpenCollector ? <FaMinus className="text-2xl text-white" /> : <FaPlus className="text-2xl text-white" />}
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {mobileOpenCollector && (
                                        <motion.nav
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                            className="md:hidden overflow-hidden"
                                        >
                                            <div className="mt-3">
                                                {
                                                    Object.entries(collectorlinks).map(([name, url]) => (
                                                        <div key={name} className="pb-2 ">
                                                            <NavLink to={url} className={"hover:text-teal-600"}>{name}</NavLink >
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </motion.nav>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mt-3 md:block hidden">
                                <b className="text-white">For Collectors</b>
                                <div className="mt-3">
                                    {
                                        Object.entries(collectorlinks).map(([name, url]) => (
                                            <div key={name} className="pb-2 ">
                                                <NavLink to={url} className={"hover:text-teal-600"}>{name}</NavLink >
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>

                        <>
                            <div className="md:hidden">
                                <div className="flex items-center justify-between">
                                    <b className="text-white">For Muse Tales</b>
                                    <div>
                                        <button onClick={() => setMobileOpenArt((s) => !s)} className="p-2 rounded-md text-gray-700 hover:text-teal-600">
                                            {mobileOpenArt ? <FaMinus className="text-2xl text-white" /> : <FaPlus className="text-2xl text-white" />}
                                        </button>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {mobileOpenArt && (
                                        <motion.nav
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                            className="md:hidden overflow-hidden"
                                        >
                                            <div className="mt-3">
                                                {
                                                    Object.entries(artlinks).map(([name, url]) => (
                                                        <div key={name} className="pb-2 ">
                                                            <NavLink to={url} className={"hover:text-teal-600"}>{name}</NavLink>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </motion.nav>
                                    )}
                                </AnimatePresence>

                            </div>
                            <div className="mt-3 md:block hidden">
                                <b className="text-white">For Muse Tales</b>
                                <div className="mt-3">
                                    {
                                        Object.entries(artlinks).map(([name, url]) => (
                                            <div key={name} className="pb-2 ">
                                                <NavLink to={url} className={"hover:text-teal-600"}>{name}</NavLink>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    </div>

                    <hr className="mb-3 mt-10" />

                    <div className="md:flex gap-3 p-3 block sm:text-sm md:gap-10 md:p-1 justify-center text-white">

                    </div>
                    <div className="flex overflow-x-auto md:overflow-hidden gap-4 mt-3 p-5 md:justify-center scroll-smooth snap-x snap-mandatory">
                        {
                            Object.entries(footerlinks).map(([name, url]) => (
                                <div key={name}>
                                    <NavLink to={url} className={"text-white text-nowrap snap-start hover:text-teal-600"}>{name}</NavLink>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-white text-center p-3">
                        © 2024 - 2025 Mosaic Art. All Rights Reserved
                    </div>

                </div>
            </footer>
        </>
    )
}
