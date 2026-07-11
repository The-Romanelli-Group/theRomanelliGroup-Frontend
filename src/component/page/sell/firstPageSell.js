import React from "react";
import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
       <section className="relative py-12 md:py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <div
      className="
        grid
        lg:grid-cols-[1fr_520px]
        gap-14
        items-center
      "
    >

      {/* Left */}

      <div className="max-w-xl">

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
          SELL YOUR HOME
        </p>

        <h1
          className="
            mt-3
            text-[30px]
            sm:text-[36px]
            md:text-6xl
            leading-tight
            font-bold
            text-white
          "
        >
          Sell with{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Confidence
          </span>
        </h1>

        <p
          className="
            mt-6
            text-[15px]
            md:text-lg
            leading-7
            text-gray-200
          "
        >
          Every home has a story—and every seller deserves a strategy.
          From pricing your property to negotiating the strongest offer,
          we help you maximize value while making the selling process
          smooth and stress-free.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3 text-white">
            <span className="text-[#A61E22] text-xl">✓</span>
            <span>Accurate Home Valuation</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <span className="text-[#A61E22] text-xl">✓</span>
            <span>Professional Marketing & Photography</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <span className="text-[#A61E22] text-xl">✓</span>
            <span>Expert Negotiation From Listing to Closing</span>
          </div>

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

        <div className="rounded-[28px] overflow-hidden shadow-2xl">

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