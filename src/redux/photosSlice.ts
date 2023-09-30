import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const initialState: Photo[] = [];

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      return action.payload;
    },
  },
});

export const { setPhotos } = photosSlice.actions;
export default photosSlice.reducer;
