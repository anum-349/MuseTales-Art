import { useActionState, useState } from "react"
import { FaCheck, FaQuoteLeft } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"

export default function Advisory() {
    const navigate = useNavigate()

    async function handleSubmit(previousData, formData) {
        let email = formData.get("email");
        let firstName = formData.get("firstName");
        let lastName = formData.get("lastName");
        let budget = formData.get("budget");
        let detail = formData.get("detail");

        try {
            const res = await fetch("http://localhost:5000/api/inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, firstName, lastName, budget, detail }),
            });

            const data = await res.json();
            if (res.ok) {
                return { message: data.message, ...data.inquiry };
            } else {
                return { error: data.message };
            }
        } catch (err) {
            return { error: "Server error. Please try again." };
        }
    }


    const [data, action, pending] = useActionState(handleSubmit, undefined)

    const team = [
        {
            name: 'Erin Remington',
            role: 'Curatorial Director',
            link: '/Erin',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501172/ErinAdvisor_sjivtp.jpg'
        },
        {
            name: 'Remington',
            role: 'Senior Curator',
            link: '/Erin',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501384/RemiAdvisor_p51s9n.jpg'
        },
        {
            name: 'India Balyejusa',
            role: 'Senior Curator',
            link: '/india',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501320/IndiaAdvisor_wpci7p.jpg'
        },
        {
            name: 'Will Hardy',
            role: 'Assistant Curator',
            link: '/will',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/WillAdvisor_ofok9o.jpg'
        },
        {
            name: 'Siting Wang',
            role: 'Assistant Curator',
            link: '/siting',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501413/SitingAdvisor_auhvpp.jpg'
        },
        {
            name: 'Audrey Wolfe',
            role: 'Assistant Curator',
            link: '/audrey',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501050/AudreyAdvisor_xk77yj.jpg'
        }
    ]

    return (
        <>
            <div className="relative mb-10">
                <img
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501038/artAdvisoryBanner_senrrb.avif"
                    alt="art advisory image"
                    className="w-screen h-screen object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mt-10">
                    <div className="text-center px-4">
                        <h1 className="text-white_web text-6xl font-bold mb-4">COMPLIMENTARY ART ADVISORY</h1>
                        <p className="text-white_web text-4xl">Speak with a curator to find one-of-a-kind artworks specially chosen for you.</p>
                        <button className="pl-10 pr-10 mt-3 rounded border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/support') }}>CONTACT US</button>
                    </div>
                </div>
            </div>

            <div className="justify-center flex gap-4 md:ml-44 md:mr-44 m-20">
                <p className="font-bold text-3xl text-center">Our free and flexible <NavLink to={'art-advisory-service'} className={'text-gray-600 hover:text-orange_web'}>art advisory service</NavLink> connects you with an expert curator to help find art that meets your needs in a smooth and hassle-free process.</p>
            </div>

            <div className="grid md:grid-cols-2 mt-10 ml-20 mr-20 items-center">
                <div className="w-full h-full bg-blue-100">
                    <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501042/artAdvisory1_gk4oxe.png" alt="art love" className="w-full h-full object-cover" />
                </div>
                <div className="ml-20  sm:mt-10 md:mt-0">
                    <p className="text-2xl font-bold mb-10">Services & Benefits</p>
                    <p className="text-xl font-semibold">Unlimited, Personalized Art Recommendations</p>

                    <p>Your art advisor will select works tailored to your needs with no limitations.</p>

                    <p className="text-xl font-semibold mt-10">Manage Artist Communications</p>

                    <p >Your advisor handles all artist communications, ensuring fair agreements and positive relations.</p>

                    <p className="text-xl font-semibold mt-10">Exceptional Customer Service</p>

                    <p>Enjoy hands-on customer service from your curator and dedicated operations representative.</p>

                    <p className="text-xl font-semibold mt-10">Hassle-Free Shipping</p>

                    <p>All shipments are insured for hassle-free shipping, with safe delivery and smooth communication.</p>

                    <button className="pl-10 pr-10 mt-10 rounded border border-dim_gray bg-white_web hover:bg-orange_web hover:text-white_web" onClick={() => { navigate('/support') }}>CONTACT US</button>
                </div>
            </div>

            <div className="text-center mt-20 bg-gray-300 p-20">
                <p className="text-3xl font-semibold">Why People Choose Art Advisory</p>
                <div className="mt-10 text-nowrap">
                    <div className="md:flex md:ml-72 mb-3">
                        <div className="flex items-center">
                            <FaCheck className="mr-2" />
                            <p>Complimentary</p>
                        </div>
                        <div className="md:ml-80 flex items-center">
                            <FaCheck className="mr-2" />
                            <p>Additional Artwork Information</p>
                        </div>
                    </div>
                    <div className="md:flex md:ml-72 mb-3">
                        <div className="flex  items-center">
                            <FaCheck className="mr-2" />
                            <p>Unparalleled Selection of Original, Emerging Art</p>
                        </div>
                        <div className="flex md:ml-20 md:pl-2 items-center">
                            <FaCheck className="mr-2" />
                            <p>Customer Service Assistance</p>
                        </div>
                    </div>
                    <div className="md:flex md:ml-72">
                        <div className="flex  items-center">
                            <FaCheck className="mr-2" />
                            <p>Personalized Artwork Recommendations</p>
                        </div>
                        <div className="flex md:ml-36  items-center">
                            <FaCheck className="mr-2" />
                            <p>Custom Sizes or Commissions</p>
                        </div>
                    </div>
                </div>
                <button className="pl-10 pr-10 mt-10 rounded border bg-black text-white_web hover:bg-orange_web" onClick={() => { navigate('/support') }}>CONTACT US</button>
            </div>

            <div className="m-20 text-center">
                <p className="text-3xl font-bold">Not Sure What You're Looking For?</p>

                <p className="mt-5 mb-5 md:ml-40 md:mr-40">Take a short quiz to share your preferences with our curators. They will then begin building a collection of works that suit your needs. A member of our team will be in touch within 1-2 business days.</p>
                <button className="pl-10 pr-10 mt-3 rounded border border-dim_gray hover:bg-orange_web hover:text-white_web">Take The Quiz</button>
            </div>
            <hr></hr>
            <div className="ml-40 mr-40 mt-20 mb-20">
                <div className="grid md:grid-cols-2 md:ml-20 md:mr-20 items-center">
                    <div className="w-full h-full bg-blue-100">
                        <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501042/artAdvisory2_b2te2r.png" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="sm:mt-10 md:ml-20">
                        <FaQuoteLeft className=" text-5xl" />
                        <p className="text-xl font-semibold mt-5 mb-5">Very Responsive and Knowledgeable</p>

                        <span>The curator with whom I have worked has been very responsive and knowledgeable. I will definitely use MuseTales Art in the future for any art needs.</span>
                        <p className="font-semibold">-Miriam M.</p>
                        <p>Into the Mystic Painting by Vernon Studio</p>
                    </div>
                </div>
            </div>

            <hr className="mt-10"></hr>

            <div className="m-10">
                <p className="text-center text-3xl font-bold mb-10">Meet Our Advisory Team</p>
                <div className="p-10 md:ml-20 md:mr-20 grid md:grid-cols-3 sm:grid-cols-2 gap-40 justify-between text-nowrap">
                    {
                        team.map((item) => (
                            <div key={item.name} className="text-center">
                                <div className="w-48 h-48">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover mb-4 rounded-full"
                                    />
                                </div>
                                <b className="font-semibold">{item.name}</b>
                                <p className="mt-1 mb-3">{item.role}</p>
                                <NavLink to={item.link} className={'underline hover:text-orange_web'}>SEE CURATORS FAVOURITES</NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gray-200 p-10 ">
                <div className="grid md:grid-cols-2 md:ml-10 md:mr-10 items-center">
                    <div className="w-full h-full ">
                        <img src="/advisory2.jpg" alt="art love" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:ml-10">
                        <h2 className="text-center sm:mt-10 mb-10">Contact Us</h2>
                        <div className="">
                            <form action={action}>
                                <div className="flex gap-5 mb-3">
                                    <input type="text" name="firstName" defaultValue={data?.firstName} placeholder="First Name*" className="border border-dim_gray p-2 w-full rounded" />
                                    <input type="text" name="lastName" defaultValue={data?.lastName} placeholder="Last Name*" className="border border-dim_gray p-2 w-full rounded" />
                                </div>
                                {data?.firstNameError ? <span style={{ color: "red" }}>{data?.firstNameError}</span> : null}
                                {data?.lastNameError ? <span style={{ color: "red" }}>{data?.lastNameError}</span> : null}
                                <input type="email" name="email" defaultValue={data?.email} placeholder="Email Address*" className="border border-dim_gray p-2 w-full rounded mb-3" />
                                {data?.emailError ? <span style={{ color: "red" }}><br />{data?.emailError}</span> : null}
                                <input type="number" defaultValue={data?.budget} min={0} max={99999} name="budget" placeholder="Budget*" className="border border-dim_gray p-2 w-full rounded mb-3" />
                                {data?.budgetError ? <span style={{ color: "red" }}><br />{data?.budgetError}</span> : null}
                                <textarea name="detail" defaultValue={data?.detail} placeholder="Help us understand your taste! Provide links to artists, artworks, or your favorite design styles so we can assist you more effectively." className="border border-dim_gray p-2 w-full h-36 rounded mb-3" />
                                <button className="w-full bg-black text-white_web hover:text-orange_web rounded" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
                                {data?.message ? <span style={{ color: "green" }}><br />{data?.message}</span> : null}
                                <p className="mt-2">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.By submitting this form, you will be subscribed to our MuseTales Art newsletter. You may unsubscribe at any time.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}