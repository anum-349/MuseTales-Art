import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/Home/Home";
import Cart from "../pages/Cart/Cart";
import Sell from "../pages/Sell/Sell";
import Advisory from "../pages/Advisory/Advisory";
import Terms from "../pages/Legal/Terms";
import HelpCenter from "../pages/Legal/HelpCenter";
import Support from "../pages/Legal/Support";
import FAQs from "../pages/Legal/FAQs";
import PrivacyNotice from "../pages/Legal/PrivacyNotice";
import CopyrightPolicy from "../pages/Legal/CopyrightPolicy";
import DoNotSellInfo from "../pages/Legal/DoNotSellInfo";
import Accessibility from "../pages/Accessability/Accessibility";
import ArtForYourStyle from "../pages/Art/ArtForYourStyle";
import Returns from "../pages/Legal/Returns";
import Commisions from "../pages/Legal/Commisions";
import HowToBuy from "../pages/How To Buy/HowToBuy";
import About from "../pages/About/About";
import Stories from "../pages/Stories/Stories";
import ArtFair from "../pages/ArtFair/ArtFair";
import Errors from "../pages/Error/Errors";
import Author from "../pages/Artist/Author";
import NewsLetter from "../pages/NewsLetter/NewsLetter";
import Categories from "../pages/Categories/Categories";
import Catalog from "../pages/Catalog/Catalog";
import Artists from "../pages/Artist/Artists";
import Exhibitions from "../pages/Exhibition/Exhibitions";
import Blog from "../pages/Blog/Blog";
import Header from "../components/Header/Header";
import Login from "../components/User/Login";
import Signup from "../components/User/Signup";
import ForgotPassword from "../components/User/ForgotPasswrod";
import ArtworkDetail from "../pages/Art/ArtworkDetail";
export default function RouteLinks() {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    {/* <Route element={<Footer />}> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/category/:name" element={<Categories />} />
                    <Route path="/artwork/:id" element={<ArtworkDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/forgot-password/:token" element={<ForgotPassword />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/exhibition" element={<Exhibitions />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/art-for-your-style" element={<ArtForYourStyle />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/artist/:author" element={<Author />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/newsletter" element={<NewsLetter />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/art-advisory" element={<Advisory />} />
                    <Route path="/terms-of-services" element={<Terms />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/privacy-notice" element={<PrivacyNotice />} />
                    <Route path="/copyright-policy" element={<CopyrightPolicy />} />
                    <Route path="/do-not-sell-info" element={<DoNotSellInfo />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/commisions" element={<Commisions />} />
                    <Route path="/how-to-buy" element={<HowToBuy />} />
                    <Route path="/other-art-fair" element={<ArtFair />} />
                </Route>
                {/* </Route> */}
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/500" element={<Errors error={500} />} />
                <Route path="/*" element={<Errors error={404} />} />
            </Routes>
        </>
    );
}
