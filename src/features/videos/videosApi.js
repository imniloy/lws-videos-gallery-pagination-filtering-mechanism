import axiosInstance from "./../../utlis/axios";

export const getVideos = async (tags, search, author, limit, currentPage) => {
  let queryString = "";
  if (tags?.length > 0) {
    // queryString += tags?.map((tag) => `tags_like=${tag}`).join("&") + `&`;
    queryString += tags?.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (author.length > 0 && queryString.length > 0) {
    queryString += `&author=${author}`;
  } else if (author.length > 0) {
    queryString += `author=${author}`;
  }

  if (search !== "" && queryString.length !== 0) {
    // queryString += `&q=${search}&`;
    queryString += `&q=${search}`;
  } else if (search !== "") {
    // queryString += `q=${search}&`;
    queryString += `q=${search}`;
  }

  if (limit !== 0 && currentPage && queryString.length !== 0) {
    queryString += `&_page=${currentPage}&_limit=${limit}`;
  } else {
    queryString += `_page=${currentPage}&_limit=${limit}`;
  }

  const response = await axiosInstance.get(`/videos?${queryString}`);

  return {
    videos: response.data,
    totalvideos: response.headers["x-total-count"],
  };
};
// import axiosInstance from "./../../utlis/axios";

// export const getVideos = async (tags, search, limit) => {
//   console.log(limit);
//   let queryString = "";
//   if (tags?.length > 0) {
//     queryString += tags?.map((tag) => `tags_like=${tag}`).join("&") + `&`;
//   }

//   if (search !== "" && queryString.length !== 0) {
//     queryString += `&q=${search}&`;
//   } else if (search !== "") {
//     queryString += `q=${search}&`;
//   }

//   const response = await axiosInstance.get(
//     `/videos?${queryString}_limit=${limit}`
//   );
//   return response.data;
// };
