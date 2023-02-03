import { createSlice } from "@reduxjs/toolkit";
import { User } from "types";

export interface RootState {
  user: {
    user: User;
  };
}

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = { ...payload };
    },
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
