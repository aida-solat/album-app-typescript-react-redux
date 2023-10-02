import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumPage from "./screens/AlbumPage";
import PhotoPage from "./screens/PhotoPage";

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/albums/:albumId/*' element={<PhotoPage />} />
        <Route path='/albums/*' element={<AlbumPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
