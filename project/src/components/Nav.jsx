import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

const NavWrap = styled.div`

`
const Icon = styled.div`
  width: 260px; 
  height: 260px;
  border: 1px solid #ddd;
  background-image: url('../img/logo.jpg');
`

const Insta = styled.p`
  width: 48px; height: 48px;
  border: 1px solid #ddd;
  align-content: center;
  align-item: center;
  text-align: center;
`
function Nav(){  
  const navigate = useNavigate();


  return (
    <NavWrap>
      <Icon onClick={()=>{navigate('/')}}></Icon>

      <ul>
        <li onClick={()=>{navigate('/')}}>도우너</li>
        <li onClick={()=>{navigate('/project')}}>포트폴리오</li> 
        <li onClick={()=>{navigate('/painting')}}>그림</li>
      </ul>

      <div>
        <p>E-mail. <span>naguchu@naver.com</span></p>
        <p>Addr. <span>Gyeonggi, Korea</span></p>
        <Insta></Insta>
      </div>
    </NavWrap>
  )
};

export default Nav;