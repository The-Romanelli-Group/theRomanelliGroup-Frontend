import React from "react";
import Simplified from "./simplified";
import ClientSuccess from "../Default Pages/clientSuccess";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Footer from "../Default Pages/footer";
import FromOurBlog from "./FromOurBlog";
import Talk from "../Default Pages/talk";
import GoogleReviews from "../home/GoogleReviews/GoogleReviews";

const MainSell = () => {
  return (
    <div className="font-dmsans">

      <Simplified />

      <GoogleReviews />

      <ClientSuccess />

      <FromOurBlog
        category="Seller"
        subtitle="Selling strategies, pricing advice and expert insights to maximize your home's value."
      />

      <QuestionAnswer onSet="seller" />

      <Talk />

      <Footer />

    </div>
  );
};

export default MainSell;