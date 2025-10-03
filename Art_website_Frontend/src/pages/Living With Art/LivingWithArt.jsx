import Art from "../Art/Art";

export default function LivingWithArt() {
    const collectors = [
        {
            id: 1,
            link: "/watch/joshua",
            linkName: "Explore Joshua's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Joshua Smith",
            detail: "Interior Designer, Lifestylist, House Beautiful Rising Star",
            description: "\"I find that, like myself, so many of us are deeply moved by Mother Nature, so this collection is an ode to my favorite muse.\""
        },
        {
            id: 2,
            link: "/watch/Charles",
            linkName: "Explore Charles's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Charles Michael Davis​",
            detail: "Actor, Model, Photographer, Art Collector",
            description: "\"For me, the role of art in my life is threefold. It tells me where I am, where I’d like to be, and where \""
        }, {
            id: 3,
            link: "/watch/Kate",
            linkName: "Explore Kate's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Kate Arends Peters​",
            detail: "Influencer, Entrepreneur, Creative Spirit ",
            description: "\"Art has always been an essential part of my life, both personally and professionally.\""
        }, {
            id: 4,
            link: "/watch/Sean",
            linkName: "Explore Sean's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Sean Anderson",
            detail: "Designer, Mississippi Native, Sophisticated, Soulful Style",
            description: "\"In the South, there is an endless bounty of beauty and romance. This collection is an ode to the comfort and familiarity that my life in the South has given me.\""
        },

        {
            id: 5,
            link: "/watch/Nat",
            linkName: "Explore Nat's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Nat Pedley",
            detail: "Doctor, Father, Memory Seeker",
            description: "\"Discovering and living with art is like becoming literate—you are exposed to places, people, and beauty previously unknown to you; the world around you is enriched in a way it wasn’t before.\""
        }, {
            id: 6,
            link: "/watch/Sarah",
            linkName: "Explore Sarah's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Sarah Chitsaz",
            detail: "Real Estate Developer, Traveler, Art Enthusiast",
            description: "\"A work of art might remind me of something that made me feel safe or happy, or it can remind me of places I’ve been or experiences I’ve had.\""
        },
        {
            id: 7,
            link: "/watch/Rico",
            linkName: "Explore Rico's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Rico Brooks",
            detail: "Doctor, Father, Memory Seeker",
            description: "\"I learned with art—it’s similar to music. When creators have something that you like, you have to kind of seize the moment because you may go back and it may be gone.\""
        },
        {
            id: 8,
            link: "/watch/Susan",
            linkName: "Explore Susan's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Susan Burger​",
            detail: "Interior Designer, Photographer, Equestrian",
            description: "\"If it evokes some sort of passion, or strikes some sort of chord with you, then buy it. Because you’ll look at it every day.\""
        }, {
            id: 9,
            link: "/watch/Ariya",
            linkName: "Explore Ariya's Collection",
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
            name: "Ariya Watty​",
            detail: "Executive Assistant, World Traveler, Home Organizer",
            description: "\"For me, art is like a record of all my personal history. All the places I’ve been to, all the people I’ve met, the works are reminders of all of those very specific moments.\""
        },
    ]
    return (
        <>
            <div className="relative mt-10 mb-10">
                <img
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501395/Red_and_Dark_Brown_Painting_art_Wall_Frame_Mockup_Instagram_post_vvi4qj.png"
                    alt="art advisory image"
                    className="w-screen h-96 object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                    <div className="text-center px-4">
                        <h1 className="text-white text-6xl font-bold mb-4">LIVING WITH ART</h1>
                    </div>
                </div>
            </div>

            <div className="ml-20 mr-20 text-center mt-10 mb-10">
                <h1 className="font-semibold mb-5">Collector Profiles</h1>
                <p>Muse Tales Art invites some of today’s most celebrated designers, cultural tastemakers, and influencers to showcase their artistic tastes and express the role art plays in their lives.</p>
            </div>
            <Art data={collectors} />
        </>
    )
}