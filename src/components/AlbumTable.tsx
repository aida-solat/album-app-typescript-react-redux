import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsRequest } from "../actions/albumActions";
import { Link } from "react-router-dom";

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
    <div className='relative overflow-x-auto'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold mb-4'>Albums</h1>
        <div className='mb-4 flex items-center  '>
          <label htmlFor='userIdFilter' className='mr-4'>
            Filter by User:
          </label>
          <select
            id='userIdFilter'
            name='userIdFilter'
            value={userId || ""}
            onChange={handleFilterChange}
            className='border border-gray-400 rounded px-2 py-1'
          >
            <option value=''>All</option>
            {Array.from(Array(10).keys()).map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className='table-auto border-collapse border border-gray-400'>
        <thead>
          <tr>
            <th className='border border-gray-400 px-4 py-2'>Album ID</th>
            <th className='border border-gray-400 px-4 py-2'>Album Title</th>
            <th className='border border-gray-400 px-4 py-2'>User ID</th>
            <th className='border border-gray-400 px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-400'>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {filteredAlbums.map((album: any) => (
            <tr key={album.id}>
              <td className='border border-gray-400 px-4 py-2 text-center'>
                {album.id}
              </td>
              <td className='border border-gray-400 px-4 py-2'>
                {album.title}
              </td>
              <td className='border border-gray-400 px-4 py-2 text-center'>
                {album.userId}
              </td>

              <td className='border border-gray-400 px-4 py-2 text-center'>
                <a
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                  href={`/album/${album.id}`}
                >
                  View Photos
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumTable;
