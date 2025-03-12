import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const NavWrap = styled.div``;
const Icon = styled.div`
  width: 260px;
  height: 260px;
  border: 1px solid #ddd;
  // background-image: url('/images/logo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const NavContainer = styled.ul``;
const NavItem = styled.li`
  margin-bottom: 50px;
`;

const Insta = styled.p`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  align-content: center;
  align-item: center;
  text-align: center;
`;

function Nav() {
  const navigate = useNavigate();

  const [isHover, setHover] = useState(0);
  const [navHover, setNavHover] = useState(data.nav.map(() => true));

  const navMouseEvt = (idx) => {
    const newHover = [...navHover];
    newHover[idx] = !newHover[idx];
    setNavHover(newHover);
  };

  return (
    <NavWrap>
      <Icon
        onClick={() => {
          navigate("/");
        }}
      ></Icon>
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >About</li>
        <li
          onClick={() => {
            navigate("/work");
          }}
        >Work</li>
      </ul>

      <div>
        <p>
          E-mail. <span>naguchu@naver.com</span>
        </p>
        <p>
          Addr. <span>Gyeonggi, Korea</span>
        </p>
        <Insta></Insta>
      </div>
    </NavWrap>
  );
}

export default Nav;
