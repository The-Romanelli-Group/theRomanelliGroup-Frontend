import React from "react";
import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <h1
            className="
              text-[30px]
              sm:text-[36px]
              md:text-6xl
              leading-tight
              font-bold
              text-white
            "
          >
            Sell Your{" "}
            <span className="font-playfair italic font-normal text-[#A61E22]">
              Home
            </span>{" "}
            for More
          </h1>

          <p
            className="
              mt-4
              text-[15px]
              md:text-lg
              leading-6
              md:leading-7
              text-gray-200
              max-w-2xl
              mx-auto
            "
          >
            From strategic pricing and premium marketing to expert
            negotiations, we help you sell faster and maximize the value of
            your home.
          </p>

        </div>

        {/* Content */}

        <div
          className="
            mt-14

            grid
            lg:grid-cols-[1fr_520px]

            gap-12

            items-center
          "
        >

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md p-7">

              <h3 className="text-2xl font-semibold text-white">
                Strategic Pricing
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                We analyze market trends and comparable sales to price your
                home competitively while maximizing your return.
              </p>

            </div>

            <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md p-7">

              <h3 className="text-2xl font-semibold text-white">
                Premium Marketing
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Professional photography, cinematic video, digital advertising,
                and targeted exposure ensure your listing stands out.
              </p>

            </div>

            <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md p-7">

              <h3 className="text-2xl font-semibold text-white">
                Skilled Negotiation
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                From the first offer to closing day, we negotiate with your
                best interests in mind to help you walk away with more.
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="text-center mb-6">

              <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
                FREE HOME VALUATION
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Discover What Your Home Is Worth
              </h2>

            </div>

            <div className="rounded-[30px] overflow-hidden shadow-2xl">

              <LeadForm variant="sell" />

            </div>

          </div>

        </div>

      </div>

      <SideModal />

    </section>
  );
};

export default FirstPageSell;