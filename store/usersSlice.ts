import { createSlice } from "@reduxjs/toolkit";
import { Genre, Movie, User } from "types";

export interface RootState {
  user: {
    user: User;
    genres: Genre[];
    movies: Movie[];
  };
}

const initialState = {
  user: {},
  genres: [{}],
  movies: [{}],
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
  },
});

export const { storeUser, storeGenres, storeMovies } = userSlice.actions;

export default userSlice.reducer;
