import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from './pages/Main.js';
import Introduce from './pages/Introduce.js/index.js'; 
import Project from './pages/Project.js/index.js';
import Painting from './pages/Painting.js/index.js';

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
