import { FaClipboard, FaPenFancy, FaQuoteLeft } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HowToBuy() {
    const navigate = useNavigate()

    return (
        <>
            <div className="relative mb-10">
                <LazyLoadImage
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501310/how-to-buy_tv754s.webp"
                    alt="art advisory image"
                    className="w-screen h-96 object-left-top"
                />
            </div>

            <div className="grid md:grid-cols-2 m-10 md:ml-40 md:mr-20 items-center">
                <div className="mr-20 ">
                    <h1 className="font-semibold text-6xl">Finding that Perfect Work</h1>
                    <br></br>
                    <span className="mb-4">
                        According to a recent survey by University College London, looking at a beautiful work of art impacts the brain in the same way as falling in love with a person. But what if you’re considering several artworks and not sure how to make a final decision? Muse Tales Art’s curators provide you with expert advice and helpful tools to find the work you love.
                        <br />
                        And if you’ve already made a decision and a purchase, jump to our post on <NavLink className='underline' to={'/category/top'}>enjoying your new artwork</NavLink>.
                    </span>
                    <br />
                    <p className="font-bold text-eerieBlack mt-3 text-lg">How to Get Started</p>
                    <ul className="mt-3 list-disc ml-8 [&>*]:underline" >
                        <li><a href="#reading">Reading & Understanding an Artwork Listing</a></li>
                        <li><a href="#accessing">Assessing the Quality of an Artwork</a></li>
                        <li><a href="#placement">Deciding Where to Place the Work</a></li>
                    </ul>
                </div>
                <div className="w-full h-full bg-blue-100">
                    <LazyLoadImage src="/artfair2.png" alt="art love" className="w-full h-full object-cover" />
                </div>
            </div>

            <div id="reading">
                <div>
                    <h1 className="font-semibold text-6xl text-center m-10">Reading a Listing</h1>
                    <p className="text-center md:pl-64 md:pr-64 pl-10 pr-10">Each artwork page on Muse Tales Art contains a lot of helpful information. Here are the things you should be paying special attention to as you consider a work.</p>
                </div>

                <div className="grid md:grid-cols-2 m-10 md:m-40 mt-5 md:mt-5 items-center gap-4 0">
                    <div>
                        <p>First, read the size of the art and compare it against the dimensions in your home. To help visualize how an artwork will look in your space, use the Muse Tales Art iOS app or browse art on any mobile device, to virtually place any work in your home or office with the “View in Your Room” feature. Likewise, a measuring tape and some imagination will go a long way as well.</p>
                        <div className="flex m-5">
                            <FaClipboard className="w-full text-4xl" />
                            <FaAddressCard className="w-full text-4xl" />
                            <FaPenFancy className="w-full text-4xl" />
                        </div>
                        <p>Once you understand the artwork’s dimensions, check to see how it’s packaged. For example, if it’s in a tube, it will need to be framed when it arrives. If it’s in a box or crate, it is likely already ready-to-hang.</p>
                    </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501100/buyart_dcj3hm.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 md:mt-20 m-10 items-center gap-20">
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501051/artist_cfyy2c.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p>Next, read the description. This critical piece often includes helpful information to give you a better sense of the work, the artist, their inspiration, and art practice, as well as further information on other works in their portfolio. Read the artist’s name and the city they’re based in—explore their profile and get to know your artist. And if you ever need more context around an artwork you love, reach out to our curators who are happy to advise throughout the art buying process.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 m-10 md:mt-20 items-center gap-20">
                    <div>
                        <p>Last but not least, make sure you understand the price, which includes shipping but not taxes, depending on where you are in the world and where the art is coming from. You can always add your work to your shopping cart to calculate an order total after inputting a shipping address. Remember that you can always make an offer on a listing. We recommend making an offer within 80% of the asking price, if you’d like the artist to accept.</p>                </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501102/curtural_iyptfm.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div id="accessing">
                <div className="relative mt-10 mb-10">
                    <LazyLoadImage
                        src="/front-view-man-holding-paint-palette.jpg"
                        alt="art advisory image"
                        className="w-screen h-96 object-left-bottom"
                    />

                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                        <div className="text-center px-4">
                            <h1 className="text-white_web font-semibold mb-4 text-7xl">Assessing the Quality of an Artwork</h1>
                        </div>
                    </div>
                </div>

                <div className="md:ml-56 md:mr-56 m-20 text-center">
                    <p>Each artwork page contains a lot of helpful information you can make use of during the consideration process. On each Muse Tales Art artwork listing page, look under “Artist Recognition” to determine if the artist has been featured in a collection by our curators, exhibited at the The Other Art Fair, been highlighted in One to Watch (one of our editorial features), or included in our prestigious print catalog.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 m-10">
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501392/jar-with-brushes-near-black-wall_s89rkk.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="/graffiti-children-bicycle.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501208/flat-lay-paint-brushes_1_dv8ymq.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="md:ml-56 md:mr-56 m-16 text-center">
                    <p>On the artist’s profile you can also determine if the artist has received a Bachelor’s or Master’s Degree in Fine Art from a notable school, view their exhibition history, see whether their work is part of private collections, as well as read their artist’s statement to get a better sense of the story behind their work.</p>
                </div>
            </div>

            <div id="placement">
                <div className="relative mt-10 mb-10">
                    <LazyLoadImage
                        src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501024/aboutBanner2_u4bexs.webp"
                        alt="art advisory image"
                        className="w-screen h-96 object-cover"
                    />

                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                        <div className="text-center px-4">
                            <h1 className="text-white_web font-semibold mb-4 text-4xl">Deciding Where to Place the Work</h1>
                        </div>
                    </div>
                </div>

                <div className="md:ml-56 md:mr-56 m-16 text-center mb-10">
                    <p>Searching for original art to elevate your living and working spaces? You may know your interior style—and you may have reckoned with your budget—but don’t forget to take size and shape of the work into account. A work of art in the right dimensions and orientation can anchor a room, while a work in the wrong size can look like an afterthought. If you find yourself staring at bare walls unsure of where to begin, here’s five tips and tricks for finding that perfect fit.</p>
                </div>

                <hr />

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 m-10 mt-20 items-center gap-20">
                    <div>
                        <p className="text-4xl font-semibold mb-3">Size</p>
                        <p>Aim to fill about two-thirds to three-fourths of your available wall space. If you are looking to create a focal point above a piece of furniture—such as your couch, headboard, or dresser—follow the same proportions and find a work two-thirds to three-fourths smaller than your furniture. When in doubt, go big; If you’re buying a work without measurements on hand, it’s typically safer to err on the larger side. You want your artwork to stand out and complement your space—empty wall space can overwhelm a smaller work. Here’s a collection of oversized works to get you thinking.</p>
                        <button className="border bg-black text-white_web ml-[25%] mt-5 hover:bg-orange_web hover:text-white_web pl-10 pr-10" onClick={() => { navigate('/collections') }}>Explore the Collection</button>
                    </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501053/ArtStyle2_grdrv0.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 m-10 mt-20 items-center gap-20">
                    <div className="w-full h-72 bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501071/bedroom1_vntnmy.jpg" alt="art love" className="w-full h-full object-top" />
                    </div>
                    <div>
                        <p className="text-4xl font-semibold mb-3">Orientation</p>
                        <p>When deciding on orientation, consider the shape of your available wall space. Go for a work in portrait orientation to create a sense of height and openness. Is there a yawning expanse of blank wall space behind your dining room table? Go horizontal, or landscape, to fill the visual field.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 m-10 mt-20 items-center gap-20">
                    <div>
                        <p className="text-4xl font-semibold mb-3">Placement</p>
                        <p>In gallery spaces, two-dimensional works are typically hung so that the center of the piece falls at eye level (56 to 60 inches from floor). This standard is a useful rule of thumb for hanging works on blank walls. When there’s a couch, headboard, fireplace mantel, or other piece of furniture involved, ensure that the work has some breathing room while keeping the look cohesive.</p>
                    </div>
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501036/advisory_ymrmcx.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:ml-52 md:mr-52 m-10 mt-20 items-center gap-20">
                    <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501042/artfair_p3s7nl.png" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-4xl font-semibold mb-3">Salon Walls</p>
                        <p>Consider filling your wall space by grouping multiple works together. Works of equal size can be hung as a grid, but don’t be afraid to cluster works of different sizes into a salon wall, à la the salons of 19th century France, where works in art competitions were hung at many different heights and formations. In general, hang larger artworks on a salon wall two to three inches apart and small works one and a half to two inches apart. Need ideas?</p>
                        <button className="border bg-black text-white_web ml-[30%] mt-5 hover:bg-orange_web hover:text-white_web pl-10 pr-10" onClick={() => navigate('/stories/design-inspiration')}>Get Inspired</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:pl-52 md:pr-52 p-20 mt-20 items-center gap-20 bg-gray-200">
                     <div className="w-full h-full bg-blue-100">
                        <LazyLoadImage src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501100/curator_4_gfqtbi.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-4xl font-semibold mb-3">Preview Art on Your Wall</p>
                        <p>If you still need help visualizing how an artwork will look in your space, visit Muse Tales Art on your mobile device to use the view in a room to use the View in a Room function to place any work in your home or office with the newly upgraded “View in Your Room” feature. You’ll find the perfect spot in no time!</p>
                    </div>
                </div>

                <div className="md:p-20 mt-20 items-center text-center">
                    <div>
                        <h1 className="text-7xl font-semibold mb-3">Latest Stories</h1>
                        <div className="flex-wrap m-10 ml-40 mr-40 justify-between">
                            <p className="font-semibold text-2xl text-eerieBlack text-nowrap">How-To: Getting Started</p>
                            <p className="font-semibold text-2xl text-eerieBlack text-nowrap">How-To: Enjoying Your New Artwork</p>
                        </div>
                        <button className="border bg-black text-white_web mt-5 hover:bg-orange_web hover:text-white_web pl-10 pr-10" onClick={() => navigate('/stories')}>Read More Stories</button>
                    </div>
                </div>
            </div>
        </>
    )
}