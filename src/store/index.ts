/**
 *
 * This file exports a Redux store instance that is configured with reducers and middleware.
 *
 * @packageDocumentation
 */

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import albumReducer from "../reducers/albumReducer";
import photoReducer from "../reducers/photoReducer";
import albumSaga from "../sagas/albumSaga";
import photoSaga from "../sagas/photoSaga";

const sagaMiddleware = createSagaMiddleware();

/**
 * The root reducer that combines all reducers used in the store.
 */
export const rootReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer,
});

/**
 * The type of the root state of the store.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * The root saga that combines all sagas used in the store.
 */
function* rootSaga() {
  yield all([albumSaga(), photoSaga()]);
}

/**
 * The Redux store instance that is configured with the root reducer and middleware.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
