export default function Exhibitions() {
    const exhibitions = [
        {
            "id": 1,
            "title": "Divine Egypt",
            "dates": "October 12, 2025 – January 19, 2026",
            "location": "The Metropolitan Museum of Art, New York, USA",
            "link": "https://www.metmuseum.org/exhibitions/divine-egypt",
            "description": "Explore over 200 works that reveal how ancient Egyptians used images to connect with their gods, blending art, ritual, and daily life across more than 3,000 years of belief.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501171/egypt_cvx9ew.avif"
        },
        {
            "id": 2,
            "title": "Spectrum of Desire: Love, Sex, and Gender in the Middle Ages",
            "dates": "October 16, 2025 – March 29, 2026",
            "location": "The Met Cloisters, New York, USA",
            "link": "https://www.metmuseum.org/exhibitions/spectrum-of-desire-love-sex-and-gender-in-the-middle-ages",
            "description": "Set in the stunning atmosphere of The Met Cloisters, this exhibition explores the often-overlooked themes of sexuality and gender in the medieval past, a period of time when most artistic production served religious purposes.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501159/desire_veag0e.avif"
        },
        {
            "id": 3,
            "title": "The Art of Mark Rothko",
            "dates": "November 20, 2025 – February 28, 2027",
            "location": "Portland Art Museum, Portland, USA",
            "link": "https://portlandartmuseum.org/event/the-art-of-mark-rothko/",
            "description": "This exhibition features a concise, chronological display of works by the renowned American artist Mark Rothko, highlighting his evolution and impact on modern art.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501386/rokhto_r2eomf.jpg"
        },
        {
            "id": 4,
            "title": "Jenny Saville: The Anatomy of Painting",
            "dates": "Ongoing in 2025",
            "location": "National Portrait Gallery, London, UK",
            "link": "https://www.npg.org.uk/whatson/exhibitions/2025/jenny-saville/",
            "description": "The largest UK presentation dedicated to the virtuosic figural painter Jenny Saville, featuring 45 of her artworks that explore the human body and feminist art.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501332/jenny_otjrug.webp"
        },
        {
            "id": 5,
            "title": "Global Treasures",
            "dates": "August 31 – October 7, 2025",
            "location": "Bespoke Art Gallery, Ahmedabad, India",
            "link": "https://www.bespokeartgallery.com/global-treasures",
            "description": "An ambitious exhibition curated by Devin Gawarvala, showcasing nearly 60 works by Indian and international artists, blending tradition with modernity.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501064/bespoke_yv1nhk.jpg"
        },
        {
            "id": 6,
            "title": "Balkan Erotic Epic",
            "dates": "October 9–19, 2025",
            "location": "Aviva Studios, Manchester, UK",
            "link": "https://factoryinternational.org/whats-on/marina-abramovic-balkan-epic/",
            "description": "A four-hour ritual where ancient myth meets performance art, exploring the eroticism, spirituality, and traditions of Abramović’s homeland through 13 visceral scenes.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501064/balkan_n3ntzc.webp"
        },
        {
            "id": 7,
            "title": "The Visionary Art of Minnie Evans",
            "dates": "May 10–October 26, 2025",
            "location": "Museum of Fine Arts, Boston, USA",
            "link": "https://www.mfa.org/exhibition/the-visionary-art-of-minnie-evans",
            "description": "A surreal and colorful landscape with faces and flora, showcasing the visionary art of Minnie Evans.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501068/boston_tkyz5p.jpg"
        },
        {
            "id": 8,
            "title": "Martin Puryear: Nexus",
            "dates": "September 27, 2025 – February 8, 2026",
            "location": "Museum of Fine Arts, Boston, USA",
            "link": "https://www.mfa.org/exhibition/martin-puryear-nexus",
            "description": "Reflects the artist’s singular practice, combining distinctive techniques of production with formal histories encountered through a lifetime of movement, research, and study.",
            "image": "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501356/nexus_ajaywr.jpg"
        }
    ]

    return (
        <>
            <div className="md:ml-40 md:mr-40 mt-10 mb-10 m-10 text-justify">
                <h1 className="font-semibold mb-10 text-5xl">Digital Exhibitions</h1>
                <p>MuseTales is a gateway to a world where creativity knows no bounds. We bring together exceptional artworks from emerging talents and established artists, presenting them through thoughtfully curated exhibitions both online and in physical galleries. Each collection tells a unique story, inviting viewers to explore diverse perspectives, innovative techniques, and cultural narratives from around the globe. Our platform not only celebrates the beauty of art but also fosters meaningful connections between artists, collectors, and enthusiasts. Whether you are discovering a new favorite artist or revisiting a beloved medium, MuseTales offers an immersive experience that inspires, educates, and delights. Join us as we explore the limitless possibilities of imagination and creativity through every brushstroke, sculpture, and digital creation.</p>
            </div>
            <div className="md:ml-40 ms:mr-40 m-10">
                {
                    exhibitions.map((item) => (
                        <div key={item.id} className="flex items-center mb-10">
                            <a href={item.link} target="_blank" className="hover:scale-110 transition duration-1000">
                                <div className="flex gap-10">
                                    <div className="flex-shrink-0 w-56 h-56">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                        <p className="italic">{item.location}</p>
                                        <p className="italic mb-2">{item.dates}</p>
                                        <p className="text-justify">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}