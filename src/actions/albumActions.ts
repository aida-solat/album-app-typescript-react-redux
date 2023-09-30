import {
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from "../constants/actionTypes";

export const fetchAlbumsRequest = () => ({
  type: FETCH_ALBUMS_REQUEST,
});

export const fetchAlbumsSuccess = (data: any) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: data,
});

export const fetchAlbumsFailure = (error: any) => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: error,
});
