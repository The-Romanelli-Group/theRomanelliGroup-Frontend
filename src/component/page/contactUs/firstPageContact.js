import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
    <div className="relative w-full">

        <div className="container mx-auto px-5 pt-8 md:pt-10 lg:pt-14 pb-10 lg:pb-24">

            <div className="grid lg:grid-cols-[1fr_470px] gap-8 lg:gap-10 xl:gap-24 items-start">

                {/* Left Content */}

                <div className="lg:pt-24 xl:pt-28 lg:pr-10 xl:pr-16">

                    <p className="uppercase tracking-[0.35em] text-[#A61E22] text-[11px] md:text-xs font-semibold mb-4 text-center lg:text-left">
                        CONTACT THE ROMANELLI GROUP
                    </p>

                    <h1
                        className="
                            text-[36px]
                            sm:text-5xl
                            lg:text-7xl
                            font-bold
                            leading-[1.05]
                            text-white
                            text-center
                            lg:text-left
                        "
                    >
                        Let's Start
                    </h1>

                    <h2
                        className="
                            mt-1
                            text-[36px]
                            sm:text-5xl
                            lg:text-7xl
                            font-playfair
                            italic
                            font-normal
                            leading-none
                            text-[#A61E22]
                            text-center
                            lg:text-left
                        "
                    >
                        the Conversation
                    </h2>

                    <p
                        className="
                            mt-5
                            lg:mt-8
                            text-[16px]
                            sm:text-lg
                            lg:text-xl
                            leading-7
                            lg:leading-9
                            text-gray-300
                            max-w-xl
                            mx-auto
                            lg:mx-0
                            text-center
                            lg:text-left
                        "
                    >
                        Whether you're buying your first home, selling your current
                        home, exploring investment opportunities, or simply have a
                        question, our team is here to help every step of the way.
                    </p>

                    {/* Mobile Trust Pills */}

                  
                    {/* Desktop Trust Pills */}

                    <div className="hidden lg:flex flex-wrap gap-4 mt-10">

                        <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                            ✓ Local Experts
                        </div>

                        <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                            ✓ Fast Response
                        </div>

                        <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                            ✓ No Obligation
                        </div>

                    </div>

                </div>

                {/* Form */}

                <div className="w-full lg:justify-self-end mt-2 lg:mt-0">

                    <LeadForm variant="contact" />

                </div>

            </div>

        </div>

        <SideModal />

    </div>
);
};

export default FirstPageSell;