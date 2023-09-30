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
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Photos</h1>
      <div className='grid grid-cols-3 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='bg-gray-200 p-4'>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p className='mt-2'>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
