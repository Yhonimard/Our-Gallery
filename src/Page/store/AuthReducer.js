const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReducer: () => {},
  },
});

export const { authReducer } = authSlice.actions;

export default authSlice.reducer;
