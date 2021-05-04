import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContentComponent } from "./ContentComponent";
import { ContentButtonContainer } from "./ContentButtonContainer";

export function SliderContent() {
  const index = useSelector(state => state.slideState.slideState);
  const [url, setUrl] = useState("");
  const changeImg = useEffect(() => {
    const contentKey = index < 0 ? (index * -1) % 6 : index % 6;
    switch (contentKey) {
      case 0:
        setUrl("https://pbs.twimg.com/media/ExUElF7VcAMx7jx.jpg");
        break;
      case 1:
        setUrl(
          "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg"
        );
        break;
      case 2:
        setUrl(
          "https://pds.joins.com/news/component/htmlphoto_mmdata/202103/30/0d115e5d-a4fe-4ff8-9689-6b77a730d19d.jpg"
        );
        break;
      case 3:
        setUrl(
          "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjlfMjA3/MDAxNTc0OTc2Nzg1MzMy.WJhzcrbtitmAgLJDtqwebCR1hDQbxcQUPvAvdxpk5O8g.vCs9wsVGbokP2KX1LUkr4hXoeEkRZYTzGkSGmFNeZ7og.JPEG.pomon64/iumini5mvkbk_201.jpg?type=w800"
        );
        break;
      case 4: {
        setUrl(
          "http://www.newsfreezone.co.kr/news/photo/202011/277190_272039_1050.jpg"
        );
        break;
      }
      case 5:
        setUrl(
          "https://blog.kakaocdn.net/dn/bjoIyf/btq0NvekYvN/4alKdCqujcJjSf10JjDAy0/img.jpg"
        );
        break;
      default:
        setUrl(
          "https://img2.sbs.co.kr/img/sbs_cms/WE/2019/08/09/WE97496996_ori.jpg"
        );
        break;
    }
  }, [index]);
  return (
    <div>
      <ContentComponent value={index} img={url} />
      <ContentButtonContainer />
    </div>
  );
}
