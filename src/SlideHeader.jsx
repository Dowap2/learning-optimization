import React from "react";
import { useSelector } from "react-redux";

export function SlideHeader(props) {
  const selected = useSelector(state => state.slideState);
  return (
    <div>
      <button onClick={e => console.log(selected)}></button>
      <button onClick={e => props.onChange("예매순")}>예매순</button>
      <button onClick={e => props.onChange("현재상영작")}>현재상영작</button>
      <button onClick={e => props.onChange("개봉예정작")}>개봉예정작</button>
      <button onClick={e => props.onChange("평점순")}>평점순</button>
      <button onClick={e => props.onChange("박스오피스")}>박스오피스</button>
      <button onClick={e => props.onChange("다운로드순")}>다운로드순</button>
    </div>
  );
}
