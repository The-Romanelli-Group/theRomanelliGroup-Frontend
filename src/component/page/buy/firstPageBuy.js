import { mainPageBuy_img_url } from "../../../assets/allImg";
import SideModal from "../home/sideModal";

const FirstPageBuy = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          {/*  <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
            BUY A HOME
          </p>  */}
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

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">

            <button
              onClick={() => window.open("/properties", "_self")}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-8
                py-4
                text-base
                md:text-lg
                font-semibold
                text-gray-900
                shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-100
              "
            >
              Browse Properties →
            </button>

            <div className="flex items-center gap-3">

              <img
                src={mainPageBuy_img_url}
                alt="Happy Homeowners"
                className="w-16 md:w-20 h-auto object-contain"
              />

              <div className="text-left">

                <p className="text-3xl md:text-4xl font-bold text-white leading-none">
                  185+
                </p>

                <p className="text-white/90 text-sm md:text-base">
                  Homes Sold
                </p>

              </div>

            </div>

          </div>

        </div>

        <SideModal />

      </div>

    </section>
  );
};

export default FirstPageBuy;