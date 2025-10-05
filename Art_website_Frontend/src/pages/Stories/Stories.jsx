import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"

export default function Stories() {

    const navigate = useNavigate()

    const inspirations = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501100/buyart_dcj3hm.jpg",
            title: "How to Buy Art You Love",
            description:
                "Explore our simple guide to finding art that truly speaks to you — from discovering your style to building a meaningful collection that inspires you every day.",
            link: "/how-to-buy",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501051/artist_cfyy2c.jpg",
            title: "Artists to Watch",
            description:
                "Get inspired by the visionaries shaping the art world today. Discover their stories, creative journeys, and what makes their work stand out from the rest.",
            link: "/stories/emerging-artist",
        },
    ];

    const education = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501101/curator3_xbg9oc.jpg",
            title: "Collector Favorites",
            description:
                "Discover some of the most exciting artists on Muse Tales Art who are captivating collectors and curators alike.",
            details:
                "From rising contemporary creators to established names, these artists have earned their place in the spotlight. Explore their creative processes, what inspires their art, and why collectors see long-term value in their unique styles. This section dives deeper into how artistic vision and emotional connection make certain works unforgettable.",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501309/history_hhlcym.webp",
            title: "Art History 101",
            description:
                "Learn how the masters of the past continue to shape and inspire today’s artists in fresh, innovative ways.",
            details:
                "Art is a living language — and its story unfolds through generations. Here, we explore how movements like Impressionism, Cubism, and Abstract Expressionism influence the creative voices of modern-day artists. See how history is reimagined in every brushstroke, connecting timeless beauty with new perspectives.",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501093/CollectorFav1_sjas8u.jpg",
            title: "Design Inspiration",
            description:
                "Explore creative ways to blend art and design into your personal space for a harmonious aesthetic.",
            details:
                "Art transforms a home into a story. Discover how colors, textures, and compositions can reflect your personality and enhance your interior design. Whether you’re curating a minimalist vibe or a vibrant gallery wall, this section helps you find inspiration to turn everyday spaces into artistic experiences.",
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501348/losAngeles_aoui0l.jpg",
            title: "Curator’s Notes from Frieze Los Angeles 2025",
            description:
                "Insights and highlights from one of the world’s most dynamic art fairs, where creativity meets innovation.",
            details:
                "Frieze Los Angeles 2025 showcased emerging voices alongside industry icons, reflecting the ever-evolving energy of the art world. In this section, we spotlight trends such as digital surrealism, eco-conscious art, and emotional storytelling through abstract forms — and how Muse Tales Art creators are leading this wave of change.",
        },
    ];

    const artists = [
        {
            id: 1,
            title: "25 Artists to Collect in 2025",
            link: '/25 Artists to Collect in 2025',
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501320/inspirationArt_ub9emr.webp",
            description: "To bring inspiration to your home for years to come, our team of expert curators has compiled a list of 25 up-and-coming artists to consider collecting now.",
        }, {
            id: 2,
            title: "Muse Tales Art on TV",
            link: '/Muse Tales Art on TV',
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501043/art-in-the-home_kevg8t.jpg",
            description: "Elevate your space and your LG Smart TV with our new app, Muse Tales Art on TV. Now, you can browse and display original art from the world’s leading online gallery—from your TV.",
        }, {
            id: 3,
            title: "The Joy of Art",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501330/joyArt_d2mlsg.jpg",
            link: '/The Joy of Art',
            description: "Transform your empty walls into spaces that spark joy with these curator picks.",
        },
    ]

    const curated = [
        {
            id: 1,
            name: "Abstracts",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501024/aboutBanner_sr1u7i.webp",
            link: "/Abstracts"
        }, {
            id: 2,
            name: "Sculptures",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501387/Sculpture5_z3cdij.jpg",
            link: "/Sculptures"
        }, {
            id: 3,
            name: "Pop Art",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/popart_duerlp.jpg",
            link: "/Pop Art"
        }, {
            id: 4,
            name: "Portraits",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501033/AboutPortrait_ti08hh.jpg",
            link: "/Portraits"
        }, {
            id: 5,
            name: "Landscapes",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501339/landscape_vpsgev.jpg",
            link: "/Landscapes"
        }, {
            id: 6,
            name: "Fine Art Prints",
            src: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501192/fineart_wzfvzp.jpg",
            link: "/Fine Art Prints"
        },
    ]

    const discover = [
        {
            id: 1,
            name: "Exhibitions",
            link: "/stories/exhibition"
        }, {
            id: 2,
            name: "Catalog",
            link: "/catalog"
        }, {
            id: 3,
            name: "Trending Artists",
            link: "/stories//emerging-artist"
        }, {
            id: 4,
            name: "The Other Art Fair",
            link: "/other-art-fair"
        },
    ]

    return (
        <>
            <div className="md:ml-32 md:mr-32 m-10">
                <div className="grid md:grid-cols-[70%,25%] gap-20 items-center mb-10">
                    <div className="w-full h-96">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501050/artOfSummer_bknjcw.png" alt="stories" className="w-full h-full object-fill" />
                    </div>
                    <div className="text-center">
                        <p>LATEST STORY</p>
                        <h2 className="font-semibold mb-3">The Art of Summer</h2>
                        <p>This is your guide to the season’s best original art. </p>
                        <a className={'underline'} target="_blank" href={'https://www.artandobject.com/slideshows/10-summer-paintings-great-air-quality'}>Discover</a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 justify-center gap-10">
                    {
                        artists.map((item) => (
                            <Link key={item.id} to={item.link} className="hover:scale-110 transition duration-1000 text-center">
                                <div className="w-full h-[300px]">
                                    <img src={item.src} alt={item.title} className="w-full h-[300px] object-cover" />
                                </div>
                                <h2 className="font-semibold text-2xl mt-3">{item.title}</h2>
                                <p className="p-3">{item.description}</p>
                            </Link>
                        ))
                    }
                </div>

                <div className="mt-10">
                    <h1>Curated Collections</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-10 mt-10 mb-10">
                        {
                            curated.map((item) => (
                                <Link key={item.id} to={item.link} className="hover:scale-110 transition duration-1000">
                                    <div className="relative  bg-teal-600 w-full h-48 ">
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <h1 className="text-white text-xl font-semibold hover:text-teal-600" >{item.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="text-center">
                    <button className="border border-black pl-10 pr-10 mb-10 hover:text-white hover:bg-teal-600" onClick={() => navigate('/collections')}>Shop All</button>
                </div>

                <div>
                    <h1>Inspirations & Education</h1>
                    <div className="grid grid-cols-2 mt-10 justify-center gap-10">
                        {
                            inspirations.map((item) => (
                                <Link key={item.id} to={item.link} className="hover:scale-110 transition duration-1000 text-center">
                                    <div className="w-full h-[300px]">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="font-semibold text-xl mt-3 hover:text-teal-600">{item.title}</h2>
                                    <p className="p-3">{item.description}</p>
                                </Link>
                            ))
                        }
                    </div>

                    <div className="grid md:grid-cols-4 grid-cols-2 justify-center gap-10 mt-10">
                        {education.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h2 className="font-semibold text-xl mt-3 hover:text-teal-600">
                                    {item.title}
                                </h2>

                                <p>{item.description}</p>

                                <details className="group transition-all duration-500 ease-in-out">
                                    <summary className="cursor-pointer text-teal-600 hover:underline group-open:hidden">
                                        Read More
                                    </summary>

                                    <div className="overflow-hidden transition-all duration-500 ease-in-out">
                                        <p className="text-gray-700">{item.details}</p>

                                        <button
                                            type="button"
                                            className=" text-teal-600 hover:underline mt-2 group-open:block hidden"
                                            onClick={(e) => {
                                                const details = e.target.closest("details");
                                                details.removeAttribute("open");
                                            }}
                                        >
                                            <span className="transition-transform duration-300 group-open:rotate-180">▲</span>
                                            <span className="pl-2">Read Less</span>
                                        </button>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="text-center mt-5">
                    <button className="border border-black pl-10 pr-10 mb-10 hover:text-white hover:bg-teal-600" onClick={() => navigate('/stories/blog')}>Read Blog</button>
                </div>
            </div>

            <div className="pl-32 pr-32 bg-teal-50 pt-10 pb-10">
                <div>
                    <h1>More to Discover</h1>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10 mb-10">
                        {
                            discover.map((item) => (
                                <Link key={item.id} to={`${item.link}`} className="hover:scale-110 transition duration-1000">
                                    <div className="relative  bg-teal-600 w-48 h-48">
                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <h1 className="text-white text-xl font-semibold hover:text-teal-900" >{item.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}