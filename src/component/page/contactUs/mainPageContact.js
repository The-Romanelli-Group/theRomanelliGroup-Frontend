import Connected from "./connected";
import Faces from "../Default Pages/faces";
import Families from "../Default Pages/families";
import GoogleReviews from "../home/GoogleReviews/GoogleReviews";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Footer from "../Default Pages/footer";

const MainPageContact = () => {
  return (
    <div className="font-dmsans">

      <Faces />

      <Families />

      <GoogleReviews />

      <Connected />

      <QuestionAnswer onSet="agent" />

      <Footer />

    </div>
  );
};

export default MainPageContact;