import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumPage from "./screens/AlbumPage";
import PhotoPage from "./screens/PhotoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/album/:albumId/*' element={<PhotoPage />} />
        <Route path='/album/*' element={<AlbumPage />} />
      </Routes>
    </Router>
  );
};

export default App;
