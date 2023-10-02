import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsRequest } from "../actions/albumActions";
import { Album } from "../types";
import { Link } from "react-router-dom";

interface Props {
  albums: Album[];
}

const AlbumTable: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const {
    data: albums,
    loading,
    error,
  } = useSelector((state: any) => state.albums);

  useEffect(() => {
    dispatch(fetchAlbumsRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table className='  '>
      <thead className=''>
        <tr className=''>
          <th>ID</th>
          <th>Title</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody className=''>
        {albums.map((album: Album) => (
          <tr key={album.id}>
            <td>{album.id}</td>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
            <td>{album.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlbumTable;
