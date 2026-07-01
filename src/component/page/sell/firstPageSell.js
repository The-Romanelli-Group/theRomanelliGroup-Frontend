import React from "react";
import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
        <div className="relative w-full">

            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-6">

                    <section className="text-white body-font">

                        <div className="container mt-[-50px] flex flex-col lg:flex-row gap-12 px-5 py-12 md:py-24 mx-auto items-center">

                            {/* Left Section */}

                            <div className="w-full lg:w-1/2 lg:pr-12 lg:py-8 text-left">

                                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                                    Sell Smart. Move Forward with Confidence
                                </h1>

                                <p className="text-xl leading-9 text-white/90 max-w-xl">
                                    Get top dollar for your property with our proven marketing strategies, local expertise, and personalized guidance from start to finish.
                                </p>

                            </div>

                            {/* Right Section */}

                            <div className="w-full lg:w-1/2 lg:pl-12">

                                <LeadForm variant="sell" />

                            </div>

                        </div>

                    </section>

                </div>

            </div>

            <SideModal />

        </div>
    );
};

export default FirstPageSell;