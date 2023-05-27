import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imgReducer from "./ImgReducer";
import GlobalReducer from "./GlobalReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import AuthReducer from "./AuthReducer";

const authReducer = combineReducers({
  auth: AuthReducer,
  img: imgReducer,
  global: GlobalReducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
