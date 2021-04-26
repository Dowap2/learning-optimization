import React, { useState } from "react";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const setListFunc = () => {
    setList(list.concat(todo));
    setTodo("");
  };
  return (
    <div>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={e => setListFunc()}></button>
      {list}
    </div>
  );
}
