import React, {useState} from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
// import data from '/public/data/data.json';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

const NavWrap = styled.div`

`
const Icon = styled.div`
  width: 260px; ;
  height: 260px;
  border: 1px solid #ddd;
  background-image: url('/images/logo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
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


  const navList = [
    ['도우너','내 소개','/'],
    ['포트폴리오','작업영상물','/project'],
    ['그림','그린그림','/painting']
  ];

  const [isHover, setHover] = useState(0);

  return (
    <NavWrap>
      <Icon onClick={()=>{navigate('/')}}></Icon>

      <ul>
        {/* <li onClick={()=>{navigate('/')}}>도우너</li>
        <li onClick={()=>{navigate('/project')}}>포트폴리오</li> 
        <li onClick={()=>{navigate('/painting')}}>그림</li> */}
        {
          navList.map((item,idx) => (
            <li 
              key={idx}
              onMouseEnter={()=>{
                setHover(1);
              }}
              onMouseLeave={()=>{
                setHover(0);
              }}
              onClick={()=>{navigate(item[2])}}
            >
              {item[isHover]}
            </li>
          ))
        }
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