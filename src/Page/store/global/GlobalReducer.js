import { Zoom } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';

const initialState = {
  isSendingData: false,
};

export const GlobalState = createSlice({
  name: 'ImgUpload',
  initialState,
  reducers: {
    setSendingData: (state, action) => {
      state.isSendingData = action.payload;
    },

    showNotification: (state, action) => {
      const { variant, message } = action.payload;
      enqueueSnackbar(message, {
        variant: variant,
        TransitionComponent: Zoom,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSendingData, showNotification } = GlobalState.actions;

export default GlobalState.reducer;
