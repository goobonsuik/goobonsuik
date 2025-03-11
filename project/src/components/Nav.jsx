import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

const Icon = styled.div`
  width: 260px; 
  height: 260px;
  border: 1px solid #ddd;
  background-image: url('../img/logo.jpg');
`
function Nav(){

  return (
    <>
      <Icon></Icon>
    </>
  )
};

export default Nav;