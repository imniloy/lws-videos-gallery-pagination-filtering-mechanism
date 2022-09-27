import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  author: "",
  pagination: {
    limit: 4,
    totalvideos: 1,
    currentPage: 1,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.pagination.currentPage = 1;
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) state.tags.splice(indexToRemove, 1);
      state.pagination.currentPage = 1;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    authorSelected: (state, action) => {
      state.author = action.payload;
      state.pagination.currentPage = 1;
    },
    setLimit: (state, action) => {
      state.pagination.limit = action.payload || 4;
      state.pagination.currentPage = 1;
    },
    setTotalVideosLength: (state, action) => {
      state.pagination.totalvideos = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    clearAllFilter: (state, action) => {
      state.tags = [];
      state.search = "";
      state.author = "";
      state.pagination.limit = 4;
      state.pagination.totalvideos = 1;
      state.pagination.currentPage = 1;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  setLimit,
  authorSelected,
  setTotalVideosLength,
  setCurrentPage,
  clearAllFilter,
} = filterSlice.actions;
