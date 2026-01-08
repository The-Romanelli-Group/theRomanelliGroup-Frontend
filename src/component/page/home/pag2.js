import { useEffect, useState } from 'react'
import SideModal from './sideModal';

const Pag2 = () => {
   

    useEffect(() => {
        const scriptId = "homebot-script";
        const styleId = "homebot-style";

        // Check if script already exists
        if (document.getElementById(scriptId)) {
            waitForHomebot();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://embed.homebotapp.com/lgw/v1/widget.js";
        script.id = scriptId;
        script.async = true;

        script.onload = waitForHomebot;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }

            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);


    const waitForHomebot = () => {
        let attempts = 0;
        const interval = setInterval(() => {
            if (window.Homebot) {
                clearInterval(interval);
                window.Homebot("#homebot_homeowner", "df5f3d04dde9ce0dccc0f12c06ac8d7cfd911b11ea7f4bfd", {
                    size: "compact",
                    theme: "light-mode-theme",
                });

                // Inject CSS inside Shadow DOM
                setTimeout(() => {
                    const homebotShadow = document.querySelector("#homebot_homeowner")?.shadowRoot;
                    if (homebotShadow) {
                        const style = document.createElement("style");
                        style.textContent = `
                            .__hblgw--button-container-light-mode-theme {
                                position: absolute !important;
                                z-index: 12 !important;
                                right: 4px !important;
                                top: 0px !important;
                                bottom: 0px !important;
                                cursor: pointer;
                                color: rgb(255, 255, 255);
                                background-color: rgb(0,0,0);
                                border: none;
                                height:36px;
                                font-size: 0.75rem;
                                font-weight: 700;
                                text-transform: uppercase;
                                margin-top: 3px;
                                width: 84px;
                                border-radius: 0px 0px 0px 0px;
                                transition: 0.2s cubic-bezier(0.05, 0.69, 0.14, 1);
                            }
    
                            .__hblgw--logo-message_small {
                                display: none !important;
                                height: 16px;
                                line-height: 16px;
                                white-space: nowrap;
                                text-align: left;
                                margin-top: 6px;
                            }
    
                            .__hblgw--input-input-light-mode-theme {
                                position: relative;
                                z-index: 11;
                                color: rgba(0, 0, 0, 0.7);
                                font-size: 16px;
                                width: 100%;
                                min-width: 84px;
                                padding: 5px;
                                border: 1px solid transparent;
                                border-radius: 0px;
                                height: 42px !important;
                            }
                                .__hblgw--input-input-light-mode-theme {
    position: relative;
    z-index: 11;
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    width: 100%;
    min-width: 84px;
    padding: 5px 5px 5px 20px;
    border: 1px solid transparent;
    border-radius: 0px;
    height: 42px !important;
}
                        `;
                        homebotShadow.appendChild(style);
                    }
                }, 100);
            } else {
                attempts++;
                if (attempts > 10) {
                    clearInterval(interval);
                }
            }
        }, 500);
    };
    return (
        <div>
            <div className="relative z-10 container px-4 sm:px-5 py-12 md:py-24 mx-auto overflow-visible">
                <div className="flex flex-col text-center w-full md:mb-6">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white mx-auto max-w-5xl px-4">
                        Know What Your <span className='italic font-playfair'>Home</span> Is Really Worth. 
                    </h1>
                    <p className="mx-auto leading-relaxed font-medium md:font-semibold text-base sm:text-xl max-w-4xl ">
                        Enter your address to get an instant home value report for selling, renting, or putting it on Airbnb.
                    </p>
                </div>

                {/* Input & Button Section */}
                <div id="homebot_homeowner" className='mb-10 md:mb-0'></div>

               <SideModal />
            </div>
          
        </div>
    )
}

export default Pag2