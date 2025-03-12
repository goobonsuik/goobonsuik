import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
// import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player/vimeo'
// import ReactPlayer from 'react-player/lazy'
import Vimeo from "@u-wave/react-vimeo";
import data from "/public/data/data.json";

import styled from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import media from "../styles/media.jsx";

const GridWrap = styled(S.GridWrap)`
gap: 50px 10px;
`
const GridItem = styled(S.GridItem)`
  width: 428px;
  // border: 1px solid #ddd;

  ${media.mbl`
  // border:3px solid #00f;

  `}
  ${media.tab`
  // border:3px solid #0f0;

  `}
  ${media.desk`
      // border:3px solid #f00;
  `}
`;

function Project() {
  console.log(data.project[0].url);
  return (
    <S.Wrap>
      <GridWrap>
        {data.project.map((item, idx) => {
          return (
            <GridItem key={idx}>
              <Vimeo
                video={item.url}
                autoplay={true}
                volume="0.1"
                // background="true"
                // controls="true"
              />
            </GridItem>
          );
        })}
      </GridWrap>
    </S.Wrap>
  );
}

export default Project;
