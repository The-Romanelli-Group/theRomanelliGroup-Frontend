import { useState } from 'react'
import Buyer from './buyer'
import Seller from './seller'
import Agent from './agent'

const QuestionAnswer = ({onSet}) => {
  const [selectedArea, setSelectedArea] = useState(onSet)
  return (
    <><section className="bg-backgroundColor text-white pb-10">
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4">Your Questions, Our  <span className="italic  font-playfair">Answers</span></h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Got questions? We’ve got answers to help you navigate your real estate journey.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center  lg:w-2/3 mx-auto leading-relaxed text-base">
        <button onClick={() => { setSelectedArea("buyer") }} className={`inline-flex border border-white py-2 px-4 sm:px-6 hover:bg-white hover:text-backgroundColor ${selectedArea === "buyer" ?"text-backgroundColor bg-white":"text-white bg-backgroundColor" } text-base sm:text-lg mb-2 sm:mb-0`}>
          For Buyers
        </button>
        <button onClick={() => { setSelectedArea("seller") }} className={`inline-flex border border-white py-2 px-4 sm:px-6 hover:bg-white hover:text-backgroundColor ${selectedArea === "seller" ?"text-backgroundColor bg-white":"text-white bg-backgroundColor" } text-base sm:text-lg mb-2 sm:mb-0 sm:ml-4`}>
          For Sellers
        </button>
        <button onClick={() => { setSelectedArea("agent") }} className={`inline-flex border border-white py-2 px-4 sm:px-6 hover:bg-white hover:text-backgroundColor ${selectedArea === "agent" ?"text-backgroundColor bg-white":"text-white bg-backgroundColor" } text-base sm:text-lg mb-2 sm:mb-0 sm:ml-4`}>
          For Agents
        </button>
      </div>

      {selectedArea === "buyer" ?  <Buyer /> :<>{selectedArea === "seller" ?  <Seller />:  <Agent/>}</>}
    </section>
    </>
  )
}

export default QuestionAnswer