import { Link, useNavigate } from "react-router-dom"

export default function ArtFair() {

    const navigate = useNavigate()
    
    const exhibitions = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501338/lo_d4qfew.jpg",
            title: "London",
        }, {
            id: 2,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501339/la_zgvgdw.png",
            title: "Los Angeles",
        }, {
            id: 3,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501106/da_s5dpem.png",
            title: "Dallas",
        }, {
            id: 4,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501412/sd_afrveu.jpg",
            title: "Sydney",
        }, {
            id: 5,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501070/br_gvmsyu.png",
            title: "Brooklyn",
        }, {
            id: 6,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501097/ch_en6bph.png",
            title: "Chicago",
        },
    ]

    const artists = [
    {
        id: 1,
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/RemiAdvisor_p51s9n.jpg",
        place: "New York, Miami, Seattle",
        date: 2024,
        name: "Anna Kalachyan",
        feature: "art-for-your-style",
    }, {
        id: 2,
        image: "IndiaAdvisor.jpg",
        place: "Houston, San Francisco",
        date: 2022,
        name: "Duncan Sherwood-Forbes",
        feature: "art-for-your-style",
    }, {
        id: 3,
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501172/ErinAdvisor_sjivtp.jpg",
        place: "Boston, Dallas, Denver",
        date: 2025,
        name: "Rachel Daly",
        feature: "art-for-your-style",
    }, {
        id: 4,
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/WillAdvisor_ofok9o.jpg",
        place: "Washington, Austin, Portland",
        date: 2021,
        name: "The Timber Yard",
        feature: "art-for-your-style",
    },
]

    const fairs = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501350/melbourne_ta5esy.jpg",
            place: "Melbourne",
            date: "January 29 – February 1, 2026",
            detail: "The Timber Yard",
            link: "https://www.theotherartfair.com/melbourne/"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501346/los_angles_z8rtzz.jpg",
            place: "Los Angeles",
            date: "September 25 – 28",
            detail: "Barker Hangar",
            link: "https://www.theotherartfair.com/la/"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501346/london_jwjz2h.jpg",
            place: "London ",
            date: "October 9 – 12",
            detail: "The Truman Brewery",
            link: "https://www.theotherartfair.com/london/"
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501097/chicago_vfhsxh.jpg",
            place: "Chicago",
            date: "October 30 – November 2",
            detail: "Artifact Events",
            link: "https://www.theotherartfair.com/chicago/"
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501069/brisbane_yqtepi.jpg",
            place: "Brisbane",
            date: "November 6 – 9",
            detail: "Brisbane Showgrounds",
            link: "https://www.theotherartfair.com/brisbane/"
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501085/brooklyn_vu5jtd.jpg",
            place: " Brooklyn",
            date: "Npvember 6 – 9",
            detail: "ZeroSpace",
            link: "https://www.theotherartfair.com/brooklyn/"
        },
        {
            id: 7,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501102/dallas_b9u7uu.jpg",
            place: "Dallas",
            date: "2026",
            detail: "Dallas Market Hall",
            link: "https://www.theotherartfair.com/dallas/"
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501354/newyork_omhavp.jpg",
            place: "New York",
            date: "2027",
            detail: "ArtSpace",
            link: "https://www.theotherartfair.com/ny/"
        },
    ]
    
    return (
        <>
            <div className="w-screen h-screen">
                <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501042/artfair_p3s7nl.png" alt="other art fair" className="w-full h-full object-cover " />
            </div>

            <div className="md:p-40 p-10 justify-center text-center bg-teal-50 mb-20">
                <h1>An Accessible and Experiential<br />
                    Way to Discover Art You Love</h1>
                <div className="grid grid-cols-3 mt-10 mb-5 gap-20 ">
                    <div>
                        <p className="text-2xl pb-2">14</p>
                        <p >International Art Fairs Annually</p>
                    </div>
                    <div className="flex">
                        <div className="w-[1px] h-full bg-[#ccc] mr-10"></div>
                        <div className="mx-auto">
                            <p className="text-2xl pb-2">12K+</p>
                            <p>Emerging Artists Supported Annually</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[1px] h-full bg-[#ccc] mr-10"></div>
                        <div className="mx-auto">
                            <p className="text-2xl pb-2">2K+</p>
                            <p>Artworks Exhibited Per Fair</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:ml-20 md:mr-20 mt-20 mb-20">
                <div className="grid md:grid-cols-2 mt-10 ml-20 mr-20 items-center">
                    <div className="w-full h-full bg-blue-100">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501348/losAngeles_aoui0l.jpg" alt="art love" className="w-full h-full object-cover" />
                        <p>Artist Natalya Seva at The Other Art Fair, Los Angeles</p>
                    </div>
                    <div className="md:ml-20">
                        <div className="md:ml-20 sm:mt-10">
                            <p className="font-semibold">United by our shared mission to help you find art and artists you love, Muse Tales Art proudly presents The Other Art Fair—the definitive place to meet, discover, and collect work from cutting-edge local and independent artists before anyone else. </p>
                            <br />
                            <p>Held in some of the world’s most vibrant cultural hubs, each edition of the Fair presents more than 120 artists carefully chosen by a selection committee of art experts, including Muse Tales Art’s curators, and aims to create an accessible, inclusive, and interactive experience.</p>
                            <button className="pl-20 pr-20 hover:text-white pt-2 pb-2 border border-black hover:bg-teal-600 mt-10 mb-20" onClick={()=> window.location.href = "https://www.theotherartfair.com/"}>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full grid md:grid-cols-4 sm:grid-cols-2 gap-3 mb-20">
                <div className="grid grid-rows-2 gap-3 h-96">
                    <div className="w-full h-full">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501352/Moai_Easter_Island_Chile_v38nph.webp" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="w-full h-full">
                            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/popart_duerlp.jpg" alt="art love" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full">
                            <img src="Sculpture14.jpg" alt="art love" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-3 h-96">
                    <div className="w-full h-full">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/visual1_ihukt1.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501412/Sculpture13_e9mv7k.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-3 h-96">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="w-full h-full">
                            <img src="/artfair2.png" alt="art love" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full">
                            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501048/artfair3_bjdxyw.jpg" alt="art love" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="w-full h-full">
                            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501054/artfair4_u9oqzl.png" alt="art love" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full">
                            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501335/living1_egigi4.jpg" alt="art love" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-3 gap-3 h-96">
                    <div className="w-full h-full ">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501320/inspirationArt_ub9emr.webp" alt="art love" className="w-full h-full object-cover " />
                    </div>
                    <div className="w-full h-full">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501339/landscape_vpsgev.jpg" alt="art love" className="w-full h-full object-cover " />
                    </div>
                    <div className="w-full h-full">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501030/aboutseascapes_szcxbr.jpg" alt="art love" className="w-full h-full object-cover " />
                    </div>
                </div>
            </div>

            <div className="ml-10 mr-10">
                <h1>Find a Fair Near You</h1>
                <hr className="mb-10 mt-5" />

                <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:ml-20 md:mr-20">
                    {
                        fairs.map((item) => (
                            <Link key={item.id} to={item.link} className="hover:scale-110 transition duration-1000 border border-black">
                                <div className="w-full h-56">
                                    <img src={item.image} alt={item.detail} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center mb-5">
                                    <p className="text-xl font-medium text-black mb-5 mt-2">{item.place}</p>
                                    <p className="text-black">{item.date}</p>
                                    <p className="text-black">{item.detail}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="ml-10 mr-10 mt-10">
                <h1>Curators' Must-See Artists</h1>
                <hr className="mb-10 mt-5" />

                <div className="grid md:grid-cols-4 grid-cols-2 gap-10 ">
                    {
                        artists.map((item) => (
                            <div key={item.id}>
                                <div className="w-full h-64">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center mb-5">
                                    <p className="text-xl font-medium text-black mb-5 mt-2">{item.name}</p>
                                    <p className="text-black">Exhibited: The Other Art Fair{item.date}</p>
                                    <p className="text-black">{item.place}</p>
                                    <p className="text-black mt-5 mb-5">Featured: <Link className="underline" to={`/${item.feature}`}>{item.feature.replace("-", " ").toUpperCase()}</Link></p>
                                    <button className="border border-black w-full" onClick={()=>navigate(`/artist/${item.name}`)}>View Artist Portfolio</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="ml-10 mr-10 mt-10">
                <h1>Discover More From Exhibiting Artists</h1>
                <p>Shop Muse Tales Art’s Curator Favorites</p>
                <hr className="mb-10 mt-5" />

                <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:m-10 mt-0">
                    {
                        exhibitions.map((item) => (
                                <Link key={item.id} to={item.link} className="hover:scale-110 transition duration-1000 text-center">
                                <div className="relative">
                                    <div className="w-full h-96">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                        <div className="text-center px-4 [&>*]:text-white">
                                            <h2>{item.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}