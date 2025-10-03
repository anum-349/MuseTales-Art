import { useActionState, useState } from "react"

export default function Accessability() {
    async function handleSubmit(previousData, formData) {
        let email = formData.get("email");
        let name = formData.get("name");
        let message = formData.get("message");

        try {
            const res = await fetch("http://localhost:5000/api/accessibility", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            const data = await res.json();

            if (!res.ok) {
                return { error: data.message, name, email, message };
            }

            return { submitMessage: data.message, name: "", email: "", message: "" };
        } catch (err) {
            console.error(err);
            return { error: "Server error. Try again later.", name, email, message };
        }
    }


    const [data, action, pending] = useActionState(handleSubmit, undefined)

    return (
        <>
            <div className="m-20 mt-5 mb-10">
                <div>
                    <p className="text-3xl font-semibold pb-3">Accessibility Statement</p>
                    <p>Last Updated: <b> June 25, 2025</b></p>
                    <p className="pt-3 pb-3 text-justify">Artiflect Group is committed to making our websites accessible and user friendly. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not accessible to people with disabilities, please contact us at <a href="mail:accessability@musetaleart.com" className="underline hover:text-teal-600" target="_blank">accessibility@MuseTalesart.com</a> with <b>Website Accessibility</b> in the subject line and provide a description of the specific feature you feel is not accessible or a suggestion for an improvement.
                        <br></br>
                        We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. We aim to respond to accessibility feedback within five (5) business days.</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold pb-3">Our Commitment</p>
                    <p>We are dedicated to ensuring that our website is accessible to all users, including those with disabilities. We strive to provide an inclusive experience that enables everyone to browse, purchase, and enjoy art with ease.</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold pt-3 pb-3">Accessibility Features</p>
                    <div className="pl-3">
                        <b>Keyboard Navigation:</b>
                        <p className="pl-3">Our site supports full navigation using a keyboard.</p>
                        <b>Screen Reader Compatibility:</b>
                        <p className="pl-3">We use semantic HTML and ARIA labels to support screen readers.</p>
                        <b>Color Contrast:</b>
                        <p className="pl-3">We ensure sufficient contrast between text and backgrounds for readability.</p>
                        <b>Responsive Design:</b>
                        <p className="pl-3">Our layout adapts to different screen sizes, including mobile devices.</p>
                        <b>Alt Text:</b>
                        <p className="pl-3">All images have descriptive alt text to help users who rely on screen readers.</p>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-semibold pt-3 pb-3">Ongoing Improvements</p>
                    <p>Accessibility is an ongoing effort. We continuously test and update our website to improve usability for all users. If you experience any issues or have suggestions, please contact us.</p>

                </div>
                <div>
                    <p className="text-2xl font-semibold pt-3 pb-3">How to Contact Us</p>
                    <p>If you have difficulty accessing any part of this website, please reach out to our support team at <a href="mail:accessability@musetaleart.com" className="underline hover:text-teal-600 font-semibold text-black" target="_blank">accessibility@musetalesart.com</a> or call us at <b className="font-semibold">+92 349 5445560</b>. We will make every effort to assist you promptly.</p>
                    <form action={action}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" defaultValue={data?.name} placeholder="Enter your name" className="border border-black w-full p-2 mt-1 mb-1 focus:outline" />
                        {data?.nameError ? <span style={{ color: "red" }}><br />{data?.nameError}</span> : null}
                        <br />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" defaultValue={data?.email} placeholder="Enter your email" className="border border-black w-full p-2  mt-1 mb-1 focus:outline" />
                        {data?.emailError ? <span style={{ color: "red" }}><br />{data?.emailError}</span> : null}
                        <br />
                        <label htmlFor="message">Message</label>
                        <textarea rows={3} id="message" name="message" defaultValue={data?.message} placeholder="Write a message..." className="w-full p-2 border border-black resize-none overflow-y-auto focus:outline" />
                        {data?.messageError ? <span style={{ color: "red" }}><br />{data?.messageError}</span> : null}
                        <div className="text-center">
                            <button className="border border-black hover:bg-teal-600 hover:text-white mt-5 pl-10 pr-10 rounded" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
                        </div>
                        {data?.submitMessage ? <span style={{ color: "green" }}><br />{data?.submitMessage}</span> : null}
                    </form>
                </div>
            </div>
        </>
    )
}