import React, { useCallback, useState, useMemo } from "react";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [listLength, setListLength] = useState(0);

  const setListFunc = () => {
    setList(list.concat(todo));
    setTodo("");
  };

  const checkListLength = useMemo(() => {
    setListLength(list.length);
  }, [list]);
  return (
    <div>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={e => setListFunc()}></button>
      <div>{list}</div>
      <div>{"todo수 :" + listLength}</div>
    </div>
  );
}
