import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const Wrap = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 3px solid #eee;
  width: 100%;
  height: 100px;
`;
const TopBtn = styled.div`
  border: 1px solid #ddd;
  width: 50px;
  height: 50px;
  text-align: center;
  align-content: center;
`;

function Footer() {
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
        <S.FlexBox>
          <p>Follow me :</p>
          <span>instagram</span>
        </S.FlexBox>
        <TopBtn>top</TopBtn>
      </Inner>
    </Wrap>
  );
}

export default Footer;
