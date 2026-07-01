import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
    return (
        <div className="relative w-full">

            <div className="container mx-auto px-5 py-16 lg:py-24">

                <div className="flex flex-col lg:flex-row items-center gap-14">

                    {/* Left Content */}

                    <div className="w-full lg:w-1/2">

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
                            Whether you're buying your first home, selling your
                            current one, exploring investment opportunities, or
                            simply have a question, our team is here to help.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <p className="text-red-400 text-2xl mb-2">
                                    🏡
                                </p>

                                <h3 className="font-semibold text-white">
                                    Buy
                                </h3>

                                <p className="text-gray-400 text-sm mt-1 leading-6">
                                    Find the right home with local experts guiding every step.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <p className="text-red-400 text-2xl mb-2">
                                    📈
                                </p>

                                <h3 className="font-semibold text-white">
                                    Sell
                                </h3>

                                <p className="text-gray-400 text-sm mt-1 leading-6">
                                    Maximize your home's value with a proven marketing strategy.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <p className="text-red-400 text-2xl mb-2">
                                    💰
                                </p>

                                <h3 className="font-semibold text-white">
                                    Invest
                                </h3>

                                <p className="text-gray-400 text-sm mt-1 leading-6">
                                    Discover opportunities that align with your financial goals.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <p className="text-red-400 text-2xl mb-2">
                                    🤝
                                </p>

                                <h3 className="font-semibold text-white">
                                    Local Experts
                                </h3>

                                <p className="text-gray-400 text-sm mt-1 leading-6">
                                    Responsive service backed by deep knowledge of the Central Ohio market.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Lead Form */}

                    <LeadForm variant="contact" />

                </div>

            </div>

            <SideModal />

        </div>
    );
};

export default FirstPageSell;