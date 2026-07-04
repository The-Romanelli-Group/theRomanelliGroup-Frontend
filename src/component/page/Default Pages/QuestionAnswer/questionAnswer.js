import { useState } from "react";
import { Plus } from "lucide-react";
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


const QuestionAnswer = ({ onSet }) => {
  const [selectedArea, setSelectedArea] = useState(onSet || "buyer");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const faqs =
  selectedArea === "buyer"
    ? buyerFaqs
    : selectedArea === "seller"
    ? sellerFaqs
    : agentFaqs;

 return (
  <section className="bg-[#171010] py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-5">

      {/* Heading */}

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frequently{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Asked Questions
          </span>
        </h2>

        <p className="mt-5 text-lg text-gray-300 leading-8">
          Find answers to the questions we hear most often about buying,
          selling and working with The Romanelli Group.
        </p>

      </div>

      {/* Tabs */}

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        {[
          { key: "buyer", label: "For Buyers" },
          { key: "seller", label: "For Sellers" },
          { key: "agent", label: "For Agents" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setSelectedArea(tab.key);
              setOpenIndex(null);
            }}
            className={`
              rounded-full
              px-7
              py-3
              text-sm
              md:text-base
              font-semibold
              transition-all
              duration-300
              border
              ${
                selectedArea === tab.key
                  ? "bg-white text-[#171010] border-white shadow-lg"
                  : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}

      </div>

      {/* FAQ */}

      <div className="mt-12 max-w-4xl mx-auto">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              mb-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              overflow-hidden
              transition-all
              duration-300
              hover:border-white/20
            "
          >

            <button
              onClick={() => toggleFAQ(index)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-6
                py-5
                text-left
              "
            >

              <h3 className="text-lg md:text-xl font-semibold text-white pr-6">
                {faq.question}
              </h3>

              <div
                className={`
                  w-9
                  h-9
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                  flex-shrink-0
                  transition-transform
                  duration-300
                  ${
                    openIndex === index
                      ? "rotate-45 bg-[#A61E22] border-[#A61E22]"
                      : ""
                  }
                `}
              >
                          <Plus
            size={18}
            className={`transition-transform duration-300 ${
              openIndex === index ? "rotate-45" : ""
            }`}
          />
              </div>

            </button>

            <div
              className={`
                grid
                transition-all
                duration-300
                ease-in-out
                ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-gray-300 leading-8">
                  {faq.answer}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  </section>
);
};

export default QuestionAnswer;