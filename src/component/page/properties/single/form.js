import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({ property }) => {
    console.log(property);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: ""
});
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
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
        newErrors.email = "Email is invalid";
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
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        if (!privacyAccepted) {
            setErrors({ privacy: "You must accept the privacy policy to continue" });
            return;
        }


        try {
    const response = await fetch(
        'https://secure-pleasure-8cb8bfce78.strapiapp.com/api/contact',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                reason: formData.reason,
                message: formData.message,

                source: source,

                propertyAddress:
                    property?.UnparsedAddress ||
                    `${property?.StreetNumber || ""} ${property?.StreetName || ""}, ${property?.City || ""}, ${property?.StateOrProvince || ""} ${property?.PostalCode || ""}`,

                listingKey: property?.ListingKey,

                propertyUrl: window.location.href,
            }),
        }
    );
    if (response.ok) {
        alert('Thank you! We will contact you soon.');
        setFormData({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
});
    } else {
        console.error('❌ FAILED: Lead submission failed');
        alert('Something went wrong. Please try again.');
    }
} catch (error) {
    console.error('❌ ERROR:', error);
    alert('Network error. Please try again.');
}
}; 
    
  return (
  <div>
    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sticky top-24">

        {/* Header */}

        <div className="text-center mb-8">

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-5">
                <span className="text-2xl">🏡</span>
            </div>

            <p className="text-red-700 uppercase tracking-[0.25em] text-xs font-semibold">
                PROPERTY INQUIRY
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
                Love this
            </h2>

            <h2 className="text-4xl font-playfair italic text-red-700">
                Property?
            </h2>

            <p className="text-gray-500 mt-5 leading-7 text-base">
                Request more information, schedule a private showing, or ask us anything about this property.
            </p>

        </div>

           {/* Full Name */}

<div className="space-y-5">

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
            className={`w-full h-12 px-4 rounded-xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition ${
                errors.name ? "border-red-500" : "border-gray-300"
            }`}
        />

        {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
    </div>

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
            className={`w-full h-12 px-4 rounded-xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition ${
                errors.email ? "border-red-500" : "border-gray-300"
            }`}
        />

        {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
    </div>

    <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
        </label>

        <input
            type="tel"
            name="phone"
            placeholder="(740) 816-3112"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-xl border bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition ${
                errors.phone ? "border-red-500" : "border-gray-300"
            }`}
        />

        {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
        )}
    </div>

    <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            How can we help?
        </label>

        <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-xl border bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition ${
                errors.reason ? "border-red-500" : "border-gray-300"
            }`}
        >
            <option value="">Select an option</option>
            <option value="Schedule a Showing">🏡 Schedule a Showing</option>
            <option value="Request Information">📄 Request Information</option>
            <option value="Ask a Question">💬 Ask a Question</option>
        </select>

        {errors.reason && (
            <p className="text-red-600 text-sm mt-1">{errors.reason}</p>
        )}
    </div>

    <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Details
            <span className="text-gray-400 font-normal ml-1">(Optional)</span>
        </label>

        <textarea
            name="message"
            rows={5}
            placeholder="Tell us anything that will help us assist you..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition ${
                errors.message ? "border-red-500" : "border-gray-300"
            }`}
        />

        {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
    </div>

</div>

<button
    onClick={() => submitToAPI("Property Inquiry Form")}
    className="w-full h-14 mt-8 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
>
    Request Information
</button>

<div className="flex items-center gap-3 my-6">
    <div className="flex-1 border-t border-gray-200"></div>
    <span className="text-gray-400 text-sm font-medium">
        OR
    </span>
    <div className="flex-1 border-t border-gray-200"></div>
</div>
<a
    href="tel:+17408163112"
    className="block w-full h-14 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-center leading-[56px] transition-all duration-300 hover:shadow-md"
>
    📞 Need Help Now? Call an Agent
</a>

{/* Privacy */}

<div className="mt-8">

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
            className="mt-1 h-4 w-4 rounded border-gray-300 accent-red-700"
        />

        <label
            htmlFor="privacyPolicy"
            className="text-xs leading-6 text-gray-500"
        >
            By submitting this form, you agree to be contacted by
            <span className="font-semibold text-gray-700">
                {" "}The Romanelli Group
            </span>{" "}
            via phone, email, or text regarding this property and other real estate opportunities. Message and data rates may apply. View our{" "}
            <Link
                to="/privacy-policy"
                target="_blank"
                className="font-semibold text-red-700 hover:text-red-800 underline"
            >
                Privacy Policy
            </Link>.
        </label>

    </div>

</div>

</div>
</div>
);
};

export default Form;