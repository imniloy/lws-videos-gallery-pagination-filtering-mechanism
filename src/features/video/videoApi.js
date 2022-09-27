import axiosInstance from "./../../utlis/axios";

export const getVideo = async (videoId) => {
  const response = await axiosInstance.get(`/videos/${videoId}`);
  return response?.data;
};

export const editLikeDisLike = async (videoId, data) => {
  const response = await axiosInstance.put(`/videos/${videoId}`, data);
  return response?.data;
};