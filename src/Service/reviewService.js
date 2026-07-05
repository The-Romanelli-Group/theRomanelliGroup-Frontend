import axios from "axios";

export const getGoogleReviews = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_FEATURE_LISTINGS}/reviewdatas`
  );

  return data.data.map((review, index) => ({
    id: review.id || index,
    name: review.Name || "Anonymous",
    rating: review.Rating || 5,
    comment: review.Comment || "",
    image: review.Image_url || "",
    url: review.GoogleReviewsUrl || "",
  }));
};