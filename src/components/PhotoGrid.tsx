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
    <div>
      <h1>Photos for Album {albumId}</h1>
      <div className='grid grid-cols-3 gap-4'>
        {photos.map((photo: any) => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
