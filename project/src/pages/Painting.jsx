import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';



const GridItem = styled(S.GridItem)`
  border: 1px solid #ddd;
  min-height: 200px;
`

function Painting(){

  return (
    <S.Wrap>
      <S.GridWrap gridColumns={'repeat(auto-fill, minmax(200px, auto))'}>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </S.GridWrap>
    </S.Wrap>
  )
};

export default Painting;