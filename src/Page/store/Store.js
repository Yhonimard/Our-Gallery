import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./ImgReducer";
import GlobalReducer from "./GlobalReducer";

export const store = configureStore({
  reducer: {
    imgReducer: imgReducer,
    globalReducer: GlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
