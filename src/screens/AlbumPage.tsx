import React from "react";
import AlbumTable from "../components/AlbumTable";

/**
 * AlbumPage component displays a table of albums.
 * @returns React component
 */
const AlbumPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <AlbumTable />
    </div>
  );
};

export default AlbumPage;
