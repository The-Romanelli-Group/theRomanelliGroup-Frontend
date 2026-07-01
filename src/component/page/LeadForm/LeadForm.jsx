import React, { useState } from "react";
import { Link } from "react-router-dom";

import SellSuccess from "../../../assets/images/illustrations/sell-success.svg";
import PropertySuccess from "../../../assets/images/illustrations/property-success.svg";
import ContactSuccess from "../../../assets/images/illustrations/contact-success.svg";


const FORM_CONFIG = {
    property: {
        title: "Love This",
        titleAccent: "Property?",

        subtitle:
            "We'll get back to you within one business day.",

        submitText: "Request Information",
        successImage: PropertySuccess,
        successTitle: "You're All Set!",

        successMessage:
            "Thanks for your interest in this property. A member of The Romanelli Group will contact you within one business day.",

        source: "Property Inquiry Form",

        reasons: [
            "Schedule a Showing",
            "Request Information",
            "Ask a Question",
            "Make an Offer",
            "Other",
        ],
    },

    contact: {
        title: "Let's",
        titleAccent: "Connect",

        subtitle:
            "We'll get back to you within one business day.",

        submitText: "Submit Inquiry",
        successImage: ContactSuccess,
        successTitle: "You're All Set!",

        successMessage:
            "Thanks for contacting The Romanelli Group. We've received your message and a member of our team will be in touch within one business day.",

        source: "Contact Form",

        reasons: [
            "Buying Inquiry",
            "Selling Inquiry",
            "Home Valuation",
            "General Question",
            "Other",
        ],
    },

    sell: {
        title: "Free Home",
        titleAccent: "Valuation",

        subtitle:
            "Find out what your home is worth with a complimentary market analysis.",

        // Step 1
        continueText: "Continue",

        // Step 2
        submitText: "Get My Home Value",
        successImage: SellSuccess,
        successTitle: "You're All Set!",

        successMessage:
            "Thanks for requesting your complimentary home valuation. A member of The Romanelli Group will contact you within one business day.",

        source: "Sell Website Form",

        reasons: [],
    },
};

const LeadForm = ({
    variant = "property",
    property = null,
}) => {

    const config = FORM_CONFIG[variant];
    const isSell = variant === "sell";

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        // Shared
        name: "",
        email: "",
        phone: "",

        // Contact & Property
        reason: "",
        message: "",

        // Sell
        address: "",
        propertyType: "",
        timeline: "",
    });

    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

    };

    const validateStep1 = () => {

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

        // Contact & Property only
        if (!isSell) {

            if (!formData.reason) {
                newErrors.reason = "Please select an option";
            }

            if (!formData.message.trim()) {
                newErrors.message = "Message is required";
            }

        }

        return newErrors;

    };
    

const validateStep2 = () => {

    const newErrors = {};

    if (!formData.address.trim()) {
        newErrors.address = "Property address is required";
    }

    if (!formData.propertyType) {
        newErrors.propertyType = "Please select a property type";
    }

    if (!formData.timeline) {
        newErrors.timeline = "Please select a timeline";
    }

    return newErrors;

};

const nextStep = () => {

    const stepErrors = validateStep1();

    if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
    }

    setErrors({});
    setStep(2);

};

const prevStep = () => {

    setErrors({});
    setStep(1);

};

const submitToAPI = async (source) => {

    let formErrors = {};

    if (isSell) {

        formErrors =
            step === 1
                ? validateStep1()
                : validateStep2();

    } else {

        formErrors = validateStep1();

    }

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

                    // Shared
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,

                    // Contact / Property
                    reason: formData.reason,
                    message: formData.message,

                    // Sell
                    address: formData.address,
                    propertyType: formData.propertyType,
                    timeline: formData.timeline,

                    source,

                    // Property Only
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

            address: "",
            propertyType: "",
            timeline: "",
        });

        setStep(1);
        setPrivacyAccepted(false);
        setErrors({});

    } catch (error) {

        console.error("❌ ERROR:", error);

        setErrors({
            submit:
                "Sorry, something went wrong while sending your request. Please try again.",
        });

    } finally {

        setIsSubmitting(false);

    }

};

if (submitted) {
    return (
       <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 text-center">

    <div className="w-44 h-44 mx-auto mb-0 flex items-center justify-center">

    <img
        src={config.successImage}
        alt={config.successTitle}
        className="w-full h-full object-contain"
    />

</div>

    <h2 className="text-3xl font-bold text-gray-900">
        {config.successTitle}
    </h2>

    <p className="text-gray-600 leading-7 mt-4">
        {config.successMessage}
    </p>

    <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-5">

        <div className="text-3xl mb-2">
            ✅
        </div>

        <p className="font-semibold text-gray-900">
            What happens next?
        </p>

        <p className="text-sm text-gray-600 mt-2 leading-6">
            {isSell
                ? "We'll prepare a complimentary market analysis and contact you within one business day to discuss your home's value."
                : "We'll review your inquiry and contact you by phone or email—typically within one business day."}
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
        onClick={() => {
            setSubmitted(false);
            setStep(1);
        }}
        className="mt-5 text-red-700 hover:underline font-medium"
    >
        Submit Another Request
    </button>

</div>
    );
}

return (
<div>

    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-5 md:p-6 sticky top-24">

        {/* Header */}

<div className="text-center mb-8">

    <h2 className="text-4xl md:text-5xl font-bold leading-tight">

    <span className="text-gray-900">

        {isSell && step === 2
            ? "Tell Us About"
            : config.title}

    </span>

    {" "}

    <span className="font-playfair italic font-normal text-red-700 whitespace-nowrap">

        {isSell && step === 2
            ? "Your Home"
            : config.titleAccent}

    </span>

</h2>

    {/* Property & Sell Subtitle */}

    {variant !== "contact" && (
    <p className="mt-4 text-lg text-gray-500 leading-7 max-w-sm mx-auto">

        {isSell && step === 2
            ? "Just a few more details so we can prepare a more accurate home valuation."
            : config.subtitle}

    </p>
)}

    {/* Sell Progress Indicator */}

    {isSell && (
        <div className="flex items-center justify-center gap-2 mt-5">

            <div
                className={`h-2 w-10 rounded-full transition-all duration-300 ${
                    step === 1
                        ? "bg-red-700"
                        : "bg-gray-200"
                }`}
            />

            <div
                className={`h-2 w-10 rounded-full transition-all duration-300 ${
                    step === 2
                        ? "bg-red-700"
                        : "bg-gray-200"
                }`}
            />

        </div>
    )}

</div>
        {/* Form */}

        <div className="space-y-4">

            {(step === 1 || !isSell) && (
                <>

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

                </>
            )}

            {/* Contact & Property Only */}

            {!isSell && (

                <>

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

                            <option value="">
                                How can we help?
                            </option>

                            {config.reasons.map((reason) => (
                                <option
                                    key={reason}
                                    value={reason}
                                >
                                    {reason}
                                </option>
                            ))}

                        </select>

                        {errors.reason && (
                            <p className="text-red-600 text-sm mt-2">
                                {errors.reason}
                            </p>
                        )}

                    </div>

                        {/* Message (Contact & Property Only) */}

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

                </>

            )}

            {/* Sell Step 2 */}

            {isSell && step === 2 && (

    <>

        {/* Property Address */}

        <div>

            <input
                type="text"
                name="address"
                placeholder="Property Address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                    errors.address
                        ? "border-red-500"
                        : "border-gray-300 hover:border-gray-400"
                }`}
            />

            {errors.address && (
                <p className="text-red-600 text-sm mt-2">
                    {errors.address}
                </p>
            )}

        </div>

        {/* Property Type */}

        <div>

            <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                    errors.propertyType
                        ? "border-red-500"
                        : "border-gray-300 hover:border-gray-400"
                }`}
            >
                <option value="">Property Type</option>
                <option>Single Family</option>
                <option>Condo</option>
                <option>Townhome</option>
                <option>Multi-Family</option>
                <option>Land</option>
                <option>Other</option>
            </select>

            {errors.propertyType && (
                <p className="text-red-600 text-sm mt-2">
                    {errors.propertyType}
                </p>
            )}

        </div>

        {/* Timeline */}

        <div>

            <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={`w-full h-14 px-5 rounded-2xl border bg-gray-50 text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 ${
                    errors.timeline
                        ? "border-red-500"
                        : "border-gray-300 hover:border-gray-400"
                }`}
            >
                <option value="">When are you looking to sell?</option>
                <option>Immediately</option>
                <option>1–3 Months</option>
                <option>3–6 Months</option>
                <option>6+ Months</option>
                <option>Just Researching</option>
            </select>

            {errors.timeline && (
                <p className="text-red-600 text-sm mt-2">
                    {errors.timeline}
                </p>
            )}

        </div>

        {/* Notes */}

        <div>

            <textarea
                name="message"
                rows={4}
                placeholder="Tell us anything you'd like us to know (optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 p-5 text-gray-900 placeholder:text-gray-400 transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 hover:border-gray-400"
            />

        </div>

    </>

)}
        </div>

        {/* Submit Error */}

        {errors.submit && (
            <p className="text-center text-red-600 text-sm">
                {errors.submit}
            </p>
        )}

        {/* Submit */}

        <div className={`flex ${isSell && step === 2 ? "gap-3" : ""} mt-6`}>

            {isSell && step === 2 && (

               <button
    onClick={prevStep}
    className="w-28 h-14 rounded-2xl border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
        />
    </svg>

    Back
</button>

            )}

            <button
                disabled={isSubmitting}
                onClick={() => {

                    if (isSell && step === 1) {
                        nextStep();
                    } else {
                        submitToAPI(config.source);
                    }

                }}
                className="flex-1 h-14 rounded-2xl bg-red-700 hover:bg-red-800 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
            >

                {isSubmitting ? (

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                       Sending...
                    </div>

                ) : (

                    isSell && step === 1
                        ? config.continueText
                        : config.submitText

                )}

            </button>

        </div>

      

        {/* Divider */}

     <div className="flex items-center mt-4 mb-4">

            <div className="flex-1 h-px bg-gray-200"></div>

            <span className="px-4 text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                OR
            </span>

            <div className="flex-1 h-px bg-gray-200"></div>

        </div>

        {/* Call CTA */}

        <a
    href="tel:+17408163112"
    className="block mt-3"
>

            <button className="w-full h-14 rounded-2xl border-2 border-gray-900 bg-white text-gray-900 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                📞 Call an Agent
            </button>

        </a>
{/* Privacy */}
<div className="mt-4 pt-4 border-t border-gray-200">

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
                    setErrors((prev) => ({
                        ...prev,
                        privacy: "",
                    }));
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
            <strong>The Romanelli Group LLC</strong>{" "}

            {isSell
                ? "regarding your complimentary home valuation."
                : variant === "property"
                ? "regarding this property."
                : "regarding your real estate inquiry."}{" "}

            Message and data rates may apply. You may opt out at any time.{" "}

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

export default LeadForm;