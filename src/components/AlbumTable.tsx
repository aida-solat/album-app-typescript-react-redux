import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsRequest } from "../actions/albumActions";

const AlbumTable: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: albums,
    loading,
    error,
  } = useSelector((state: any) => state.albums);
  const [userId, setUserId] = useState<number | "">("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUserId = event.target.value ? Number(event.target.value) : "";
    setUserId(newUserId);
  };

  const filteredAlbums =
    userId === ""
      ? albums
      : albums.filter((album: any) => album.userId === userId);

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
      <div className='mb-4 flex items-center'>
        <label htmlFor='userIdFilter' className='mr-2'>
          Filter by User:
        </label>
        <select
          id='userIdFilter'
          name='userIdFilter'
          value={userId || ""}
          onChange={handleFilterChange}
          className='border rounded px-2 py-1'
        >
          <option value=''>All</option>
          {Array.from(Array(10).keys()).map((num) => (
            <option key={num} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Album ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {filteredAlbums.map((album: any) => (
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
