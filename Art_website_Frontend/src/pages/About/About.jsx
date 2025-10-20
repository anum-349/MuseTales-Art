import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function About() {

    const navigate = useNavigate()
    const targetRef = useRef(null)
    const [showNav, setshowNav] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= targetRef.current?.offsetTop) {
                setshowNav(true)
            } else {
                setshowNav(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const feature = [
        {
            id: 1,
            title: "ABSTRACTS",
            link: '/category/abstracts',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501024/aboutBanner_sr1u7i.webp'
        }, {
            id: 2,
            title: "PORTRAITS",
            link: '/category/portraits',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501033/AboutPortrait_ti08hh.jpg'
        }, {
            id: 3,
            title: "LANDSCAPES",
            link: '/category/landscapes',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501030/aboutseascapes_szcxbr.jpg'
        },
    ]

    const images = [
        {
            id: 1,
            title: "ABSTRACTS",
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501025/aboutinspiration1_fcrohg.jpg'
        }, {
            id: 2,
            title: "PORTRAITS",
            image: '/aboutinspiration3.jpg'
        }, {
            id: 3,
            title: "LANDSCAPES",
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501028/aboutfloral_yts1b7.jpg'
        },
    ]

    return (
        <>
            <div className="grid grid-cols-3 gap-10">
                <div className="relative  bg-orange_web w-screen h-screen ">
                    <LazyLoadImage
                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501024/aboutBanner2_u4bexs.webp"
                        alt="Why Sell"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-0 left-10 w-full h-full flex items-center">
                        <div className="text-left">
                            <h1 className="text-white_web text-8xl font-semibold hover:text-orange_web" >
                                Welcome to <br />MuseTales Art
                            </h1>
                            <p className="text-white_web mt-5 text-3xl">THE WORLD'S LEADING ONLINE ART GALLERY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pl-40 pr-40 p-20 bg-gray-200">
                <p className="text-xl text-eerieBlack md:pl-56 md:pr-56">At MuseTales Art, we make it our mission to help you discover and buy from the best emerging artists around the world.</p>

                <div className="grid grid-cols-3 mt-10 mb-5 ">
                    <div className="[&>*]:text-eerieBlack text">
                        <p className="text-4xl pb-2">1.4M</p>
                        <p className="pb-2">ORIGINAL ARTWORKS</p>
                    </div>
                    <div className="flex">
                        <div className="w-[1px] h-full bg-[#ccc]"></div>
                        <div className="mx-auto [&>*]:text-eerieBlack">
                            <p className="text-4xl pb-2">94K</p>
                            <p className="pb-2">EMERGING ARTISTS</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[1px] h-full bg-[#ccc]"></div>
                        <div className="mx-auto [&>*]:text-eerieBlack">
                            <p className="text-4xl pb-2">110+</p>
                            <p>COUNTRIES REPRESENTED</p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={targetRef}>
                <nav className={`flex gap-10 justify-center w-full z-50 p-5 
                    ${showNav ? "fixed top-0 bg-white_web shadow" : "relative"} text-nowrap`}>
                    <a href={'#feature'} className="focus:underline">Featured Collections</a>
                    <a href={"#mission"} className="focus:underline">Our Mission</a>
                    <a href={"#discover"} className="focus:underline">How To Discover Art</a>
                    <a href={"#collectors"} className="focus:underline">Meet Our Collectors</a>
                </nav>
            </div>

            <hr />

            <div id="feature" className="text-center mt-10">
                <h1 className="text-6xl font-semibold mb-5">Featured Art Collections</h1>
                <p className="text-3xl mb-5">New original art, handpicked by our expert curators.</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 ml-20 mr-20 mb-10">
                    {
                        feature.map((item) => (
                            <div key={item.id}>
                                <div className="w-full h-80 mb-10">
                                    <LazyLoadImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <NavLink to={item.link} className={'underline'}>{item.title}</NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />

            <div id="mission" className="grid sm:grid-cols-1 md:grid-cols-[60%,40%] mt-20 mb-10 ml-3">
                <div className="grid grid-cols-2 gap-3">
                    <div className="w-full h-80 ">
                        <LazyLoadImage src='https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501023/about1_ujibzc.jpg' alt="Mission Images" className="w-full h-full object-cover" />
                    </div><div className="w-full h-80 ">
                        <LazyLoadImage src='https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501023/about2_hlxba9.jpg' alt="Mission Images" className="w-full h-full object-cover" />
                    </div><div className="w-full h-80 ">
                        <LazyLoadImage src='https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501023/about3_vzwecn.jpg' alt="Mission Images" className="w-full h-full object-cover" />
                    </div><div className="w-full h-80 ">
                        <LazyLoadImage src='https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501023/about4_mpyzrm.jpg' alt="Mission Images" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="pl-10 pr-10">
                    <h1>What Is MuseTales Art</h1>
                    <p>
                        <br /><b className="font-semibold">The Best Place to Buy Art You Love</b>
                        <br />Discover an unparalleled selection of art by artists from around the world to suit all budgets, styles, and spaces.
                        <br /><br /><b className="font-semibold">Access to Knowledgeable Curators</b>
                        <br />See new curator-approved artworks in special collections released weekly, or work with an art advisor to get personalized recommendations.
                        <br /><br /><b className="font-semibold">Support Emerging Artists</b>
                        <br />We value the talented artists we represent and pay them more on every sale than other galleries.
                        <br /><br /><b className="font-semibold">Peace of Mind</b>
                        <br />Our 14-day satisfaction guarantee allows you to buy with confidence. If you’re not satisfied with your purchase, return it and we’ll help you find a work you love.</p>
                </div>
            </div>

            <div className="bg-orange_web p-20 pl-40 pr-40 [&>*]:text-white_web text-center [&>*]:mb-5">
                <b>Thousands of Five-Star Reviews</b>
                <p>We pride ourselves on delivering world-class customer service to all of our art buyers.</p>
                <h1 className="text-5xl">★★★★★</h1>
                <b>TrustPilot</b>
                <h1 className="text-5xl mt-5">“Shopping at MuseTales Art is like visiting a museum accompanied by a curator. You can find any style you’re looking for.”</h1>
                <p>- Felicia</p>
            </div>
            <hr />

            <div id="discover">
                <div className="text-center mt-10">
                    <h1 className="text-6xl font-semibold mb-5">How To Find</h1>
                    <h1 className="text-6xl font-semibold mb-5"> Art You Love</h1>
                    <p className="text-3xl mb-5">Discovering art has never been easier or more enjoyable.</p>
                </div>
                <div className="grid md:grid-cols-[30%,60%] sm:grid-cols-1 ml-10 mr-10 items-center gap-10">
                    <div>
                        <h1 className="text-5xl font-normal mb-5">Curated Collections</h1>
                        <p className="text-2xl">See new curator-approved works in special collections released weekly.</p>
                        <button className="w-full border border-dim_gray mt-10 hover:text-white_web hover:bg-orange_web" onClick={() => navigate('/collections')}>START EXPLORING</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" w-full h-full">
                            <div className="relative  bg-orange_web">
                                <LazyLoadImage
                                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501028/aboutfloral_yts1b7.jpg"
                                    alt="Floral"
                                    className="w-full h-[530px] object-cover"
                                />

                                <div className="absolute top-96 pt-28 left-5 w-full h-full flex">
                                    <div className="">
                                        <NavLink className={'underline hover:text-orange_web text-white_web left-3'} to={'/category/flowers'}>Spring Flowers</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" mb-4 w-full h-64">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501030/aboutseascapes_szcxbr.jpg"
                                        alt="seascapes"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute top-44 left-5 w-full h-full flex">
                                        <div className="">
                                            <NavLink className={'underline hover:text-orange_web text-white_web'} to={'/category/seascapes'}>SEASCAPES</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full h-64">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501030/aboutmonchrome_pz4rhy.jpg"
                                        alt="monochrome"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute top-44 left-5 w-full h-full flex">
                                        <div className="">
                                            <NavLink className={'underline hover:text-orange_web text-white_web'} to={'/category/monochrome'}>MONOCHROME</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-[60%,30%] ml-10 mr-10 items-center gap-10 mt-20">
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" w-full h-[200px]">
                            <div className="relative  bg-orange_web">
                                <LazyLoadImage
                                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501463/visual3_dpmmzs.jpg"
                                    alt="Visual"
                                    className="w-full h-[455px] object-cover"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className=" mb-2 w-full h-56">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501465/visual2_otdxd8.jpg"
                                        alt="Visual"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className=" w-full h-56">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/visual1_ihukt1.jpg"
                                        alt="Visual"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-normal mb-5">Visual Search</h1>
                        <p className="text-2xl">Select an artwork you like and see similar matches.</p>
                        <button className="w-full border border-dim_gray mt-10 hover:text-white_web hover:bg-orange_web" onClick={() => navigate('/category/all')}>Start Searching</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-[30%,60%] ml-10 mr-10 items-center gap-10 mt-20 mb-20">
                    <div>
                        <h1 className="text-5xl font-normal mb-5">Articles & Interviews</h1>
                        <p className="text-2xl">Get to know the world’s top emerging artists through our featured stories, blog, and more.</p>
                        <button className="w-full border border-dim_gray mt-10 hover:text-white_web hover:bg-orange_web" onClick={() => navigate('/stories')}>START LEARNING</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" w-full h-full">
                            <div className="relative  bg-orange_web">
                                <LazyLoadImage
                                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501036/aboutInterview_my2kkx.jpg"
                                    alt="Interview2"
                                    className="w-full h-[425px] object-cover"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-2 w-full h-52">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501036/aboutInterview_my2kkx.jpg"
                                        alt="Interview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className=" w-full h-52">
                                <div className="relative  bg-orange_web w-full h-full">
                                    <LazyLoadImage
                                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501028/aboutinspiration3_lz1bqi.jpg"
                                        alt="Interview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="collectors">
                <div className="grid grid-cols-3 gap-10 mt-10 mb-10">
                    <div className="relative  bg-orange_web w-screen h-96 ">
                        <LazyLoadImage
                            src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501024/aboutBanner2_u4bexs.webp"
                            alt="Why Sell"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-0 left-20 w-1/4 h-full flex items-center">
                            <div>
                                <h1 className="text-white_web text-5xl pb-5 font-semibold hover:text-orange_web text-nowrap" >
                                    Living With Art
                                </h1>
                                <p className="text-white_web">
                                    People who have discovered and fallen in love with works through MuseTales Art invite us into their homes and share their stories.
                                </p>
                                <div className="text-center">
                                    <button className="pl-20 pr-20 border-2 pt-2 pb-2 border-white text-white_web hover:bg-orange_web mt-10" onClick={() => navigate('/stories/living-with-art')}>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-5xl font-normal mb-5">Want More Inspiration?</h1>
                    <p>Follow <a href="https://www.instagram.com" target='_blank' className="underline hover:text-orange_web">@MuseTalesart </a>on Instagram</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10 m-10">
                    {
                        images.map((item) => (
                            <div key={item.id} className="w-full h-[400px]">
                                <LazyLoadImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}