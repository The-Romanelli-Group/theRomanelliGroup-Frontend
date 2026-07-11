import React from "react";
import Simplified from "./simplified";
import ClientSuccess from "../Default Pages/clientSuccess";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Footer from "../Default Pages/footer";
import SellSmarter from "./sellSmarter";
import Talk from "../Default Pages/talk";
import GoogleReviews from "../home/GoogleReviews/GoogleReviews";

const MainSell = () => {
  return (
    <div className="font-dmsans">

      <Simplified />

      <GoogleReviews />

      <ClientSuccess />

      <SellSmarter />

      <QuestionAnswer onSet="seller" />

      <Talk />

      <Footer />

    </div>
  );
};

export default MainSell;