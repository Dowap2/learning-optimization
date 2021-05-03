import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ContentComponent } from "./ContentComponent";

export function SliderContent() {
  const key = useSelector(state => state.sliderState);
  const [content, setContent] = useState("");

  switch (key) {
    case "예매순":
      console.log(1);
      setContent("예매순");
      break;
    case "현재상영작":
      setContent("현재상영작");
      break;
    default:
      console.log(2);
      break;
  }

  return (
    <div>
      <ContentComponent content={content} />
      <button>prev</button>
      <button>next</button>
    </div>
  );
}
