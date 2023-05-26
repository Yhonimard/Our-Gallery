import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSendingData: false,
};

export const GlobalState = createSlice({
  name: "ImgUpload",
  initialState,
  reducers: {
    setSendingData(state, action) {
      state.isSendingData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSendingData } = GlobalState.actions;

export default GlobalState.reducer;
