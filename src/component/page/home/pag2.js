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
  <section className="relative py-12 md:py-20 overflow-visible">

    <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

      {/* Heading */}

      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
          HOME VALUE ESTIMATOR
        </p>

        <h1 className="mt-3 text-[34px] md:text-6xl leading-tight font-bold text-white">
          Know What Your{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Home
          </span>{" "}
          Is Really Worth
        </h1>

        <p className="mt-5 text-[15px] md:text-xl leading-7 text-gray-200 max-w-3xl mx-auto">
          Receive an instant home value estimate, comparable sales,
          neighborhood insights, and market trends in seconds.
          No obligation. Completely free.
        </p>

      </div>

      {/* Homebot Widget */}

      <div className="max-w-3xl mx-auto mt-10">

        <div
          className="
            relative
            rounded-[28px]
            bg-black/15
            backdrop-blur-md
            border
            border-white/10
            shadow-[0_25px_60px_rgba(0,0,0,.28)]
            px-4
            py-5
            md:px-6
            md:py-6
          "
        >
          <div id="homebot_homeowner"></div>
        </div>

        {/* Trust Pills */}

        <div className="mt-4 flex flex-wrap justify-center gap-3">

          <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-2 text-sm text-white">
            ✓ Instant Home Estimate
          </div>

          <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-2 text-sm text-white">
            ✓ No Obligation
          </div>

          <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-5 py-2 text-sm text-white">
            ✓ 100% Free Report
          </div>

        </div>

      </div>

      <SideModal />

    </div>

  </section>
);
}

export default Pag2