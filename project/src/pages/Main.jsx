import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

import Nav from '../components/Nav.jsx';

const MainWrap = styled.div`
  display: flex;
  position: relative;
`

const Section = styled.section`
  width: calc( 100% - 300px );
`

function Main(){

  return (
    <MainWrap>
      <Nav />
      
      <Section>
        <Outlet></Outlet>
      </Section>
    </MainWrap>
  )
};

export default Main;