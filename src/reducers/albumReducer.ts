import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchAlbumsRequest: (state) => {
      state.loading = true;
    },
    fetchAlbumsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchAlbumsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAlbumsRequest, fetchAlbumsSuccess, fetchAlbumsFailure } =
  albumSlice.actions;
export default albumSlice.reducer;
