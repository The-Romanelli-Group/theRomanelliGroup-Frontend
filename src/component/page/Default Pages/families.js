import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Families = () => {
  const [families, setFamilies] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_FEATURE_LISTINGS}/served-families?populate=Image`
        );

        const mapped = data.data.map((family) => ({
          image:
            family.Image?.formats?.small?.url ||
            family.Image?.formats?.thumbnail?.url ||
            family.Image?.url ||
            "",

          quote: family.Title,

          name: family.Name,
        }));

        setFamilies(mapped);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFamilies();
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
<section className="py-24 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-5 lg:px-8">

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.6}}
className="max-w-3xl mx-auto text-center"
>

<p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">

CLIENT STORIES

</p>

<h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">

Stories From Our{" "}

<span className="font-playfair italic font-normal text-[#A61E22]">

Clients

</span>

</h2>

<p className="mt-6 text-lg leading-8 text-gray-600">

Real experiences from buyers and sellers who trusted
The Romanelli Group with one of life's biggest decisions.

</p>

</motion.div>

<div className="relative mt-14">

<button
onClick={scrollPrev}
className="
absolute
left-0
lg:left-2
top-1/2
-z-10
-translate-y-1/2
z-20
w-12
h-12
rounded-full
bg-white
shadow-xl
border
border-gray-200
flex
items-center
justify-center
transition-all
duration-300
hover:bg-[#A61E22]
hover:text-white
"
>

<ChevronLeft size={22}/>

</button>

<button
onClick={scrollNext}
className="
absolute
right-0
lg:right-2
top-1/2
-z-10
-translate-y-1/2
z-20
w-12
h-12
rounded-full
bg-white
shadow-xl
border
border-gray-200
flex
items-center
justify-center
transition-all
duration-300
hover:bg-[#A61E22]
hover:text-white
"
>

<ChevronRight size={22}/>

</button>

<div
className="overflow-hidden"
ref={emblaRef}
>

<div className="flex"></div>
{families.map((family, index) => (

<motion.div
key={index}
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{
  duration: .45,
  delay: index * .05,
}}
className="
min-w-[90%]
sm:min-w-[65%]
lg:min-w-[33.333%]
px-3
"
>

<article
className="
group
overflow-hidden
rounded-[28px]
border
border-gray-200
bg-white
shadow-sm
hover:shadow-2xl
transition-all
duration-500
h-full
flex
flex-col
"
>

{/* Image */}

<div className="relative overflow-hidden aspect-[4/5]">

<img
src={family.image}
alt={family.name}
loading="lazy"
decoding="async"
className="
w-full
h-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

</div>

{/* Content */}

<div className="flex flex-col flex-1 p-7">

<div className="text-[#A61E22] text-5xl leading-none font-playfair">
“
</div>

<p
className="
mt-2
text-gray-600
leading-8
italic
line-clamp-5
flex-1
"
>

{family.quote}

</p>

<div className="mt-8">

<div className="h-px w-full bg-gray-200 mb-5"/>

<h3 className="font-semibold text-gray-900 text-lg">

{family.name}

</h3>

<p className="mt-1 text-sm text-gray-500">

Happy Client

</p>

</div>

</div>

</article>

</motion.div>

))}

</div>

</div>

</div>

<div className="mt-16 flex justify-center">

<motion.button
whileHover={{ scale: 1.03 }}
whileTap={{ scale: .98 }}
onClick={() => (window.location.href = "/contact-us")}
className="
rounded-full
bg-[#A61E22]
px-10
py-4
text-white
font-semibold
shadow-lg
hover:shadow-xl
transition-all
"
>

Become Our Next Success Story

</motion.button>

</div>

</section>

);

};

export default Families;