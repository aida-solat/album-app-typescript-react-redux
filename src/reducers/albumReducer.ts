import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} from "../actions/albumActions";
import { Album } from "../types";

interface AlbumState {
  data: Album[];
  loading: boolean;
  error: string | null;
}

const initialState: AlbumState = {
  data: [],
  loading: false,
  error: null,
};

const albumReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAlbumsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAlbumsSuccess, (state, action) => {
      state.loading = false;
      if (action.payload) state.data = action.payload;
    })
    .addCase(fetchAlbumsFailure, (state, action) => {
      state.loading = false;
      if (action.payload) state.error = action.payload;
    });
});

export default albumReducer;
