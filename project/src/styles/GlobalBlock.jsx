/* eslint-disable */
import styled from "styled-components";

const Wrap = styled.div``;

const Block = styled.div`
  display: flex;
`;
const Box = styled.div``;

const GridWrap = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.$gridRows || "minmax(auto, auto)"};
  grid-template-columns: ${(props) => props.$gridColumns || "1fr 1fr"};
  gap: ${(props) => props.$gap || "10px"};
`;

const GridItem = styled.div`
  // border: 1px solid #ddd;
  // width: 100px; height: 100px;
`;

const Gif = styled.div`
  width: ${(props) => props.$wid || "300px"};
  height: ${(props) => props.$hei || "300px"};
  background-image: url(${(props) => props.$bg});
  border: 1px solid #ddd;
`;

const S = {
  Wrap,
  Block,
  Box,
  GridWrap,
  GridItem,
  Gif,
};

export default S;
