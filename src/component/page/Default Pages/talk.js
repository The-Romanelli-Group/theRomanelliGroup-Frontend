
import { useNavigate } from 'react-router-dom';

const Talk = () => {
  const navigate = useNavigate();

  const handleScheduleCall = () => {
    navigate('/contact-us');
  };
 return (
<section className="py-8 md:py-12 bg-[#171010] overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        bg-gradient-to-r
        from-[#A61E22]
        to-[#8E1B1E]
        px-8
        py-12
        md:px-16
        md:py-16
        text-center
      "
    >

      {/* Background Glow */}

      <div className="absolute -top-24 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10">

        <p className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">
          LET'S GET STARTED
        </p>

        <h2 className="mt-4 text-[32px] md:text-6xl leading-tight font-bold">

          Ready To Make Your{" "}

          <span className="font-playfair italic font-normal">
            Next Move?
          </span>

        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-[15px] md:text-lg leading-7 text-white/90">

          Whether you're buying, selling or simply exploring your options,
          our team is here to answer your questions and guide you every step
          of the way.

        </p>

        <button
          onClick={handleScheduleCall}
          className="
            mt-8
            rounded-full
            bg-white
            px-8
            py-4
            text-[#A61E22]
            font-semibold
            shadow-xl
            hover:shadow-2xl
            hover:scale-105
            active:scale-95
            transition-all
          "
        >

          Contact Our Team

        </button>

      </div>

    </div>

  </div>

</section>
);
}

export default Talk