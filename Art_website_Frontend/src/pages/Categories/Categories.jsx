import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useTransition, startTransition } from "react";
import Category from "./Category";

export default function Categories() {
    const { name } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(name || "all");
    const [filteredItems, setFilteredItems] = useState([]);
    const [expand, setExpand] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const prices = ['500', '1000', '2000', '3000', '5000'];

    const detail = "Welcome to MuseTales, a digital space where creativity finds its voice and art meets emotion. Our platform celebrates artists from around the world, showcasing their unique visions through sculptures, paintings, photography, and digital creations. At MuseTales, we believe that every artwork tells a story — of inspiration, culture, passion, and imagination. Whether you are an admirer, collector, or creator, our goal is to connect you to art that speaks to your soul. We’re committed to promoting both emerging and established artists, offering them a platform to exhibit their talent and reach audiences who truly appreciate artistic expression. Explore our curated categories, discover your favorite styles, and let art become a part of your everyday story."

    const categories = [
        "all",
        "Paintings", "Abstract-Art", "Oil-Paintings", "Acrylic-Paintings",
        "Landscapes", "Curated-Collections", "Modern-Art",
        "Photography", "Sculpture", "Drawings", "Prints",
        "Inspirations", "Fine-Art"
    ];

    const toggle = () => setExpand(prev => !prev);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/categories");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch artworks:", error);
            }
        };
        setLoading(true)
        fetchData();
        setLoading(false)
    }, []);

    // Filter items based on category or price
    useEffect(() => {
        setSelectedCategory(name || "all");
        setLoading(true)
        setFilteredItems(filterResult());
        setLoading(false)
    }, [name, selectedCategory, data]);

    const filterResult = () => {
        if (!data || data.length === 0) return [];

        const isPrice = prices.includes(selectedCategory);
        if (isPrice) {
            const maxPrice = parseFloat(selectedCategory);
            return data.filter(item => parseFloat(item.price) <= maxPrice);
        } else {
            return selectedCategory.toLowerCase() === "all"
                ? data
                : data.filter(item =>
                    Array.isArray(item.category) &&
                    item.category.some(cat =>
                        typeof cat === 'string' && cat.toLowerCase() === selectedCategory.toLowerCase()
                    )
                );
        }
    };

    return (
        loading ?
            <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            :
            <div>
                <div className="flex m-10 gap-2">
                    <Link to={'/category/all'}><p className="underline hover:text-[#F4C542]">category</p></Link>
                    <p> / </p>
                    <Link to={`/artwork/${name}`}><p className="underline hover:text-[#F4C542]">{name?.toLowerCase().replace(/-/g, ' ')}</p></Link>
                </div>

                <div className="m-10 flex">
                    <label htmlFor="category" className="font-bold">
                        Filters:
                    </label>
                    <div className="flex mb-6 -mt-2">
                        <nav className="flex flex-wrap">
                            {categories.map((cat) => (
                                <Link
                                    key={cat}
                                    to={`/category/${cat}`}
                                    className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold
                                ${selectedCategory === cat ? "underline" : "hover:underline"}`}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {
                    <>
                        <Category selectedCategory={selectedCategory} filteredItems={filteredItems} />
                        <div className="bg-gray-200 p-20">
                            <p className="font-semibold">Discover MuseTales Art's Original Paintings</p>
                            {expand ? detail : `${detail.slice(0, 300)}...`}<br />
                            <div className="text-center">
                                <button
                                    onClick={toggle}
                                    className="border border-black mt-5 pl-10 pr-10 hover:bg-teal-600 hover:text-white"
                                >
                                    {expand ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
    );
}
