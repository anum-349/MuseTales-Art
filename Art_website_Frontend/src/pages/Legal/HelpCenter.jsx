import { useState } from "react"
import { NavLink } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HelpCenter() {
    const [search, setSearch] = useState("")
    
    const buttons = [
        {
            name: "Orders & Returns",
            for: "For Collectors",
            url: '/returns'
        },
        {
            name: "Buyers",
            for: "For Collectors",
            url: '/collections'
        },
        {
            name: "Policies",
            for: "For Everyone",
            url: '/copyright-policy'
        },
        {
            name: "Artists",
            for: "For Artists",
            url: '/sell'
        },
    ]
    return (
        <>
            <div className="relative mb-10">
                <LazyLoadImage
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501395/Red_and_Dark_Brown_Painting_art_Wall_Frame_Mockup_Instagram_post_vvi4qj.png"
                    alt="help center image"
                    className="w-screen h-80 object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                    <div className="text-center px-4">
                        <h2 className="text-white_web text-3xl font-bold mb-4">How can we help you?</h2>
                        <input
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            type="text"
                            className="w-80 sm:w-96 border border-gray-300 rounded-full p-2 px-4"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div className="">
                    <h2 className="p-5">Browse by Category</h2>
                    <div className="m-5 flex flex-wrap gap-10 justify-center">
                        {
                            buttons.map((item) => (
                                <div key={item.name} className="w-[45%]">
                                    <NavLink to={item.url}>
                                        <button className="border border-gray-500 w-full mb-4 hover:bg-orange_web hover:text-white_web p-5 rounded">
                                            <span className="font-semibold text-2xl">{item.name}</span>
                                            <br></br>
                                            <span className="text-xl">{item.for}</span>
                                        </button>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="m-0 bg-gray-100 mb-0">
                <div >
                    <h2 className="m-10 p-5">Contact Us</h2>
                    <div className="m-5 flex flex-wrap gap-10 justify-center">
                        <div className="w-[45%]">
                            <NavLink to={'/support'} >
                                <button className="border border-gray-500 w-full mb-4  hover:bg-orange_web hover:text-white_web p-5 rounded" >
                                    <span className="font-semibold text-2xl">Contact Support</span>
                                    <br></br>
                                    <span className="text-xl">Submit Inquiry Form</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className="w-[45%]">
                            <NavLink to={'/art-advisory'}>
                                <button className="border border-gray-500 w-full mb-4  hover:bg-orange_web hover:text-white_web rounded p-5">
                                    <span className="font-semibold text-2xl">Contact Curators</span>
                                    <br></br>
                                    <span className="text-xl text-nowrap">Comprimentary Art Advisory</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}