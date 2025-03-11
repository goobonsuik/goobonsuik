import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
// import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player/vimeo'
// import ReactPlayer from 'react-player/lazy'
import Vimeo from '@u-wave/react-vimeo';
import data from '/public/data/data.json';



import styled from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

const GridItem = styled(S.GridItem)`
  border: 1px solid #ddd;
`

function Project(){
  console.log(data.project[0].url);
  return (
    <S.Wrap>
      <S.Block>
        <S.Box>
          작업에 썼던 bg와 더빙들은 혹여나 저작권으로 인해서 유튜브 무료 bg로<br/>영상속도는 전반적으로 조금 빠르게 해서 편집되었어요~
        </S.Box>
        <S.Gif wid={'200px'} hei={'200px'}></S.Gif>
      </S.Block>

      <S.GridWrap>
        
        {/* <GridItem>
          <ReactPlayer url='https://vimeo.com/1058476319' onReady playIcon={true}/>
        </GridItem> */}
        <GridItem>
          <Vimeo
            video="1058476319"
            autoplay={true}
            volume="0.1"
            // background="true"
            // controls="true"
          />
        </GridItem>
        <GridItem>
          <Vimeo
            video="1058476352"
            volume="0.1"
            // background="true"
            // controls="true"
          />
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </S.GridWrap>
    </S.Wrap>
  )
};

export default Project;