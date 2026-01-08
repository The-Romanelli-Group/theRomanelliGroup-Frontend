import React, { useState } from "react";

const faqs = [
  {
    question: "Where do I start if I want to buy a home?",
    answer: "Start by getting pre-approved for a mortgage. This helps you understand your budget and shows sellers you’re serious. If you’re unsure where to begin, we can connect you with trusted lenders.",
  },
  {
    question: "How do I search for homes on your website?",
    answer: "You can browse available listings using our search tool. Filter by location, price range, and features to find homes that match your needs. If you see something you like, schedule a tour directly from the listing page!",
  },
  {
    question: "What happens after I find a home I love?",
    answer: "Once you find the right home, we’ll help you submit a competitive offer. We’ll guide you through negotiations, inspections, and closing to ensure a smooth experience.",
  },
  {
    question: "What should I expect during the closing process?",
    answer: "After your offer is accepted, the closing process typically takes 30-45 days. You’ll finalize financing, complete inspections, and sign paperwork before getting the keys. We’ll be with you every step of the way!",
  },
  {
    question: "What if I’m not ready to buy yet?",
    answer: "No problem! You can sign up for property alerts to stay updated on listings that match your criteria. We’re happy to chat whenever you’re ready.",
  },
];


const Buyer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-2 lg:px-0 py-4 text-white">
      <div className="flex flex-col text-left w-full lg:w-2/3 mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3 border border-white my-2">
            <div className="flex justify-between items-center px-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h1 className="sm:text-xl text-lg font-medium">{faq.question}</h1>
              <p className="text-3xl">{openIndex === index ? "-" : "+"}</p>
            </div>
            <p
              className={`text-gray-400 text-lg px-4 transition-all duration-300 ease-in-out ${
                openIndex === index ? "block mt-2" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyer;
