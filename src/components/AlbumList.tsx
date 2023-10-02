import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsRequest } from "../actions/albumActions";
import { Album } from "../types";
import AlbumTable from "./AlbumTable";

const AlbumList = () => {
  const dispatch = useDispatch();
  const {
    data: albums,
    loading,
    error,
  } = useSelector((state: any) => state.albums);
  const [userId, setUserId] = useState<number | "">("");

  useEffect(() => {
    dispatch(fetchAlbumsRequest());
  }, [dispatch]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUserId = event.target.value ? Number(event.target.value) : "";
    setUserId(newUserId);
  };

  const filteredAlbums =
    userId === ""
      ? albums
      : albums.filter((album: Album) => album.userId === userId);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-4'>Albums</h1>
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
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <AlbumTable albums={filteredAlbums} />
    </div>
  );
};

export default AlbumList;
