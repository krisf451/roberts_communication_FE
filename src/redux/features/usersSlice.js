import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
});

export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
