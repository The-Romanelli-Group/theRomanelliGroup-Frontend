import { useEffect, useState } from 'react'
import { clientsuccess_auction, clientsuccess_bidding, clientsuccess_corner, clientsuccess_location, clientsuccess_url1, clientsuccess_url2, clientsuccess_url3, clientsuccess_url4, clientsuccess_url5, clientsuccess_url6 } from '../../../assets/allImg'
import axios from 'axios'

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
        <div className='bg-backgroundColor text-white'>
            <div className="container px-5 lg:px-24 pt-12 mx-auto ">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 ">
                        Celebrating Our Clients  <span className="italic  font-playfair">Success Stories</span>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                        Explore our proudest moments—because every sold home is a success story we’re honored to be part of.s just a quick sneak peak into some of the smiling faces of my happy past clients.
                    </p>
                </div>
            </div>
            <section className="text-gray-600 px-5 lg:px-24 body-font">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-64 md:h-80 lg:h-[600px] block" src={allData[1]?.url} />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>
                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> {allData[1]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> {allData[1]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'>{allData[1]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-48 md:h-60 lg:h-[400px] block" src={allData[2]?.url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> {allData[2]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'>  {allData[2]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> {allData[2]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-48 md:h-60 lg:h-[400px] block" src={allData[3]?.url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'>{allData[3]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'>  {allData[3]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> {allData[3]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-64 md:h-80 lg:h-[600px] block" src={allData[4]?.url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> {allData[4]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'>  {allData[4]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> {allData[4]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-64 md:h-80 lg:h-[600px] block" src={allData[5]?.url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> {allData[5]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'>  {allData[5]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> {allData[5]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-48 md:h-60 lg:h-[400px] block" src={allData[6]?.url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 md:right-0 xl:right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={clientsuccess_corner} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={clientsuccess_location} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'>{allData[6]?.location}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_bidding} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> {allData[6]?.bidding}</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={clientsuccess_auction} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> {allData[6]?.auction}</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ClientSuccess