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
    if (!window.Homebot) {
      attempts++;

      if (attempts > 10) {
        clearInterval(interval);
      }

      return;
    }

    clearInterval(interval);

    window.Homebot(
      "#homebot_homeowner",
      "df5f3d04dde9ce0dccc0f12c06ac8d7cfd911b11ea7f4bfd",
      {
        size: "compact",
        theme: "light-mode-theme",
      }
    );

    setTimeout(() => {
      const homebotShadow =
        document.querySelector("#homebot_homeowner")?.shadowRoot;

      if (!homebotShadow) return;

      // Prevent duplicate styles
      const existingStyle = homebotShadow.getElementById("homebot-style");
      if (existingStyle) existingStyle.remove();

      const style = document.createElement("style");
      style.id = "homebot-style";

      style.textContent = `
      
/* Hide branding */

.__hblgw--logo-message_small{
    display:none !important;
}

/* Form */

.__hblgw--input-container-light-mode-theme{
    position:relative;
    width:100%;
    max-width:900px;
    margin:0 auto;
}

/* Input */

.__hblgw--input-input-light-mode-theme{

    position:relative;
    z-index:1;

    width:100%;

    height:64px !important;

    padding:0 138px 0 22px !important;

    font-size:18px !important;
    font-weight:500;

    color:#111827;

    background:#fff;

    border:1px solid rgba(255,255,255,.25) !important;

    border-radius:18px !important;

    box-shadow:
        0 20px 45px rgba(0,0,0,.12);

    transition:all .25s ease;
}

.__hblgw--input-input-light-mode-theme::placeholder{

    color:#9CA3AF;

    font-size:18px;

    font-weight:400;

}

.__hblgw--input-input-light-mode-theme:focus{

    outline:none;

    border-color:#A61E22 !important;

    box-shadow:
        0 0 0 3px rgba(166,30,34,.18),
        0 18px 40px rgba(0,0,0,.16);

}

/* Button */

.__hblgw--button-container-light-mode-theme{

    position:absolute !important;

    top:6px !important;
    right:6px !important;

    width:112px !important;

    height:52px !important;

    margin:0 !important;

    border:none !important;

    border-radius:12px !important;

    background:#A61E22 !important;

    color:#fff !important;

    font-size:15px !important;
    font-weight:600;

    letter-spacing:.02em;

    cursor:pointer;

    box-shadow:
        0 8px 20px rgba(166,30,34,.28);

    transition:all .25s ease;
}

.__hblgw--button-container-light-mode-theme:hover{

    background:#8D181B !important;

    transform:translateY(-1px);

}

.__hblgw--button-container-light-mode-theme:active{

    transform:translateY(0);

}

/* Mobile */

@media (max-width:640px){

.__hblgw--input-input-light-mode-theme{

    height:54px !important;

    padding:0 108px 0 18px !important;

    font-size:16px !important;

    border-radius:16px !important;

}

.__hblgw--button-container-light-mode-theme{

    top:4px !important;
    right:4px !important;

    width:96px !important;

    height:46px !important;

    border-radius:12px !important;

    font-size:13px !important;
}
    }
`;

      homebotShadow.appendChild(style);
    }, 100);
  }, 500);
};
   return (
  <section className="relative py-12 md:py-20 overflow-visible">

    <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

      {/* Heading */}

      <div className="max-w-3xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
          HOME VALUE ESTIMATOR
        </p>

        <h1 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
          Know What Your{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Home
          </span>{" "}
          Is Really Worth
        </h1>

        <p className="mt-4 text-[15px] md:text-lg leading-7 text-gray-200">
          Receive an instant home value estimate, comparable sales,
          neighborhood insights, and market trends in seconds.
          No obligation. Completely free.
        </p>

      </div>

      {/* Homebot Widget */}

      <div className="max-w-3xl mx-auto mt-8 md:mt-10">

        <div id="homebot_homeowner"></div>

        {/* Trust Pills */}

        <div className="mt-4 flex justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-1">

          <div
            className="
              flex-shrink-0
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-md
              px-3
              md:px-5
              py-1.5
              md:py-2
              text-[11px]
              md:text-sm
              text-white
              whitespace-nowrap
            "
          >
            ✓ Instant Estimate
          </div>

          <div
            className="
              flex-shrink-0
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-md
              px-3
              md:px-5
              py-1.5
              md:py-2
              text-[11px]
              md:text-sm
              text-white
              whitespace-nowrap
            "
          >
            ✓ No Obligation
          </div>

          <div
            className="
              flex-shrink-0
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-md
              px-3
              md:px-5
              py-1.5
              md:py-2
              text-[11px]
              md:text-sm
              text-white
              whitespace-nowrap
            "
          >
            ✓ Free Report
          </div>

        </div>

      </div>

      <SideModal />

    </div>

  </section>
);
}

export default Pag2