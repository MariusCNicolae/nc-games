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
  console.log(path);
  const { data } = await gamesApi.get(path);
  return data.reviews;
};

// export const patchVotes = async (category, increment) => {
//   const response = await gamesApi.patch(`api/reviews/?category=${category}`, {
//     votes: increment,
//   });
//   console.log(response);
// };
