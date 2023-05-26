import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgUpload: null,
  imgUrl: null,
  photoData: [],
};

export const ImgReducer = createSlice({
  name: "ImgUpload",
  initialState,
  reducers: {
    setImgFile(state, action) {
      state.imgUpload = action.payload;
    },
    setPhotoUrl(state, action) {
      state.imgUrl = action.payload;
    },
    setPhotoDatas(state, action) {
      state.photoData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImgFile, setPhotoUrl, setPhotoDatas } = ImgReducer.actions;

export default ImgReducer.reducer;
