/**
 * This file contains the photoSaga which is responsible for handling the asynchronous logic related to fetching photos.
 * @packageDocumentation
 */

import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";
import { FETCH_PHOTOS_REQUEST } from "../constants/actionTypes";
import { fetchPhotos } from "../services/api";

/**
 * A generator function that fetches photos from the API and dispatches the success or failure action based on the response.
 * @generator
 * @param {Object} action - An object containing the action type and payload.
 * @param {string} action.type - The action type.
 * @param {number} action.payload - The album ID for which photos are to be fetched.
 * @yields {Object} - The response object from the API call.
 * @throws {Error} - An error occurred while fetching photos.
 */
function* fetchPhotosSaga(action: {
  type: string;
  payload: number;
}): Generator<any, void, any> {
  try {
    const response = yield call(fetchPhotos, action.payload);
    yield put(fetchPhotosSuccess(response));
  } catch (error: any) {
    yield put(fetchPhotosFailure(error.message));
  }
}

/**
 * A watcher function that listens for FETCH_PHOTOS_REQUEST action and calls the fetchPhotosSaga.
 * @generator
 * @yields {Object} - The latest FETCH_PHOTOS_REQUEST action.
 */
export function* watchFetchPhotos() {
  yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotosSaga);
}

/**
 * The root saga function that combines all the sagas related to photos.
 * @generator
 * @yields {Object} - The combined saga function.
 */
export default function* photoSaga() {
  yield all([watchFetchPhotos()]);
}
