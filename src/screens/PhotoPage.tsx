import React from "react";
import PhotoGrid from "../components/PhotoGrid";
import { Link } from "react-router-dom";

const PhotoPage: React.FC = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-4'>Photos</h1>
      <Link to='/' className='mb-4 inline-block'>
        Back to Albums
      </Link>
      <PhotoGrid />
    </div>
  );
};

export default PhotoPage;
