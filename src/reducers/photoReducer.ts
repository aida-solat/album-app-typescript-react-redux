import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";
import { Photo } from "../types";
import { act } from "react-dom/test-utils";

export interface PhotoState {
  data: Photo[];
  loading: boolean;
  error: string | null;
}

const initialState: PhotoState = {
  data: [],
  loading: false,
  error: null,
};

const photoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPhotosRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPhotosSuccess, (state, action) => {
      state.loading = false;
      if (action.payload) state.data = action.payload;
    })
    .addCase(fetchPhotosFailure, (state, action) => {
      state.loading = false;
      if (action.payload) state.error = action.payload;
    });
});

export default photoReducer;
