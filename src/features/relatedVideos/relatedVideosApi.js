import axiosInstance from "./../../utlis/axios";

// ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({ currentVideoId, tags }) => {
  const limit = 5;
  //   Sumit's rules
  //   let queryString =
  //     tags?.length > 0
  //       ? tags.map((tag) => `tags_like=${tag}`).join("&") +
  //         `&id_ne=${id}&_limit=${limit}`
  //       : `id_ne=${id}&_limit=${limit}`;

  let queryString =
    tags?.length > 0
      ? tags.reduce((stringTail, tag) => `${stringTail}&tags_like=${tag}`) +
        `&id_ne=${currentVideoId}&_limit=${limit}`
      : `&id_ne=${currentVideoId}&_limit=${limit}`;

  const response = await axiosInstance.get(`/videos/?tags_like=${queryString}`);
  return response.data;
};
