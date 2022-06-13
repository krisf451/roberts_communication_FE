import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getRandomUsers = createAsyncThunk(
  "users/getRandomUsers",
  async (thunkAPI) => {
    try {
      const { data } = await getUsers();
      return data;
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
  extraReducers: {
    [getRandomUsers.pending]: (state) => {
      console.log("get users by page pending!!");
      state.isLoading = true;
    },
    [getRandomUsers.fulfilled]: (state, action) => {
      console.log("get users by page succesfully!!");
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload.results;
    },
    [getRandomUsers.rejected]: (state, action) => {
      console.log("get users by page rejected!!");
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
  },
});

export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
