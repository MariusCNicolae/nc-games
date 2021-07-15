import React from "react";
import { patchVotes } from "../utils/api";
import { useState } from "react";

const SingleReview = ({ review }) => {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(false);

  const handleVotesClick = (review_id) => {
    setError(false);
    patchVotes(review_id, 1)
      .then(() => {
        setVotes((currVotes) => {
          return currVotes + 1;
        });
      })
      .catch((err) => {
        setError(true);
        setVotes(0);
      });
  };

  return (
    <li key={review.review_id}>
      <p>Title: {review.title}</p>
      <p>By {review.owner}</p>
      <p>Category: {review.category}</p>

      <button
        disabled={setVotes > 0}
        onClick={() => handleVotesClick(review.review_id)}
      >
        <p>Votes: {review.votes + votes}</p>
        {error && <p> Something went wrong!</p>}
      </button>
    </li>
  );
};

export default SingleReview;
