import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
        <div className="relative w-full">

            <div className="container mx-auto px-5 pt-10 lg:pt-14 pb-8 lg:pb-24">
                <div className="grid lg:grid-cols-[1fr_470px] gap-10 xl:gap-24 items-start">

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
            text-[36px]
            sm:text-5xl
            lg:text-7xl
            font-playfair
            italic
            font-normal
            text-[#A61E22]
            leading-[1]
            mt-1
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
            text-gray-300
            leading-7
            lg:leading-9
            max-w-xl
            mx-auto
            lg:mx-0
            text-center
            lg:text-left
        "
    >
        Whether you're buying your first home, selling your current home,
        exploring investment opportunities, or simply have a question,
        our team is here to help.
    </p>


</div>
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