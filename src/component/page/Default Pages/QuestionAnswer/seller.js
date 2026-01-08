import React, { useState } from "react";

const faqs = [
  {
    question: "How do I get started with selling my home?",
    answer: "Start by requesting a free home valuation. We’ll assess your property’s market value and discuss the best strategy to sell quickly and at the best price.",
  },
  {
    question: "How will my home be marketed?",
    answer: "Every home is marketed with a clear, intentional strategy—not a one-size-fits-all plan. We focus on positioning your home to stand out, attract the right buyers, and create demand through high-quality presentation and modern marketing channels. The exact approach is tailored to your home, the market, and what will drive the strongest result.",
  },
  {
    question: "What happens after I list my home?",
    answer: "Once listed, we’ll schedule showings, host open houses, and keep you updated on buyer interest. You’ll receive expert negotiation support when offers come in.",
  },
  {
    question: "How do I track the progress of my home sale?",
    answer: "We’ll be in regular contact to provide real-time updates, share showing feedback, and keep you informed with relevant market insights, so you always know where things stand.",
  },
  {
    question: "Can I request a consultation before deciding to sell?",
    answer: "Absolutely! If you’re unsure about selling, we offer no-obligation consultations to discuss your options and timing.",
  },
];



const Seller = () => {
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

export default Seller;
