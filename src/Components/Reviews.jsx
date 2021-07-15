import { React, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByCategory } from "../utils/api";
import SingleReview from "./SingleReview";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  // console.log(reviews);
  useEffect(() => {
    getReviewsByCategory(category).then((reviewsData) => {
      setReviews(reviewsData);
    });
  }, [category]);

  return (
    <div>
      <h3>Reviews List</h3>
      <ul className="App-reviews">
        {reviews.map((review) => {
          return <SingleReview review={review} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
