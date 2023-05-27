const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: {
    email: null,
    id: null,
  },
  isLogin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      console.log(action);
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
