import FeaturedListingCarousel from "../home/FeaturedListingCarousel/FeaturedListingCarousel";
import GoogleReviews from "../home/GoogleReviews/GoogleReviews";
import RoadMap from "./roadMap";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Footer from "../Default Pages/footer";
import Talk from "../Default Pages/talk";

const MainPageBuy = () => {
  return (
    <div className="font-dmsans">

      <RoadMap />

      <FeaturedListingCarousel />

      <GoogleReviews />

      <QuestionAnswer onSet={"buyer"} />

      <Talk />

      <Footer />

    </div>
  );
};

export default MainPageBuy;