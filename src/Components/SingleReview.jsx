import React from "react";
import { patchVotes, postComment } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleReview = ({ review }) => {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(false);
  const { review_id } = useParams;

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

  const [newCommentText, setNewCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "ant",
      comment: newCommentText,
    };
    postComment(review_id, newComment).then((newComment) => {
      console.log(newComment);
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
      <form onSubmit={handleSubmit}>
        <label>
          Add a comment:
          <textarea
            value={newCommentText}
            onChange={(event) => setNewCommentText(event.target.value)}
          ></textarea>
        </label>
        <button>Post</button>
      </form>
    </li>
  );
};

export default SingleReview;
