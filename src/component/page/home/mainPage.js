import React from "react";

import NumberSpeak from "../Default Pages/numberSpeak";
import Faces from "../Default Pages/faces";
import Families from "../Default Pages/families";
import GoogleReviews from "./GoogleReviews/GoogleReviews";
import Succeed from "../Default Pages/succeed";
import ClientSuccess from "../Default Pages/clientSuccess";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Talk from "../Default Pages/talk";
import Footer from "../Default Pages/footer";

const MainPage = () => {
  return (
    <div className="font-dmsans">

      <NumberSpeak />

      <Faces />

      <Families />

      <GoogleReviews />

      <Succeed />

      <ClientSuccess />

      <QuestionAnswer onSet="agent" />

      <Talk />

      <Footer />

    </div>
  );
};

export default MainPage;