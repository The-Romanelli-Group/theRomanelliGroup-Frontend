import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AccessibleButton from '../../../components/AccessibleButton'

const ConnectForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
    });

    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: "",
            });
        }

        if (errors.submit) {
            setErrors((prev) => ({
                ...prev,
                submit: "",
            }));
        }
    };

    const validateForm = () => {

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.reason) {
            newErrors.reason = "Please select an option";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const submitToAPI = async (source) => {

        setErrors({});

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        if (!privacyAccepted) {
            setErrors({
                privacy: "You must accept the privacy policy to continue",
            });
            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                "https://secure-pleasure-8cb8bfce78.strapiapp.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        reason: formData.reason,
                        message: formData.message,
                        source,
                    }),
                }
            );

            if (response.ok) {

                setSubmitted(true);

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    reason: "",
                    message: "",
                });

                setPrivacyAccepted(false);
                setErrors({});

                // Scroll to top of the form
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

            } else {

                console.error("❌ FAILED: Lead submission failed");

                setErrors({
                    submit: "Something went wrong. Please try again.",
                });

            }

        } catch (error) {

            console.error("❌ ERROR:", error);

            setErrors({
                submit: "Network error. Please check your connection and try again.",
            });

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = () => submitToAPI("Contact Form");
return (
    <>
                    {/* Right Section (Form) */}
                

{submitted ? (

<div className="w-full lg:w-1/2 lg:pl-12">

    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-5xl mb-6 animate-bounce">
            🎉
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
            You're All Set!
        </h2>

        <p className="text-gray-600 leading-7 mt-4">
            Thanks for reaching out to
            <strong> The Romanelli Group.</strong>
            <br />
            We've received your message and someone from our team will contact you shortly.
        </p>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mt-8">

            <div className="text-5xl mb-3">
                🏡
            </div>

            <p className="font-semibold text-gray-900">
                Need immediate assistance?
            </p>

            <p className="text-gray-500 text-sm mt-2">
                Give us a call and we'll be happy to help.
            </p>

        </div>

        <a
            href="tel:+17408163112"
            className="block mt-8"
        >

            <AccessibleButton
                ariaLabel="Call The Romanelli Group"
                className="w-full h-14 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-semibold text-lg transition"
            >
                📞 Call Our Team
            </AccessibleButton>

        </a>

        <button
            onClick={() => setSubmitted(false)}
            className="mt-5 text-red-700 hover:underline font-medium"
        >
            Send Another Message
        </button>

    </div>

</div>

) : (

<div className="w-full lg:w-1/2 lg:pl-12">

    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-8">

        {/* Header */}

        <div className="text-center mb-8">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-5">
                <span className="text-3xl">🏡</span>
            </div>

            <p className="text-red-700 uppercase tracking-[0.3em] text-xs font-semibold">
                THE ROMANELLI GROUP
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Let's
            </h2>

            <h2 className="text-4xl md:text-5xl font-playfair italic text-red-700">
                Connect
            </h2>

            <p className="text-gray-500 mt-5 leading-7 text-base max-w-sm mx-auto">
                Buying, selling, investing, or simply have a question? We'd love to hear from you and help however we can.
            </p>

        </div>

        {/* Form */}

        <div className="space-y-6">

            {/* Full Name */}

            <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                </label>

                <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Full name"
                    aria-required="true"
                    className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                        errors.name
                            ? "border-red-500"
                            : "border-gray-300 hover:border-gray-400"
                    }`}
                />

                {errors.name && (
                    <p className="text-red-600 text-sm mt-2">
                        {errors.name}
                    </p>
                )}

            </div>

            {/* Email */}

            <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                </label>

                <input
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Email address"
                    aria-required="true"
                    className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                        errors.email
                            ? "border-red-500"
                            : "border-gray-300 hover:border-gray-400"
                    }`}
                />

                {errors.email && (
                    <p className="text-red-600 text-sm mt-2">
                        {errors.email}
                    </p>
                )}

            </div>

            {/* Phone */}

            <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                </label>

                <input
                    type="tel"
                    name="phone"
                    placeholder="(740) 555-1234"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-label="Phone Number"
                    className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                        errors.phone
                            ? "border-red-500"
                            : "border-gray-300 hover:border-gray-400"
                    }`}
                />

                {errors.phone && (
                    <p className="text-red-600 text-sm mt-2">
                        {errors.phone}
                    </p>
                )}

            </div>
{/* Reason */}

<div>

    <label className="block text-sm font-semibold text-gray-700 mb-2">
        How Can We Help?
    </label>

    <select
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        aria-label="Reason for contact"
        aria-required="true"
        className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
            errors.reason
                ? "border-red-500"
                : "border-gray-300 hover:border-gray-400"
        }`}
    >
        <option value="">Choose an option</option>
        <option value="Buying Inquiry">🏡 Buying a Home</option>
        <option value="Selling Inquiry">🏠 Selling My Home</option>
        <option value="Home Valuation">💰 Home Valuation</option>
        <option value="Investment Property">📈 Investment Property</option>
        <option value="General Question">💬 General Question</option>
        <option value="Partnership Opportunity">🤝 Partnership Opportunity</option>
        <option value="Other">✨ Other</option>
    </select>

    {errors.reason && (
        <p className="text-red-600 text-sm mt-2">
            {errors.reason}
        </p>
    )}

</div>

{/* Message */}

<div>

    <div className="flex justify-between mb-2">

        <label className="text-sm font-semibold text-gray-700">
            Message
        </label>

        <span className="text-xs text-gray-400">
            Tell us a little about your goals
        </span>

    </div>

    <textarea
        name="message"
        rows={6}
        placeholder="I'm looking to buy my first home in Columbus..."
        value={formData.message}
        onChange={handleChange}
        aria-label="Message"
        aria-required="true"
        className={`w-full rounded-2xl border bg-gray-50 p-5 text-gray-900 placeholder:text-gray-400 transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
            errors.message
                ? "border-red-500"
                : "border-gray-300 hover:border-gray-400"
        }`}
    />

    {errors.message && (
        <p className="text-red-600 text-sm mt-2">
            {errors.message}
        </p>
    )}

</div>

</div>

{/* Submit Error */}

{errors.submit && (
    <p className="text-center text-red-600 text-sm mt-6">
        {errors.submit}
    </p>
)}

{/* Submit */}

<AccessibleButton
    onClick={handleSubmit}
    disabled={loading}
    ariaLabel="Submit enquiry form"
    className="w-full h-14 mt-6 rounded-2xl bg-red-700 hover:bg-red-800 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
>
    {loading ? (
        <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
        </div>
    ) : (
        "Submit Inquiry"
    )}
</AccessibleButton>

<p className="text-center text-sm text-gray-500 mt-4">
    We typically respond within{" "}
    <span className="font-semibold text-gray-700">
        1 business day
    </span>.
</p>

{/* Divider */}

<div className="flex items-center my-8">

    <div className="flex-1 h-px bg-gray-200"></div>

    <span className="px-4 text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
        OR
    </span>

    <div className="flex-1 h-px bg-gray-200"></div>

</div>

{/* Call CTA */}

<a
    href="tel:+17408163112"
    className="block"
>

    <AccessibleButton
        ariaLabel="Call The Romanelli Group"
        className="w-full h-14 rounded-2xl border-2 border-gray-900 bg-white text-gray-900 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
    >
        📞 Call Our Team
    </AccessibleButton>

</a>

{/* Privacy */}

<div className="mt-8 pt-6 border-t border-gray-200">

    {errors.privacy && (
        <p className="text-red-600 text-sm mb-3">
            {errors.privacy}
        </p>
    )}

    <div className="flex items-start gap-3">

        <input
            type="checkbox"
            id="privacyPolicy"
            checked={privacyAccepted}
            onChange={(e) => {

                setPrivacyAccepted(e.target.checked);

                if (errors.privacy) {
                    setErrors({
                        ...errors,
                        privacy: "",
                    });
                }

            }}
            className={`mt-1 h-4 w-4 rounded border-gray-300 text-red-700 focus:ring-red-700 ${
                errors.privacy ? "border-red-500" : ""
            }`}
        />

        <label
            htmlFor="privacyPolicy"
            className="text-sm leading-6 text-gray-500"
        >
            By submitting this form, you agree to be contacted by{" "}
            <strong>The Romanelli Group LLC</strong> via phone, email, and text regarding your real estate inquiry. Message and data rates may apply. You may opt out at any time.{" "}

            <Link
                to="/privacy-policy"
                target="_blank"
                className="font-medium text-red-700 hover:text-red-800 underline underline-offset-2"
            >
                Read our Privacy Policy
            </Link>

        </label>

    </div>

</div>

</div>

</div>

)}
    </>
  )
}

export default ConnectForm
