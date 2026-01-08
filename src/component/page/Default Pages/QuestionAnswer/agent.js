import { useState } from "react";

const faqs = [
  {
    question: "How do I join The Romanelli Group?",
    answer: "Visit our 'Join Our Team' page and submit your application. We’ll schedule a chat to discuss your goals and how we can support your success.",
  },
  {
    question: "What kind of support will I get as an agent?",
    answer: "We provide hands-on mentorship, lead generation, marketing assistance, and access to cutting-edge technology to help you grow your business.",
  },
  {
    question: "How can I access training resources?",
    answer: "New agents receive personalized coaching and training sessions on contracts, negotiations, and digital marketing. Ongoing workshops ensure you stay ahead in the market.",
  },
  {
    question: "How do I manage my listings with your team?",
    answer: "You’ll have access to our listing management tools and CRM, making it easy to track leads, schedule showings, and follow up with clients.",
  },
  {
    question: "What makes The Romanelli Group different from other brokerages?",
    answer: "We’re not just a brokerage—we’re a team. Our agents collaborate, share resources, and support each other’s success. If you’re looking for a place to grow, you’ve found it!",
  },
];


const Agent = () => {
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

export default Agent;
