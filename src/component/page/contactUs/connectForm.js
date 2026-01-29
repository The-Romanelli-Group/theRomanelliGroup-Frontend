import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AccessibleButton from '../../../components/AccessibleButton'

const ConnectForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.reason) newErrors.reason = "Reason is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
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
                    tags: [`Reason: ${formData.reason}`, `Message: ${formData.message}`],
                    source: source
                })
            });

            if (response.ok) {
                alert('Thank you! We will contact you soon.');
                setFormData({ name: "", email: "", reason: "", message: "" });
            } else {
                console.error('❌ FAILED: Lead submission failed');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('❌ ERROR:', error);
            alert('Network error. Please try again.');
        }
    };

    const handleSubmit = () => submitToAPI('Contact Form - Submit');
    const handleScheduleCall = () => submitToAPI('Contact Form - Schedule Call');
  return (
    <>
                    {/* Right Section (Form) */}
                            <div className="w-full  md:w-1/2 md:pl-12">
                                <div className="max-w-md mx-auto h-auto p-4 bg-white rounded-lg shadow-lg text-gray-800">
                                        <div>
                                            <h2 className="text-2xl font-bold mt-2 text-center">Connect with Us </h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center"> <span className="font-playfair  italic">Directly</span></h2>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Full Name</p>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.name ? 'border-red-500' : ''}`}
                                                aria-label="Full name"
                                                aria-required="true"
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
                                                aria-label="Email address"
                                                aria-required="true"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                                            <p className='text-black font-semibold text-left text-md mb-1'>Reason for Contact*</p>
                                            <select
                                                name="reason"
                                                id="reason"
                                                value={formData.reason}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 bg-white ${errors.reason ? 'border-red-500' : ''}`}
                                                aria-label="Reason for contact"
                                                aria-required="true"
                                            >
                                                <option value="">Choose from Options</option>
                                                <option value="buyingInquiry">Buying Inquiry</option>
                                                <option value="sellingInquiry">Selling Inquiry</option>
                                                <option value="generalQuestion">General Question</option>
                                                <option value="partnershipOpportunities">Partnership Opportunities</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.reason && <p className="text-red-500 text-sm mb-2">{errors.reason}</p>}
                                            <p className='text-black font-semibold text-left text-md mb-1'>Message*</p>
                                            <textarea
                                                name="message"
                                                placeholder="How can we help you?"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full text-md p-2 border rounded mb-1 ${errors.message ? 'border-red-500' : ''}`}
                                                aria-label="Message"
                                                aria-required="true"
                                                rows="4"
                                            />
                                            {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}
                                            <AccessibleButton onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 w-full rounded" ariaLabel="Submit enquiry form">
                                                Submit Inquiry
                                            </AccessibleButton>
                                            <p className='text-center font-bold p-2'>OR</p>
                                           <a href="tel:+17408163112" className="w-full">
                                                    <AccessibleButton   className="bg-black text-white px-4 py-2 w-full rounded"   ariaLabel="Call The Romanelli Group" >
                                                    Call Us  </AccessibleButton>
                                                    </a>

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
                                                    By providing your information, you agree to be contacted by The Romanelli Group LLC via phone call, email, and text for real estate services. To opt out, you can reply "STOP" to any text at any time or click the unsubscribe link in emails. For help, reply "HELP." Message and data rates may apply. Message frequency varies. <Link to="/privacy-policy" target='_blank' className="text-blue-600 hover:text-blue-800 underline">View our Privacy Policy</Link>.
                                                </label>
                                            </div>   
                                            </div>
                                        </div>        
                                </div>
                            </div>
    </>
  )
}

export default ConnectForm
