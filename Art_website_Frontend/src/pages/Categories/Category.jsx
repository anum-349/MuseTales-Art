import { Link} from "react-router-dom";
import { FaShoppingBag, FaHeart, FaPlusCircle } from "react-icons/fa";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";

export default function Category({ selectedCategory="", filteredItems, grid=4 }) {
  const [visibleCount, setVisibleCount] = useState(12)
  
  const breakpoints = {
    default: grid,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <div className="m-10">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.length > 0 ? (
            filteredItems.slice(0, visibleCount).map((item) => (
              <div key={item._id} className="mb-6 bg-white_web">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-full object-cover mb-4 rounded"
                />
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-semibold">${item.price}</p>
                  <div className="flex gap-2 text-gray-600">
                    <FaHeart />
                    <FaPlusCircle />
                    <Link to={'/cart'}>
                      <FaShoppingBag />
                    </Link>
                  </div>
                </div>
                <Link to={`/artwork/${item.artId}`}>
                  <b className="block text-xl mb-1 hover:text-orange_web">{item.title}</b>
                </Link>
                <div className="text-lg text-gray-700 flex">
                  <Link to={`/artist/${item.author}`}><p className="text-lg font-semibold hover:text-orange_web">{item.author}</p></Link>
                  , {item.country}</div>
                <p className="text-sm text-gray-500">{item.detail} . {item.size}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No items found in the "{selectedCategory}" category.
            </p>
          )}
        </Masonry>
      </div>
      <div>
        {
          visibleCount < filteredItems.length && (
            <div className="text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="-translate-y-1/2 bg-white_web p-2 shadow rounded border-dim_gray border z-10 disabled:opacity-50"
              >
                LOAD MORE ARTWORKS
              </button>
            </div>
          )
        }
      </div>
    </>
  );
}
