import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setAlbums } from "../redux/albumsSlice";

const Albums: React.FC = () => {
  const albums = useSelector((state: RootState) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAlbums);
  }, [dispatch]);

  return (
    <div>
      {albums.map((album: any) => {
        return (
          <div key={album.id}>
            <h2>{album.title}</h2>
            <p>{album.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
