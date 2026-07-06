import TeamSnapshot from "../../../assets/images/illustrations/Teamsnapshot.png";
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

<div className="mt-10">

  {/* Desktop */}

  <div className="relative hidden md:flex justify-center">

    <button
      onClick={() => window.open("/properties", "_self")}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-white
        px-10
        py-4
        text-lg
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

    <div
      className="
        absolute
        left-1/2
        top-6
        ml-40
        flex
        items-center
        gap-4
      "
    >
      <img
        src={TeamSnapshot}
        alt="Happy Families"
        className="w-24 h-auto object-contain"
      />

      <div>
        <p className="text-3xl font-bold text-white leading-none">
          185+
        </p>

        <p className="text-base text-white/90">
          Happy Families
        </p>
      </div>
    </div>

  </div>

  {/* Mobile */}

  <div className="flex flex-col items-center md:hidden">

   <button
  onClick={() => window.open("/properties", "_self")}
  className="
    h-12
    md:h-14
    px-6
    md:px-8
    bg-[#A61E22]
    hover:bg-[#8D181B]
    text-white
    rounded-xl
    shadow-lg
    transition-all
    duration-300
    hover:scale-[1.02]
    flex
    items-center
    justify-center
    font-semibold
    text-base
    md:text-lg
  "
>
  Browse Properties →
</button>

    <div className="mt-5 flex items-center gap-3">

      <img
        src={TeamSnapshot}
        alt="Happy Families"
        className="w-20 h-auto object-contain"
      />

      <div className="text-left">

        <p className="text-2xl font-bold text-white leading-none">
          185+
        </p>

        <p className="text-sm text-white/90">
          Happy Families
        </p>

      </div>

    </div>

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