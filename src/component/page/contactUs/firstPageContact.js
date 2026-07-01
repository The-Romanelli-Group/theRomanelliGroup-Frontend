import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
        <div className="relative w-full">

            <div className="container mx-auto px-5 pt-6 lg:pt-14 pb-8 lg:pb-24">
                <div className="grid lg:grid-cols-[1fr_470px] gap-16 xl:gap-24 items-start">

                  {/* Left Content */}

<div className="lg:pt-24 xl:pt-28 lg:pr-10 xl:pr-16">

    <p className="uppercase tracking-[0.35em] text-red-500 text-xs font-semibold mb-5 text-center lg:text-left">
        CONTACT THE ROMANELLI GROUP
    </p>

    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white text-center lg:text-left">
        Let's Start
    </h1>

    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-playfair italic text-red-400 leading-none text-center lg:text-left">
        the Conversation
    </h2>

    <p className="mt-6 lg:mt-8 text-lg sm:text-xl text-gray-300 leading-8 lg:leading-9 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
        Whether you're buying your first home, selling your current home,
        exploring investment opportunities, or simply have a question,
        our team is here to help.
    </p>

    {/* Desktop Only Cards */}

    <div className="hidden lg:grid grid-cols-2 gap-5 mt-12">
                            
                        </div>

                    </div>

                    {/* Form */}

                    <div className="lg:justify-self-end w-full">
                        <LeadForm variant="contact" />
                    </div>

                </div>

            </div>

            <SideModal />

        </div>
    );
};

export default FirstPageSell;