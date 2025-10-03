import Art from "../Art/Art"

function EmergingArtist() {
    const artists = [{
        id: 1,
        name: "One to Watch",
        detail: "Memory and Intimacy with Aleksei Blagodarev",
        description: "Emerging artist Alexei Blagodarev shares insights on presence, identity, and …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
         link: '/artist/lilia',
        linkName: "Watch Lilia"
    },
    {
        id: 2,
        name: "One to Watch",
        detail: "Georgia Theologou’s Divine Feminine",
        description: "Meet artist to watch Georgia Theologou and discover the inspiration behind her …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 3,
        name: "One to Watch",
        detail: "Lilia Orlova-Holmes’s Living Canvases",
        description: "Discover how Lilia Orlova-Holmes arrives at her expressive, sweeping landscapes …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 4,
        name: "One to Watch",
        detail: "Stefan Osnowski’s Modern Woodblock Prints",
        description: "Stefan Osnowski’s woodblock prints meld tradition into modernity. Meet the One …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 5,
        name: "One to Watch",
        detail: "Sojung Kim Makes Memories Tangible",
        description: "Discover Korean artist to watch Sojung Kim’s inspirations and process in this …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 6,
        name: "One to Watch",
        detail: "Cécile Duchêne Malissin rench painter Cécile Duchêne Maliss",
        description: "n creates moody portraits and landscapes …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 7,
        name: "One to Watch",
        detail: "Evolution and Expressionism with Alfonso Sánchez",
        description: "Spanish artist to watch Alfonso Sánchez channels Abstract and …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 8,
        name: "One to Watch",
        detail: "Laura Foster Nicholson: Weaving Awareness",
        description: "American textile artist Laura Foster Nicholson creates beautiful artworks that …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 9,
        name: "One to Watch",
        detail: "Pop Art Celebrations with Marcela Montemayor",
        description: "Mexican artist Marcela Montemayor’s cheerfully nostalgic paintings …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 10,
        name: "One to Watch",
        detail: "Gazing at the Sky with Zinna Yoo South Korean artist Zinna Yoo creates ",
        description: "triking, graphic landscapes that feature …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 11,
        name: "One to Watch",
        detail: "Paul Fuentes’s Fantastical Photography",
        description: "Mexican artist Paul Fuentes brings fantasy to life in his glamorous …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 12,
        name: "One to Watch",
        detail: "Ecaterina Vorona’s Enchanting Figures",
        description: "Moldovan painter Ecaterina Vorona focuses her work on expressive, colorful …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 13,
        name: "One to Watch",
        detail: "Jürgen Katzenberger: Color and Shape",
        description: "German painter Jürgen Katzenberger’s geometric and abstract works are …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 14,
        name: "One to Watch",
        detail: "Seonmi Kang Finds Rest Beneath the Moon",
        description: "Korean artist Seonmi Kang uses traditional Korean materials to create her …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 15,
        name: "One to Watch",
        detail: "Alejandra Valdivia’s Fresh Perspective",
        description: "Chilean aerial photographer Alejandra Valdivia creates stunning images of the …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 16,
        name: "One to Watch",
        detail: "Assia Bennani’s Eclectic World London-based painter Assia Bennani cre",
        description: "ates ethereal and captivating portraits, …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 17,
        name: "One to Watch",
        detail: "Daniel Maczynski’s Unreal World Polish painter Daniel Maczynski util",
        description: "izes geometric shapes and abstraction in …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 18,
        name: "One to Watch",
        detail: "The Colors of Poetry: Suren Nersis",
        description: "uren Nersisyan’s Vivid Lan...",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 19,
        name: "One to Watch",
        detail: "Creating Art Together: Monica and Michael Rich",
        description: "Saatchi Art artists Monica and Michael Rich talk about their artistic lives as …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 20,
        name: "One to Watch",
        detail: "Good Vibrations: Sachiko Bradley’s Positively-Cha...",
        description: "Sachiko Bradley talks about the inspirations and methods behind her joyful …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 21,
        name: "One to Watch",
        detail: "The Human Condition through Art: Perspectives from Loui...",
        description: "British painter Louise Howard talks her process, inspirations, and subjects.",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },
    {
        id: 22,
        name: "One to Watch",
        detail: "Stéphanie de Malherbe’s Artistic Rhythm",
        description: "French artist Stéphanie de Malherbe gives insight into her process for …",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },

    {
        id: 23,
        name: "One to Watch",
        detail: "Exploring the Nordic Landscape: Jeanette Lafontine",
        description: "Jeanette Lafontine practices mindfulness in her abstract landscapes.",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    },


    {
        id: 24,
        name: "One to Watch",
        detail: "Trust the Process: James Green James Green allows thec",
        description: "reative process to dictate the end result.",
        image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501319/hp-toptile1-06252025-large_fegk5h.jpg",
        link: '/artist/lilia',
        linkName: "Watch Lilia"
    }]

    return (
        <>
            <div className="ml-16 mt-10 mr-20">
                <h1 className="font-semibold">One to Watch</h1>
                <p>Each month, we showcase an emerging artist from around the world who is already garnering attention for their work. “One To Watch” presents some of the most exciting artists on Saatchi Art helping collectors to discover strong emerging talent.</p>
            </div>

            <Art data={artists} height="h-52" />

        </>
    )
}

export default EmergingArtist