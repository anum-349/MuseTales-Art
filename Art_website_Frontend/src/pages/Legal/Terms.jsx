import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <>
            <div className="m-0 text-center p-5 bg-black text-white mb-0">
                <h1 className="text-2xl font-bold text-white">
                    MuseTales Art Terms of Service
                </h1>
                <p className="text-white">Last Updated: <b className="text-white">April 22, 2024</b></p>
            </div>
            <div className="m-10 text-justify">
                <p className="mb-4">
                    Welcome to our platform.MuseTales Online, Inc. <b>(“MuseTales Art,” “we” or “our”)</b> provides a service for viewing, selling and purchasing original works of art and commercially exploiting digital images of works of art through our website, accessible at www.MuseTalesart.com (the <b>“Site”</b>), our mobile application (the <b>“Application”</b>) or our art streaming service (<b>“MuseTales Art on TV”</b>) together with any services, software, tools, features or functionality made available by MuseTales Art (each, a <b>“Service”</b> and collectively, the <b>“Services”</b>). Please read carefully the following terms and conditions (<b>“Terms”</b>), our MuseTales Art on TV Terms and Conditions of Use (“<b>MuseTales Art on TV Terms</b>”), and our Privacy Policy, which may be found at <Link to={'/privacy-notice'} className="hover:text-teal-600 underline">www.musetalesart.com/privacy</Link> (the “<b>Privacy Policy</b>”). These Terms, the MuseTales Art on TV Terms, the Privacy Policy, and any other policies linked to herein, govern your access to and use of the Services, and constitute a binding legal agreement between you and MuseTales Art.

                    Certain areas of the Services and your access to certain Services may have different terms and conditions posted or may require you to agree with and accept additional terms and conditions. If there is a conflict between these Terms and the terms and conditions posted for a specific area of the Services or for access to specific Services, the latter terms and conditions shall take precedence with respect to your use of or access to that area of the Services.
                    <b>
                        <br></br>
                        <br />
                        PLEASE READ THESE TERMS CAREFULLY. THESE TERMS INCLUDE AN AGREEMENT TO ARBITRATE, WHICH MEANS THAT YOU AGREE TO SUBMIT ANY DISPUTE RELATED TO YOUR USE OF THE SERVICES TO BINDING INDIVIDUAL ARBITRATION RATHER THAN PROCEED IN COURT. IF YOU WANT TO OPT-OUT OF THE AGREEMENT TO ARBITRATE, YOU MAY DO SO PROVIDED YOU FOLLOW THE PROCEDURES SET FORTH BELOW IN THE SECTION ENTITLED “AGREEMENT TO ARBITRATE”. THE DISPUTE RESOLUTION SECTION ALSO INCLUDES A CLASS ACTION WAIVER, WHICH MEANS THAT YOU AGREE TO PROCEED WITH ANY DISPUTE INDIVIDUALLY AND NOT AS PART OF A PROPOSED CLASS. THESE TERMS ALSO INCLUDE A WAIVER OF YOUR RIGHTS TO A TRIAL BY JURY IRRESPECTIVE OF WHETHER YOU AGREE TO ARBITRATE YOUR CLAIMS.</b>
                    <br></br>
                    <br />
                    By accessing or using our website, services, or purchasing any products, you agree to be bound by the following terms and conditions:
                </p>

                <b>1. Use of Services</b>
                <p className="mb-4">
                    You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                </p>

                <b>2. Account and Registration</b>
                <p className="mb-4">
                    When you create an account, you must provide accurate and complete information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
                </p>


                <b>3. Product Information</b>

                <p className="mb-4">All artwork and product descriptions, including prices and availability, are subject to change without notice. We make every effort to display items accurately, but cannot guarantee that images or descriptions are error-free.</p>

                <b>4. Payments and Orders</b>

                <p className="mb-4">By placing an order, you agree to provide current, complete, and accurate payment information. We reserve the right to refuse or cancel any order at any time for reasons including but not limited to product availability, errors in pricing, or suspected fraud.</p>

                <b>5. Intellectual Property</b>

                <p className="mb-4">All content, including images, text, graphics, and designs, are the property of this website or our licensors and are protected by copyright laws. You may not copy, reproduce, or use content without permission.</p>

                <b>6. Returns and Refunds</b>

                <p className="mb-4">Please review our Return Policy for information about returns, exchanges, and refunds. We strive to ensure customer satisfaction with each purchase.</p>

                <b>7. Limitation of Liability</b>

                <p className="mb-4">We are not liable for any direct, indirect, or incidental damages arising from your use of our website or services. All products and services are provided "as is" without warranties of any kind.</p>

                <b>8. Modifications to Terms</b>

                <p className="mb-4">We reserve the right to update or modify these Terms of Service at any time without prior notice. It is your responsibility to review these terms periodically.</p>

                <b>9. Governing Law</b>

                <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Jurisdiction.</p>
                <br></br>
                <p className="mb-4">If you have a complaint, you may contact us at MuseTales Art’s legal department:

                    <i>MuseTales Online, Inc.</i><br />
                    <i>Attn: Legal Department</i><br />
                    <i>Suite 200, Pakistan, CA, 90064</i><br />
                    <i>
                        <a href="https://legal@musetalesart.com" className="hover:text-teal-600">legal@musetalesart.com</a>
                    </i><br />
                    <i>© ARTIFLECT GROUP LTD. All rights reserved.</i>
                </p>
            </div>
        </>
    )
}