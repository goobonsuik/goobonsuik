import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from './pages/Main.jsx';
import Introduce from './pages/Introduce.jsx'; 
import Project from './pages/Project.jsx';
import Painting from './pages/Painting.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Introduce />} />
          <Route path="project" element={<Project />} />
          <Route path="painting" element={<Painting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
