import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import store from "./redux/store";

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

const AppWithStore: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
