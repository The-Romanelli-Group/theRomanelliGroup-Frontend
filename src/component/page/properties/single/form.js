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
    const handleSubmit = () => submitToAPI('Property Form - Submit');
    const handleScheduleCall = () => submitToAPI('Property Form - Schedule Call');
    return (
       <div>
    <div className="max-w-md mx-auto h-auto p-5 bg-black rounded-lg shadow-lg text-white">

        {/* Header */}
        <div className="text-center mb-5">
            <h2 className="text-3xl font-bold">
                Interested in
            </h2>
            <h2 className="text-3xl font-playfair italic text-white">
                This Home?
            </h2>
            <p className="text-gray-300 text-sm mt-2">
                Request more information or schedule a private showing.
            </p>
        </div>

        {/* Property Card */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 mb-5">

            <p className="font-semibold text-white text-lg">
                {property?.UnparsedAddress}
            </p>

            <p className="text-2xl font-bold text-white mt-2">
                $
                {property?.ListPrice?.toLocaleString()}
            </p>

            <div className="flex justify-between mt-3 text-sm text-gray-300">
                <span>🛏 {property?.BedroomsTotal} Beds</span>
                <span>🛁 {property?.BathroomsTotalInteger} Baths</span>
                <span>📐 {property?.BuildingAreaTotal?.toLocaleString()} Sq Ft</span>
            </div>

            <div className="mt-3">
                <span className="inline-block bg-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {property?.StandardStatus}
                </span>
            </div>

        </div>

        {/* Name */}

        <p className="text-white font-semibold mb-1">
            Full Name
        </p>

        <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded mb-1 text-black ${errors.name ? 'border-red-500' : ''}`}
        />

        {errors.name &&
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        }

        {/* Email */}

        <p className="text-white font-semibold mt-3 mb-1">
            Email Address
        </p>

        <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded mb-1 text-black ${errors.email ? 'border-red-500' : ''}`}
        />

        {errors.email &&
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        }

        {/* Phone */}

        <p className="text-white font-semibold mt-3 mb-1">
            Phone Number
        </p>

        <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border rounded mb-1 text-black ${errors.phone ? 'border-red-500' : ''}`}
        />

        {errors.phone &&
            <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
        }

        {/* Interest */}

        <p className="text-white font-semibold mt-3 mb-1">
            I'm Interested In
        </p>

        <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full p-2 border rounded mb-1 bg-white text-black ${errors.reason ? 'border-red-500' : ''}`}
        >
            <option value="">Select an option</option>
            <option value="Schedule a Showing">Schedule a Showing</option>
            <option value="Request More Information">Request More Information</option>
            <option value="Pricing Questions">Pricing Questions</option>
            <option value="Make an Offer">Make an Offer</option>
            <option value="Similar Homes">Similar Homes</option>
            <option value="Other">Other</option>
        </select>

        {errors.reason &&
            <p className="text-red-500 text-sm mb-2">{errors.reason}</p>
        }

        {/* Message */}

        <p className="text-white font-semibold mt-3 mb-1">
            Message
        </p>

        <textarea
            name="message"
            rows={5}
            placeholder="Tell us what you'd like to know about this property..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 border rounded mb-1 text-black ${errors.message ? 'border-red-500' : ''}`}
        />

        {errors.message &&
            <p className="text-red-500 text-sm mb-3">{errors.message}</p>
        }

        {/* Buttons */}

        <button
            onClick={handleSubmit}
            className="bg-red-800 hover:bg-red-700 transition text-white font-semibold px-4 py-3 w-full rounded"
        >
            Request Information
        </button>

        <p className="text-center font-bold py-3">
            OR
        </p>

        <button
            onClick={handleScheduleCall}
            className="bg-white hover:bg-gray-200 transition text-black font-semibold px-4 py-3 w-full rounded"
        >
            Schedule a Showing
        </button>

        {/* Privacy */}

        <div className="mt-5">

            {errors.privacy &&
                <p className="text-red-500 text-left text-xs mb-2">
                    {errors.privacy}
                </p>
            }

            <div className="flex items-start gap-2 text-xs text-gray-400">

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
                    className="mt-1"
                />

                <label htmlFor="privacyPolicy">
                    By providing your information, you agree to be contacted by The Romanelli Group LLC via phone, email and text regarding this property and other real estate opportunities. Message and data rates may apply. <Link to="/privacy-policy" target="_blank" className="text-blue-400 underline">Privacy Policy</Link>
                </label>

            </div>

        </div>

    </div>
</div>
export default Form