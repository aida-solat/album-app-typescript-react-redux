import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";

function* fetchPhotos(action: any): Generator<any, any, any> {
  const albumId = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    yield put(fetchPhotosSuccess(response.data));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}

export function* watchFetchPhotos() {
  yield takeLatest(fetchPhotosRequest().type, fetchPhotos);
}
