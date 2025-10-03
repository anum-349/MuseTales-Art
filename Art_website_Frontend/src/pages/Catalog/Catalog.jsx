import { Link } from "react-router-dom"

export default function Catalog() {
    const catalogs = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501311/holiday_q0uisq.avif",
            name: "HOLIDAY 2025",
            link: '/HOLIDAY 2025'
        }, {
            id: 2,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501385/risingstars_qnf86l.webp",
            name: "RISING STARS  2025",
            link: '/RISING STARS  202'
        }, {
            id: 3,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501413/spring_kv9gf6.jpg",
            name: "Spring Blooms 2025",
            link: '/HOLIDAY 2024'
        }, {
            id: 4,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501357/night_te69fz.jpg",
            name: "Mystic Nights 2025",
            link: '/RISING STARS 2024'
        }, {
            id: 5,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501466/tales_jouauc.webp",
            name: "Timeless Tales 2025",
            link: '/HOLIDAY 2023'
        }, {
            id: 6,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501102/curtural_iyptfm.jpg",
            name: "Cultural Echoes 2025",
            link: '/RISING STARS 2023'
        }, {
            id: 7,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501332/legends_i3msjp.webp",
            name: "Legends Reimagined 2025",
            link: '/HOLIDAY 2022'
        }, {
            id: 8,
            image: "https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/tomorrow_gih9pk.jpg",
            name: "Voices of Tomorrow 2025",
            link: '/RISING STARS 2022'
        },
    ]

    return (
        <div className="m-10 md:m-20 mt-5">
            <h1 className="font-semibold">Catalogs</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 ">
                {
                    catalogs.map((item) => (
                        <div key={item.id}>
                            <div className="w-full h-80 mb-4">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <Link to={item.link} className="hover:text-blue-600 hover:underline">
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}