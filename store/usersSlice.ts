import { createSlice } from "@reduxjs/toolkit";
import { Genre, Movie, Quote, User } from "types";

export interface RootState {
  user: {
    user: User;
    genres: Genre[];
    movies: Movie[];
    searchedMovies: Movie[];
    quotes: Quote[];
    searchTerm: string;
  };
}

const initialState = {
  user: {},
  genres: [{}],
  movies: [{}],
  searchedMovies: [{}],
  quotes: [{}],
  searchTerm: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = { ...payload };
    },
    storeGenres: (state, { payload }) => {
      state.genres = [...payload];
    },
    storeMovies: (state, { payload }) => {
      state.movies = [...payload];
    },
    storeSearchedMovies: (state, { payload }) => {
      state.searchedMovies = [...payload];
    },
    storeQuotes: (state, { payload }) => {
      state.quotes = [...payload];
    },
    storeSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const {
  storeUser,
  storeGenres,
  storeMovies,
  storeSearchedMovies,
  storeQuotes,
  storeSearchTerm,
} = userSlice.actions;

export default userSlice.reducer;
