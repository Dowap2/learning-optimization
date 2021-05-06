import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 400px;
  height: 400px;
`;
const ImgBox = styled.div`
  height: 400px;
  overflow-x: hidden;
`;
const ImgList = styled.div`
  width: 2000px;
  height: 400px;
  transform: ${props => props.transform};
  transition: 2s;
`;
const Img = styled.img`
  width: 400px;
  height: 400px;
  display: table;
  float: left;
`;

export function ContentComponent(props) {
  const index = useSelector(state => state.slideState.slideState);
  const transform = `translate3d(-${(index % 6) * 400}px, 0, 0);`;
  return (
    <div>
      <ContentBox>
        <ImgBox>
          <ImgList transform={transform}>
            <Img
              src={"https://pbs.twimg.com/media/ExUElF7VcAMx7jx.jpg"}
              alt="img"
            />
            <Img
              src={
                "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg"
              }
              alt="img"
            />
            <Img
              src={
                "https://pds.joins.com/news/component/htmlphoto_mmdata/202103/30/0d115e5d-a4fe-4ff8-9689-6b77a730d19d.jpg"
              }
              alt="img"
            />
            <Img
              src={
                "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjlfMjA3/MDAxNTc0OTc2Nzg1MzMy.WJhzcrbtitmAgLJDtqwebCR1hDQbxcQUPvAvdxpk5O8g.vCs9wsVGbokP2KX1LUkr4hXoeEkRZYTzGkSGmFNeZ7og.JPEG.pomon64/iumini5mvkbk_201.jpg?type=w800"
              }
              alt="img"
            />
            <Img
              src={
                "http://www.newsfreezone.co.kr/news/photo/202011/277190_272039_1050.jpg"
              }
              alt="img"
            />
            <Img
              src={
                "https://blog.kakaocdn.net/dn/bjoIyf/btq0NvekYvN/4alKdCqujcJjSf10JjDAy0/img.jpg"
              }
              alt="img"
            />
          </ImgList>
        </ImgBox>
      </ContentBox>
    </div>
  );
}
