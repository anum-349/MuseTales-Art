import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Returns() {

    const [total, setTotal] = useState(230)
    const [likes, setLikes] = useState(180)

    const handleYes =()=>{
        setLikes(likes+1)
        setTotal(total+1)
    }

    const handleNo =()=>{
        setTotal(total+1)
    }
    return (
        <>
            <div className="flex m-10 gap-2">
                <NavLink to={'/help-center'}><p className="underline hover:text-orange_web">Help Center</p></NavLink>
                <p> / </p>
                <NavLink to={`/returns`}><p className="underline hover:text-orange_web">Return Policy</p></NavLink>
            </div>
            <div className="md:m-20 m-14 mt-5">
                <p className="font-semibold">1 month ago Updated</p>
                <p className="font-semibold text-4xl">REQUEST A RETURN</p>
                <p className="font-semibold ml-3">14-Day Satisfaction Guarantee </p>
                <p className="ml-3 text-justify">Change your mind after receiving an original artwork? You have 14 days from the date you received it to let us know. </p>
                <p className="ml-3">Choose from:</p>
                <div className="ml-5">
                    <p>1. Store credit for the full purchase price, or</p>
                    <p className=" text-justify">2. A refund to your original payment method less a 20% processing fee calculated off the total purchase amount.</p>
                </div>
                <br></br>
                <p className="ml-3  text-justify">If you would like help finding a replacement artwork, we are happy to pair you with a complimentary art advisor to help you find the perfect piece.</p>
                <br></br>
                <p className="ml-3  text-justify">If the original artwork arrived damaged, or was misrepresented, you can return it for a full refund to your original payment method within 14 days of receiving it.</p>
                <br></br>
                <p className="ml-3  text-justify">All return shipments must be arranged through <b className="font-semibold">MuseTales Art</b> and shipped in their original packaging (including all accompanying certificates received with the order).</p>

                <p className="text-2xl font-bold mt-3 mb-3  text-justify">All refunds will be subject to the exchange rate at the time of processing, and funds will be remitted in USD.</p>

                <p className="border border-dim_gray p-3 pl-10 pr-10 m-10 text-justify"><b className="font-semibold">NOTE:</b> Special commissions, limited and open editions prints, and frames are all final sale. Returns will not be accepted for any artwork that has been stretched, cropped, or altered in any capacity after purchase. No refunds will be granted after the 14-day period.</p>

                <p className="text-2xl font-bold mt-3 mb-3  text-justify">What “Satisfaction” Means at MuseTales Art</p>
                <p className="text-justify">We want to make sure you find artwork you love! If you change your mind within 14 days after receiving the work, you can choose from a full refund via store credit, or a refund to your original payment method minus a 20% processing fee. We are happy to work with you to find a replacement. Our team of expert art advisors will work with you one-on-one if needed. We pride ourselves on being the world’s leading online art gallery, and are confident we will find the perfect artwork for you among our selection of tens of thousands of artworks by artists around the globe.</p>

                <p className="text-2xl font-bold mt-3 mb-3">Final Sale Items</p>
                <p className="text-justify">Special Collection, Photography, Artist Produced Limited Edition and Open Edition artworks, print frames, and eGift Cards are FINAL SALE and are not eligible for returns. Please fill out a return request form if your order arrived damaged or in poor condition.</p>

                <p className="text-2xl font-bold mt-3 mb-3">Promotional Free Returns on US Destination Original purchases made in June 2025</p>
                <p className="text-justify">Promotion only valid for purchases shipped to delivery addresses within the United States. Items marked Final Sale are not eligible for free returns. This includes Special Collection, Photography, Artist Produced Limited Edition and Open Edition artworks and any other products designated as final sale on the website.</p>
                <br></br>
                <p className="text-justify">Some original artworks—such as bulky or unusually large pieces, sculptures, or items requiring special shipping or handling - may be excluded from the promotion. This includes any oversize product where the longest length is greater than 60 inches (152 cm). Please contact <a className=" hover:text-orange_web underline" href="mail:curator@musetalesart.com" target="_blank">curator@musetalesart.com</a> if you have any questions or concerns.</p>
                <br></br>
                <p className="text-justify"><b className="font-semibold">MuseTales Art</b> reserves the right to offer promotional discounts, incentives, or limited-time offers at our sole discretion and to update, modify, or discontinue these promotions as they relate to our return policy and the terms governing them at any time without prior notice.</p>

                <div className="md:m-44 mt-10 justify-center text-center">
                    <hr className="mb-10"></hr>
                    <p>Was this article helpful?</p>
                    <div className="mt-5 mb-5">
                        <button className="border border-dim_gray rounded pl-16 pr-16 mr-10 hover:bg-orange_web hover:text-white_web" onClick={handleYes}>Yes</button>
                        <button className="border border-dim_gray rounded pl-16 pr-16  hover:bg-orange_web hover:text-white_web" onClick={handleNo}>No</button>
                    </div>
                    <p>{likes} out of {total} found this helpful</p>
                    <p className="mt-10">Have more questions? <NavLink to={'/support'} className="underline  hover:text-orange_web"> Submit a request </NavLink></p>
                    <hr className="mt-10"></hr>
                </div>
            </div>
            <div className=" bg-gray-100">
                <div className="md:p-20">
                    <h2 className=" p-5">Contact Us</h2>
                    <div className="md:m-5 flex flex-wrap gap-10 justify-center">
                        <div className="w-[45%]">
                            <NavLink to={'/support'} >
                                <button className="text-nowrap border border-gray-500 w-full mb-4  hover:bg-orange_web hover:text-white_web p-5 rounded">
                                    <span className="font-semibold text-2xl">Contact Support</span>
                                    <br></br>
                                    <span className="text-xl">Submit Inquiry Form</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className="w-[45%]">
                            <NavLink to={'/art-advisory'}>
                                <button className="text-nowrap border border-gray-500 w-full mb-4  hover:bg-orange_web hover:text-white_web rounded p-5">
                                    <span className="font-semibold text-2xl">Contact Curators</span>
                                    <br></br>
                                    <span className="text-xl">Comprimentary Art Advisory</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
