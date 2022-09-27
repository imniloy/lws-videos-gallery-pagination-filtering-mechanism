import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async ({ currentVideoId, tags }) => {
    const relatedVideos = await getRelatedVideos({ currentVideoId, tags });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });

    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.relatedVideos = action.payload;
    });

    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.relatedVideos = [];
      state.error = action.error?.message;
    });
  },
});

export default relatedVideosSlice.reducer;
