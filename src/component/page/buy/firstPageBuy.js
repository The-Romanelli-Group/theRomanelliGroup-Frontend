import { mainPageBuy_img_url } from '../../../assets/allImg';
import SideModal from '../home/sideModal';

const FirstPageBuy = () => {
    return (
        <div className="relative w-full"> {/* Ensure full width */}
            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white mx-auto max-w-4xl px-4">
                        Find the <span className='italic'>{" "} Home</span>    That Fits Your Life
                    </h1>
                    <p className="mx-auto leading-relaxed font-medium md:font-bold text-base sm:text-lg max-w-2xl ">
                        Whether you're looking for a cozy family home or a lucrative investment property, we're here to make it happen.
                    </p>
                </div>

                {/* Input & Button Section */}
                <button onClick={()=>{window.open("/properties","_self")}} className="flex mx-auto mt-8 text-black bg-white hover:bg-gray-300 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                    Browse Properties
                </button>

                {/* Scrollable Image in Bottom-Right */}
                <div className="absolute -bottom-2 right-4 sm:right-6 md:right-10 lg:right-24 xl:right-16 w-60 hidden md:block">
                    <img src={mainPageBuy_img_url} alt="Floating Icon" className="w-full h-auto object-contain" />
                </div>
            </div>
            <SideModal/>
        </div>
    );
};

export default FirstPageBuy;
