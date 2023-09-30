import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Album {
  userId: number;
  id: number;
  title: string;
}

const initialState: Album[] = [];

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setAlbums: (state, action: PayloadAction<Album[]>) => {
      return action.payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;
export default albumsSlice.reducer;
