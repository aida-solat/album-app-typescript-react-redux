// src/components/Photos.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setPhotos } from "../redux/photosSlice";

const Photos: React.FC = () => {
  const photos = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch photos based on albumId
    dispatch(setPhotos);
  }, [dispatch]);

  return (
    <div>
      {photos.map((photo: any) => {
        return (
          <div key={photo.id}>
            <h2>{photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.thumbnailUrl}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
