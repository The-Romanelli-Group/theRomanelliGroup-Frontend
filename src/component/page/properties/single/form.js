import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({ property }) => {
    console.log(property);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
    });

    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
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
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.reason) {
            newErrors.reason = "Please select an option";
        }

        // Message is OPTIONAL now

        return newErrors;
    };
    const submitToAPI = async (source) => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }

    if (!privacyAccepted) {
        setErrors({
            privacy: "Please accept the Privacy Policy to continue.",
        });
        return;
    }

    setIsSubmitting(true);

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

    propertyAddress:
        property?.UnparsedAddress ||
        `${property?.StreetNumber || ""} ${property?.StreetName || ""}, ${property?.City || ""}, ${property?.StateOrProvince || ""} ${property?.PostalCode || ""}`,

    listingKey: property?.ListingKey,

    propertyUrl: window.location.href,

    propertyPrice: property?.ListPrice,
    propertyStatus: property?.StandardStatus,
    beds: property?.BedroomsTotal,
    baths: property?.BathroomsTotalInteger,
    sqft: property?.BuildingAreaTotal,
}),
            }
        );

        if (!response.ok) {
            throw new Error("Submission failed");
        }

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

    } catch (error) {
        console.error("❌ ERROR:", error);

        alert(
            "Sorry, something went wrong while sending your request. Please try again."
        );
    } finally {
        setIsSubmitting(false);
    }
};
    
if (submitted) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                <span className="text-5xl">🏡</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
                You're All Set!
            </h2>

            <p className="text-gray-600 leading-7 mt-4">
                Thanks for your interest in this property.
                <br />
                One of our agents will reach out shortly with the information you requested.
            </p>

            <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-5">

                <div className="text-3xl mb-2">
                    ✅
                </div>

                <p className="font-semibold text-gray-900">
                    What happens next?
                </p>

                <p className="text-sm text-gray-600 mt-2 leading-6">
                    We'll review your inquiry and contact you by phone or email—typically within one business day.
                </p>

            </div>

            <a
                href="tel:+17408163112"
                className="block mt-8"
            >
                <button className="w-full h-14 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-semibold text-lg transition-all duration-300">
                    📞 Need Help Now? Call Us
                </button>
            </a>

            <button
                onClick={() => setSubmitted(false)}
                className="mt-5 text-red-700 hover:underline font-medium"
            >
                Send Another Request
            </button>

        </div>
    );
}

return (
<div>

    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-5 md:p-6 sticky top-24">

        {/* Header */}

        <div className="text-center mb-6">

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Love This
            </h2>

            <h2 className="text-4xl font-playfair italic text-red-700">
                Property?
            </h2>

        </div>

        {/* Form */}

        <div className="space-y-4">

    {/* Full Name */}

    <div>

        <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
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

        <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
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

        <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
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

        <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                errors.reason
                    ? "border-red-500"
                    : "border-gray-300 hover:border-gray-400"
            }`}
        >
            <option value="">How can we help?</option>
            <option value="Schedule a Showing">🏡 Schedule a Showing</option>
            <option value="Request Information">📄 Request Information</option>
            <option value="Ask a Question">💬 Ask a Question</option>
            <option value="Make an Offer">💰 Make an Offer</option>
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

        <textarea
            name="message"
            rows={4}
            placeholder="Tell us how we can help..."
            value={formData.message}
            onChange={handleChange}
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
    <p className="text-center text-red-600 text-sm">
        {errors.submit}
    </p>
)}

{/* Submit */}

<button
    disabled={isSubmitting}
    onClick={() => submitToAPI("Property Inquiry Form")}
    className="w-full h-14 mt-6 rounded-2xl bg-red-700 hover:bg-red-800 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
>
    {isSubmitting ? (
        <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
        </div>
    ) : (
        "Request Information"
    )}
</button>

<p className="text-center text-sm text-gray-500 mt-4">
    We'll get back to you within{" "}
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

    <button
        className="w-full h-14 rounded-2xl border-2 border-gray-900 bg-white text-gray-900 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
    >
        📞 Call an Agent
    </button>

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
            <strong>The Romanelli Group LLC</strong> via phone, email, and text
            regarding this property. Message and data rates may apply. You may
            opt out at any time.{" "}

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
);
};

export default Form;