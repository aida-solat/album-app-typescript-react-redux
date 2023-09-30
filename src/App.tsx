import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Album from "./components/Albums";
import Photo from "./components/Photos";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Album />} />
        <Route path='/album/:albumId' element={<Photo />} />
      </Routes>
    </Router>
  );
};

export default App;
