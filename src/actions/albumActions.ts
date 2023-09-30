import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from "../constants/actionTypes";

export const fetchAlbumsRequest = createAction(FETCH_ALBUMS_REQUEST);
export const fetchAlbumsSuccess = createAction(FETCH_ALBUMS_SUCCESS);
export const fetchAlbumsFailure = createAction(FETCH_ALBUMS_FAILURE);
