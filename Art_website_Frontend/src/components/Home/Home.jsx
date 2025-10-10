import { useNavigate, NavLink, Link } from "react-router-dom";
import {
  FaGlobe,
  FaSmile,
  FaLightbulb,
  FaCheckCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const banner = "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501087/banner_pifjjf.png"

const chiefCurator = {
  "Find Art You Love": [
    "At Mosaic Art, we believe every space deserves a story. Each mosaic tells a tale — a reflection of soul, space, and self. Art isn’t chosen; it finds you. We’re honored to guide you to the piece that speaks your vision, your journey, your voice.",
    "Rabea",
    "Chief Curator & VP, Art Advisory",
    "Work with art advisor",
    "/artist/rabea",
  ],
};

const shopByPrice = {
  "UNDER $500": "category/500",
  "$500 - $1000": "category/1000",
  "$1000 - $2000": "category/2000",
  "$2000 - $5000": "category/3000",
  "$5000 - $10000": "category/5000",
};

const buttons = {
  "Paintings": "/category/paintings",
  "Abstract Art": "/category/abstracts",
  "Oil Paintings": "/category/oil-paintings",
  "Landscapes": "/category/landscapes",
  "Acrylic Paintings": "category/acrylic-paintings",
  "Modern Art": "/category/modern-arts",
  "Sculptures": "/category/sculptures",
};

const images = {
  "Find Your Art Style": [
    "/art-for-your-style",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501049/artstyle_d1kixp.jpg",
    "Timeless Strokes",
  ],
  "Mark Life’s Moments": [
    "/exhibition",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501350/marklife_dsesd5.jpg",
    "Visions Beyond Form",
  ],
  "Make a Statement": [
    "/stories",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501171/emotion_hxyv7y.jpg",
    "Works of Emotion",
  ],
};

const Curators = {
  "Best of 2025": [
    "/best-2025",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501101/curator1_dbestg.jpg",
  ],
  "Arresting Abstracts": [
    "/category/abstracts",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501102/curator2_asy8sb.jpg",
  ],
  "Featured Sculptures": [
    "/category/sculptures",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501101/curator3_xbg9oc.jpg",
  ],
  "Powerful Portraits": [
    "/category/portraits",
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501100/curator_4_gfqtbi.jpg",
  ],
};

const category = {
  Paintings: "/category/paintings",
  Photography: "/category/photography",
  Sculpture: "/category/sculptures",
  TextureArt: "/category/textures",
};

const sculptures = {
  "Varsity": ["Van Linigh", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501387/sculpture1_xlbm10.jpg", "7,123", "sculpture1"],
  "Blue Ice": ["Van Linigh", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501385/sculpture2_g0jxpg.jpg", "6,870", "sculpture2"],
  "Scribble Mirror": ["Van Linigh", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501386/sculpture3_pgl0k9.jpg", "8,250", "sculpture3"],
  "Abstract Circle": ["Van Linigh", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501389/sculpture4_dsd1je.jpg", "7,900", "sculpture4"],
};

const bestAbstract = {
  "Delicate Happiness Photograph": ["Van Linigh", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501093/CollectorFav1_sjas8u.jpg", "5,740", "abstract1"],
  "The Room No: 238": ["Omar El-Sayed", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501097/CollectorFav2_nlmg5i.jpg", "6,100", "abstract2"],
  "Time Lapse": ["Omar El-Sayed", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501101/CollectorFav3_snonh2.jpg", "7,420", "abstract3"],
  "Growing Whisper": ["Omar El-Sayed", "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501098/CollectorFav4_ddvwgc.jpg", "6,850", "abstract4"],
};

const explore = {
  "How to Buy Art You Love": [
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501191/findArt_ng3rwh.jpg",
    "VIEW MORE",
    "/how-to-buy",
  ],
  "Collector Stories": [
    "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501100/CollectorStories_quvqku.jpg",
    "LEARN MORE",
    "stories",
    "/stories"
  ],
  "Art for Your Style": ["https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501053/ArtStyle2_grdrv0.jpg", "EXPLORE", "/art-for-your-style"],
};

const guarantee = {
  "Global Selection": [
    FaGlobe,
    "Explore a curated collection of artworks from world-renowned and emerging artists across the globe.",
  ],
  "Satisfaction Guaranteed": [
    FaSmile,
    "We stand by the quality of every piece. Enjoy hassle-free returns and buyer protection for peace of mind.",
  ],
  "Complementary Art Advisory Services": [
    FaLightbulb,
    "Need help finding the perfect piece? Our experts offer free one-on-one consultations tailored to your style and space.",
  ],
};

function Home() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;
  const [mobileShopCategory, setMobileShopCategory] = useState(false);
  const [mobileShopPrice, setMobileShopPrice] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .catch((err) => console.error("Error fetching feedback:", err));
  }, []);

  const showPrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const showNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, feedback.length - itemsPerPage)
    );
  };

  const visibleItems = useMemo(
    () => feedback.slice(startIndex, startIndex + itemsPerPage),
    [feedback, startIndex]
  );
  
  return (
    <>
      {/* Banner */}
      <div className=" w-full md:h-screen h-96 overflow-hidden">
        <div className="w-full h-full">
          <img src={banner} className={"w-full h-full object-cover"} />
        </div>
        <div className="absolute z-10 top left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="pl-10 pr-10 pb-3 pt-3 bg-eerieBlack text-white_web rounded hover:bg-white hover:text-eerieBlack transition"
            onClick={() => navigate("/category/all")}
          >
            Start Exploring
          </button>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto md:overflow-hidden gap-4 mt-3 p-5 md:justify-center scroll-smooth snap-x snap-mandatory">
        {Object.entries(buttons).map(([key, value]) => (
          <button
            key={key}
            className="border p-2 px-6 border-dim_gray rounded text-nowrap snap-start hover:text-orange_web"
            onClick={() => navigate(value)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Headline */}
      <div className="text-center mt-20 text-4xl font-semibold">
        <h1>Discover Art You Love From the World's</h1>
        <h1>Leading Online Gallery</h1>
      </div>

      {/* Featured Images */}
      <div className=" grid md:grid-cols-3 sm:grid-cols-1 m-10 gap-10">
        {Object.entries(images).map(([text, [value, source, title]]) => (
          <div key={text} className="w-full h-80 mb-10">
            <img src={source} alt={title} className="w-full h-full object-cover" />
            <p>{title}</p>
            <NavLink className="underline hover:text-orange_web" to={value}>
              {text}
            </NavLink>
          </div>
        ))}
      </div>

      {/* Collect More Section */}
      <div className="m-10 p-10 bg-gray-200 text-center">
        <h2>New to Collecting?</h2>
        <p>Discover step-by-step guides on how to find, evaluate, and purchase original art with confidence.</p>
        <button
          className="border border-dim_gray mt-3 rounded hover:bg-orange_web hover:text-eerieBlack"
          onClick={() => navigate("/how-to-buy")}
        >
          Learn How to Buy
        </button>
      </div>

      {/* Repeat Featured Images Section */}
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 m-10 gap-10">
        {Object.entries(Curators).map(([text, [value, source]]) => (
          <div key={text} className="w-full h-80 mb-10">
            <img src={source} alt={text} className="w-full h-full object-cover" />
            <NavLink className=" hover:text-orange_web" to={value}>
              {text}
            </NavLink>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex items-center m-10 justify-between">
          <h2>Shop By Category</h2>
          <button
            onClick={() => setMobileShopCategory((s) => !s)}
            className="p-2 rounded-md text-eerieBlack hover:text-orange_web"
            aria-expanded={mobileShopCategory}
          >
            {mobileShopCategory ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileShopCategory && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-3"
            >
              <div className="gap-5 flex flex-wrap">
                {Object.entries(category).map(([key, value]) => (
                  <button
                    key={key}
                    className="border-b-2 border-0 p-2 border-gray-600 hover:bg-orange_web hover:text-white_web w-full md:w-[200px]"
                    onClick={() => navigate(value)}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-10 m-10 items-center mt-3">
        <h2 className="mb-3">Shop by Category</h2>
        <div className="gap-5 flex flex-wrap">
          {Object.entries(category).map(([key, value]) => (
            <button
              key={key}
              className="border p-2 px-7 border-dim_gray rounded hover:bg-orange_web hover:text-white_web w-full md:w-[200px]"
              onClick={() => navigate(value)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Sculptural Art */}
      <div className="flex mt-10 ml-10 mr-10 items-center">
        <h2>Sculptural Art</h2>
        <NavLink
          className="underline absolute right-10 hover:text-orange_web"
          to="/category/sculptures"
        >
          Explore Now
        </NavLink>
      </div>

      {/* Sculptures List */}
      <div className=" grid md:grid-cols-4 grid-cols-2 m-10 gap-10">
        {Object.entries(sculptures).map(([name, [creator, source, price, id]]) => (
          <div key={id}>
            <div className="w-full md:h-80 h-56">
              <img
                src={source}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
            <NavLink
              to={`/artwork/${id}`}
              className="hover:text-orange_web block"
            >
              {name}
            </NavLink>
            <NavLink to={`/artist/${creator}`} className="hover:text-orange_web">
              {creator}
            </NavLink>
            <p>${price}</p>
          </div>
        ))}
      </div>

      {/* Best Abstract */}
      <div className="flex mt-10 ml-10 mr-10 items-center">
        <h2>Best Abstract of Summer 2025</h2>
        <NavLink
          className="underline absolute right-10 hover:text-orange_web"
          to="/collections"
        >
          Explore Now
        </NavLink>
      </div>

      {/* Best Abstract List */}
      <div className="grid md:grid-cols-4 grid-cols-2 m-10 gap-10">
        {Object.entries(bestAbstract).map(([name, [creator, source, price, id]]) => (
          <div key={id} >
            <div className="w-full md:h-80 h-56">
              <img
                src={source}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
            <NavLink
              to={`/artwork/${id}`}
              className="hover:text-orange_web block"
            >
              {name}
            </NavLink>
            <NavLink to={`/artist/${creator}`} className="hover:text-orange_web">
              {creator}
            </NavLink>
            <p>${price}</p>
          </div>
        ))}
      </div>

      {/* Shop by Price */}
      <div className="md:hidden">
        <div className="flex items-center m-10 justify-between">
          <h2>Shop By Price</h2>
          <button
            onClick={() => setMobileShopPrice((s) => !s)}
            className="p-2 rounded-md text-gray-700 hover:text-orange_web"
            aria-expanded={mobileShopPrice}
          >
            {mobileShopPrice ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileShopPrice && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-3"
            >
              <div className="gap-5 flex flex-wrap">
                {Object.entries(shopByPrice).map(([price, link]) => (
                  <button
                    key={price}
                    className="border-b-2 border-0 p-2 border-gray-600 hover:bg-orange_web hover:text-white_web w-full md:w-[200px]"
                    onClick={() => navigate(link)}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div >

      {/* Desktop View */}
      < div className="hidden md:flex gap-10 m-10 items-center mt-3" >
        <h2 className="mb-3">Shop by Price</h2>
        <div className="gap-5 flex flex-wrap">
          {Object.entries(shopByPrice).map(([price, link]) => (
            <button
              key={link}
              className="border p-2 pl-5 pr-5 border-dim_gray w-[180px] rounded hover:bg-orange_web hover:text-white_web"
              onClick={() => navigate(link)}
            >
              {price}
            </button>
          ))}
        </div>
      </div >

      {/* Chief Curator Section */}
      < div className="grid md:grid-cols-2  grid-cols-1 jsutify-center gap-10 m-20 h-full items-center" >
        <div className="w-full h-96 bg-blue-100">
          <img
            src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501036/advisory_ymrmcx.jpg"
            alt="art love"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          {Object.entries(chiefCurator).map(
            ([title, [description, signature, chief, workwith, link]]) => (
              <div key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{signature}</p>
                <p>{chief}</p>
                <Link to={link}>
                  <p className="underline hover:text-orange_web">{workwith}</p>
                </Link>
              </div>
            )
          )}
        </div>
      </div >

      {/* More to Explore */}
      < div className="flex m-10 items-center" >
        <h2>More to Explore</h2>
        <NavLink
          className="underline absolute right-10 hover:text-orange_web"
          to="/category/all"
        >
          View All
        </NavLink>
      </div >

      {/* Explore Section */}
      < div className="grid md:grid-cols-3 grid-cols-1 m-10 gap-10" >
        {
          Object.entries(explore).map(([name, [source, title, url]]) => (
            <div key={name} className="mb-5">
              <div className="w-full md:h-96 h-56  ">
                <img src={source} alt={name} className="w-full h-full object-cover" />
              </div>
              <p>{name}</p>
              <NavLink className="underline hover:text-orange_web" to={url}>
                {title}
              </NavLink>
            </div>
          ))
        }
      </div >

      {/* Guarantee Section */}
      < div className="bg-eerieBlack sm:block lg:flex p-20 gap-20 justify-center flex-wrap-0" >
        {
          Object.entries(guarantee).map(([title, [Icon, description]]) => (
            <div key={title} className="text-center sm:pb-20">
              <Icon
                className="text-4xl text-white_web hover:text-orange_web mb-4 mx-auto"
                title={title}
              />
              <p className="text-xl text-white_web">{title}</p>
              <p className="text-white_web">{description}</p>
            </div>
          ))
        }
      </div >

      {/* Feedback Pagination Section */}
      {
        feedback.length > 0 && (
          <div className="flex items-center">
            <button
              onClick={showPrev}
              disabled={startIndex === 0}
              className="-translate-y-1/2 bg-white_web p-2 shadow rounded-full z-10 disabled:opacity-50 ml-5"
            >
              <FaCaretLeft className="text-eerieBlack" />
            </button>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 justify-center p-10 flex-wrap-0">
              {visibleItems.map((item) => (
                <div key={item._id}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-green-500 text-xl ">{item.rating}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <FaCheckCircle className="text-md" />
                      <span>{item.verification}</span>
                    </div>
                  </div>
                  <p className="font-bold">{item.comment}</p>
                  <p>{item.detail}</p>
                  <p className="font-semibold flex">
                    {item.name}, {item.days} days ago
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={showNext}
              disabled={startIndex + itemsPerPage >= feedback.length}
              className="-translate-y-1/2 bg-white_web p-2 shadow rounded-full z-10 disabled:opacity-50 mr-5"
            >
              <FaCaretRight />
            </button>
          </div>
        )
      }
    </>
  );
}

export default Home;
