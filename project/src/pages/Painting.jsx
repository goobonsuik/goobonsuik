import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock.jsx';
import data from "/public/data/data.json";



const GridItem = styled(S.GridItem)`
  border: 1px solid #ddd;
  min-height: 200px;
  background-image: ${(props) => props.$img};
  background-size: cover;
  background-repeat: no-repeat;
`

function Painting(){
  console.log('paint')
  return (
    <S.Wrap>
      <S.GridWrap $gridColumns={'repeat(auto-fill, minmax(200px, auto))'}>
        {
          data.painting.map((item,idx)=>{
            return (
            <GridItem
              key={idx}
              $img={item.url}
            >
              m
            </GridItem>
          )})
        }
      </S.GridWrap>
    </S.Wrap>
  )
};

export default Painting;