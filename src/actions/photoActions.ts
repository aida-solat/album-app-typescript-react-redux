import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from "../constants/actionTypes";

export const fetchPhotosRequest = (albumId: number) => ({
  type: FETCH_PHOTOS_REQUEST,
  payload: albumId,
});

export const fetchPhotosSuccess = (data: any) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data,
});

export const fetchPhotosFailure = (error: any) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});
