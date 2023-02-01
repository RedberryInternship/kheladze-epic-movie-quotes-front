import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  user: {
    user: {
      name: string;
      emails: string[];
    };
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
