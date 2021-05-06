import React from "react";
import { useSelector } from "react-redux";

export function SlideHeader(props) {
  const selected = useSelector(state => state.slideState);
  return (
    <div>
      <button onClick={e => console.log(selected)}></button>
      <button onClick={e => props.onChange(600)}>예매순</button>
      <button onClick={e => props.onChange(601)}>현재상영작</button>
      <button onClick={e => props.onChange(602)}>개봉예정작</button>
      <button onClick={e => props.onChange(603)}>평점순</button>
      <button onClick={e => props.onChange(604)}>박스오피스</button>
      <button onClick={e => props.onChange(605)}>다운로드순</button>
    </div>
  );
}
