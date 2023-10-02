/**
 * This module contains Redux actions related to photos.
 * @packageDocumentation
 */

import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from "../constants/actionTypes";

/**
 * Action creator that triggers the fetching of photos from the server.
 * @param {number} albumId - The ID of the album to fetch photos from.
 * @returns {PayloadAction<number>} - The Redux action with the album ID as payload.
 */
export const fetchPhotosRequest = createAction<number>(FETCH_PHOTOS_REQUEST);

/**
 * Action creator that triggers the success of fetching photos from the server.
 * @returns {PayloadAction<void>} - The Redux action with no payload.
 */
export const fetchPhotosSuccess = createAction(FETCH_PHOTOS_SUCCESS);

/**
 * Action creator that triggers the failure of fetching photos from the server.
 * @returns {PayloadAction<void>} - The Redux action with no payload.
 */
export const fetchPhotosFailure = createAction(FETCH_PHOTOS_FAILURE);
