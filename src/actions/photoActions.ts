import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from "../constants/actionTypes";

export const fetchPhotosRequest = createAction<number>(FETCH_PHOTOS_REQUEST);
export const fetchPhotosSuccess = createAction(FETCH_PHOTOS_SUCCESS);
export const fetchPhotosFailure = createAction(FETCH_PHOTOS_FAILURE);
