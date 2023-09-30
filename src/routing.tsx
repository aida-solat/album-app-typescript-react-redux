import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumPage from "./screens/AlbumPage";
import PhotoPage from "./screens/PhotoPage";

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AlbumPage />} />
        <Route path='/album/:albumId' element={<PhotoPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
