import useEmblaCarousel from "embla-carousel-react";

const FeaturedListingsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">

        <div className="min-w-[90%] sm:min-w-[48%] xl:min-w-[32%] bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center">
          Card 1
        </div>

        <div className="min-w-[90%] sm:min-w-[48%] xl:min-w-[32%] bg-gray-300 rounded-2xl h-[500px] flex items-center justify-center">
          Card 2
        </div>

        <div className="min-w-[90%] sm:min-w-[48%] xl:min-w-[32%] bg-gray-400 rounded-2xl h-[500px] flex items-center justify-center">
          Card 3
        </div>

        <div className="min-w-[90%] sm:min-w-[48%] xl:min-w-[32%] bg-gray-500 rounded-2xl h-[500px] flex items-center justify-center text-white">
          Card 4
        </div>

      </div>
    </div>
  );
};

export default FeaturedListingsCarousel;