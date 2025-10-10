import { Link, useNavigate } from "react-router-dom";

export default function FAQs() {
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-gray-100 mt-10 p-5 md:p-20 pb-3">

                <p className="text-center mb-5 text-3xl font-semibold ">Frequently Asked Questions (FAQs)</p>
                <br></br>
                <b className="text-xl font-semibold">1. What types of art do you offer?</b>

                <p className="mb-5">We offer a wide range of art categories including Paintings, Abstract Art, Oil Paintings, Acrylic Paintings, Landscapes, Sculptures, Photography, Drawings, Prints, and more.</p>

                <b className="text-xl font-semibold">2. How do I purchase an artwork?</b>

                <p className="mb-5">Browse through our collections, select your desired piece, add it to the cart, and proceed to checkout. We accept various payment methods for your convenience.</p>

                <b className="text-xl font-semibold">3. Can I commission a custom artwork?</b>

                <p className="mb-5">Yes! We offer custom commissions. Please contact our support team with your requirements, and we’ll connect you with an artist.</p>

                <b className="text-xl font-semibold">4. What are the commission fees?</b>

                <p className="mb-5">We charge a commission fee of 5% on each sale to support the platform and services. This fee is deducted from the seller's payout.</p>

                <b className="text-xl font-semibold">5. How do I become a seller?</b>

                <p className="mb-5">You can register as an artist or seller by creating an account and submitting your artwork for review. Once approved, your pieces will be listed for sale.</p>

                <b className="text-xl font-semibold">6. What is your refund policy?</b>

                <p className="mb-5">Refunds are handled on a case-by-case basis. Please refer to our Return Policy or contact support for assistance.</p>

                <b className="text-xl font-semibold">7. How is my personal information handled?</b>

                <p className="mb-5">We take your privacy seriously and do not sell your personal information. Please see our Privacy Notice for more details.</p>

                <b className="text-xl font-semibold">8. Do you ship internationally?</b>

                <p className="mb-5">Yes, we ship worldwide. Shipping fees and times vary depending on the destination and the artwork’s size and weight.</p>

                <b className="text-xl font-semibold">9. Can I track my order?</b>

                <p className="mb-5">Absolutely. Once your order is shipped, you will receive tracking information via email.</p>

                <b className="text-xl font-semibold">10. What payment methods do you accept?</b>

                <p className="mb-5">We accept credit/debit cards, PayPal, and other popular payment gateways to ensure secure transactions.</p>

                <b className="text-xl font-semibold">11. How do I contact customer support?</b>

                <p className="mb-5">You can reach our support team via email at <a href="https://support@musetalesart.com" className="underline hover:text-orange_web">support@musetalesart.com</a> or through the contact form on our website.</p>

                <b className="text-xl font-semibold">12. Are the images of artworks accurate?</b>

                <p className="mb-5">We strive to provide high-quality images. However, colors may vary slightly due to different screen settings.</p>

                <b className="text-xl font-semibold">13. Can I cancel my order?</b>

                <p className="mb-5">Orders can be canceled within 2 hours of purchase. After this window, please contact <Link to={'/support'} className="underline hover:text-orange_web">support</Link> for assistance.</p>

                <b className="text-xl font-semibold">14. Is the pricing inclusive of taxes?</b>

                <p className="mb-5">Prices listed are inclusive of applicable taxes. Any taxes will be added during checkout if applicable.</p>
                <b className="text-xl font-semibold">15. What if my artwork arrives damaged?</b>

                <p className="mb-5">Please contact us immediately with photos of the damage. We will arrange for a replacement or refund as per our policy.</p>
                <div className="mt-16">
                    <p className="text-center text-lg">For More information get started with these artist resources:</p>
                    <div className="text-center">
                        <button className="border border-dim_gray hover:bg-orange_web hover:text-white_web m-5 rounded"><a href="https://cdn.bookey.app/files/pdf/book/en/the-artist's-handbook-of-materials-and-techniques.pdf" target="_blank">Artist Handbook</a></button>
                        <button className="border border-dim_gray hover:bg-orange_web hover:text-white_web m-5 rounded" onClick={()=>navigate('/newsletter')}>Artist Newsletter</button>
                    </div>
                </div>
            </div>
        </>
    )
}