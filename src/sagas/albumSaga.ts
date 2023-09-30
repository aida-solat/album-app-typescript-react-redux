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
