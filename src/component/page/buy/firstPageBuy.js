import TeamSnapshot from "../../../assets/images/illustrations/Teamsnapshot.png";
import SideModal from "../home/sideModal";

const FirstPageBuy = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h1
            className="
              mt-3
              px-3
              sm:px-6
              md:px-0
              text-[30px]
              sm:text-[36px]
              md:text-6xl
              leading-tight
              font-bold
              text-white
            "
          >
            Find the{" "}
            <span className="font-playfair italic font-normal text-[#A61E22]">
              Home
            </span>{" "}
            That Fits Your Life
          </h1>

          <p
            className="
              mt-3
              px-4
              sm:px-8
              md:px-0
              text-[15px]
              md:text-lg
              leading-6
              md:leading-7
              text-gray-200
            "
          >
            Whether you're searching for your first home, your forever home,
            or your next investment, we'll help you find the right property
            with expert guidance every step of the way.
          </p>

          {/* CTA */}

          <div className="relative mt-10 flex justify-center">

            <button
              onClick={() => window.open("/properties", "_self")}
              className="
                h-12
                md:h-12
                px-6
                md:px-7
                bg-[#A61E22]
                hover:bg-[#8D181B]
                text-white
                rounded-lg
                md:rounded-xl
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
                flex
                items-center
                justify-center
                font-semibold
                text-base
              "
            >
              Browse Properties
            </button>

            {/* Desktop Social Proof */}

            <div
              className="
                hidden
                md:flex
                absolute
                left-1/2
                top-6
                ml-40
                items-center
                gap-2
              "
            >
              <img
                src={TeamSnapshot}
                alt="Happy Families"
                className="w-28 h-auto object-contain"
              />

              <div className="text-left">
                <p className="text-3xl font-bold text-white leading-none">
                  570+
                </p>

                <p className="text-base text-white/90">
                  Happy Families
                </p>
              </div>
            </div>

          </div>

          {/* Mobile Social Proof */}

          <div className="md:hidden mt-5 flex items-center justify-center gap-3">

            <img
              src={TeamSnapshot}
              alt="Happy Families"
              className="w-24 h-auto object-contain"
            />

            <div className="text-left">
              <p className="text-2xl font-bold text-white leading-none">
                570+
              </p>

              <p className="text-sm text-white/90">
                Happy Families
              </p>
            </div>

          </div>

        </div>

        <SideModal />

      </div>
    </section>
  );
};

export default FirstPageBuy;