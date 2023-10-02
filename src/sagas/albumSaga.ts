/**
 * This file contains the albumSaga which is responsible for handling the side effects related to album actions.
 * It exports a watcher function that listens for FETCH_ALBUMS_REQUEST action and triggers fetchAlbumsSaga.
 * fetchAlbumsSaga is a generator function that fetches albums from the API and dispatches the appropriate action based on the response.
 * If the response is successful, it dispatches fetchAlbumsSuccess action with the response data.
 * If the response fails, it dispatches fetchAlbumsFailure action with the error message.
 * @packageDocumentation
 */
import { put, takeLatest, all } from "redux-saga/effects";
import {
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} from "../actions/albumActions";
import { FETCH_ALBUMS_REQUEST } from "../constants/actionTypes";
import { fetchAlbums } from "../services/api";

function* fetchAlbumsSaga(): Generator<any, void, any> {
  try {
    const response = yield fetchAlbums();
    yield put(fetchAlbumsSuccess(response));
  } catch (e: any) {
    yield put(fetchAlbumsFailure(e.message));
  }
}

export function* watchFetchAlbums() {
  yield takeLatest(FETCH_ALBUMS_REQUEST, fetchAlbumsSaga);
}

export default function* albumSaga() {
  yield all([watchFetchAlbums()]);
}
