import React from 'react';
import { faces_url1, faces_url2 } from '../../../assets/allImg';

const Faces = () => {

  return (
    <>
      {/* Heading */}
      <div className="bg-backgroundColor ">
        <div className="flex flex-col items-center text-center py-10 -mb-1">
          <h1 className="sm:text-5xl text-2xl   mb-2 font-semibold text-white">
            Meet the <span className="italic font-playfair">Faces</span> behind the
          </h1>
          <h1 className="sm:text-5xl text-2xl font-semibold text-white">Romanelli Group</h1>
        </div>
      </div>

      {/* Section with Split Background */}
      <section className="relative">
        <div className="absolute inset-0 bg-white md:bg-backgroundColor h-1/3"></div> {/* 1/4 background color */}
        <div className="absolute inset-0 bg-white h-2/3 top-1/3"></div> {/* 3/4 white background */}

        <div className="container px-5 lg:px-24  py-12 mx-auto relative z-1">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">

            {/* First Profile */}
            <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
              <div className="relative w-80">
                <div className="relative">
                  <img
                    alt="content"
                    className="object-cover object-center h-auto w-full"
                    src={faces_url2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
                  <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
                    <h3 className="text-2xl font-semibold">CRISTINA ROMANELLI</h3>
                    <p className="text-lg">CEO & PARTNER</p>
                  </div>
                </div>
              </div>


              <p className="leading-relaxed text-base text-black mt-4 max-w-xl ">
                I’m a Partner of The Romanelli Group at Keller Williams Greater Columbus, proudly serving families throughout Central Ohio. 
              </p>
               <p className="leading-relaxed text-base text-black max-w-xl ">
                With over 10 years of experience and more than 600 homes sold, I’ve built a reputation for delivering exceptional results with integrity, care, and expertise.
              </p>
               <p className="leading-relaxed text-base text-black max-w-xl ">
                As a lifelong advocate for my clients, I specialize in helping families buy and sell homes that fit their next chapter. My leadership and success have earned me recognition among the Top 1% of Realtors in Central Ohio, as well as the Columbus Realtors $25 Million Dollar Award.
              </p>
               <p className="leading-relaxed text-base text-black max-w-xl ">
                As a past president of the Women’s Council of Realtors Columbus, I’m passionate about elevating others in the industry and giving back to my community. I live in Westerville, Ohio, and love spending time with my husband, Chris, and our daughter, Marcella, exploring everything Central Ohio has to offer.
              </p>
            </div>


            {/* Second Profile */}
            <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
              <div className="relative w-80">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full"
                  src={faces_url1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
                <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
                  <h3 className="text-2xl font-semibold">ANTONIO ROMANELLI</h3>
                  <p className="text-lg">CFO & PARTNER</p>
                </div>
              </div>
              <p className="leading-relaxed text-base text-black mt-4 max-w-xl">
                I’m a Partner of The Romanelli Group at Keller Williams Greater Columbus, proudly serving families across Central Ohio alongside my sister (not my wife!). With over five years of experience in residential real estate and more than two years in commercial real estate, I bring a strong understanding of how to achieve exceptional results for clients.
              </p>
              <p className="leading-relaxed text-base text-black max-w-xl">
                Helping families through their next stage of life is what I enjoy most—whether that’s a first home, a family home, or a low-maintenance option. We work to remove as much stress as possible from the buying and selling process, which has led to over 600 closed transactions and recognition in the top 1% in Central Ohio.
              </p>
              <p className="leading-relaxed text-base text-black max-w-xl">
               I grew up in North Columbus, where I now live with my wife Gabrielle and our son Francesco. When I’m not showing homes, you’ll often find us at a local coffee shop enjoying a cappuccino.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Faces;
