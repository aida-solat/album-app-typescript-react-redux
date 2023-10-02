import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosRequest } from "../actions/photoActions";

const PhotoGrid: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const dispatch = useDispatch();
  const {
    data: photos,
    loading,
    error,
  } = useSelector((state: any) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotosRequest(Number(albumId)));
  }, [dispatch, albumId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold mb-4'>Photos For Album {albumId}</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {photos.map((photo: any) => (
          <div
            key={photo.id}
            className='bg-white rounded-lg overflow-hidden shadow-md'
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-lg font-bold mb-2'>{photo.title}</h2>
              <p className='text-gray-700'>{photo.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
