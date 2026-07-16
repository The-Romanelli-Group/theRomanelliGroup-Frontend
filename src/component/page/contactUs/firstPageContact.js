import SideModal from "../home/sideModal";
import LeadForm from "../LeadForm/LeadForm";

const FirstPageSell = () => {
   return (
  <section className="relative py-10 md:py-16 lg:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div
        className="
          grid
          lg:grid-cols-[1fr_470px]
          gap-10
          lg:gap-14
          items-center
        "
      >
        {/* Left Content */}

        <div className="max-w-3xl text-center lg:text-left">
        {/* 
          <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
            CONTACT THE ROMANELLI GROUP
          </p> 
           */}

          <h1
            className="
              mt-3
              text-[30px]
              md:text-6xl
              leading-tight
              font-bold
              text-white
            "
          >
            Let's Start{" "}
            <span className="font-playfair italic font-normal text-[#A61E22]">
              the Conversation
            </span>
          </h1>

          <p
            className="
              mt-4
              text-[15px]
              md:text-lg
              leading-6
              md:leading-7
              text-gray-300
              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
            Whether you're buying your first home, selling your current
            home, exploring investment opportunities, or simply have a
            question, our team is here to help every step of the way.
          </p>
        </div>

        {/* Form */}

        <div className="w-full lg:justify-self-end">
          <div className="rounded-[28px] overflow-hidden shadow-2xl">
            <LeadForm variant="contact" />
          </div>
        </div>
      </div>
    </div>

    <SideModal />
  </section>
);
};

export default FirstPageSell;