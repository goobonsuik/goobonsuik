import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

// import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

// import Nav from '../components/Nav.jsx';


function Page(){

  return (
    <div>
      main
      <div />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
};

export default Page;