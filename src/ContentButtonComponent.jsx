import React from "react";

export function ContentButtonComponent(props) {
  return (
    <div>
      <button onClick={e => props.prevFunc()}>prev</button>
      <button onClick={e => props.nextFunc()}>next</button>
    </div>
  );
}
