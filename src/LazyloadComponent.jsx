/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import sample from "./img/sample.jpeg";

const ImageBox = styled.img`
  width: ${props => `${props.width || 500}px`};
  height: ${props => `${props.height || 500}px`};
  background-image: ${props => `url(${props.url})`};
  border-radius: 5px;
  display: block;
`;

export function LazyloadComponent(props) {
  const url = [
    "https://file2.nocutnews.co.kr/newsroom/image/2021/03/25/202103251659468108_0.jpg",
    "http://image.kmib.co.kr/online_image/2019/1021/611816110013840516_1.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F999667425D61EE5F31897A",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F9995F7425D61EE5F311583",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99958C425D61EE5F31C905",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F9996C0425D61EE6030DB06",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F99965F425D61EE6031A996",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F999714425D61EE6031FCC9",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F999595425D61EE6031EB71",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F9997E6425D61EE61316AE2",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F999728425D61EE6131F5CD",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F99FAAC4D5D61EE612EAD98"
  ];
  return (
    <div>
      <ImageBox url={url[0]} loading="lazy" />
      <ImageBox url={url[1]} loading="lazy" />
      <ImageBox url={url[2]} loading="lazy" />
      <ImageBox url={url[3]} loading="lazy" />
      <ImageBox url={url[4]} loading="lazy" />
      <ImageBox url={url[5]} loading="lazy" />
      <ImageBox url={url[6]} loading="lazy" />
      <ImageBox url={url[7]} loading="lazy" />
      <ImageBox url={url[8]} loading="lazy" />
      <ImageBox url={url[9]} loading="lazy" />
    </div>
  );
}
