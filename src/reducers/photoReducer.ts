/**
 * This module contains the Redux reducer for the photo state.
 */

import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";
import { Photo } from "../types";

export interface PhotoState {
  /**
   * An array of Photo objects representing the photos in the state.
   */
  data: Photo[];
  /**
   * A boolean indicating whether the state is currently being loaded.
   */
  loading: boolean;
  /**
   * A string representing the error message if an error occurred while loading the state.
   */
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
