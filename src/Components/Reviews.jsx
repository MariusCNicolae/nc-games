import { React, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByCategory } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  // const [votes, setVotes] = useState();

  // console.log(reviews);
  useEffect(() => {
    getReviewsByCategory(category).then((reviewsData) => {
      setReviews(reviewsData);
    });
  }, [category]);

  // useEffect(() => {
  //   patchVotes(1).then(() => {
  //     setVotes((currVotes) => {
  //       return currVotes + 1;
  //     });
  //   });
  // });

  return (
    <div className="App-reviews">
      <h3>Reviews List</h3>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p>Title: {review.title}</p>
              <p>By {review.owner}</p>
              <p>Categ: {review.category}</p>
              <button>Votes: {review.votes} </button>
              {/* <button>Vote me: {votes}</button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
