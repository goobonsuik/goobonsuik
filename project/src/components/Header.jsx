import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 80px;
  margin-top: 20px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const Icon = styled.div`
  width: 88px;
  height: 88px;
  background-image: url("/images/logo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`;

const NavContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`;

const NavItem = styled.div``;


function Header() {
  const navigate = useNavigate();

  const [isHover, setHover] = useState(0);
  const [navHover, setNavHover] = useState(data.nav.map(() => true));

  const navMouseEvt = (idx) => {
    const newHover = [...navHover];
    newHover[idx] = !newHover[idx];
    setNavHover(newHover);
  };

  return (
    <Wrap>
      <Inner>
        <Icon
          onClick={() => {
            navigate("/");
          }}
        ></Icon>

        <NavContainer>
          <NavItem
            onClick={() => {
              navigate("/");
            }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => {
              navigate("/work");
            }}
          >
            Work
          </NavItem>
        </NavContainer>

        {/* <div>
        <p>
          E-mail. <span>naguchu@naver.com</span>
        </p>
        <p>
          Addr. <span>Gyeonggi, Korea</span>
        </p>
        <Insta></Insta>
      </div> */}
      </Inner>
    </Wrap>
  );
}

export default Header;
