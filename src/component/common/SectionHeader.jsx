import { motion } from "framer-motion";

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mx-auto text-center ${className}`}
    >
      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">
        {title}{" "}
        {highlight && (
          <span className="font-playfair italic font-normal text-[#A61E22]">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-[15px] md:text-lg leading-7 text-gray-600">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;