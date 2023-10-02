import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";
import { FETCH_PHOTOS_REQUEST } from "../constants/actionTypes";
import { fetchPhotos } from "../services/api";

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

export function* watchFetchPhotos() {
  yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotosSaga);
}

export default function* photoSaga() {
  yield all([watchFetchPhotos()]);
}
