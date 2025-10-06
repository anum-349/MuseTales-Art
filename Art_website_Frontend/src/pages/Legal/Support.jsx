import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Support() {
    const [selected, setSelected] = useState("");
    const [reason, setReason] = useState("");
    const [subReason, setSubReason] = useState("");
    const [uploadArtwork, setuploadArtwork] = useState("");
    const [sales, setSales] = useState("");
    const [order, setOrder] = useState("");
    const [shipping, setShipping] = useState("");
    const [technical, setTechnical] = useState("");
    const [artistOther, setartistOther] = useState("");
    const [delivery, setDelivery] = useState("");
    const [refund, setRefund] = useState("");
    const [account, setAccount] = useState("");
    const [profile, setProfile] = useState("");
    const [buyerOther, setBuyerOther] = useState("");
    const [billing, setBilling] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [details, setDetails] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [gallery, setGallery] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [artId, setArtId] = useState("");
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!selected) {
            newErrors.selected = "Please select who you are.";
        }

        if (!reason || reason === "-") {
            newErrors.reason = "Please select a contact reason.";
        }

        const subOptions = selected === "I am an Artist"
            ? artistReasonSubOptions[reason]
            : buyerReasonSubOptions[reason];

        const subReasonSelected = selected === "I am an Artist"
            ? (reason === "Uploading Artworks" ? uploadArtwork
                : reason === "Account / Profile Settings" ? profile
                    : reason === "Sales & Payments" ? sales
                        : reason === "Shipping & Delivery" ? shipping
                            : reason === "Technical Issues" ? technical
                                : reason === "Other" ? artistOther
                                    : "")
            : (reason === "Orders" ? order
                : reason === "Billing" ? billing
                    : reason === "Delivery" ? delivery
                        : reason === "Returns & Refunds" ? refund
                            : reason === "Account Help" ? account
                                : reason === "Other" ? buyerOther
                                    : "");

        if (!subReason) {
            newErrors.subreason = "Please select a sub-reason.";
        }

        if (!details.trim()) {
            newErrors.details = "Please enter details of your request.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            postData()
        }

    };

    const postData = async () => {
        const formData = new FormData();
        formData.append("userType", selected)
        formData.append("email", email);
        formData.append("subject", subject || "Support Request");
        formData.append("description", details);

        // If Artist
        if (selected === "I am an Artist") {
            formData.append("reason", reason);
            formData.append("subReason", subReason);
            formData.append("gallery", gallery);
            if (artId) formData.append("artId", artId);
        }

        if (selected === "I am a Buyer") {
            formData.append("reason", reason);
            formData.append("subReason", subReason);
            formData.append("buyerCountry", country.toLowerCase());
            if (name) formData.append("fullName", name);
            if (orderNo) formData.append("orderNumber", orderNo);
        }

        if (attachment) {
            for (let i = 0; i < attachment.length; i++) {
                formData.append("attachment", attachment[i]);
            }
        }

        try {
            const response = await fetch("http://localhost:5000/api/support", {
                method: "POST",
                body: formData
            })

            const data = await response.json();

            if (!response.ok) {
                setNotification({ type: "error", message: data.message || "Form Submission Failed." });
            } else {
                setNotification({ type: "success", message: "Form Successfully Submitted." })
            }
        }
        catch (err) {
            setNotification({ type: "error", message: "Server Error, Please try again later." })
        }
    }


    const artistReasonSubOptions = {
        "Account / Profile Settings": [
            "Can't update profile",
            "Change email/password",
            "Deactivate account"
        ],
        "Uploading Artworks": [
            "Image upload issue",
            "Category confusion",
            "Size or dimension error"
        ],
        "Sales & Payments": [
            "Payment not received",
            "Pricing help",
            "Order cancellation"
        ],
        "Shipping & Delivery": [
            "Shipping label issue",
            "Delivery delay",
            "Courier not available in region"
        ],
        "Technical Issues": [
            "Website not loading",
            "Feature not working",
            "Mobile issues"
        ],
        "Other": [
            "Not listed above",
            "General feedback",
            "Report a bug"
        ]
    };

    const buyerReasonSubOptions = {
        "Orders": [
            "Track my order",
            "Cancel my order",
            "Item damaged",
            "Wrong item received"
        ],
        "Billing": [
            "Wrong charge",
            "Invoice request",
            "Need payment method help"
        ],
        "Delivery": [
            "Late delivery",
            "Wrong address",
            "Package missing"
        ],
        "Returns & Refunds": [
            "Start a return",
            "Refund not received",
            "Exchange request"
        ],
        "Account Help": [
            "Login issue",
            "Forgot password",
            "Change account details"
        ],
        "Other": [
            "Product suggestion",
            "Complaint",
            "General inquiry"
        ]
    };

    const handleSelected = (e) => {
        setSelected(e.target.value);
        setReason("");
        setSubReason("");
        setuploadArtwork("");
        setSales("");
        setOrder("");
        setAccount("")
        setBilling("");
    };

    const handleReason = (e) => {
        setReason(e.target.value);
        setSubReason("");
        setuploadArtwork("");
        setAccount("")
        setSales("");
        setOrder("");
        setBilling("");
    };

    const renderSubOptions = () => {
        const subOptions = selected === "I am an Artist"
            ? artistReasonSubOptions[reason]
            : buyerReasonSubOptions[reason];

        const value = selected === "I am an Artist"
            ? (reason === "Uploading Artworks" ? uploadArtwork
                : reason === "Account / Profile Settings" ? profile
                    : reason === "Sales & Payments" ? sales
                        : reason === "Shipping & Delivery" ? shipping
                            : reason === "Technical Issues" ? technical
                                : reason === "Other" ? artistOther
                                    : "")
            : (reason === "Orders" ? order
                : reason === "Billing" ? billing
                    : reason === "Delivery" ? delivery
                        : reason === "Returns & Refunds" ? refund
                            : reason === "Account Help" ? account
                                : reason === "Other" ? buyerOther
                                    : "");


        // const handleChange = (e) => {
        //     const val = e.target.value;
        //     if (selected === "I am an Artist") {
        //         if (reason === "Uploading Artworks") setuploadArtwork(val);
        //         else if (reason === "Account / Profile Settings") setProfile(val);
        //         else if (reason === "Sales & Payments") setSales(val);
        //         else if (reason === "Shipping & Delivery") setShipping(val);
        //         else if (reason === "Technical Issues") setTechnical(val);
        //         else if (reason === "Other") setartistOther(val);
        //     } else {
        //         if (reason === "Orders") setOrder(val);
        //         else if (reason === "Billing") setBilling(val);
        //         else if (reason === "Delivery") setDelivery(val);
        //         else if (reason === "Returns & Refunds") setRefund(val);
        //         else if (reason === "Account Help") setAccount(val);
        //         else if (reason === "Other") setBuyerOther(val);
        //     }
        // };
        if (!subOptions) return null;

        const handleChange = (e) => {
            setSubReason(e.target.value); // 🔥 Directly store selected subreason
        };

        if (!subOptions) return null;

        return (
            <div className="mb-5">
                <label htmlFor="subreason">I need help with:</label>
                <select
                    id="subreason"
                    value={subReason}
                    onChange={handleChange}
                    className="w-full p-3 border border-black rounded"
                >
                    <option>-</option>
                    {subOptions.map((opt, index) => (
                        <option key={index}>{opt}</option>
                    ))}
                </select>
                {errors.subreason && <p className="text-red-500 text-sm">{errors.subreason}</p>}
            </div>
        );
    };

    return (
        <>
            <div className="flex m-10 gap-2">
                <NavLink to={'/help-center'} className="underline hover:text-teal-600">Help Center</NavLink>
                <p> / </p>
                <NavLink to={`/support`} className="underline hover:text-teal-600">Submit a request</NavLink>
            </div>

            <div className="lg:w-1/2 sm:w-[70%] md:ml-20 ml-16">
                <h1 className="mb-5">Submit a request</h1>
                <label htmlFor="type">Please choose a request type below.</label>
                <select value={selected} onChange={handleSelected} id="type" className="w-full p-3 border border-black rounded mb-5">
                    <option>-</option>
                    <option>I am an Artist</option>
                    <option>I am a Buyer</option>
                </select>
                {errors.selected && <p className="text-red-500 text-sm">{errors.selected}</p>}

                {selected && (
                    <>
                        <div className="mb-5">
                            <label htmlFor="email">Your email address</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-black rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="reason">{selected} Contact Reason</label>
                            <select id="reason" value={reason} onChange={handleReason} className="w-full p-3 border border-black rounded">
                                <option>-</option>
                                {selected === "I am an Artist" ? (
                                    <>
                                        <option>Account / Profile Settings</option>
                                        <option>Uploading Artworks</option>
                                        <option>Sales & Payments</option>
                                        <option>Shipping & Delivery</option>
                                        <option>Technical Issues</option>
                                        <option>Other</option>
                                    </>
                                ) : (
                                    <>
                                        <option>Orders</option>
                                        <option>Billing</option>
                                        <option>Delivery</option>
                                        <option>Returns & Refunds</option>
                                        <option>Account Help</option>
                                        <option>Other</option>
                                    </>
                                )}
                            </select>
                            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                        </div>

                        {renderSubOptions()}

                        {selected === "I am an Artist" && (
                            <>
                                <div className="mb-5">
                                    <label htmlFor="gallery">Studio / Gallery Name</label>
                                    <input name="gallery" id="gallery" value={gallery} onChange={(e) => setGallery(e.target.value)} type="text" className="w-full p-3 border border-black rounded" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="art_id" className="flex gap-2">Art ID or Listing URL <p>(optional)</p></label>
                                    <input name="art_id" id="art_id" value={artId} onChange={(e) => setArtId(e.target.value)} type="text" className="w-full p-3 border border-black rounded" />
                                </div>
                            </>
                        )}

                        {selected === "I am a Buyer" && (
                            <>
                                <div className="mb-5">
                                    <label htmlFor="country">Buyer Contact Country</label>
                                    <select id="country" className="w-full p-3 border border-black rounded" value={country} onChange={(e) => setCountry(e.target.value)}>
                                        <option>-</option>
                                        <option>Pakistan</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Canada</option>
                                    </select>
                                    <p>Delivery destination and shopping country.</p>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="name">Full Name</label>
                                    <input name="name" id="name" type="text" className="w-full p-3 border border-black rounded" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="orderNumber" className="flex gap-2">Order # <p>(optional)</p></label>
                                    <input name="orderNumber" id="orderNumber" type="text" className="w-full p-3 border border-black rounded" value={orderNo} onChange={(e) => setOrderNo(e.target.value)} />
                                </div>
                            </>
                        )}

                        <div className="mb-5">
                            <label htmlFor="subject" className="flex gap-2">Subject <p>(optional)</p></label>
                            <input
                                name="subject"
                                id="subject"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full p-3 border border-black rounded"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="details">Please Provide details of your request below.</label>
                            <textarea
                                id="details"
                                name="details"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                className="w-full p-3 border border-black rounded h-32"
                            />
                            {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="attachments" className="flex gap-2">Attachments <p>(optional)</p></label>
                            <input type="file" accept=".pdf, .doc, .docx, image/*" id="attachments" name="attachments" className="w-full p-3 border border-black rounded" multiple onChange={(e) => setAttachment(e.target.files)} />
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="bg-black text-white pl-20 pr-20 p-2 rounded mb-10 text-center">Submit</button>
                        </div>
                    </>
                )}
            </div>

            <div className="bg-gray-100">
                <div className="md:p-20">
                    <h2 className="sm:ml-0 lg:ml-10 p-5">Contact Us</h2>
                    <div className="flex flex-wrap gap-10 justify-center">
                        <div className="w-[45%]">
                            <NavLink to={'/support'}>
                                <button className="border border-gray-500 w-full mb-4 hover:bg-teal-600 hover:text-white p-5 rounded">
                                    <span className="font-semibold text-xl">Contact Support</span>
                                    <br />
                                    <span className="text-md">Submit Inquiry Form</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className="w-[45%]">
                            <NavLink to={'/art-advisory'}>
                                <button className="border border-gray-500 w-full mb-4 hover:bg-teal-600 hover:text-white rounded p-5">
                                    <span className="font-semibold text-xl">Contact Curators</span>
                                    <br />
                                    <span className="text-md">Art Advisory</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white ${notification.type === "error" ? "bg-red-600" : "bg-green-600"
                            }`}
                    >
                        {notification.message}
                        <button
                            className="ml-3 text-white font-bold"
                            onClick={() => setNotification(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
