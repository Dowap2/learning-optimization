import React from "react";
import styled from "styled-components";
import gm from "gm";
import sample from "./img/sample.jpeg";

const ImageBox = styled.div`
  width: ${props => `${props.width || 500}px`};
  height: ${props => `${props.height || 500}px`};
  background-image: ${props => `url(${props.url})`};
  border-radius: 5px;
`;

export function LazyloadComponent(props) {
  gm("./img/sample.jpeg")
    .resize(500, 500)
    .colors(1);
  return (
    <div>
      <ImageBox url={sample} />
    </div>
  );
}
