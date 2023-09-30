import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setAlbums } from "../redux/albumsSlice";
import { Link } from "react-router-dom";

const Albums: React.FC = () => {
  const albums = useSelector((state: RootState) => state.albums);
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(setAlbums);
  }, [dispatch]);

  const filteredAlbums = selectedUserId
    ? albums.filter((album) => album.userId === selectedUserId)
    : albums;

  const uniqueUserIds = Array.from(
    new Set(albums.map((album) => album.userId))
  );

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Albums</h1>
      <div className='mb-4'>
        Filter by User ID:{" "}
        <select
          onChange={(e) => setSelectedUserId(Number(e.target.value))}
          value={selectedUserId || ""}
        >
          <option value=''>All</option>
          {/* Map through unique user IDs in the albums data */}
          {uniqueUserIds.map((userId) => (
            <option key={userId} value={userId}>
              {userId}
            </option>
          ))}
        </select>
      </div>
      <table className='min-w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>User ID</th>
            <th className='px-4 py-2'>ID</th>
            <th className='px-4 py-2'>Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlbums.map((album) => (
            <tr key={album.id}>
              <td className='px-4 py-2'>{album.userId}</td>
              <td className='px-4 py-2'>{album.id}</td>
              <td className='px-4 py-2'>
                {/* Add a Link to the Photo page with the album ID */}
                <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Albums;
