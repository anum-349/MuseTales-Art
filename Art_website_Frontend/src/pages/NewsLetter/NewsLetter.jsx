import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function NewsLetter() {
    const [email, setEmail] = useState("")

    function handleSubmit(){
        console.log(email)
    }
    
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="w-full h-full">
                    <img src="/Green Work Hard Play Hard Quote Wallpaper Dekstop (1).png" alt="newsletter" className="w-full h-full object-cover " />
                </div>
                <div className="p-20 bg-teal-600">
                    <div className="flex items-center gap-3 justify-center">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501345/logo_y96lpl.png" alt="logo" className="w-14 h-14 object-cover" />
                        <h2 className="text-white" >MUSETALES ART</h2>
                    </div>
                    <div className="text-center [&>*]:text-white mt-5">
                        <h1 className="text-5xl">MUSETALES ART</h1>
                        <h1 className="text-5xl">NEWSLETTER SIGNUP</h1>
                        <p className="p-10 mt-6 mb-2">Recevie updates on new curated collections, exclusive promotions, featured artists, and more.</p>
                        <p>Are You Our Member?</p>
                        <NavLink className={'underline'}>Sign Up For Our NewsLetter</NavLink>
                        <p className="mt-6 mb-2">Enter your email to subscribe:</p>
                        <div className="flex gap-2 ml-20 mr-20">
                            <input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" className="w-full p-2 border border-white rounded-sm"/>
                            <FaCaretRight  className="bg-white text-black rounded-sm w-10 h-11 p-2" onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}