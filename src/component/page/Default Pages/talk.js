
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
        rounded-[28px]
        bg-gradient-to-r
        from-[#A61E22]
        to-[#8E1B1E]
        p-7
        md:p-12
        text-center
      "
    >

      {/* Background Glow */}

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-black/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >

        <p className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">
          LET'S GET STARTED
        </p>

        <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
          Ready To Make Your{" "}
          <span className="font-playfair italic font-normal">
            Next Move?
          </span>
        </h2>

        <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-white/90">

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
            text-sm
            md:text-base
            font-semibold
            shadow-lg
            hover:shadow-xl
            hover:-translate-y-0.5
            transition-all
            duration-300
          "
        >

          Contact Our Team

        </button>

      </motion.div>

    </div>

  </div>

</section>
);
}

export default Talk