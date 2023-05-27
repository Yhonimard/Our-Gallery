import { combineReducers, configureStore } from '@reduxjs/toolkit';
import imgReducer from './img/ImgReducer';
import GlobalReducer from './global/GlobalReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import AuthReducer from './auth/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  img: imgReducer,
  global: GlobalReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['auth'],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persist = persistStore(store);
