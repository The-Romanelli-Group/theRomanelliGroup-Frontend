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
    dragFree: false,
  });

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_FEATURE_LISTINGS}/served-families?populate=Image`
        );

        const mapped = response.data.data.map((family) => ({
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
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
const [selectedIndex, setSelectedIndex] = useState(0);

useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi.on("select", onSelect);
  onSelect();

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);

  return (
<section className="py-24 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-5 lg:px-8">

<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: .7 }}
className="text-center max-w-3xl mx-auto"
>

<p className="uppercase tracking-[0.35em] text-[#A61E22] font-semibold text-sm">
CLIENT STORIES
</p>

<h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">

Stories From Our{" "}

<span className="font-playfair italic font-normal text-[#A61E22]">
Clients
</span>

</h2>

<p className="mt-6 text-lg text-gray-600 leading-8">

Real experiences from buyers and sellers who trusted
The Romanelli Group with one of life's biggest decisions.

</p>

</motion.div>

<div className="relative mt-12">

<button
onClick={scrollPrev}
className="
absolute
left-3
lg:left-6
top-1/2
-z-10
-translate-y-1/2
z-20
w-14
h-14
rounded-full
bg-white/95
backdrop-blur
shadow-xl
border
border-gray-200
flex
items-center
justify-center
transition-all
duration-300
hover:bg-[#A61E22]
hover:border-[#A61E22]
hover:text-white
hover:scale-110
"
>

<ChevronLeft size={22} />

</button>

<button
onClick={scrollNext}
className="
absolute
right-3
lg:right-6
top-1/2
-translate-y-1/2
z-20
w-14
h-14
rounded-full
bg-white/95
backdrop-blur
shadow-xl
border
border-gray-200
flex
items-center
justify-center
transition-all
duration-300
hover:bg-[#A61E22]
hover:border-[#A61E22]
hover:text-white
hover:scale-110
"
>

<ChevronRight size={22} />

</button>

<div
className="overflow-hidden"
ref={emblaRef}
>

<div className="flex">

{families.map((family,index)=>{

const isActive=index===selectedIndex;

return(
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{
  duration: .45,
  delay: index * .05,
}}
className={`
transition-all
duration-500
ease-out
px-3
min-w-[92%]
sm:min-w-[70%]
lg:min-w-[33.333%]
${
  isActive
    ? "scale-[1.05] -translate-y-5 z-20"
    : "scale-95 opacity-75"
}
`}
>

<article
className={`
group
relative
overflow-hidden
rounded-[30px]
bg-white
transition-all
duration-500
border
${
  isActive
    ? "border-[#A61E22] shadow-[0_35px_80px_rgba(166,30,34,.18)]"
    : "border-gray-200 shadow-sm"
}
`}
>

<div className="relative overflow-hidden aspect-[4/5]">

<img
src={family.image}
alt={family.name}
loading="lazy"
decoding="async"
className={`
w-full
h-full
object-cover
transition-all
duration-700
${
  isActive
    ? "scale-110"
    : "group-hover:scale-105"
}
`}
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>

{/* Featured Badge */}

{isActive && (

<div
className="
absolute
top-5
right-5
rounded-full
bg-[#A61E22]
text-white
text-xs
font-semibold
px-4
py-2
shadow-lg
"
>

Verified Client

</div>

)}

{/* Quote Bubble */}

<div
className={`
absolute
-bottom-7
left-8
transition-all
duration-500
${
  isActive
    ? "scale-100"
    : "scale-90"
}
`}
>

<div
className="
w-16
h-16
rounded-full
bg-[#A61E22]
text-white
flex
items-center
justify-center
text-4xl
shadow-xl
"
>

“

</div>

</div>

</div>

<div className="pt-12 pb-8 px-8">

<p
className={`
italic
leading-8
transition-all
duration-500
${
  isActive
    ? "text-gray-700 text-[17px]"
    : "text-gray-500"
}
`}
>

{family.quote}

</p>

<div className="mt-10 flex items-center justify-between">

<div>

<h3
className={`
font-semibold
transition-all
duration-300
${
  isActive
    ? "text-xl text-gray-900"
    : "text-lg text-gray-800"
}
`}
>

{family.name}

</h3>

<div className="mt-3 h-1 w-14 rounded-full bg-[#A61E22]"/>

</div>

<motion.div
whileHover={{
rotate:180
}}
transition={{
duration:.5
}}
className={`
w-11
h-11
rounded-full
flex
items-center
justify-center
transition-all
duration-300
${
  isActive
    ? "bg-[#A61E22] text-white"
    : "bg-[#A61E22]/10 text-[#A61E22]"
}
`}
>

★

</motion.div>

</div>

</div>

</article>

</motion.div>

)

})}

</div>

</div>

</div>

<div className="flex justify-center mt-16">

<motion.button
whileHover={{
scale:1.04
}}
whileTap={{
scale:.98
}}
onClick={()=>window.location.href="/contact-us"}
className="
rounded-full
bg-[#A61E22]
px-10
py-4
font-semibold
text-white
shadow-xl
hover:shadow-2xl
transition-all
"
>

Become Our Next Success Story

</motion.button>

</div>

</div>

</section>

);

};

export default Families;