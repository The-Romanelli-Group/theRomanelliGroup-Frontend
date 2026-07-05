import { useEffect, useState } from 'react'

import axios from 'axios'
import { motion } from "framer-motion";

const ClientSuccess = () => {
    const [allData, setAllData] = useState([])
    const [allItemsReduce, setAllItemsReduce] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get("https://secure-pleasure-8cb8bfce78.strapiapp.com/api/client-successes?populate=*")
            const data = response.data.data
            const mappedData = data.reduce((acc, item) => {
                acc[item.Item_no] = {
                    url: item.Image?.formats?.medium?.url
                        ? item.Image.formats.medium.url
                        : item.Image?.url
                            ? item.Image.url
                            : "",
                    location: item.Location,
                    bidding: item.Bidding,
                    auction: item.Auction,
                    size: item.Size,
                };
                return acc;
            }, {});
            setAllData(mappedData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
        // const items = allData.reduce((acc, item) => {
        //     acc[item.itemNo] = item;
        //     return acc;
        // }, {});
        // setAllItemsReduce(items)
    }, [])
    return (
<section className="py-8 md:py-12 bg-[#171010] overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="max-w-3xl mx-auto text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">

        CLIENT SUCCESS

      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">

        Celebrating Our{" "}

        <span className="font-playfair italic font-normal text-[#A61E22]">

          Success Stories

        </span>

      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-7 text-gray-400">

        Every home sold represents another family reaching their next chapter.
        Here's a look at some of the clients we've been honored to help.

      </p>

    </motion.div>

    {/* Gallery */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-8 md:mt-12">

  {Object.entries(allData).map(([id, item], index) => (

    <motion.article
  key={id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: .55,
    delay: index * .08
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    shadow-xl
    h-[420px]
  "
>
{/* Image */}

<img
  src={item.url}
  alt={item.location}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-105
  "
/>

{/* Dark Gradient */}

<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/80
    via-black/20
    to-transparent
  "
/>

{/* Badge */}

<div
  className="
    absolute
    top-5
    left-5
    rounded-full
    bg-white/95
    backdrop-blur-md
    px-4
    py-2
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#A61E22]
    shadow-lg
  "
>
  Client Success
</div>

{/* Location */}

<div
  className="
    absolute
    bottom-6
    left-6
    right-6
    text-white
    transition-all
    duration-500
    md:group-hover:-translate-y-36
  "
>
  <h3 className="text-2xl font-bold">
    {item.location}
  </h3>
</div>
{/* Hover Panel */}

<div
  className="
    absolute
    left-0
    right-0
    bottom-0

    bg-white/95
    backdrop-blur-xl

    px-6
    py-5

    transition-all
    duration-500

    translate-y-0
    md:translate-y-full
    md:group-hover:translate-y-0
  "
>

  <div className="space-y-4">

    <div className="flex items-center justify-between">

      <span className="text-gray-500">
        🔥 Bidding
      </span>

      <span className="font-semibold text-gray-900">
        {item.bidding}
      </span>

    </div>

    <div className="flex items-center justify-between">

      <span className="text-gray-500">
        🏆 Auction
      </span>

      <span className="font-semibold text-gray-900">
        {item.auction}
      </span>

    </div>

    <div className="flex items-center justify-between">

      <span className="text-gray-500">
        📐 Size
      </span>

      <span className="font-semibold text-gray-900">
        {item.size}
      </span>

    </div>

  </div>

</div>

</motion.article>

   

  ))}

</div>

  </div>

</section>
);
}

export default ClientSuccess
