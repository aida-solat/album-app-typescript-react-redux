// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Photos from "./components/Photos";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/albums' element={<Albums />} />
        <Route path='/albums/:albumId/photos' element={<Photos />} />
      </Routes>
    </Router>
  );
};

export default App;
