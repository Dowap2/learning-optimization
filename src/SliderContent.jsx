import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContentComponent } from "./ContentComponent";
import { ContentButtonContainer } from "./ContentButtonContainer";

export function SliderContent() {
  const contentKey = useSelector(state => state.slideState.slideState);
  const [url, setUrl] = useState("");
  const changeImg = useEffect(() => {
    switch (contentKey % 6) {
      case 1:
        setUrl("https://pbs.twimg.com/media/ExUElF7VcAMx7jx.jpg");
        break;
      case 2:
        setUrl(
          "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg"
        );
        break;
      default:
        setUrl(
          "https://img2.sbs.co.kr/img/sbs_cms/WE/2019/08/09/WE97496996_ori.jpg"
        );
        break;
    }
  }, [contentKey]);
  return (
    <div>
      <ContentComponent value={contentKey} img={url} />
      <ContentButtonContainer />
    </div>
  );
}
