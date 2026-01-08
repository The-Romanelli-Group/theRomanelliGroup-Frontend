import SideModal from '../home/sideModal';
import ConnectForm from './connectForm';

const FirstPageSell = () => {
    return (
        <div className="relative w-full ">
            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <section className="text-white body-font">
                        <div className="container mt-0 lg:mt-[-110px] flex flex-wrap  px-5 py-12 md:py-24 mx-auto items-center">
                            {/* Left Section (Text) */}
                            <div className="w-full md:w-1/2 text-left md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 border-gray-200">
                                <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                                    Your Next Move Starts Here
                                </h1>
                                <p className="leading-relaxed font-bold text-xl">
                                    Whether you're buying, selling, or just have a question, we're here to help. Let's start the conversation!
                                </p>
                            </div>
                            <ConnectForm />

                        </div>
                    </section>
                </div>
            </div>
             <SideModal/>
        </div>
    );
};

export default FirstPageSell;