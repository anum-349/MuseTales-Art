import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Artists() {
    const [authors, setAuthors] = useState([]);
    const [expand, setExpand] = useState(false);
    const [visibleCount, setVisibleCount] = useState(12);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const detail = ["The Artists page serves as the soul of the art gallery — a curated space celebrating the creators behind every masterpiece. It’s designed to help visitors discover artists, explore their stories, and connect with their creative journeys.",
        "Each artist profile showcases detailed information including biography, country, artistic style, exhibitions, and signature works. The page highlights their achievements through timelines, recognitions, and current collaborations, giving art enthusiasts a deeper insight into each artist’s evolution.",
        "The layout features a visually engaging grid or card-based design with high-quality artist portraits, hover effects, and minimalist typography for a museum-like experience. Filters and search options allow users to explore artists by country, category, style, or popularity.",
        "Each artist card leads to a dedicated profile page, where visitors can view exhibitions, past works, and available artworks. The page can also include an option to “Follow” an artist or view related collections to keep users engaged.",
        "From timeless masters to emerging talents, this page acts as a bridge between creativity and audience — celebrating diversity, inspiration, and the human stories that shape art. It captures not just the artists’ creations but also their passions, processes, and personalities — making art more personal, relatable, and memorable."]

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
                    <p className="underline hover:text-orange_web">Home</p>
                </Link>
                <p> / </p>
                <Link to={`/artists`}>
                    <p className="underline hover:text-orange_web">Artists</p>
                </Link>
            </div>

            {/* Author List */}
            <div className="m-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                {loading && <p>Loading authors...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && authors.length > 0 ? (
                    authors.slice(0, visibleCount).map((item) => (
                        <div key={item._id} className="mb-6 bg-white_web">
                            <LazyLoadImage
                                src={item.thumbnail}
                                alt={item.name}
                                className="w-full h-80 object-cover mb-4 rounded"
                            />
                            <div className="mb-2 flex items-center gap-5">
                                <LazyLoadImage
                                    src={item.profileImage}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="[&>*]:text-eerieBlack">
                                    <p>
                                        {item.role}{" "}
                                        <span className="font-medium">{item.name}</span>
                                    </p>
                                    <p>{item.country}</p>
                                </div>
                            </div>
                            <button
                                className="border border-dim_gray rounded w-full hover:bg-orange_web hover:text-white_web mt-5"
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
                            className="-translate-y-1/2 bg-white_web p-2 shadow rounded border-dim_gray border z-10 disabled:opacity-50"
                        >
                            LOAD MORE ARTISTS DETAILS
                        </button>
                    </div>
                )}
            </div>

            {/* Detail Section */}
            <div className="bg-gray-200 p-20">
                <p className="font-semibold">Discover Our Emerging Artists</p>
                {expand ? detail.map((item, i) => (
                    <span key={i} className="mb-1 block">{item}</span>
                ))
                 : `${detail[0]}...`}
                <br />
                <div className="text-center">
                    <button
                        onClick={toggle}
                        className={
                            "border border-dim_gray mt-5 pl-10 pr-10 hover:bg-orange_web hover:text-white_web"
                        }
                    >
                        {expand ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    );
}
