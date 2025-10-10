import { Link, NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLightbulb, FaMessage } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import FAQS from '../Legal/FAQs'

export default function Sell() {
    const navigate = useNavigate()

    const testimonal = [
        {
            title: "Growing Beyond Boundaries with Muse Tales Art",
            description:
                "Muse Tales Art has given me the opportunity to showcase my work to a global audience of art lovers. It opened new doors for me, and the sales I’ve made here have allowed me to grow and evolve as an artist.",
            author: "Sandy Dooley",
            country: "London, UK",
        },
        {
            title: "Connecting Creativity with the World",
            description:
                "Through Muse Tales Art, I’ve had two solo exhibitions, exciting collaborations, and countless introductions to passionate collectors. It has truly helped me reach an international audience I never imagined before.",
            author: "Hormazd Narielwalla",
            country: "London, UK",
        },
        {
            title: "Turning Passion into a Lifelong Art Career",
            description:
                "Muse Tales Art has played a major role in my creative journey. Since joining in 2010, it has supported me every step of the way — transforming my passion into a thriving art career.",
            author: "Thomas Hammer",
            country: "New York, USA",
        },
        {
            title: "Creating Meaningful Connections Through Art",
            description:
                "A collector recently purchased one of my pieces through Muse Tales Art — her very first original artwork. Being part of that meaningful experience reminded me exactly why I create art.",
            author: "Annie Terrazzo",
            country: "Los Angeles, USA",
        },
        {
            title: "A Platform That Fuels My Artistic Dreams",
            description:
                "Thanks to Muse Tales Art, I’ve been able to fund my Master’s degree at The Royal College of Art in London. The platform’s support and visibility made it all possible.",
            author: "Ben Edmunds",
            country: "London, UK",
        },
    ];

    return (
        <>
            <div>
                <div className="grid grid-cols-3 gap-10 mb-10">
                    <div className="relative  bg-orange_web w-screen h-96 ">
                        <img
                            src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501465/visual2_otdxd8.jpg"
                            alt="Why Sell"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-white_web md:text-5xl text-4xl font-semibold hover:text-orange_web" >
                                    Sell your art to a global
                                </h1>
                                <h1 className="text-white_web md:text-6xl text-5xl font-semibold hover:text-orange_web" >
                                    community of art lovers
                                </h1>
                                <button className="pl-20 pr-20 text-white_web pt-2 pb-2 bg-black hover:bg-orange_web mt-20" onClick={() => navigate("/support")}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center md:ml-40 md:mr-40 ml-5 mr-5">
                    <h1>Why Sell on Muse Tales Art?</h1>
                    <p>As the world's leading online gallery...</p>

                    <div className="grid grid-cols-4 mt-10 mb-5">
                        <div>
                            <p className="pb-2">Artists Represented</p>
                            <p className="md:text-2xl text-xl">110+ Countries</p>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-[#ccc]"></div>
                            <div className="mx-auto">
                                <p className="pb-2">Works Sold to Collectors in</p>
                                <p className="md:text-2xl text-xl">140+ Countries</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-[#ccc]"></div>
                            <div className="mx-auto">
                                <p className="md:text-2xl text-xl pb-2">~12M+</p>
                                <p>Monthly Page Views</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-[#ccc]"></div>
                            <div className="mx-auto">
                                <p className="md:text-2xl text-xl pb-2">~2M+</p>
                                <p>Monthly Visits</p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="grid grid-cols-[20%,30%,50%] mb-10 mt-5">
                        <div>
                            <p className="md:text-2xl text-xl pb-2">~2M+</p>
                            <p>Social Followers</p>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-[#ccc]"></div>
                            <div className="mx-auto">
                                <p>Printed Catalog Sent to</p>
                                <p className="md:text-2xl text-xl pt-2">1M+ Households</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-[#ccc]"></div>
                            <div className="mx-auto">
                                <p className="md:text-2xl text-xl ">14 International Shows & Fairs Annually Reaching 100K People</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 text-center pt-20">
                    <h1 className="md:text-5xl text-4xl font-semibold">Create and Verify Your</h1>
                    <h1 className="md:text-6xl text-5xl font-semibold"> Account to Get Started</h1>
                    <button className="pl-20 pr-20 pt-3 pb-3 bg-black text-white_web hover:bg-orange_web mt-10 mb-16" onClick={() => navigate("/support")}>Get Started</button>
                </div>

                <div className="relative bg-orange_web w-screen h-screen brightness-50">
                    <img
                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501051/artist_cfyy2c.jpg"
                        alt="Why Sell"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute top-0 left-10 w-96 h-full flex items-center justify-center">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className="rounded-sm"
                        >
                            {
                                testimonal.map((item, i) => (
                                    <SwiperSlide key={i} className="w-full h-full">
                                        <div className="text-center bg-white_web p-16 w-96 h-[400px]">
                                            <h1 className="text-xl font-semibold " >
                                                {item.title}
                                            </h1>
                                            <p>{item.description}</p>
                                            <p className="pt-4 text-eerieBlack font-medium">{item.author}</p>
                                            <p className="font-normal text-eerieBlack">{item.country}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 m-10 md:ml-20 md:mr-20 items-center">
                    <div className="w-full h-full bg-blue-100">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501045/advisory2_qn3suj.png" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:ml-20 mt-5">
                        <h2>Fair, Transparent, and Easy</h2>
                        <p>Choose how and when you get paid. We offer secure payments by check, wire transfer or PayPal. Our support specialists ensure our artists and collectors are financially protected on every sale.</p>
                        <p>
                            Free to create an account<br /><br />
                            We handle shipping - you only pay for packaging<br /><br />
                            No fees<br /><br />
                            Receive 60% on every artwork sold<br /><br />
                            Non-exclusive policy<br /><br />
                            Secure online payments</p>
                        <div className="text-center">
                            <button className="pl-20 pr-20 pt-3 pb-3 bg-black text-white_web hover:bg-orange_web mt-16" onClick={() => navigate("/support")}>Get Started</button>
                        </div>
                    </div>
                </div>

                <hr className="m-20" ></hr>

                <div className="grid md:grid-cols-[45%,50%] ml-20 mr-20 items-center gap-10">
                    <div className="">
                        <h2>Get Featured by Muse Tales Art</h2>
                        <p> We are invested into giving you as much exposure as possible. These are just some of the ways we promote our artists every day:
                            <br /><br />Attention from our expert curators who review all artworks uploaded daily
                            <br /><br />Art Advisors make recommendations and facilitate sales to private collectors in over 140 countries
                            <br /><br />Reach new collectors around the world via direct mail catalogs, digital marketing, social media advertising, and more
                            <br /><br />Dedicated team of art consultants working to source artwork for commercial partners around the globe
                            <br /><br />Rich editorial initiatives and content features including Rising Stars, New this Week, Digital Exhibitions and Curated Collections</p>
                    </div>
                    <div className="w-full h-full bg-blue-100 mr-20">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501379/Painting_1_by1nlt.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-gray-200 p-20 pl-40 pr-40 mt-10 mb-20">
                    <h1 className="text-center">Dedicated Artitst Support</h1>
                    <div className="grid md:grid-cols-3 sm:mt-10 gap-10">
                        <div className="text-center">
                            <Link to={'/support'}>
                                <FaMessage className="text-5xl mx-auto mb-5 text-gray-500" />
                                <b>Here to Help</b>
                                <p className="mt-3">Work with an artist support specialist by email or phone when you have a question, or need assistance fulfilling a sale.</p>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to={'/newsletter'}>
                                <FaPencilRuler className="text-5xl mx-auto mb-5  text-gray-500" />
                                <b>Artist Newsletters</b>
                                <p className="mt-3">Sign up for our artist newsletter and get helpful tips for improving your sales delivered straight to your inbox.</p>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to={'/stories/design-inspiration'}>
                                <FaLightbulb className="text-5xl mx-auto mb-5  text-gray-500" />
                                <b>Tips for Success</b>
                                <p className="mt-3">Best practices, new opportunities for promotion and general inspiration in our Artist Handbook and on the Canvas blog.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="pl-32 pr-32 pt-3 pb-3 bg-black text-white_web hover:bg-orange_web mt-16 mb-16" onClick={() => navigate("/support")}>Get Started</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-[45%,50%] ml-20  mr-20 items-center gap-10">
                    <div className="">
                        <h2>Powerful Tools and a Passionate Team</h2>
                        <p className="text-eerieBlack"> Spend less time managing logistics and more time making art.
                            <br></br><b className="font-semibold">Painless shipping:</b> When you sell your art with Muse Tales Art, shipping is paid for by the collector and is handled by our specialists, saving you time and money — you are only responsible for packaging the work and purchasing the packaging materials.
                            <br /><br />
                            <b className="font-semibold">Manage your portfolio anywhere:</b> Our Studio portfolio management tool allows you to add, edit and update artworks and respond to sales from anywhere.
                            <br /><br />
                            <b className="font-semibold">Display multiple images of your artwork:</b> Share up to 5 different viewpoints of each of your artworks, enabling Muse Tales Art collectors to get a better sense of your work before purchase.
                            <br /><br />
                            <b className="font-semibold">Open Edition prints:</b> Earn additional income by allowing collectors to purchase open edition prints of your original artworks.
                            <br /><br />
                            <b className="font-semibold">Unique visuals:</b> Using the power of augmented reality, collectors can take advantage of our “View in Room” feature to see your artwork in their space before purchasing.</p>
                    </div>
                    <div className="w-full h-full bg-blue-100 mr-20">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501411/Sculpture10_jjqt9v.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <hr className="m-20" ></hr>

                <div className="grid md:grid-cols-2 mt-10 ml-20 mr-20 items-center">
                    <div className="w-full h-full bg-blue-100">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501382/personal_mpvrwu.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-20">
                        <h2>Share Your Art with a Global Audience in New Ways</h2>
                        <p>Expand your audience across Muse Tales Art’s channels while managing your portfolio and sales all from one place.
                            <br /><br />
                            Create your online profile in minutes: Upload your artworks, complete your profile, and start sharing your portfolio with the Muse Tales Art community and your network instantly.
                            <br /><br />
                            Commissions and offers: Accept and negotiate offers from collectors, or work with our curators on original commissions for Art Advisory clients.
                            <br /><br />
                            Art Advisory: Get handpicked by our curators for recommendation to a wide range of clients, from designers to architects to emerging and seasoned collectors.</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="pl-32 pr-32 pt-3 pb-3 bg-black text-white_web hover:bg-orange_web mt-16 mb-16" onClick={() => navigate("/support")}>Get Started</button>
                </div>

            </div >
            <FAQS />
        </>
    )
}