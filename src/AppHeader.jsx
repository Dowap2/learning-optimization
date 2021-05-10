import React from "react";
import { Link } from "react-router-dom";

export function AppHeader() {
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
    </div>
  );
}
