import React from 'react'
import FeaturedListingCarousel from "../home/FeaturedListingCarousel/FeaturedListingCarousel";
import NumberSpeak from '../Default Pages/numberSpeak'
import Families from '../Default Pages/families'
import ClientSay from '../Default Pages/Client Review/clientSay'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Footer from '../Default Pages/footer'

const MainPageProperties = () => {
  return (
    <div>
        <FeaturedListingCarousel />
        <NumberSpeak/>
        <Families/>
        <ClientSay/>
        <QuestionAnswer onSet={"buyer"}/>
        <Footer/>
    </div>
  )
}

export default MainPageProperties