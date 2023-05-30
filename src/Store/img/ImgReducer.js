import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgUpload: null,
  photoData: [],
  isImgLoad: false,
  imgDataById: {},
};

export const ImgReducer = createSlice({
  name: 'ImgUpload',
  initialState,
  reducers: {
    showImg(state, action) {
      state.imgUpload = action.payload;
    },
    setPhotoDatas(state, action) {
      state.photoData = action.payload;
    },
    ImgLoad: (state, action) => {
      state.isImgLoad = action.payload;
    },
    showImgById: (state, action) => {
      state.imgDataById = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showImg, setPhotoDatas, ImgLoad, showImgById } =
  ImgReducer.actions;

export default ImgReducer.reducer;
