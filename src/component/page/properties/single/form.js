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
        <div className="max-w-md mx-auto bg-black rounded-xl shadow-xl text-white p-5">

            {/* Header */}

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">
                    Interested in
                </h2>

                <h2 className="text-3xl font-playfair italic">
                    This Home?
                </h2>

                <p className="text-gray-300 mt-2 text-sm">
                    Request more information or schedule a private showing.
                </p>
            </div>

            {/* Property */}

            <div className="bg-zinc-900 rounded-xl p-5 mb-5 border border-zinc-700">

                <p className="font-semibold text-lg leading-6">
                    {property?.UnparsedAddress}
                </p>

                <p className="text-3xl font-bold mt-3">
                    ${property?.ListPrice?.toLocaleString()}
                </p>

                <div className="grid grid-cols-3 gap-2 text-center mt-5">

                    <div>
                        <div className="text-2xl">🛏</div>
                        <div className="font-bold">
                            {property?.BedroomsTotal}
                        </div>
                        <div className="text-xs text-gray-400">
                            Beds
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl">🛁</div>
                        <div className="font-bold">
                            {property?.BathroomsTotalInteger}
                        </div>
                        <div className="text-xs text-gray-400">
                            Baths
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl">📐</div>
                        <div className="font-bold">
                            {property?.BuildingAreaTotal?.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">
                            Sq Ft
                        </div>
                    </div>

                </div>

                <div className="text-center mt-5">

                    <span className="bg-red-800 rounded-full px-4 py-1 text-xs font-semibold uppercase">
                        {property?.StandardStatus}
                    </span>

                </div>

            </div>

            {/* -------- KEEP EVERYTHING BELOW HERE THE SAME -------- */}

            {/* Name */}
            {/* Email */}
            {/* Phone */}
            {/* Interest */}
            {/* Message */}
            {/* Buttons */}
            {/* Privacy */}

        </div>
    </div>
);
};

export default Form;