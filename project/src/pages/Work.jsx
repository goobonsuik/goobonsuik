import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import Project from "./Project.jsx";
import Painting from "./Painting.jsx";

const Work = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li
          onClick={() => {
            navigate("/project");
          }}
        >
          project
        </li>
        <li
          onClick={() => {
            navigate("/painting");
          }}
        >
          painting
        </li>
      </ul>
      <Routes>
        <Route path="project" element={<Project />} />
        <Route path="painting" element={<Painting />} />
      </Routes>
    </>
  );
};

export default Work;
