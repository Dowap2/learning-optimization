import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ImageBox = styled.img`
  width: ${props => `${props.width || 500}px`};
  height: ${props => `${props.height || 500}px`};
  background-image: ${props => `url(${props.url})`};
  border-radius: 5px;
  display: block;
`;

export function LazyloadComponent(props) {
  const [url, setUrl] = useState();
  axios.get("https://source.unsplash.com/random").then(function(res) {
    console.log(res.config.url);
    setUrl(res.config.url);
  });
  return (
    <div>
      <ImageBox url={url} loading="lazy" />
      <ImageBox url={url} loading="lazy" />
      <ImageBox url={url} loading="lazy" />
      <ImageBox url={url} loading="lazy" />
      <ImageBox url={url} loading="lazy" />
      <ImageBox url={url} loading="lazy" />
    </div>
  );
}
