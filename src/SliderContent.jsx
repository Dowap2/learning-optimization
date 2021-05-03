import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ContentComponent } from "./ContentComponent";

export function SliderContent() {
  const contentKey = useSelector(state => state.slideState.slideState);
  const [url, setUrl] = useState("");
  const changeImg = useCallback(() => {
    switch (contentKey) {
      case "예매순":
        setUrl("https://pbs.twimg.com/media/ExUElF7VcAMx7jx.jpg");
        break;
      case "현재상영작":
        setUrl("https://pbs.twimg.com/media/ExUElF7VcAMx7jx.jpg");
        break;
      default:
        break;
    }
  }, [contentKey]);
  return (
    <div>
      <ContentComponent value={contentKey} img={url} />
      <button onClick={e => console.log(contentKey)}></button>
      <button>prev</button>
      <button>next</button>
    </div>
  );
}
