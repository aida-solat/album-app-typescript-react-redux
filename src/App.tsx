import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAlbumsByUserId } from "./utils";
import { fetchAlbumsRequest } from "./actions/albumActions";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data: albums } = useSelector((state: any) => state.albums);

  const [userId, setUserId] = useState<number | "">(""); // State for filtering albums by user

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserId(value === "" ? "" : Number(value));
  };

  const filteredAlbums =
    userId === "" ? albums : filterAlbumsByUserId(albums, userId);

  return (
    <div>
      <h1>Albums</h1>
      <div>
        <input
          type='number'
          placeholder='Filter by User ID'
          value={userId}
          onChange={handleFilterChange}
        />
        <button onClick={() => dispatch(fetchAlbumsRequest())}>
          Fetch Albums
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Album ID</th>
            <th>Title</th>
            <th>View Photos</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlbums.map((album: any) => (
            <tr key={album.id}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>
                <Link to={`/album/${album.id}`}>View Photos</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
