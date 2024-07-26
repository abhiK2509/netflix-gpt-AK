import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieList: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieList } = action.payload;
      state.movieNames = movieNames;
      state.movieList = movieList;
    },
  },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
