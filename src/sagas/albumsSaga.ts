import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import { setAlbums, Album } from "../redux/albumsSlice";

export function* fetchAlbums() {
  try {
    const response: Album[] = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/albums"
    );
    yield put(setAlbums(response));
  } catch (error) {
    console.error("Error fetching albums:", error);
  }
}

export function* watchFetchAlbums() {
  yield takeLatest("albums/fetchAlbums", fetchAlbums);
}
