import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import albumsReducer from "./albumsSlice";
import photosReducer from "./photosSlice";
import { watchFetchAlbums } from "../sagas/albumsSaga";
import { watchFetchPhotos } from "../sagas/photosSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    albums: albumsReducer,
    photos: photosReducer,
  },
  middleware: [thunk, sagaMiddleware],
});

sagaMiddleware.run(watchFetchAlbums);
sagaMiddleware.run(watchFetchPhotos);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
