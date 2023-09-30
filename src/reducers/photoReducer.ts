import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPhotosRequest: (state) => {
      state.loading = true;
    },
    fetchPhotosSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchPhotosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } =
  photoSlice.actions;
export default photoSlice.reducer;
