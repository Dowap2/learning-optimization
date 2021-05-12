import React from "react";
import { useSelector } from "react-redux";

export function ContentButtonComponent(props) {
  const index = useSelector(state => state.slideState.slideState);
  return (
    <div>
      <button onClick={e => props.prevFunc(index - 1)}>prev</button>
      <button onClick={e => props.nextFunc(index + 1)}>next</button>
    </div>
  );
}
