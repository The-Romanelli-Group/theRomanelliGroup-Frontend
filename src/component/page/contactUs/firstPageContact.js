import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
        <div className="relative w-full">

            <div className="container mx-auto px-5 pt-8 lg:pt-14 pb-16 lg:pb-24">

                <div className="grid lg:grid-cols-[1fr_470px] gap-16 xl:gap-24 items-start">

                    {/* Left Content */}
                       <div className="lg:pt-24 xl:pt-28 lg:pr-10 xl:pr-16">

                        <p className="uppercase tracking-[0.35em] text-red-500 text-xs font-semibold mb-5">
                            CONTACT THE ROMANELLI GROUP
                        </p>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                            Let's Start
                        </h1>

                        <h2 className="text-5xl lg:text-7xl font-playfair italic text-red-400 leading-none">
                            the Conversation
                        </h2>

                        <p className="mt-8 text-xl text-gray-300 leading-9 max-w-xl">
                            Whether you're buying your first home, selling your current
                            one, exploring investment opportunities, or simply have a
                            question, our team is here to help.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">

                            {/* cards */}

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