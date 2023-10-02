import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsRequest } from "../actions/albumActions";

const AlbumTable: React.FC = () => {
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
    <div>
      <h1>Albums</h1>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Album ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album: any) => (
            <tr key={album.id}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>
                <a href={`/album/${album.id}`}>View Photos</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumTable;
