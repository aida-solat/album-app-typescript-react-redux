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

  const filteredPhotos = photos.filter(
    (photo: any) => photo.albumId === Number(albumId)
  );

  return (
    <div>
      <h1>Photos for Album {albumId}</h1>
      <div className='grid grid-cols-3 gap-4'>
        {filteredPhotos.map((photo: any) => (
          <div key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
