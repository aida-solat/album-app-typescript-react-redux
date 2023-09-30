import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} from "../actions/albumActions";

function* fetchAlbums(): Generator<any, any, any> {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/albums"
    );
    yield put(fetchAlbumsSuccess(response.data));
  } catch (error) {
    yield put(fetchAlbumsFailure(error));
  }
}

export function* watchFetchAlbums() {
  yield takeLatest(fetchAlbumsRequest().type, fetchAlbums);
}
