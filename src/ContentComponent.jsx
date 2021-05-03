import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 100px;
  height: 500px;
`;
const ImgBox = styled.img`
  width: 100px;
  height: 100px;
`;

export function ContentComponent(props) {
  return (
    <ContentBox>
      {props.value}
      <ImgBox src={props.img} alt="img" />
      <button onClick={e => console.log(props.value)}></button>
    </ContentBox>
  );
}
