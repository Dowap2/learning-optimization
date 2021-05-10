import React from "react";
import { Link } from "react-router-dom";

export function AppHeader(props) {
  return (
    <div>
      <div>
        <Link to="/todo">TodoList</Link>
      </div>
      <div>
        <Link to="/class">ClassComponent</Link>
      </div>
      <div>
        <Link to="/slider">Slider</Link>
      </div>
      <div>
        <input
          type="number"
          value={props.id}
          onChange={e => props.setId(e.target.value)}
        />
        <Link to={`/${props.id}`}>{props.id}</Link>
      </div>
    </div>
  );
}
