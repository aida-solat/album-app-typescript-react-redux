import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import { setPhotos, Photo } from "../redux/photosSlice";

function* fetchPhotos(action: any) {
  const { albumId } = action.payload;
  try {
    const response: Photo[] = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    yield put(setPhotos(response));
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

export function* watchFetchPhotos() {
  yield takeLatest("photos/fetchPhotos", fetchPhotos);
}
