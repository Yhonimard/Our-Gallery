import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./ImgReducer";

export const store = configureStore({
  reducer: {
    imgReducer: imgReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
