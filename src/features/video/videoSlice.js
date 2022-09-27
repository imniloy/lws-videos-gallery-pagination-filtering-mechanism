import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editLikeDisLike, getVideo } from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (videoId) => {
    const video = await getVideo(videoId);
    return video;
  }
);

export const updateLikes = createAsyncThunk(
  "video/updateLikes",
  async ({ videoId, data }) => {
    const video = await editLikeDisLike(videoId, data);
    return video;
  }
);

export const updateDisLikes = createAsyncThunk(
  "video/updateDisLikes",
  async ({ videoId, data }) => {
    const video = await editLikeDisLike(videoId, data);
    return video;
  }
);


const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });

    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.video = action.payload;
    });

    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.video = {};
      state.error = action.error?.message;
    });

    builder.addCase(updateLikes.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });

    builder.addCase(updateLikes.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.video.likes = action.payload;
    });

    builder.addCase(updateLikes.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.error?.message;
    });


    builder.addCase(updateDisLikes.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });

    builder.addCase(updateDisLikes.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.video.unlikes = action.payload;
    });

    builder.addCase(updateDisLikes.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.video = {};
      state.error = action.error?.message;
    });
  },
});

export default videoSlice.reducer;
export const { liked, disLiked } = videoSlice.actions;
