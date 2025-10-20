import { useNavigate, useParams } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ArtForYourStyle() {

    const navigate = useNavigate()
    const parameter = useParams()
    const artForYourStyle =
    {
        detail: ["Let our curators help you discover artwork that complements your home's unique beauty and story. Whether you prefer clean lines to bold pattren, or favours antiques over dinningRoom decor, Muse Tales is your portal to thousands of original works by the world's top emerging artists that reflect your home style.",
            "Explore curated collections for the most popular interior design trends, or take our quiz to find out which one best reflects your space."],
        image1: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/personal_cfvgqj.webp",
        image2: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/personal2_df7zgb.webp",

    }
    const foyal = {
        mainImage: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501341/lifestyle-foyer_j5c8qn.jpg",
        detail: "Make a grand entrance. Browse a new collection of large-scale eye-catching original artworks that will wow your guests and immediately set the mood of your home.",
        name1: "Sunset on the Sahara",
        image1: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501172/Entryway-Sunset-on-the-Sahara-654x433_rmagcn.jpg",
        author1: "Viet Ha Tran",
        price1: 6250,
        image2: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501174/Entryway-Mood-on-Indigo_hktmwg.jpg",
        name2: "MOOD INDIGO",
        author2: "Terri Dilling",
        price2: 3781,
    }

    const living = {
        mainImage: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501382/mainLiving_anph30.jpg",
        detail: "Gathering with loved ones, cozy nights in, and unwinding after a long day—it all happens here. Give your living room a refresh with one of these artworks by top emerging artists from around the globe.",
        name1: "Diaspore",
        image1: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501335/living1_egigi4.jpg",
        author1: "Karin Vermeer",
        price1: 1244,
        image2: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501336/living2_zvkai3.jpg",
        name2: "Nous Sommes en Guerre",
        author2: "Delphine Rocher",
        price2: 1238,
    }

    const dinningRoom = {
        mainImage: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501161/dinning1_atfatm.jpg",
        detail: "Consider adding an artwork to your dining space that will serve as a visual complement to mealtime. These works are sure to add a dynamic presence when entertaining.",
        name1: "Soft Evening",
        image1: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501170/dinning2_jaoec3.jpg",
        author1: "Irina Laube",
        price1: 2456,
        image2: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501171/dinning3_gdz4yz.jpg",
        name2: "Sugar Bliss",
        author2: "Kate Longmaid",
        price2: 1378,
    }

    const bedRoom = {
        mainImage: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501071/bedroom1_vntnmy.jpg",
        detail: "Your bedroom is your sanctuary. The perfect artwork will create a calming mood in the evening while helping you to welcome the new day each morning.",
        name1: "My Nature",
        image1: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501386/sculpture3_pgl0k9.jpg",
        author1: "Alice de Miramon",
        price1: 2250,
        image2: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501065/bedroom2_fuotpx.jpg",
        name2: "Blue Sea",
        author2: "Mila Weis",
        price2: 2378,
    }
    const { name } = parameter
    return (
        <>
            <div className="relative mb-10">
                <LazyLoadImage
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501043/art-in-the-home_kevg8t.jpg"
                    alt="Banner"
                    className="w-screen h-full object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                    <div className="text-center px-4">
                        <h1 className="text-white_web text-6xl font-semibold mb-4">Every Room, Every Style</h1>
                        <p>Art Inspiration for Every Space in Your Home</p>
                        <button className="pl-10 pr-10 mt-3 rounded border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>SHOP BY STYLE</button>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:m-10 md:m-20 gap-20">
                <div className="w-full h-full">
                    <h1 className="font-normal">Art for Every Room</h1>
                    <p>Every room in your home has a distinct purpose and style. Whether you’re searching for an artwork to be the focal point of your living room, or looking for the perfect finishing touch for your favorite reading nook, our curators have put together fresh collections suited to every space.</p>
                    <LazyLoadImage
                        src={artForYourStyle.image1}
                        alt={"Art for Every Style"}
                        className="w-full h-screen object-cover mt-3"
                    />
                </div>
                <div className="w-full h-full">
                    <LazyLoadImage
                        src={artForYourStyle.image2}
                        alt={"Art for Every Style"}
                        className="w-screen h-96 object-cover"
                    />
                    <p className="mr-32 text-eerieBlack">
                        <br />
                        {artForYourStyle.detail[0]}
                        <br /><br />
                        {artForYourStyle.detail[1]}
                    </p>
                    <button className="pl-10 pr-10 mt-7 rounded-sm border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>TAKE THE QUIZ</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:m-20 sm:m-10 gap-20">
                <div className="w-full h-full">
                    <h1 className="font-normal mb-10">Foyer</h1>
                    <LazyLoadImage
                        src={foyal.mainImage}
                        alt={foyal.name1}
                        className="w-full h-screen object-cover mt-3"
                    />
                    <p className="mr-32 text-eerieBlack">
                        <br />
                        {foyal.detail}
                    </p>
                    <button className="pl-10 pr-10 mt-10 rounded-sm border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>View the Collection</button>
                </div>
                <div className="grid grid-rows-2 gap-5 w-full h-full">
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={foyal.image1}
                            alt={foyal.name1}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {foyal.name1}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {foyal.author1}
                        </p>
                        <p>
                            ${foyal.price1}
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={foyal.image2}
                            alt={foyal.name2}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {foyal.name2}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {foyal.author2}
                        </p>
                        <p>
                            ${foyal.price2}
                        </p>
                    </div>
                </div>

            </div>

            <div className="grid md:grid-cols-2 md:m-20 sm:m-10 gap-20">
                <div className="grid grid-rows-2 gap-5 w-full h-full">
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={bedRoom.image1}
                            alt={bedRoom.name1}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {bedRoom.name1}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {bedRoom.author1}
                        </p>
                        <p>
                            ${bedRoom.price1}
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={bedRoom.image2}
                            alt={bedRoom.name2}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {bedRoom.name2}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {bedRoom.author2}
                        </p>
                        <p>
                            ${bedRoom.price2}
                        </p>
                    </div>
                </div>

                <div className="w-full h-full">
                    <h1 className="font-normal mb-10">Bed Room</h1>
                    <LazyLoadImage
                        src={bedRoom.mainImage}
                        alt={bedRoom.name1}
                        className="w-full h-screen object-cover mt-3"
                    />
                    <p className="mr-32 text-eerieBlack">
                        <br />
                        {bedRoom.detail}
                    </p>
                    <button className="pl-10 pr-10 mt-10 rounded-sm border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>View the Collection</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:m-20 sm:m-10 gap-20">
                <div className="w-full h-full">
                    <h1 className="font-normal mb-10">Living Room</h1>
                    <LazyLoadImage
                        src={living.mainImage}
                        alt={living.name1}
                        className="w-full h-screen object-cover mt-3"
                    />
                    <p className="mr-32 text-eerieBlack">
                        <br />
                        {living.detail}
                    </p>
                    <button className="pl-10 pr-10 mt-10 rounded-sm border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>View the Collection</button>
                </div>
                <div className="grid grid-rows-2 gap-5 w-full h-full">
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={living.image1}
                            alt={living.name1}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {living.name1}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {living.author1}
                        </p>
                        <p>
                            ${living.price1}
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={living.image2}
                            alt={living.name2}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {living.name2}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {living.author2}
                        </p>
                        <p>
                            ${living.price2}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:m-20 sm:m-10 gap-20">
                <div className="grid grid-rows-2 gap-5 w-full h-full">
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={dinningRoom.image1}
                            alt={dinningRoom.name1}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {dinningRoom.name1}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {dinningRoom.author1}
                        </p>
                        <p>
                            ${dinningRoom.price1}
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <LazyLoadImage
                            src={dinningRoom.image2}
                            alt={dinningRoom.name2}
                            className="w-screen h-96 object-cover"
                        />
                        <p className="mt-5">
                            {dinningRoom.name2}
                        </p>
                        <p className=" text-eerieBlack font-medium">
                            {dinningRoom.author2}
                        </p>
                        <p>
                            ${dinningRoom.price2}
                        </p>
                    </div>
                </div>

                <div className="w-full h-full">
                    <h1 className="font-normal mb-10">Dinning Room</h1>
                    <LazyLoadImage
                        src={dinningRoom.mainImage}
                        alt={dinningRoom.name1}
                        className="w-full h-screen object-cover mt-3"
                    />
                    <p className="mr-32 text-eerieBlack">
                        <br />
                        {dinningRoom.detail}
                    </p>
                    <button className="pl-10 pr-10 mt-10 rounded-sm border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/category/all') }}>View the Collection</button>
                </div>
            </div>

            <div className="bg-gray-600 mb-10 mt-10 pl-20 pr-20 p-10 items-center grid md:grid-cols-[20%,70%] gap-10 justify-center">
                <h2 className="text-white_web font-medium">Why Muse Tales?</h2>
                <div className="[&>*]:text-white_web md:flex gap-10">
                    <p className="mb-5"><span className="font-semibold">Discover</span> an unparalleled selection of original art handpicked by our curator.</p>
                    <p className="mb-5"><span className="font-semibold">Enjoy</span> hassle-free deleivery, world-class customer service, and 14 day satisfaction guareentee.</p>
                    <p className="mb-5"><span className="font-semibold">Support</span> emerging artists from around world.</p>
                </div>
            </div>
        </>
    )
}