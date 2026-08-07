import React from "react";
import Pag2 from "../component/page/home/pag2";
import FirstPageBuy from "../component/page/buy/firstPageBuy";
import FirstPageSell from "../component/page/sell/firstPageSell";
import FirstPageContact from "../component/page/contactUs/firstPageContact";
import FirstPageProperties from "../component/page/properties/firstPageProperties";

const Pages = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Pag2 />;

      case "Buy":
        return <FirstPageBuy />;

      case "Sell":
        return <FirstPageSell />;

      case "Contact Us":
        return <FirstPageContact />;

      case "Properties":
        return <FirstPageProperties />;

      default:
        return <Pag2 />;
    }
  };

  return <div>{renderPage()}</div>;
};

export const getVideoUrl = (page) => {
  switch (page) {
    case "Home":
      return "url1"; // Replace with actual Home video URL

    case "Buy":
      return "url2"; // Replace with actual Buy video URL

    default:
      return "url1";
  }
};

export default Pages;