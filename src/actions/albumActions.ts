/**
 * This file contains actions related to fetching albums.
 * @packageDocumentation
 */

import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from "../constants/actionTypes";

/**
 * Action creator for fetching albums request.
 */
export const fetchAlbumsRequest = createAction(FETCH_ALBUMS_REQUEST);

/**
 * Action creator for fetching albums success.
 */
export const fetchAlbumsSuccess = createAction(FETCH_ALBUMS_SUCCESS);

/**
 * Action creator for fetching albums failure.
 */
export const fetchAlbumsFailure = createAction(FETCH_ALBUMS_FAILURE);
