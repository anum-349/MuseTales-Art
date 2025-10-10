import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaCaretDown, FaBookOpen, FaCircle, FaCirclePlus, FaHeart, FaRegClone, FaLayerGroup } from "react-icons/fa6"
import { FaCaretLeft, FaCaretRight, FaCopy, FaPlusCircle, FaShoppingBag } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Author() {
    const [authorDetail, setAuthorDetail] = useState(null)
    const [artworks, setArtworks] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [authors, setAuthors] = useState([])

    const [visibleCount, setVisibleCount] = useState(12)
    const [startIndex, setStartIndex] = useState(0)
    const itemsPerPage = 4

    const { author } = useParams()
    const [selectedDetail, setSelectedDetail] = useState("About")

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const DetailButton = ["About", "Exhibition", "Recognization"]

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)

                const [authorRes, authorsRes, artworkRes] = await Promise.all([
                    fetch(`http://localhost:5000/api/author/${author}`).then((res) => res.json()),
                    fetch("http://localhost:5000/api/authors").then((res) => res.json()),
                    fetch("http://localhost:5000/api/categories").then((res) => res.json())
                ])
                setAuthorDetail(authorRes)
                setSelectedCategory(authorRes?.name)
                setArtworks(artworkRes)
                setAuthors(authorsRes)
            } catch (err) {
                console.error("Error fetching author data:", err)
                setError("Failed to load author data.")
            } finally {
                setLoading(false)
            }
        }

        if (author) fetchData()
    }, [author])

    // Filter artworks by selected author
    const filteredItems = selectedCategory ? artworks.filter(item => item.author === selectedCategory) : artworks

    // Pagination for similar artists
    function showPrev() {
        setStartIndex((prev) => Math.max(prev - itemsPerPage, 0))
    }

    const showNextItems = () => {
        setStartIndex((prev) =>
            Math.min(prev + itemsPerPage, authors.length - itemsPerPage)
        )
    }


    const visibleItems = authors.slice(startIndex, startIndex + itemsPerPage)

    const showNext = () => setVisibleCount((prev) => prev + 12)

    if (loading) return <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-orange_web border-t-transparent rounded-full animate-spin"></div>
    </div>
    if (error) return <p className="m-10 text-red-500">{error}</p>

    return (
        <>
            <div>
                {/* Banner */}
                <div>
                    <img
                        src={authorDetail.thumbnail}
                        alt="images"
                        className="w-screen h-96 object-cover"
                    />
                    <div className="-mt-10 justify-center">
                        <div className=" bg-white_web rounded md:p-10 md:pl-20 pr-20 sm:p-10 ml-10 mr-10 -mt-20 relative">
                            {authorDetail ? (
                                <div className="grid md:grid-cols-[20%,50%,10%] grid-cols-[35%,50%,10%]">
                                    <div className="w-[150px] h-[150px] rounded-full">
                                        <img
                                            src={authorDetail.profileImage}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="flex">
                                                <h2>{authorDetail.name}</h2>
                                                <div className="flex items-center md:right-20 sm:right-14 sm:-mt-50 absolute">
                                                    <FaCirclePlus className="-mr-5" />
                                                    <button className="font-semibold underline">FOLLOW</button>
                                                </div>
                                            </div>
                                            <p>{authorDetail.country}</p>
                                            <>
                                                <p>{authorDetail.about?.slice(0, 120)}...</p>
                                                <a href="#about" className="underline flex items-center gap-3">
                                                    Read More <FaCaretDown />
                                                </a>
                                            </>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            {/* Tabs */}
                            <div className="p-1 mt-4 bg-gray-200 border w-60 gap-3" id="artworks">
                                <button className="rounded bg-white_web ml-3 w-52">
                                    All Artworks
                                </button>
                            </div>

                            {/* Artworks by this author */}
                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mb-10">
                                    {filteredItems.slice(0, visibleCount).map((item) => (
                                        <div key={item.id} className="bg-white_web p-4 rounded shadow">
                                            <img
                                                src={item.mainImage}
                                                alt={item.title}
                                                className="w-full h-48 object-cover mb-4 rounded"
                                            />
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-lg font-semibold">${item.price}</p>
                                                <div className="flex gap-2 text-gray-600">
                                                    <FaHeart />
                                                    <FaPlusCircle />
                                                    <Link to={"/cart"}>
                                                        <FaShoppingBag />
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link to={`/artwork/${item.title}`}>
                                                <b className="block text-xl mb-1 hover:text-orange_web">{item.title}</b>
                                            </Link>
                                            <p className="text-sm text-gray-700">
                                                {item.author}, {item.country}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {item.detail} <br /> {item.size}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Load More */}
                                {visibleCount < filteredItems.length && (
                                    <div className="text-center">
                                        <button
                                            onClick={showNext}
                                            className="-translate-y-1/2 bg-white_web p-2 shadow rounded border-dim_gray border z-10 disabled:opacity-50"
                                        >
                                            LOAD MORE ARTWORKS
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* About the Artist */}
                {authorDetail ? (
                    <div className="bg-gray-200 grid grid-cols-[40%,60%] p-10 gap-10" id="about">
                        {/* Carousel */}
                        <div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination]}
                                className="rounded-sm"
                            >
                                {authorDetail.images?.map((img, i) => (
                                    <SwiperSlide key={i} className="w-full h-96">
                                        <img src={img} alt={`art-${i}`} className="w-full h-96 object-contain" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Author Info */}
                        <div>
                            <div className="flex relative">
                                <p>ABOUT THE ARTIST</p>
                                <div className="flex items-center gap-3 right-10 absolute">
                                    <FaPlusCircle />
                                    <p>({authorDetail.followers} FOLLOWERS)</p>
                                </div>
                            </div>
                            <h2>{authorDetail.name}</h2>
                            <div className="flex gap-3 items-center">
                                <p>JOINED IN {authorDetail.joining}</p>
                                <FaBookOpen />
                                <FaCircle />
                                <FaCopy />
                            </div>

                            {/* Detail Tabs */}
                            <div className="mr-10 mt-5 ml-0">
                                <div className="flex mb-6 -mt-2">
                                    <nav className="flex flex-wrap ">
                                        {DetailButton.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedDetail(cat)}
                                                className={`rounded-md font-semibold pl-0 ${selectedDetail === cat ? "underline" : "hover:underline"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Tab Content */}
                                {selectedDetail === "About" && <p>{authorDetail.about}</p>}
                                {selectedDetail === "Exhibition" &&
                                    authorDetail.exhibitions?.map((item, i) => (
                                        <div key={i} className="mb-4">
                                            <p>{item.year}</p>
                                            <p>{item.title}</p>
                                            <p><i>{item.organization}</i></p>
                                            <p><i>{item.location}</i></p>
                                            <p>{item.date}</p>
                                        </div>
                                    ))
                                }
                                {selectedDetail === "Recognization" && (
                                    <div>
                                        {authorDetail.recognization?.map((rec, i) => (
                                            <p key={i} className="flex items-center gap-2 text-eerieBlack p-2 pb-0">
                                                {i === 0 ? <FaRegClone /> : <FaLayerGroup />} {rec}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            {/* Explore Artworks Section */}
            <div className="md:m-20 m-5 p-10 border border-dim_gray rounded text-center [&>*]:mb-3">
                <h2 className="font-semibold">Explore {authorDetail?.name}'s Artworks</h2>
                <p>
                    Discover a curated collection of {authorDetail?.name}'s unique creations —
                    from their early pieces to their latest masterpieces. Each artwork reflects
                    the artist’s vision, technique, and evolving journey through colors, textures,
                    and emotions.
                </p>
                <button
                    className="mt-5 border border-dim_gray border-t-2 px-10 py-2 hover:bg-orange_web hover:text-white_web rounded transition-colors duration-200"
                >
                    <a href="#artworks"> EXPLORE  </a>
                </button>
            </div>


            {/* Similar Artists */}
            <div className="ml-5 mr-5">
                <div className="flex mt-10 mb-10">
                    <h2 className="ml-10 font-semibold">Similar Artists You May Like</h2>
                    <div className="flex right-16 absolute">
                        {artworks.length > itemsPerPage && (
                            <div>
                                <button
                                    onClick={showPrev}
                                    disabled={startIndex === 0}
                                    className=" bg-gray-200 p-2 shadow rounded-full z-10 disabled:opacity-50 mr-5"
                                >
                                    <FaCaretLeft />
                                </button>
                                <button
                                    onClick={showNextItems}
                                    disabled={startIndex + itemsPerPage >= artworks.length}
                                    className=" bg-gray-200 p-2 shadow rounded-full z-10 disabled:opacity-50"
                                >
                                    <FaCaretRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-10">
                    {visibleItems.map((item) => (
                        <div key={item._id}>
                            <div className="mb-5">
                                <div className="w-full h-96">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.name}
                                        className="w-full h-full object-cover mb-4 rounded"
                                    />
                                </div>
                                <div className="w-[100px] h-[100px] rounded-full mx-auto -mt-[20%]">
                                    <img
                                        src={item.profileImage}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                            <Link to={`/artist/${item.name}`} onClick={()=>window.location.reload()}>
                                <b className="block text-xl mb-1 hover:text-orange_web font-normal text-center">
                                    {item.name}
                                </b>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
