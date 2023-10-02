import React from "react";
import AlbumTable from "../components/AlbumTable";

const AlbumPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <AlbumTable />
    </div>
  );
};

export default AlbumPage;
