// src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import albumReducer from "../reducers/albumReducer";
import photoReducer from "../reducers/photoReducer";
import albumSaga from "../sagas/albumSaga";
import photoSaga from "../sagas/photoSaga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([albumSaga(), photoSaga()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
