import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Artists() {
    const [authors, setAuthors] = useState([]); 
    const [expand, setExpand] = useState(false);
    const [visibleCount, setVisibleCount] = useState(12);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const detail = "Define your data models (Artwork, Artist, Story, FAQ, CTA). Build components: HeroCarousel, GalleryGrid, ArtworkCard, Filters, ProfileCard, StoryPost. Implement routing & state: React Router + React Query / Redux. Add integrations: cart, advisory form, image hosting, blog CMS. Great! If you want to build a basic version of an art gallery site (inspired by Muse Tales Art) without too much detail, here's a simplified structure of what to build — clean, professional, and great for your portfolio.";

    const toggle = () => setExpand((prev) => !prev);

    // Fetch authors from DB
    useEffect(() => {
        async function fetchAuthors() {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/api/authors");
                if (!response.ok) throw new Error("Failed to fetch authors");
                const data = await response.json();
                setAuthors(data);
            } catch (err) {
                console.error("Error fetching authors:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAuthors();
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <div className="flex m-10 gap-2">
                <Link to={"/"}>
                    <p className="underline hover:text-teal-600">Home</p>
                </Link>
                <p> / </p>
                <Link to={`/artists`}>
                    <p className="underline hover:text-teal-600">Artists</p>
                </Link>
            </div>

            {/* Author List */}
            <div className="m-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                {loading && <p>Loading authors...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && authors.length > 0 ? (
                    authors.slice(0, visibleCount).map((item) => (
                        <div key={item.id} className="mb-6 bg-white">
                            <img
                                src={item.thumbnail}
                                alt={item.name}
                                className="w-full h-80 object-cover mb-4 rounded"
                            />
                            <div className="mb-2 flex items-center gap-5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="[&>*]:text-black">
                                    <p>
                                        {item.role}{" "}
                                        <span className="font-medium">{item.name}</span>
                                    </p>
                                    <p>{item.country}</p>
                                </div>
                            </div>
                            <button
                                className="border border-black rounded w-full hover:bg-teal-600 hover:text-white mt-5"
                                onClick={() => navigate(`/artist/${item.name}`)}
                            >
                                View Profile
                            </button>
                        </div>
                    ))
                ) : null}
            </div>

            {/* Load More Button */}
            <div>
                {visibleCount < authors.length && (
                    <div className="text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 12)}
                            className="-translate-y-1/2 bg-white p-2 shadow rounded border-black border z-10 disabled:opacity-50"
                        >
                            LOAD MORE ARTISTS DETAILS
                        </button>
                    </div>
                )}
            </div>

            {/* Detail Section */}
            <div className="bg-gray-200 p-20">
                <p className="font-semibold">Discover Our Emerging Artists</p>
                {expand ? detail : `${detail.slice(0, 300)}...`}
                <br />
                <div className="text-center">
                    <button
                        onClick={toggle}
                        className={
                            "border border-black mt-5 pl-10 pr-10 hover:bg-teal-600 hover:text-white"
                        }
                    >
                        {expand ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    );
}
