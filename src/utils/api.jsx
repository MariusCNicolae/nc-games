import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-cv.herokuapp.com/",
});

export const getCategories = () => {
  return gamesApi.get("api/categories").then((response) => {
    return response.data.categories;
  });
};

export const getReviewsByCategory = async (category) => {
  let path = "api/reviews";
  if (category) path += `?category=${category}`;
  const { data } = await gamesApi.get(path);
  return data.reviews;
};

export const patchVotes = async (review_id, increment) => {
  const response = await gamesApi.patch(`api/reviews/${review_id}`, {
    inc_votes: increment,
  });

  return response;
};

export const postComment = async (review_id, newComment) => {
  const response = await gamesApi.post(
    `api/reviews/${review_id}/comments`,
    newComment
  );
  console.log(response.comments);
};
