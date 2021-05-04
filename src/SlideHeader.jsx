import React from "react";
import { useSelector } from "react-redux";

export function SlideHeader(props) {
  const selected = useSelector(state => state.slideState);
  return (
    <div>
      <button onClick={e => console.log(selected)}></button>
      <button onClick={e => props.onChange(1)}>예매순</button>
      <button onClick={e => props.onChange(2)}>현재상영작</button>
      <button onClick={e => props.onChange(3)}>개봉예정작</button>
      <button onClick={e => props.onChange(4)}>평점순</button>
      <button onClick={e => props.onChange(5)}>박스오피스</button>
      <button onClick={e => props.onChange(6)}>다운로드순</button>
    </div>
  );
}
