import { FaAddressCard, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

export default function PrivacyNotice() {
    return (
        <>
            <div className="m-10">
                <p className="text-center mb-5 text-3xl font-semibold text-black ">MuseTales Art Privacy Notice</p>

                <div>
                    <p className="text-center m-5 ml-20 mr-20">We are committed to respecting your privacy and protecting your personal data. This Privacy Notice outlines how we collect, use, share, and safeguard your information when you visit our website or interact with our services.</p>
                    <p className="pl-10 pr-10 p-2 border border-black mb-3">This Privacy Notice has been updated in order to comply with the new Colorado and Connecticut privacy laws that took effect on July 1, 2023 and the new Utah privacy law that will take effect on December 31, 2023. These 3 states, as well as California and Virginia, which privacy laws took effect earlier, require additional information regarding our privacy practices and your privacy rights. Depending on whether you are a resident of those states, we provide you additional notices about our privacy practices and your privacy rights as a consumer under sections 11, 12 and 13 below.</p>
                    <p>Last Updated: <b>July 1, 2025</b> </p>
                    <p className="mt-2">This Privacy Notice <b>(Privacy Notice" or "Notice")</b> describes how we collect, use, share, manage or disclose or generally process your personal information as a visitor or customer when you visit or use our websites, mobile apps, applications, digital services, or any related products, services, sites, features or functionalities (each a <b>"Service"</b>, collectively the <b>"Services"</b>) that link to this Privacy Notice, and how Leaf Group collects, uses, shares, processes and manages your personal information.</p>
                </div>

                <br></br>

                <div>
                    <b className="text-xl font-semibold">1. Information We Collect</b>
                    <p className="pl-2">We may collect the following types of information:</p>
                    <b className="text-md font-semibold pl-5">a. Personal Information</b>
                    <div className="pl-8 pb-2">
                        <p>Name</p>
                        <p>Email address</p>
                        <p>Phone number</p>
                        <p>Shipping/billing address</p>
                        <p>Payment information (processed through secure third-party services)</p>
                    </div>
                    <b className="text-md font-semibold pl-5">b. Non-Personal Information</b>
                    <div className="pl-8 pb-2">
                        <p>IP address</p>
                        <p>Browser type</p>
                        <p>Device type</p>
                        <p>Pages visited and time spent</p>
                        <p>Referring URL</p>
                    </div>
                    <p className="pb-3">This data helps us enhance your browsing experience and improve our services.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">2. How We Use Your Information</b>
                    <p>We use the collected information for the following purposes:</p>
                    <div className="pl-5 pb-3">
                        <p>To process and fulfill orders</p>
                        <p>To send order confirmations and shipping updates</p>
                        <p>To personalize your shopping experience</p>
                        <p>To respond to customer service requests</p>
                        <p>To send promotional emails or newsletters (only if you opt-in)</p>
                        <p>To detect fraud or suspicious activity</p>
                        <p>To analyze site usage and improve functionality</p>
                    </div>
                </div>

                <div>
                    <b className="text-xl font-semibold">3. Sharing Your Information</b>
                    <p>We do not sell your personal data. We may share your information with:</p>
                    <div className="pl-5 pb-2">
                        <p>Trusted third-party service providers (e.g., payment processors, shipping companies)</p>
                        <p>Analytics services (such as Google Analytics) to understand user behavior</p>
                        <p>Legal authorities, if required by law or to protect our rights</p>
                    </div>
                    <p className="pb-3">All third parties are bound to respect your data and only use it for authorized purposes.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">4. Cookies and Tracking Technologies</b>
                    <p>Our website uses cookies to:</p>
                    <div className="pl-5 pb-2">
                        <p>Store your preferences</p>
                        <p>Keep you logged in</p>
                        <p>Analyze website traffic</p>
                        <p>Deliver personalized ads (if applicable)</p>
                    </div>
                    <p className="pb-3">You can control cookie settings through your browser and opt-out of some third-party cookies via <a href="https://optout.aboutads.info/" className="hover:underline hover:text-teal-600">optout.aboutads.info</a>.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">5. Data Security</b>
                    <p>We implement strong technical and organizational measures to protect your data:</p>
                    <div className="pl-5 pb-2">
                        <p>HTTPS encryption</p>
                        <p>Secure servers</p>
                        <p>Access control policies</p>
                        <p>Regular system updates and security audits</p>
                    </div>
                    <p className="mb-3">However, no system is 100% secure. We cannot guarantee absolute security, but we strive to protect your information at all times.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">6. Your Rights and Choices</b>
                    <p>You have the right to:</p>
                    <div className="pl-5 pb-2">
                        <p>Access the personal data we hold about you</p>
                        <p>Correct or update your information</p>
                        <p>Request deletion of your data</p>
                        <p>Withdraw consent for marketing communications</p>
                    </div>
                    <p className="pb-3">To exercise any of these rights, please contact us at <a href="https://support@musetalesart.com" className="underline hover:text-teal-600"> support@musetalesart.com</a>.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">7. Children’s Privacy</b>
                    <p className="pb-3">Our services are not directed at children under 13. We do not knowingly collect personal information from children. If we learn we have done so, we will take steps to delete such information.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">8. Changes to This Notice</b>
                    <p className="pb-3">We may update this Privacy Notice occasionally to reflect changes in legal requirements or our practices. When we do, we will revise the "Last Updated" date at the bottom of this page.</p>
                </div>

                <div>
                    <b className="text-xl font-semibold">9. Contact Us</b>
                    <p>If you have any questions or concerns about this Privacy Notice or how your data is handled, please contact us at:</p>
                    <div className="pl-5 pb-3">
                        <p className="flex items-center gap-3"><FaMailBulk /><a href="https://support@musetalesart.com" className="underline hover:text-teal-600"> support@musetalesart.com</a></p>
                        <p className="flex items-center gap-3"><FaPhone /> +92 349 5445560</p>
                        <p className="flex items-center gap-3"><FaMapLocation /> 123 Art Street, Creativity City, Artland 45678</p>
                    </div>
                </div>
            </div>
        </>
    )
}