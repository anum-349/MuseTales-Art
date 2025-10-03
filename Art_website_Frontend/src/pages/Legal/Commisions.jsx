import { Link, NavLink } from "react-router-dom";

export default function Commisions() {
    const artist = [
        {
            name: 'India Alfonso',
            image: 'IndiaAdvisor.jpg',
            link: '/alfonso'
        },
        {
            name: 'Will Waben',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501462/WillAdvisor_ofok9o.jpg',
            link: '/jennifer'
        },
        {
            name: 'Siting Jabby',
            image: 'https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501413/SitingAdvisor_auhvpp.jpg',
            link: '/aliana'
        },
    ]
    return (
        <>
            <img src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501320/inspirationArt_ub9emr.webp" alt="images" className="w-screen h-screen object-cover" />
            <div>
                <div className="m-10">
                    <div>
                        <p className="text-2xl font-semibold text-center m-5">Commission an original art by an emerging artists<br></br>
                            tailored to your space, budget, and vision. </p>
                        <p className="text-center md:ml-20 md:mr-20 md:pl-20 md:pr-20 mb-10">Looking for something truly personal? Commissioning original artwork allows you to collaborate directly with emerging artists to bring your vision to life. Whether you're curating for your home, office, or a special gift, we match you with talented artists who create custom pieces tailored to your style, space, and budget. From concept to completion, our team ensures a seamless, inspiring process — resulting in a one-of-a-kind artwork that reflects your story and elevates your environment.</p>
                    </div>

                    <p className="mb-2">At MuseTales Art, we strive to provide transparency regarding commissions on sales, services, and transactions conducted through our platform.</p>

                    <div className="mb-3">
                        <b className="text-xl font-semibold">1. What is a Commission?</b>

                        <p>A commission is a fee charged as a percentage or flat amount of the total sale price for facilitating a transaction between buyers and sellers, or for services rendered through our platform.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">2. Commission Rates</b>

                        <p>Our standard commission rate is 30% of the sale price.</p>
                        <p>Commission rates may vary depending on the category or type of product/service.</p>
                        <p>Any changes to commission rates will be communicated in advance via email or on this page.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">3. How Commissions Are Applied</b>

                        <p>Commissions are automatically deducted from the seller’s payout before funds are disbursed.</p>
                        <p>The listed price includes the commission; buyers will see the final price without additional fees.</p>
                        <p>Sellers are responsible for understanding the commission fees applicable to their sales.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">4. Payment and Payouts</b>

                        <p>Sellers receive payouts weekly/monthly/upon sale clearance after commissions and applicable fees are deducted.</p>
                        <p>Payment methods include bank transfer, PayPal, etc. as specified in your seller account.</p>
                        <p>Any delays in payment due to disputes or payment issues will be communicated promptly.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">5. Refunds and Returns</b>

                        <p>If a sale is refunded or a product returned, commissions related to that transaction will be adjusted accordingly.</p>
                        <p>Sellers may be responsible for refunding commission fees in accordance with our return policies.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">6. Disputes and Support</b>

                        <p>If you have questions or concerns about commission fees, please contact our support team at <a className="font-semibold hover:text-teal-600 " href="mail:support@musetaleart.com" target="_blank">support@musetalesart.com</a>.</p>
                        <p>We are committed to resolving commission-related disputes fairly and promptly.</p>
                    </div>
                    <div className="mb-3">
                        <b className="text-xl font-semibold">7. Changes to Commission Policy</b>

                        <p>We reserve the right to update or modify our commission policy at any time.</p>
                        <p>Updates will be posted on this page with the “Last Updated” date.</p>

                        <p>Last Updated: <b>July 9, 2025</b></p>
                    </div>
                </div>
                <div className="bg-black mt-5 mb-5">
                    <p className="text-center text-white text-lg p-10">If you’re unsure where to start, please contact us for assistance.
                        <br></br>For more information on commissions, please reference our <Link to={"/faqs"} className="underline hover:text-teal-600">FAQ</Link> section.</p>
                </div>

                <p className="text-3xl font-semibold text-center">Endless Creative Possibilities</p>
                <p className="text-center">Be inspired by our artists commisions</p>
                <div className="grid md:grid-cols-3 m-10 ">
                    {
                        artist.map((item) => (
                            <div key={item.name} className="gap-5">
                                <div className="w-full h-[400px]">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-scale-down" />
                                </div>
                                <NavLink to={item.link} className={'ml-56 md:ml-36 font-medium hover:text-teal-600'}>
                                    Artist {item.name}
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}