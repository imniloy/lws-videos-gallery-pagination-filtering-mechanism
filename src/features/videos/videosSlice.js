import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
  totalVideos: 1,
};

// export const fetchVideos = createAsyncThunk(
//   "videos/fetchVideos",
//   async ({ tags, search, pagination }) => {
//     const videos = await getVideos(tags, search, pagination);
//     return videos;
//   }
// );
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search, limit, author, currentPage }) => {
    const videos = await getVideos(tags, search, author, limit, currentPage);
    return videos;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload.videos;
      state.totalVideos = action.payload.totalvideos;
    });

    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.videos = [];
      state.error = action.error?.message;
    });
  },
});

export default videosSlice.reducer;
