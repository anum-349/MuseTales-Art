import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {
    FaCaretLeft,
    FaCaretRight,
    FaCheck,
    FaCloud,
    FaHeart,
    FaPlusCircle,
    FaShoppingBag,
} from "react-icons/fa"
import Login from "../../components/User/Login"

export default function ArtworkDetail() {
    const { id } = useParams()
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showForget, setShowForget] = useState(false);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    // DB data 
    const [categories, setCategories] = useState([])
    const [artDetails, setArtDetails] = useState([])
    const [authors, setAuthors] = useState([])

    // selected item
    const [selectedArt, setSelectedArt] = useState(null)
    const [artDetail, setArtDetail] = useState(null)
    const [authorDetail, setAuthorDetail] = useState(null)

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [categoryType, setCategoryType] = useState("About Artwork")
    const [startIndex, setStartIndex] = useState(0)
    const [expand, setExpand] = useState(false)

    const itemsPerPage = 4

    // Fetch data 
    useEffect(() => {
        setLoading(true)
        async function fetchAll() {
            try {
                const [catRes, detailRes, authRes] = await Promise.all([
                    fetch("http://localhost:5000/api/categories").then((res) => res.json()),
                    fetch("http://localhost:5000/api/art-details").then((res) => res.json()),
                    fetch("http://localhost:5000/api/authors").then((res) => res.json()),
                ])
                setCategories(catRes)
                setArtDetails(detailRes)
                setAuthors(authRes)
            } catch (err) {
                console.error("Error fetching data:", err)
            }
        }
        fetchAll()
        setLoading(false)
    }, [])


    // Add to Cart functionality
    const handleAddToCart = async (item) => {
        const token = localStorage.getItem("token");
        if (!token) {
            setShowLogin(true);
            setShowSignup(false);
            setShowForget(false);
            return
        }

        const cartData = {
            name: item.title,
            image: item.mainImage,
            category: item.category[0],
            author: item.author,
            shipping: "Included",
            delivery: 200,
            price: item.price
        }

        try {
            const res = await fetch(`http://localhost:5000/api/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(cartData)
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Error response:", data);
                alert(data.message || "Failed to add item to cart");
                return;
            }

            alert("Item added to cart!");
            navigate("/cart");
        } catch (err) {
            console.error("Error adding to cart:", err);
            alert("Something went wrong, please try again.");
        }
    };

    useEffect(() => {
        setLoading(true)
        if (!categories.length || !artDetails.length || !authors.length) return

        const filteredArt = categories.find(
            (item) => item._id === id
        )
        if (!filteredArt) return

        setSelectedArt(filteredArt)
        setSelectedCategory(filteredArt.author)
        setCategoryType("About Artwork")

        const detail = artDetails.find((d) => d.artId === filteredArt._id)
        setArtDetail(detail || null)
        const authorInfo = authors.find(
            (a) => a.name.toLowerCase() === filteredArt.author.toLowerCase()
        )
        setAuthorDetail(authorInfo || null)
        setLoading(false)
    }, [name, categories, artDetails, authors])

    // Toggle expand
    const toggle = () => setExpand((prev) => !prev)

    // Pagination
    const filteredItems =
        selectedCategory === "Robert Bubel"
            ? categories
            : categories.filter((item) => item.author === selectedCategory)

    function showPrev() {
        setStartIndex((prev) => Math.max(prev - itemsPerPage, 0))
    }

    const showNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + itemsPerPage, filteredItems.length - itemsPerPage)
        )
    }

    const visibleItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

    const categoriesTabs = [
        "About Artwork",
        "Detail and Dimensions",
        "Shipping And Returns",
        "Artist Story",
    ]

    return (
        loading ?
            <>
                <div className="flex items-center justify-center h-screen">
                    <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </> :
            <>
                {/* Breadcrumb */}
                <div className="flex m-10 gap-2">
                    <Link to={"/category/all"}>
                        <p className="underline hover:text-teal-600">category</p>
                    </Link>
                    <p> / </p>
                    <Link to={`/category/${selectedArt?.category?.[0]?.toLowerCase()}`}>
                        <p className="underline hover:text-teal-600">
                            {selectedArt?.category?.[0]?.toLowerCase()?.replace("-", " ")}
                        </p>
                    </Link>
                    <p> / </p>
                    <Link to={`/artwork/${name}`}>
                        <p className="underline hover:text-teal-600">{name?.toLowerCase()}</p>
                    </Link>
                </div>

                {/* Artwork Detail */}
                <div className="grid md:grid-cols-2 ml-20 mr-20 gap-10">
                    {/* Main Image */}
                    <div className="w-full h-full flex bg-slate-200 p-5 justify-center items-center">
                        <div className="w-full h-96">
                            <img
                                src={selectedArt?.mainImage}
                                alt={selectedArt?.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Artwork Info */}
                    <div>
                        {selectedArt ? (
                            <div className="bg-gray-300 p-10">
                                <h2>{selectedArt.title}</h2>
                                <p className="text-red-500">{selectedArt.author}</p>
                                <p>{selectedArt.country}</p>
                                <p>
                                    {selectedArt.category}, {selectedArt.detail}
                                </p>
                                <p>Size: {selectedArt.size}</p>
                                <p className="mb-4">Ships in a Box</p>

                                <div className="bg-black pl-3 pt-5 pb-10 -mr-12 pr-3 relative">
                                    <div className="flex">
                                        <h2 className="text-white">${selectedArt.price}</h2>
                                        <button className="pl-5 pt-2 pb-2 text-white right-5 bg-red-500 absolute rounded" onClick={()=>handleAddToCart(selectedArt)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                    <p className="right-5 text-white flex items-center absolute">
                                        <FaCloud className="text-[15px] mr-2" /> Make an Offer
                                    </p>
                                </div>

                                <p className="flex gap-3 items-center mt-2">
                                    <FaCheck />
                                    {selectedArt.shipping}
                                </p>
                                <p>{selectedArt.trustScore} Trusted Score</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="md:ml-20 ml-10 mr-10 mt-5">
                    <div className="flex mb-6 -mt-2">
                        <nav className="flex overflow-x-scroll md:overflow-hidden">
                            {categoriesTabs.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategoryType(cat)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold ${categoryType === cat ? "underline" : "hover:underline"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="">
                        {categoryType === 'About Artwork' ?
                            artDetail ? (<div key={artDetail.id}>
                                {<div className="m-5 gap-2"> <p>{artDetail.aboutArtWork.about}</p>
                                    <div className="grid grid-cols-[150px,auto]">
                                        <b className="font-semibold">Year Created:</b>
                                        <p> {artDetail.aboutArtWork.year} </p> </div>
                                    <div className="grid grid-cols-[150px,auto]">
                                        <b className="mr-10 font-semibold">Subject:</b>
                                        <p> {artDetail.aboutArtWork.subject} </p>
                                    </div>
                                    <div className="grid grid-cols-[150px,auto]">
                                        <b className="font-semibold">Styles:</b>
                                        <p className="underline"> {artDetail.aboutArtWork.styles.toString()} </p>
                                    </div>
                                    <div className="grid grid-cols-[150px,auto]">
                                        <b className="font-semibold">Mediums:</b>
                                        <p className="underline"> {artDetail.aboutArtWork.mediums.toString()}
                                        </p>
                                    </div>
                                </div>}
                            </div>)
                                : null
                            : categoryType === 'Detail and Dimensions' ?
                                artDetail ? (<div key={artDetail.id}
                                    className="m-5 gap-2">
                                    <div className="grid grid-cols-[200px,auto]">
                                        <b className="font-semibold">Medium:</b>
                                        <p>{artDetail.detailAndDimensions.medium}</p>
                                    </div> <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Rarity:</b>
                                        <p> {artDetail.detailAndDimensions.rarity}</p>
                                    </div>
                                    <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Size:</b>
                                        <p>{artDetail.detailAndDimensions.size}</p>
                                    </div>
                                    <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Ready to Hang:</b>
                                        <p>{artDetail.detailAndDimensions.readyToHang}</p>
                                    </div> <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Frame:</b>
                                        <p>{artDetail.detailAndDimensions.frame}</p>
                                    </div>
                                    <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Authenticity:</b>
                                        <p> {artDetail.detailAndDimensions.authenticity}</p>
                                    </div> <div className="grid grid-cols-[200px,auto]" >
                                        <b className="font-semibold">Packaging:</b>
                                        <p> {artDetail.detailAndDimensions.packaging}</p>
                                    </div>
                                </div>)
                                    : null : categoryType === 'Shipping And Returns' ?
                                    artDetail ? (<div key={artDetail.id}
                                        className="m-5 gap-2">
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[130px]">Delivery Cost:</b>
                                            <p> {artDetail.shippingAndReturns.cost}</p>
                                        </div>
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[128px]">Delivery Time:</b>
                                            <p> {artDetail.shippingAndReturns.time}</p>
                                        </div>
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[130px]">Returns:</b>
                                            <p> {artDetail.shippingAndReturns.returns}</p>
                                        </div>
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[130px]">Handling:</b>
                                            <p> {artDetail.shippingAndReturns.handling}</p>
                                        </div>
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[130px]">Ships From:</b>
                                            <p> {artDetail.shippingAndReturns.shipsFrom}</p>
                                        </div>
                                        <div className="grid grid-cols-[300px,auto]">
                                            <b className="font-semibold mr-[130px]">Customs:</b>
                                            <p> {artDetail.shippingAndReturns.customs}</p>
                                        </div>
                                    </div>)
                                        : null : categoryType === 'Artist Story' ?
                                        artDetail ? (<div key={artDetail.id}>
                                            <p>{artDetail.artistStory}</p>
                                        </div>) : null : null}
                        <div className="flex mb-10 mt-5">
                            <p>Need more information?
                            </p> <NavLink className={'underline'} to={'/contact'}>Contact Us</NavLink>
                        </div>
                    </div>
                </div>

                {/* Author Detail */}
                < div className="bg-teal-50 sm:m-5 md:m-20 mt-10 mb-10 p-10" id="recognization" >
                    {authorDetail && (
                        <div className="md:ml-20 md:mr-10 relative">
                            <div className="md:flex items-center gap-5">
                                <div className="w-[100px] h-[100px]">
                                    <img
                                        src={authorDetail.image}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <Link to={`/artist/${authorDetail?.name}`}>
                                        <p className="text-lg font-semibold hover:text-teal-600">
                                            {authorDetail?.name}
                                        </p>
                                    </Link>
                                    <p>{authorDetail.country}</p>
                                </div>
                                <button
                                    className="border border-black md:right-10 md:mt-0 sm:-mt-28 sm:ml-56 absolute hover:bg-teal-600 hover:text-white pl-10 pr-10"
                                    onClick={() => navigate(`/artist/${authorDetail.name}`)}
                                >
                                    View Profile
                                </button>
                            </div>
                            <div className="mt-5 mb-5">
                                <p className="text-justify">
                                    {expand
                                        ? authorDetail.about
                                        : `${authorDetail.about.slice(0, 250)}...`}
                                    {authorDetail.about.length > 250 && (
                                        <button
                                            onClick={toggle}
                                            className="border border-black mt-5 mb-5 ml-[40%] pl-10 pr-10 hover:bg-teal-600 hover:text-white"
                                        >
                                            {expand ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                    )
                    }
                </div >

                {/* More from Artist */}
                < div className="ml-5 mr-5" >
                    <div className="flex mt-10 mb-10">
                        <h1 className="ml-10">More From {selectedArt?.author}</h1>
                        <div className="flex right-16 absolute">
                            {filteredItems.length > itemsPerPage && (
                                <>
                                    <button
                                        onClick={showPrev}
                                        disabled={startIndex === 0}
                                        className="bg-teal-50 p-2 shadow rounded-full disabled:opacity-50 mr-5"
                                    >
                                        <FaCaretLeft />
                                    </button>
                                    <button
                                        onClick={showNext}
                                        disabled={startIndex + itemsPerPage >= filteredItems.length}
                                        className="bg-teal-50 p-2 shadow rounded-full disabled:opacity-50"
                                    >
                                        <FaCaretRight />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Item List */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-10">
                        {visibleItems.map((item) => (
                            <div key={item._id} className="bg-teal-50 p-4 rounded shadow">
                                <img
                                    src={item.mainImage}
                                    alt={item.title}
                                    className="w-full h-48 object-cover mb-4 rounded"
                                />
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-lg font-semibold">${item.price}</p>
                                    <div className="flex gap-2 text-gray-600">
                                        <FaHeart />
                                        <FaPlusCircle onClick={()=>handleAddToCart(item)} />
                                        <Link to={"/cart"}>
                                            <FaShoppingBag />
                                        </Link>
                                    </div>
                                </div>
                                <Link to={`/artwork/${item.title}`}>
                                    <b className="block text-xl mb-1 hover:text-teal-600">
                                        {item.title}
                                    </b>
                                </Link>
                                <p className="text-sm text-gray-700">
                                    <NavLink
                                        to={`/artist/${item.author}`}
                                        className="text-lg font-semibold hover:text-teal-600"
                                    >
                                        {item.author}
                                    </NavLink>
                                    , {item.country}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.detail} <br /> {item.size}
                                </p>
                            </div>
                        ))}
                    </div>
                </div >

                <Login
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}
                    setShowSignup={setShowSignup}
                    setShowForget={setShowForget}
                />
            </>
    )
}
