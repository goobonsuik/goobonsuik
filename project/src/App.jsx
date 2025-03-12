import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import styled from 'styled-components';
import S from './styles/GlobalBlock.jsx';

import Main from "./pages/Main.jsx";
import Project from "./pages/Project.jsx";
import Painting from "./pages/Painting.jsx";
import Nav from "./components/Nav.jsx";

const Wrap = styled(S.Wrap)`
  display: flex;
`
function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Main />}> */}
          <Route path="/" element={<Main />} />
          <Route path="project" element={<Project />} />
          <Route path="painting" element={<Painting />} />
          {/* </Route> */}
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
