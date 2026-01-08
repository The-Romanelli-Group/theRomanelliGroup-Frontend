import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../home/sideModal';

const FirstPageSell = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        timeline: ""
    });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }
        return newErrors;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.propertyType) newErrors.propertyType = "Property type is required";
        if (!formData.timeline) newErrors.timeline = "Timeline is required";
        return newErrors;
    };

    const handleSubmit = async () => {
        const stepErrors = validateStep2();
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        
        if (!privacyAccepted) {
            setErrors({ privacy: "You must accept the privacy policy to continue" });
            return;
        }
        

        
        try {
            const response = await fetch('https://api.followupboss.com/v1/people', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(process.env.REACT_APP_FOLLOWUPBOSS_API_KEY + ':'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.name.split(' ')[0],
                    lastName: formData.name.split(' ').slice(1).join(' ') || '',
                    emails: [{ value: formData.email }],
                    phones: [{ value: formData.phone }],
                    addresses: [{ street: formData.address }],
                    tags: [`Property Type: ${formData.propertyType}`, `Timeline: ${formData.timeline}`],
                    source: 'Sell Website Form'
                })
            });
            
            if (response.ok) {
                alert('Thank you! We will contact you soon.');
                setStep(step + 1);
            } else {
                console.error('❌ FAILED: Lead submission failed');
                console.error('Response Status:', response.status);
            }
        } catch (error) {
            console.error('❌ ERROR: Network or API error:', error);
        }
    };

    const nextStep = () => {
        const stepErrors = validateStep1();
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setStep(step + 1);
    };
    
    const prevStep = () => setStep(step - 1);

    return (
        <div className="relative w-full ">
            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <section className="text-white body-font">
                        <div className="container mt-[-50px] flex flex-wrap px-5 py-12 md:py-24 mx-auto items-center">
                            {/* Left Section (Text) */}
                            <div className="w-full md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 border-gray-200">
                                <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold mb-2 text-white">
                                    Sell Smart. Move Forward with Confidence
                                </h1>
                                <p className="leading-relaxed font-bold text-xl">
                                    Get top dollar for your property with our proven strategies and personalized approach.
                                </p>
                            </div>

                            {/* Right Section (Form) */}
                            <div className="w-full  md:w-1/2 md:pl-12">
                                <div className="max-w-md mx-auto h-auto p-4 bg-white rounded-lg shadow-lg text-gray-800">
                                    {/* Progress Indicator */}
                                    <div className="flex justify-between mb-2">
                                        <div className="flex w-full justify-between gap-1">
                                            {["1. Basic Info", "2. Property Info", "3. Confirmation"].map((text, index) => (
                                                <div key={index} className="flex flex-col items-center">
                                                    {/* Step Title with Spacing */}
                                                    <div className={`text-[11px] md:text-md lg:text-lg pr-4 md:pr-3 font-semibold mb-2 ${step > index ? 'text-black' : 'text-gray-500'}`}>
                                                        {text}
                                                    </div>
                                                    {/* Progress Bar */}
                                                    <div className={`h-[4px] w-full ${step > index ? 'bg-red-800' : 'bg-red-300'}`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form Steps */}
                                    {step === 1 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mt-6 text-center">Get a Free</h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center">Home <span className="font-playfair  italic">Valuation</span></h2>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Full Name</p>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.name ? 'border-red-500' : ''}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                                            <p className='text-black font-semibold text-left text-md mb-1'>Email</p>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.email ? 'border-red-500' : ''}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                                            <p className='text-black font-semibold text-left text-md mb-1'>Phone</p>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.phone ? 'border-red-500' : ''}`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm mb-4">{errors.phone}</p>}
                                            <button onClick={nextStep} className="bg-red-800 text-white px-4 py-2 w-full rounded">
                                                Next
                                            </button>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mt-4 text-center">Get a Free</h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center">Home <span className="font-playfair   italic">Valuation</span></h2>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Property Address</p>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Enter your Property Address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.address ? 'border-red-500' : ''}`}
                                            />
                                            {errors.address && <p className="text-red-500 text-sm mb-2">{errors.address}</p>}
                                            <p className='text-black font-semibold text-left text-md mb-1'>Property Type</p>
                                            <select
                                                name="propertyType"
                                                id="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 bg-white ${errors.propertyType ? 'border-red-500' : ''}`}
                                            >
                                                <option value="">Choose from Options</option>
                                                <option value="Residential">Residential</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Land">Land</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.propertyType && <p className="text-red-500 text-sm mb-2">{errors.propertyType}</p>}

                                            <p className='text-black font-semibold text-left text-md mb-1'>Timeline</p>
                                            <select
                                                name="timeline"
                                                id="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 bg-white ${errors.timeline ? 'border-red-500' : ''}`}
                                            >
                                                <option value="">When are you planning to sell?</option>
                                                <option value="Immediately">Immediately</option>
                                                <option value="Within 1 Month">Within 1 Month</option>
                                                <option value="1-3 Months">1-3 Months</option>
                                                <option value="3-6 Months">3-6 Months</option>
                                                <option value="Not Sure">Not Sure</option>
                                            </select>
                                            {errors.timeline && <p className="text-red-500 text-sm mb-4">{errors.timeline}</p>}
                                            <div className="flex flex-col sm:flex-row justify-center gap-1 mt-4">
                                                <button onClick={prevStep} className="text-gray-900 font-semibold bg-gray-200 px-4 py-2 text-md rounded w-full ">
                                                    Back
                                                </button>
                                                <button onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 text-md rounded w-full ">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="">
                                            {/* Centered Image */}
                                            <img
                                                className="w-32 md:w-40 lg:w-48 mx-auto mb-4"
                                                src="https://ik.imagekit.io/ic938owib/undraw_interview_yz52%201.svg?updatedAt=1748097265212"
                                                alt="Thank You"
                                            />

                                            {/* Text Content */}
                                            <p className="text-2xl px-4 italic font-bold">Thank You for Taking the <span className="font-playfair   italic">First Step!</span></p>
                                            <p className="text-gray-900 max-w-md my-2">
                                                We've received your details and will contact you shortly to discuss your property's valuation.
                                            </p>

                                            {/* Buttons in One Line */}
                                            <div className="flex flex-col sm:flex-row justify-center gap-1 mt-4">
                                                <button className="text-gray-900 font-semibold bg-gray-200 px-2 py-2 text-md rounded w-full" onClick={() => window.location.href = "/properties"}>
                                                    Browse Properties for Sale
                                                </button>
                                                <button className="bg-red-800 text-white px-4 py-2 text-md rounded w-full" onClick={() => window.location.href = "/contact-us"}>
                                                    Contact Us Now
                                                </button>
                                            </div>
                                            
                                        </div>
                                    )}
                                    <div className='mt-4'>
                                     {errors.privacy && <p className="text-red-500 text-left text-[10px]">{errors.privacy}</p>}
                                    <div className="flex items-start gap-2 text-xs text-gray-600">
                                        <input 
                                            type="checkbox" 
                                            id="privacyPolicy" 
                                            checked={privacyAccepted}
                                            onChange={(e) => {
                                                setPrivacyAccepted(e.target.checked);
                                                if (errors.privacy) {
                                                    setErrors({ ...errors, privacy: "" });
                                                }
                                            }}
                                            className={`mt-1 flex-shrink-0 ${errors.privacy ? 'border-red-500' : ''}`}
                                        />
                                        <label htmlFor="privacyPolicy" className="text-left">
                                            By providing your information, you agree to be contacted by The Romanelli Group LLC via phone call, email, and text for real estate services. To opt out, you can reply "STOP" to any text at any time or click the unsubscribe link in emails. For help, reply "HELP." Message and data rates may apply. Message frequency varies. <Link to="/privacy-policy"  target='_blank' className="text-blue-600 hover:text-blue-800 underline">View our Privacy Policy</Link>.
                                        </label>
                                    </div>   
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
             <SideModal/>
        </div>
    );
};

export default FirstPageSell;