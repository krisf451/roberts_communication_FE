import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === "Dark" ? "" : "Dark";
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
