import React from "react";
import { useSelector } from "react-redux";

export function SlideHeader() {
  const selected = useSelector(state => state.sliderState);
  return (
    <div>
      <button onClick={e => console.log(selected)}></button>
      <button>예매순</button>
      <button>현재상영작</button>
      <button>개봉예정작</button>
      <button>평점순</button>
      <button>박스오피스</button>
      <button>다운로드순</button>
    </div>
  );
}
