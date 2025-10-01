import { createSlice } from "@reduxjs/toolkit";

export type translationState = {
  translation: "en" | "ru";
};

const initialState: translationState = {
  translation: (localStorage.getItem("translation") as "en" | "ru") ?? "en",
};

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    toggleTranslation: (state) => {
      state.translation = state.translation === "en" ? "ru" : "en";
    },
  },
});

export const { toggleTranslation } = translationSlice.actions;

export default translationSlice.reducer;
